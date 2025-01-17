import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="p-6 bg-gradient-to-r from-indigo-600 to-blue-600 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Rajesh's Portfolio</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-white text-lg">
          <a href="#about" className="hover:text-yellow-300 transition-colors duration-300">About</a>
          <a href="#skills" className="hover:text-yellow-300 transition-colors duration-300">Skills</a>
          <a href="#projects" className="hover:text-yellow-300 transition-colors duration-300">Projects</a>
          <a href="#contact" className="hover:text-yellow-300 transition-colors duration-300">Contact</a>
        </nav>

        {/* Mobile Navigation Button */}
        <button 
          className="md:hidden p-3 text-white bg-transparent border-2 border-white rounded-full focus:outline-none hover:bg-white hover:text-blue-600 transition-all duration-300"
          onClick={toggleMenu}
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`md:hidden mt-4 space-y-4 ${menuOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out transform bg-white rounded-lg shadow-lg`}>
        <a 
          href="#about" 
          className="block text-lg text-gray-800 px-6 py-3 hover:bg-gray-200 transition-colors duration-300"
          onClick={closeMenu}
        >
          About
        </a>
        <a 
          href="#skills" 
          className="block text-lg text-gray-800 px-6 py-3 hover:bg-gray-200 transition-colors duration-300"
          onClick={closeMenu}
        >
          Skills
        </a>
        <a 
          href="#projects" 
          className="block text-lg text-gray-800 px-6 py-3 hover:bg-gray-200 transition-colors duration-300"
          onClick={closeMenu}
        >
          Projects
        </a>
        <a 
          href="#contact" 
          className="block text-lg text-gray-800 px-6 py-3 hover:bg-gray-200 transition-colors duration-300"
          onClick={closeMenu}
        >
          Contact
        </a>
      </div>
    </header>
  );
};

export default Header;
