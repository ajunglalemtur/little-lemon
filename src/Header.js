import React from "react";
import "./styles.css"; // Ensure styles are applied
import restauranFoodImage from "./images/restauranfood.jpg"; // ✅ Import local image

const Header = () => {
  return (
    <header className="hero">
      <div className="hero-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family-owned Mediterranean restaurant,  
          focused on traditional recipes served with a modern twist.
        </p>
        <button className="reserve-btn">Reserve a Table</button>
      </div>
      <div className="hero-image">
        {/* ✅ Use the imported local image */}
        <img src={restauranFoodImage} alt="Little Lemon Restaurant" />
      </div>
    </header>
  );
};

export default Header;
