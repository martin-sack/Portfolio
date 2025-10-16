import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export default function ProjectCard({
  title,
  description,
  icon: Icon,
  technologies,
  liveUrl,
  githubUrl,
  featured = false
}: ProjectCardProps) {
  const handleLiveClick = () => {
    console.log(`Opening live demo for ${title}`);
    if (liveUrl) {
      window.open(liveUrl, '_blank');
    }
  };

  const handleGithubClick = () => {
    console.log(`Opening GitHub repo for ${title}`);
    if (githubUrl) {
      window.open(githubUrl, '_blank');
    }
  };

  return (
    <Card className={`group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-ring/20 ${featured ? 'border-ring/50' : 'border-border'}`}
      data-testid={`card-project-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-ring/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <CardContent className="relative p-8 h-full flex flex-col">
        {/* Icon */}
        <div className="mb-6">
          <div className="w-16 h-16 rounded-lg bg-ring/10 flex items-center justify-center group-hover:bg-ring/20 transition-colors">
            <Icon className="w-8 h-8 text-ring" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-foreground group-hover:text-ring transition-colors">
                {title}
              </h3>
              {featured && (
                <span className="px-2 py-1 bg-ring/20 text-ring text-xs font-medium rounded-full">
                  Featured
                </span>
              )}
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-secondary/50 text-secondary-foreground text-sm rounded-full"
                data-testid={`badge-tech-${tech.toLowerCase()}`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-6 pt-6 border-t border-ring/20">
          {liveUrl && (
            <Button
              variant="outline"
              size="sm"
              onClick={handleLiveClick}
              data-testid={`button-live-${title.toLowerCase().replace(/\s+/g, '-')}`}
              className="flex-1 group-hover:border-ring/50 group-hover:text-ring"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </Button>
          )}
          {githubUrl && (
            <Button
              variant="outline"
              size="sm"
              onClick={handleGithubClick}
              data-testid={`button-github-${title.toLowerCase().replace(/\s+/g, '-')}`}
              className="flex-1 group-hover:border-ring/50 group-hover:text-ring"
            >
              <Github className="w-4 h-4 mr-2" />
              Code
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}