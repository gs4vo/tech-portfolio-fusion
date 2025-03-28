
import { Card, CardContent } from "@/components/ui/card";

type TechItem = {
  name: string;
  category: string;
  level: number;
  description: string;
};

const Technologies = () => {
  const technologies: TechItem[] = [
    {
      name: "JavaScript",
      category: "Linguagem",
      level: 90,
      description: "Desenvolvimento frontend e backend com Node.js"
    },
    {
      name: "Java",
      category: "Linguagem",
      level: 95,
      description: "Desenvolvimento de aplicações empresariais e APIs"
    },
    {
      name: "C",
      category: "Linguagem",
      level: 80,
      description: "Desenvolvimento de sistemas de baixo nível"
    },
    {
      name: "MySQL",
      category: "Banco de Dados",
      level: 85,
      description: "Modelagem, queries complexas e otimização"
    },
    {
      name: "Spring Boot",
      category: "Framework",
      level: 90,
      description: "Criação de APIs RESTful e microsserviços"
    },
    {
      name: "Node.js",
      category: "Runtime",
      level: 85,
      description: "Backend JavaScript com foco em APIs"
    },
    {
      name: "Express",
      category: "Framework",
      level: 85,
      description: "Desenvolvimento de APIs web com Node.js"
    },
    {
      name: "Axios",
      category: "Biblioteca",
      level: 80,
      description: "Cliente HTTP para integrações com APIs externas"
    },
    {
      name: "Docker",
      category: "DevOps",
      level: 75,
      description: "Conteinerização de aplicações"
    },
    {
      name: "Git",
      category: "Versionamento",
      level: 85,
      description: "Controle de versão e colaboração"
    },
    {
      name: "MongoDB",
      category: "Banco de Dados",
      level: 70,
      description: "Armazenamento NoSQL para aplicações modernas"
    },
    {
      name: "REST APIs",
      category: "Arquitetura",
      level: 90,
      description: "Design e implementação de APIs RESTful"
    }
  ];

  return (
    <section id="technologies" className="py-20">
      <div className="section-container">
        <h2 className="section-title">Tecnologias</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <TechCard key={index} tech={tech} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TechCard = ({ tech }: { tech: TechItem }) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-lg border border-gray-200 group">
      <div className="h-2 bg-tech-gradient"></div>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="font-bold text-lg">{tech.name}</h3>
            <p className="text-sm text-gray-500">{tech.category}</p>
          </div>
          <div className="text-xs font-bold px-2 py-1 rounded-full bg-gray-100 group-hover:bg-tech-indigo/10 transition-colors">
            {tech.level}%
          </div>
        </div>
        
        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-tech-gradient transition-all duration-500 group-hover:animate-pulse-slow"
            style={{ width: `${tech.level}%` }}
          ></div>
        </div>
        
        <p className="mt-4 text-sm text-gray-600">{tech.description}</p>
      </CardContent>
    </Card>
  );
};

export default Technologies;
