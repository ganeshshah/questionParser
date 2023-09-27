package com.personalQuizApp.quizApp.services.testresultservice;

import com.personalQuizApp.quizApp.dataObjects.McqCSV;
import com.personalQuizApp.quizApp.dataObjects.TestData;
import com.personalQuizApp.quizApp.processors.ProcessTestData;
import com.personalQuizApp.quizApp.services.parsingservice.ParsingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = {"/testData"})
public class TestDataController {

    @Autowired
    public final TestDataService testDataService;
    @Autowired
    public final ParsingService parsingService;
    TestDataController(TestDataService testDataService, ParsingService parsingService){
        this.testDataService = testDataService;
        this.parsingService = parsingService;
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
        HashMap<String,Object> testResult =  ProcessTestData.processData(testDataService.getTestResultData(testId));
        ArrayList<Integer> correctQuestion = (ArrayList<Integer>) testResult.get("correctQuestionsList");
        Date testDate = (Date) testResult.get("testDate");
        // get all list of questions
        List<McqCSV> mcqList = parsingService.getIncorrectQuestions(ProcessTestData.getQuestionsToUpdateAccuracy(testResult));
        for(McqCSV question : mcqList){
            Integer id = question.getId();
            Integer result = 0;
            if(correctQuestion.contains(id)){
                result = 1;
                question.setNoOfCorrect(question.getNoOfCorrect()+1);
            }else{
                question.setNoOfIncorrectAttempt(question.getNoOfIncorrectAttempt()+1);
            }
            question.setNoOfAttempt(question.getNoOfAttempt()+1);
            double accuracy = ( question.getNoOfCorrect() * 1.0 / question.getNoOfAttempt() ) * 100;
            question.setAccurracy(accuracy);
            question.setAttemptedDate(testDate);
        }
        parsingService.updateAllMcq(mcqList);
        return testResult;
    }

}
