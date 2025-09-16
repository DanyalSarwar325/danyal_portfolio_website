import { Code, Database, Globe, Smartphone, Terminal, GitBranch } from 'lucide-react';

const TechStack = () => {
  const technologies = [
    { name: 'HTML5', icon: Globe },
    { name: 'CSS3', icon: Code },
    { name: 'JavaScript', icon: Terminal },
    { name: 'Node.js', icon: Database },
    { name: 'React', icon: Smartphone },
    { name: 'Next.js', icon: Code },
    { name: 'Git', icon: GitBranch },
  ];

  return (
    <div className="animate-slide-in-up">
      <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6">
        {technologies.map((tech, index) => (
          <div
            key={tech.name}
            className="flex items-center space-x-3 bg-tech-stack rounded-lg px-4 py-3 border border-border hover:border-primary/30 transition-smooth hover-scale group"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <tech.icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-smooth" />
            <span className="text-sm font-medium text-foreground group-hover:text-primary transition-smooth">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;