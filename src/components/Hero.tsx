import { Github, Download } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section id="home" className="section-bg-primary py-16 sm:py-24">
      <div className="section-padding">
        <div className="section-container">
          <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:gap-16">
            {/* Profile Picture */}
            <div className="flex-shrink-0">
              <div className="h-40 w-40 overflow-hidden rounded-2xl border-4 border-secondary shadow-lg sm:h-48 sm:w-48">
                <img
                  src={profileImage}
                  alt="Aniket Gore"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                Software Engineer I
              </p>
              <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Aniket Gore
              </h1>
              <p className="mt-6 max-w-2xl text-body leading-relaxed">
                Full-Stack Developer with 1.5 years of professional experience
                in delivering scalable web and AI-integrated applications using
                the MERN stack and Next.js. Proficient in developing RESTful
                APIs, RBAC-based access systems, and AI-driven automation
                workflows leveraging LLMs, RAG pipelines, and Google Cloud
                services.
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
                <a
                  href="/resume.pdf"
                  download
                  className="btn-primary gap-2"
                >
                  <Download size={18} />
                  Download Resume
                </a>
                <a
                  href="https://github.com/aniketgore100"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary gap-2"
                >
                  <Github size={18} />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
