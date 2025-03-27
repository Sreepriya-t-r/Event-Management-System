import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    if (!username || !email || !password || !confirmPassword) {
      setErrorMessage('Please fill out all fields.');
      setSuccessMessage('');
      return;
    }

    // const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    // if (!strongPasswordRegex.test(password)) {
      // setErrorMessage('Password must include uppercase, lowercase, numbers, and be at least 8 characters long.');
    //   setSuccessMessage('');
    //   return;
    // }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords don't match.");
      setSuccessMessage('');
      return;
    }

    setErrorMessage('');
    setSuccessMessage('Sign Up Successful! Redirecting to login...');
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  return (
    <div className="container-signup" style={{marginTop:"100px"}}>
      <form className="form-container">
        <h2 className="title">Sign Up</h2>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        {successMessage && <div className="success-message">{successMessage}</div>}
        <input className="input-field" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input className="input-field" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="input-field" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input className="input-field" type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        <button className="signup-button" type="button" onClick={handleSignUpClick}>Sign Up</button>
        <div className="footer">
          <a className="footer-link" href="/login">Already have an account? Log in</a>
        </div>
      </form>
    </div>
  );
};

export default Signup;