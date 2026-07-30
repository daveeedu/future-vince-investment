import React from 'react';
import Sidebar from './Sidebar.jsx';
import DashNavbar from './DashNavbar.jsx';

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-[21%]">
        <DashNavbar />
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
