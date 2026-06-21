import { motion } from "framer-motion";
import { Award, BriefcaseBusiness, Sparkles } from "lucide-react";

type SubProject = { name: string; highlights: string[] };

type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  award?: string;
  current?: boolean;
  subProjects?: SubProject[];
  highlights?: string[];
};

const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Transeg LLP",
    role: "Software Engineer I",
    period: "Dec 2024 – Jun 2026",
    location: "Remote",
    award: "Stellar Engineer Award — Q4 2025",
    current: true,
    subProjects: [
      {
        name: "Petpooja Studio — AI Image Gallery",
        highlights: [
          "Led end-to-end delivery of an AI-powered image gallery platform serving 400K+ assets to 10,000 daily active users, managing architecture, team coordination, and deployment.",
          "Reduced API latency from 4,000ms → 100ms through database indexing, query optimization, parallel execution, and CloudFront CDN caching.",
          "Integrated AI APIs (Background Removal, Nano Banana, Veo-3) to generate personalized image and video content via user-driven image fusion pipelines.",
          "Architected AWS infrastructure: S3 with versioning, SQS for async image/video job processing, SES for transactional email, CloudFront for content delivery, EC2 for backend services.",
          "Built image resizing pipeline for 12+ aggregator integrations including Zomato, Swiggy, and international platforms; integrated Studio APIs directly into Petpooja POS.",
          "Collaborated across AI/data science, VAPT, QA, legal, and aggregator teams to deliver requirement-aligned, security-audited releases.",
        ],
      },
      {
        name: "FlowBit AI — Document Intelligence SaaS",
        highlights: [
          "Built backend APIs with Node.js and Next.js for an AI-powered procurement platform using Azure OpenAI (GPT-4) to generate natural-language procurement recommendations with document highlighting.",
          "Engineered a multi-tenant RBAC authorization layer providing organization-, department-, and user-level resource access control across the platform.",
          "Implemented end-to-end file storage system on AWS S3; integrated AWS SQS for async document processing queues.",
          "Built collaborative features: nested comments, approval/rejection workflows, invite/onboarding flows, and assign/revoke permission management.",
          "Owned technical requirement gathering and implemented GDPR compliance measures across the platform.",
        ],
      },
      {
        name: "SuperSalesMind — AI Sales Automation Platform",
        highlights: [
          "Founding engineer of an AI-driven lead intelligence and outreach automation platform integrating RocketReach, Crustdata, Lusha, and People Data Labs for contact enrichment.",
          "Integrated Unipile APIs to connect Gmail and LinkedIn for automated multi-step outreach sequences with autonomous reply handling based on company data.",
          "Built autopilot lead discovery engine with configurable filters, cron-scheduled campaigns, and calendar-based meeting booking — reducing manual outreach effort by 40%.",
          "Delivered end-to-end: advanced analytics dashboard, CRM workflows, lead tracking from outreach to onboarding, and CI/CD pipeline on AWS.",
        ],
      },
    ],
  },
  {
    company: "Agivant Technologies",
    role: "Full Stack Software Engineer",
    period: "May 2024 – Nov 2024",
    location: "Pune",
    highlights: [
      "Engineered a conversational AI platform on Google Cloud Platform — ingested and cleaned raw data into BigQuery, built a full RAG pipeline using Vertex AI, text-embedding-gecko embeddings, and Gemini LLM to power a Text-to-SQL query engine.",
      "Designed the data pipeline: raw data ingestion → BigQuery → vector embedding with re-rankers → natural language to SQL conversion → interactive visualizations (Seaborn, Matplotlib) for non-technical business users.",
      "Containerized services with Docker and managed source control via GitHub; integrated vector database for semantic retrieval with re-ranking for result quality.",
      "Delivered client-driven features for a production e-commerce platform; participated in sprint planning, code reviews, and cross-functional Agile delivery.",
    ],
  },
];

const Experience = () => (
  <section id="experience" className="py-12 sm:py-14">
    <div className="section-padding">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3, once: true }}
          className="mb-12"
        >
          <p className="eyebrow">Experience</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Work History</h2>
        </motion.div>

        <div className="relative space-y-12 before:absolute before:bottom-0 before:left-[5px] before:top-2 before:w-px before:bg-gradient-to-b before:from-primary/60 before:to-primary/05">
          {EXPERIENCE.map((item, index) => (
            <motion.article
              key={item.company}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.1, once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="pl-10"
            >
              <div className="absolute left-0 top-1.5">
                {item.current
                  ? <Sparkles className="h-3 w-3 text-primary" />
                  : <span className="block h-2 w-2 rounded-full bg-primary/50 mt-0.5" />}
              </div>

              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <p className="text-xl font-bold text-foreground">{item.company}</p>
                  <p className="mt-0.5 inline-flex items-center gap-1.5 text-sm text-body">
                    <BriefcaseBusiness className="h-3.5 w-3.5" />
                    {item.role}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-muted-foreground">{item.period}</p>
                  <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{item.location}</p>
                </div>
              </div>

              {item.award && (
                <p className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                  <Award className="h-3 w-3" />
                  {item.award}
                </p>
              )}

              {item.subProjects && (
                <div className="mt-6 space-y-6">
                  {item.subProjects.map((sub) => (
                    <div key={sub.name}>
                      <p className="mb-3 text-sm font-semibold text-foreground/90">{sub.name}</p>
                      <ul className="space-y-2 border-l border-white/10 pl-4">
                        {sub.highlights.map((h) => (
                          <li key={h} className="text-sm leading-relaxed text-body">{h}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {item.highlights && (
                <ul className="mt-5 space-y-2 border-l border-white/10 pl-4">
                  {item.highlights.map((h) => (
                    <li key={h} className="text-sm leading-relaxed text-body">{h}</li>
                  ))}
                </ul>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
