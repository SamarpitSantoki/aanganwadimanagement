import React from "react";
import styles from "../Header/Nav.module.css";
import Moment from "moment";

const date = Moment().format("llll");
function Nav() {
  return (
    <div className={styles.container}>
      <p className={styles.heading}>{date}</p>
      <div className={styles.right}>
        <button>English</button>
        <button>Gujarati</button>
        <button>+A</button>
        <button>A</button>
        <button>-A</button>
      </div>
    </div>
  );
}
export default Nav;
