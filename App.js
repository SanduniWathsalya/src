import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminLogin from './components/AdminLogin/AdminLogin';

import AdminLogin1 from './components/admindash/AdminDashboard';



function App() {
  return (
    <Router>
      <Header/>
    
        <Routes>
          <Route path="/admin-login" element={<AdminLogin />} /> {/* Admin Login */}
          <Route path="/admindash" element={<AdminLogin1 />} /> 
          
          </Routes>
        <ABCSchool />
      </ThemeProvider>
      <Footer/>
    </Router>
  );
};

export default App;