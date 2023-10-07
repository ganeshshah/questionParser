package com.personalQuizApp.quizApp.services.quantreasoningservice;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.personalQuizApp.quizApp.dataObjects.QuantAndReasoning;
import com.personalQuizApp.quizApp.processors.ProcessInput;
import com.personalQuizApp.quizApp.processors.SpotlightParser.ProcessQreTestData;
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

//    @GetMapping("fetchQretestResult")
//    List<Object> getQreTestResultData(
//            @RequestParam(name = "testId") int testId,
//            @RequestParam(name = "totalTime") double totalTime,
//            @RequestParam(name = "subject") String subject,
//            @RequestParam(name = "questionTimers") String questionTimingMap,
//            @RequestParam(name = "questions") String questions
//
//    ) throws JsonProcessingException {
//
//        // Deserialize JSON strings to objects
//        ObjectMapper objectMapper = new ObjectMapper();
//        List<Object> questionTimers = objectMapper.readValue(questionTimingMap, new TypeReference<List<Object>>() {});
//        List<Object> questionsList = objectMapper.readValue(questions, new TypeReference<List<Object>>() {});
//
//        return ProcessQreTestData.processTestResult(testId,totalTime,subject,questionTimingMap,questions);
//    }

    @PostMapping("getTestResultData")
    Object getQreTestResultData(@RequestBody Object testRequestData) throws IOException {

        return ProcessQreTestData.processTestResult(testRequestData);
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
