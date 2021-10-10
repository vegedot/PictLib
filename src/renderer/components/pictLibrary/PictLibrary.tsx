import React from "react";
import styles from "./Pictlibrary.module.scss";

export function PictLibrary(): JSX.Element {
  return (
    <div className={styles.centering}>
      <span className={styles.pictlib}>PictLib</span>
    </div>
  );
}
