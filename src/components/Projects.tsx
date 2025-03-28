
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

type Project = {
  title: string;
  description: string;
  techs: string[];
  github?: string;
  liveUrl?: string;
  featured: boolean;
};

const Projects = () => {
  const projects: Project[] = [
    {
      title: "API de Gerenciamento de Usuários",
      description: "Sistema completo de autenticação e autorização com JWT, funções de administrador e perfis de usuário.",
      techs: ["Java", "Spring Boot", "MySQL", "JWT"],
      github: "https://github.com/",
      featured: true
    },
    {
      title: "Microsserviço de Pagamentos",
      description: "Sistema de processamento de pagamentos com integração a gateways de pagamento e notificações em tempo real.",
      techs: ["Node.js", "Express", "MongoDB", "RabbitMQ"],
      github: "https://github.com/",
      liveUrl: "https://example.com",
      featured: true
    },
    {
      title: "Sistema de Agendamento",
      description: "Aplicação para gerenciamento de agendamentos com controle de disponibilidade e notificações.",
      techs: ["Java", "Spring Boot", "MySQL", "Docker"],
      github: "https://github.com/",
      featured: false
    },
    {
      title: "API de Inventário",
      description: "Sistema de controle de estoque com rastreamento de produtos, histórico de movimentações e relatórios.",
      techs: ["Node.js", "Express", "PostgreSQL", "Redis"],
      github: "https://github.com/",
      featured: true
    },
    {
      title: "Biblioteca de Validação",
      description: "Pacote open-source para validação de dados em aplicações JavaScript com suporte a schemas personalizados.",
      techs: ["JavaScript", "TypeScript", "Jest"],
      github: "https://github.com/",
      liveUrl: "https://example.com",
      featured: false
    },
    {
      title: "Integração com APIs Externas",
      description: "Middleware para integração padronizada com múltiplos serviços de terceiros usando adaptadores.",
      techs: ["Java", "Spring Boot", "Axios", "JWT"],
      github: "https://github.com/",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 bg-secondary">
      <div className="section-container">
        <h2 className="section-title">Projetos</h2>
        
        <div className="mb-16">
          <h3 className="text-xl md:text-2xl font-bold mb-6 text-center">Projetos Principais</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-xl md:text-2xl font-bold mb-6 text-center">Outros Projetos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-lg border border-gray-200 h-full flex flex-col">
      <CardHeader className="pb-2">
        <CardTitle>{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.techs.map((tech, idx) => (
            <span 
              key={idx} 
              className="px-2 py-1 text-xs font-medium rounded-full bg-tech-indigo/10 text-tech-indigo"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between gap-2">
        {project.github && (
          <Button asChild variant="outline" size="sm" className="flex-1">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1"
            >
              <Github size={16} />
              <span>Código</span>
            </a>
          </Button>
        )}
        {project.liveUrl && (
          <Button asChild size="sm" className="flex-1 bg-tech-gradient hover:opacity-90">
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1"
            >
              <ExternalLink size={16} />
              <span>Demo</span>
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default Projects;
