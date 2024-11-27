import Cookies from 'js-cookie';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import StaffDashboard from './components/staff/StaffDashboard';
import AddStaffMember from './components/staff/AddStaffMember';
import AllStaffMembers from './components/staff/AllStaffMembers';
import UpdateStaffMember from './components/staff/UpdateStaffMember';
import StaffSalaryReport from './components/staff/StaffSalaryReport';
import ViewStaffRequest from './components/staff/ViewStaffRequest';
import Home from './components/Home';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/StaffDashboard" element={<StaffDashboard />} />

        <Route path="/AllStaffMembers" element={<AllStaffMembers />} />
        <Route path="/AddStaffMember" element={<AddStaffMember />} />
        <Route path="/StaffSalaryReport" element={<StaffSalaryReport />} />
        <Route path="/updatesmember/:id" element={<UpdateStaffMember />} />
        <Route path="/ViewStaffRequest" element={<ViewStaffRequest />} />
      </Routes>
    </Router>
  );
}
