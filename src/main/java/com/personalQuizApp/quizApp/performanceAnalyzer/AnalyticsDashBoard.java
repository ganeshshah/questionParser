package com.personalQuizApp.quizApp.performanceAnalyzer;

import com.personalQuizApp.quizApp.dataObjects.McqCSV;
import com.personalQuizApp.quizApp.dataObjects.TestData;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

import static com.personalQuizApp.quizApp.revisionStrategy.RevisionStrategy.calculateDateDifferenceInDays;

public class AnalyticsDashBoard {
    private static final String NOT_ATTEMPTED = "notAttempted";
    private static final String GREATER_THAN_7_DAYS = "moreThan7Days";
    private static final String GREATER_THAN_15_DAYS = "moreThan15Days";
    private static final String LESS_THAN_80_ACCURACY = "lessThan80Accuracy";
    private static final String GREATER_THAN_25_DAYS = "moreThan25Days";
    private static final String RBI24X7 = "RBI24X7";
    private static final String PIB24X7 = "PIB24X7";
    private static final String CA = "CA";
    private static final String SPOTLIGHT = "SPOTLIGHT";
    private static HashMap<Date, Integer> attemptsCalendar = new HashMap<>();
    private static final HashSet<String> supportedSubjects = new HashSet<String>() {{
        add(RBI24X7);
        add(PIB24X7);
        add(CA);
        add(SPOTLIGHT);
    }};


    public static HashMap<String, Object> prepareAnalyticsData(List<McqCSV> listOfQuestions) {
        HashMap<String, Object> resultMap = new HashMap<>();
        HashMap<String, ArrayList<Integer>> doughNutData = new HashMap<>();
        ArrayList<ArrayList<Object>> doughNutFinalData = new ArrayList<>();
        ArrayList<Object> headers = new ArrayList<>();
        headers.add("Subject");
        headers.add("Completion Status");
        doughNutFinalData.add(headers);
        Integer totalQuestions = 0;
        Integer totalAttempted = 0;
        Date todaysDate = new Date();

        doughNutData.put(RBI24X7, new ArrayList<>(Collections.nCopies(2, 0)));
        doughNutData.put(PIB24X7, new ArrayList<>(Collections.nCopies(2, 0)));
        doughNutData.put(CA, new ArrayList<>(Collections.nCopies(2, 0)));
        doughNutData.put(SPOTLIGHT, new ArrayList<>(Collections.nCopies(2, 0)));


        // final return list
        ArrayList<ArrayList<Object>> doubleBarChartData = new ArrayList<>();


        // Use while calculation
        HashMap<String, HashMap<String, ArrayList<Integer>>> doubleBarChartDataMap = new HashMap<>();

        HashMap<String, ArrayList<Integer>> doubleBarChartDataItem = new HashMap<>();
        doubleBarChartDataItem.put(NOT_ATTEMPTED, new ArrayList<>(Collections.nCopies(2, 0)));
        doubleBarChartDataItem.put(GREATER_THAN_7_DAYS, new ArrayList<>(Collections.nCopies(2, 0)));
        doubleBarChartDataItem.put(GREATER_THAN_15_DAYS, new ArrayList<>(Collections.nCopies(2, 0)));
        doubleBarChartDataItem.put(GREATER_THAN_25_DAYS, new ArrayList<>(Collections.nCopies(2, 0)));
        doubleBarChartDataItem.put(LESS_THAN_80_ACCURACY, new ArrayList<>(Collections.nCopies(2, 0)));

        //
        HashMap<String, ArrayList<Integer>> doubleBarChartDataItem1 = new HashMap<>();
        doubleBarChartDataItem1.put(NOT_ATTEMPTED, new ArrayList<>(Collections.nCopies(2, 0)));
        doubleBarChartDataItem1.put(GREATER_THAN_7_DAYS, new ArrayList<>(Collections.nCopies(2, 0)));
        doubleBarChartDataItem1.put(GREATER_THAN_15_DAYS, new ArrayList<>(Collections.nCopies(2, 0)));
        doubleBarChartDataItem1.put(GREATER_THAN_25_DAYS, new ArrayList<>(Collections.nCopies(2, 0)));
        doubleBarChartDataItem1.put(LESS_THAN_80_ACCURACY, new ArrayList<>(Collections.nCopies(2, 0)));

        //

        HashMap<String, ArrayList<Integer>> doubleBarChartDataItem2 = new HashMap<>();
        doubleBarChartDataItem2.put(NOT_ATTEMPTED, new ArrayList<>(Collections.nCopies(2, 0)));
        doubleBarChartDataItem2.put(GREATER_THAN_7_DAYS, new ArrayList<>(Collections.nCopies(2, 0)));
        doubleBarChartDataItem2.put(GREATER_THAN_15_DAYS, new ArrayList<>(Collections.nCopies(2, 0)));
        doubleBarChartDataItem2.put(GREATER_THAN_25_DAYS, new ArrayList<>(Collections.nCopies(2, 0)));
        doubleBarChartDataItem2.put(LESS_THAN_80_ACCURACY, new ArrayList<>(Collections.nCopies(2, 0)));

        //
        HashMap<String, ArrayList<Integer>> doubleBarChartDataItem3 = new HashMap<>();
        doubleBarChartDataItem3.put(NOT_ATTEMPTED, new ArrayList<>(Collections.nCopies(2, 0)));
        doubleBarChartDataItem3.put(GREATER_THAN_7_DAYS, new ArrayList<>(Collections.nCopies(2, 0)));
        doubleBarChartDataItem3.put(GREATER_THAN_15_DAYS, new ArrayList<>(Collections.nCopies(2, 0)));
        doubleBarChartDataItem3.put(GREATER_THAN_25_DAYS, new ArrayList<>(Collections.nCopies(2, 0)));
        doubleBarChartDataItem3.put(LESS_THAN_80_ACCURACY, new ArrayList<>(Collections.nCopies(2, 0)));


        doubleBarChartDataMap.put(RBI24X7, doubleBarChartDataItem);
        doubleBarChartDataMap.put(PIB24X7, doubleBarChartDataItem1);
        doubleBarChartDataMap.put(CA, doubleBarChartDataItem2);
        doubleBarChartDataMap.put(SPOTLIGHT, doubleBarChartDataItem3);


        for (McqCSV question : listOfQuestions) {
            if (supportedSubjects.contains(question.getSubject())) {
                totalQuestions++;
                SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
                String formattedDate = sdf.format(todaysDate);
                String questionCreatedDate = question.getCreatedDate().toString().substring(0, 10);
                long daysGap = calculateDateDifferenceInDays(questionCreatedDate, formattedDate);
                Integer noOfAttempts = question.getNoOfAttempt();

                ArrayList<Integer> values = doughNutData.get(question.getSubject());
                if (noOfAttempts > 0) {
                    values.set(0, values.get(0) + 1);
                    doughNutData.put(question.getSubject(), values);
                } else {
                    values.set(1, values.get(1) + 1);
                    doughNutData.put(question.getSubject(), values);
                }

                String subject = question.getSubject();
                if (noOfAttempts != null && noOfAttempts > 0)
                    totalAttempted++;
                if (noOfAttempts != null && noOfAttempts == 0) {
                    Integer value = doubleBarChartDataMap.get(subject).get(NOT_ATTEMPTED).get(0) + 1;
                    doubleBarChartDataMap.get(subject).get(NOT_ATTEMPTED).set(0, value);
                } else if (noOfAttempts != null && daysGap <= 7) {
                    Integer value = doubleBarChartDataMap.get(subject).get(NOT_ATTEMPTED).get(1) + 1;
                    doubleBarChartDataMap.get(subject).get(NOT_ATTEMPTED).set(1, value);
                } else if (daysGap > 7 && daysGap < 15) {
                    if (noOfAttempts != null && noOfAttempts < 2) {
                        Integer value = doubleBarChartDataMap.get(subject).get(GREATER_THAN_7_DAYS).get(0) + 1;
                        doubleBarChartDataMap.get(subject).get(GREATER_THAN_7_DAYS).set(0, value);
                    } else {
                        Integer value = doubleBarChartDataMap.get(subject).get(GREATER_THAN_7_DAYS).get(1) + 1;
                        doubleBarChartDataMap.get(subject).get(GREATER_THAN_7_DAYS).set(1, value);
                    }
                } else if (daysGap >= 15 && daysGap < 25) {
                    if (noOfAttempts != null && noOfAttempts < 3) {
                        Integer value = doubleBarChartDataMap.get(subject).get(GREATER_THAN_15_DAYS).get(0) + 1;
                        doubleBarChartDataMap.get(subject).get(GREATER_THAN_15_DAYS).set(0, value);
                    } else {
                        Integer value = doubleBarChartDataMap.get(subject).get(GREATER_THAN_15_DAYS).get(1) + 1;
                        doubleBarChartDataMap.get(subject).get(GREATER_THAN_15_DAYS).set(1, value);
                    }
                } else if (daysGap >= 25) {
                    if (noOfAttempts != null && noOfAttempts < 4) {
                        Integer value = doubleBarChartDataMap.get(subject).get(GREATER_THAN_25_DAYS).get(0) + 1;
                        doubleBarChartDataMap.get(subject).get(GREATER_THAN_25_DAYS).set(0, value);
                    } else {
                        Integer value = doubleBarChartDataMap.get(subject).get(GREATER_THAN_25_DAYS).get(1) + 1;
                        doubleBarChartDataMap.get(subject).get(GREATER_THAN_25_DAYS).set(1, value);
                    }
                }
            }
        }

        for (Map.Entry<String, ArrayList<Integer>> innerEntry : doughNutData.entrySet()) {

            String subject = innerEntry.getKey();
            ArrayList<Integer> values = innerEntry.getValue();
            ArrayList<Object> data = new ArrayList<>();
            data.add(subject);
            data.add(values.get(0)*100.0 / (values.get(0) + values.get(1)));
            doughNutFinalData.add(data);
        }



        doubleBarChartData = prepareListForDoubleBarChart(doubleBarChartDataMap);

        resultMap.put("totalQuestions", totalQuestions);
        resultMap.put("totalAttempted", totalAttempted);
        resultMap.put("doughnutChartData", doughNutFinalData);
        resultMap.put("doubleBarChartData", doubleBarChartData);
        resultMap.put("subjectWiseBarChartData", doubleBarChartDataMap);
        resultMap.put("calendarData", attemptsCalendar);
        return resultMap;
    }

    private static ArrayList<ArrayList<Object>> prepareListForDoubleBarChart(HashMap<String, HashMap<String, ArrayList<Integer>>> doubleBarChartDataMap) {
        ArrayList<ArrayList<Object>> barData = new ArrayList<>();
        //ArrayList<ArrayList<Object>> doughNutData = new ArrayList<>();
        HashMap<String, Double> doughNutInnerData = new HashMap<>();

        HashMap<String, ArrayList<Integer>> innerData = new HashMap<>();
        innerData.put(NOT_ATTEMPTED, new ArrayList<>(Collections.nCopies(2, 0)));
        innerData.put(GREATER_THAN_7_DAYS, new ArrayList<>(Collections.nCopies(2, 0)));
        innerData.put(GREATER_THAN_15_DAYS, new ArrayList<>(Collections.nCopies(2, 0)));
        innerData.put(GREATER_THAN_25_DAYS, new ArrayList<>(Collections.nCopies(2, 0)));
        innerData.put(LESS_THAN_80_ACCURACY, new ArrayList<>(Collections.nCopies(2, 0)));

        for (Map.Entry<String, HashMap<String, ArrayList<Integer>>> entry : doubleBarChartDataMap.entrySet()) {
            HashMap<String, ArrayList<Integer>> innerMap;
            // Criteria wise question distribution map
            innerMap = entry.getValue();

            for (Map.Entry<String, ArrayList<Integer>> innerEntry : innerMap.entrySet()) {
                // Question criteria
                String categoryName = innerEntry.getKey();
                // Numbers for total and target
                ArrayList<Integer> values = innerEntry.getValue();
                ArrayList<Integer> values2 = innerData.get(categoryName);
                values2.set(0, values2.get(0) + values.get(0));
                values2.set(1, values2.get(1) + values.get(1));
                innerData.put(categoryName, values2);
            }
        }

        barData.add(new ArrayList<>(Arrays.asList("Criteria", "Still to be completed", "Completed till now")));

        for (Map.Entry<String, ArrayList<Integer>> innerEntry : innerData.entrySet()) {
            String categoryName = innerEntry.getKey();
            ArrayList<Integer> values = innerEntry.getValue();
            ArrayList<Object> data = new ArrayList<>();
            data.add(categoryName);
            data.add(values.get(0));
            data.add(values.get(1));
            barData.add(data);
        }
        return barData;
    }

    public static Object processLineChartData(List<TestData> allAttemptedQuestions) {
        HashMap<Integer, ArrayList<Integer>> result = new HashMap<>();
        for (int i = 1; i <= 31; i++) {
            result.put(i, new ArrayList<>(Collections.nCopies(12, 0)));
        }
        for (TestData tdata : allAttemptedQuestions) {
            if (attemptsCalendar.containsKey(tdata.getTestDate())) {
                Integer value = attemptsCalendar.get(tdata.getTestDate());
                attemptsCalendar.put(tdata.getTestDate(), value + 1);
            } else {
                attemptsCalendar.put(tdata.getTestDate(), 0);
            }
            int[] dayMonth = extractMonthAndDay(tdata.getTestDate().toString());
            Integer value = result.get(dayMonth[0]).get(dayMonth[1] - 1);
            result.get(dayMonth[0]).set(dayMonth[1] - 1, value + 1);
        }
        return result;
    }

    public static int[] extractMonthAndDay(String dateString) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.SSSSSS");

        try {
            Date date = sdf.parse(dateString);
            Calendar calendar = Calendar.getInstance();
            calendar.setTime(date);

            int month = calendar.get(Calendar.MONTH) + 1; // Add 1 for 1-based month
            int day = calendar.get(Calendar.DAY_OF_MONTH);

            return new int[]{day, month};
        } catch (ParseException e) {
            e.printStackTrace();
            return new int[]{-1, -1}; // Return sentinel values or handle the error as needed
        }
    }
}
