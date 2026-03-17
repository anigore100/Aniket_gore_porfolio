import { GraduationCap, Landmark } from "lucide-react";

const EDUCATION = [
  {
    institution: "Centre for Development of Advanced Computing (C-DAC)",
    degree: "Diploma in Advanced Computing (PG-DAC)",
    location: "Mumbai",
    period: "2023 - 2024",
  },
  {
    institution: "Dr. Babasaheb Ambedkar Technological University",
    degree: "B.Tech in Computer Science and Engineering",
    location: "CSMSS Chh. Shahu College of Engineering, Sambhajinagar",
    period: "2019 - 2023",
    cgpa: "7.9",
  },
];

const Education = () => {
  return (
    <section id="education" className="section-bg-primary py-4 sm:py-5">
      <div className="section-padding">
        <div className="section-container">
          <div className="section-card">
            <h2 className="section-title">Education</h2>
            <p className="mt-1 text-sm text-body">Academic foundation and formal training behind my engineering work.</p>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {EDUCATION.map((edu) => (
                <article key={edu.institution} className="uniform-panel rounded-2xl p-4">
                  <div className="mb-3 flex items-center gap-2 text-muted-foreground">
                    <Landmark className="h-4 w-4" />
                    <span className="text-xs font-semibold uppercase tracking-wide">{edu.period}</span>
                  </div>

                  <h3 className="text-base font-semibold text-foreground">{edu.institution}</h3>
                  <p className="mt-1 text-sm font-medium text-body">{edu.degree}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{edu.location}</p>

                  {edu.cgpa && (
                    <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-background/35 px-3 py-1 text-xs font-semibold text-foreground">
                      <GraduationCap className="h-3.5 w-3.5" />
                      CGPA {edu.cgpa}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
