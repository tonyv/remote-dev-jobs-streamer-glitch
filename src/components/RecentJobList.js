import React, { useEffect, useReducer } from "react";
import Job from "./Job";
import Spinner from "./Spinner";
import axios from "axios";

const reducer = (state, action) => {
  switch (action.type) {
    case "add_jobs":
      return { ...state, jobs: action.payload };
    case "update_waiting":
      return { ...state, error: null, isWaiting: true };
    default:
      return state;
  }
};

const RecentJobList = () => {
  const initialState = {
    jobs: [],
    isWaiting: true,
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const { jobs, error, isWaiting } = state;

  const getTweets = async () => {
    const response = await axios.get("/api/jobs");
    console.log("response =>", response.data.body);
    dispatch({ type: "add_jobs", payload: response.data.body });
  };

  useEffect(() => {
    getTweets();
  }, []);

  // Add includes JSON
  const showJobs = () => {
    if (jobs.length > 0) {
      return (
        <div className="ui segments">
          {jobs.data.map((job) => (
            <Job key={job.id} json={job} />
          ))}
        </div>
      );
    }
  };

  return <div className="twelve wide stretched column">{showJobs()}</div>;
};

export default RecentJobList;
