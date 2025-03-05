import React from "react";
import "./styles.css"; // Import your CSS file for styling

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="logo">Little Lemon</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#reservations">Reservations</a></li>
        <li><a href="#order">Order Online</a></li>
        <li><a href="#login">Login</a></li>
      </ul>
    </nav>
  );
};

export default Nav;
