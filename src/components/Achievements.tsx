import { Trophy, Code } from "lucide-react";

const ACHIEVEMENTS = [
  {
    icon: Trophy,
    title: "TCS CodeVita Season 10",
    description: "AIR 715 in Round 1 & AIR 1225 in Round 2",
  },
  {
    icon: Code,
    title: "600+ DSA Problems Solved",
    description: "On GeeksforGeeks, CodeChef, and LeetCode",
  },
];

const CERTIFICATIONS = [
  "Cloud Computing - NPTEL",
  "Google Cloud Fundamentals - Coursera",
];

const Achievements = () => {
  return (
    <section id="achievements" className="section-bg-secondary py-8 sm:py-10">
      <div className="section-padding">
        <div className="section-container">
          <h2 className="text-xl font-bold tracking-tight text-foreground">Achievements</h2>
          <p className="mt-1 text-sm text-body">
            Notable accomplishments and certifications
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {ACHIEVEMENTS.map((achievement) => (
              <div key={achievement.title} className="rounded-lg border border-border bg-card p-3">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <achievement.icon className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">
                      {achievement.title}
                    </h3>
                    <p className="mt-0.5 text-xs text-body">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-5">
            <h3 className="text-base font-semibold text-foreground">
              Courses & Certifications
            </h3>
            <ul className="mt-2 space-y-1.5">
              {CERTIFICATIONS.map((cert) => (
                <li key={cert} className="flex items-center gap-2 text-sm text-body">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
