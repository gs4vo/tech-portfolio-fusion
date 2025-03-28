
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Code, Terminal, Server, Database, Cpu } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [typingComplete, setTypingComplete] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setTypingComplete(true);
    }, 4000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen pt-28 pb-16 flex items-center relative overflow-hidden tech-bg"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-tech-red rounded-full blur-[120px] opacity-20 animate-float"></div>
        <div className="absolute bottom-20 left-20 w-[50%] h-[50%] bg-tech-darkred rounded-full blur-[120px] opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-40 left-[20%] w-[30%] h-[30%] bg-tech-red rounded-full blur-[100px] opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Animated circuit pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5QzkyQUMiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzR2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6bTAtMzBWMGgtMnY0aC00djJoNHY0aDJWNmg0VjRoLTR6TTYgMzR2LTRINHY0SDB2Mmg0djRoMnYtNGg0di0ySDZ6TTYgNFYwSDR2NEgwdjJoNHY0aDJWNmg0VjRINnoiLz48L2c+PC9nPjwvc3ZnPg==')] animate-zap"></div>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center bg-secondary/80 px-4 py-2 rounded-full mb-8 backdrop-blur-sm border border-white/10">
            <Terminal className="w-4 h-4 mr-2 text-tech-red" />
            <span className="text-sm">Desenvolvedor Backend</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 space-y-3">
            <div>Olá, eu sou</div> 
            <div>
              <span className="tech-highlight typing-effect">Gustavo</span>
            </div>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0">
            Especializado em criar soluções <span className="font-semibold text-white">robustas</span> e <span className="font-semibold text-white">eficientes</span> com tecnologias modernas.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-10">
            <Button asChild className="bg-tech-gradient text-white hover:opacity-90 neo-glow group transition-all duration-300">
              <a href="#projects" className="group-hover:translate-y-[-2px] transition-transform">
                <Code className="mr-2" />
                Ver Projetos
              </a>
            </Button>
            <Button asChild variant="outline" className="border-tech-red text-tech-red hover:bg-tech-red/10 transition-all duration-300">
              <a href="#contact" className="hover:translate-y-[-2px] transition-transform">
                <Mail className="mr-2" />
                Entre em Contato
              </a>
            </Button>
          </div>
          
          <div className="flex justify-center lg:justify-start space-x-6">
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-tech-red transition-colors animate-pulse-glow p-2 hover:scale-110 transition-transform"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-tech-red transition-colors animate-pulse-glow p-2 hover:scale-110 transition-transform"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:gustavo@example.com" 
              className="text-gray-400 hover:text-tech-red transition-colors animate-pulse-glow p-2 hover:scale-110 transition-transform"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-tech-red via-tech-darkred to-tech-red rounded-full blur-3xl opacity-20 absolute -inset-4 animate-pulse-glow"></div>
            <div className="w-64 h-64 md:w-80 md:h-80 relative overflow-hidden rounded-full border-4 border-white/10 shadow-xl backdrop-blur-sm animate-float">
              {/* Substituição do avatar genérico pela foto enviada */}
              <img 
                src="/lovable-uploads/b4910a4e-ca87-422b-a853-63153f9770d2.png" 
                alt="Gustavo" 
                className="w-full h-full object-cover"
              />
              
              {/* Overlay com gradiente */}
              <div className="absolute inset-0 bg-gradient-to-r from-tech-darkred/10 to-tech-red/10"></div>
              
              {/* Animated tech icons - mantidos como decoração */}
              <div className="absolute -top-2 left-1/4 text-white/20 animate-float" style={{ animationDelay: '0.5s' }}>
                <Server size={30} />
              </div>
              <div className="absolute top-1/3 -left-2 text-white/20 animate-float" style={{ animationDelay: '1.5s' }}>
                <Database size={30} />
              </div>
              <div className="absolute bottom-1/4 right-0 text-white/20 animate-float" style={{ animationDelay: '2.5s' }}>
                <Code size={30} />
              </div>
              <div className="absolute bottom-0 left-1/3 text-white/20 animate-float" style={{ animationDelay: '3.5s' }}>
                <Cpu size={30} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
