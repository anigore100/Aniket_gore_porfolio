import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="pb-28 pt-4 sm:pb-32 sm:pt-6">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.35, once: true }}
          className="mx-auto w-full max-w-2xl text-center"
        >
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Let&apos;s build together</h2>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href="mailto:aniketgore2323@gmail.com" className="btn-primary">
              <Mail className="mr-2 h-4 w-4" />
              aniketgore2323@gmail.com
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            <a href="https://www.linkedin.com/in/aniket-gore-3681b4203/" target="_blank" rel="noopener noreferrer" className="contact-pill">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </motion.div>

        <p className="mt-6 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} Aniket Gore. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Contact;
