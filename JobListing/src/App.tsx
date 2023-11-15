import { Header } from "./components/Header";
import { JobCard } from "./components/JobCard";
import "./scss/base/_base.scss";
import "./scss/layout/_main.scss";
import jobData from "../data.json";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        {jobData.map((job) => {
          return <JobCard key={job.id} job={job}></JobCard>;
        })}
      </main>
    </>
  );
}

export default App;
