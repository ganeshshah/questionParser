package com.personalQuizApp.quizApp.dataObjects;

public class LoadQuestionParams {

    private String questionPath;
    private String answerPath;
    private String selectedParser;
    private String selectedSubject;
    private String selectedMonth;

    public String getQuestionPath() {
        return questionPath;
    }

    public void setQuestionPath(String questionPath) {
        this.questionPath = questionPath;
    }

    public String getAnswerPath() {
        return answerPath;
    }

    public void setAnswerPath(String answerPath) {
        this.answerPath = answerPath;
    }

    public String getSelectedParser() {
        return selectedParser;
    }

    public void setSelectedParser(String selectedParser) {
        this.selectedParser = selectedParser;
    }

    public String getSelectedSubject() {
        return selectedSubject;
    }

    public void setSelectedSubject(String selectedSubject) {
        this.selectedSubject = selectedSubject;
    }

    public String getSelectedMonth() {
        return selectedMonth;
    }

    public void setSelectedMonth(String selectedMonth) {
        this.selectedMonth = selectedMonth;
    }
}
