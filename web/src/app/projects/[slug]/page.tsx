import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ProjectGallery } from "@/components/ProjectGallery";
import ReactMarkdown from "react-markdown";
import type { Metadata } from "next";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);
    if (!project) {
        return { title: "Project Not Found" };
    }
    return {
        title: `${project.title} | André Portfolio`,
        description: project.description,
    };
}

export default async function ProjectPage({ params }: { params: Params }) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 py-12 md:px-6">
            <Link href="/#work" className="inline-flex items-center text-sm text-slate-400 hover:text-white mb-8 transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
            </Link>

            <div className="grid gap-12 lg:grid-cols-[1fr_300px] xl:gap-24">
                {/* Main Content */}
                <div className="space-y-12">
                    <div className="space-y-6">
                        <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                            {project.title}
                        </h1>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <Badge key={tag} variant="secondary" className="px-3 py-1 text-sm bg-slate-800 text-slate-300">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                        <p className="text-xl text-slate-400 leading-relaxed">
                            {project.description}
                        </p>
                    </div>

                    <ProjectGallery images={project.images || [project.thumbnail]} title={project.title} />

                    <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-slate-400 prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
                        <ReactMarkdown>{project.content || ""}</ReactMarkdown>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                    <div className="rounded-xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-sm sticky top-24">
                        <h3 className="text-lg font-semibold text-white mb-4">Project Links</h3>
                        <div className="flex flex-col gap-3">
                            {project.githubUrl && (
                                <Button className="w-full gap-2" variant="outline" asChild>
                                    <Link href={project.githubUrl} target="_blank">
                                        <Github className="h-4 w-4" /> View Source
                                    </Link>
                                </Button>
                            )}
                            {project.demoUrl && (
                                <Button className="w-full gap-2" asChild>
                                    <Link href={project.demoUrl} target="_blank">
                                        <ExternalLink className="h-4 w-4" /> Live Demo
                                    </Link>
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
