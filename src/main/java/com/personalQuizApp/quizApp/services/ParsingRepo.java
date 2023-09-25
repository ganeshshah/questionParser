package com.personalQuizApp.quizApp.services;

import com.personalQuizApp.quizApp.dataObjects.McqCSV;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ParsingRepo extends CrudRepository<McqCSV, Integer> {


    @Query("SELECT m FROM McqCSV m WHERE m.id > 600 ORDER BY m.id")
    List<McqCSV> getQuestions1();

}
