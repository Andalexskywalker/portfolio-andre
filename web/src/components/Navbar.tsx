"use client";

import Link from "next/link";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Work", href: "/#work" },
    { name: "About", href: "/#about" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-900/50 backdrop-blur-md">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex h-16 items-center justify-between">
                    <Link href="/" className="text-xl font-bold tracking-tighter text-white">
                        André<span className="text-primary">.dev</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="flex items-center gap-4 border-l border-white/10 pl-6">
                            <Link href="https://github.com/Andalexskywalker" target="_blank">
                                <Github className="h-5 w-5 text-slate-400 hover:text-white transition-colors" />
                            </Link>
                            <Link href="https://www.linkedin.com/in/andr%C3%A9-ramos-a7b3412a2/" target="_blank">
                                <Linkedin className="h-5 w-5 text-slate-400 hover:text-white transition-colors" />
                            </Link>
                            <Button size="sm" variant="premium">
                                Contact Me
                            </Button>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-slate-300 hover:text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden border-t border-white/10 bg-slate-900/95 backdrop-blur-xl">
                    <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-base font-medium text-slate-300 hover:text-white"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="flex flex-col gap-4 pt-4 border-t border-white/10">
                            <div className="flex gap-4">
                                <Link href="https://github.com/Andalexskywalker" target="_blank">
                                    <Github className="h-5 w-5 text-slate-400 hover:text-white" />
                                </Link>
                                <Link href="https://www.linkedin.com/in/andr%C3%A9-ramos-a7b3412a2/" target="_blank">
                                    <Linkedin className="h-5 w-5 text-slate-400 hover:text-white" />
                                </Link>
                            </div>
                            <Button size="sm" variant="premium" className="w-full">
                                Contact Me
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
