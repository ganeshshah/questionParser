package com.personalQuizApp.quizApp.services.parsingservice;
import com.personalQuizApp.quizApp.dataObjects.McqCSV;
import com.personalQuizApp.quizApp.enums.Subjects;
import com.personalQuizApp.quizApp.processors.PIB24X7Parser.Pib27x7Parser;
import com.personalQuizApp.quizApp.processors.SpotlightParser.SpotlightParser;
import com.personalQuizApp.quizApp.processors.cloudaffairsParser.CloudAffairsParser;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;


@Component
public class ParsingRepository {

    private ParsingRepo parsingRepo;

    public ParsingRepository(ParsingRepo parsingRepo) {
        this.parsingRepo = parsingRepo;
    }

    List<McqCSV> getQuestions(){
        return (List<McqCSV>) parsingRepo.findAll();
    }

    public List<McqCSV> getIncorrectQuestions(ArrayList<Integer> ids){
        return (List<McqCSV>) parsingRepo.findAllById(ids);
    }

    public void processAndInsertMcq(ArrayList<McqCSV> mcqList, String subject) throws IOException {
        System.out.println("Need to implement logic to persist data");
        if(subject.equals(Subjects.CLOUD_AFFAIRS.toString())){
            parsingRepo.saveAll(CloudAffairsParser.parseText());
        }else if(subject.equals(Subjects.SPOTLIGHT.toString())){
            parsingRepo.saveAll(SpotlightParser.parseText());
        }else{
            parsingRepo.saveAll(Pib27x7Parser.parseText());
        }
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
