package com.personalQuizApp.quizApp.services.parsingservice;

import com.personalQuizApp.quizApp.dataObjects.LoadQuestionParams;
import com.personalQuizApp.quizApp.dataObjects.McqCSV;
import com.personalQuizApp.quizApp.dataObjects.TestData;
import com.personalQuizApp.quizApp.performanceAnalyzer.AnalyticsDashBoard;
import com.personalQuizApp.quizApp.processors.ProcessInput;
import com.personalQuizApp.quizApp.revisionStrategy.RevisionStrategy;
import com.personalQuizApp.quizApp.services.testresultservice.TestDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ParsingController {

    @Autowired
    public final ParsingService parsingService;
    @Autowired
    public final TestDataService testDataService;

    @Autowired
    public ParsingController(ParsingService parsingService, TestDataService testDataService) {
        this.parsingService = parsingService;
        this.testDataService = testDataService;
    }

    @GetMapping("getQuestions")
    List<McqCSV> getQuestions(){
        return parsingService.getQuestions();
    }

    @GetMapping("getQuestionsWithParam")
    List<McqCSV> getQuestionsWithParam(
            @RequestParam(name = "numQuestions") int numQuestions,
            @RequestParam(name = "flag") String flag,
            @RequestParam(name = "subject") String subject,
            @RequestParam(name = "accuracy") int accuracy,
            @RequestParam(name = "month") String month
    ){
        return parsingService.getQuestionsWithParam(numQuestions,flag,subject,accuracy,month);
    }

    @PostMapping("proccessFile")
    Integer processAndInsertMcq(@RequestBody LoadQuestionParams loadQuestionParams) throws IOException {
        parsingService.processAndInsertMcq(loadQuestionParams);
        return 200;
    }

    @PutMapping("editMcq")
    void editQuestion(@RequestBody McqCSV mcq){
        System.out.println("Updating in DB");
        parsingService.updateMcq(mcq);
    }

    @DeleteMapping (path = "deleteQuestionById/{id}")
    void deleteQuestionById(@PathVariable("id") Integer id){
        System.out.println("Deleting from DB");
        parsingService.deleteMcq(id);
    }
    @PutMapping("submitAnswer")
    void submitAnswer(@RequestBody McqCSV mcq){
        System.out.println("calculating accuracy and updating in DB");
        parsingService.updateMcq(ProcessInput.processSubmission(mcq));
    }

    // This can be used to call for all questions too
    @GetMapping("getIncorrectQuestions")
    public List<McqCSV> getIncorrectQuestions( @RequestParam ArrayList<Integer> ids){
        return parsingService.getIncorrectQuestions(ids);
    }

    @GetMapping("getRevisionData")
    public HashMap<String, HashMap<String, ArrayList<Integer>>>  getRevisionData(@RequestParam String byMonthOrAll,
                                                                                 @RequestParam String subject){
        List<McqCSV> allQuestions = parsingService.getQuestionsByMonthOrAll(byMonthOrAll,subject);
        return RevisionStrategy.processAllQuestions(allQuestions, subject);
    }

    @GetMapping("getAnalyticsData")
    public HashMap<String,Object>  getAnalyticsData(@RequestParam ArrayList<String> byMonthOrMonthRange,
                                          @RequestParam String allMonthsIndicator){
        HashMap<String,Object> resultData = new HashMap<>();
        List<McqCSV> allQuestions;
        List<TestData> allAttemptedQuestions = testDataService.getAttemptedQuestions();
        if(allMonthsIndicator.equals("YES")){
            allQuestions = parsingService.getQuestions();
        }else{
            allQuestions = parsingService.getQuestionsForAnalytics(byMonthOrMonthRange);
        }
        resultData.put("lineChartData",AnalyticsDashBoard.processLineChartData(allAttemptedQuestions));
        resultData.putAll(AnalyticsDashBoard.prepareAnalyticsData(allQuestions));

        return resultData;
    }

    @PostMapping("addQuestionManually")
    Integer addQuestionManually(@RequestBody McqCSV question) throws IOException {
        McqCSV processedQuestion = ProcessInput.processQuestion(question);
        parsingService.updateMcq(processedQuestion);
        return 200;
    }

}
