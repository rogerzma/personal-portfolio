interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML/CSS",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express",
      "Python",
      "REST APIs",
      "GraphQL",
      "WebSockets",
    ],
  },
  {
    title: "Bases de Datos",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Firebase",
      "Prisma",
      "SQL",
    ],
  },
  {
    title: "DevOps & Herramientas",
    skills: [
      "Git",
      "Docker",
      "AWS",
      "Vercel",
      "CI/CD",
      "Linux",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 flex items-center gap-3">
          <span className="font-mono text-sm text-primary">04.</span>
          <h2 className="text-2xl font-bold text-foreground">Habilidades</h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-xl border border-border bg-card p-6"
            >
              <h3 className="mb-5 font-mono text-sm font-semibold text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-border bg-secondary px-3 py-1.5 text-sm text-secondary-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
