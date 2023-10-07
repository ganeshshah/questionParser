package com.personalQuizApp.quizApp.dataObjects;

public class TestQreBodyData {

    Integer testId;
    Double totalTime;
    String subject;

    Object questionTimers;

    Object questions;

    public Integer getTestId() {
        return testId;
    }

    public void setTestId(Integer testId) {
        this.testId = testId;
    }

    public Double getTotalTime() {
        return totalTime;
    }

    public void setTotalTime(Double totalTime) {
        this.totalTime = totalTime;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public Object getQuestionTimers() {
        return questionTimers;
    }

    public void setQuestionTimers(Object questionTimers) {
        this.questionTimers = questionTimers;
    }

    public Object getQuestions() {
        return questions;
    }

    public void setQuestions(Object questions) {
        this.questions = questions;
    }
}
