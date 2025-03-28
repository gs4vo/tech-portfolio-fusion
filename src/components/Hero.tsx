
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen pt-28 pb-16 flex items-center relative overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-tech-blue rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 left-20 w-[50%] h-[50%] bg-tech-purple rounded-full blur-[120px]"></div>
        <div className="absolute top-40 left-[20%] w-[30%] h-[30%] bg-tech-cyan rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            Olá, eu sou <span className="tech-highlight">Gustavo</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Desenvolvedor Backend especializado em criar soluções <span className="font-semibold">robustas</span> e <span className="font-semibold">eficientes</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-10">
            <Button asChild className="bg-tech-gradient text-white hover:opacity-90">
              <a href="#projects">Ver Projetos</a>
            </Button>
            <Button asChild variant="outline" className="border-tech-indigo text-tech-indigo hover:bg-tech-indigo/5">
              <a href="#contact">Entre em Contato</a>
            </Button>
          </div>
          
          <div className="flex justify-center lg:justify-start space-x-6">
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-tech-indigo transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-tech-indigo transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:gustavo@example.com" 
              className="text-gray-600 hover:text-tech-indigo transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-tech-indigo via-tech-purple to-tech-blue rounded-full blur-3xl opacity-20 absolute -inset-4"></div>
            <div className="w-64 h-64 md:w-80 md:h-80 relative overflow-hidden rounded-full border-4 border-white shadow-xl">
              <div className="w-full h-full bg-gradient-to-r from-tech-indigo to-tech-purple opacity-30 absolute"></div>
              <div className="absolute inset-0 flex items-center justify-center text-6xl md:text-7xl font-bold text-white">G</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
