package com.personalQuizApp.quizApp.services;

import com.personalQuizApp.quizApp.dataObjects.TestData;
import org.springframework.stereotype.Service;

@Service
public class TestDataService {
    TestDataRepository testDataRepository;
    TestDataService(TestDataRepository testDataRepository){
        this.testDataRepository = testDataRepository;
    }


    public void insertResponse(TestData testData) {
        testDataRepository.insertResponse(testData);

    }
}
