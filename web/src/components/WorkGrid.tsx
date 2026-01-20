import { projects } from "@/lib/data";
import { ProjectCard } from "@/components/ProjectCard";

export function WorkGrid() {
    return (
        <section id="work" className="container mx-auto px-4 py-24 md:px-6">
            <div className="mb-12 flex flex-col items-center text-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Featured Work</h2>
                <p className="max-w-[700px] text-lg text-slate-400">
                    A collection of projects exploring modern web development, cloud infrastructure, and AI.
                </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                ))}
            </div>
        </section>
    );
}
