package com.personalQuizApp.quizApp.services;

import com.personalQuizApp.quizApp.dataObjects.McqCSV;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.ArrayList;
import java.util.List;

@Service
public class ParsingService {

 public final ParsingRepository parsingRepository;

 @Autowired
 public ParsingService(ParsingRepository parsingRepository) {
        this.parsingRepository = parsingRepository;
    }

    List<McqCSV> getParsedMcq(){
        return parsingRepository.getParsedMcq();
    }

   void processAndInsertMcq(ArrayList<McqCSV> mcqList){
         parsingRepository.processAndInsertMcq(mcqList);
    }
}
