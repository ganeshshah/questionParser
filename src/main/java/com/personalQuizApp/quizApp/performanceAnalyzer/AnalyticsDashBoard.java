package com.personalQuizApp.quizApp.performanceAnalyzer;

import com.personalQuizApp.quizApp.dataObjects.McqCSV;

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
    private static ArrayList<ArrayList<Object>> doughNutData = new ArrayList<>();
    public static HashMap<String,Object> prepareAnalyticsData(List<McqCSV> listOfQuestions){
        HashMap<String,Object> resultMap = new HashMap<>();
        ArrayList<Object> headers =  new ArrayList<>();
        headers.add("Subject");
        headers.add("Completion Status");
        doughNutData.add(headers);
        Integer totalQuestions = listOfQuestions.size();
        Integer totalAttempted = 0;
        Date todaysDate = new Date();
        HashMap<String, Integer> doughnutChartData = new HashMap<>();
        HashMap<String, HashMap<Integer, ArrayList<Integer>>> lineChartData = new HashMap<>();

        // final return list
        ArrayList<ArrayList<Object>> doubleBarChartData = new ArrayList<>();


        // Use while calculation
        HashMap<String,HashMap<String, ArrayList<Integer>>>  doubleBarChartDataMap = new HashMap<>();
        HashMap<String, ArrayList<Integer>> doubleBarChartDataItem = new HashMap<>();
        doubleBarChartDataItem.put(NOT_ATTEMPTED,new ArrayList<>(Collections.nCopies(2, 0)));
        doubleBarChartDataItem.put(GREATER_THAN_7_DAYS,new ArrayList<>(Collections.nCopies(2, 0)));
        doubleBarChartDataItem.put(GREATER_THAN_15_DAYS,new ArrayList<>(Collections.nCopies(2, 0)));
        doubleBarChartDataItem.put(GREATER_THAN_25_DAYS,new ArrayList<>(Collections.nCopies(2, 0)));
        doubleBarChartDataItem.put(LESS_THAN_80_ACCURACY,new ArrayList<>(Collections.nCopies(2, 0)));

        //
        HashMap<String, ArrayList<Integer>> doubleBarChartDataItem1 = new HashMap<>();
        doubleBarChartDataItem1.put(NOT_ATTEMPTED,new ArrayList<>(Collections.nCopies(2, 0)));
        doubleBarChartDataItem1.put(GREATER_THAN_7_DAYS,new ArrayList<>(Collections.nCopies(2, 0)));
        doubleBarChartDataItem1.put(GREATER_THAN_15_DAYS,new ArrayList<>(Collections.nCopies(2, 0)));
        doubleBarChartDataItem1.put(GREATER_THAN_25_DAYS,new ArrayList<>(Collections.nCopies(2, 0)));
        doubleBarChartDataItem1.put(LESS_THAN_80_ACCURACY,new ArrayList<>(Collections.nCopies(2, 0)));

        //

        HashMap<String, ArrayList<Integer>> doubleBarChartDataItem2 = new HashMap<>();
        doubleBarChartDataItem2.put(NOT_ATTEMPTED,new ArrayList<>(Collections.nCopies(2, 0)));
        doubleBarChartDataItem2.put(GREATER_THAN_7_DAYS,new ArrayList<>(Collections.nCopies(2, 0)));
        doubleBarChartDataItem2.put(GREATER_THAN_15_DAYS,new ArrayList<>(Collections.nCopies(2, 0)));
        doubleBarChartDataItem2.put(GREATER_THAN_25_DAYS,new ArrayList<>(Collections.nCopies(2, 0)));
        doubleBarChartDataItem2.put(LESS_THAN_80_ACCURACY,new ArrayList<>(Collections.nCopies(2, 0)));

        //
        HashMap<String, ArrayList<Integer>> doubleBarChartDataItem3 = new HashMap<>();
        doubleBarChartDataItem3.put(NOT_ATTEMPTED,new ArrayList<>(Collections.nCopies(2, 0)));
        doubleBarChartDataItem3.put(GREATER_THAN_7_DAYS,new ArrayList<>(Collections.nCopies(2, 0)));
        doubleBarChartDataItem3.put(GREATER_THAN_15_DAYS,new ArrayList<>(Collections.nCopies(2, 0)));
        doubleBarChartDataItem3.put(GREATER_THAN_25_DAYS,new ArrayList<>(Collections.nCopies(2, 0)));
        doubleBarChartDataItem3.put(LESS_THAN_80_ACCURACY,new ArrayList<>(Collections.nCopies(2, 0)));


        doubleBarChartDataMap.put(RBI24X7,doubleBarChartDataItem);
        doubleBarChartDataMap.put(PIB24X7,doubleBarChartDataItem1);
        doubleBarChartDataMap.put(CA,doubleBarChartDataItem2);
        doubleBarChartDataMap.put(SPOTLIGHT,doubleBarChartDataItem3);
        doubleBarChartData.add(new ArrayList<>(Arrays.asList("Criteria", "Actual Target", "Completed till now")));

        for(McqCSV question : listOfQuestions){
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
            String formattedDate = sdf.format(todaysDate);
            String questionCreatedDate = question.getCreatedDate().toString().substring(0,10);
            long daysGap = calculateDateDifferenceInDays(questionCreatedDate,formattedDate);
            Integer noOfAttempts = question.getNoOfAttempt();
            String subject = question.getSubject();
            if(noOfAttempts!= null && noOfAttempts > 0)
                totalAttempted++;
            if (noOfAttempts!= null && noOfAttempts == 0) {
                Integer value = doubleBarChartDataMap.get(subject).get(NOT_ATTEMPTED).get(0) + 1;
                doubleBarChartDataMap.get(subject).get(NOT_ATTEMPTED).set(0,value);
            } else if(noOfAttempts!= null && daysGap <=7){
                Integer value = doubleBarChartDataMap.get(subject).get(NOT_ATTEMPTED).get(1) + 1;
                doubleBarChartDataMap.get(subject).get(NOT_ATTEMPTED).set(1,value);
            }else if (daysGap > 7 && daysGap < 15) {
                if(noOfAttempts!= null && noOfAttempts < 2 ){
                    Integer value = doubleBarChartDataMap.get(subject).get(GREATER_THAN_7_DAYS).get(0) + 1;
                    doubleBarChartDataMap.get(subject).get(GREATER_THAN_7_DAYS).set(0,value);
                }else {
                    Integer value = doubleBarChartDataMap.get(subject).get(GREATER_THAN_7_DAYS).get(1) + 1;
                    doubleBarChartDataMap.get(subject).get(GREATER_THAN_7_DAYS).set(1,value);
                }
            } else if (daysGap >= 15 && daysGap < 25) {
                if(noOfAttempts!= null && noOfAttempts < 3 ){
                    Integer value = doubleBarChartDataMap.get(subject).get(GREATER_THAN_15_DAYS).get(0) + 1;
                    doubleBarChartDataMap.get(subject).get(GREATER_THAN_15_DAYS).set(0,value);
                }else {
                    Integer value = doubleBarChartDataMap.get(subject).get(GREATER_THAN_15_DAYS).get(1) + 1;
                    doubleBarChartDataMap.get(subject).get(GREATER_THAN_15_DAYS).set(1,value);
                }
            } else if (daysGap >= 25 ) {
                if(noOfAttempts!= null && noOfAttempts < 4 ){
                    Integer value = doubleBarChartDataMap.get(subject).get(GREATER_THAN_25_DAYS).get(0) + 1;
                    doubleBarChartDataMap.get(subject).get(GREATER_THAN_25_DAYS).set(0,value);
                }else {
                    Integer value = doubleBarChartDataMap.get(subject).get(GREATER_THAN_25_DAYS).get(1) + 1;
                    doubleBarChartDataMap.get(subject).get(GREATER_THAN_25_DAYS).set(1,value);
                }
            }
        }

        doubleBarChartData = prepareListForDoubleBarChart(doubleBarChartDataMap);

        resultMap.put("totalQuestions",totalQuestions);
        resultMap.put("totalAttempted",totalAttempted);
        resultMap.put("doughnutChartData",doughNutData);
        //resultMap.put("lineChartData",lineChartData);
        resultMap.put("doubleBarChartData",doubleBarChartData);
        resultMap.put("subjectWiseBarChartData",doubleBarChartDataMap);
        doughNutData = new ArrayList<>();
        return resultMap;
    }

    private static ArrayList<ArrayList<Object>> prepareListForDoubleBarChart(HashMap<String, HashMap<String, ArrayList<Integer>>> doubleBarChartDataMap) {
        ArrayList<ArrayList<Object>> barData = new ArrayList<>();
        //ArrayList<ArrayList<Object>> doughNutData = new ArrayList<>();
        HashMap<String,Double> doughNutInnerData = new HashMap<>();

        HashMap<String, ArrayList<Integer>> innerData = new HashMap<>();

        for (Map.Entry<String, HashMap<String, ArrayList<Integer>>> entry : doubleBarChartDataMap.entrySet()) {
            String datasetName = entry.getKey();
            double target = 0;
            double done = 0;
            doughNutInnerData.put(datasetName,0.0);
            HashMap<String, ArrayList<Integer>> innerMap = entry.getValue();

            System.out.println("Dataset: " + datasetName);

            for (Map.Entry<String, ArrayList<Integer>> innerEntry : innerMap.entrySet()) {
                String categoryName = innerEntry.getKey();
                ArrayList<Integer> values = innerEntry.getValue();
                target += values.get(0);
                done += values.get(1);
                if(!innerData.containsKey(categoryName)){
                    innerData.put(categoryName,values);
                }else{
                    ArrayList<Integer> values2 = innerData.get(categoryName);
                    values2.set(0,values2.get(0)+values.get(0));
                    values2.set(1,values2.get(1)+values.get(1));
                    innerData.put(categoryName,values2);
                }
            }
            target = target + done;
            double doughnutValue = 0;
            if(target != 0){
                doughnutValue = done / target;
            }
            doughNutInnerData.put(datasetName, doughnutValue*100);
        }

        for (Map.Entry<String, ArrayList<Integer>> innerEntry : innerData.entrySet()) {
            String categoryName = innerEntry.getKey();
            ArrayList<Integer> values = innerEntry.getValue();
            ArrayList<Object> data = new ArrayList<>();
            data.add(categoryName);
            data.add(values.get(0));
            data.add(values.get(1));
            barData.add(data);
        }

        for (Map.Entry<String, Double> innerEntry : doughNutInnerData.entrySet()) {
            String subject = innerEntry.getKey();
            Double values = innerEntry.getValue();
            ArrayList<Object> data = new ArrayList<>();
            data.add(subject);
            data.add(values);
            doughNutData.add(data);
        }
        return barData;
    }
}
