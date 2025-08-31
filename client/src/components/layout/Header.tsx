import Logo from "../ui/Logo"; 
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  const navItems = [
    { name: 'Home', href: '/', type: 'link' },
    { name: 'Organizations', href: '/Organizations', type: 'link' },
    { name: 'About us', href: '#about-us', type: 'scroll' },
    { name: 'Categories', href: '#categories', type: 'scroll' }
  ];

  const handleNavigation = (item: typeof navItems[0]) => {
    if (item.type === 'scroll') {
      // If we're not on the landing page, navigate there first
      if (location.pathname !== '/') {
        navigate('/');
        // Wait for navigation to complete, then scroll
        setTimeout(() => {
          const element = document.getElementById(item.href.substring(1));
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // We're already on the landing page, just scroll
        const element = document.getElementById(item.href.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full bg-white border-b border-gray-200 h-[90px] shadow-soft flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="flex items-center justify-between">
          {/* Logo and Brand Name */}
          <div className="flex items-center gap-2 sm:gap-x-10">
            <Logo/>             
            {/* Brand Name */}
            <span className="text-sm sm:text-lg lg:text-xl font-semibold text-primary-blue font-heading hidden sm:block">
              The Blue Eagle Directory
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 xl:gap-12 font-body">
            {navItems.map((item) => (
              item.type === 'scroll' ? (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item)}
                  className="text-dark font-sans hover:text-blue-800 transition-colors duration-200 text-sm xl:text-base bg-transparent border-none cursor-pointer"
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-dark font-sans hover:text-blue-800 transition-colors duration-200 text-sm xl:text-base"
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-primary-blue" />
            ) : (
              <Menu className="w-6 h-6 text-primary-blue" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav className="md:hidden absolute top-[90px] left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-50">
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                item.type === 'scroll' ? (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item)}
                    className="block text-dark font-sans hover:text-blue-800 transition-colors duration-200 text-base py-2 w-full text-left bg-transparent border-none cursor-pointer"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block text-dark font-sans hover:text-blue-800 transition-colors duration-200 text-base py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header; 