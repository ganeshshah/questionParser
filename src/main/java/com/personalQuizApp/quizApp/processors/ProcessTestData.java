package com.personalQuizApp.quizApp.processors;
import com.personalQuizApp.quizApp.dataObjects.McqCSV;
import com.personalQuizApp.quizApp.dataObjects.TestData;

import java.util.*;

public class ProcessTestData {
    static HashMap<String,Object> resultMap = new HashMap<>();
    public static HashMap<String,Object> processData(List<TestData> testDatas){
        ArrayList<Integer> questionList = new ArrayList<>();
        ArrayList<Integer> correctQuestionList = new ArrayList<>();
        Integer totalQuestions = 0;
        Integer incorrectQuestions = 0;
        boolean testDateCaught = false;
        Date testDate = null;
        for (TestData testData : testDatas){
            if(!testDateCaught){
                testDate = testData.getTestDate();
            }
            if(testData.getResult() == 0){
                incorrectQuestions++;
                questionList.add(testData.getQuestionId());
            }else{
                correctQuestionList.add(testData.getQuestionId());
            }
            totalQuestions++;
        }
        Integer correctQuestions = totalQuestions - incorrectQuestions;
        resultMap.put("incorrectQuestionsList",questionList);
        resultMap.put("correctQuestionsList",correctQuestionList);
        resultMap.put("incorrectQuestions",incorrectQuestions);
        resultMap.put("correctQuestions",correctQuestions);
        resultMap.put("testDate",testDate);
        return resultMap;
    }

    public static ArrayList<Integer> getQuestionsToUpdateAccuracy(HashMap<String,Object> testData){
        ArrayList<Integer> incorrectQuestions = (ArrayList<Integer>) testData.get("incorrectQuestionsList");
        ArrayList<Integer> correctQuestions = (ArrayList<Integer>) testData.get("correctQuestionsList");
        ArrayList<Integer> allQuestions = new ArrayList<>();
        allQuestions.addAll(incorrectQuestions);
        allQuestions.addAll(correctQuestions);
        return allQuestions;
    }
}
