package com.personalQuizApp.quizApp.revisionStrategy;

import com.personalQuizApp.quizApp.dataObjects.McqCSV;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

public class RevisionStrategy {
    public static final String NOT_ATTEMPTED = "notAttempted";
    public static final String GREATER_THAN_7_DAYS = "7Days";
    public static final String GREATER_THAN_15_DAYS = "15Days";
    public static final String LESS_THAN_80_ACCURACY = "lessThan80Accuracy";
    public static final String GREATER_THAN_25_DAYS = "25Days";
    public static final String RBI24X7 = "RBI24X7";
    public static final String PIB24X7 = "PIB24X7";
    public static final String CA = "CA";
    public static final String SPOTLIGHT = "SPOTLIGHT";
    public static HashMap<String,HashMap<String, ArrayList<Integer>>>  processAllQuestions(List<McqCSV> allQuestions, String givenSubject) {
        HashMap<String,HashMap<String, ArrayList<Integer>>>  revisionMap = new HashMap<>();
        HashMap<String,HashMap<String, ArrayList<Integer>>>  finalResult = new HashMap<>();
        HashMap<String, ArrayList<Integer>> distributionMapRBI24X7 = new HashMap<>();
        distributionMapRBI24X7.put(NOT_ATTEMPTED,new ArrayList<>());
        distributionMapRBI24X7.put(GREATER_THAN_7_DAYS,new ArrayList<>());
        distributionMapRBI24X7.put(GREATER_THAN_15_DAYS,new ArrayList<>());
        distributionMapRBI24X7.put(GREATER_THAN_25_DAYS,new ArrayList<>());
        distributionMapRBI24X7.put(LESS_THAN_80_ACCURACY,new ArrayList<>());
        HashMap<String, ArrayList<Integer>> distributionMapPIB24X7 = new HashMap<>();
        distributionMapPIB24X7.put(NOT_ATTEMPTED,new ArrayList<>());
        distributionMapPIB24X7.put(GREATER_THAN_7_DAYS,new ArrayList<>());
        distributionMapPIB24X7.put(GREATER_THAN_15_DAYS,new ArrayList<>());
        distributionMapPIB24X7.put(GREATER_THAN_25_DAYS,new ArrayList<>());
        distributionMapPIB24X7.put(LESS_THAN_80_ACCURACY,new ArrayList<>());
        HashMap<String, ArrayList<Integer>> distributionMapCA = new HashMap<>();
        distributionMapCA.put(NOT_ATTEMPTED,new ArrayList<>());
        distributionMapCA.put(GREATER_THAN_7_DAYS,new ArrayList<>());
        distributionMapCA.put(GREATER_THAN_15_DAYS,new ArrayList<>());
        distributionMapCA.put(GREATER_THAN_25_DAYS,new ArrayList<>());
        distributionMapCA.put(LESS_THAN_80_ACCURACY,new ArrayList<>());
        HashMap<String, ArrayList<Integer>> distributionMapSPOTLIGHT = new HashMap<>();
        distributionMapSPOTLIGHT.put(NOT_ATTEMPTED,new ArrayList<>());
        distributionMapSPOTLIGHT.put(GREATER_THAN_7_DAYS,new ArrayList<>());
        distributionMapSPOTLIGHT.put(GREATER_THAN_15_DAYS,new ArrayList<>());
        distributionMapSPOTLIGHT.put(GREATER_THAN_25_DAYS,new ArrayList<>());
        distributionMapSPOTLIGHT.put(LESS_THAN_80_ACCURACY,new ArrayList<>());
        revisionMap.put(RBI24X7,distributionMapRBI24X7);
        revisionMap.put(PIB24X7,distributionMapPIB24X7);
        revisionMap.put(CA,distributionMapCA);
        revisionMap.put(SPOTLIGHT,distributionMapSPOTLIGHT);

        // Iterate through all questions and prepare revisionMap
        for(McqCSV question : allQuestions){
            Date todaysDate = new Date();
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
            String formattedDate = sdf.format(todaysDate);
            String questionCreatedDate = question.getCreatedDate().toString().substring(0,10);
            long daysGap = calculateDateDifferenceInDays(questionCreatedDate,formattedDate);
            Integer noOfAttempts = question.getNoOfAttempt();
            String subject = question.getSubject();
            Integer accuracy = (int) question.getAccurracy();

            if(noOfAttempts == 0){
                revisionMap.get(subject).get(NOT_ATTEMPTED).add(question.getId());
            }
            else if(daysGap >=7 && noOfAttempts==1){
                revisionMap.get(subject).get(GREATER_THAN_7_DAYS).add(question.getId());
            } else if (daysGap >=15 && noOfAttempts==2) {
                revisionMap.get(subject).get(GREATER_THAN_15_DAYS).add(question.getId());
            }
            else if (daysGap >=25 && noOfAttempts==3) {
                revisionMap.get(subject).get(GREATER_THAN_25_DAYS).add(question.getId());
            } else if (noOfAttempts > 3 && accuracy < 80 ) {
                // even after 4th attempt less accuracy give one more attempt
                revisionMap.get(subject).get(LESS_THAN_80_ACCURACY).add(question.getId());
            }
        }
        if(!givenSubject.equals("ALL")){
            finalResult.put(givenSubject,revisionMap.get(givenSubject));
            return finalResult;
        }
        return revisionMap;
    }


    public static long calculateDateDifferenceInDays(String dateStr1, String dateStr2) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");

        // Parse the date strings into LocalDate objects
        LocalDate date1 = LocalDate.parse(dateStr1, formatter);
        LocalDate date2 = LocalDate.parse(dateStr2, formatter);

        // Calculate the difference in days
        long daysDifference = ChronoUnit.DAYS.between(date1, date2);

        return Math.abs(daysDifference);
    }
}
