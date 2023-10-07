import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import Loading from "../../../components/Loading";
import { fetchQreQuestions, fetchTestId } from "../../../services/services";
import TestLandingPage from "./TestLandingPage";
import FixedTestHeader from "../../../components/FixedTestHeader";

function CreateQreTest() {
    const location = useLocation();
    const [testIdObject, setTestIdObject] = useState([]);
    const [loading, setLoading] = useState(true); // Set loading to true initially
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        // Fetch test ID
        (async function () {
            try {
                const resData = await fetchTestId(location.state.subject, location.state.month);
                console.log("TestIdObject:", resData);
                setTestIdObject(resData);
            } catch (error) {
                console.error("Error fetching test ID:", error);
            } finally {
                // Set loading to false after fetching test ID
                //setLoading(false);
            }
        })();
    }, [location.state.subject, location.state.month]);

    useEffect(() => {
        // Fetch questions when testIdObject changes

            (async function () {
                setLoading(true); // Set loading to true while fetching questions
                try {
                    const resData = await fetchQreQuestions(
                        location.state.numQuestions,
                        location.state.flag,
                        location.state.subject,
                        location.state.chapter,
                        location.state.accuracy,
                        location.state.month,
                        location.state.time,
                        location.state.timeValue
                    );
                    console.log("Fetched Questions:", resData);

                    // Ensure that the resData is an array before setting the state
                    if (Array.isArray(resData)) {
                        setQuestions(resData);
                    } else {
                        console.error("Invalid data format for questions:", resData);
                    }
                } catch (error) {
                    console.error("Error fetching questions:", error);
                } finally {
                    // Set loading to false after fetching questionsz
                    setLoading(false);
                }
            })();
    }, []);

    return (
        <>
            <FixedTestHeader testIdObject = {testIdObject}/>
            {loading ? (
                <Loading />
            ) : (
                <TestLandingPage questions={questions} />
            )}
        </>
    );
}

export default CreateQreTest;
