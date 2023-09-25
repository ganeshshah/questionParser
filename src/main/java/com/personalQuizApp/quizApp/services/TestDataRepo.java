package com.personalQuizApp.quizApp.services;

import com.personalQuizApp.quizApp.dataObjects.TestData;
import com.personalQuizApp.quizApp.dataObjects.TestIdStore;
import org.springframework.data.repository.CrudRepository;

public interface TestDataRepo extends CrudRepository<TestData, Integer> {
}
