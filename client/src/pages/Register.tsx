// import { useState } from 'react'
// import "./App.css";

import { Link } from "react-router-dom";

function sendRegisterRequest() {
  // put login request logic in here
}

// type RegisterProps = {
//   badUsername: boolean;
// };

function Register() {
  // const badUsername = props.badUsername;
  return (
    <div>
      <h3>Register Page</h3>
      <div>
        Already have an account? <Link to="/login">Sign in here</Link>
      </div>
    </div>
  );
}

export default Register;
