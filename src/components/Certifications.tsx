import { motion } from "framer-motion";
import { BadgeCheck, ExternalLink } from "lucide-react";

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

const Certifications = () => {
  return (
    <section id="certifications" className="py-12 sm:py-14">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2, once: true }}
          className="glass-panel mx-auto w-full max-w-6xl p-6 sm:p-8"
        >
          <p className="eyebrow">Verified Credentials</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">Certifications</h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {CERTS.map((cert, index) => (
              <motion.a
                key={cert.href + index}
                href={cert.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.2, once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="group flex flex-col gap-4 rounded-2xl border border-border/50 bg-card/60 p-5 transition-colors hover:border-accent/50 hover:bg-card"
              >
                <div className="flex items-start justify-between">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/20 text-accent">
                    <BadgeCheck className="h-5 w-5" />
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">{cert.issuer}</p>
                  <p className="mt-1 text-lg font-semibold leading-snug text-foreground">{cert.title}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
