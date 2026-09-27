import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-4 sm:py-6">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3, once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto w-full max-w-2xl"
        >
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">About</h2>
          <p className="mt-4 text-base leading-relaxed text-body">
            I work across engineering, product, and AI — translating business requirements and product vision into
            practical technical solutions, and turning ideas into reliable, production-ready features. I build
            full-stack applications with React, Node.js, JavaScript, and Python, along with RAG systems, CMS
            platforms, AI workflows, and LLM-powered applications, often taking a feature from concept to production
            within the same day.
          </p>
          <p className="mt-4 text-base leading-relaxed text-body">
            My current focus is going deeper into AI engineering — LLM application reliability, guardrails,
            evaluations, RAG, agentic workflows, and MCP — building systems that are not only capable, but predictable
            and useful in production. I also look for opportunities where AI can create meaningful leverage within
            products and businesses, whether through automation, intelligent workflows, better information retrieval,
            or entirely new product capabilities.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
