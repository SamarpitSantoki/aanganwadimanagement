import { useState } from "react";
import { Toast, ToastBody, ToastContainer, ToastHeader } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axiosFetch from "../../helpers/axiosfetch";
import styles from "./LoginForm.module.css";

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setToastMessage("Please enter username and password");
      setShowToast(true);
      return;
    }
    try {
      const res = await axiosFetch({
        url: "/auth/login",
        method: "POST",
        data: {
          username,
          password,
        },
      });
      if (res.status ? res.status !== 200 : res.request.status !== 200) {
        setToastMessage(res.response.statusText);
        setShowToast(true);
        return;
      }
      sessionStorage.setItem("username", res.data.username);
      navigate("/aanganwadi");
      console.log(res);
    } catch (err) {
      toastMessage(err.message);
      setShowToast(true);
    }
    // navigate("/home");
  };

  return (
    <div className={styles.container}>
      <ToastContainer position="bottom-end">
        <Toast
          autohide
          show={showToast}
          onClose={() => setShowToast((prev) => !prev)}
        >
          <ToastHeader>
            <strong className="me-auto">Sign In</strong>
          </ToastHeader>
          <ToastBody>{toastMessage}</ToastBody>
        </Toast>
      </ToastContainer>
      <form className={styles.form}>
        <div className={styles.content}>
          <h3 className={styles.title}>Sign In</h3>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
