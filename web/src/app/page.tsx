import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import { TechStack } from "@/components/TechStack";
import { WorkGrid } from "@/components/WorkGrid";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <TechStack />
      <WorkGrid />
      <About />
    </main>
  );
}
