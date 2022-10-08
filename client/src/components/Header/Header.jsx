import React from "react";
import styles from "../Header/Header.module.css";
import style from "../Header/Nav.module.css";
import { Link } from "react-router-dom";
import { getLoginState } from "../../store/slices/authSlice";
import { useSelector } from "react-redux";
// import gujgov from '../../assets/guj-gov.png'
const Header = () => {
  const user = useSelector(getLoginState);
  return (
    <>
      <div className={style.container1}>
        <div className={style.left}>
          {user?.role === "admin" && (
            <Link to={"/worker"}>
              <button>Wokers</button>
            </Link>
          )}
          {(user?.role === "admin" || user?.role === "zonal") && (
            <Link to={"/aanganwadi"}>
              <button>Aanganwadi</button>
            </Link>
          )}
          {user?.role === "worker" && (
            <Link to={"/stock"}>
              <button>Stock</button>
            </Link>
          )}
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
