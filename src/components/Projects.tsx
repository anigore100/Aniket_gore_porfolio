import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ExternalLink, Github, Video } from "lucide-react";
import { cn } from "@/lib/utils";
import projectThumbnail from "@/assets/projectThumbnail.png";

type Project = {
  title: string;
  description: string;
  details: string[];
  stack: string[];
  highlight?: string[];
  githubUrl: string;
  demoUrl?: string;
  previewImage?: string;
};

const PROJECTS: Project[] = [
  {
    title: "Document Intelligence",
    description: "Upload, manage, and chat with documents through a RAG pipeline with live source highlighting on the PDF viewer.",
    details: [
      "Designed a complete AI-powered Document Intelligence platform where organizations can securely manage documents, ask questions in natural language, and receive context-aware answers with highlighted source references inside the original PDF.",
      "Built on a full-stack microservices architecture — React frontend, Node.js/Express + MongoDB backend, and a dedicated FastAPI service for the RAG pipeline.",
      "Documents upload to AWS S3, process asynchronously through SQS, get embedded into a vector database, and become searchable via semantic retrieval.",
      "Designed a hierarchical RBAC system (Global Admin, Organization Admin, Department Admin, User) for secure multi-tenant access and fine-grained permissions.",
      "Implemented explainable AI — the system highlights the exact paragraphs the LLM used inside the PDF, so users can verify every response.",
      "Adopted an event-driven architecture where ingestion, parsing, embedding, and indexing run asynchronously, keeping the app responsive while improving scalability and reliability.",
      "Built collaborative AI workspaces where users can save findings, edit them like Notion pages, and turn AI conversations into research reports or compliance documents.",
      "Focused on clean system design, OOP, modular service architecture, RESTful APIs, and scalable backend patterns to keep the platform production-ready and easy to extend.",
    ],
    stack: ["React", "Node.js", "Express.js", "MongoDB", "FastAPI", "Python", "LangChain", "ChromaDB", "LLaMA 3.3 70B", "AWS S3", "AWS SQS"],
    highlight: ["LLaMA 3.3 70B", "ChromaDB"],
    githubUrl: "https://github.com/aniketgore100/Document_Intelligence_MERN_AI_RAG",
    demoUrl: "https://player.cloudinary.com/embed/?cloud_name=deiiskqvp&public_id=screen-recording-2026-06-19-at-000245_2IiLzVGW_t5ln2k",
    previewImage: projectThumbnail,
  },
];

const Projects = () => {
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const toggle = (title: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(title)) next.delete(title);
      else next.add(title);
      return next;
    });
  };

  return (
    <section id="projects" className="py-4 sm:py-6">
      <div className="section-padding">
        <div className="mx-auto w-full max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3, once: true }}
            className="text-2xl font-bold text-foreground sm:text-3xl"
          >
            Projects
          </motion.h2>

          <div className="mt-6 space-y-4">
            {PROJECTS.map((project, index) => {
              const isOpen = expanded.has(project.title);
              return (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ amount: 0.1, once: true }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className="overflow-hidden rounded-2xl border border-border bg-secondary/60"
                >
                  {project.previewImage && (
                    <div className="relative">
                      <div className="absolute right-2.5 top-2.5 flex gap-2">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full bg-foreground/90 px-2.5 py-1 text-xs font-semibold text-background backdrop-blur"
                        >
                          <Github className="h-3 w-3" /> Source
                        </a>
                      </div>
                      <img
                        src={project.previewImage}
                        alt={`${project.title} preview`}
                        className="h-36 w-full object-cover sm:h-44"
                        loading="lazy"
                      />
                    </div>
                  )}

                  <div className="p-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-base font-bold text-foreground hover:text-accent"
                      >
                        {project.title}
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground"
                        >
                          Demo <Video className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>

                    <p className="mt-1.5 text-sm leading-relaxed text-body">{project.description}</p>

                    {project.details.length > 0 && (
                      <>
                        <div className="mt-3 border-t border-border pt-2.5">
                          <button
                            type="button"
                            onClick={() => toggle(project.title)}
                            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
                          >
                            {isOpen ? "Hide details" : "Show details"}
                            <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")} />
                          </button>
                        </div>

                        {isOpen && (
                          <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-muted-foreground">
                            {project.details.map((d) => (
                              <li key={d} className="text-sm leading-relaxed text-body">{d}</li>
                            ))}
                          </ul>
                        )}
                      </>
                    )}

                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {project.stack.map((s) => (
                        <span key={s} className={cn("chip", project.highlight?.includes(s) && "font-semibold text-foreground")}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
