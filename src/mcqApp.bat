@echo off

rem Start the Spring Boot app
echo Starting Spring Boot app...
cd C:\Users\Ganesh\Desktop\Development\quizApp
start mvn spring-boot:run

rem Wait for a few seconds to ensure the Spring Boot app has started
timeout /t 20

rem Start the React app
echo Starting React app...
cd C:\Users\Ganesh\Desktop\Development\quizApp\src\main\userinterface
start npm start

rem Inform the user that both apps are running
echo Both apps are running.

rem You can add more logic here if needed.
