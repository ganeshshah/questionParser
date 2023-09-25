package com.personalQuizApp.quizApp.services;

import com.personalQuizApp.quizApp.dataObjects.McqCSV;
import com.personalQuizApp.quizApp.dataObjects.TestData;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.ArrayList;

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
        testDataService.insertResponse(testData);
    }

}
