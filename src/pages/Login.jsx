import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [gmailId, setGmailId] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password && gmailId) {
      alert('Login Successful!');
      navigate('/dashboard');
    } else {
      alert('Please fill the form');
    }
  };

  return (
    <div className="container-login" style={{marginTop:"100px"}} >
      <div className="form-container">
        <h2 className="title">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username or Email</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username or email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="gmail-id">Gmail ID</label>
            <input
              type="email"
              id="gmail-id"
              placeholder="Enter your Gmail ID"
              value={gmailId}
              onChange={(e) => setGmailId(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <div className="footer">
        
          <a href="/signup" className="footer-link">Don't have an account? Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
