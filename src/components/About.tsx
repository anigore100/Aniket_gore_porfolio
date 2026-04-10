import { motion } from "framer-motion";
import { Layers, Rocket, Target } from "lucide-react";

const VALUE_POINTS = [
  {
    icon: Target,
    title: "What I solve",
    description:
      "I solve slow, fragile backend systems and manual operations by architecting reliable APIs, secure access layers, and automation-first workflows.",
  },
  {
    icon: Layers,
    title: "What I build",
    description:
      "Node.js/Express backend architectures, worker-thread + background job pipelines, RBAC modules, and AWS-powered delivery stacks (CloudFront, SES, S3).",
  },
  {
    icon: Rocket,
    title: "Impact I create",
    description:
      "Delivered 4s to 300ms API improvements, automated 80% of sales tasks, reduced manual content effort by 90%, and improved team delivery speed by 30%.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-14">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3, once: true }}
          transition={{ duration: 0.55 }}
          className="glass-panel mx-auto w-full max-w-6xl p-6 sm:p-8"
        >
          <p className="eyebrow">Summary</p>
          <h2 className="mt-3 max-w-4xl text-3xl font-bold leading-tight sm:text-4xl">
            Backend engineer focused on architecture, execution, and delivery.
          </h2>
          <p className="mt-4 max-w-4xl text-base leading-relaxed text-body">
            I build optimized APIs and backend systems with Node.js, Express.js, and MongoDB, and design AI-driven automation
            to reduce manual overheads. I also work with AWS infrastructure and production-grade security patterns.
          </p>

          <div className="mt-8 grid gap-6 pt-2 md:grid-cols-3">
            {VALUE_POINTS.map((point, index) => (
              <motion.article
                key={point.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.3, once: true }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className="rounded-xl bg-transparent p-1"
              >
                <span className="value-icon">
                  <point.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-3 text-lg font-semibold text-foreground">{point.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-body sm:text-base">{point.description}</p>
              </motion.article>
            ))}
          </div>

          <div className="mt-6 pt-3">
            <p className="text-sm font-medium text-foreground">Core stack</p>
            <p className="mt-2 text-sm text-body">
              Node.js, Express.js, MongoDB, AWS, Worker Threads, JWT, OAuth, Rate Limiting, LLM integrations, and automation pipelines.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
