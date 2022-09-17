import React from 'react'

import styles from '../Login/Login.module.css'
const Login = () => {
  return (
      <div className={styles.container}>
          <form className={styles.form}>
              <div className={styles.content}>
                  <h3 className={styles.title}>Sign In</h3>
                  <div className="form-group mt-3">
                      <label>Email address</label>
                      <input
                          type="email"
                          className="form-control mt-1"
                          placeholder="Enter email"
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
                      <button type="submit" className="btn btn-primary">
                          Submit
                      </button>
                  </div>
              </div>
          </form>
      </div>
  )
}

export default Login