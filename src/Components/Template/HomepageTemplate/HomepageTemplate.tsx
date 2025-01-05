import { HomepageTemplateProps } from "./HomepageTemplate.interface";
import styles from "./HomepageTemplate.module.css";

export const HomepageTemplate = ({
  heroList,
  header,
}: HomepageTemplateProps) => {
  return (
    <div className={styles.homepageContainer}>
      {header}
      {heroList}
    </div>
  );
};
