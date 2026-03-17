import { useEffect, useMemo, useState } from "react";
import { ChevronDown, ChevronRight, FileCode2, FolderOpen } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import Hero from "@/components/Hero";
import Project from "@/components/Poject";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

const LMS_PROJECT_URL = "https://lms-frontend-psi-nine.vercel.app/login";
const DEFAULT_FILE_ID = "hero.tsx";
const FILE_IDS = [
  "hero.tsx",
  "project.tsx",
  "experience.tsx",
  "skills.tsx",
  "achievements.tsx",
  "education.tsx",
  "contact.tsx",
  "lms-live.url",
];

const Index = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const normalizedUrlFile = useMemo(() => {
    const fileParam = searchParams.get("file");
    return fileParam && FILE_IDS.includes(fileParam) ? fileParam : DEFAULT_FILE_ID;
  }, [searchParams]);

  const [activeFile, setActiveFile] = useState(normalizedUrlFile);
  const [openTabs, setOpenTabs] = useState<string[]>([DEFAULT_FILE_ID]);

  useEffect(() => {
    setActiveFile(normalizedUrlFile);
    setOpenTabs((prev) => (prev.includes(normalizedUrlFile) ? prev : [...prev, normalizedUrlFile]));
  }, [normalizedUrlFile]);

  const setUrlForFile = (fileId: string) => {
    setSearchParams({ file: fileId });
  };

  const openFile = (fileId: string) => {
    setActiveFile(fileId);
    setOpenTabs((prev) => (prev.includes(fileId) ? prev : [...prev, fileId]));
    setUrlForFile(fileId);
  };

  const files = [
    { id: "hero.tsx", label: "hero.tsx", title: "Hero", component: <Hero onOpenLiveProject={() => openFile("lms-live.url")} /> },
    { id: "project.tsx", label: "project.tsx", title: "Project", component: <Project onOpenLiveProject={() => openFile("lms-live.url")} /> },
    { id: "experience.tsx", label: "experience.tsx", title: "Experience", component: <Experience /> },
    { id: "skills.tsx", label: "skills.tsx", title: "Skills", component: <Skills /> },
    { id: "achievements.tsx", label: "achievements.tsx", title: "Achievements", component: <Achievements /> },
    { id: "education.tsx", label: "education.tsx", title: "Education", component: <Education /> },
    { id: "contact.tsx", label: "contact.tsx", title: "Contact", component: <Contact /> },
    {
      id: "lms-live.url",
      label: "lms-live.url",
      title: "LMS Live Preview",
      component: (
        <section className="section-bg-primary py-4 sm:py-5">
          <div className="section-padding">
            <div className="section-container">
              <div className="section-card">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <h2 className="section-title">Library Management System - Live</h2>
                  <a
                    href={LMS_PROJECT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary whitespace-nowrap"
                  >
                    Open in Browser
                  </a>
                </div>
                <p className="mb-4 text-sm text-body">
                  If the preview is blocked by browser security headers, use "Open in Browser".
                </p>
                <div className="overflow-hidden rounded-2xl border border-border bg-background/40">
                  <iframe
                    title="LMS Live Preview"
                    src={LMS_PROJECT_URL}
                    className="h-[70vh] w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ),
    },
  ];

  const activeItem = files.find((file) => file.id === activeFile) ?? files[0];

  const closeTab = (fileId: string) => {
    setOpenTabs((prev) => {
      const next = prev.filter((tab) => tab !== fileId);
      if (fileId === activeFile && next.length > 0) {
        setActiveFile(next[next.length - 1]);
        setUrlForFile(next[next.length - 1]);
      }
      return next.length ? next : [DEFAULT_FILE_ID];
    });
    if (fileId === activeFile && openTabs.length <= 1) {
      setActiveFile(DEFAULT_FILE_ID);
      setUrlForFile(DEFAULT_FILE_ID);
    }
  };

  return (
    <div className="vscode-shell min-h-screen bg-background text-foreground">
      <header className="vscode-titlebar">
        <p className="text-sm font-bold tracking-wide text-muted-foreground">Aniket Gore</p>
      </header>

      <main className="vscode-main">
        <aside className="vscode-sidebar">
          <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            <FolderOpen className="h-4 w-4" />
            Explorer
          </div>

          <div className="mb-2 flex items-center gap-1 text-xs font-semibold text-muted-foreground">
            <ChevronDown className="h-3.5 w-3.5" />
            portfolio
          </div>

          <ul className="space-y-1">
            {files.map((file) => (
              <li key={file.id}>
                <button
                  onClick={() => openFile(file.id)}
                  className={`vscode-file ${activeFile === file.id ? "vscode-file-active" : ""}`}
                >
                  <ChevronRight className="h-3 w-3 opacity-50" />
                  <FileCode2 className="h-3.5 w-3.5 text-accent" />
                  <span className="font-semibold">{file.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <section className="vscode-editor">
          <div className="vscode-tabs">
            {openTabs.map((tab) => {
              const file = files.find((item) => item.id === tab);
              if (!file) {
                return null;
              }

              return (
                <button
                  key={tab}
                  onClick={() => openFile(tab)}
                  className={`vscode-tab ${activeFile === tab ? "vscode-tab-active" : ""}`}
                >
                  <FileCode2 className="h-3.5 w-3.5" />
                  <span className="font-semibold">{file.label}</span>
                  {tab !== DEFAULT_FILE_ID && (
                    <span
                      className="ml-2 rounded px-1 text-[10px] hover:bg-background/50"
                      onClick={(event) => {
                        event.stopPropagation();
                        closeTab(tab);
                      }}
                    >
                      x
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="vscode-breadcrumb">
            <span>portfolio</span>
            <span>/</span>
            <span>{activeItem.label}</span>
            <span className="text-muted-foreground">- {activeItem.title}</span>
          </div>

          <div className="vscode-content">{activeItem.component}</div>
        </section>
      </main>
    </div>
  );
};

export default Index;
