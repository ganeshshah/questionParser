package com.personalQuizApp.quizApp.services.parsingservice;
import com.personalQuizApp.quizApp.dataObjects.LoadQuestionParams;
import com.personalQuizApp.quizApp.dataObjects.McqCSV;
import com.personalQuizApp.quizApp.enums.Subjects;
import com.personalQuizApp.quizApp.processors.PIB24X7Parser.Pib27x7Parser;
import com.personalQuizApp.quizApp.processors.RBI24X7Parser.Rbi24x7Parser;
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

    List<McqCSV> getQuestionsByMonthOrAll(String byMonthOrAll, String subject){
        if(byMonthOrAll.equals("ALL") && subject.equals("ALL")){
            return (List<McqCSV>) parsingRepo.findAll();
        }
        else if(!byMonthOrAll.equals("ALL") && !subject.equals("ALL")){
            return parsingRepo.getQuestionsBySubjectAndMonth(subject,byMonthOrAll);
        }else if(byMonthOrAll.equals("ALL") && !subject.equals("ALL")){
            return parsingRepo.getAllQuestionsBySubject(subject);
        }else{
            return parsingRepo.getQuestionsByMonth(byMonthOrAll);
        }
    }

    public List<McqCSV> getIncorrectQuestions(ArrayList<Integer> ids){
        return (List<McqCSV>) parsingRepo.findAllById(ids);
    }

    public void processAndInsertMcq(LoadQuestionParams loadQuestionParams) throws IOException {
        String questionFilePath = loadQuestionParams.getQuestionPath();
        String answerFilePath = loadQuestionParams.getAnswerPath();
        String month = loadQuestionParams.getSelectedMonth();
        String subject = loadQuestionParams.getSelectedSubject();
        String parser = loadQuestionParams.getSelectedParser();
        if(subject.equals(Subjects.CA.toString())){
            parsingRepo.saveAll(CloudAffairsParser.parseText(questionFilePath,subject,month));
        }else if(subject.equals(Subjects.SPOTLIGHT.toString())){
            parsingRepo.saveAll(SpotlightParser.parseText(questionFilePath,answerFilePath,subject,month));
        }else if(subject.equals(Subjects.PIB24X7.toString())){
            System.out.println("I am called");
            parsingRepo.saveAll(Pib27x7Parser.parseText(questionFilePath,subject,month));
        }else if(subject.equals(Subjects.RBI24X7.toString())){
            System.out.println("I am called");
            parsingRepo.saveAll(Rbi24x7Parser.parseText(questionFilePath,subject,month));
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
                List<McqCSV> results =  parsingRepo.getQuestionsBySubjectAndMonth(subject, month);
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
                return parsingRepo.getQuestionsBySubjectAndMonth(subject, month);
            }
            else{
                return parsingRepo.getQuestionsBySubjectMonthAndAccuracy(subject,accuracy, month);
            }
        }
    }

    public void updateAllMcq(List<McqCSV> mcqlist) {
        parsingRepo.saveAll(mcqlist);
    }

    public List<McqCSV> getQuestionsForAnalytics(ArrayList<String> byMonthOrMonthRange) {
        return parsingRepo.getQuestionsByMonths(byMonthOrMonthRange);
    }
}
