package com.personalQuizApp.quizApp.performanceAnalyzer;

import com.personalQuizApp.quizApp.dataObjects.QuantAndReasoning;
import com.personalQuizApp.quizApp.enums.QuantChapters;
import com.personalQuizApp.quizApp.enums.ReasoningChapters;
import com.personalQuizApp.quizApp.enums.Subjects;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;

public class QreAnalyticsDashBoard {

    public static HashMap<String, Object> prepareData(List<QuantAndReasoning> allQuestions) {
        HashMap<String,Object> resultantMap = new HashMap<>();
        // Two PieChart done
        HashMap<String, Integer> quantPieChartTotalSolved = new HashMap<>();
        HashMap<String, Integer> reasoningPieChartTotalSolved = new HashMap<>();

        // Using these prepare total present vs total solved bar data
        HashMap<String, Integer> quantChapterWiseTotalQuestions = new HashMap<>();
        HashMap<String, Integer> reasoningChapterWiseTotalQuestions = new HashMap<>();

        // MaxAvgTime vs AvgTime Bar Data
        HashMap<String, ArrayList<Double>> quantChapterWiseMaxAvgTime = new HashMap<>();
        HashMap<String, ArrayList<Double>> reasoningChapterWiseMaxAvgTime = new HashMap<>();
        HashMap<String, ArrayList<Integer>> reasoningTotalQuestionVsSolved = new HashMap<>();
        HashMap<String, ArrayList<Integer>> quantTotalQuestionVsSolved = new HashMap<>();

        for (QuantChapters chapters : QuantChapters.values()) {
            quantPieChartTotalSolved.put(String.valueOf(chapters), 0);
            quantChapterWiseTotalQuestions.put(String.valueOf(chapters), 0);
            quantChapterWiseMaxAvgTime.put(String.valueOf(chapters), new ArrayList<>(Collections.nCopies(2, 0.0)));
        }
        for (ReasoningChapters chapters : ReasoningChapters.values()) {
            reasoningPieChartTotalSolved.put(String.valueOf(chapters), 0);
            reasoningChapterWiseTotalQuestions.put(String.valueOf(chapters), 0);
            reasoningChapterWiseMaxAvgTime.put(String.valueOf(chapters), new ArrayList<>(Collections.nCopies(2, 0.0)));
        }

        Integer totalQuantQuestions = 0;
        Integer totalReasoningQuestions = 0;
        Integer totalQuantQuestionsSolved = 0;
        Integer totalReasoningQuestionsSolved = 0;

        for (QuantAndReasoning question : allQuestions) {
            if (question.getSubject().equals(Subjects.QUANT.toString())) {
                totalQuantQuestions++;
                if (question.getNoOfAttempt() > 0) {
                    totalQuantQuestionsSolved++;
                    Integer value = quantPieChartTotalSolved.get(question.getChapter());
                    quantPieChartTotalSolved.put(question.getChapter(), value + 1);
                    // re calculate
                    Double maxAvgValue = (quantChapterWiseMaxAvgTime.get(question.getChapter()).get(0) * (totalQuantQuestionsSolved - 1) + question.getMaxTime()) / totalQuantQuestionsSolved;
                    Double avgValue = (quantChapterWiseMaxAvgTime.get(question.getChapter()).get(1) * (totalQuantQuestionsSolved - 1) + question.getAverageTime()) / totalQuantQuestionsSolved;
                    ArrayList<Double> newAvgValues = new ArrayList<>();
                    newAvgValues.add(maxAvgValue);
                    newAvgValues.add(avgValue);
                    quantChapterWiseMaxAvgTime.put(question.getChapter(),newAvgValues);
                }
                Integer value = quantChapterWiseTotalQuestions.get(question.getChapter());
                quantChapterWiseTotalQuestions.put(question.getChapter(), value + 1);

            } else if (question.getSubject().equals(Subjects.REASONING.toString())) {
                totalReasoningQuestions++;
                if (question.getNoOfAttempt() > 0) {
                    totalReasoningQuestionsSolved++;
                    Integer value = reasoningPieChartTotalSolved.get(question.getChapter());
                    reasoningPieChartTotalSolved.put(question.getChapter(), value + 1);
                    Double maxAvgValue = (reasoningChapterWiseMaxAvgTime.get(question.getChapter()).get(0) * (totalReasoningQuestionsSolved - 1) + question.getMaxTime()) / totalReasoningQuestionsSolved;
                    Double avgValue = (reasoningChapterWiseMaxAvgTime.get(question.getChapter()).get(1) * (totalReasoningQuestionsSolved - 1) + question.getAverageTime()) / totalReasoningQuestionsSolved;
                    ArrayList<Double> newAvgValues = new ArrayList<>();
                    newAvgValues.add(maxAvgValue);
                    newAvgValues.add(avgValue);
                    reasoningChapterWiseMaxAvgTime.put(question.getChapter(),newAvgValues);
                }
                Integer value = reasoningChapterWiseTotalQuestions.get(question.getChapter());
                reasoningChapterWiseTotalQuestions.put(question.getChapter(), value + 1);
            }

        }

        for (QuantChapters chapter : QuantChapters.values()) {
            ArrayList<Integer> values = new ArrayList<>();
            values.add(quantChapterWiseTotalQuestions.get(chapter.toString()));
            values.add(quantPieChartTotalSolved.get(chapter.toString()));
            quantTotalQuestionVsSolved.put(chapter.toString(),values);
        }
        for (ReasoningChapters chapter : ReasoningChapters.values()) {
            ArrayList<Integer> values = new ArrayList<>();
            values.add(reasoningChapterWiseTotalQuestions.get(chapter.toString()));
            values.add(reasoningPieChartTotalSolved.get(chapter.toString()));
            reasoningTotalQuestionVsSolved.put(chapter.toString(),values);
        }

        resultantMap.put("totalQuantQuestions",totalQuantQuestions);
        resultantMap.put("totalReasoningQuestions",totalReasoningQuestions);
        resultantMap.put("totalQuantQuestionsSolved",totalQuantQuestionsSolved);
        resultantMap.put("totalReasoningQuestionsSolved",totalReasoningQuestionsSolved);


        resultantMap.put("quantPieChartTotalSolved",quantPieChartTotalSolved);
        resultantMap.put("reasoningPieChartTotalSolved",reasoningPieChartTotalSolved);

        resultantMap.put("quantTotalQuestionVsSolved",quantTotalQuestionVsSolved);
        resultantMap.put("reasoningTotalQuestionVsSolved",reasoningTotalQuestionVsSolved);
        resultantMap.put("quantChapterWiseMaxAvgTime",quantChapterWiseMaxAvgTime);
        resultantMap.put("reasoningChapterWiseMaxAvgTime",reasoningChapterWiseMaxAvgTime);

        return resultantMap;
    }
}
