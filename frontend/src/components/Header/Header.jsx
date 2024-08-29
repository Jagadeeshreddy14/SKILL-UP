import React from 'react';
import './header.css'; // Assuming you have a CSS file for styling

function Header() {
  return (
    <header className="header">
      <div className="logo">SkillUp</div>
      <nav>
        <a href="#">Home</a>
        <a href="#">Login/Signup</a>
        <a href="#">Student Profile</a>
      </nav>
    </header>
  );
}

export default Header;
