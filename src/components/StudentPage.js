// src/components/StudentPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const StudentPage = () => {
  const navigate = useNavigate();

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f4',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  };

  const headingStyle = {
    fontSize: '28px',
    color: '#333',
    marginBottom: '30px',
  };

  const buttonStyle = {
    width: '200px',
    padding: '15px',
    margin: '10px 0',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s',
  };

  const buttonHoverStyle = {
    backgroundColor: '#45a049',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>STUDENT DASHBOARD</h1>
      <button
        style={buttonStyle}
        onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
        onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
        onClick={() => navigate('/pass-request')}
      >
        PASS REQUEST
      </button>
      <button
        style={buttonStyle}
        onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
        onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
        onClick={() => navigate('/staff-details')}
      >
        STAFF DETAILS
      </button>
      <button
        style={buttonStyle}
        onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
        onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
        onClick={() => navigate('/visitor')}
      >
        VISITOR
      </button>
    </div>
  );
};

export default StudentPage;
