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
    <section id="skills" className="section-bg-secondary py-16 sm:py-20">
      <div className="section-padding">
        <div className="section-container">
          <h2 className="section-title">Skills</h2>
          <p className="mt-2 text-body">
            Technologies and tools I work with
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {Object.entries(SKILLS).map(([category, items]) => (
              <div key={category} className="card-base">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  {category}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span key={skill} className="skill-badge">
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
