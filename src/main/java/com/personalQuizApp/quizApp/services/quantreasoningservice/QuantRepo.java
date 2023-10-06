package com.personalQuizApp.quizApp.services.quantreasoningservice;

import com.personalQuizApp.quizApp.dataObjects.McqCSV;
import com.personalQuizApp.quizApp.dataObjects.QuantAndReasoning;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface QuantRepo extends CrudRepository<QuantAndReasoning, Integer> {

    @Query("SELECT qr FROM QuantAndReasoning qr WHERE qr.subject = :subject AND qr.chapter = :chapter")
    List<QuantAndReasoning> getQuestionsBySubjectAndChapter(@Param("subject") String subject, @Param("chapter") String chapter);

    @Query("SELECT qr FROM QuantAndReasoning qr WHERE qr.subject = :subject AND qr.chapter = :chapter AND qr.accuracy <= :accuracy ORDER BY qr.accuracy DESC")
    List<QuantAndReasoning> getTopXQuestions(@Param("subject") String subject, @Param("chapter") String chapter, @Param("accuracy") int accuracy);

    @Query("SELECT qr FROM QuantAndReasoning qr WHERE qr.subject = :subject AND qr.chapter = :chapter AND qr.noOfAttempt = :flag")
    List<QuantAndReasoning> getQuestionsBySubjectAndChapterAndAttempts(@Param("subject") String subject, @Param("chapter") String chapter, @Param("flag") String flag);

    @Query("SELECT qr FROM QuantAndReasoning qr WHERE qr.subject = :subject AND qr.chapter = :chapter AND qr.accuracy <= :accuracy")
    List<QuantAndReasoning> getQuestionsBySubjectChapterAndAccuracy(@Param("subject") String subject, @Param("chapter") String chapter, @Param("accuracy") int accuracy);

    @Query("SELECT qr FROM QuantAndReasoning qr WHERE qr.subject = :subject AND qr.chapter = :chapter AND (:timeCriteria = 'minTime' AND qr.minTime >= :timeValue " +
            "OR :timeCriteria = 'maxTime' AND qr.maxTime >= :timeValue " +
            "OR :timeCriteria = 'averageTime' AND qr.averageTime >= :timeValue)")
    List<QuantAndReasoning> getQuestionsBySubjectAndChapterWithTimeCriteria(
            @Param("subject") String subject,
            @Param("chapter") String chapter,
            @Param("timeCriteria") String timeCriteria,
            @Param("timeValue") String timeValue
    );

    @Query("SELECT qr FROM QuantAndReasoning qr WHERE qr.subject = :subject AND qr.chapter = :chapter AND qr.accuracy >= :accuracy AND " +
            "(:timeCriteria = 'minTime' AND qr.minTime >= :timeValue " +
            "OR :timeCriteria = 'maxTime' AND qr.maxTime >= :timeValue " +
            "OR :timeCriteria = 'averageTime' AND qr.averageTime >= :timeValue) ORDER BY qr.accuracy DESC")
    List<QuantAndReasoning> getTopXQuestionsWithTimeCriteria(
            @Param("subject") String subject,
            @Param("chapter") String chapter,
            @Param("accuracy") int accuracy,
            @Param("timeCriteria") String timeCriteria,
            @Param("timeValue") String timeValue
    );

    @Query("SELECT qr FROM QuantAndReasoning qr WHERE qr.subject = :subject AND qr.chapter = :chapter AND qr.noOfAttempt = :flag AND qr.accuracy <= :accuracy")
    List<QuantAndReasoning> getQuestionsBySubjectAndChapterAndAttemptsAndAccuracy(
            @Param("subject") String subject,
            @Param("chapter") String chapter,
            @Param("flag") String flag,
            @Param("accuracy") int accuracy
    );
}
