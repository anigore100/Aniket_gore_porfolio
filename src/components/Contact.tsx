import { motion } from "framer-motion";
import { Linkedin, Mail, Phone, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="pb-12 pt-10 sm:pb-14 sm:pt-12">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.35, once: true }}
          className="mx-auto w-full max-w-6xl p-2 text-center sm:p-4"
        >
          <p className="eyebrow">Contact</p>
          <h2 className="mt-3 mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">Let&apos;s build something impactful.</h2>
          <p className="mt-4 mx-auto max-w-2xl text-sm text-body sm:text-base">
            Open to backend engineering and full-stack opportunities where reliability, speed, and AI-assisted execution matter.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href="mailto:aniketgore23230@gmail.com" className="btn-primary">
              <Send className="mr-2 h-4 w-4" />
              Contact Me
            </a>
            <a href="tel:+919588428818" className="btn-secondary">
              <Phone className="mr-2 h-4 w-4" />
              +91 9588428818
            </a>
            <a href="mailto:aniketgore23230@gmail.com" className="btn-secondary">
              <Mail className="mr-2 h-4 w-4" />
              aniketgore23230@gmail.com
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
