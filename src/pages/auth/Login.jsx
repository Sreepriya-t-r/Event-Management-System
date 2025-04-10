import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [gmailId, setGmailId] = useState('');
  const [role, setRole] = useState('user'); // default role
  const navigate = useNavigate();

  localStorage.setItem('user', JSON.stringify({
    username,
    role // 'admin' or 'user'
  }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password && gmailId) {
      alert('Login Successful!');
      // Navigate based on role
      if (role === 'admin') {
        navigate('/admin/dashboard');
      } else {
        navigate('/user/dashboard');
      }
    } else {
      alert('Please fill the form');
    }
  };

  return (
    <div className="container-login" style={{ marginTop: "100px" }}>
      <div className="form-container">
        <h2 className="title">Login</h2>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="gmail-id">Username</label>
            <input
              type="username"
              id="username"
              placeholder="Enter your username "
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
          <div className="form-group">
            <label htmlFor="role">Select Role</label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
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
