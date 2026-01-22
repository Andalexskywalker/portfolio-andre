import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-slate-950 py-12">
            <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                <p className="text-slate-400">
                    © {new Date().getFullYear()} André. All rights reserved.
                </p>
                <div className="flex items-center gap-6">
                    <Link href="https://github.com/Andalexskywalker" className="text-slate-400 hover:text-white transition-colors p-2" target="_blank">
                        <Github className="h-6 w-6" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Link href="https://www.linkedin.com/in/andr%C3%A9-ramos-a7b3412a2/" className="text-slate-400 hover:text-white transition-colors p-2" target="_blank">
                        <Linkedin className="h-6 w-6" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link href="mailto:andalex.ramos04@gmail.com" className="text-slate-400 hover:text-white transition-colors p-2">
                        <Mail className="h-6 w-6" />
                        <span className="sr-only">Email</span>
                    </Link>
                </div>
            </div>
        </footer>
    );
}
