import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ username }) => {
  return (
    <nav className="bg-gray-800 p-4 shadow-md fixed top-0 left-0 right-0 z-10 font-sans">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src="/logo.svg" alt="logo" className="h-8 w-8 mr-2" />
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-gray-300 hover:text-white font-sans">
            Journals
          </Link>
          <Link
            to="/write"
            className="text-gray-300 hover:text-white font-sans"
          >
            Create
          </Link>
          {username ? (
            <span className="text-gray-300 font-sans">{username}</span>
          ) : (
            <Link to="/login" className="text-gray-300 hover:text-white">
              Know Me
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
