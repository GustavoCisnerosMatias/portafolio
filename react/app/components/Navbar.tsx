import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre Mí', href: '#sobre-mi' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Certificados', href: '#certificados' },
  { label: 'Contacto', href: '#contacto' }
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const sectionId = href.replace('#', '');
    if (sectionId === 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-sm shadow-md' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => scrollToSection('#inicio')}
              className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
            >
              GC
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-700 hover:text-purple-600 transition-colors font-medium text-sm"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-40 bg-white md:hidden"
          style={{ top: '72px' }}
        >
          <div className="flex flex-col p-4 space-y-4">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.href)}
                className="text-left text-lg font-medium text-gray-700 hover:text-purple-600 transition-colors py-2"
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
}