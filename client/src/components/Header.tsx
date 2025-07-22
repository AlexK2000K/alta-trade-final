import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Button } from '@/components/ui/button';

export function Header() {
  const { t } = useTranslation();
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: t('navigation.home'), href: '/' },
    { name: t('navigation.about'), href: '/about' },
    { name: t('navigation.services'), href: '/services' },
    { name: t('navigation.industries'), href: '/industries' },
    { name: t('navigation.whyUs'), href: '/why-us' },
    { name: t('navigation.contact'), href: '/contact' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 min-w-0">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3 flex-shrink-0">
              <img 
                src="/logo.png" 
                alt="Alta Trade Ltd." 
                className="h-8 lg:h-10 w-auto"
              />
              <div className="text-lg lg:text-xl font-bold text-navy-800 whitespace-nowrap">
                <span className="text-navy-800">Alta</span>
                <span className="text-navy-600"> Trade</span>
                <span className="text-xs lg:text-sm font-normal text-gray-600 ml-1">Ltd.</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-2 lg:space-x-6 flex-1 justify-center">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                <span className={`px-2 lg:px-3 py-2 text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                  location === item.href
                    ? 'text-navy-800'
                    : 'text-gray-700 hover:text-navy-600'
                }`}>
                  {item.name}
                </span>
              </Link>
            ))}
          </nav>

          {/* Language Switcher & Mobile Menu Button */}
          <div className="flex items-center space-x-2 lg:space-x-4 flex-shrink-0">
            <LanguageSwitcher />
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-navy-800 hover:bg-gray-100"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setIsMobileMenuOpen(false)}>
                <span className={`block px-3 py-2 cursor-pointer ${
                  location === item.href
                    ? 'text-navy-800 font-medium'
                    : 'text-gray-700 hover:text-navy-800'
                }`}>
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
