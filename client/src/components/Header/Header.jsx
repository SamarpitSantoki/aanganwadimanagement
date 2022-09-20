import React from "react";
import styles from "../Header/Header.module.css";
import style from "../Header/Nav.module.css";
import { Link } from "react-router-dom";
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
          <Link to={"/adminstaff"}>
            <button>Admin Staff</button>
          </Link>
          <Link to={"/worker"}>
            <button>Wokers</button>
          </Link>
          <Link to={"/aanganwadi"}>
            <button>Aanganwadi</button>
          </Link>
          <Link to={"/stock"}>
            <button>Stock</button>
          </Link>
          <Link to={"/requests"}>
            <button>Requests</button>
          </Link>
          <Link to={"/profile"}>
            <button>Profile</button>
          </Link>
        </div>
      </div>
    </>
  );
};


export default Header;
