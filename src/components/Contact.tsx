import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-bg-secondary py-5 sm:py-6">
      <div className="section-padding">
        <div className="section-container">
          <div className="overflow-hidden rounded-3xl border border-border bg-[linear-gradient(135deg,#EAF8FA_0%,#CDE8EC_48%,#B8E3E9_100%)] text-foreground">
            <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1.2fr_1fr] lg:p-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Contact</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight">Let&apos;s Build Something Great</h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-body sm:text-base">
                  Open to backend and full-stack opportunities, product collaborations, and AI-focused engineering work.
                </p>

                <a href="mailto:goreaniket100@gmail.com" className="mt-6 inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85">
                  <Send className="mr-2 h-4 w-4" />
                  Start a Conversation
                </a>
              </div>

              <div className="rounded-2xl border border-border bg-background/35 p-4">
                <div className="space-y-3 text-sm">
                  <a href="mailto:goreaniket100@gmail.com" className="flex items-center gap-3 rounded-xl border border-border bg-background/35 px-3 py-2 hover:border-accent/70">
                    <Mail className="h-4 w-4 text-primary" />
                    goreaniket100@gmail.com
                  </a>

                  <a href="tel:+919588428818" className="flex items-center gap-3 rounded-xl border border-border bg-background/35 px-3 py-2 hover:border-accent/70">
                    <Phone className="h-4 w-4 text-primary" />
                    +91-9588428818
                  </a>

                  <a
                    href="https://github.com/aniketgore100"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-border bg-background/35 px-3 py-2 hover:border-accent/70"
                  >
                    <Github className="h-4 w-4 text-primary" />
                    GitHub
                  </a>

                  <a
                    href="https://www.linkedin.com/in/aniket-gore-3681b4203/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-border bg-background/35 px-3 py-2 hover:border-accent/70"
                  >
                    <Linkedin className="h-4 w-4 text-primary" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-4 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} Aniket Gore. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
