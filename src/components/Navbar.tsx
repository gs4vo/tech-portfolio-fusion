
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Code, BrainCircuit } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#home" },
    { name: "Sobre", href: "#about" },
    { name: "Tecnologias", href: "#technologies" },
    { name: "Projetos", href: "#projects" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl md:text-2xl font-bold flex items-center">
          <BrainCircuit className="mr-2 text-tech-indigo" />
          Gustavo<span className="tech-highlight">.dev</span>
        </a>
        
        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-gray-300 hover:text-tech-indigo font-medium transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-tech-indigo transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
        
        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          className="md:hidden text-gray-300 hover:text-tech-indigo hover:bg-secondary/80" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute w-full bg-secondary/95 backdrop-blur-md shadow-lg py-4">
          <div className="container mx-auto px-6 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-gray-300 hover:text-tech-indigo font-medium transition-colors py-2 flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Code className="mr-2 h-4 w-4" />
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
