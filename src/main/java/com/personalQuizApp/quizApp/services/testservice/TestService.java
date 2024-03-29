package com.personalQuizApp.quizApp.services.testservice;

import com.personalQuizApp.quizApp.dataObjects.TestIdStore;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TestService {

    public final TestRepository testRepository;

    @Autowired
    public TestService(TestRepository testRepository) {
        this.testRepository = testRepository;
    }

    public Integer getMaxTestId() {
        return testRepository.getMaxTestId();
    }

    public void createTestId(TestIdStore testIdStore) {
        testRepository.createTestId(testIdStore);
    }
}
