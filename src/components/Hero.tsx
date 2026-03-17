import { ArrowRight, Download, Github, Linkedin, Sparkles } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

type HeroProps = {
  onOpenLiveProject?: () => void;
};

const HIGHLIGHTS = [
  "1.5+ Years Experience",
  "MERN + Next.js",
  "AI Workflow Automation",
  "RAG + LLM Integrations",
];

const Hero = ({ onOpenLiveProject }: HeroProps) => {
  return (
    <section id="home" className="section-bg-primary py-7 sm:py-10">
      <div className="section-padding">
        <div className="section-container">
          <div className="surface-card overflow-hidden p-6 sm:p-8 lg:p-10">
            <div className="grid items-center gap-8 lg:grid-cols-[240px_1fr]">
              <div className="mx-auto w-full max-w-[240px]">
                <div className="relative aspect-square w-full rounded-full border border-border bg-card p-2 shadow-xl">
                  <div className="h-full w-full overflow-hidden rounded-full">
                    <img
                      src={profileImage}
                      alt="Aniket Gore"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
                    Software Engineer I
                  </div>
                </div>
              </div>

              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                  <Sparkles className="h-3.5 w-3.5" />
                  Building scalable web and AI-powered products
                </div>

                <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                  Hi, I&apos;m Aniket Gore
                </h1>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-body sm:text-lg">
                  Full-stack developer crafting reliable platforms with React, Next.js, Node.js, and modern AI tooling.
                  I enjoy turning messy workflows into smooth, measurable systems.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {HIGHLIGHTS.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={onOpenLiveProject}
                    className="btn-primary"
                  >
                    View Projects
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </button>
                  <a href="/resume.pdf" download className="btn-secondary">
                    <Download className="mr-1.5 h-4 w-4" />
                    Resume
                  </a>
                  <a
                    href="https://github.com/aniketgore100"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    <Github className="mr-1.5 h-4 w-4" />
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/aniket-gore-3681b4203/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    <Linkedin className="mr-1.5 h-4 w-4" />
                    LinkedIn
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
