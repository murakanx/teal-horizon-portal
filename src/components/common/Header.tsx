
import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-job-header text-white sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-white">
          <Briefcase className="h-6 w-6" />
          <span className="font-semibold text-xl">Job Portal</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white hover:text-primary-light transition-colors">
            Home
          </Link>
          <Link to="/jobs" className="text-white hover:text-primary-light transition-colors">
            Jobs
          </Link>
          <Link to="/about" className="text-white hover:text-primary-light transition-colors">
            About Us
          </Link>
          <Link to="/contact" className="text-white hover:text-primary-light transition-colors">
            Contact Us
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <Link to="/hrm-dashboard">
            <Button className="bg-primary hover:bg-primary-dark text-white">
              HRM Portal
            </Button>
          </Link>
          <Link to="/login">
            <span className="text-white hover:text-primary-light transition-colors">Login</span>
          </Link>
          <Link to="/register">
            <Button className="bg-primary hover:bg-primary-dark text-white">
              Register
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden flex items-center" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-job-header border-t border-gray-700 animate-slide-up">
          <div className="container mx-auto px-4 py-3 space-y-2">
            <Link 
              to="/"
              className="block py-2 text-white hover:text-primary-light transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/jobs"
              className="block py-2 text-white hover:text-primary-light transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Jobs
            </Link>
            <Link 
              to="/about"
              className="block py-2 text-white hover:text-primary-light transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/contact"
              className="block py-2 text-white hover:text-primary-light transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
            <div className="pt-2 border-t border-gray-700 space-y-2">
              <Link 
                to="/hrm-dashboard"
                className="block py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button className="w-full bg-primary hover:bg-primary-dark text-white">
                  HRM Portal
                </Button>
              </Link>
              <Link 
                to="/login"
                className="block py-2 text-white hover:text-primary-light transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </Link>
              <Link 
                to="/register"
                className="block py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button className="w-full bg-primary hover:bg-primary-dark text-white">
                  Register
                </Button>
              </Link>
              <div className="py-2 flex justify-center">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
