import { Code2, Database, Monitor, Server, Wrench } from "lucide-react";

const SKILLS = {
  Backend: ["Python", "Node.js", "REST APIs", "Flask", "Express.js", "RBAC", "Authentication"],
  Frontend: ["React.js", "Next.js", "Redux Toolkit", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
  "AI / Automation": ["LLMs", "RAG", "API Integration", "AI Workflows", "Prompt Workflows", "Agentic Automation"],
  "Cloud & DevOps": ["Docker", "AWS"],
  Data: ["MongoDB", "MySQL", "BigQuery"],
  Tools: ["Git", "GitHub", "Postman", "Jira"],
};

const ICONS = {
  Backend: Server,
  Frontend: Monitor,
  "AI / Automation": Code2,
  "Cloud & DevOps": Wrench,
  Data: Database,
  Tools: Wrench,
};

const Skills = () => {
  return (
    <section id="skills" className="section-bg-secondary py-4 sm:py-5">
      <div className="section-padding">
        <div className="section-container">
          <div className="section-card">
            <h2 className="section-title">Skills Stack</h2>
            <p className="mt-1 text-sm text-body">Tech I use to design, build, and ship end-to-end products.</p>

            <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {Object.entries(SKILLS).map(([category, items]) => {
                const Icon = ICONS[category as keyof typeof ICONS];

                return (
                  <article key={category} className="uniform-panel rounded-2xl p-4">
                    <div className="mb-3 flex items-center gap-2">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-accent/10">
                        <Icon className="h-4 w-4 text-accent" />
                      </span>
                      <h3 className="text-sm font-semibold text-foreground">{category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <span key={skill} className="chip">
                          {skill}
                        </span>
                      ))}
                    </div>
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

export default Skills;
