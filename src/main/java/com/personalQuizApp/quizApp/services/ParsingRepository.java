package com.personalQuizApp.quizApp.services;
import com.personalQuizApp.quizApp.dataObjects.McqCSV;
import com.personalQuizApp.quizApp.processors.ParsePlainText;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import static com.personalQuizApp.quizApp.processors.ParsePlainText.printSolutionMap;

@Component
public class ParsingRepository {

    private ParsingRepo parsingRepo;

    public ParsingRepository(ParsingRepo parsingRepo) {
        this.parsingRepo = parsingRepo;
    }

    List<McqCSV> getQuestions(){
        return (List<McqCSV>) parsingRepo.findAll();
    }

    public void processAndInsertMcq(ArrayList<McqCSV> mcqList) throws IOException {
        System.out.println("Need to implement logic to persist data");
        ParsePlainText.parseText();
        parsingRepo.saveAll(printSolutionMap);
    }

    public void deleteMcq(Integer id){
        System.out.println("Deleting question id : " +  id);
        parsingRepo.deleteById(id);
    }

    public void updateMcq(McqCSV mcq){
        parsingRepo.save(mcq);
    }


    public List<McqCSV> getQuestionsWithParam(int numQuestions, String flag, String subject, int accuracy, String month) {
        if(numQuestions>0 && flag.equals("no")){
            if(accuracy == 0){
                return parsingRepo.getQuestions1();
            }
            else{
                return parsingRepo.getQuestions1();
            }
        }else{
            if(accuracy == 0){
                return parsingRepo.getQuestions1();
            }
            else{
                return parsingRepo.getQuestions1();
            }
        }
    }



}
