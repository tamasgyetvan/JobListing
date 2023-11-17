import { Header } from "./components/Header";
import "./scss/base/_base.scss";
import "./scss/layout/_main.scss";
import { JobList } from "./components/JobList";
import { Filter } from "./components/Filter";
import data from "../data.json";
import { useState } from "react";
import { JobObject } from "./types/JobObject.type";

function App() {
  const [jobData, setJobData] = useState<Array<JobObject>>(data);
  return (
    <>
      <Header></Header>
      <main>
        <Filter></Filter>
        <JobList data={jobData}></JobList>
      </main>
    </>
  );
}

export default App;
