import { JobObject } from "../types/JobObject.type";
import "../scss/components/_jobcard.scss";

type JobCardProps = {
  job: JobObject;
};
export const JobCard: React.FC<JobCardProps> = (props) => {
  const { job } = props;
  return (
    <div key={job.id} className="jobCard">
      <div className="jobInfo">
        <img className="jobLogo" src={job.logo} alt="Job logo" />
        <div className="jobDetails">
          <div>
            <h1 className="companyName">{job.company}</h1>
          </div>
          <h1 className="jobPosition">{job.position}</h1>
          <div>
            <h2>{job.postedAt}</h2>
            <h2>{job.contract}</h2>
            <h2>{job.location}</h2>
          </div>
        </div>
      </div>
      <div className="jobTags">
        <h2>{job.role}</h2>
        {job.languages.map((lang) => {
          return <h2>{lang}</h2>;
        })}
      </div>
    </div>
  );
};
