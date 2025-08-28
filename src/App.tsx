import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import Home from "./pages/Home.tsx";
import Courts from "./pages/Courts.tsx";
import Equipment from "./pages/Equipment.tsx";
import Booking from "./pages/Booking.tsx";
import Profile from "./pages/Profile.tsx";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-grow p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courts" element={<Courts />} />
            <Route path="/equipment" element={<Equipment />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
