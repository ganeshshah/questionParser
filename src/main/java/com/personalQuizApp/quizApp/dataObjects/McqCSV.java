package com.personalQuizApp.quizApp.dataObjects;

import jakarta.persistence.*;

import java.sql.Date;
import java.time.DayOfWeek;

@Entity
public class McqCSV {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;
    private String subject;
    @Column(length = 2048)
    private String question;
    private String answerKey;
    @Column(length = 2048)
    private String hint;
    private Integer noOfAttempt;
    private Integer accurracy;
    private Integer noOfCorrect;
    private Date attemptedDate;
    private Date createdDate;
    private String month;
    private String lodingIndicator;
    private Integer noOfIncorrectAttempt;
    private String recentCorrect;

    public String getMonth() {
        return month;
    }

    public void setMonth(String month) {
        this.month = month;
    }



    public Integer getNoOfCorrect() {
        return noOfCorrect;
    }

    public void setNoOfCorrect(Integer noOfCorrect) {
        this.noOfCorrect = noOfCorrect;
    }


    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
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

    public Integer getAccurracy() {
        return accurracy;
    }

    public void setAccurracy(Integer accurracy) {
        this.accurracy = accurracy;
    }

    public Date getAttemptedDate() {
        return attemptedDate;
    }

    public void setAttemptedDate(Date attemptedDate) {
        this.attemptedDate = attemptedDate;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
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

    public String getRecentCorrect() {
        return recentCorrect;
    }

    public void setRecentCorrect(String recentCorrect) {
        this.recentCorrect = recentCorrect;
    }

}
