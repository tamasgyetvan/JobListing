import { Header } from "./components/Header";
import "./scss/base/_base.scss";
import "./scss/layout/_main.scss";
import { JobList } from "./components/JobList";
import { Filter } from "./components/Filter";
import data from "../data.json";
import { useCallback, useState } from "react";
import { JobObject } from "./types/JobObject.type";
import React from "react";

const MemoFilter = React.memo(Filter);

function App() {
  const [jobData, setJobData] = useState<Array<JobObject>>(data);

  const applyRoleFilter = useCallback((filterArray: Array<string>) => {
    if (filterArray?.length !== 0) {
      setJobData(data.filter((job) => filterArray?.includes(job.role)));
    } else {
      setJobData(data);
    }
  }, []);

  return (
    <>
      <Header></Header>
      <main>
        <MemoFilter applyRoleFilter={applyRoleFilter}></MemoFilter>
        <JobList data={jobData}></JobList>
      </main>
    </>
  );
}

export default App;
