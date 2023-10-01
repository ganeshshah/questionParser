package com.personalQuizApp.quizApp.processors.cloudaffairsParser;

import com.personalQuizApp.quizApp.dataObjects.McqCSV;
import com.personalQuizApp.quizApp.enums.Months;
import com.personalQuizApp.quizApp.enums.Subjects;

import java.io.*;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class CloudAffairsParser {
    public static List<McqCSV> parseText(String questionFilePath, String subject, String month) throws IOException {
        HashMap<Integer,HashMap<String,String>> solutionMap = new HashMap<>();
        HashMap<Integer,String> questionMap = new HashMap<>();

        String fullText = "";
        FileReader fr = new FileReader(questionFilePath,StandardCharsets.UTF_8);
        try (BufferedReader buffReader = new BufferedReader(fr)) {
            String strCurrentLine;
            while ((strCurrentLine = buffReader.readLine()) != null) {
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

                    if(line.contains("Answer-")){
                        sol = answerKey(line);
                        while((line = reader.readLine())!=null){
                            if(line.contains("Report Errors in the PDF") || line.trim().isEmpty()){
                                // do nothing
                            }
                            else if(!line.trim().isEmpty()){
                                solExplaination += line + System.lineSeparator();
                            }
                        }
                    }else{
                        if(line.contains("Report Errors in the PDF") || line.trim().isEmpty()){
                            // do nothing
                        }
                        else if(!line.trim().isEmpty()){
                            sanitizedQuestion += line + System.lineSeparator();
                        }
                    }
                }
                solution.put(sol,solExplaination);
                questionMap.put(no,sanitizedQuestion);
                solutionMap.put(no++,solution);
            }
            //printSolutionMap(solutionMap);
            // writeParsedFile(generatedOutput,processedFileDirectory);
            //System.out.println(solutionMap);

            return  getSolutionMap(solutionMap,questionMap, subject, month);

        } catch (IOException e) {
            throw new RuntimeException(e);
        }

    }

    public static String answerKey(String line){
        String regex = "Answer- (\\d+)\\)";

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

    public static ArrayList<McqCSV> getSolutionMap(HashMap<Integer,HashMap<String,String>> solutionMap, HashMap<Integer,String> questionMap, String subject, String month){
        ArrayList<McqCSV> mcqList = new ArrayList<>();
        for (Map.Entry<Integer, HashMap<String, String>> entry : solutionMap.entrySet()) {
            McqCSV mcqObject = new McqCSV();
            mcqObject.setSubject(subject);
            mcqObject.setMonth(month);
            int key = entry.getKey();
            mcqObject.setQuestion(questionMap.get(key));
            HashMap<String, String> inner = entry.getValue();
            for (Map.Entry<String, String> innerEntry : inner.entrySet()) {
                String innerKey = innerEntry.getKey();
                String innerValue = innerEntry.getValue();
                mcqObject.setAnswerKey(innerKey);
                mcqObject.setHint(innerValue);
            }
            mcqList.add(mcqObject);
        }
        mcqList.remove(0);
        return mcqList;
    }


}
