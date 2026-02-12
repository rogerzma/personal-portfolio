"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

interface Job {
  company: string;
  url?: string;
  role: string;
  period: string;
  description: string[];
  technologies: string[];
}

const jobs: Job[] = [
  {
    company: "INIFAP C.E. Zacatecas",
    url: "https://zacatecas.inifap.gob.mx",
    role: "Junior Full Stack Developer",
    period: "2025 - Present",
    description: [
      "Development of a spatial georeferencing system to support the agricultural sector in Zacatecas.",
      "Support in maintenance and improvement activities of the institute's internal systems.",
    ],
    technologies: ["Laravel", "PHP", "PostgreSQL", "Docker", "Git"],
  },
  {
    company: "LABSOL COZCyT Zacatecas",
    url: "https://labsol.cozcyt.gob.mx/",
    role: "Full Stack Developer",
    period: "2024 - 2025",
    description: [
      "Development of a new enrollment system for the electrical engineering academic unit at UAZ.",
    ],
    technologies: ["React", "JavaScript", "Node.js + Express", "CSS", "MongoDB", "Git"],
  },
];

export function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 flex items-center gap-3">
          <span className="font-mono text-sm text-primary">02.</span>
          <h2 className="text-2xl font-bold text-foreground">Experience</h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid gap-8 md:grid-cols-4">
          {/* Tabs */}
          <div className="flex gap-2 overflow-x-auto md:flex-col md:gap-0 md:overflow-visible">
            {jobs.map((job, index) => (
              <button
                key={job.company}
                type="button"
                onClick={() => setActiveTab(index)}
                className={cn(
                  "whitespace-nowrap border-b-2 px-4 py-3 text-left text-sm font-mono transition-all md:border-b-0 md:border-l-2",
                  activeTab === index
                    ? "border-primary text-primary bg-primary/5"
                    : "border-border text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                {job.company}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold text-foreground">
              {jobs[activeTab].role}{" "}
              <a
                href={jobs[activeTab].url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary hover:underline"
              >
                @ {jobs[activeTab].company}
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </h3>
            <p className="mb-6 mt-1 font-mono text-sm text-muted-foreground">
              {jobs[activeTab].period}
            </p>
            <ul className="space-y-3">
              {jobs[activeTab].description.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {jobs[activeTab].technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
