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
    <section id="achievements" className="section-bg-secondary py-16 sm:py-20">
      <div className="section-padding">
        <div className="section-container">
          <h2 className="section-title">Achievements</h2>
          <p className="mt-2 text-body">
            Notable accomplishments and certifications
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {ACHIEVEMENTS.map((achievement) => (
              <div key={achievement.title} className="card-base card-hover">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <achievement.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {achievement.title}
                    </h3>
                    <p className="mt-1 text-sm text-body">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold text-foreground">
              Courses & Certifications
            </h3>
            <ul className="mt-4 space-y-2">
              {CERTIFICATIONS.map((cert) => (
                <li key={cert} className="flex items-center gap-3 text-body">
                  <span className="h-2 w-2 rounded-full bg-accent" />
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
