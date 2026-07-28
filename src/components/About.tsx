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
            I&apos;m a Full Stack Developer building products at the intersection of AI and the web. I&apos;ve been working
            as a Full Stack Developer since 2024, architecting backend systems, APIs, and automation-first platforms. I also
            have hands-on experience in AI Engineering, specifically building RAG-based full-stack applications that pair
            retrieval pipelines with production-grade web apps. I care about shipping fast and building things that matter.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
