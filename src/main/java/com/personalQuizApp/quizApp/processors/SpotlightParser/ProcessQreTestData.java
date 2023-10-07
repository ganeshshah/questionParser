package com.personalQuizApp.quizApp.processors.SpotlightParser;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.personalQuizApp.quizApp.dataObjects.QuantAndReasoning;
import com.personalQuizApp.quizApp.dataObjects.TestData;

import java.util.*;

public class ProcessQreTestData {
    public static HashMap<String,Object> processTestResult(Object testData, List<TestData> datas) {
        HashMap<String,Object> resultantData = new HashMap<>();
        HashMap<String, Object> myTestData =  (HashMap<String, Object>) testData;
        HashSet<Integer> attemptedQuestionIds = new HashSet<>();
        HashSet<Integer> unAttemptedQuestionIds = new HashSet<>();
        HashSet<Integer> correctQuestionIds = new HashSet<>();
        HashSet<Integer> incorrectQuestionIds = new HashSet<>();
        Integer totalQuestionAttempted = datas.size();
        Double totalTimeTaken = (Double) myTestData.get("totalTime");


        List<QuantAndReasoning> totalQuestionFetched = new ArrayList<>();
        ObjectMapper objectMapper = new ObjectMapper();

        // Convert the list of LinkedHashMaps to a list of YourObject
        for (LinkedHashMap<String, Object> map : (ArrayList<LinkedHashMap<String, Object>>)myTestData.get("questions")) {
            QuantAndReasoning question = objectMapper.convertValue(map, QuantAndReasoning.class);
            totalQuestionFetched.add(question);
        }
        Integer totalQuestionsToBeAttempted = totalQuestionFetched.size();
        HashMap<Integer,Integer> questionTimeMap = (HashMap<Integer, Integer>) myTestData.get("questionTimers");
        Integer totalQuestionsUnAttemptedAndUnreviewed = totalQuestionsToBeAttempted - questionTimeMap.size();
        Integer totalQuestionUnattempted = totalQuestionsToBeAttempted - totalQuestionAttempted;





        ArrayList<QuantAndReasoning> questionTiming1 = new ArrayList<>();
        ArrayList<QuantAndReasoning> questionTiming2 = new ArrayList<>();
        ArrayList<QuantAndReasoning> questionTiming3 = new ArrayList<>();
        ArrayList<QuantAndReasoning> questionTiming4 = new ArrayList<>();
        ArrayList<QuantAndReasoning> questionTiming5= new ArrayList<>();
        ArrayList<QuantAndReasoning> questionTimingBeyond5 = new ArrayList<>();

        ArrayList<QuantAndReasoning> questionToBeUpdated = new ArrayList<>();

        Date testDate = datas.get(0).getTestDate();

        for(TestData data : datas){
            attemptedQuestionIds.add(data.getQuestionId());
            if(data.getResult() ==1){
                correctQuestionIds.add(data.getQuestionId());
            }
            else{
                incorrectQuestionIds.add(data.getQuestionId());
            }
        }
        for(QuantAndReasoning question : totalQuestionFetched){
            if(attemptedQuestionIds.contains(question.getId())){
                questionToBeUpdated.add(question);
            }else{
                unAttemptedQuestionIds.add(question.getId());
            }
        }
        for(QuantAndReasoning question : questionToBeUpdated){
            Integer result = 0;
            if(correctQuestionIds.contains(question.getId())){
                result = 1;
                question.setNoOfCorrect(question.getNoOfCorrect()+1);
            }else{
                question.setNoOfIncorrectAttempt(question.getNoOfIncorrectAttempt()+1);
            }
            question.setNoOfAttempt(question.getNoOfAttempt()+1);

            double accuracy = ( question.getNoOfCorrect() * 1.0 / question.getNoOfAttempt() ) * 100;

            question.setAccuracy(accuracy);
            question.setAttemptedDate(testDate);

            // timing calculation
            double averageTime = question.getAverageTime();
            double minTime = question.getMinTime();
            double maxTime  = question.getMaxTime();
            Integer idddd = question.getId();
            double timeTaken = (double) questionTimeMap.get(question.getId().toString()) / 60;
            averageTime = averageTime + (double) timeTaken / question.getNoOfAttempt();
            if(minTime > timeTaken ){
                minTime = timeTaken;
            }
            if(maxTime < timeTaken){
                maxTime = timeTaken;
            }
            question.setMinTime(minTime);
            question.setMaxTime(maxTime);
            question.setAverageTime(averageTime);
            question.setImprovement(averageTime-timeTaken);


            if(timeTaken <= 1 ){
                questionTiming1.add(question);
            }else if( timeTaken > 1 && timeTaken <=2 ){
                questionTiming2.add(question);
            }else if( timeTaken > 2 && timeTaken <=3 ){
                questionTiming3.add(question);
            }else if( timeTaken > 3 && timeTaken <=4 ){
                questionTiming4.add(question);
            }else if( timeTaken > 4 && timeTaken <=5 ){
                questionTiming5.add(question);
            }else if( timeTaken > 5 ){
                questionTimingBeyond5.add(question);
            }
        }

        resultantData.put("totalQuestionAttempted",totalQuestionAttempted);
        resultantData.put("totalTimeTaken",totalTimeTaken);
        resultantData.put("totalQuestionsToBeAttempted",totalQuestionsToBeAttempted);
        resultantData.put("totalQuestionsUnAttemptedAndUnreviewed",totalQuestionsUnAttemptedAndUnreviewed);
        resultantData.put("totalQuestionUnattempted",totalQuestionUnattempted);
        resultantData.put("attemptedQuestionIds",attemptedQuestionIds);
        resultantData.put("unAttemptedQuestionIds",unAttemptedQuestionIds);
        resultantData.put("correctQuestionIds",correctQuestionIds);
        resultantData.put("incorrectQuestionIds",incorrectQuestionIds);
        resultantData.put("questionToBeUpdated",questionToBeUpdated);
        resultantData.put("questionTiming1",questionTiming1);
        resultantData.put("questionTiming2",questionTiming2);
        resultantData.put("questionTiming3",questionTiming3);
        resultantData.put("questionTiming4",questionTiming4);
        resultantData.put("questionTiming5",questionTiming5);
        resultantData.put("questionTimingBeyond5",questionTimingBeyond5);
        return resultantData;
    }
}
