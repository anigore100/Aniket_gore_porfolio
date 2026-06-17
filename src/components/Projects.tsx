import { motion } from "framer-motion";
import { BrainCircuit, FileText, Github, MessageSquare, ShieldCheck } from "lucide-react";

const PROJECTS = [
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
    stack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "FastAPI",
      "Python",
      "LangChain",
      "ChromaDB",
      "LLaMA 3.3 70B",
      "HuggingFace",
      "AWS S3",
      "AWS SQS",
    ],
    features: [
      { icon: FileText, text: "S3 upload → SQS event → async PDF ingestion" },
      { icon: BrainCircuit, text: "RAG Q&A with LLaMA 3.3 70B via Groq" },
      { icon: MessageSquare, text: "Chunk highlighting on live PDF viewer" },
      { icon: ShieldCheck, text: "RBAC + API key + signed URL security" },
    ],
    problem:
      "Finding specific information across large PDFs requires reading entire documents — slow and unscalable for multi-user organizations.",
    solution:
      "PDFs upload to S3, triggering an SQS message the FastAPI worker picks up for high-res chunking and embedding into ChromaDB. Queries retrieve section-aware chunks, feed them to the LLM, and return coordinate-mapped highlights for the React PDF viewer.",
    proofImage: "/image.png",
    githubUrl: "https://github.com/aniketgore100/Document_Intelligence_MERN_AI_RAG",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-12 sm:py-14">
      <div className="section-padding">
        <div className="mx-auto w-full max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3, once: true }}
            className="mb-10"
          >
            <p className="eyebrow">Projects</p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">What I've built</h2>
          </motion.div>

          <div className="space-y-5">
            {PROJECTS.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.2, once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="rounded-2xl border border-border/70 bg-card/35 p-5 sm:p-6"
              >
                {/* Header row */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-semibold text-foreground sm:text-2xl">{project.title}</h3>
                    <span className="chip">{project.period}</span>
                  </div>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </div>

                {/* Summary */}
                <p className="mt-4 text-sm leading-relaxed text-body sm:text-base">{project.summary}</p>

                {/* Outcomes */}
                <ul className="mt-5 space-y-2 rounded-xl border border-border/40 bg-secondary/20 p-4">
                  {project.outcomes.map((point) => (
                    <li key={point} className="flex gap-2.5 text-sm text-body">
                      <span className="mt-[3px] shrink-0 text-accent">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Features */}
                <div className="mt-5 grid gap-3 md:grid-cols-2">
                  {project.features.map((feature) => (
                    <div key={feature.text} className="value-row">
                      <span className="value-icon">
                        <feature.icon className="h-5 w-5" />
                      </span>
                      <p className="text-sm text-body sm:text-base">{feature.text}</p>
                    </div>
                  ))}
                </div>

                {/* Stack chips */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="chip">{item}</span>
                  ))}
                </div>

                {/* Problem / Solution */}
                <div className="mt-5 grid gap-5 md:grid-cols-2">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Problem</p>
                    <p className="mt-2 text-sm leading-relaxed text-body">{project.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Solution</p>
                    <p className="mt-2 text-sm leading-relaxed text-body">{project.solution}</p>
                  </div>
                </div>

                {/* Proof image */}
                <div className="mt-6 overflow-hidden rounded-2xl border border-border/70 bg-secondary/20">
                  <img
                    src={project.proofImage}
                    alt={`${project.title} dashboard`}
                    className="h-auto w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
