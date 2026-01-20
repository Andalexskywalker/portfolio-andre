import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-slate-950 py-8">
            <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-slate-400">
                    © {new Date().getFullYear()} André. All rights reserved.
                </p>
                <div className="flex items-center gap-6">
                    <Link href="https://github.com/Andalexskywalker" className="text-slate-400 hover:text-white transition-colors">
                        <Github className="h-5 w-5" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/andr%C3%A9-ramos-a7b3412a2/" className="text-slate-400 hover:text-white transition-colors">
                        <Linkedin className="h-5 w-5" />
                    </Link>
                    <Link href="mailto:contact@example.com" className="text-slate-400 hover:text-white transition-colors">
                        <Mail className="h-5 w-5" />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
