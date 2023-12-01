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

  const applyFilters = useCallback(
    (roleFilterArray: Array<string>, levelFilterArray: Array<string>) => {
      let filterData = data;

      console.log(roleFilterArray, levelFilterArray, filterData);
      if (roleFilterArray?.length !== 0) {
        filterData = filterData.filter((job) =>
          roleFilterArray.includes(job.role)
        );
      }

      if (levelFilterArray?.length !== 0) {
        filterData = filterData.filter((job) =>
          levelFilterArray.includes(job.level)
        );
      }

      setJobData(filterData);
    },
    []
  );

  return (
    <>
      <Header></Header>
      <main>
        <MemoFilter applyFilters={applyFilters}></MemoFilter>
        <JobList data={jobData}></JobList>
      </main>
    </>
  );
}

export default App;
