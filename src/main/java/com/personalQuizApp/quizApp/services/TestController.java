package com.personalQuizApp.quizApp.services;

import com.personalQuizApp.quizApp.Constants;
import com.personalQuizApp.quizApp.dataObjects.McqCSV;
import com.personalQuizApp.quizApp.dataObjects.TestIdStore;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = {"/test"})
public class TestController {

    TestService testService;

    @Autowired
    public TestController(TestService testService) {
        this.testService = testService;
    }
    @GetMapping("createTestId")
    TestIdStore getTestId(
            @RequestParam(name = "subject") String subject,
            @RequestParam(name = "month") String month
    ){
        Integer maxTestId = testService.getMaxTestId();
        if(maxTestId == null )
            maxTestId = Constants.START_TEST_ID;
        else
            maxTestId++;
        Date todaysDate = new Date();
        TestIdStore testIdStore = new TestIdStore();
        testIdStore.setTestId(maxTestId);
        testIdStore.setSubject(subject);
        testIdStore.setMonth(month);
        testIdStore.setDate(todaysDate);
        testService.createTestId(testIdStore);
        return testIdStore;
    }
}
