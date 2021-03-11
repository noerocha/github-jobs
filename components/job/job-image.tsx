import {
  DetailedHTMLProps,
  ImgHTMLAttributes,
  useEffect,
  useState,
} from "react";
import css from "./job-card.module.css";

export interface JobImageProps
  extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  size: number;
}

export const JobImage: React.FC<JobImageProps> = ({ size, ...restOfProps }) => {
  const [loaded, setLoaded] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const shouldDisplay = loaded ? "block" : "none";
  const containerStyle = {
    width: size,
    height: size,
  };

  const placeholderStyle = {
    ...containerStyle,
    fontSize: `${size / (1 / 5)}px`,
    lineHeight: `${size}px`,
  };

  useEffect(() => {
    setHydrated(true);
  }, []);
  return (
    <div className={css["image-container"]} style={containerStyle}>
      {!loaded && (
        <div className={css["image-placeholder"]} style={placeholderStyle}>
          not found
        </div>
      )}
      {hydrated && (
        <img
          {...restOfProps}
          style={{ display: shouldDisplay }}
          onLoad={() => setLoaded(true)}
        />
      )}
    </div>
  );
};
