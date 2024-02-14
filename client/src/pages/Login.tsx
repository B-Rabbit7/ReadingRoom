import { useNavigate, Link } from "react-router-dom";
import fetch from "../utils/fetch";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onLogin = async (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    try {
      await fetch.post("/auth/login", data);
      console.log("Login successful");
      navigate("/home");
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  return (
    <div>
      <h3>Login Page</h3>
      <div>
        <form>
          <div>
            <label>Email Address</label>
            <input
              type="text"
              id="email"
              placeholder="Email Address"
              required
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              required
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <button onClick={onLogin}>Login</button>
        </form>
        Need to register for an account? <Link to="/">Sign up here</Link>
      </div>
    </div>
  );
}

export default Login;
