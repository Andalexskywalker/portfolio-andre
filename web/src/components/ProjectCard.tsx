import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github, Sparkles } from "lucide-react";
import type { Project } from "@/lib/data";

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    const isFeatured = project.featured;

    return (
        <Card className={`group overflow-hidden transition-all ${
            isFeatured 
            ? "border-purple-500/50 bg-slate-900/60 shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:border-purple-400/80 hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] ring-1 ring-purple-500/20 relative" 
            : "border-white/10 bg-slate-900/50 hover:border-white/20"
        }`}>
            {isFeatured && (
                <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-purple-500/20 blur-2xl pointer-events-none z-0" />
            )}
            <div className={`relative aspect-video overflow-hidden z-10 ${project.thumbnail.endsWith('.svg') ? 'bg-slate-900' : ''}`}>
                <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className={`${project.thumbnail.endsWith('.svg')
                            ? "object-contain p-12 hover:scale-110"
                            : "object-cover group-hover:scale-105"
                        } transition-transform duration-500`}
                    unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-60" />
                {isFeatured && (
                    <div className="absolute top-3 right-3 shrink-0">
                        <Badge variant="default" className="bg-purple-600 hover:bg-purple-500 text-white border-none gap-1 shadow-lg backdrop-blur-md">
                            <Sparkles className="h-3 w-3" /> Featured
                        </Badge>
                    </div>
                )}
            </div>
            <CardHeader className="relative z-10">
                <div className="space-y-1">
                    <h3 className="text-xl font-semibold text-white group-hover:text-primary transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-sm text-slate-400 line-clamp-3">
                        {project.description}
                    </p>
                </div>
            </CardHeader>
            <CardContent className="relative z-10">
                <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 4).map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-slate-800 text-slate-300 hover:bg-slate-700 border border-white/5">
                            {tag}
                        </Badge>
                    ))}
                    {project.tags.length > 4 && (
                        <Badge variant="secondary" className="bg-slate-800 text-slate-300 border border-white/5">
                            +{project.tags.length - 4}
                        </Badge>
                    )}
                </div>
            </CardContent>
            <CardFooter className="flex gap-2 relative z-10">
                <Button variant="outline" size="sm" className="w-full gap-2 border-slate-700 hover:bg-slate-800 hover:text-white" asChild>
                    <Link href={`/projects/${project.slug}`}>
                        View Details <ArrowUpRight className="h-4 w-4" />
                    </Link>
                </Button>
                {project.githubUrl && (
                    <Button variant="ghost" size="icon" className="shrink-0 text-slate-400 hover:text-white hover:bg-slate-800 border border-transparent hover:border-slate-700" asChild>
                        <Link href={project.githubUrl} target="_blank">
                            <Github className="h-4 w-4" />
                        </Link>
                    </Button>
                )}
            </CardFooter>
        </Card>
    );
}
