
const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="section-container">
        <h2 className="section-title">Sobre Mim</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="futuristic-card">
            <p className="text-lg mb-6 leading-relaxed">
              Sou um desenvolvedor backend apaixonado por construir aplicações eficientes e escaláveis. Com experiência em diversas tecnologias e frameworks, tenho me especializado em criar soluções que combinam performance com código limpo e manutenível.
            </p>
            
            <p className="text-lg mb-6 leading-relaxed">
              Minha jornada de desenvolvimento começou com <span className="font-semibold">JavaScript</span> e evoluiu para incorporar tecnologias como <span className="font-semibold">Java</span>, <span className="font-semibold">Node.js</span> e <span className="font-semibold">Spring Boot</span>. Tenho trabalhado em projetos que vão desde APIs REST até microsserviços e integrações com bancos de dados.
            </p>
            
            <p className="text-lg leading-relaxed">
              Estou sempre estudando novas tecnologias e me adaptando às melhores práticas do mercado para entregar soluções de alta qualidade. Meu objetivo é criar sistemas robustos que atendam às necessidades dos usuários enquanto mantêm um alto padrão de código.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="futuristic-card text-center">
              <h3 className="text-xl font-bold mb-2">Experiência</h3>
              <p className="text-gray-600">+5 anos desenvolvendo soluções backend</p>
            </div>
            
            <div className="futuristic-card text-center">
              <h3 className="text-xl font-bold mb-2">Formação</h3>
              <p className="text-gray-600">Bacharelado em Ciência da Computação</p>
            </div>
            
            <div className="futuristic-card text-center">
              <h3 className="text-xl font-bold mb-2">Certificações</h3>
              <p className="text-gray-600">AWS, Oracle Java, Spring</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
