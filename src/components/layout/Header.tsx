import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className={`text-2xl font-bold ${isScrolled ? 'text-primary' : 'text-white'}`}>TillDash</span>
          <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full font-semibold">SELF-CHECKOUT</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className={`font-medium hover:text-primary transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Features</a>
          <a href="#how-it-works" className={`font-medium hover:text-primary transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>How It Works</a>
          <a href="#for-business" className={`font-medium hover:text-primary transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>For Business</a>
          <a href="#testimonials" className={`font-medium hover:text-primary transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Testimonials</a>
          <a href="#pricing" className={`font-medium hover:text-primary transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Pricing</a>
          <a href="#faq" className={`font-medium hover:text-primary transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>FAQ</a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <a
            href="/login"
            className={`font-medium px-4 py-2 rounded-lg transition-colors ${isScrolled ? 'text-primary hover:bg-primary/10' : 'text-white hover:bg-white/10'}`}
          >
            Log In
          </a>
          <a
            href="/register"
            className={`font-medium px-4 py-2 rounded-lg transition-colors ${isScrolled ? 'text-primary hover:bg-primary/10' : 'text-white hover:bg-white/10'}`}
          >
            Get Started Free
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className={`md:hidden ${isScrolled ? 'text-gray-700' : 'text-white'}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 border-t border-gray-100 animate-slideDown">
          <div className="px-4 py-2 space-y-1">
            <a href="#features" className="block py-3 text-gray-700 hover:text-primary hover:bg-gray-50 rounded px-3 font-medium" onClick={() => setIsMenuOpen(false)}>Features</a>
            <a href="#how-it-works" className="block py-3 text-gray-700 hover:text-primary hover:bg-gray-50 rounded px-3 font-medium" onClick={() => setIsMenuOpen(false)}>How It Works</a>
            <a href="#for-business" className="block py-3 text-gray-700 hover:text-primary hover:bg-gray-50 rounded px-3 font-medium" onClick={() => setIsMenuOpen(false)}>For Business</a>
            <a href="#testimonials" className="block py-3 text-gray-700 hover:text-primary hover:bg-gray-50 rounded px-3 font-medium" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
            <a href="#pricing" className="block py-3 text-gray-700 hover:text-primary hover:bg-gray-50 rounded px-3 font-medium" onClick={() => setIsMenuOpen(false)}>Pricing</a>
            <a href="#faq" className="block py-3 text-gray-700 hover:text-primary hover:bg-gray-50 rounded px-3 font-medium" onClick={() => setIsMenuOpen(false)}>FAQ</a>
            <div className="border-t border-gray-200 my-2"></div>
            <a href="/login" className="block py-3 text-gray-700 hover:text-primary hover:bg-gray-50 rounded px-3 font-medium" onClick={() => setIsMenuOpen(false)}>Log In</a>
            <a href="/register" className="block py-3 bg-primary/10 text-primary hover:bg-primary/20 rounded px-3 font-medium" onClick={() => setIsMenuOpen(false)}>Get Started Free</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
