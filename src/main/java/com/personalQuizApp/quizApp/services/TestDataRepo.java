package com.personalQuizApp.quizApp.services;

import com.personalQuizApp.quizApp.dataObjects.TestData;
import com.personalQuizApp.quizApp.dataObjects.TestQuestionId;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TestDataRepo extends CrudRepository<TestData, TestQuestionId> {
    @Query("SELECT m FROM TestData m WHERE m.testId = :testId ORDER BY m.questionId")
    List<TestData> findByTestId(
            @Param("testId") int testId);
}
