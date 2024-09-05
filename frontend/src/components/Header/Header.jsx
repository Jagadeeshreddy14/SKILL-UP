// import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'; // Assuming you have a CSS file for styling

function Header() {
  return (
    <header className="header">
      <div className="logo">SkillUp</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login/Signup</Link>
        <Link to="/profile">Student Profile</Link>
      </nav>
    </header>
  );
}

export default Header;
