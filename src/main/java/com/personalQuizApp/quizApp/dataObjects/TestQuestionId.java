package com.personalQuizApp.quizApp.dataObjects;

import java.io.Serializable;


public class TestQuestionId implements Serializable {
    public TestQuestionId() {
    }
    public TestQuestionId(Integer testId, Integer questionId) {
        super();
        this.testId = testId;
        this.questionId = questionId;
    }
    private Integer testId;
    private Integer questionId;

    public Integer getQuestionId() {
        return questionId;
    }

    public void setQuestionId(Integer questionId) {
        this.questionId = questionId;
    }

    public Integer getTestId() {
        return testId;
    }

    public void setTestId(Integer testId) {
        this.testId = testId;
    }


}
