import { motion } from "framer-motion";
import { Bot, Cloud, Database, LayoutDashboard, ServerCog } from "lucide-react";

const SKILL_GROUPS = [
  { icon: LayoutDashboard, title: "Languages",    skills: ["JavaScript", "TypeScript", "Python", "Java", "C++"] },
  { icon: ServerCog,       title: "Backend",      skills: ["Node.js", "Express.js", "Fastify", "FastAPI", "REST APIs", "BullMQ", "Redis", "Cron Jobs"] },
  { icon: Database,        title: "Databases",    skills: ["MongoDB", "PostgreSQL", "MySQL", "ChromaDB", "Redis"] },
  { icon: Cloud,           title: "Cloud & Infra",skills: ["AWS (EC2, S3, SQS, SES, CloudFront)", "GCP", "Docker", "Nginx", "PM2", "CI/CD", "Ubuntu"] },
  { icon: Bot,             title: "AI & ML",      skills: ["LangChain", "RAG Pipelines", "OpenAI", "Azure OpenAI", "Vertex AI", "Vector DBs", "Re-rankers"] },
];

const Skills = () => (
  <section id="skills" className="py-12 sm:py-14">
    <div className="section-padding">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3, once: true }}
          className="mb-12"
        >
          <p className="eyebrow">Skills</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Tech Stack</h2>
        </motion.div>

        <div className="space-y-0">
          {SKILL_GROUPS.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.25, once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="flex items-start gap-5 border-b border-white/[0.07] py-6 last:border-0"
            >
              <span className="value-icon mt-0.5 shrink-0">
                <group.icon className="h-5 w-5" />
              </span>
              <div className="flex-1">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">{group.title}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="chip">{skill}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
