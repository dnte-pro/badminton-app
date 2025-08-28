// src/pages/Home.tsx
import React from "react";
import "../css/Home.css";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Badminton Hub 🏸</h1>
        <p>
          Find courts near you, book games, and get the best equipment for your
          journey.
        </p>
        <div className="hero-buttons">
          <a href="/courts" className="primary">
            Find Courts
          </a>
          <a href="/equipment" className="secondary">
            Explore Equipment
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature-card">
          <h2>🏟 Nearby Courts</h2>
          <p>Discover courts around your city and never miss a chance to play.</p>
        </div>
        <div className="feature-card">
          <h2>🛒 Equipment Deals</h2>
          <p>Browse rackets, shoes, and shuttlecocks at the best prices.</p>
        </div>
        <div className="feature-card">
          <h2>📅 Easy Booking</h2>
          <p>Reserve courts in real-time with a few taps.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
