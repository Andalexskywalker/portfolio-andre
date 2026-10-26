import { Blocks, Braces, Cloud, Code, Database, Network, Server, Sparkles, Terminal, Wrench } from "lucide-react";

export function TechStack() {
    const techs = [
        { name: "Python", icon: Terminal },
        { name: "FastAPI", icon: Blocks },
        { name: "Java", icon: Code },
        { name: "SQL / NoSQL", icon: Database },
        { name: "Azure", icon: Cloud },
        { name: "Docker", icon: Server },
        { name: "Terraform", icon: Braces },
        { name: "Linux & Networking", icon: Network },
        { name: "Apache / Nginx", icon: Server },
        { name: "Keras / TensorFlow", icon: Sparkles },
        { name: "Git", icon: Wrench },
    ];

    return (
        <section className="border-y border-white/5 bg-slate-950/30 py-12 backdrop-blur-sm">
            <div className="container mx-auto px-4 md:px-6">
                <p className="mb-8 text-center text-sm font-medium text-slate-500 uppercase tracking-widest">
                    Technologies & Tools
                </p>
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6 max-w-4xl mx-auto">
                    {techs.map((tech) => {
                        const Icon = tech.icon;
                        return (
                            <div 
                                key={tech.name} 
                                className="flex items-center gap-2 rounded-full border border-white/5 bg-white/5 px-4 py-2 text-slate-400 backdrop-blur-md transition-all hover:border-white/10 hover:bg-white/10 hover:text-white hover:scale-105 cursor-default select-none shadow-sm"
                            >
                                <Icon className="h-4 w-4" />
                                <span className="text-sm font-medium">{tech.name}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
