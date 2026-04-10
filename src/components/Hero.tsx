import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github, Linkedin, Sparkles } from "lucide-react";
import profileImage from "@/assets/avatar.avif";

type HeroProps = {
  onViewWork?: () => void;
  onContact?: () => void;
};

const ROTATING_ROLES = [
  "Backend Engineer",
  "AI Automation Engineer",
  "Full Stack Software Engineer",
];

const Hero = ({ onViewWork, onContact }: HeroProps) => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROTATING_ROLES.length);
    }, 2300);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative flex min-h-[calc(100vh-64px)] items-center py-16 sm:py-20">
      <div className="section-padding w-full">
        <div className="mx-auto grid w-full max-w-6xl items-start gap-8 lg:grid-cols-[minmax(0,1fr)_220px] lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <p className="inline-flex items-center gap-2 rounded-full bg-secondary/35 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              <Sparkles className="h-3.5 w-3.5" />
              Building high-performance backend and AI systems
            </p>

            <h1 className="mt-5 max-w-5xl text-balance text-4xl font-extrabold leading-[1.02] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Hey, I&apos;m <span className="gradient-text">Aniket Gore</span>
              <br />
              A Software Engineer
            </h1>

            <div className="mt-4 text-lg font-semibold text-muted-foreground sm:text-xl">
              <span className="text-foreground">Now: </span>
              <span className="gradient-text">{ROTATING_ROLES[roleIndex]}</span>
              <span className="typing-cursor" aria-hidden="true" />
            </div>

            <p className="mt-5 max-w-4xl text-base leading-relaxed text-body sm:text-lg">
              Backend engineer with ~2 years of experience building and scaling robust architectures, AI-driven automation platforms,
              and high-throughput APIs with Node.js, Express.js, MongoDB, and AWS.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button type="button" onClick={onContact} className="btn-primary">
                Contact Me
                <ExternalLink className="ml-1.5 h-4 w-4" />
              </button>
              <button type="button" onClick={onViewWork} className="btn-secondary">
                View Experience
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </button>
              <a href="https://github.com/aniketgore100" target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="GitHub">
                <Github className="h-4 w-4" />
              </a>
              <a href="https://www.linkedin.com/in/aniket-gore-3681b4203/" target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="hidden justify-self-center lg:block"
          >
            <img
              src={profileImage}
              alt="Aniket Gore"
              className="h-44 w-44 rounded-full border border-border/60 object-cover shadow-[0_20px_60px_-30px_rgba(114,112,255,0.8)] xl:h-52 xl:w-52"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
