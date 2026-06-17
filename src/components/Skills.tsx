import { motion } from "framer-motion";
import { Bot, Cloud, Database, LayoutDashboard, ServerCog } from "lucide-react";

const SKILL_GROUPS = [
  {
    icon: LayoutDashboard,
    title: "Languages",
    skills: ["JavaScript", "Java", "Python", "C++"],
  },
  {
    icon: ServerCog,
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "Spring Boot"],
  },
  {
    icon: Database,
    title: "Database",
    skills: ["MongoDB", "SQL", "Redis"],
  },
  {
    icon: Cloud,
    title: "Cloud & Tools",
    skills: ["AWS", "Postman", "Swagger", "Git", "Cursor"],
  },
  {
    icon: Bot,
    title: "AI & Systems",
    skills: ["System Design", "RAG", "DSA", "AI Integration", "Agentic AI"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-12 sm:py-14">
      <div className="section-padding">
        <div className="mx-auto w-full max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3, once: true }}
            className="mb-10"
          >
            <p className="eyebrow">Skills</p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Tech Stack</h2>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2">
            {SKILL_GROUPS.map((group, index) => (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.25, once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="flex gap-4 rounded-2xl border border-border/50 bg-card/30 p-4"
              >
                <span className="value-icon shrink-0">
                  <group.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-foreground">{group.title}</h3>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => (
                      <span key={skill} className="chip">{skill}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
