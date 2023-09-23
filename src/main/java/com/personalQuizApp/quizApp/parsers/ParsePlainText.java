package com.personalQuizApp.quizApp.parsers;

import com.personalQuizApp.quizApp.dataObjects.McqCSV;
import com.personalQuizApp.quizApp.enums.Months;
import com.personalQuizApp.quizApp.enums.Subjects;
import com.personalQuizApp.quizApp.services.ParsingController;

import java.io.*;
import java.sql.Date;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class ParsePlainText {
    public static ArrayList<McqCSV> printSolutionMap;
    public static List<McqCSV> parseText() {
        HashMap<Integer,HashMap<String,String>> solutionMap = new HashMap<>();
        HashMap<Integer,String> questionMap = new HashMap<>();

        String fullText = "";
        String generatedOutput = "";
        String processedFileDirectory = "C:\\Users\\Ganesh\\Desktop\\Development\\quizApp\\src\\main\\java\\com\\personalQuizApp\\quizApp\\processedfile";
        try (FileReader fr = new FileReader("C:\\Users\\Ganesh\\Desktop\\Development\\quizApp\\src\\main\\java\\com\\personalQuizApp\\quizApp\\filetoprocess\\PIB_AUGUST_2023.txt");
             BufferedReader objReader = new BufferedReader(fr)) {
            String strCurrentLine;
            while ((strCurrentLine = objReader.readLine()) != null) {
                fullText += strCurrentLine + System.lineSeparator();
            }
            // Split the lines
            String[] separatedQuestions;
            separatedQuestions = fullText.split("Q\\.\\)");

            int no = 0;
            for (String question : separatedQuestions){
                HashMap<String,String> solution =  new HashMap<>();
                String sanitizedQuestion = "";
                question = no + ". " + question.trim();
                question = question.trim();
                StringReader stringReader = new StringReader(question);
                // Create a BufferedReader to read lines from the StringReader
                BufferedReader reader = new BufferedReader(stringReader);
                String line = null;
                String sol = "";
                String solExplaination = "";
                while((line = reader.readLine())!=null){

                   if(line.contains("Solution:")){
                       sol = answerKey(line);
                       while((line = reader.readLine())!=null){
                           solExplaination += line + System.lineSeparator();
                       }
                   }else{
                       sanitizedQuestion += line + System.lineSeparator();
                   }
                }
                solution.put(sol,solExplaination);
                questionMap.put(no,sanitizedQuestion);
                solutionMap.put(no++,solution);
                generatedOutput += sanitizedQuestion;
            }
            //printSolutionMap(solutionMap);
            writeParsedFile(generatedOutput,processedFileDirectory);
            //System.out.println(solutionMap);
            String subject = "PIB";
            printSolutionMap = printSolutionMap(solutionMap,subject,questionMap);
            return printSolutionMap;

        } catch (IOException e) {
            throw new RuntimeException(e);
        }

    }

    public static String answerKey(String line){
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

    public static ArrayList<McqCSV> printSolutionMap(HashMap<Integer,HashMap<String,String>> solutionMap, String subject, HashMap<Integer,String> questionMap){
        ArrayList<McqCSV> mcqList = new ArrayList<>();
        for (Map.Entry<Integer, HashMap<String, String>> entry : solutionMap.entrySet()) {
            McqCSV mcqObject = new McqCSV();
            mcqObject.setSubject(String.valueOf(Subjects.PIB24X7));
            mcqObject.setMonth(String.valueOf(Months.AUG));
            int key = entry.getKey();
            mcqObject.setQuestion(questionMap.get(key));
            HashMap<String, String> inner = entry.getValue();
           // System.out.println("Key: " + key);

            for (Map.Entry<String, String> innerEntry : inner.entrySet()) {
                String innerKey = innerEntry.getKey();
                String innerValue = innerEntry.getValue();
                mcqObject.setAnswerKey(innerKey);
                mcqObject.setHint(innerValue);
                //System.out.println("  Inner Key: " + innerKey + ", Inner Value: " + innerValue);
            }
            mcqList.add(mcqObject);
        }
        System.out.println(mcqList.toString());
        return mcqList;
    }

    public static void writeParsedFile(String input, String processedFileDirectory) throws IOException {
        String filePath = processedFileDirectory + "\\output.txt";
        BufferedWriter writer = new BufferedWriter(new FileWriter(filePath));
        StringReader stringReader = new StringReader(input);
        // Create a BufferedReader to read lines from the StringReader
        BufferedReader reader = new BufferedReader(stringReader);
        String line = null;
        while((line = reader.readLine())!=null){
            writer.write(line);
            writer.newLine();
        }
    }
}


