import { useNavigate, Link } from "react-router-dom";
import fetch from "../utils/fetch";

const LoginUser = async () => {
  const navigate = useNavigate();
  const data = {
    email: document.getElementById("email")!.value;
    email: document.getElementById("password")!.value;
  }
  try {
    await fetch.post("/auth/login", data);
    console.log("Login successful");
    navigate("/home");
  } catch (error) {
    console.log(error);
    return error;
  }
};


function Login() {
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
            ></input>
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              required
            ></input>
          </div>
          <button onClick={LoginUser}>Login</button>
        </form>
        Need to register for an account? <Link to="/">Sign up here</Link>
      </div>
    </div>
  );
}

export default Login;
