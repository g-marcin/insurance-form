import styles from "./FormNavbar.module.css";

import { TabLink } from "./TabLink/TabLink";

export const FormNavbar = () => {
  return (
    <div className={styles.navbar}>
      <TabLink address={"owner"} />
      <TabLink address={"co-owner"} />
      <TabLink address={"car"} />
      <TabLink address={"summary"} />
    </div>
  );
};
