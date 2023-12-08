import { JobCard } from "./JobCard";
import "../scss/components/_joblist.scss";
import { JobObject } from "../types/JobObject.type";

type JobListProps = {
  data: Array<JobObject>;
};

export const JobList: React.FC<JobListProps> = ({ data }) => {
  return (
    <div className="jobList">
      {data.length != 0 ? (
        data.map((job) => {
          const tags = [job.role, job.level, ...job.languages];
          return <JobCard tags={tags} job={job}></JobCard>;
        })
      ) : (
        <h2>No results</h2>
      )}
    </div>
  );
};
