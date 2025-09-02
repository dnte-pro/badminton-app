import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import Home from "./pages/Home.tsx";
import Courts from "./pages/Courts.tsx";
import Profile from "./pages/Profile.tsx";
import Marketplace from "./pages/Marketplace.tsx";
import Tournaments from "./pages/Tournaments.tsx";
import About from "./pages/about.tsx";
import Coaches from "./pages/Coaches.tsx";
import { Contact } from "lucide-react";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-grow p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courts" element={<Courts />} />
            <Route path="/marketplace" element={<Marketplace/>}/>
            <Route path="/tournaments" element={<Tournaments />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/coaches" element={<Coaches />} />
            <Route path="/about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
