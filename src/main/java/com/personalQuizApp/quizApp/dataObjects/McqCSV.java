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
    private String noOfAttempt;
    private String accurracy;
    private Integer consecutiveCorrect;
    private Date attemptedDate;
    private Date createdDate;

    public String getMonth() {
        return month;
    }

    public void setMonth(String month) {
        this.month = month;
    }

    private String month;

    public Integer getConsecutiveCorrect() {
        return consecutiveCorrect;
    }

    public void setConsecutiveCorrect(Integer consecutiveCorrect) {
        this.consecutiveCorrect = consecutiveCorrect;
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

    public String getNoOfAttempt() {
        return noOfAttempt;
    }

    public void setNoOfAttempt(String noOfAttempt) {
        this.noOfAttempt = noOfAttempt;
    }

    public String getAccurracy() {
        return accurracy;
    }

    public void setAccurracy(String accurracy) {
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
}
