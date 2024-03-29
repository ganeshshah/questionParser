package com.personalQuizApp.quizApp.services.testresultservice;

import com.personalQuizApp.quizApp.dataObjects.TestData;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
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

    public List<TestData> getAttemptedQuestions() {
        return testDataRepository.getAttemptedQuestions();
    }

    public List<TestData> getAttemptedQuestionsForAnalytics(ArrayList<String> byMonthOrMonthRange) {
        return testDataRepository.getAttemptedQuestionsForAnalytics(byMonthOrMonthRange);
    }
}
