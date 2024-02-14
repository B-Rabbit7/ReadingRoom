import { Form, Link, redirect } from "react-router-dom";
import fetch from "../utils/fetch";

const RegisterUser = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await fetch.post("/auth/signup", data);
    console.log("Registration successful");
    return redirect("/home");
  } catch (error) {
    console.log(error);
    return error;
  }
};

function Register() {
  return (
    <div>
      <h3>Register Page</h3>
      <div>
        <Form method="post" className="form">
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
            <label>First Name</label>
            <input
              type="text"
              id="firstname"
              placeholder="First Name"
              required
            ></input>
          </div>

          <div>
            <label>Last Name</label>
            <input
              type="text"
              id="lastname"
              placeholder="Last Name"
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

          <button onClick={RegisterUser}>Register</button>
        </Form>
      </div>
      <div>
        Already have an account? <Link to="/login">Sign in here</Link>
      </div>
    </div>
  );
}

export default Register;
