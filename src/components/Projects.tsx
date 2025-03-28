
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type GitHubRepo = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  topics: string[];
  stargazers_count: number;
  language: string;
};

const GITHUB_USERNAME = "gustavofariaa"; // Altere para seu nome de usuário do GitHub

const fetchGitHubRepos = async (): Promise<GitHubRepo[]> => {
  const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch GitHub repositories');
  }
  
  return response.json();
};

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const reposPerPage = 6;

  const { data: repos, isLoading, error } = useQuery({
    queryKey: ['github-repos'],
    queryFn: fetchGitHubRepos,
  });

  if (isLoading) {
    return (
      <section id="projects" className="py-20 bg-secondary">
        <div className="section-container">
          <h2 className="section-title">Projetos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <Card key={index} className="h-full">
                <CardHeader className="pb-2">
                  <Skeleton className="h-6 w-3/4" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-24 w-full mb-4" />
                  <div className="flex flex-wrap gap-2">
                    {Array.from({ length: 3 }).map((_, idx) => (
                      <Skeleton key={idx} className="h-6 w-16 rounded-full" />
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Skeleton className="h-9 w-full" />
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="py-20 bg-secondary">
        <div className="section-container">
          <h2 className="section-title">Projetos</h2>
          <div className="p-8 text-center">
            <p className="text-tech-red text-xl">Erro ao carregar projetos do GitHub</p>
            <p className="text-gray-400 mt-2">Por favor, tente novamente mais tarde</p>
          </div>
        </div>
      </section>
    );
  }

  // Filter out repositories without descriptions
  const filteredRepos = repos?.filter(repo => repo.description) || [];
  
  // Calculate pagination
  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = filteredRepos.slice(indexOfFirstRepo, indexOfLastRepo);
  const totalPages = Math.ceil(filteredRepos.length / reposPerPage);

  return (
    <section id="projects" className="py-20 bg-secondary">
      <div className="section-container">
        <h2 className="section-title">Projetos do GitHub</h2>
        
        {currentRepos.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400">Nenhum projeto encontrado no GitHub</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
              {currentRepos.map((repo) => (
                <GitHubRepoCard key={repo.id} repo={repo} />
              ))}
            </div>
            
            {totalPages > 1 && (
              <Pagination className="mt-8">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious 
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                    />
                  </PaginationItem>
                  
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <PaginationItem key={index}>
                      <PaginationLink
                        isActive={currentPage === index + 1}
                        onClick={() => setCurrentPage(index + 1)}
                      >
                        {index + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  
                  <PaginationItem>
                    <PaginationNext 
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            )}
          </>
        )}
      </div>
    </section>
  );
};

const GitHubRepoCard = ({ repo }: { repo: GitHubRepo }) => {
  // Determine technologies based on repo language and topics
  const technologies = [
    repo.language,
    ...(repo.topics?.slice(0, 3) || [])
  ].filter(Boolean);

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-lg border border-gray-200/10 h-full flex flex-col bg-black/20 backdrop-blur-sm">
      <CardHeader className="pb-2">
        <CardTitle className="line-clamp-1 text-xl">{repo.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-400 mb-4 line-clamp-3">
          {repo.description || "Sem descrição disponível"}
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.map((tech, idx) => (
            <span 
              key={idx} 
              className="px-2 py-1 text-xs font-medium rounded-full bg-tech-red/10 text-tech-red"
            >
              {tech}
            </span>
          ))}
          {repo.stargazers_count > 0 && (
            <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-500/10 text-yellow-500 flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-star">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              {repo.stargazers_count}
            </span>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between gap-2">
        <Button asChild variant="outline" size="sm" className="flex-1 border-tech-red/20 hover:bg-tech-red/10">
          <a 
            href={repo.html_url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1"
          >
            <Github size={16} />
            <span>Código</span>
          </a>
        </Button>
        {repo.homepage && (
          <Button asChild size="sm" className="flex-1 bg-tech-gradient hover:opacity-90">
            <a 
              href={repo.homepage} 
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
