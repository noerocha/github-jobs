import { useState } from "react";
import { WorkIcon } from "../common/icon";
import css from "./search.module.css";

export interface SearchBoxProps {
  onSearch(term: string): void;
}

export const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const [value, setValue] = useState("");
  return (
    <form
      className={css["search-box"]}
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(value);
      }}
    >
      <div className={css["search-box-input"]}>
        <WorkIcon />
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="title, companies, expertise or benefits"
        />
        <button type="submit">search</button>
      </div>
    </form>
  );
};
