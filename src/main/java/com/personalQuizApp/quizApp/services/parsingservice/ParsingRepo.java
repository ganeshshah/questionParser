package com.personalQuizApp.quizApp.services.parsingservice;

import com.personalQuizApp.quizApp.dataObjects.McqCSV;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ParsingRepo extends CrudRepository<McqCSV, Integer> {


    @Query("SELECT m FROM McqCSV m WHERE m.subject = :subjectParam AND m.month = :monthOfQuestion ORDER BY m.id")
    List<McqCSV> getQuestions1(
            @Param("subjectParam") String subject,
            @Param("monthOfQuestion") String month);

    @Query("SELECT m FROM McqCSV m WHERE m.subject = :subjectParam AND m.accurracy <= :accuracyParam AND m.month = :monthOfQuestion ORDER BY m.id")
    List<McqCSV> getQuestions2(
            @Param("subjectParam") String subject,
            @Param("accuracyParam") double accuracy,
            @Param("monthOfQuestion") String month);
    @Query("SELECT m FROM McqCSV m WHERE m.subject = :subjectParam AND m.accurracy >= :accuracyParam AND m.month = :monthOfQuestion ORDER BY m.id")
    List<McqCSV> getTopXQuestions(
            @Param("subjectParam") String subject,
            @Param("accuracyParam") double accuracy,
            @Param("monthOfQuestion") String month
    );


    }


