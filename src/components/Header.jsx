import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header({ content, language, toggleLanguage, setCurrentPage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isRTL = language === 'ar';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (item, index) => {
    setIsMenuOpen(false);
    
    if (index === 0) {
      setCurrentPage('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    else if (index === 1) {
      setCurrentPage('about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    else {
      setCurrentPage('home');
      setTimeout(() => {
        const element = document.getElementById(item);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300 bg-transparent">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white text-2xl font-bold">ن</span>
            </div>
            <span className={`text-xl font-bold transition-colors ${
              isScrolled ? 'text-gray-800' : 'text-white drop-shadow-lg'
            }`}>
              {isRTL ? 'شركة النور' : 'Al-Noor'}
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {content.nav.map((item, i) => (
              <button
                key={i}
                onClick={() => handleNavClick(item, i)}
                className={`font-medium transition-colors ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-amber-600' 
                    : 'text-white hover:text-amber-300 drop-shadow-md'
                }`}
              >
                {item}
              </button>
            ))}
            <button
              onClick={toggleLanguage}
              className={`px-4 py-2 rounded-lg transition-all font-medium ${
                isScrolled
                  ? 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  : 'bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm'
              }`}
            >
              {language === 'ar' ? 'English' : 'عربي'}
            </button>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className={`md:hidden mt-4 pb-4 flex flex-col gap-4 rounded-lg p-4 ${
            isScrolled ? 'bg-white' : 'bg-white/10 backdrop-blur-md'
          }`}>
            {content.nav.map((item, i) => (
              <button
                key={i}
                onClick={() => handleNavClick(item, i)}
                className={`transition-colors text-${isRTL ? 'right' : 'left'} ${
                  isScrolled
                    ? 'text-gray-700 hover:text-amber-600'
                    : 'text-white hover:text-amber-300'
                }`}
              >
                {item}
              </button>
            ))}
            <button
              onClick={toggleLanguage}
              className={`px-4 py-2 rounded-lg transition-all text-center ${
                isScrolled
                  ? 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  : 'bg-white/20 hover:bg-white/30 text-white'
              }`}
            >
              {language === 'ar' ? 'English' : 'عربي'}
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}