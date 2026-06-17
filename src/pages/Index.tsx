import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

const Index = () => {
  const scrollToId = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="relative overflow-x-clip bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="hero-glow hero-glow-left" />
        <div className="hero-glow hero-glow-center" />
        <div className="hero-glow hero-glow-right" />
      </div>

      <Navbar />
      <Hero onViewWork={() => scrollToId("projects")} onContact={() => scrollToId("contact")} />
      <Projects />
      <Experience />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
};

export default Index;
