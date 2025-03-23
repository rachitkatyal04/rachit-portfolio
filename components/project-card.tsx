import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle, GithubIcon } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  githubUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  highlights,
  githubUrl,
}: ProjectCardProps) {
  return (
    <Card className="h-full flex flex-col transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:bg-card/60">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription className="line-clamp-2">
              {description}
            </CardDescription>
          </div>
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <GithubIcon size={24} />
            </a>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium mb-2">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <Badge key={index} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-2">Key Highlights</h4>
            <ul className="space-y-2">
              {highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    {highlight}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
