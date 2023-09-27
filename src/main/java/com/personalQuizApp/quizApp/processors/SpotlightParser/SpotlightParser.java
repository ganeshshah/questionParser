package com.personalQuizApp.quizApp.processors.SpotlightParser;


import com.personalQuizApp.quizApp.dataObjects.McqCSV;
import com.personalQuizApp.quizApp.enums.Months;
import com.personalQuizApp.quizApp.enums.Subjects;

import java.io.*;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class SpotlightParser {
    public static List<McqCSV> parseText() throws IOException {
        ArrayList<McqCSV> mcqList = new ArrayList<>();

        String fullText = "";
        String generatedOutput = "";
        String processedFileDirectory = "C:\\Users\\Ganesh\\Desktop\\Development\\quizApp\\src\\main\\java\\com\\personalQuizApp\\quizApp\\processedfile";
        String sourceFileName = "C:\\Users\\Ganesh\\Desktop\\Development\\quizApp\\src\\main\\java\\com\\personalQuizApp\\quizApp\\filetoprocess\\spotlight.txt";
        String answerSourceFile = "C:\\Users\\Ganesh\\Desktop\\Development\\quizApp\\src\\main\\java\\com\\personalQuizApp\\quizApp\\filetoprocess\\spotlightanswers.txt";

        // Process answer file
        HashMap<Integer,String> ansKeyMap = new HashMap<>();
        FileReader answerReader = new FileReader(answerSourceFile);
        BufferedReader answerBuffReader = new BufferedReader(answerReader);
        String answerLine = null;
        while ((answerLine = answerBuffReader.readLine()) != null) {
            answerLine = answerLine.trim();
            String[] answerKey = answerLine.split(",");
            ansKeyMap.put(Integer.valueOf(answerKey[0]),answerKey[1]);
        }

        FileReader fr = new FileReader(sourceFileName, StandardCharsets.UTF_8);
        try (BufferedReader buffReader = new BufferedReader(fr)) {
            String strCurrentLine;
            while ((strCurrentLine = buffReader.readLine()) != null) {
                fullText += strCurrentLine + System.lineSeparator();
            }
            // Split the lines
            String[] separatedQuestions;
            separatedQuestions = fullText.split("Q\\.\\d+\\)");

            int no = 0;
            for(String quest : separatedQuestions){
                McqCSV mcqObject = new McqCSV();
                mcqObject.setSubject(String.valueOf(Subjects.SPOTLIGHT));
                mcqObject.setMonth(String.valueOf(Months.AUG));
                mcqObject.setQuestion(quest);
                mcqObject.setCreatedDate(new Date());
                if(no>0){
                    mcqObject.setAnswerKey(ansKeyMap.get(no));
                }
                mcqList.add(mcqObject);
                no++;
            }
            mcqList.remove(0);
            return mcqList;

        } catch (IOException e) {
            throw new RuntimeException(e);
        }

    }

    public static String answerKey(String line) {
        String regex = "Solution: \\[([a-zA-Z])\\]";

        // Create a Pattern object
        Pattern pattern = Pattern.compile(regex);

        // Create a Matcher object to find the pattern in the text
        Matcher matcher = pattern.matcher(line);

        // Check if the pattern is found
        if (matcher.find()) {
            // Extract the character inside the square brackets
            return matcher.group(1);
        } else {
            System.out.println("Pattern not found in the text.");
        }
        return null;
    }
    public static void writeParsedFile(String input, String processedFileDirectory) throws IOException {
        String filePath = processedFileDirectory + "\\output.txt";
        BufferedWriter writer = new BufferedWriter(new FileWriter(filePath));
        StringReader stringReader = new StringReader(input);
        // Create a BufferedReader to read lines from the StringReader
        BufferedReader reader = new BufferedReader(stringReader);
        String line = null;
        while ((line = reader.readLine()) != null) {
            writer.write(line);
            writer.newLine();
        }
    }

}


