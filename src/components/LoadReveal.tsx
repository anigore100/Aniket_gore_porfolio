import { motion } from "framer-motion";

const LoadReveal = () => (
  <motion.div
    aria-hidden="true"
    className="pointer-events-none fixed inset-0 z-[100] backdrop-blur-md"
    style={{
      background: `
        linear-gradient(
          180deg,
          hsl(var(--background) / 0.55) 0%,
          hsl(var(--background) / 0.30) 35%,
          hsl(var(--background) / 0.12) 70%,
          transparent 100%
        )
      `,
    }}
    initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
    animate={{ clipPath: "inset(100% 0% 0% 0%)" }}
    transition={{
      duration: 2,
      ease: [0.22, 1, 0.36, 1], // smoother ease-out
      delay: 0.4,
    }}
  />
);

export default LoadReveal;