// src/components/PassRequestForm.js
import React, { useState } from 'react';
import { supabase } from '../supabaseClient'; // Adjust the path as per your project structure

const PassRequestForm = () => {
    // Declare state variables for each form field
    const [name, setName] = useState('');
    const [roomNo, setRoomNo] = useState('');
    const [goingDate, setGoingDate] = useState('');
    const [reason, setReason] = useState('');

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if all values are available before submitting
        if (!name || !roomNo || !goingDate || !reason) {
            alert("Please fill out all the fields!");
            return;
        }

        // Insert the form data into Supabase
        const { data, error } = await supabase
            .from('pass_requests')
            .insert([
                {
                    name: name,
                    roomNo: roomNo,
                    goingDate: goingDate,
                    reason: reason
                }
            ]);

        if (error) {
            console.error('Error submitting pass request:', error);
        } else {
            console.log('Pass request submitted successfully:', data);
            // Reset form fields or show a success message
            setName('');
            setRoomNo('');
            setGoingDate('');
            setReason('');
        }
    };

    // Define inline styles
    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '400px',
        margin: '0 auto',
        padding: '20px',
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

    const buttonStyle = {
        padding: '12px 20px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        width: '100%',
        marginTop: '10px',
    };

    const buttonHoverStyle = {
        backgroundColor: '#45a049',
    };

    return (
        <form onSubmit={handleSubmit} style={formStyle}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
                style={inputStyle}
            />
            <input
                type="text"
                value={roomNo}
                onChange={(e) => setRoomNo(e.target.value)}
                placeholder="Room No"
                required
                style={inputStyle}
            />
            <input
                type="date"
                value={goingDate}
                onChange={(e) => setGoingDate(e.target.value)}
                required
                style={inputStyle}
            />
            <input
                type="text"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="Reason"
                required
                style={inputStyle}
            />
            <button
                type="submit"
                style={buttonStyle}
                onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
                onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
            >
                Submit
            </button>
        </form>
    );
};

export default PassRequestForm;
