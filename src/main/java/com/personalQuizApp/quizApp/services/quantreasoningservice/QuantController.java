package com.personalQuizApp.quizApp.services.quantreasoningservice;

import com.personalQuizApp.quizApp.dataObjects.LoadQuestionParams;
import com.personalQuizApp.quizApp.dataObjects.McqCSV;
import com.personalQuizApp.quizApp.dataObjects.QuantAndReasoning;
import com.personalQuizApp.quizApp.processors.ProcessInput;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = {"/qre"})
public class QuantController {

    @Autowired
    public final QuantService quantService;

    public QuantController(QuantService quantService) {
        this.quantService = quantService;
    }

    @PostMapping("addQuestion")
    Integer processAndInsertMcq(@RequestBody QuantAndReasoning question) throws IOException {
        QuantAndReasoning processQuestion = ProcessInput.processQreQuestion(question);
        quantService.addQuestion(processQuestion);
        return 200;
    }

    @GetMapping("getQuestionsWithParam")
    List<QuantAndReasoning> getQuestionsWithParam(
            @RequestParam(name = "numQuestions") int numQuestions,
            @RequestParam(name = "flag") String flag,
            @RequestParam(name = "subject") String subject,
            @RequestParam(name = "chapter") String chapter,
            @RequestParam(name = "accuracy") int accuracy,
            @RequestParam(name = "month") String month,
            @RequestParam(name = "timeCriteria") String timeCriteria,
            @RequestParam(name = "timeValue") String timeValue
    ){

        return  quantService.getQuestionsWithParam(numQuestions,flag,subject,chapter,accuracy,month,timeCriteria,timeValue);
    }

    @DeleteMapping (path = "deleteQuestionById/{id}")
    void deleteQuestionById(@PathVariable("id") Integer id){
        System.out.println("Deleting from DB");
        quantService.deleteMcq(id);
    }

    @PutMapping("editMcq")
    void editQuestion(@RequestBody QuantAndReasoning mcq){
        System.out.println("Updating in DB");
        quantService.updateMcq(mcq);
    }
}
