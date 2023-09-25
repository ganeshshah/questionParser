package com.personalQuizApp.quizApp.services;

import com.personalQuizApp.quizApp.dataObjects.TestData;
import org.springframework.stereotype.Component;

@Component
public class TestDataRepository {

    TestDataRepo testDataRepo;

    TestDataRepository(TestDataRepo testDataRepo){
        this.testDataRepo = testDataRepo;
    }

    public void insertResponse(TestData testData) {
        testDataRepo.save(testData);
    }
}
