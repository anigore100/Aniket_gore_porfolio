import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import profileImage from "@/assets/DP.jpeg";

const ROTATING_ROLES = [
  "Backend and RAG Engineer",
  "Founding Product Engineer",
  "Full Stack Software Engineer",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROTATING_ROLES.length);
    }, 2300);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="home" className="pt-16 pb-4 sm:pt-20 sm:pb-6">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mx-auto w-full max-w-2xl"
        >
          <div className="flex items-start justify-between gap-6">
            <div>
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl">
                Hi, I&apos;m <span className="gradient-text">Aniket</span>
              </h1>
              <p className="mt-2 text-base text-muted-foreground sm:text-lg">
                {ROTATING_ROLES[roleIndex]}
                <span className="typing-cursor" aria-hidden="true" />
              </p>
            </div>
            <div className="glass-icon h-16 w-16 shrink-0 rounded-full sm:h-20 sm:w-20">
              <img
                src={profileImage}
                alt="Aniket Gore"
                className="h-full w-full object-cover"
                style={{ transform: "scale(2.6)", transformOrigin: "45% 32%" }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
