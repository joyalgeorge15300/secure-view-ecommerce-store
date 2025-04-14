
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Menu, X, User } from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { getCartCount } = useCart();
  const { user, logout, isAuthenticated } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
    closeMenu();
  };

  const cartCount = getCartCount();

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-[#1a2b4d]">SecureView</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/" current={location.pathname === "/"} onClick={closeMenu}>
                Home
              </NavLink>
              <NavLink to="/products" current={location.pathname === "/products"} onClick={closeMenu}>
                Products
              </NavLink>
              <NavLink to="/how-it-works" current={location.pathname === "/how-it-works"} onClick={closeMenu}>
                How It Works
              </NavLink>
              <NavLink to="/about-us" current={location.pathname === "/about-us"} onClick={closeMenu}>
                About Us
              </NavLink>
              <NavLink to="/contact" current={location.pathname === "/contact"} onClick={closeMenu}>
                Contact
              </NavLink>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <User className="h-5 w-5 text-[#1a2b4d]" />
                  <span className="ml-1 text-[#1a2b4d]">{user.username}</span>
                </div>
                <button 
                  onClick={handleLogout}
                  className="px-3 py-1 text-sm text-[#1a2b4d] hover:text-[#00a8a8]"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex space-x-2">
                <Link to="/login" className="px-3 py-1 text-sm text-[#1a2b4d] hover:text-[#00a8a8]">
                  Login
                </Link>
                <Link to="/signup" className="px-3 py-1 bg-[#1a2b4d] text-white rounded-md text-sm hover:bg-[#00a8a8]">
                  Sign Up
                </Link>
              </div>
            )}
            
            <Link to="/cart" className="relative p-1 rounded-full hover:bg-gray-100">
              <ShoppingCart className="h-6 w-6 text-[#1a2b4d]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#e53e3e] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <Link to="/cart" className="relative p-1 mr-2 rounded-full hover:bg-gray-100">
              <ShoppingCart className="h-6 w-6 text-[#1a2b4d]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#e53e3e] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#00a8a8] hover:bg-gray-100 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <MobileNavLink to="/" current={location.pathname === "/"} onClick={closeMenu}>
            Home
          </MobileNavLink>
          <MobileNavLink to="/products" current={location.pathname === "/products"} onClick={closeMenu}>
            Products
          </MobileNavLink>
          <MobileNavLink to="/how-it-works" current={location.pathname === "/how-it-works"} onClick={closeMenu}>
            How It Works
          </MobileNavLink>
          <MobileNavLink to="/about-us" current={location.pathname === "/about-us"} onClick={closeMenu}>
            About Us
          </MobileNavLink>
          <MobileNavLink to="/contact" current={location.pathname === "/contact"} onClick={closeMenu}>
            Contact
          </MobileNavLink>
          
          {isAuthenticated ? (
            <>
              <div className="flex items-center px-3 py-2 text-[#1a2b4d]">
                <User className="h-5 w-5 mr-2" />
                <span>{user.username}</span>
              </div>
              <button 
                onClick={handleLogout}
                className="block w-full text-left px-3 py-2 text-base font-medium text-[#1a2b4d] hover:bg-gray-100 hover:text-[#00a8a8]"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link 
                to="/login" 
                className="block px-3 py-2 text-base font-medium text-[#1a2b4d] hover:bg-gray-100 hover:text-[#00a8a8]"
                onClick={closeMenu}
              >
                Login
              </Link>
              <Link 
                to="/signup" 
                className="block px-3 py-2 text-base font-medium text-[#1a2b4d] hover:bg-gray-100 hover:text-[#00a8a8]"
                onClick={closeMenu}
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ children, to, current, onClick }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`px-3 py-2 text-sm font-medium rounded-md ${
        current
          ? 'text-[#00a8a8] font-semibold'
          : 'text-[#1a2b4d] hover:text-[#00a8a8]'
      }`}
    >
      {children}
    </Link>
  );
};

const MobileNavLink = ({ children, to, current, onClick }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`block px-3 py-2 text-base font-medium rounded-md ${
        current
          ? 'text-[#00a8a8] font-semibold'
          : 'text-[#1a2b4d] hover:bg-gray-100 hover:text-[#00a8a8]'
      }`}
    >
      {children}
    </Link>
  );
};

export default Navbar;
