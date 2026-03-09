import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import { TechStack } from "@/components/TechStack";
import { WorkGrid } from "@/components/WorkGrid";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <TechStack />
      <WorkGrid />
      <About />
      <Contact />
    </main>
  );
}
