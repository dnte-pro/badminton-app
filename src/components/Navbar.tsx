import { Link } from "react-router-dom";
import "../css/Navbar.css";
const Navbar = () => {
  return (
    <header className="header">
        <a href="#home" className="logo">
            Shuttle<span>Hub</span>
        </a>

        <i className="bx bx-menu" id="menu-icon" ></i>
        <nav className="navbar">
            <a href="/home" >Home</a>
            <a href="/courts" >Courts</a>
            <a href="/equipment" >Marketplace</a>
            <a href="#projects" >Booking</a>
            <a href="#contact" >Profile</a>
        </nav>

        <button className="gradient-btn">Contact Me</button>

    </header>
  );
};

export default Navbar;
