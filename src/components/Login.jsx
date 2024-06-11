import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import './Styleee.css'
import { auth } from "./firebase";
import { toast } from "react-toastify";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      window.location.href = "/profile";
      toast.success("User logged in Successfully", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);

      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>

      <div className="container">
  <div className="form-control">
    <label>Email address</label>
    <input
      type="email"
      className="form-control"
      placeholder="Enter email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
  </div>

  <div className="form-control">
    <label>Password</label>
    <input
      type="password"
      className="form-control"
      placeholder="Enter password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
  </div>
</div>

      <div className="d-grid">
        <button type="submit" className="btn">
          Submit
        </button>
      </div>
      <p className="forgot-password text-right ">
        New user <a href="/SignUp">Register Here</a>
      </p>
      
    </form>
  );
}

export default Login;