import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 24px',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    
};

const linkStyle = {
    textDecoration: 'none',
    color: '#333',
    fontWeight: 'bold',
    fontSize: '16px',
    marginLeft: '20px'
  };

  return (
    <nav style={navStyle}>
      <div>
        <Link to="/" style={linkStyle}>Products</Link>
        <Link to="/cart" style={linkStyle}>Cart</Link>
      </div>
    </nav>
  );
};

export default Navbar;
