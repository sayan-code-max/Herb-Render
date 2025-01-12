import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHomeClick = (e) => {
    e.preventDefault();

    if (location.pathname === '/') {
      // If we're already on the home page, scroll to the top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Navigate to the home page if we're on another page
      navigate('/', { replace: true });
    }
  };

  const handleContactClick = (e) => {
    e.preventDefault();

    if (location.pathname === '/') {
      // Scroll to contact section if already on the home page
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    } else {
      // Navigate to the home page, then scroll to contact after a delay
      navigate('/');
      setTimeout(() => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <div className="header">
      <a href="/" style={{ textDecoration: 'none' }} className="Logo">Logo</a>

      <nav className="navbar">
        {/* Home button with scroll-to-top functionality */}
        <a href="/" onClick={handleHomeClick} style={{ textDecoration: 'none' }}>Home</a>
        <Link to="/" style={{ textDecoration: 'none' }}>About</Link>
        <Link to="/" style={{ textDecoration: 'none' }}>Portfolio</Link>
        <Link to="/" style={{ textDecoration: 'none' }}>Service</Link>
        {/* Contact button with scroll-to-contact functionality */}
        <a href="/contact" onClick={handleContactClick} style={{ textDecoration: 'none' }}>Contact</a>
      </nav>
    </div>
  );
}

export default Nav;
