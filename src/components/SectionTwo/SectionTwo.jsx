import React from "react";
import styles from "./SectionTwo.module.css";
const SectionTwo = () => {
  return (
    <section className={styles.SectionTwo}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h1>
            Our <span>Practice Areas</span>
          </h1>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in
          </p>
          <p>
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics, a large language ocean.
          </p>
          <button>LEARN MORE</button>
        </div>
        <div className={styles.right}>
          <div className={styles.cards}>
            <div className={styles.icon}>
              <i class="fa-solid fa-briefcase"></i>
            </div>
            <div className={styles.text}>
              <h3>Banking and Finance Law</h3>
              <p>
                Far far away, behind the word mountains, far from the countries
              </p>
            </div>
          </div>
          <div className={styles.cards}>
            <div className={styles.icon}>
              <i class="fa-solid fa-user-group"></i>
            </div>
            <div className={styles.text}>
              <h3>Commercial Law</h3>
              <p>
                Far far away, behind the word mountains, far from the countries
              </p>
            </div>
          </div>
          <div className={styles.cards}>
            <div className={styles.icon}>
              <i class="fa-solid fa-people-arrows"></i>
            </div>
            <div className={styles.text}>
              <h3>Corporate Law</h3>
              <p>
                Far far away, behind the word mountains, far from the countries
              </p>
            </div>
          </div>
          <div className={styles.cards}>
            <div className={styles.icon}>
              <i class="fa-solid fa-users-viewfinder"></i>
            </div>
            <div className={styles.text}>
              <h3>Criminal Law</h3>
              <p>
                Far far away, behind the word mountains, far from the countries
              </p>
            </div>
          </div>

          <div className={styles.MPA}>
            <p>More Practice Areas </p>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
