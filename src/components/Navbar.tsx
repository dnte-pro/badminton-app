import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">🏸 BadmintonApp</h1>
        <div className="space-x-6">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/courts" className="hover:text-gray-200">Courts</Link>
          <Link to="/equipment" className="hover:text-gray-200">Equipment</Link>
          <Link to="/booking" className="hover:text-gray-200">Booking</Link>
          <Link to="/profile" className="hover:text-gray-200">Profile</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
