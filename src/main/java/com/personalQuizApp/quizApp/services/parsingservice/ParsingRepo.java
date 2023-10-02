package com.personalQuizApp.quizApp.services.parsingservice;

import com.personalQuizApp.quizApp.dataObjects.McqCSV;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.ArrayList;
import java.util.List;

public interface ParsingRepo extends CrudRepository<McqCSV, Integer> {

    @Query("SELECT m FROM McqCSV m WHERE m.subject = :subjectParam AND m.month = :monthOfQuestion ORDER BY m.id")
    List<McqCSV> getQuestionsBySubjectAndMonth(
            @Param("subjectParam") String subject,
            @Param("monthOfQuestion") String month);

    @Query("SELECT m FROM McqCSV m WHERE m.subject = :subjectParam AND m.month = :monthOfQuestion AND m.noOfAttempt = :noOfAttempt ORDER BY m.id")
    List<McqCSV> getQuestionsBySubjectAndMonth1(
            @Param("subjectParam") String subject,
            @Param("monthOfQuestion") String month,
            @Param("noOfAttempt") String noOfAttempt);

    @Query("SELECT m FROM McqCSV m WHERE m.subject = :subjectParam AND m.accurracy <= :accuracyParam AND m.month = :monthOfQuestion ORDER BY m.id")
    List<McqCSV> getQuestionsBySubjectMonthAndAccuracy(
            @Param("subjectParam") String subject,
            @Param("accuracyParam") double accuracy,
            @Param("monthOfQuestion") String month);
    @Query("SELECT m FROM McqCSV m WHERE m.subject = :subjectParam AND m.accurracy >= :accuracyParam AND m.month = :monthOfQuestion ORDER BY m.id")
    List<McqCSV> getTopXQuestions(
            @Param("subjectParam") String subject,
            @Param("accuracyParam") double accuracy,
            @Param("monthOfQuestion") String month
    );

    @Query("SELECT m FROM McqCSV m WHERE m.month = :monthOfQuestion ORDER BY m.id")
    List<McqCSV> getQuestionsByMonth(
            @Param("monthOfQuestion") String month);

    @Query("SELECT m FROM McqCSV m WHERE m.subject = :subject ORDER BY m.id")
    List<McqCSV> getAllQuestionsBySubject(@Param("subject") String subject);

    @Query("SELECT m FROM McqCSV m WHERE m.month in :byMonthOrMonthRange ORDER BY m.id")
    List<McqCSV> getQuestionsByMonths(ArrayList<String> byMonthOrMonthRange);


}




