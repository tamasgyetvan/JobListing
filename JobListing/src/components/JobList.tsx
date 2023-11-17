import { JobCard } from "./JobCard";
import "../scss/components/_joblist.scss";
import { JobObject } from "../types/JobObject.type";

type JobListProps = {
  data: Array<JobObject>;
};

export const JobList: React.FC<JobListProps> = ({ data }) => {
  return (
    <div className="jobList">
      {data.map((job) => {
        return <JobCard key={job.id} job={job}></JobCard>;
      })}
    </div>
  );
};
