import Dock from "@/components/Dock";
import LoadReveal from "@/components/LoadReveal";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="relative overflow-x-clip text-foreground">
      <LoadReveal />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Dock />
    </div>
  );
};

export default Index;
