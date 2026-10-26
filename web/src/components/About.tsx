"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Network, Server, Sparkles } from "lucide-react";
import Image from "next/image";

export function About() {
    return (
        <section id="about" className="container mx-auto px-4 py-24 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6 order-2 lg:order-1"
                >
                    <div className="inline-flex items-center rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-sm font-medium text-purple-400">
                        <Sparkles className="mr-2 h-4 w-4" /> About Me
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Building and learning, one project at a time.
                    </h2>
                    <p className="text-lg text-slate-400">
                        I&apos;m a junior software engineer with a BSc in Informatics Engineering from the Polytechnic Institute of Castelo Branco. I like building things end to end: backend APIs in Python, cloud deployments on Azure with Docker and Terraform, and how systems talk to each other over a network.
                        <br />
                        <br />
                        My final project used deep learning to predict satellite collision risk from ESA data. I also build with AI tools, and I say so: some projects here were written with AI assistance, and each project page explains which parts are mine.
                        <br />
                        <br />
                        This website was designed with AI assistance. The deployment and the infrastructure on Cloudflare are my own work.
                        <br />
                        <br />
                        I am looking for a junior role in software engineering, cloud or DevOps, where I can keep learning from experienced engineers.
                    </p>

                    <div className="flex flex-wrap gap-3">
                        <Button variant="outline" className="gap-2 w-full sm:w-auto" asChild>
                            <a href="/Andre_Ramos_CV.pdf" target="_blank">
                                Download CV <ArrowRight className="h-4 w-4" />
                            </a>
                        </Button>
                    </div>
                </motion.div>

                {/* Visual / Image Side */}
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="order-1 lg:order-2 flex justify-center w-full"
                >
                    <div className="relative h-auto min-h-[400px] w-full max-w-[350px] sm:max-w-[400px] rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-sm">
                        <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-blue-500/20 blur-2xl" />
                        <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-purple-500/20 blur-3xl" />

                        <div className="h-full w-full rounded-xl bg-slate-950/50 p-6 flex flex-col justify-center gap-6 border border-white/5">
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                                    <Network className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">Linux &amp; Networking</h4>
                                    <p className="text-sm text-slate-400">WSL2, WireGuard, ufw, tcpdump</p>
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
                                    <h4 className="font-semibold text-white">Cloud &amp; DevOps</h4>
                                    <p className="text-sm text-slate-400">Azure, Docker, Terraform</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
                                    <Sparkles className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">Data &amp; AI</h4>
                                    <p className="text-sm text-slate-400">Keras, pandas, LLM APIs</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section >
    );
}
