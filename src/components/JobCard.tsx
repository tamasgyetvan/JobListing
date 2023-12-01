import { JobObject } from "../types/JobObject.type";
import "../scss/components/_jobcard.scss";

type JobCardProps = {
  job: JobObject;
  tags: Array<string>;
};
export const JobCard: React.FC<JobCardProps> = (props) => {
  const { job, tags } = props;
  return (
    <div key={job.id} className={job.featured ? "jobCard featured" : "jobCard"}>
      <div className="jobInfo">
        <img className="jobLogo" src={job.logo} alt="Job logo" />
        <div className="jobDetails">
          <div>
            <h1 className="companyName">{job.company}</h1>
          </div>
          <h1 className="jobPosition">{job.position}</h1>
          <div>
            <h2>{job.postedAt}</h2>
            <p>&#8226;</p>
            <h2>{job.contract}</h2>
            <p>&#8226;</p>
            <h2>{job.location}</h2>
          </div>
        </div>
      </div>
      <div className="jobTags">
        {tags.map((tag) => {
          return <h2>{tag}</h2>;
        })}
      </div>
    </div>
  );
};
