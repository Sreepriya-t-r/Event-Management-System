import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [gmailId, setGmailId] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password && gmailId) {
      alert('Signup Successful!');
      // Normally, you would send this to the backend
      navigate('/login'); // Redirect to login page after signup
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <div className="container-login" style={{ marginTop: "100px" }}>
      <div className="form-container">
        <h2 className="title">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
          <button type="submit" className="login-button">Sign Up</button>
        </form>
        <div className="footer">
          <a href="/login" className="footer-link">Already have an account? Login</a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
