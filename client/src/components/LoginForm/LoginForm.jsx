import { useState } from "react";
import { Toast, ToastBody, ToastContainer, ToastHeader } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axiosFetch from "../../helpers/axiosfetch";
import styles from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../store/slices/authSlice";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [Email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!Email || !password) {
      setShowToast(true);
      return;
    }
    try {
      const res = await axiosFetch({
        url: "/auth/login",
        method: "POST",
        data: {
          email: Email,
          password,
        },
      });
      if (res.status !== 200) {
        setShowToast(true);
        return;
      }
      console.log("sadasd");
      sessionStorage.setItem("user", JSON.stringify(res.data));
      dispatch(login(res.data));
      navigate("/aanganwadi");
      console.log(res);
    } catch (err) {
      setShowToast(true);
    }
    // navigate("/home");
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.content}>
          <h3 className={styles.title}>Sign In</h3>
          <div className="form-group mt-3">
            <label>Email</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter Email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button
              type="submit"
              className="btn btn-maincolor text-white"
              onClick={handleLogin}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
