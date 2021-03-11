import Link from "next/link";

import { ArrowIcon } from "../common/icon";
import css from "./job-card.module.css";

export interface JobToApplyProps {
  html: string;
}

export const JobToApply: React.FC<JobToApplyProps> = ({ html }) => {
  return (
    <div className={css.apply}>
      <Link href="/">
        <a>
          <ArrowIcon /> Back to search
        </a>
      </Link>
      <h3 className={css["apply-header"]}>how to apply</h3>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};
