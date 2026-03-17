import { Award, Code, Medal, Trophy } from "lucide-react";

const ACHIEVEMENTS = [
  {
    icon: Trophy,
    
    title: "TCS CodeVita Season 10",
    description: "AIR 715 in Round 1 and AIR 1225 in Round 2.",
  },
  {
    icon: Code,
    title: "600+ DSA Problems",
    description: "Solved across LeetCode, GeeksforGeeks, and CodeChef.",
  },
];

const CERTIFICATIONS = [
  {
    icon: Award,
    title: "Cloud Computing",
    description: "NPTEL",
  },
  {
    icon: Medal,
    title: "Google Cloud Fundamentals",
    description: "Coursera",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="section-bg-secondary py-4 sm:py-5">
      <div className="section-padding">
        <div className="section-container">
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="section-card">
              <h2 className="section-title">Achievements</h2>
              <p className="mt-1 text-sm text-body">Milestones that reflect consistency and problem-solving depth.</p>

              <div className="mt-4 space-y-3">
                {ACHIEVEMENTS.map((item) => (
                  <div key={item.title} className="uniform-panel rounded-2xl p-4">
                    <div className="flex items-start gap-3">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-accent/10">
                        <item.icon className="h-4 w-4 text-accent" />
                      </span>
                      <div>
                        <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                        <p className="mt-1 text-sm text-body">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="section-card">
              <h2 className="section-title">Certifications</h2>
              <p className="mt-1 text-sm text-body">Continuous upskilling in cloud and modern engineering practices.</p>

              <div className="mt-4 space-y-3">
                {CERTIFICATIONS.map((item) => (
                  <div key={item.title} className="uniform-panel rounded-2xl p-4">
                    <div className="flex items-start gap-3">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-accent/10">
                        <item.icon className="h-4 w-4 text-accent" />
                      </span>
                      <div>
                        <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                        <p className="mt-1 text-sm text-body">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
