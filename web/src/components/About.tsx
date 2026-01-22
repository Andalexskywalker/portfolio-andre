import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Database, Layout, Server, Sparkles } from "lucide-react";
import Image from "next/image";

export function About() {
    return (
        <section id="about" className="container mx-auto px-4 py-24 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                <div className="space-y-6 order-2 lg:order-1">
                    <div className="inline-flex items-center rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-sm font-medium text-purple-400">
                        <Sparkles className="mr-2 h-4 w-4" /> About Me
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Building digital products with intent and precision.
                    </h2>
                    <p className="text-lg text-slate-400">
                        I'm a Software Engineer focused on building robust, scalable solutions, with a core specialization in Python and Java.
                        <br />
                        <br />
                        I bridge the gap between complex backend logic and efficient deployment, ensuring every system runs optimally. My expertise extends to server management (Apache, Nginx) and containerization with Docker for improved organization and performance.
                        <br />
                        <br />
                        Beyond traditional coding, I have a deep curiosity for Artificial Intelligence, using it to exponentially enhance my ideas and projects. I am also actively expanding my knowledge in Cloud Computing to design even more resilient architectures.
                        <br />
                        <br />
                        While I still build creative applications, my passion lies in engineering the powerful engines that drive them.
                    </p>

                    <div className="flex gap-3">
                        <Button variant="outline" className="gap-2" asChild>
                            <a href="/cv_en.pdf" target="_blank">
                                CV (English) <ArrowRight className="h-4 w-4" />
                            </a>
                        </Button>
                        <Button variant="outline" className="gap-2" asChild>
                            <a href="/cv_pt.pdf" target="_blank">
                                CV (Portuguese) <ArrowRight className="h-4 w-4" />
                            </a>
                        </Button>
                    </div>
                </div>

                {/* Visual / Image Side */}
                <div className="order-1 lg:order-2 flex justify-center">
                    <div className="relative h-[400px] w-[350px] sm:w-[400px] rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-sm">
                        <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-blue-500/20 blur-2xl" />
                        <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-purple-500/20 blur-3xl" />

                        <div className="h-full w-full rounded-xl bg-slate-950/50 p-6 flex flex-col justify-center gap-6 border border-white/5">
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                                    <Layout className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">Frontend</h4>
                                    <p className="text-sm text-slate-400">React, Next.js</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/10 text-green-400">
                                    <Code2 className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">Backend</h4>
                                    <p className="text-sm text-slate-400">Python, Java, FastAPI</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/10 text-orange-400">
                                    <Server className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">Infrastructure</h4>
                                    <p className="text-sm text-slate-400">Docker, Nginx, Apache</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
                                    <Sparkles className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">AI & Cloud</h4>
                                    <p className="text-sm text-slate-400">LLMs, Agents, RAG</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}
