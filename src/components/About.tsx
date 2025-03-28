
import { Terminal, Award, GraduationCap, Medal } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary tech-bg">
      <div className="section-container">
        <h2 className="section-title flex items-center justify-center gap-2 mb-12">
          <Terminal className="text-tech-indigo" />
          <span>Sobre Mim</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="futuristic-card animate-float" style={{ animationDelay: '0.5s' }}>
            <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-tech-indigo w-8 h-8 rounded-full flex items-center justify-center animate-pulse-glow">
              <Terminal size={16} className="text-white" />
            </div>
            
            <p className="text-lg mb-6 leading-relaxed text-gray-300">
              Sou um desenvolvedor backend apaixonado por construir aplicações eficientes e escaláveis. Com experiência em diversas tecnologias e frameworks, tenho me especializado em criar soluções que combinam performance com código limpo e manutenível.
            </p>
            
            <p className="text-lg mb-6 leading-relaxed text-gray-300">
              Minha jornada de desenvolvimento começou com <span className="font-semibold text-white">JavaScript</span> e evoluiu para incorporar tecnologias como <span className="font-semibold text-white">Java</span>, <span className="font-semibold text-white">Node.js</span> e <span className="font-semibold text-white">Spring Boot</span>. Tenho trabalhado em projetos que vão desde APIs REST até microsserviços e integrações com bancos de dados.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-300">
              Estou sempre estudando novas tecnologias e me adaptando às melhores práticas do mercado para entregar soluções de alta qualidade. Meu objetivo é criar sistemas robustos que atendam às necessidades dos usuários enquanto mantêm um alto padrão de código.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="futuristic-card text-center group hover:scale-105 transition-transform">
              <div className="text-tech-indigo mb-4 flex justify-center">
                <Award size={34} className="group-hover:animate-spin transition-transform" style={{animationDuration: '10s'}} />
              </div>
              <h3 className="text-xl font-bold mb-2">Experiência</h3>
              <p className="text-gray-400">+5 anos desenvolvendo soluções backend</p>
            </div>
            
            <div className="futuristic-card text-center group hover:scale-105 transition-transform" style={{ transitionDelay: '0.1s' }}>
              <div className="text-tech-indigo mb-4 flex justify-center">
                <GraduationCap size={34} className="group-hover:animate-bounce" style={{animationDuration: '2s'}} />
              </div>
              <h3 className="text-xl font-bold mb-2">Formação</h3>
              <p className="text-gray-400">Bacharelado em Ciência da Computação</p>
            </div>
            
            <div className="futuristic-card text-center group hover:scale-105 transition-transform" style={{ transitionDelay: '0.2s' }}>
              <div className="text-tech-indigo mb-4 flex justify-center">
                <Medal size={34} className="group-hover:animate-pulse" />
              </div>
              <h3 className="text-xl font-bold mb-2">Certificações</h3>
              <p className="text-gray-400">AWS, Oracle Java, Spring</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
