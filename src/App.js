// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/Loginpage';

import StudentPage from './components/StudentPage';
import PassRequestForm from './components/PassRequestForm';
import StaffDetailsPage from './components/StaffDetailsPage';
import VisitorForm from './components/VisitorForm';
import AdminPage from './components/AdminPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/student" element={<StudentPage />} />
        <Route path="/pass-request" element={<PassRequestForm />} />
        <Route path="/staff-details" element={<StaffDetailsPage />} />
        <Route path="/visitor" element={<VisitorForm />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
};

export default App;
