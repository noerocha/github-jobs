import { LoadIcon } from "../common/icon";
import css from "./loading.module.css";

export interface LoadingProps {}

export const Loading: React.FC<LoadingProps> = ({}) => {
  return <LoadIcon className={css.load} />;
};
