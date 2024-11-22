import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation(); // Get the current route path

  return (
    <nav className="bg-gray-800 text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Application Title */}
        <h1 className="text-2xl font-bold">COVID-19 Tracker</h1>

        {/* Navigation Links */}
        <div className="flex space-x-4">
          {/* Home Page Link */}
          <Link
            to="/"
            className={`px-4 py-2 rounded-lg ${
              location.pathname === "/"
                ? "bg-gray-900"
                : "hover:bg-gray-700 focus:ring-2 focus:ring-gray-400 focus:outline-none"
            }`}
          >
            Home
          </Link>

          {/* Notes Page Link */}
          <Link
            to="/notes"
            className={`px-4 py-2 rounded-lg ${
              location.pathname === "/notes"
                ? "bg-gray-900"
                : "hover:bg-gray-700 focus:ring-2 focus:ring-gray-400 focus:outline-none"
            }`}
          >
            Notes
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
