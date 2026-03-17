import { Briefcase, Building2, Sparkles } from "lucide-react";

const EXPERIENCES = [
  {
    company: "Transerg LLP",
    role: "Software Engineer I",
    period: "Dec 2024 - Present",
    bullets: [
      "Built and deployed Next.js full-stack platforms integrating scalable UI and API layers for document, user, and campaign management.",
      "Designed and implemented a secure, reusable RBAC system for user permissions, document visibility, and workflow automation.",
      "Developed AI-driven outreach automation using Gmail and LinkedIn APIs with LLM-powered behavior analysis.",
      "Improved performance with pagination, caching, and MongoDB indexing for better stability under concurrent loads.",
    ],
  },
  {
    company: "Agivant Technologies",
    role: "Full Stack Software Engineer",
    period: "May 2024 - Nov 2024",
    bullets: [
      "Engineered full-stack cloud applications with AI-driven features including RAG-based Text-to-SQL assistant workflows.",
      "Developed conversational data agents that translated natural language into SQL and returned summarized business insights.",
      "Worked with Python, Google Cloud, Docker, Streamlit, and BigQuery across delivery lifecycles.",
    ],
  },
  {
    company: "MagicFlare Software Services",
    role: "Frontend Developer Intern",
    period: "Apr 2023 - Jun 2023",
    isInternship: true,
    bullets: [
      "Built frontend features using React.js with REST APIs integrated from Spring Boot services.",
      "Migrated a static website into a dynamic React application.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-bg-primary py-4 sm:py-5">
      <div className="section-padding">
        <div className="section-container">
          <div className="section-card">
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-2 inline-flex items-center gap-2 rounded-full border border-border bg-background/35 px-3 py-1 text-xs font-semibold text-muted-foreground">
                  <Briefcase className="h-3.5 w-3.5" />
                  Experience
                </p>
                <h2 className="section-title">Professional Journey</h2>
                <p className="mt-1 text-sm text-body">Hands-on work across full-stack products and applied AI solutions.</p>
              </div>
            </div>

            <div className="space-y-4">
              {EXPERIENCES.map((exp) => {
                const isCurrent = exp.period.includes("Present");

                return (
                  <article key={exp.company} className="uniform-panel rounded-2xl p-4 sm:p-5">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          {isCurrent ? (
                            <span className="chip border-border bg-background/35 px-4 py-1.5 text-sm font-semibold text-foreground">
                              {exp.company}
                            </span>
                          ) : (
                            <h3 className="text-lg font-semibold text-foreground">{exp.company}</h3>
                          )}
                          {isCurrent && (
                            <span className="chip border-primary/40 bg-primary/15 text-primary">
                              <Sparkles className="h-3.5 w-3.5" />
                              Current Role
                            </span>
                          )}
                          {exp.isInternship && (
                            <span className="chip">
                              <Building2 className="h-3.5 w-3.5" />
                              Internship
                            </span>
                          )}
                        </div>
                        <p className="text-sm font-medium text-muted-foreground">{exp.role}</p>
                      </div>

                      <p className="text-sm font-medium text-muted-foreground">{exp.period}</p>
                    </div>

                    <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                      {exp.bullets.map((bullet) => (
                        <li key={bullet} className="rounded-xl border border-border bg-background/35 px-3 py-2 text-sm text-body">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
