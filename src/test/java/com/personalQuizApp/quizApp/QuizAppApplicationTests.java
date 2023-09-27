package com.personalQuizApp.quizApp;

import com.personalQuizApp.quizApp.processors.SpotlightParser.SpotlightParser;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.io.IOException;

@SpringBootTest
class QuizAppApplicationTests {

	@Test
	void contextLoads() throws IOException {
		SpotlightParser.parseText();
	}


}
