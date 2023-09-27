package com.personalQuizApp.quizApp.services.testservice;

import com.personalQuizApp.quizApp.dataObjects.McqCSV;
import com.personalQuizApp.quizApp.dataObjects.TestIdStore;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TestRepo extends CrudRepository<TestIdStore, Integer> {

    @Query("SELECT MAX(e.id) FROM TestIdStore e")
    Integer getMaxTestId();

}
