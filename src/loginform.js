import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './loginform.css';


function Loginform() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    // Add logic for login here
    console.log('Email:', email);
    console.log('Password:', password);
  };
  return (

    <div className="login-form">
    <div className="login-form-container">
      <form onSubmit={handleLogin}>
        <div className="form_group">
          <label htmlFor="email">Email ID</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email ID"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            required
          />
        </div>
        <Link to="/userhome">
        <button type="submit" className="login-button">Login</button>
        </Link>
      </form>

      <p className="forgot-password">Forgot password</p>
    </div>
  </div>
  );
}

export default Loginform;