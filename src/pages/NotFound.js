import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <main className="page-section notfound-page">
    <div className="empty-state card">
      <h1>404</h1>
      <p>We couldn’t find that page. Head back to the Void storefront to continue shopping.</p>
      <Link to="/" className="button-primary">Return home</Link>
    </div>
  </main>
);

export default NotFound;
