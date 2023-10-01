import React, { useEffect, useState } from "react";
import FixedTestHeader from "../../components/FixedTestHeader.jsx";
import AllQuestions from "../allQuestions/AllQuestions";
import { useLocation } from 'react-router-dom';
import { fetchTestId } from '../../services/services.js'
import Loading from '../../components/Loading.jsx'

function CreateTest() {

  const location = useLocation();
  const [testIdObject, setTestIdObject] = useState([]);
  const [loading, setLoading] = useState([false]);

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

  // fixed test header component contains buttons to start and end the test and a timer 
  return (
    <>
      {loading &&
        <Loading />}
      <FixedTestHeader testIdObject={testIdObject} />
      <AllQuestions testIdObject={testIdObject} />
    </>
  );
}
export default CreateTest