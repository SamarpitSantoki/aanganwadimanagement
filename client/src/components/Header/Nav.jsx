import { useEffect, useState } from "react";
import styles from "../Header/Nav.module.css";
import Moment from "moment";
import axios from "axios";
import { FiCalendar } from "react-icons/fi";

const date = Moment().format("llll");
function Nav() {
  const [lan, setLan] = useState("en");
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: lan,
      },
      "google_translate_element"
    );
  };

  useEffect(() => {
    if (!window.googleTranslateElementInit) {
      let script = document.createElement("script");
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);
      document.getElementsByClassName;
      window.googleTranslateElementInit = googleTranslateElementInit;
      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);
  const handleClick = (e) => {
    document.cookie = "googtrans=" + e;
    location.reload();
  };
  return (
    <>
      <div className={styles.container}>
        <p className={styles.heading}>{date}</p>

        {/* <div id="google_translate_element"></div> */}
        <div className={styles.right}>
          <button
            onClick={() => {
              setLan("en");
              handleClick("/gu/en");
            }}
            id="/en/gu"
          >
            English
          </button>
          <button
            onClick={() => {
              setLan("gu");
              handleClick("/en/gu");
            }}
            id="/gu/en"
          >
            ગુજરાતી
          </button>
          <button>+A</button>
          <button>A</button>
          <button>-A</button>
          <button>Logout</button>
        </div>
      </div>
      <div className="logo">
        {/* <div className="img"> */}
        <img
          className="img-logo"
          src="https://www.digitalgujarat.gov.in/images/emblem-of-india.png"
          alt="emblem"
        />
        {/* </div> */}
        <h5 className="text-center text-2xl text-capitalize weight-700 m-0 text-alpha gov">
          Government of Gujarat
        </h5>
      </div>
    </>
  );
}
export default Nav;
