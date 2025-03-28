
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-tech-dark text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Gustavo<span className="tech-highlight">.dev</span></h2>
            <p className="text-gray-300 mb-6 max-w-md">
              Desenvolvedor backend especializado em criar soluções robustas e eficientes para problemas complexos.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:gustavo@example.com" 
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#home" className="hover:text-white hover:underline transition-colors">Início</a></li>
              <li><a href="#about" className="hover:text-white hover:underline transition-colors">Sobre</a></li>
              <li><a href="#technologies" className="hover:text-white hover:underline transition-colors">Tecnologias</a></li>
              <li><a href="#projects" className="hover:text-white hover:underline transition-colors">Projetos</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a
                  href="mailto:gustavo@example.com"
                  className="hover:text-white hover:underline transition-colors"
                >
                  gustavo@example.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+55123456789"
                  className="hover:text-white hover:underline transition-colors"
                >
                  +55 (12) 3456-7890
                </a>
              </li>
              <li>São Paulo, Brasil</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Gustavo.dev. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
