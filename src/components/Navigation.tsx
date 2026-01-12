import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import imgLogoGold from "figma:asset/6fba734c25605c8b5353437d84f69125efc20383.png";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/who-are-we', label: 'Who Are We' },
    { path: '/about', label: 'About us' },
    { path: '/contact', label: 'Contact us' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={imgLogoGold} alt="Monte Developments" className="h-14 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative transition-colors ${
                  isActive(link.path)
                    ? 'text-[#416D50]'
                    : 'text-gray-700 hover:text-[#416D50]'
                }`}
              >
                <span style={{ fontSize: '19px', fontFamily: "'Avenir Next LT Pro', sans-serif" }}>
                  {link.label}
                </span>
                {isActive(link.path) && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#B08C44]" />
                )}
              </Link>
            ))}
            
            <Link
              to="/book-visit"
              className="bg-[#416D50] text-white px-6 py-3 rounded-xl hover:bg-[#365840] transition-colors"
              style={{ fontSize: '16px' }}
            >
              Book a visit
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    isActive(link.path)
                      ? 'bg-[#EFE6BA] text-[#416D50]'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  style={{ fontSize: '19px' }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/book-visit"
                onClick={() => setIsMenuOpen(false)}
                className="bg-[#416D50] text-white px-4 py-3 rounded-xl text-center hover:bg-[#365840] transition-colors"
              >
                Book a visit
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}