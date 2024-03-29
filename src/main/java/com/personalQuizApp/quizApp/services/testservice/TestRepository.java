package com.personalQuizApp.quizApp.services.testservice;

import com.personalQuizApp.quizApp.dataObjects.TestIdStore;
import org.springframework.stereotype.Component;

@Component
public class TestRepository {

    private TestRepo testRepo;

    public TestRepository(TestRepo testRepo) {
        this.testRepo = testRepo;
    }


    public Integer getMaxTestId() {
        return testRepo.getMaxTestId();
    }

    public void createTestId(TestIdStore testIdStore) {
        testRepo.save(testIdStore);
    }
}
