import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode and persist choice
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <header className="header">
      {/* Contact button moved left */}
      <button className="gradient-btn left-btn">Contact Me</button>

      <a href="#home" className="logo">
        Shuttle<span>Hub</span>
      </a>

      <i className="bx bx-menu" id="menu-icon"></i>

      <nav className="navbar">
        <Link to="/home">Home</Link>
        <Link to="/courts">Courts</Link>
        <Link to="/equipment">Marketplace</Link>
        <Link to="/booking">Booking</Link>
        <Link to="/profile">Profile</Link>
      </nav>

      {/* Dark/Light Mode Toggle */}
      <button 
        className="toggle-btn" 
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "🌙 Dark" : "☀️ Light"}
      </button>
    </header>
  );
};

export default Navbar;
