import { motion } from "framer-motion";
import { BarChart3, BrainCircuit, Database, Github, ShieldCheck } from "lucide-react";

const PROJECTS = [
  {
    title: "RAG SQL FastAPI (MVP)",
    period: "2026",
    summary:
      "Built an MVP that converts natural-language business questions into safe PostgreSQL queries using a metadata-aware RAG pipeline, then returns tabular results and chart-ready outputs.",
    problem:
      "Business users needed SQL insights quickly, but writing correct joins/filters/aggregations manually was slow and error-prone.",
    solution:
      "Chunked schema + relationship + glossary metadata, indexed with Chroma embeddings, retrieved contextual docs per question, generated SQL via LLM, sanitized queries, executed on Postgres, and generated visual output.",
    stack: [
      "Python",
      "FastAPI",
      "LangChain",
      "ChromaDB",
      "Anthropic Claude",
      "HuggingFace Embeddings",
      "PostgreSQL",
      "SQLAlchemy",
      "Pandas",
      "Matplotlib",
    ],
    proofImage: "/image.png",
    githubUrl: "https://github.com/aniketgore100/RAG_AI_Conversational_DataAnalyst",
    outcomes: [
      "Natural language -> SQL -> result flow for analytics questions.",
      "Security guardrails: SELECT-only checks, row limits, statement timeouts.",
      "Automatic chart generation when result schema is visualization-compatible.",
    ],
    features: [
      { icon: BrainCircuit, text: "Metadata-aware RAG retrieval" },
      { icon: Database, text: "SQL execution against PostgreSQL" },
      { icon: ShieldCheck, text: "Query safety and API hardening" },
      { icon: BarChart3, text: "Tabular + visual response output" },
    ],
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
            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">Applied RAG and AI systems with measurable engineering value</h2>
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
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-xl font-semibold text-foreground sm:text-2xl">{project.title}</h3>
                  <span className="chip">{project.period}</span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-body sm:text-base">{project.summary}</p>

                <div className="mt-5 grid gap-5 md:grid-cols-2">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">Problem</p>
                    <p className="mt-2 text-sm leading-relaxed text-body sm:text-base">{project.problem}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">Solution</p>
                    <p className="mt-2 text-sm leading-relaxed text-body sm:text-base">{project.solution}</p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {project.features.map((feature) => (
                    <div key={feature.text} className="value-row">
                      <span className="value-icon">
                        <feature.icon className="h-5 w-5" />
                      </span>
                      <p className="text-sm text-body sm:text-base">{feature.text}</p>
                    </div>
                  ))}
                </div>



                <div className="mt-6 overflow-hidden rounded-2xl border border-border/70 bg-secondary/20">
                  <img
                    src={project.proofImage}
                    alt={`${project.title} dashboard proof`}
                    className="h-auto w-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View GitHub
                  </a>
                </div>

                <ul className="mt-6 space-y-2">
                  {project.outcomes.map((point) => (
                    <li key={point} className="impact-bullet">
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
