package com.personalQuizApp.quizApp.services;
import com.personalQuizApp.quizApp.dataObjects.McqCSV;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

import static com.personalQuizApp.quizApp.parsers.ParsePlainText.printSolutionMap;

@Component
public class ParsingRepository {

    private ParsingRepo parsingRepo;

    public ParsingRepository(ParsingRepo parsingRepo) {
        this.parsingRepo = parsingRepo;
    }

    List<McqCSV> getParsedMcq(){
        return (List<McqCSV>) parsingRepo.findAll();
    }

    public void processAndInsertMcq(ArrayList<McqCSV> mcqList) {
        System.out.println("Need to implement logic to persist data");
        parsingRepo.saveAll(printSolutionMap);
    }
}
