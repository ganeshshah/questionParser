package com.personalQuizApp.quizApp.processors;

import com.personalQuizApp.quizApp.dataObjects.McqCSV;

public class ProcessInput {
    public static McqCSV processSubmission(McqCSV mcq){
        Integer noOfAttempt = mcq.getNoOfAttempt();
        Integer noOfCorrect = mcq.getNoOfCorrect();
        Integer noOfIncorrectAttempt = noOfAttempt - noOfCorrect;
        Integer accuracy = noOfCorrect / noOfAttempt;
        mcq.setNoOfIncorrectAttempt(noOfIncorrectAttempt);
        mcq.setAccurracy(accuracy);
        return mcq;
    }


}
