import { motion } from "framer-motion";
import { Award, BriefcaseBusiness, Building2, Sparkles } from "lucide-react";

const EXPERIENCE = [
  {
    company: "Transerg LLP",
    role: "Software Engineer I",
    period: "Dec 2024 - Present",
    location: "Remote",
    award: "Stellar Engineer Award — Q4 2025",
    highlights: [
      "Built and scaled a web-based food image gallery to 400K+ images serving 10K daily users.",
      "Reduced manual content creation effort and cost by 90% by integrating AI APIs for personalized generation.",
      "Engineered automation workflows that handled 80% of sales-team tasks with cron-driven research and outreach via Gmail and LinkedIn.",
      "Optimized API response from 4 seconds to 300 milliseconds using parallel query execution, gzip, and caching.",
      "Designed RBAC + JWT/OAuth + rate limiting for stronger admin security and DDoS/scraping protection.",
    ],
    current: true,
  },
  {
    company: "Agivant Technologies",
    role: "Full Stack Software Engineer",
    period: "May 2024 - Nov 2024",
    location: "Pune",
    highlights: [
      "Engineered an MVP AI cloud application featuring a RAG-based text-to-SQL conversational agent.",
      "Designed and deployed AI solutions with Python, LLMs, RAG, Vector DBs, and BigQuery outputs.",
      "Contributed to a production e-commerce platform with React in rapid Agile sprints.",
    ],
  },
  {
    company: "MagicFlare Software Services",
    role: "Frontend Developer Intern",
    period: "Apr 2023 - Jun 2023",
    location: "Sambhajinagar",
    highlights: [
      "Developed collaborative frontend features in React with Spring Boot backend integration.",
      "Migrated a static website into a dynamic React application with improved maintainability.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-12 sm:py-14">
      <div className="section-padding">
        <div className="mx-auto w-full max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3, once: true }}
            className="mb-10"
          >
            <p className="eyebrow">Experience</p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Work History</h2>
          </motion.div>

          <div className="relative space-y-8 before:absolute before:bottom-0 before:left-4 before:top-1 before:w-px before:bg-gradient-to-b before:from-primary/70 before:to-primary/10 sm:before:left-5">
            {EXPERIENCE.map((item, index) => (
              <motion.article
                key={item.company}
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ amount: 0.2, once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="timeline-item"
              >
                <div className="timeline-dot">
                  {item.current ? <Sparkles className="h-4 w-4" /> : <Building2 className="h-4 w-4" />}
                </div>

                <div className="timeline-content">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <p className="text-lg font-semibold text-foreground">{item.company}</p>
                      <p className="inline-flex items-center gap-1 text-sm text-body">
                        <BriefcaseBusiness className="h-3.5 w-3.5" />
                        {item.role}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-muted-foreground">{item.period}</p>
                      <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{item.location}</p>
                    </div>
                  </div>

                  {item.award && (
                    <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">
                      <Award className="h-3 w-3" />
                      {item.award}
                    </p>
                  )}

                  <ul className="mt-4 space-y-2">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2.5 text-sm text-body">
                        <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
