import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [isMenuActive, setMenuActive] = useState(false); // Mobile menu state
  const [activeDropdown, setActiveDropdown] = useState(null); // Dropdown state
  const dropdownRef = useRef(null); // Ref for the entire navbar

  // Toggle the mobile menu
  const toggleMenu = () => {
    setMenuActive(!isMenuActive);
  };

  // Toggle the dropdown
  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null); // Close the dropdown if it's already open
    } else {
      setActiveDropdown(index); // Open the dropdown
    }
  };

  // Close both dropdowns and mobile menu if clicked outside
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setMenuActive(false); // Close the mobile menu
      setActiveDropdown(null); // Close any open dropdown
    }
  };

  // Close dropdown or menu if clicked outside (for large screens and mobile)
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle login click (you can implement the actual logic here)
  const handleLoginClick = () => {
    console.log("Login button clicked");
  };

  return (
    <nav className="navbar" ref={dropdownRef}>
      <div className="logo">
        <a href="#">Helper<span className="logo-color">4</span>U</a>
        <p className="slogan">Click Karo, Hire Karo!</p>
      </div>

      {/* Hamburger icon for mobile */}
      <div className="menu-toggle" id="mobile-menu" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Navigation links */}
      <ul className={`nav-links ${isMenuActive ? 'active' : ''}`}>
        <li><NavLink to="/">Home</NavLink></li>

        {/* Hiring dropdown */}
        <li className="dropdown">
          < NavLink to=""
            className="dropdown-toggle"
            onClick={() => toggleDropdown(1)}
          >
            Hiring
            <span className={`arrow ${activeDropdown === 1 ? 'rotate' : ''}`} inline>
              <FaChevronDown />
            </span>
          </NavLink>

          <ul className={`dropdown-menu ${activeDropdown === 1 ? 'active' : ''}`} inline>
            <li><a href="#">Premium Hiring Service</a></li>
            <hr />
            <li><a href="#">Basic Hiring Service</a></li>
            <hr />
            <li><a href="#">Temporary Hiring Service</a></li>
            <hr />
            <li><a href="#">Hire for Elderly</a></li>
            <hr />
          </ul>
        </li>

        {/* Verification dropdown */}
        <li className="dropdown">
          <NavLink to="#"
            className="dropdown-toggle"
            onClick={() => toggleDropdown(2)}
          >
            Verification
            <span className={`arrow ${activeDropdown === 2 ? 'rotate' : ''}`}>
              <FaChevronDown />
            </span>
          </NavLink>
          <ul className={`dropdown-menu ${activeDropdown === 2 ? 'active' : ''}`}>
            <li><NavLink to="/verify-helpers/criminal-verification">Criminal Service</NavLink></li>
            <hr />
            <li><NavLink to="/verify-helpers/employment-verification">Employment Verification</NavLink></li>
            <hr />
          </ul>
        </li>

        {/* Login button */}
        <li>
          <button className="login-btn" onClick={handleLoginClick}>Login</button>
        </li>
      </ul>
    </nav>
  );
};
  