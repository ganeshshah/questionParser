package com.personalQuizApp.quizApp.services.testresultservice;

import com.personalQuizApp.quizApp.dataObjects.TestData;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class TestDataRepository {

    TestDataRepo testDataRepo;

    TestDataRepository(TestDataRepo testDataRepo){
        this.testDataRepo = testDataRepo;
    }

    public void insertResponse(TestData testData) {
        testDataRepo.save(testData);
    }

    public List<TestData> getTestResultData(int key) {
        return testDataRepo.findByTestId(key);
    }
}
