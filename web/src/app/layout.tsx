import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "André Ramos | Junior Software Engineer",
  description: "Junior software engineer: Python, Java, Azure, Docker and Linux.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://andre-ramos.dev/",
    title: "André Ramos | Junior Software Engineer",
    description: "Python, Java, Azure, Docker and Linux projects.",
    siteName: "André Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "André Ramos | Junior Software Engineer",
    description: "Python, Java, Azure, Docker and Linux projects.",
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
