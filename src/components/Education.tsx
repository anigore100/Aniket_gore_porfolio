import { motion } from "framer-motion";
import { BadgeCheck, ExternalLink, GraduationCap } from "lucide-react";

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

const CERTS = [
  {
    title: "Problem Solving (Basic)",
    issuer: "HackerRank",
    href: "https://www.hackerrank.com/certificates/ff44c188d66b",
  },
  {
    title: "Python (Basic)",
    issuer: "HackerRank",
    href: "https://www.hackerrank.com/certificates/7a4327ba82ed",
  },
  {
    title: "Problem Solving (Intermediate)",
    issuer: "HackerRank",
    href: "https://www.hackerrank.com/certificates/ff44c188d66b",
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
            <p className="eyebrow">Education & Credentials</p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Education</h2>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {EDUCATION.map((item) => (
                <article key={item.institute} className="rounded-2xl border border-border/40 bg-card/30 p-4">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-accent/20 text-accent">
                    <GraduationCap className="h-4 w-4" />
                  </div>
                  <p className="mt-3 text-base font-semibold text-foreground">{item.institute}</p>
                  <p className="mt-1 text-sm text-body">{item.detail}</p>
                  <p className="mt-2 text-xs font-medium uppercase tracking-[0.13em] text-muted-foreground">{item.meta}</p>
                </article>
              ))}
            </div>

            <div className="mt-8 border-t border-border/40 pt-6">
              <p className="eyebrow">Verified Credentials</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {CERTS.map((cert, index) => (
                  <motion.a
                    key={cert.href + index}
                    href={cert.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.2, once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="group flex items-start justify-between gap-3 rounded-xl border border-border/50 bg-card/60 p-4 transition-colors hover:border-accent/50 hover:bg-card"
                  >
                    <div className="flex items-start gap-3">
                      <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/20 text-accent">
                        <BadgeCheck className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">{cert.issuer}</p>
                        <p className="mt-0.5 text-sm font-semibold leading-snug text-foreground">{cert.title}</p>
                      </div>
                    </div>
                    <ExternalLink className="h-3.5 w-3.5 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
