import { motion } from "framer-motion";
import { Bot, Cloud, Database, LayoutDashboard, ServerCog } from "lucide-react";

const SKILL_GROUPS = [
  {
    icon: LayoutDashboard,
    title: "Languages",
    depth: "JavaScript, Java, Python, C++",
  },
  {
    icon: ServerCog,
    title: "Backend",
    depth: "Node.js, Express.js, REST APIs, Spring Boot",
  },
  {
    icon: Database,
    title: "Database",
    depth: "MongoDB (NoSQL), SQL, Redis",
  },
  {
    icon: Cloud,
    title: "Cloud and Tools",
    depth: "AWS, Postman, Swagger, Git, Cursor",
  },
  {
    icon: Bot,
    title: "Other",
    depth: "System Design, Data Structures and Algorithms, AI Integration, Agentic AI",
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
            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">Core engineering depth</h2>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2">
            {SKILL_GROUPS.map((group, index) => (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.25, once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="skill-row"
              >
                <span className="value-icon">
                  <group.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{group.title}</h3>
                  <p className="mt-1 text-sm text-body sm:text-base">{group.depth}</p>
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
