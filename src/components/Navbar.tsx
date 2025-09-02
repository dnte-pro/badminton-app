import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Sun, Moon, User, LogOut, Settings } from "lucide-react";
import "../css/Navbar.css";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="header">
      {/* Logo on far left */}
      <a href="#home" className="logo">
        Shuttle<span>Hub</span>
      </a>

      {/* Navigation links in center */}
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/courts">Courts</Link>
        <Link to="/marketplace">Marketplace</Link>
        <Link to="/tournaments">Tournaments</Link>        
        <Link to="/coaches">Coaches</Link>
        <Link to="/about">About us</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Right actions (toggle + profile) */}
      <div className="nav-actions">
        {/* Dark/Light toggle */}
        <button className="toggle-btn" onClick={toggleDarkMode}>
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* Profile */}
        <div className="profile-container" ref={dropdownRef}>
          <span
            className="profile-icon"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <User size={24} />
          </span>

          {dropdownOpen && (
            <div className="profile-dropdown">
              <Link to="/profile">
                <User size={18} /> Profile
              </Link>
              <Link to="/settings">
                <Settings size={18} /> Settings
              </Link>
              <button className="logout-btn">
                <LogOut size={18} /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
