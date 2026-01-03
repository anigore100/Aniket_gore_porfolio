import { GraduationCap } from "lucide-react";

const EDUCATION = [
  {
    institution: "Centre for Development of Advanced Computing (C-DAC)",
    degree: "Diploma in Advanced Computing - PG-Diploma",
    location: "Mumbai",
    period: "2023 - 2024",
  },
  {
    institution: "Dr. Babasaheb Ambedkar Technological University",
    degree: "Computer Science & Engineering - B.Tech",
    location: "CSMSS Chh Shahu College of Engineering, Sambhajinagar",
    period: "2019 - 2023",
    cgpa: "7.9",
  },
];

const Education = () => {
  return (
    <section id="education" className="section-bg-primary py-8 sm:py-10">
      <div className="section-padding">
        <div className="section-container">
          <h2 className="text-xl font-bold tracking-tight text-foreground">Education</h2>
          <p className="mt-1 text-sm text-body">
            Academic background and qualifications
          </p>

          <div className="mt-5 space-y-3">
            {EDUCATION.map((edu) => (
              <div key={edu.institution} className="rounded-lg border border-border bg-card p-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <GraduationCap className="h-4 w-4 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col gap-0.5 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-sm font-semibold text-foreground">
                          {edu.institution}
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          {edu.degree}
                        </p>
                        <p className="text-xs text-body">{edu.location}</p>
                      </div>
                      <div className="text-xs text-muted-foreground sm:text-right">
                        <p>{edu.period}</p>
                        {edu.cgpa && (
                          <p className="font-medium text-foreground">
                            CGPA: {edu.cgpa}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
