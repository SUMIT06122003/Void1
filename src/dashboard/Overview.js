import React from 'react';
import DashboardCard from '../components/DashboardCard';

const Overview = () => (
  <div className="dashboard-overview">
    <div className="overview-header">
      <h2>Welcome to your Void dashboard</h2>
      <p>Track recent activity, orders, and your wishlist from one place.</p>
    </div>
    <div className="grid-gap dashboard-stat-grid">
      <DashboardCard title="Saved items" value="8" description="Items waiting in your wishlist." />
      <DashboardCard title="Recent orders" value="3" description="Orders placed from your demo account." />
      <DashboardCard title="Fast checkout" value="Secure" description="Quick ordering with demo checkout." />
    </div>
  </div>
);

export default Overview;
