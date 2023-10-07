package com.personalQuizApp.quizApp.services.quantreasoningservice;

import com.personalQuizApp.quizApp.dataObjects.McqCSV;
import com.personalQuizApp.quizApp.dataObjects.QuantAndReasoning;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class QuantRepository {

    private QuantRepo QuantRepo;
    public QuantRepository(QuantRepo QuantRepo) {
        this.QuantRepo = QuantRepo;
    }


    public void addQuestion(QuantAndReasoning question) {
        QuantRepo.save(question);
    }

    public List<QuantAndReasoning> getQuestionsWithParam(int numQuestions, String flag, String subject, String chapter, int accuracy, String month, String timeCriteria, String timeValue) {

        //  definite or indefinite question with accuracy question with no time criteria
        if (flag.equals("no") && timeCriteria.equals("NA")) {
            if (accuracy == 0) {
                List<QuantAndReasoning> results = QuantRepo.getQuestionsBySubjectAndChapter(subject, chapter);
                if (numQuestions > 0 && results.size() > numQuestions) {
                    return results.subList(0, numQuestions);
                }
                return results;
            } else {
                List<QuantAndReasoning> results = QuantRepo.getTopXQuestions(subject, chapter, accuracy);
                if (numQuestions > 0 && results.size() > numQuestions) {
                    return results.subList(0, numQuestions);
                }
                return results;
            }
        } else if(flag.equals("no") && !timeCriteria.equals("NA")){ // definite or indefinite question with time criteria and accuracy
            if (accuracy == 0) {
                List<QuantAndReasoning> results = QuantRepo.getQuestionsBySubjectAndChapterWithTimeCriteria(subject, chapter, timeCriteria, timeValue);
                if (numQuestions > 0 && results.size() > numQuestions) {
                    return results.subList(0, numQuestions);
                }
                return results;
            } else {
                List<QuantAndReasoning> results = QuantRepo.getTopXQuestionsWithTimeCriteria(subject, chapter, accuracy, timeCriteria, timeValue);
                if (numQuestions > 0 && results.size() > numQuestions) {
                    return results.subList(0, numQuestions);
                }
                return results;
            }
        }else if (numQuestions == 0 && timeCriteria.equals("NA")) { // to handle search by attempts + accuracy
            List<QuantAndReasoning> results = new ArrayList<>();
            if(accuracy == 0){
                results = QuantRepo.getQuestionsBySubjectAndChapterAndAttempts(subject, chapter, flag);
            }
            else{
                results = QuantRepo.getQuestionsBySubjectAndChapterAndAttemptsAndAccuracy(subject, chapter, flag, accuracy);
            }
            return results;
        } else {
            if (accuracy == 0) {
                return QuantRepo.getQuestionsBySubjectAndChapter(subject, chapter);
            } else {
                return QuantRepo.getQuestionsBySubjectChapterAndAccuracy(subject, chapter, accuracy);
            }
        }

    }

    public void deleteQuestion(Integer id) {
        QuantRepo.deleteById(id);
    }

    public void updateMcq(QuantAndReasoning mcq) {
        QuantRepo.save(mcq);
    }

    public void updateAllQuestions(ArrayList<QuantAndReasoning> questionToBeUpdated) {
        QuantRepo.saveAll(questionToBeUpdated);
    }

    public List<QuantAndReasoning> getIncorrectQuestions(ArrayList<Integer> ids) {
        return (List<QuantAndReasoning>) QuantRepo.findAllById(ids);
    }
}
