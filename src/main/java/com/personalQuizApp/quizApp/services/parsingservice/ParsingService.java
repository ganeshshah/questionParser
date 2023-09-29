package com.personalQuizApp.quizApp.services.parsingservice;

import com.personalQuizApp.quizApp.dataObjects.LoadQuestionParams;
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

    List<McqCSV> getQuestionsByMonthOrAll(String byMonthOrAll,String subject){
        return parsingRepository.getQuestionsByMonthOrAll(byMonthOrAll, subject);
    }


    public void updateMcq(McqCSV mcq){
        parsingRepository.updateMcq(mcq);
    }

    public void updateAllMcq(List<McqCSV> mcqlist){
        parsingRepository.updateAllMcq(mcqlist);
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

    public void processAndInsertMcq(LoadQuestionParams loadQuestionParams) throws IOException {
        parsingRepository.processAndInsertMcq(loadQuestionParams);
    }
}
