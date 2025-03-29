import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import ftz from "../assets/fitz.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  // const [isSearchVisible, setIsSearchVisible] = useState(false);

  // Close mobile menu when clicking on a NavLink
  const closeMenu = () => {
    setIsOpen(false);
    setIsPagesOpen(false);
  };

  return (
    <header className="bg-[#12022d] text-white py-4 px-6 md:px-10 flex justify-between items-center sticky top-0 left-0 w-full z-50 ">
      {/* Logo */}
      <NavLink to="/" className="flex items-center">
        <img
          src={ftz}
          alt="Finteezy"
          className="h-10 md:h-14 transition-all duration-300"
        />
      </NavLink>

      <button
        className={`md:hidden text-white focus:outline-none transition-transform duration-300 ease-in-out ${
          isOpen ? "rotate-180" : ""
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <Menu size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-3/4 h-full bg-[#0A0A12] shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:hidden z-50`}
      >
        {/* Mobile Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
          {/* Mobile Logo */}
          <NavLink to="/" className="flex items-center">
            <img
              src={ftz}
              alt="Finteezy"
              className="h-8 transition-all duration-300"
            />
          </NavLink>

          {/* Close Button */}
          <button
            className="p-2 bg-gradient-to-r from-purple-700 to-pink-500 rounded-full"
            onClick={closeMenu}
          >
            <X size={24} className="text-white" />
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <nav className="flex flex-col mt-6 space-y-4 px-6">
          <NavLink to="/" className="text-purple-400" onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="hover:text-purple-400"
            onClick={closeMenu}
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className="hover:text-purple-400"
            onClick={closeMenu}
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className="hover:text-purple-400"
            onClick={closeMenu}
          >
            Contact
          </NavLink>

          {/* Pages Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsPagesOpen(!isPagesOpen)}
              className="flex items-center space-x-1 hover:text-purple-400"
            >
              <span>Pages</span>
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  isPagesOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isPagesOpen && (
              <div className="mt-2 py-2 bg-gray-800 rounded-md">
                <NavLink
                  to="/page1"
                  className="block px-4 py-2 hover:bg-gray-700"
                  onClick={closeMenu}
                >
                  Page 1
                </NavLink>
                <NavLink
                  to="/page2"
                  className="block px-4 py-2 hover:bg-gray-700"
                  onClick={closeMenu}
                >
                  Page 2
                </NavLink>
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-6 gap-8 text-lg font-medium">
        <NavLink to="/" className="text-purple-400">
          Home
        </NavLink>
        <NavLink to="/about" className="hover:text-purple-400">
          About
        </NavLink>
        <NavLink to="/services" className="hover:text-purple-400">
          Services
        </NavLink>

        {/* Pages Dropdown */}
        <div className="relative group">
          <button className="flex items-center space-x-1 hover:text-purple-400">
            <span>Pages</span>
            <ChevronDown
              size={16}
              className="transition-transform group-hover:rotate-180"
            />
          </button>

          <div
            className="absolute bg-[#0A0A12] text-white shadow-lg rounded-md mt-2 py-2 w-52
               opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300"
          >
            <NavLink to="/Pricing " className="block px-4 py-2 ">
              Pricing
            </NavLink>
            <NavLink to="/page2" className="block px-4 py-2 ">
              Testimonial
            </NavLink>
            <NavLink to="/page3" className="block px-4 py-2 ">
              Team
            </NavLink>
            <NavLink to="/page4" className="block px-4 py-2 ">
              Blogs
            </NavLink>
            <NavLink to="/page5" className="block px-4 py-2 ">
              Blog Details
            </NavLink>
            <NavLink to="/page6" className="block px-4 py-2 ">
              404
            </NavLink>
            <NavLink to="/page7" className="block px-4 py-2 ">
              Coming Soon
            </NavLink>
          </div>
        </div>
        <NavLink to="/contact" className="hover:text-purple-400">
          Contact
        </NavLink>
      </nav>

      {/* Search & Button */}
      <div className="hidden md:flex items-center space-x-6">
        <div className="relative mr-12 ">
          <Search
            className="cursor-pointer hover:bg-black "
            // onClick={() => setIsSearchVisible(!isSearchVisible)}
          />

          {/* Search Input Field (Appears on Top of Icon) */}
          {/* {isSearchVisible && (
          <input
          type="text"
          placeholder="Search..."
          className="absolute top-0 left-0 bg-black/80 border border-purple-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 rounded-lg px-4 py-2 w-[200px] transition-all duration-300"
          autoFocus
        />
        )} */}
        </div>
        {/* Increased margin to move the search left */}
        <button className="relative group overflow-hidden border-2 border-black hover:border-blue-900 hove:border-blue-900 bg-gradient-to-r from-blue-900 via-purple-800 to-pink-400 px-12 md:px-14 py-3 md:py-4 rounded-full text-md text-white font-semibold">
          <span className="absolute inset-0 bg-black w-0 group-hover:w-full transition-all duration-[600ms] ease-in-out"></span>
          <span className="relative z-10">Get Started</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
