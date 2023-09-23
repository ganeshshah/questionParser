package com.personalQuizApp.quizApp.services;

import com.personalQuizApp.quizApp.dataObjects.McqCSV;
import com.personalQuizApp.quizApp.dbAuth.UserRepository;
import com.personalQuizApp.quizApp.parsers.ParsePlainText;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;


public interface ParsingRepo extends CrudRepository<McqCSV, Integer> {

}
