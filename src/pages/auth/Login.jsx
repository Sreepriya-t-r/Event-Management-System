import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../../../services/allApi";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const onBtnClick = async (e) => {
    e.preventDefault();
  console.log(data);
  
    try {
      const { password, email } = data;

  
      if (email && password) {
        const payload = {
          email: email,
          password: password,
        };
  
        let apiResponse = await loginUser(payload);
        console.log(apiResponse);
  
        if (apiResponse.status === 200) {
          alert("Login successful ✅");
          
        } else {
          alert("Invalid credentials ");
        }
  
      } else {
        alert("Please fill the form ");
      }
  
    } catch (err) {
      console.error("Login error:", err);
      alert("Something went wrong. Try again later.");
    }
  };
  

  return (
    <div className="container-login" style={{ marginTop: "100px" }}>
      <div className="form-container">
        <h2 className="title">Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Gmail ID</label>
            <input
              onChange={(e) => setData({ ...data, email: e.target.value })}
              type="email"
              id="email"
              placeholder="Enter your Gmail ID"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              onChange={(e) => setData({ ...data, password: e.target.value })}
              type="password"
              id="password"
              placeholder="Create a password"
              required
            />
          </div>

          <button onClick={onBtnClick} type="submit" className="login-button">
            Login
          </button>
        </form>
        <div className="footer">
          <Link to="/signup" className="footer-link">
            Don't have an account? Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
