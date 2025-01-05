import { SkeletonProps } from "./Skeleton.interface";
import styles from "./Skeleton.module.css";

export const Skeleton = ({ width, height, margin }: SkeletonProps) => {
  return (
    <div
      className={styles.skeletonContainer}
      style={{ width: width, height: height, margin: margin }}
    />
  );
};
