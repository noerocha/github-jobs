import { GithubJob } from "../../lib/api";
import { fromToday } from "../../lib/date";
import css from "./job-card.module.css";
import { JobHeader } from "./job-header";
import { JobToApply } from "./job-to-apply";

export interface JobDescriptionProps extends GithubJob {}

export const JobDescription: React.FC<JobDescriptionProps> = ({
  title,
  type,
  location,
  company,
  company_logo,
  created_at,
  description,
  how_to_apply,
}) => {
  return (
    <div className={css["job-description"]}>
      <JobToApply html={how_to_apply} />
      <div>
        <JobHeader
          title={title}
          location={location}
          type={type}
          company={company}
          logo={company_logo}
          daysAgo={fromToday(created_at)}
        />
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  );
};
