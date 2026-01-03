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
    <section id="education" className="section-bg-primary py-16 sm:py-20">
      <div className="section-padding">
        <div className="section-container">
          <h2 className="section-title">Education</h2>
          <p className="mt-2 text-body">
            Academic background and qualifications
          </p>

          <div className="mt-10 space-y-6">
            {EDUCATION.map((edu) => (
              <div key={edu.institution} className="card-base card-hover">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <GraduationCap className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {edu.institution}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {edu.degree}
                        </p>
                        <p className="text-sm text-body">{edu.location}</p>
                      </div>
                      <div className="text-sm text-muted-foreground sm:text-right">
                        <p>{edu.period}</p>
                        {edu.cgpa && (
                          <p className="mt-1 font-medium text-foreground">
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
