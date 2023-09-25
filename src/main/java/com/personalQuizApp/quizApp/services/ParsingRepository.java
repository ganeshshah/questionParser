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


    public List<McqCSV> getQuestionsWithParam(int numQuestions, String allFlag, String subject, int accuracy, String month) {
        if(numQuestions>0 && allFlag.equals("no")){
            if(accuracy == 0){
                List<McqCSV> results =  parsingRepo.getQuestions1(subject, month);
                if (results.size() > numQuestions) {
                    return results.subList(0, numQuestions);
                }
                return results;
            }
            else{
                List<McqCSV> results = parsingRepo.getTopXQuestions(subject, accuracy, month);
                if (results.size() > numQuestions) {
                    return results.subList(0, numQuestions);
                }
                return results;
            }
        }else{
            if(accuracy == 0){
                return parsingRepo.getQuestions1(subject, month);
            }
            else{
                return parsingRepo.getQuestions2(subject,accuracy, month);
            }
        }
    }
}
