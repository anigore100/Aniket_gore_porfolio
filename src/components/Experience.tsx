const EXPERIENCES = [
  {
    company: "Transerg LLP",
    role: "Software Engineer I",
    period: "Dec 2024 - Present",
    bullets: [
      "Built and deployed Next.js full-stack platforms integrating scalable UI and API layers for document, user, and campaign management, improving operational efficiency by ~40% through unified workflows.",
      "Designed and implemented a secure, reusable Role-Based Access Control (RBAC) system to handle user permissions, document visibility, and workflow automation across multiple user roles.",
      "Developed AI-driven automation features, including personalized email and LinkedIn outreach using Gmail and LinkedIn APIs with LLM-powered behavior analysis, reducing manual sales effort by 80% and increasing outreach capacity by 10× compared to traditional manual processes.",
      "Built interactive collaboration modules such as threaded comments, user mentions, and customized email notifications that enhanced team communication and traceability.",
      "Built analytic dashboards in React.js and RESTful APIs in Node.js to monitor campaign metrics such as delivery, engagement, and workflow statuses, enhancing data-driven decision-making through real-time performance visibility.",
      "Enhanced scalability and performance through efficient pagination, caching, and MongoDB indexing, boosting application speed and ensuring high stability under concurrent user loads.",
    ],
  },
  {
    company: "Agivant Technologies",
    role: "Full Stack Software Engineer",
    period: "May 2024 - Nov 2024",
    bullets: [
      "Engineered full-stack cloud applications with integrated AI-driven features, including a Retrieval Augmented Generation (RAG)-based Text-to-SQL Conversational AI Agent, reducing the effort required for data and business analysis by enabling insights without deep technical knowledge.",
      "Developed a conversational data agent that translates natural language queries into SQL and generates summarized insights, tables, and charts tailored to business-specific terminology, eliminating the need for manually built dashboards and significantly reducing time and cost in decision-making processes.",
      "Utilized Python, RAG, LLM, Google Cloud, Generative AI, Gemini Pro, Vector DB, BigQuery, Docker, and Streamlit to develop and deploy the solutions on Google Cloud.",
      "Contributed to an e-commerce project within an agile framework using tools like Asana, delivering daily tasks and implementing features based on clients' requirements with React.js and WordPress.",
    ],
  },
  {
    company: "MagicFlare Software Services",
    role: "Frontend Developer Intern",
    period: "April 2023 - June 2023",
    isInternship: true,
    bullets: [
      "Developed new features and enhancements for the application using React.js and Spring Boot. Implemented REST APIs to connect the application to the backend services including MySQL Database.",
      "Assisted in the migration of a static site to a dynamic React application, improving site scalability and maintainability while learning best practices in component-based architecture.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-bg-primary py-16 sm:py-20">
      <div className="section-padding">
        <div className="section-container">
          <h2 className="section-title">Work Experience</h2>
          <p className="mt-2 text-body">
            Professional journey and contributions
          </p>

          <div className="mt-10 space-y-8">
            {EXPERIENCES.map((exp, index) => (
              <div
                key={exp.company}
                className="card-base card-hover relative pl-6"
              >
                {/* Timeline indicator */}
                <div className="absolute left-0 top-6 h-3 w-3 -translate-x-1/2 rounded-full bg-accent" />
                {index < EXPERIENCES.length - 1 && (
                  <div className="absolute left-0 top-9 h-[calc(100%+2rem)] w-0.5 -translate-x-1/2 bg-border" />
                )}

                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold text-foreground">
                        {exp.company}
                      </h3>
                      {exp.isInternship && (
                        <span className="rounded-md bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
                          Internship
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {exp.role}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground whitespace-nowrap">
                    {exp.period}
                  </p>
                </div>

                <ul className="mt-4 space-y-3">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-3 text-sm text-body">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent/60" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
