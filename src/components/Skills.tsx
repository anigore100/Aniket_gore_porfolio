import { motion } from "framer-motion";

const SKILLS = [
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "C++",
  "Node.js",
  "Express.js",
  "FastAPI",
  "REST APIs",
  "BullMQ",
  "Redis",
  "Cron Jobs",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "ChromaDB",
  "AWS (EC2, S3, SQS, SES, CloudFront)",
  "GCP",
  "Docker",
  "Nginx",
  "PM2",
  "CI/CD",
  "Ubuntu",
  "LangGraph",
  "RAG Pipelines",
  "OpenAI",
  "Azure OpenAI",
  "Vertex AI",
  "Vector DBs",
];

const Skills = () => (
  <section id="skills" className="py-4 sm:py-6">
    <div className="section-padding">
      <div className="mx-auto w-full max-w-2xl">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3, once: true }}
          className="text-2xl font-bold text-foreground sm:text-3xl"
        >
          Skills
        </motion.h2>

        <div className="mt-6 flex flex-wrap gap-2.5">
          {SKILLS.map((name, index) => (
            <motion.span
              key={name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3, once: true }}
              transition={{ duration: 0.3, delay: index * 0.015 }}
              className="chip px-4 py-2 text-sm"
            >
              {name}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
