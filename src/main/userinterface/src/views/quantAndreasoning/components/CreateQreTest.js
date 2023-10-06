import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import Loading from "../../../components/Loading";
import {fetchQreQuestions, fetchTestId} from "../../../services/services";
import TestLandingPage from "./TestLandingPage";

function CreateQreTest() {

    const location = useLocation();
    const [testIdObject, setTestIdObject] = useState([]);
    const [loading, setLoading] = useState([false]);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        //this is a self invoked function to fetch all questions
        (async function () {
            setLoading(true)
            try {
                const resData = await fetchTestId(location.state.subject, location.state.month);
                console.log(resData)
                setTestIdObject(resData);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false)
            }
        })()
    }, []);

    const getQuestions = async () => {
        setLoading(true)
        try {
            const resData = await fetchQreQuestions(location.state.numQuestions, location.state.flag, location.state.subject,location.state.chapter, location.state.accuracy, location.state.month, location.state.time, location.state.timeValue);
            console.log(resData)
            setQuestions(resData);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        getQuestions()
    }, []);

    // fixed test header component contains buttons to start and end the test and a timer
    return (
        <>
            {loading &&
                <Loading />}
            <TestLandingPage questions = {questions} testIdObject={testIdObject} />
        </>
    );
}
export default CreateQreTest