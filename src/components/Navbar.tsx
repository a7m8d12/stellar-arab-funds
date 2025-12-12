import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const { language, setLanguage, t, isRTL } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.howItWorks', href: '#how-it-works' },
    { key: 'nav.pricing', href: '#pricing' },
    { key: 'nav.rules', href: '#rules' },
    { key: 'nav.contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-card py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('#home');
          }}
          className="text-2xl font-bold neon-text text-primary font-arabic"
        >
          ArabFunded
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className="text-foreground/80 hover:text-primary transition-colors duration-300 text-sm font-medium"
            >
              {t(item.key)}
            </a>
          ))}
        </div>

        {/* Language Switcher */}
        <div className={`hidden lg:flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <button
            onClick={() => setLanguage('ar')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all duration-300 ${
              language === 'ar'
                ? 'bg-primary/20 text-primary neon-box'
                : 'text-foreground/60 hover:text-foreground'
            }`}
          >
            <span className="text-lg">🇮🇶</span>
            <span className="text-sm font-medium">العربية</span>
          </button>
          <button
            onClick={() => setLanguage('en')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all duration-300 ${
              language === 'en'
                ? 'bg-primary/20 text-primary neon-box'
                : 'text-foreground/60 hover:text-foreground'
            }`}
          >
            <span className="text-lg">🇺🇸</span>
            <span className="text-sm font-medium">English</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-foreground p-2"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden glass-card mt-2 mx-4 rounded-xl p-4 animate-fade-in">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 text-base font-medium py-2"
              >
                {t(item.key)}
              </a>
            ))}
            <div className="flex gap-2 pt-4 border-t border-border">
              <button
                onClick={() => {
                  setLanguage('ar');
                  setIsMobileMenuOpen(false);
                }}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg flex-1 justify-center transition-all ${
                  language === 'ar'
                    ? 'bg-primary/20 text-primary'
                    : 'text-foreground/60'
                }`}
              >
                <span>🇮🇶</span>
                <span className="text-sm">العربية</span>
              </button>
              <button
                onClick={() => {
                  setLanguage('en');
                  setIsMobileMenuOpen(false);
                }}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg flex-1 justify-center transition-all ${
                  language === 'en'
                    ? 'bg-primary/20 text-primary'
                    : 'text-foreground/60'
                }`}
              >
                <span>🇺🇸</span>
                <span className="text-sm">English</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
