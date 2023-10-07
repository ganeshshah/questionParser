package com.personalQuizApp.quizApp.services.quantreasoningservice;
import com.personalQuizApp.quizApp.dataObjects.QuantAndReasoning;
import com.personalQuizApp.quizApp.dataObjects.TestData;
import com.personalQuizApp.quizApp.dataObjects.TestQreBodyData;
import com.personalQuizApp.quizApp.processors.ProcessInput;
import com.personalQuizApp.quizApp.processors.SpotlightParser.ProcessQreTestData;
import com.personalQuizApp.quizApp.services.testresultservice.TestDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = {"/qre"})
public class QuantController {

    @Autowired
    public final QuantService quantService;
    @Autowired
    public final TestDataService testDataService;

    public QuantController(QuantService quantService, TestDataService testDataService) {
        this.quantService = quantService;
        this.testDataService = testDataService;
    }

    @PostMapping("addQuestion")
    Integer processAndInsertMcq(@RequestBody QuantAndReasoning question) throws IOException {
        QuantAndReasoning processQuestion = ProcessInput.processQreQuestion(question);
        quantService.addQuestion(processQuestion);
        return 200;
    }

    @GetMapping("getQuestionsWithParam")
    List<QuantAndReasoning> getQuestionsWithParam(
            @RequestParam(name = "numQuestions") int numQuestions,
            @RequestParam(name = "flag") String flag,
            @RequestParam(name = "subject") String subject,
            @RequestParam(name = "chapter") String chapter,
            @RequestParam(name = "accuracy") int accuracy,
            @RequestParam(name = "month") String month,
            @RequestParam(name = "timeCriteria") String timeCriteria,
            @RequestParam(name = "timeValue") String timeValue
    ){

        return  quantService.getQuestionsWithParam(numQuestions,flag,subject,chapter,accuracy,month,timeCriteria,timeValue);
    }

    @PostMapping("getTestResultData")
    Object getQreTestResultData(@RequestBody Object testRequestData) throws IOException {
            HashMap<String,Object> request = (HashMap<String, Object>) testRequestData;
            List<TestData> testData;
            testData = testDataService.getTestResultData((Integer) request.get("testId"));
            HashMap<String,Object> processedData = ProcessQreTestData.processTestResult(request, testData);
            quantService.updateAllQuestions((ArrayList<QuantAndReasoning>) processedData.get("questionToBeUpdated"));
            return processedData;
    }

    @DeleteMapping (path = "deleteQuestionById/{id}")
    void deleteQuestionById(@PathVariable("id") Integer id){
        System.out.println("Deleting from DB");
        quantService.deleteMcq(id);
    }

    @PutMapping("editMcq")
    void editQuestion(@RequestBody QuantAndReasoning mcq){
        System.out.println("Updating in DB");
        quantService.updateMcq(mcq);
    }
}
