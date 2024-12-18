import { Link } from 'react-router-dom';
import React from 'react';

import './login.css';

function Login() {
  return (
    <div className="login">
      <div className="login-container">
        <h1>Welcome Back!</h1>
        <br></br>
        <br></br>
        <div className="logo-container">
          { <img src="/images/bannari logo.png" alt="Bannari Amman Institute of Technology" className="bannari logo" /> }
        </div>
        <h1 id="space">BANNARI AMMAN</h1>
        <h1>INSTITUTE OF TECHNOLOGY</h1>
        <br></br>
        <h3>Stay Ahead</h3>
        <div className="logo-name">
        <h2>Venue Booking Portal</h2>
        </div>
        <Link to ="/loginform">
        <button className="cursorlogin-button" style={{padding:'10px 30px'}}>Login</button>
        </Link>
        <p>Login with your BIT account</p>
      </div>
    </div>
  );
}

export default Login;