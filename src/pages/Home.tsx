// src/pages/Home.tsx
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="text-center px-6 py-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-blue-600">
          Welcome to Badminton Hub 🏸
        </h1>
        <p className="text-lg md:text-xl mb-6 text-gray-600">
          Find courts near you, book games, and get the best equipment for your
          journey.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="/courts"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
          >
            Find Courts
          </a>
          <a
            href="/equipment"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl shadow hover:bg-blue-50 transition"
          >
            Explore Equipment
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-12 max-w-6xl">
        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">🏟 Nearby Courts</h2>
          <p className="text-gray-600">
            Discover courts around your city and never miss a chance to play.
          </p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">🛒 Equipment Deals</h2>
          <p className="text-gray-600">
            Browse rackets, shoes, and shuttlecocks at the best prices.
          </p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">📅 Easy Booking</h2>
          <p className="text-gray-600">
            Reserve courts in real-time with a few taps.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
