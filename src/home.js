import React from 'react';
import Sidebar from './components/Sidebar';
import DashboardContent from './components/DashboardContent';
import './App.css';

function home() {
  return (
    <div className="app">
      <Sidebar />
      <DashboardContent />
    </div>
  );
}

export default home;
