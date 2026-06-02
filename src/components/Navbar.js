import React, { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BiCart, BiMenu, BiUser, BiX } from 'react-icons/bi';
import { useAuth } from '../hooks/useAuth';
import { useCart } from '../hooks/useCart';
import logo from '../assets/logo\'s/void logo font.png';

const Navbar = () => {
  const { user, logout } = useAuth();
  const { totalItems } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -48, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="navbar"
    >
      <div className="navbar-inner">
        <div className="brand" onClick={() => navigate('/') }>
          <img className="brand-logo" src={logo} alt="VOID Activewear" />
        </div>
        <button
          type="button"
          className="menu-toggle"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <BiX size={28} /> : <BiMenu size={28} />}
        </button>
        <div className={isMenuOpen ? 'navbar-menu open' : 'navbar-menu'}>
          <nav className="nav-links">
            <NavLink to="/" end>
              Home
            </NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/orders">Orders</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </nav>
          <div className="navbar-actions">
            <button type="button" className="icon-button" onClick={() => navigate('/cart')}>
              <BiCart size={24} />
              {totalItems > 0 && <span className="badge">{totalItems}</span>}
            </button>
            {user ? (
              <div className="user-menu">
                <button type="button" className="icon-button" onClick={() => navigate('/profile')}>
                  <BiUser size={22} />
                </button>
                <span className="user-name">{user.name}</span>
                <button type="button" className="logout-button" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            ) : (
              <div className="auth-links">
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/register" className="register-link">
                  Register
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
