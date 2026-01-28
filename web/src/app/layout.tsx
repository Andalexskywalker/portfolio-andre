import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "André | Software Engineer",
  description: "Software Engineer specializing in backend architecture, intelligent systems, and scalable infrastructure.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://andre-ramos.dev/",
    title: "André | Software Engineer",
    description: "Specializing in Python, Java, Docker, and AI Integration.",
    siteName: "André Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "André | Software Engineer",
    description: "Specializing in Python, Java, Docker, and AI Integration.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={cn(outfit.className, "bg-background text-foreground antialiased selection:bg-primary/30 flex min-h-screen flex-col")}>
        <Navbar />
        <main className="flex-1 pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
