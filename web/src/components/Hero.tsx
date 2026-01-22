"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-4 py-24 text-center md:px-6">
            {/* Background Gradient Blob */}
            <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[100px]" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
            >
                <div className="inline-block rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm">
                    Available for new opportunities
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                    Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">André</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-lg text-slate-400 md:text-xl">
                    Software Engineer specializing in robust backend systems and AI integration.
                    I engineer scalable infrastructure and intelligent solutions for complex problems.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-8 flex flex-wrap justify-center gap-4"
            >
                <Button size="lg" className="gap-2" asChild>
                    <Link href="#work">
                        View My Work <ArrowRight className="h-4 w-4" />
                    </Link>
                </Button>
                <div className="flex gap-2">
                    <Button variant="outline" size="lg" className="gap-2" asChild>
                        <Link href="/cv_en.pdf" target="_blank">
                            <FileText className="h-4 w-4" /> CV (EN)
                        </Link>
                    </Button>
                    <Button variant="outline" size="lg" className="gap-2" asChild>
                        <Link href="/cv_pt.pdf" target="_blank">
                            <FileText className="h-4 w-4" /> CV (PT)
                        </Link>
                    </Button>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-12 flex gap-6"
            >
                <Link href="https://github.com/Andalexskywalker" target="_blank" className="text-slate-400 hover:text-white transition-colors">
                    <Github className="h-6 w-6" />
                    <span className="sr-only">GitHub</span>
                </Link>
                <Link href="https://www.linkedin.com/in/andr%C3%A9-ramos-a7b3412a2/" target="_blank" className="text-slate-400 hover:text-white transition-colors">
                    <Linkedin className="h-6 w-6" />
                    <span className="sr-only">LinkedIn</span>
                </Link>
            </motion.div>
        </section>
    );
}
