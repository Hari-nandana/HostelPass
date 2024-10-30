// src/components/VisitorForm.js
import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

const VisitorForm = () => {
  const [formData, setFormData] = useState({
    visitorName: '',
    reason: '',
    studentName: '',
    rollNo: '',
    phone: '',
    date: '',
    time: '',
  });

  const handleSubmit = async () => {
    const { data, error } = await supabase.from('visitors').insert([formData]);
    if (error) {
      console.error('Error submitting visitor form:', error);
    } else {
      alert('Visitor form submitted successfully!');
      // Clear form after submission
      setFormData({
        visitorName: '',
        reason: '',
        studentName: '',
        rollNo: '',
        phone: '',
        date: '',
        time: '',
      });
    }
  };

  // Inline styles
  const formContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    maxWidth: '500px',
    margin: '0 auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ddd',
    fontSize: '16px',
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: '80px',
    resize: 'none',
  };

  const buttonStyle = {
    padding: '12px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '20px',
    width: '100%',
  };

  const buttonHoverStyle = {
    backgroundColor: '#45a049',
  };

  return (
    <div style={formContainerStyle}>
      <h1>Visitor Form</h1>
      <input
        type="text"
        placeholder="Visitor Name"
        value={formData.visitorName}
        onChange={(e) => setFormData({ ...formData, visitorName: e.target.value })}
        style={inputStyle}
      />
      <textarea
        placeholder="Reason"
        value={formData.reason}
        onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
        style={textareaStyle}
      />
      <input
        type="text"
        placeholder="Student Name"
        value={formData.studentName}
        onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
        style={inputStyle}
      />
      <input
        type="text"
        placeholder="Roll No"
        value={formData.rollNo}
        onChange={(e) => setFormData({ ...formData, rollNo: e.target.value })}
        style={inputStyle}
      />
      <input
        type="tel"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        style={inputStyle}
      />
      <input
        type="date"
        value={formData.date}
        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        style={inputStyle}
      />
      <input
        type="time"
        value={formData.time}
        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
        style={inputStyle}
      />
      <button
        onClick={handleSubmit}
        style={buttonStyle}
        onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
        onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
      >
        Submit
      </button>
    </div>
  );
};

export default VisitorForm;
