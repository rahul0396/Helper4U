import React, { useState } from "react";

function Header() {
  const [isHiringOpen, setIsHiringOpen] = useState(false);
  const [isVerificationOpen, setIsVerificationOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleHiringDropdown = () => {
    setIsHiringOpen(!isHiringOpen);
  };

  const toggleVerificationDropdown = () => {
    setIsVerificationOpen(!isVerificationOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#">
              <img
                src="/src/assets/img/logo.png"
                alt="Helper4U Logo"
                className="h- w-28"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#" className="text-gray-700 font-bold hover:text-gray-900">
              Home
            </a>

            {/* Hiring Dropdown */}
            <div className="relative">
              <button
                onClick={toggleHiringDropdown}
                className="text-gray-700 hover:text-gray-900  font-bold inline-flex items-center"
              >
                Hiring
                <svg
                  className="w-4 h-4 ml-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isHiringOpen && (
                <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white z-10">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Premium Hiring Service
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Basic Hiring Service
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Temporary Hiring Service
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Hire for Elderly
                  </a>
                </div>
              )}
            </div>

            {/* Verification Dropdown */}
            <div className="relative">
              <button
                onClick={toggleVerificationDropdown}
                className="text-gray-700 hover:text-gray-900 font-bold inline-flex items-center"
              >
                Verification
                <svg
                  className="w-4 h-4 ml-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isVerificationOpen && (
                <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white z-10">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Verification Type 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Verification Type 2
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Verification Type 2
                  </a>
                </div>
              )}
            </div>

            {/* Login Button */}
            <div>
              <button className="bg-red-500 text-white px-5 py-1 rounded font-bold hover:bg-red-600">
                Login
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 focus:outline-none focus:text-gray-900"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <a href="#" className="block px-4 py-2 font-bold text-gray-700 hover:bg-gray-100">
              Home
            </a>
            <div className="relative">
              <button
                onClick={toggleHiringDropdown}
                className="block px-4 py-2 text-gray-700 font-bold hover:bg-gray-100"
              >
                Hiring
              </button>

              {isHiringOpen && (
                <div className="pl-4">
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Premium Hiring Service
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Basic Hiring Service
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Temporary Hiring Service
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Hire for Elderly
                  </a>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={toggleVerificationDropdown}
                className="block px-4 py-2 text-gray-700 font-bold hover:bg-gray-100"
              >
                Verification
              </button>

              {isVerificationOpen && (
                <div className="pl-4">
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Verification Type 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Verification Type 2
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Verification Type 2
                  </a>
                </div>
              )}
            </div>

            <button className="w-full bg-red-500 text-white px-5 py-2 rounded hover:bg-red-600">
              Login
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;
