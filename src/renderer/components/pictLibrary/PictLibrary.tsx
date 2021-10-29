import React from "react";
import styles from "./Pictlibrary.module.scss";
import { useEffect } from "react";

export function PictLibrary(): JSX.Element {
  useEffect(() => {
    const getImage = async (): void => {
      await window.image.get("C:Users\\vegedot\\Pictures\\PictLib\\ikura.jpg").then((result) => {
        const imageEl = document.getElementById("image_test") as HTMLImageElement;
        imageEl.src = result;
      });
    };
    getImage();
  }, []);
  return (
    <div className={styles.centering}>
      <span className={styles.pictlib}>PictLib</span>
      <img id="image_test" alt="" width="400" height="400" />
    </div>
  );
}
