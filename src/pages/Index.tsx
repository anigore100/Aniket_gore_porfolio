import StarField from "@/components/ui/StarField";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import CodingStats from "@/components/CodingStats";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

const Index = () => {
  const scrollToId = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="relative overflow-x-clip text-foreground">
      {/* Starfield sits behind everything */}
      <StarField />

      <Navbar />
      <Hero onViewWork={() => scrollToId("projects")} onContact={() => scrollToId("contact")} />
      <CodingStats />
      <Projects />
      <Experience />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
};

export default Index;
