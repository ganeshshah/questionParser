package com.personalQuizApp.quizApp.services;

import com.personalQuizApp.quizApp.dataObjects.TestData;
import com.personalQuizApp.quizApp.processors.ProcessTestData;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = {"/testData"})
public class TestDataController {

    TestDataService testDataService;
    TestDataController(TestDataService testDataService){
        this.testDataService = testDataService;
    }

    @PostMapping("submitQuestion")
    void processAndInsertMcq(@RequestBody TestData testData) throws IOException {
        System.out.println("Inserting values in DB");
        TestData tdata = new TestData();
        tdata.setTestId(testData.getTestId());
        tdata.setQuestionId(testData.getQuestionId());
        tdata.setMonth(testData.getMonth());
        tdata.setTestDate(testData.getTestDate());
        tdata.setResult(testData.getResult());
        tdata.setSubject(testData.getSubject());
        testDataService.insertResponse(tdata);
    }

    @GetMapping("getTestResultData")
    HashMap<String,Object> getTestResultData(
            @RequestParam(name = "testId") int testId){
        return ProcessTestData.processData(testDataService.getTestResultData(testId));
    }

}
