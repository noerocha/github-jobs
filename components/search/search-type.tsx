import css from "./search.module.css";

export interface SearchTypeProps {
  checked: boolean;
  onChange(value: boolean): void;
}

export const SearchType: React.FC<SearchTypeProps> = ({
  checked,
  onChange,
}) => {
  const toggle = () => onChange(!checked);
  return (
    <>
      <input
        id="ft"
        className={css.checkbox}
        type="checkbox"
        checked={checked}
        onChange={toggle}
      />
      <label htmlFor="ft">Full Time</label>
    </>
  );
};
