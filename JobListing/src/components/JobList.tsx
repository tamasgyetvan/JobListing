import { JobCard } from "./JobCard";
import "../scss/components/_joblist.scss";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

export const JobList: React.FC = () => {
  const { data } = useContext(DataContext);
  return (
    <div className="jobList">
      {data.map((job) => {
        return <JobCard key={job.id} job={job}></JobCard>;
      })}
    </div>
  );
};
