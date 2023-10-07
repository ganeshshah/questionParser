package com.personalQuizApp.quizApp.dataObjects;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

import java.util.Date;


@Entity
public class QuantAndReasoning {

    @PrePersist
    protected void onCreate() {
        createdDate = new Date(); // Set the default date when an entity is created
    }
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;
    @Column(nullable = false)
    private String subject;
    @Column(nullable = false)
    private String chapter;
    @Column(length = 2048)
    private String question;
    @Column(nullable = false)
    private String answerKey;
    @Column(length = 2048)
    private String hint;
    private Integer noOfAttempt = 0;

    private double accuracy = 0;

    private Integer noOfCorrect = 0;
    private double maxTime = 0;
    private double minTime = 999999;
    private double averageTime = 0;
    private double improvement = 0;
    private Date attemptedDate;
    @Column(nullable = false)
    private Date createdDate;
    @Column(nullable = false)
    private String month ;
    @Column(nullable = false)
    private String lodingIndicator = "AUTO_PARSED";
    private Integer noOfIncorrectAttempt = 0;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getChapter() {
        return chapter;
    }

    public void setChapter(String chapter) {
        this.chapter = chapter;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public String getAnswerKey() {
        return answerKey;
    }

    public void setAnswerKey(String answerKey) {
        this.answerKey = answerKey;
    }

    public String getHint() {
        return hint;
    }

    public void setHint(String hint) {
        this.hint = hint;
    }

    public Integer getNoOfAttempt() {
        return noOfAttempt;
    }

    public void setNoOfAttempt(Integer noOfAttempt) {
        this.noOfAttempt = noOfAttempt;
    }

    public double getAccuracy() {
        return accuracy;
    }

    public void setAccuracy(double accuracy) {
        this.accuracy = accuracy;
    }

    public Integer getNoOfCorrect() {
        return noOfCorrect;
    }

    public void setNoOfCorrect(Integer noOfCorrect) {
        this.noOfCorrect = noOfCorrect;
    }

    public double getMaxTime() {
        return maxTime;
    }

    public void setMaxTime(double maxTime) {
        this.maxTime = maxTime;
    }

    public double getMinTime() {
        return minTime;
    }

    public void setMinTime(double minTime) {
        this.minTime = minTime;
    }

    public double getAverageTime() {
        return averageTime;
    }

    public void setAverageTime(double averageTime) {
        this.averageTime = averageTime;
    }

    public double getImprovement() {
        return improvement;
    }

    public void setImprovement(double improvement) {
        this.improvement = improvement;
    }

    public Date getAttemptedDate() {
        return attemptedDate;
    }

    public void setAttemptedDate(Date attemptedDate) {
        this.attemptedDate = attemptedDate;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    public String getMonth() {
        return month;
    }

    public void setMonth(String month) {
        this.month = month;
    }

    public String getLodingIndicator() {
        return lodingIndicator;
    }

    public void setLodingIndicator(String lodingIndicator) {
        this.lodingIndicator = lodingIndicator;
    }

    public Integer getNoOfIncorrectAttempt() {
        return noOfIncorrectAttempt;
    }

    public void setNoOfIncorrectAttempt(Integer noOfIncorrectAttempt) {
        this.noOfIncorrectAttempt = noOfIncorrectAttempt;
    }
}
