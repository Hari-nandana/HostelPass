// src/components/AdminPage.js
import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

const AdminPage = () => {
  const [passRequests, setPassRequests] = useState([]);

  useEffect(() => {
    fetchPassRequests();
  }, []);

  const fetchPassRequests = async () => {
    const { data, error } = await supabase.from('pass_requests').select('*');
    if (error) console.error('Error fetching pass requests:', error);
    else setPassRequests(data);
  };

  const handleAccept = async (id, phoneNumber) => {
    // Update the status to 'accepted' in the Supabase database
    const { error } = await supabase.from('pass_requests').update({ status: 'accepted' }).eq('id', id);
    
    if (error) {
      console.error('Error accepting pass request:', error);
    } else {
      alert(`Pass request accepted! Notification sent to ${phoneNumber}.`);

      // Filter out the accepted pass request from the passRequests state
      setPassRequests(passRequests.filter((request) => request.id !== id));

      // Optional: Integrate SMS functionality to notify the student
    }
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      {passRequests.length === 0 ? (
        <p>No pass requests available.</p>
      ) : (
        <ul>
          {passRequests.map((request) => (
            <li key={request.id}>
              <p>Name: {request.name}</p>
              <p>Room No: {request.roomNo}</p>
              <p>Going Date: {request.goingDate}</p>
              <p>Reason: {request.reason}</p>
              <p>Status: {request.status}</p>
              {request.status !== 'accepted' && (
                <button onClick={() => handleAccept(request.id, request.phoneNumber)}>
                  Accept Pass
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminPage;
