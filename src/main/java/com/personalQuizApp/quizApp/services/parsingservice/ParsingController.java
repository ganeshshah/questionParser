package com.personalQuizApp.quizApp.services.parsingservice;

import com.personalQuizApp.quizApp.dataObjects.LoadQuestionParams;
import com.personalQuizApp.quizApp.dataObjects.McqCSV;
import com.personalQuizApp.quizApp.processors.ProcessInput;
import com.personalQuizApp.quizApp.revisionStrategy.RevisionStrategy;
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
    public ParsingController(ParsingService parsingService) {
        this.parsingService = parsingService;
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
    void processAndInsertMcq(@RequestBody LoadQuestionParams loadQuestionParams) throws IOException {
        parsingService.processAndInsertMcq(loadQuestionParams);
    }

    @PutMapping("editMcq")
    void editQuestion(@RequestBody McqCSV mcq){
        System.out.println("Updating in DB");
        parsingService.updateMcq(mcq);
    }

    @DeleteMapping (path = "{id}")
    void editQuestion(@PathVariable("id") Integer id){
        System.out.println("Deleting from DB");
        parsingService.deleteMcq(id);
    }
    @PutMapping("submitAnswer")
    void submitAnswer(@RequestBody McqCSV mcq){
        System.out.println("calculating accuracy and updating in DB");
        parsingService.updateMcq(ProcessInput.processSubmission(mcq));
    }

    @GetMapping("getIncorrectQuestions")
    public List<McqCSV> getIncorrectQuestions( @RequestParam ArrayList<Integer> ids){
        return (List<McqCSV>) parsingService.getIncorrectQuestions(ids);
    }

    @GetMapping("getRevisionData")
    public HashMap<String, HashMap<String, ArrayList<Integer>>>  getRevisionData( ){
        List<McqCSV> allQuestions = parsingService.getQuestions();
        return RevisionStrategy.processAllQuestions(allQuestions);
    }

}
