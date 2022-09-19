import React from "react";
import styles from "../Header/Header.module.css";
import style from "../Header/Nav.module.css";

// import gujgov from '../../assets/guj-gov.png'
const Header = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.heading}>
          <img src=""></img>
        </div>
      </div>
      <div className={style.container1}>
        <div className={style.left}>
          <button>Wokers</button>
          <button>Aanganwadi</button>
          <button>Stock</button>
          <button>Requests</button>
          <button>Profile</button>
        </div>
      </div>
    </>
  );
};

export default Header;
