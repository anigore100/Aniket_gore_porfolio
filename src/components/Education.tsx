import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-4 sm:py-6">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3, once: true }}
          className="mx-auto w-full max-w-2xl"
        >
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Education</h2>

          <div className="mt-6 flex items-start gap-3">
            <span className="glass-icon mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-foreground">
              <GraduationCap className="h-4 w-4" />
            </span>
            <div className="flex min-w-0 flex-1 flex-wrap items-start justify-between gap-2">
              <div>
                <p className="text-base font-semibold text-foreground">Computer Science and Engineering</p>
                <p className="text-sm text-body">B.Tech</p>
              </div>
              <p className="text-sm text-muted-foreground">2019 - 2023 • CGPA 7.9</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
