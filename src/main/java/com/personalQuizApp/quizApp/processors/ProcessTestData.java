package com.personalQuizApp.quizApp.processors;

import com.personalQuizApp.quizApp.dataObjects.McqCSV;
import com.personalQuizApp.quizApp.dataObjects.TestData;
import com.personalQuizApp.quizApp.services.ParsingService;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class ProcessTestData {
    static HashMap<String,Object> resultMap = new HashMap<>();
    public static HashMap<String,Object> processData(List<TestData> testDatas){
        ArrayList<Integer> questionList = new ArrayList<>();
        Integer totalQuestions = 0;
        Integer incorrectQuestions = 0;
        for (TestData testData : testDatas){
            if(testData.getResult() == 0){
                incorrectQuestions++;
                questionList.add(testData.getQuestionId());
            }
            totalQuestions++;
        }
        Integer correctQuestions = totalQuestions - incorrectQuestions;
        resultMap.put("incorrectQuestionsList",questionList);
        resultMap.put("incorrectQuestions",incorrectQuestions);
        resultMap.put("correctQuestions",correctQuestions);
        return resultMap;
    }
}
