import React from "react";
import styles from "./Header.module.css";
// import aboutImg from "../../assets/image/logo (12).png";
// import telImg from "../../assets/image/phone-call.svg";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <h1>
           Justice.
        </h1>
        <div className={styles.navBar}>
          <a  href="" className={styles.a}>
            HOME
          </a>
          <a href="" className={styles.a}>
            Practice Areas
          </a>
          <a href="" className={styles.a}>
            Services
          </a>
          <a href="" className={styles.a}>
            Attorneys
          </a>
          <a href="" className={styles.a}>
            About
          </a>
          <a href="" className={styles.a}>
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
