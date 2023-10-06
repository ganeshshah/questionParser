package com.personalQuizApp.quizApp.processors;

import com.personalQuizApp.quizApp.dataObjects.McqCSV;
import com.personalQuizApp.quizApp.dataObjects.QuantAndReasoning;

import java.util.Date;

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

    public static McqCSV processQuestion(McqCSV mcq){
        McqCSV processedQuestion = new McqCSV();
        processedQuestion.setQuestion(mcq.getQuestion());
        processedQuestion.setSubject(mcq.getSubject());
        processedQuestion.setMonth(mcq.getMonth());
        processedQuestion.setHint(mcq.getHint());
        processedQuestion.setAnswerKey(mcq.getAnswerKey());
        processedQuestion.setCreatedDate(new Date());
        processedQuestion.setLodingIndicator("MANUAL");
        return processedQuestion;
    }

    public static QuantAndReasoning processQreQuestion(QuantAndReasoning mcq){
        QuantAndReasoning processedQuestion = new QuantAndReasoning();
        processedQuestion.setQuestion(mcq.getQuestion());
        processedQuestion.setSubject(mcq.getSubject());
        processedQuestion.setChapter(mcq.getChapter());
        processedQuestion.setMonth(mcq.getMonth());
        processedQuestion.setHint(mcq.getHint());
        processedQuestion.setAnswerKey(mcq.getAnswerKey());
        processedQuestion.setCreatedDate(new Date());
        processedQuestion.setLodingIndicator("MANUAL");
        return processedQuestion;
    }

}
