package com.personalQuizApp.quizApp.services;

import com.personalQuizApp.quizApp.dataObjects.McqCSV;
import com.personalQuizApp.quizApp.parsers.ParsePlainText;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ParsingController {

    private final ParsingService parsingService;

    @Autowired
    public ParsingController(ParsingService parsingService) {
        this.parsingService = parsingService;
    }

    @GetMapping("hello")
    List<McqCSV> getParsedMcq(){
        return parsingService.getParsedMcq();
    }

    @PostMapping("proccessFile")
    void processAndInsertMcq(@RequestBody ArrayList<McqCSV> mcqList){
        System.out.println("Inserting values in DB");
        parsingService.processAndInsertMcq(mcqList);
    }
}
