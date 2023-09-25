package com.personalQuizApp.quizApp.dataObjects;

import jakarta.persistence.*;

@Entity
public class Analyzer {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;
    private Integer testId;
    private String Subject;
    private Integer attemptedDate;
    private Integer toTalQuestionAttempted;
    private Integer totalQuestionsCorrect;
    private Integer overallAccuracy;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getTestId() {
        return testId;
    }

    public void setTestId(Integer testId) {
        this.testId = testId;
    }

    public String getSubject() {
        return Subject;
    }

    public void setSubject(String subject) {
        Subject = subject;
    }

    public Integer getAttemptedDate() {
        return attemptedDate;
    }

    public void setAttemptedDate(Integer attemptedDate) {
        this.attemptedDate = attemptedDate;
    }

    public Integer getToTalQuestionAttempted() {
        return toTalQuestionAttempted;
    }

    public void setToTalQuestionAttempted(Integer toTalQuestionAttempted) {
        this.toTalQuestionAttempted = toTalQuestionAttempted;
    }

    public Integer getTotalQuestionsCorrect() {
        return totalQuestionsCorrect;
    }

    public void setTotalQuestionsCorrect(Integer totalQuestionsCorrect) {
        this.totalQuestionsCorrect = totalQuestionsCorrect;
    }

    public Integer getOverallAccuracy() {
        return overallAccuracy;
    }


    public void setOverallAccuracy(Integer overallAccuracy) {
        this.overallAccuracy = overallAccuracy;
    }


}
