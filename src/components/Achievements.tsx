import { motion } from "framer-motion";
import { Award, BadgeCheck, Cloud } from "lucide-react";

const HIGHLIGHTS = [
  { icon: Award, title: "Stellar Award", value: "Q4 2025" },
  { icon: BadgeCheck, title: "Python Certification", value: "Udemy" },
  { icon: Cloud, title: "Google Cloud Fundamentals", value: "Coursera" },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-12 sm:py-14">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3, once: true }}
          className="glass-panel mx-auto w-full max-w-6xl p-6 sm:p-8"
        >
          <p className="eyebrow">Awards and Certifications</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">Recognized for ownership and delivery</h2>

          <div className="mt-8 grid gap-3 md:grid-cols-3">
            {HIGHLIGHTS.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.2, once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-2xl p-2"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/20 text-accent">
                  <item.icon className="h-5 w-5" />
                </div>
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">{item.title}</p>
                <p className="mt-2 text-lg font-semibold leading-snug text-foreground">{item.value}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
