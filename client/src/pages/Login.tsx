// import { useState } from 'react'
// import "./App.css";

import { Link } from "react-router-dom";

function sendLoginRequest() {
  // put login request logic in here
}

// type LoginProps = {
//   loginFailed: boolean;
// };

function Login() {
  // const loginFailed = props.loginFailed;
  return (
    <div>
      <h3>Login Page</h3>
      <div>
        Need to register for an account? <Link to="/">Sign up here</Link>
      </div>
    </div>
  );
}

export default Login;
