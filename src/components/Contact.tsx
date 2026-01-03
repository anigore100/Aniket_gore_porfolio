import { Mail, Phone, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-bg-secondary py-16 sm:py-20">
      <div className="section-padding">
        <div className="section-container">
          <div className="text-center">
            <h2 className="section-title">Get In Touch</h2>
            <p className="mt-2 text-body">
              Open to opportunities and collaborations
            </p>

            <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-10">
              <a
                href="mailto:goreaniket100@gmail.com"
                className="flex items-center gap-3 text-body transition-colors hover:text-accent"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <span>goreaniket100@gmail.com</span>
              </a>

              <a
                href="tel:+919588428818"
                className="flex items-center gap-3 text-body transition-colors hover:text-accent"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <span>+91-9588428818</span>
              </a>

              <a
                href="https://github.com/aniketgore100"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-body transition-colors hover:text-accent"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <Github className="h-5 w-5 text-accent" />
                </div>
                <span>github.com/aniketgore100</span>
              </a>
            </div>

            <div className="mt-12 border-t border-border pt-8">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Aniket Gore. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
