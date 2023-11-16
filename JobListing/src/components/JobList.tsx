import data from "../../data.json";
import { JobCard } from "./JobCard";
import "../scss/components/_joblist.scss";

export const JobList: React.FC = () => {
  return (
    <div className="jobList">
      {data.map((job) => {
        return <JobCard key={job.id} job={job}></JobCard>;
      })}
    </div>
  );
};
