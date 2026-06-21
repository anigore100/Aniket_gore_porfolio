import { motion } from "framer-motion";
import { BrainCircuit, FileText, Github, MessageSquare, ShieldCheck } from "lucide-react";

type Project = {
  title: string;
  period: string;
  summary: string;
  outcomes: string[];
  stack: string[];
  features: { icon: React.ElementType; text: string }[];
  problem: string;
  solution: string;
  proofEmbed?: string;
  proofVideo?: string;
  proofImage?: string;
  githubUrl: string;
};

const PROJECTS: Project[] = [
  {
    title: "Document Intelligence",
    period: "2025 – Present",
    summary:
      "Full-stack platform to upload, manage, and chat with documents. PDFs are ingested asynchronously via AWS SQS into ChromaDB, then queried through a RAG pipeline backed by LLaMA 3.3 70B — with source chunks highlighted directly on the PDF viewer.",
    outcomes: [
      "Answers are grounded in document chunks with coordinate-based PDF highlighting for instant traceability.",
      "Section-aware retrieval (title → body traversal) surfaces more precise context than naive chunking.",
      "SQS-backed async ingestion decouples upload from processing — no blocking requests on the MERN API.",
    ],
    stack: ["React", "Node.js", "Express.js", "MongoDB", "FastAPI", "Python", "LangChain", "ChromaDB", "LLaMA 3.3 70B", "HuggingFace", "AWS S3", "AWS SQS"],
    features: [
      { icon: FileText,      text: "S3 upload → SQS event → async PDF ingestion" },
      { icon: BrainCircuit,  text: "RAG Q&A with LLaMA 3.3 70B via Groq" },
      { icon: MessageSquare, text: "Chunk highlighting on live PDF viewer" },
      { icon: ShieldCheck,   text: "RBAC + API key + signed URL security" },
    ],
    problem:
      "Finding specific information across large PDFs requires reading entire documents — slow and unscalable for multi-user organizations.",
    solution:
      "PDFs upload to S3, triggering an SQS message the FastAPI worker picks up for high-res chunking and embedding into ChromaDB. Queries retrieve section-aware chunks, feed them to the LLM, and return coordinate-mapped highlights for the React PDF viewer.",
    proofEmbed: "https://player.cloudinary.com/embed/?cloud_name=deiiskqvp&public_id=screen-recording-2026-06-19-at-000245_2IiLzVGW_t5ln2k",
    proofImage: "/image.png",
    githubUrl: "https://github.com/aniketgore100/Document_Intelligence_MERN_AI_RAG",
  },
];

const Projects = () => (
  <section id="projects" className="py-12 sm:py-14">
    <div className="section-padding">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3, once: true }}
          className="mb-12"
        >
          <p className="eyebrow">Projects</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">What I've built</h2>
        </motion.div>

        <div>
          {PROJECTS.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.1, once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="border-b border-white/[0.07] py-10 last:border-0"
            >
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl font-bold text-foreground sm:text-3xl">{project.title}</h3>
                  <span className="chip">{project.period}</span>
                </div>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </a>
              </div>

              {/* Summary */}
              <p className="mt-5 max-w-4xl text-base leading-relaxed text-body">{project.summary}</p>

              {/* Outcomes — left-border accent */}
              <ul className="mt-6 space-y-2 border-l-2 border-primary/40 pl-5">
                {project.outcomes.map((point) => (
                  <li key={point} className="text-sm leading-relaxed text-body">{point}</li>
                ))}
              </ul>

              {/* Features */}
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {project.features.map((f) => (
                  <div key={f.text} className="flex items-start gap-3">
                    <span className="value-icon mt-0.5 shrink-0"><f.icon className="h-4 w-4" /></span>
                    <p className="text-sm text-body">{f.text}</p>
                  </div>
                ))}
              </div>

              {/* Stack */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((s) => <span key={s} className="chip">{s}</span>)}
              </div>

              {/* Problem / Solution */}
              <div className="mt-7 grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">Problem</p>
                  <p className="mt-2 text-sm leading-relaxed text-body">{project.problem}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">Solution</p>
                  <p className="mt-2 text-sm leading-relaxed text-body">{project.solution}</p>
                </div>
              </div>

              {/* Proof media */}
              {(project.proofEmbed || project.proofVideo || project.proofImage) && (
                <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
                  {project.proofEmbed ? (
                    <iframe src={project.proofEmbed} style={{ aspectRatio: "16/9" }} className="w-full" allow="autoplay; fullscreen; encrypted-media; picture-in-picture" allowFullScreen />
                  ) : project.proofVideo ? (
                    <video src={project.proofVideo} autoPlay loop muted playsInline className="h-auto w-full object-cover" />
                  ) : (
                    <img src={project.proofImage} alt={`${project.title} dashboard`} className="h-auto w-full object-cover" loading="lazy" />
                  )}
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
