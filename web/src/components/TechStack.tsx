export function TechStack() {
    const techs = [
        "Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Python",
        "FastAPI", "PostgreSQL", "Docker", "Git", "Figma", "Prisma"
    ];

    return (
        <section className="border-y border-white/5 bg-slate-950/30 py-10 backdrop-blur-sm">
            <div className="container mx-auto px-4 md:px-6">
                <p className="mb-6 text-center text-sm font-medium text-slate-500 uppercase tracking-widest">
                    Technologies I work with
                </p>
                <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
                    {techs.map((tech) => (
                        <div key={tech} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors cursor-default select-none">
                            <span className="text-lg font-semibold">{tech}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
