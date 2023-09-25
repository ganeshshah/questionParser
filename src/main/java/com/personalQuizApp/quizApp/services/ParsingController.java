package com.personalQuizApp.quizApp.services;

import com.personalQuizApp.quizApp.dataObjects.McqCSV;
import com.personalQuizApp.quizApp.processors.ProcessInput;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ParsingController {

    private final ParsingService parsingService;

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
    void processAndInsertMcq(@RequestBody ArrayList<McqCSV> mcqList) throws IOException {
        System.out.println("Inserting values in DB");
        parsingService.processAndInsertMcq(mcqList);
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



}
