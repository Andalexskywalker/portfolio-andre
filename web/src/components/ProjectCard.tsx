import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/lib/data";

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Card className="group overflow-hidden border-white/10 bg-slate-900/50 transition-colors hover:border-white/20">
            <div className="relative aspect-video overflow-hidden">
                <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-60" />
            </div>
            <CardHeader>
                <div className="space-y-1">
                    <h3 className="text-xl font-semibold text-white group-hover:text-primary transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-sm text-slate-400 line-clamp-2">
                        {project.description}
                    </p>
                </div>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 4).map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-slate-800 text-slate-300 hover:bg-slate-700">
                            {tag}
                        </Badge>
                    ))}
                    {project.tags.length > 4 && (
                        <Badge variant="secondary" className="bg-slate-800 text-slate-300">
                            +{project.tags.length - 4}
                        </Badge>
                    )}
                </div>
            </CardContent>
            <CardFooter className="flex gap-2">
                <Button variant="outline" size="sm" className="w-full gap-2 border-slate-700 hover:bg-slate-800 hover:text-white" asChild>
                    <Link href={`/projects/${project.slug}`}>
                        View Details <ArrowUpRight className="h-4 w-4" />
                    </Link>
                </Button>
                {project.githubUrl && (
                    <Button variant="ghost" size="icon" className="shrink-0 text-slate-400 hover:text-white hover:bg-slate-800" asChild>
                        <Link href={project.githubUrl} target="_blank">
                            <Github className="h-4 w-4" />
                        </Link>
                    </Button>
                )}
            </CardFooter>
        </Card>
    );
}
