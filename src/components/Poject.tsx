import { Activity, BarChart3, CalendarClock, Database, ShieldCheck, UserRoundCheck } from "lucide-react";

type ProjectProps = {
  onOpenLiveProject?: () => void;
};

const LMS_HIGHLIGHTS = [
  {
    icon: UserRoundCheck,
    title: "Member + Seat Lifecycle",
    description:
      "Manages admissions, status changes, seat assignment/release, and prevents invalid seat operations.",
  },
  {
    icon: CalendarClock,
    title: "Automated Monthly Payments",
    description:
      "Tracks due vs paid records, marks payments, and auto-calculates next due dates from admission.",
  },
  {
    icon: BarChart3,
    title: "Operational Dashboards",
    description:
      "Surfaces occupancy, due counts, active/closed members, monthly revenue trend, and growth insights.",
  },
  {
    icon: Database,
    title: "Bulk + Reliable Data Ops",
    description:
      "Supports CSV preview/import onboarding and normalized persistence with MongoDB + modular services.",
  },
  {
    icon: Activity,
    title: "Scheduled Reminders",
    description:
      "Daily cron jobs trigger payment reminders for upcoming dues to reduce manual follow-up overhead.",
  },
  {
    icon: ShieldCheck,
    title: "Production Security Stack",
    description:
      "JWT auth, protected routes, rate limiting, validation, and security middleware with clean API error handling.",
  },
];

const TECH_STACK = [
  "React 18",
  "Vite",
  "Redux Toolkit",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "MongoDB",
  "JWT",
  "Mongoose",
  "Nodemailer",
  "PDFKit",
  "Node-Cron",
];

const Project = ({ onOpenLiveProject }: ProjectProps) => {
  return (
    <section id="project" className="section-bg-secondary py-6 sm:py-8">
      <div className="section-padding">
        <div className="section-container">
          <div className="section-card">
            <div className="grid gap-5 lg:grid-cols-[1.2fr_1fr]">
              <div className="rounded-2xl border border-border bg-[linear-gradient(135deg,#EAF8FA_0%,#CDE8EC_48%,#B8E3E9_100%)] p-6 text-foreground">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Recent Project</p>
                <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Library Management System (LMS)</h2>
                <p className="mt-3 text-sm leading-relaxed text-body sm:text-base">
                  A full-stack paid-library operations platform that centralizes seat inventory, member lifecycle, monthly fee tracking, and admin analytics in one system.
                </p>
                <button
                  type="button"
                  onClick={onOpenLiveProject}
                  className="mt-5 inline-flex items-center rounded-full border border-border bg-background/40 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary/30"
                >
                  Open Live Project
                </button>
              </div>

              <div className="uniform-panel rounded-2xl p-5">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Problem Solved</h3>
                <p className="mt-2 text-base font-medium text-foreground">
                  Replaced manual notebooks/spreadsheets with reliable digital operations for seats, dues, and payment confirmations.
                </p>
                <div className="mt-4 grid gap-2">
                  <span className="chip">Seat occupancy visibility</span>
                  <span className="chip">Due and paid tracking</span>
                  <span className="chip">Revenue + growth trends</span>
                  <span className="chip">Reminder automation</span>
                </div>
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {LMS_HIGHLIGHTS.map((feature) => (
                <div key={feature.title} className="uniform-panel rounded-2xl p-4">
                  <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-accent/10">
                    <feature.icon className="h-4 w-4 text-accent" />
                  </div>
                  <h4 className="text-sm font-semibold text-foreground">{feature.title}</h4>
                  <p className="mt-1 text-sm text-body">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="uniform-panel mt-5 rounded-2xl p-4">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Stack Snapshot</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {TECH_STACK.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>
              <button
                type="button"
                onClick={onOpenLiveProject}
                className="mt-4 inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85"
              >
                View Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
