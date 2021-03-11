import { ElipsisIcon, RightIcon } from "../common/icon";
import css from "./pagination.module.css";

export interface HasNextProps {
  value: number;
  onSet(): void;
  onIncrement(): void;
}

export const HasNext: React.FC<HasNextProps> = ({
  value,
  onSet,
  onIncrement,
}) => {
  const more = `${css["pagination-button"]} ${css.more}`;
  console.log({ more });
  return (
    <>
      <div className={css["pagination-button"]} onClick={onSet}>
        <span>{value}</span>
      </div>
      <div className={more}>
        <ElipsisIcon />
      </div>
      <div className={css["pagination-button"]} onClick={onIncrement}>
        <RightIcon />
      </div>
    </>
  );
};
