import React, { useState } from 'react';
import { Search, Menu, X, UploadCloud, Home, Image, User, LogIn } from 'lucide-react';

// Define the navigation links
const navLinks = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'Browse PNG', href: '#browse-png', icon: Image },
  { name: 'Upload', href: '#upload', icon: UploadCloud },
];

// Main App Component containing the Navbar
  const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // In a real application, you would navigate or filter results here.
    console.log("Searching for:", searchTerm);
    // You could also clear the search term: setSearchTerm('');
  };

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      {/* Navbar Container */}
      <nav className="bg-indigo-700 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" className="text-white text-3xl font-extrabold tracking-wider">
                Png<span className="text-indigo-300">Craft</span>
              </a>
            </div>

            {/* Desktop Navigation, Search, and Auth Buttons */}
            <div className="hidden md:flex flex-grow items-center justify-end space-x-6">
              
              {/* Desktop Nav Links */}
              <div className="flex items-center space-x-4">
                {navLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center px-3 py-2 rounded-lg text-sm font-medium text-indigo-200 hover:bg-indigo-600 hover:text-white transition duration-150 ease-in-out"
                  >
                    <item.icon className="w-4 h-4 mr-1.5" />
                    {item.name}
                  </a>
                ))}
              </div>

              {/* Search Bar */}
              <form onSubmit={handleSearch} className="flex items-center relative w-full max-w-sm">
                <input
                  type="text"
                  placeholder="Search PNGs, JPEGs, keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-4 pr-10 py-2 text-sm text-gray-800 bg-white border border-gray-300 rounded-xl focus:ring-indigo-300 focus:border-indigo-300 transition duration-150"
                  aria-label="Search"
                />
                <button
                  type="submit"
                  className="absolute right-0 top-0 mt-2 mr-3 text-indigo-500 hover:text-indigo-700"
                  aria-label="Submit Search"
                >
                  <Search className="w-5 h-5" />
                </button>
              </form>

              {/* Auth/User Buttons */}
              <div className="flex items-center space-x-3">
                <button
                  className="flex items-center bg-indigo-500 text-white px-4 py-2 text-sm font-medium rounded-xl hover:bg-indigo-400 transition duration-150 shadow-md"
                >
                  <LogIn className="w-4 h-4 mr-1.5" />
                  Sign In
                </button>
                <button
                  className="flex items-center bg-white text-indigo-700 px-4 py-2 text-sm font-medium rounded-xl hover:bg-gray-100 transition duration-150 shadow-md"
                >
                  <User className="w-4 h-4 mr-1.5" />
                  Sign Up
                </button>
              </div>

            </div>

            {/* Mobile Menu Button */}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-indigo-200 hover:text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white transition duration-150"
                aria-expanded={isMenuOpen}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel (Hidden by default, shown when isMenuOpen is true) */}
        {isMenuOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3">
              
              {/* Mobile Search Bar */}
              <form onSubmit={handleSearch} className="flex items-center relative w-full pt-1 pb-2">
                <input
                  type="text"
                  placeholder="Search PNGs, JPEGs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-4 pr-10 py-2 text-sm text-gray-800 bg-white border border-gray-300 rounded-xl focus:ring-indigo-300 focus:border-indigo-300 transition duration-150"
                  aria-label="Search"
                />
                <button
                  type="submit"
                  className="absolute right-0 top-3 mt-2 mr-3 text-indigo-500 hover:text-indigo-700"
                  aria-label="Submit Search"
                >
                  <Search className="w-5 h-5" />
                </button>
              </form>

              {/* Mobile Nav Links */}
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center text-base font-medium text-white hover:bg-indigo-600 rounded-lg p-3 transition duration-150 w-full"
                  onClick={toggleMenu} // Close menu on link click
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.name}
                </a>
              ))}
            </div>
            
            {/* Mobile Auth Buttons */}
            <div className="pt-4 pb-4 border-t border-indigo-600 flex justify-around px-4">
                 <button
                    className="flex items-center justify-center w-full mx-2 bg-indigo-500 text-white px-4 py-2 text-sm font-medium rounded-xl hover:bg-indigo-400 transition duration-150 shadow-md"
                  >
                    <LogIn className="w-4 h-4 mr-1.5" />
                    Sign In
                  </button>
                  <button
                    className="flex items-center justify-center w-full mx-2 bg-white text-indigo-700 px-4 py-2 text-sm font-medium rounded-xl hover:bg-gray-100 transition duration-150 shadow-md"
                  >
                    <User className="w-4 h-4 mr-1.5" />
                    Sign Up
                  </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content Placeholder */}
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="p-8 bg-white rounded-xl shadow-lg">
            <h2 className="text-3xl font-semibold text-gray-800">Welcome to PngCraft!</h2>
            <p className="mt-4 text-gray-600">This is the main content area. The navigation bar above is fully functional and responsive, adapting smoothly between desktop and mobile views.</p>
            <div className="h-64 mt-6 flex items-center justify-center bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 text-gray-500">
                Start browsing or upload your high-quality PNGs and JPEGs.
            </div>
        </div>
      </main>
    </div>
  );
};

export default Navbar;