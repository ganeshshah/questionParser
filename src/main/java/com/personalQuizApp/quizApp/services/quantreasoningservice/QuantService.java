package com.personalQuizApp.quizApp.services.quantreasoningservice;

import com.personalQuizApp.quizApp.dataObjects.QuantAndReasoning;
import com.personalQuizApp.quizApp.services.parsingservice.ParsingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuantService {


    public final QuantRepository quantRepository;

    @Autowired
    public QuantService(QuantRepository quantRepository) {
        this.quantRepository = quantRepository;
    }

    public void addQuestion(QuantAndReasoning question) {
        quantRepository.addQuestion(question);
    }

    public List<QuantAndReasoning> getQuestionsWithParam(int numQuestions, String flag, String subject, String chapter, int accuracy, String month, String timeCriteria, String timeValue) {

        return quantRepository.getQuestionsWithParam(numQuestions,flag,subject,chapter,accuracy,month,timeCriteria,timeValue);
    }

    public void deleteMcq(Integer id) {
        quantRepository.deleteQuestion(id);
    }

    public void updateMcq(QuantAndReasoning mcq) {
        quantRepository.updateMcq(mcq);
    }
}
