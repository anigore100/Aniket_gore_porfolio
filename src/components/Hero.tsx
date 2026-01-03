import { Github, Download } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section id="home" className="section-bg-primary py-10 sm:py-14">
      <div className="section-padding">
        <div className="section-container">
          <div className="flex flex-col items-center gap-6 md:flex-row md:items-start md:gap-10">
            {/* Profile Picture */}
            <div className="flex-shrink-0">
              <div className="h-32 w-32 overflow-hidden rounded-xl border-4 border-secondary shadow-lg sm:h-40 sm:w-40">
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
              <h1 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                Aniket Gore
              </h1>
              <p className="mt-3 max-w-2xl text-sm text-body leading-relaxed">
                Full-Stack Developer with 1.5 years of professional experience
                in delivering scalable web and AI-integrated applications using
                the MERN stack and Next.js. Proficient in developing RESTful
                APIs, RBAC-based access systems, and AI-driven automation
                workflows leveraging LLMs, RAG pipelines, and Google Cloud
                services.
              </p>

              {/* CTA Buttons */}
              <div className="mt-5 flex flex-wrap justify-center gap-3 md:justify-start">
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
