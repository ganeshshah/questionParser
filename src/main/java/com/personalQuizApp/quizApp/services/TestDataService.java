package com.personalQuizApp.quizApp.services;

import com.personalQuizApp.quizApp.dataObjects.TestData;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TestDataService {
    TestDataRepository testDataRepository;
    TestDataService(TestDataRepository testDataRepository){
        this.testDataRepository = testDataRepository;
    }


    public void insertResponse(TestData testData) {
        testDataRepository.insertResponse(testData);

    }

    public List<TestData> getTestResultData(int testId) {
        return testDataRepository.getTestResultData(testId);
    }
}
