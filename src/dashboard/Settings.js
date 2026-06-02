import React from 'react';

const Settings = () => (
  <div className="dashboard-panel card">
    <h3>Settings</h3>
    <p>Manage account preferences and demo login options.</p>
    <div className="settings-list">
      <div className="settings-row">
        <span>Email preferences</span>
        <button type="button" className="button-secondary">Update</button>
      </div>
      <div className="settings-row">
        <span>Account security</span>
        <button type="button" className="button-secondary">Edit</button>
      </div>
    </div>
  </div>
);

export default Settings;
