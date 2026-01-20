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

    const isFriday = slug === "friday-bot";
    const isPRR = slug === "prr-simulator";
    const isSMCTE = slug === "smcte";
    const isChess = slug === "chess-engine";
    const isPraia = slug === "praia-finder";
    const isCloud = slug === "cloud-cost-copilot";

    let titleClass = "text-white";
    let badgeClass = "bg-slate-800 text-slate-300";
    let proseClass = "";
    let descriptionClass = "text-slate-400";

    if (isFriday) {
        titleClass = "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]";
        badgeClass = "bg-purple-900/20 text-cyan-300 border border-purple-500/30 shadow-[0_0_10px_rgba(168,85,247,0.2)]";
        proseClass = "prose-headings:text-transparent prose-headings:bg-clip-text prose-headings:bg-gradient-to-r prose-headings:from-cyan-400 prose-headings:to-purple-400 prose-a:text-cyan-400 hover:prose-a:text-purple-400";
        descriptionClass = "text-slate-300";
    } else if (isPRR) {
        titleClass = "text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-blue-500";
        badgeClass = "bg-blue-950/40 text-amber-400 border border-blue-500/20";
        proseClass = "prose-headings:text-amber-400 prose-a:text-blue-400 hover:prose-a:text-amber-300 prose-strong:text-blue-200";
        descriptionClass = "text-blue-100/80";
    } else if (isSMCTE) {
        titleClass = "text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-indigo-400 drop-shadow-[0_0_10px_rgba(165,180,252,0.4)]";
        badgeClass = "bg-indigo-950/50 text-indigo-200 border border-indigo-500/30";
        proseClass = "prose-headings:text-indigo-200 prose-a:text-violet-300 hover:prose-a:text-violet-200 prose-strong:text-white";
        descriptionClass = "text-indigo-100/70";
    } else if (isChess) {
        titleClass = "text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-600 drop-shadow-[0_0_10px_rgba(251,191,36,0.3)]";
        badgeClass = "bg-yellow-950/30 text-amber-300 border border-yellow-600/20";
        proseClass = "prose-headings:text-amber-400 prose-a:text-yellow-300 hover:prose-a:text-yellow-200 prose-strong:text-amber-100";
        descriptionClass = "text-amber-100/80";
    } else if (isPraia) {
        titleClass = "text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-sky-400 drop-shadow-[0_0_10px_rgba(251,191,36,0.2)]";
        badgeClass = "bg-sky-950/40 text-yellow-300 border border-sky-500/20";
        proseClass = "prose-headings:text-sky-300 prose-a:text-yellow-400 hover:prose-a:text-orange-400 prose-strong:text-sky-100";
        descriptionClass = "text-sky-100/80";
    } else if (isCloud) {
        titleClass = "text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500 drop-shadow-[0_0_10px_rgba(52,211,153,0.3)]";
        badgeClass = "bg-emerald-950/40 text-emerald-300 border border-emerald-500/20";
        proseClass = "prose-headings:text-emerald-300 prose-a:text-cyan-400 hover:prose-a:text-emerald-300 prose-strong:text-white";
        descriptionClass = "text-emerald-100/80";
    }

    return (
        <div className="container mx-auto px-4 py-12 md:px-6 relative">
            {/* SMCTE: Starry Space */}
            {isSMCTE && (
                <div
                    className="fixed inset-0 -z-50 opacity-90 animate-pulse"
                    style={{
                        backgroundColor: '#020617',
                        backgroundImage: `
                            radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 3px),
                            radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 2px),
                            radial-gradient(white, rgba(255,255,255,.1) 2px, transparent 3px)
                        `,
                        backgroundSize: '550px 550px, 350px 350px, 250px 250px',
                        backgroundPosition: '0 0, 40px 60px, 130px 270px',
                        animationDuration: '4s'
                    }}
                />
            )}

            {/* Friday AI: Cyberpunk Grid */}
            {isFriday && (
                <div
                    className="fixed inset-0 -z-50"
                    style={{
                        backgroundColor: '#09090b', // Zinc-950
                        backgroundImage: `
                            linear-gradient(rgba(6, 182, 212, 0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(168, 85, 247, 0.05) 1px, transparent 1px),
                            radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)
                        `,
                        backgroundSize: '40px 40px, 40px 40px, 100% 100%',
                        backgroundPosition: '-1px -1px, -1px -1px, 0 0'
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                </div>
            )}

            {/* PRR Simulator: Urban City Lights */}
            {isPRR && (
                <div
                    className="fixed inset-0 -z-50"
                    style={{
                        backgroundColor: '#0f172a', // Slate-900 (Asphalt)
                        backgroundImage: `
                            radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 40%),
                            radial-gradient(circle at 80% 70%, rgba(245, 158, 11, 0.1) 0%, transparent 40%),
                            repeating-linear-gradient(45deg, rgba(255,255,255,0.01) 0px, rgba(255,255,255,0.01) 1px, transparent 1px, transparent 10px)
                        `,
                        backgroundSize: '100% 100%, 100% 100%, 100% 100%'
                    }}
                />
            )}

            {/* PraiaFinder: Summer Beach */}
            {isPraia && (
                <div
                    className="fixed inset-0 -z-50"
                    style={{
                        backgroundColor: '#0c4a6e', // Sky-900 base
                        backgroundImage: `
                             radial-gradient(circle at 90% 10%, rgba(251, 191, 36, 0.3) 0%, transparent 40%),
                             linear-gradient(to bottom, transparent, rgba(14, 165, 233, 0.1) 50%, rgba(16, 185, 129, 0.1) 100%)
                        `,
                        backgroundAttachment: 'fixed'
                    }}
                >
                    {/* Sun reflection overlay */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 blur-[100px] rounded-full translate-x-1/4 -translate-y-1/4" />
                </div>
            )}

            {isCloud && (
                <div
                    className="fixed inset-0 -z-50"
                    style={{
                        backgroundColor: '#022c22', // Emerald-950
                        backgroundImage: `
                            linear-gradient(rgba(16, 185, 129, 0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(16, 185, 129, 0.05) 1px, transparent 1px)
                        `,
                        backgroundSize: '40px 40px',
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90" />
                </div>
            )}

            {isChess && (
                <div
                    className="fixed inset-0 -z-50"
                    style={{
                        backgroundColor: '#1c1917', // Warm dark stone
                        backgroundImage: `
                            radial-gradient(circle at 50% 50%, rgba(251, 191, 36, 0.08) 0%, transparent 50%),
                            radial-gradient(rgba(251, 191, 36, 0.15) 1px, transparent 1px),
                            radial-gradient(rgba(251, 191, 36, 0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '100% 100%, 40px 40px, 20px 20px',
                        backgroundPosition: '0 0, 0 0, 10px 10px',
                    }}
                >
                    {/* Add a subtle overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-stone-950/80" />
                </div>
            )}

            <Link href="/#work" className="inline-flex items-center text-sm text-slate-400 hover:text-white mb-8 transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
            </Link>

            <div className="grid gap-12 lg:grid-cols-[1fr_300px] xl:gap-24">
                {/* Main Content */}
                <div className="space-y-12">
                    <div className="space-y-6">
                        <h1 className={`text-5xl font-extrabold tracking-tight md:text-7xl ${titleClass}`}>
                            {project.title}
                        </h1>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <Badge
                                    key={tag}
                                    variant="secondary"
                                    className={`px-3 py-1 text-sm ${badgeClass}`}
                                >
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                        <p className={`text-xl leading-relaxed ${descriptionClass}`}>
                            {project.description}
                        </p>
                    </div>

                    <ProjectGallery images={project.images || [project.thumbnail]} title={project.title} />

                    <div
                        className={`prose prose-invert prose-xl max-w-none prose-headings:font-bold prose-headings:text-white prose-p:text-slate-300 prose-p:leading-relaxed prose-li:text-slate-300 prose-h2:text-4xl prose-h2:mt-20 prose-h2:mb-10 prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-4 prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6 ${proseClass}`}
                    >
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
