package com.personalQuizApp.quizApp.services.parsingservice;

import com.personalQuizApp.quizApp.dataObjects.McqCSV;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
public class ParsingService {

 public final ParsingRepository parsingRepository;

 @Autowired
 public ParsingService(ParsingRepository parsingRepository) {
        this.parsingRepository = parsingRepository;
    }

    List<McqCSV> getQuestions(){
        return parsingRepository.getQuestions();
    }

   void processAndInsertMcq(ArrayList<McqCSV> mcqList, String subject) throws IOException {
         parsingRepository.processAndInsertMcq(mcqList, subject);
    }

    public void updateMcq(McqCSV mcq){
        parsingRepository.updateMcq(mcq);
    }

    public List<McqCSV> getIncorrectQuestions(ArrayList<Integer> ids){
        return (List<McqCSV>) parsingRepository.getIncorrectQuestions(ids);
    }

    public void deleteMcq(Integer id){
        System.out.println("Deleting question id : " +  id);
        parsingRepository.deleteMcq(id);
    }

    public List<McqCSV> getQuestionsWithParam(int numQuestions, String flag, String subject, int accuracy, String month) {
        return parsingRepository.getQuestionsWithParam( numQuestions, flag,subject,accuracy,month);
    }

}
