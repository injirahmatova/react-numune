import React from "react";
import styles from "./SectionOne.module.css";

const SectionOne = () => {
  return (
    <section className={styles.SectionOne}>
      <div className={styles.container}>
        <div className={styles.content}>
            <h2>We Fight <span>For Your Right</span></h2>
            <p>Another cool free template by the fine folks at <a href="">Colorlib</a>.</p>
            <button>FREE CONSULTATOIN</button>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
