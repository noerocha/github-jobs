import { FormEvent, useState } from "react";
import { GlobeIcon } from "../common/icon";
import css from "./search.module.css";

export interface SeachLocationProps {
  location?: string;
  onChange(value: string): void;
}

export const SearchLocation: React.FC<SeachLocationProps> = ({
  location,
  onChange,
}) => {
  const [value, setValue] = useState("");
  const [selections, setSelections] = useState<string[]>([]);

  const handleNewLocation = (e: FormEvent) => {
    e.preventDefault();
    setSelections(Array.from(new Set([...selections, value])));
    onChange(value);
    setValue("");
  };
  return (
    <form onSubmit={handleNewLocation}>
      <h3 className={css["location-header"]}>location</h3>
      <div className={css["location-input"]}>
        <GlobeIcon />
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      {selections.map((s) => (
        <div key={s}>
          <input
            type="radio"
            className={css.checkbox}
            id={s}
            name="select"
            value={s}
            checked={s === location}
            onChange={(e) => onChange(e.target.value)}
          />
          <label htmlFor={s}>{s}</label>
        </div>
      ))}
    </form>
  );
};
