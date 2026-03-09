"use client";

import { Button } from "@/components/ui/button";
import { Mail, ArrowRight, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export function Contact() {
    return (
        <section id="contact" className="container mx-auto px-4 py-24 md:px-6">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-[800px] w-full mx-auto relative rounded-3xl border border-white/10 bg-slate-900/50 p-8 md:p-12 backdrop-blur-sm overflow-hidden text-center"
            >
                <div className="absolute top-0 right-0 h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-[100px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-[100px] translate-y-1/2 -translate-x-1/2" />
                
                <div className="relative z-10 flex flex-col items-center gap-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-white">
                        <MessageSquare className="h-8 w-8 text-blue-400" />
                    </div>
                    
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Let's build something great together.
                        </h2>
                        <p className="text-lg text-slate-400 max-w-[600px] mx-auto">
                            Whether you have an exciting project, a challenging problem, or just want to say hi, my inbox is always open. I'll get back to you as soon as I can.
                        </p>
                    </div>

                    <div className="pt-4">
                        <Button size="lg" className="h-14 px-8 text-lg font-medium gap-3 rounded-xl bg-white text-black hover:bg-slate-200 transition-all" asChild>
                            <a href="mailto:andalex.ramos04@gmail.com">
                                <Mail className="h-5 w-5" />
                                Say Hello
                            </a>
                        </Button>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
