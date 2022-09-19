import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './LoginForm.module.css'
const Login = () => {
    const navigate = useNavigate()
    const handleLogin = () => {
        navigate('/home')
    }

    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <div className={styles.content}>
                    <h3 className={styles.title}>Sign In</h3>
                    <div className="form-group mt-3">
                        <label>Username</label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="Enter username"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Enter password"
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-maincolor text-white" onClick={handleLogin}>
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Login