const SKILLS = {
  "Programming Languages": ["JavaScript", "C++", "Java", "Python"],
  Frontend: ["React.js", "Next.js", "Redux Toolkit", "HTML5", "CSS3", "Tailwind CSS"],
  Backend: ["Node.js", "Express.js"],
  Databases: ["MongoDB", "MySQL"],
  Testing: ["Postman"],
  Tools: ["Jira", "Asana", "Docker", "Git", "GitHub"],
  Interests: ["DSA", "CI/CD", "DevOps", "Agentic AI"],
};

const Skills = () => {
  return (
    <section id="skills" className="section-bg-secondary py-8 sm:py-10">
      <div className="section-padding">
        <div className="section-container">
          <h2 className="text-xl font-bold tracking-tight text-foreground">Skills</h2>
          <p className="mt-1 text-sm text-body">
            Technologies and tools I work with
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {Object.entries(SKILLS).map(([category, items]) => (
              <div key={category} className="rounded-lg border border-border bg-card p-4">
                <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {category}
                </h3>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {items.map((skill) => (
                    <span key={skill} className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
