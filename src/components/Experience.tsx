import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import transergLogo from "@/assets/transergLogo.png";
import agivantLogo from "@/assets/agivantLogo.png";

const FOCUS_ITEMS = [
  "Mastering System Design",
  "Solving DSA Daily",
  "Building AI Agents & Full Stack Systems",
  "Exploring AI Orchestration",
];

type ExperienceItem = {
  company: string;
  period: string;
  logo: string;
  highlights: string[];
};

const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Transeg LLP",
    period: "Dec 2024 – Jun 2026",
    logo: transergLogo,
    highlights: [
      "Built and scaled Petpooja Studio for Petpooja POS, an AI-powered stock image platform serving 10K+ daily active users and managing 400K+ media assets.",
      "Founding AI Engineer, owning end-to-end product architecture and delivery from concept to production.",
      "Improved application speed by up to 90% by optimizing APIs, applying Gumlet caching, and optimizing DB calls.",
      "Shipped 20+ AI/LLM features and 100+ production APIs across multiple AI-powered SaaS products.",
      "Architected an end-to-end RAG pipeline for a sales automation platform, automating 80% of lead inquiries across Gmail and LinkedIn while setting up guardrails for security and quality responses.",
      "Developed AI-powered collaborative features for a Germany-based Document Intelligence platform.",
    ],
  },
  {
    company: "Agivant Technologies",
    period: "May 2024 – Nov 2024",
    logo: agivantLogo,
    highlights: [
      "Built an end-to-end Conversational BI Agent that converts natural language into SQL queries and interactive data visualizations.",
      "Billable Full-Stack Cloud Developer for an international e-commerce client, delivering production-grade cloud applications.",
    ],
  },
];

const HIGHLIGHT_KEYWORDS = [
  "Petpooja Studio",
  "Petpooja POS",
  "10K+",
  "400K+",
  "up to 90%",
  "Gumlet caching",
  "20+",
  "100+",
  "80%",
  "RAG pipeline",
  "guardrails",
  "Conversational BI Agent",
  "Billable",
  "international e-commerce",
  "AI-powered",
  "Founding AI Engineer",
];

const HIGHLIGHT_PATTERN = new RegExp(
  `(${HIGHLIGHT_KEYWORDS.map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
  "g"
);

const renderHighlight = (text: string) =>
  text.split(HIGHLIGHT_PATTERN).map((part, i) =>
    HIGHLIGHT_KEYWORDS.includes(part) ? (
      <span key={i} className="gradient-text font-semibold">
        {part}
      </span>
    ) : (
      <span key={i}>{part}</span>
    )
  );

const Experience = () => {
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const [focusIndex, setFocusIndex] = useState(0);

  const toggle = (company: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(company)) next.delete(company);
      else next.add(company);
      return next;
    });
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      setFocusIndex((prev) => (prev + 1) % FOCUS_ITEMS.length);
    }, 2600);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="experience" className="py-4 sm:py-6">
      <div className="section-padding">
        <div className="mx-auto w-full max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3, once: true }}
            className="text-2xl font-bold text-foreground sm:text-3xl"
          >
            Work Experience
          </motion.h2>

          <div className="mt-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3, once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center gap-3">
                <span className="glass-icon inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                </span>
                <div className="flex min-w-0 flex-1 flex-wrap items-center justify-between gap-2">
                  <p className="text-base font-semibold text-foreground">Currently Upskilling</p>
                  <p className="chip text-muted-foreground">
                    Open to Backend • Full-Stack • AI Engineer Opportunities
                  </p>
                </div>
              </div>

              <div className="pl-12">
                <div className="mt-1">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={FOCUS_ITEMS[focusIndex]}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="text-sm text-muted-foreground"
                    >
                      {FOCUS_ITEMS[focusIndex]}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {EXPERIENCE.map((item, index) => {
              const isOpen = expanded.has(item.company);
              return (
                <motion.div
                  key={item.company}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ amount: 0.3, once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                >
                  <div className="flex items-center gap-3">
                    <span className="glass-icon inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full">
                      <img src={item.logo} alt={`${item.company} logo`} className="h-full w-full object-cover" />
                    </span>
                    <div className="flex min-w-0 flex-1 flex-wrap items-center justify-between gap-2">
                      <p className="text-base font-semibold text-foreground">{item.company}</p>
                      <p className="text-sm text-muted-foreground">{item.period}</p>
                    </div>
                  </div>

                  {item.highlights.length > 0 && (
                    <div className="pl-12">
                      <button
                        type="button"
                        onClick={() => toggle(item.company)}
                        className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
                      >
                        {isOpen ? "Hide details" : "Show details"}
                        <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")} />
                      </button>

                      {isOpen && (
                        <ul className="mt-3 list-disc space-y-3 pl-5 marker:text-muted-foreground">
                          {item.highlights.map((h) => (
                            <li key={h} className="text-sm leading-relaxed text-body">
                              {renderHighlight(h)}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
