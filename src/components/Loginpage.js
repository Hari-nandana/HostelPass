// src/components/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; // Styling for the page

// Example image (replace with your own if needed)
const loginImage = '/image5.jpg'; // Replace with your image URL or import it locally

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (username.trim() === '' || password.trim() === '') {
      setError('Username and Password are required');
      return;
    }

    if (username === 'admin' && password === 'admin') {
      navigate('/admin');
    } else if (username === 'student' && password === 'student') {
      navigate('/student');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      {/* Image at the top */}
      <img src={loginImage} alt="Login" className="login-image" />
      
      <div className="login-box">
        <h1 style={{fontWeight:'bold'}}>LOGIN</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input-field"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
        />
        {error && <p className="error-message">{error}</p>}
        <button onClick={handleSubmit} className="submit-button">Submit</button>
      </div>
    </div>
  );
};

export default LoginPage;
