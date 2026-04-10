import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const EDUCATION = [
  {
    institute: "C-DAC, Mumbai",
    detail: "Diploma in Advanced Computing (PG-Diploma)",
    meta: "2023 - 2024",
  },
  {
    institute: "Computer Science and Engineering",
    detail: "B.Tech",
    meta: "2019 - 2023 • CGPA 7.9",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-12 sm:py-14">
      <div className="section-padding">
        <div className="mx-auto w-full max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3, once: true }}
            className="glass-panel p-6 sm:p-8"
          >
            <p className="eyebrow">Education</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">Strong fundamentals in systems and software engineering</h2>

            <div className="mt-8 grid gap-3 md:grid-cols-2">
              {EDUCATION.map((item) => (
                <article key={item.institute} className="rounded-2xl p-2">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-accent/20 text-accent">
                    <GraduationCap className="h-4 w-4" />
                  </div>
                  <p className="mt-3 text-base font-semibold text-foreground">{item.institute}</p>
                  <p className="mt-1 text-sm text-body">{item.detail}</p>
                  <p className="mt-2 text-xs font-medium uppercase tracking-[0.13em] text-muted-foreground">{item.meta}</p>
                </article>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
