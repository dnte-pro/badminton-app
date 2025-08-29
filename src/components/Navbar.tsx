import { Link } from "react-router-dom";
import "../css/Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1> BadmintonApp</h1>
        <div className="navbar-titles">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/courts" className="navbar-link">Courts</Link>
          <Link to="/equipment" className="navbar-link">Equipment</Link>
          <Link to="/booking" className="navbar-link">Booking</Link>
          <Link to="/profile" className="navbar-link">Profile</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
