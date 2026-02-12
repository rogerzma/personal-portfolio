import { ExternalLink, Github, Folder } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  live?: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    title: "Plataforma E-Commerce",
    description:
      "Aplicacion completa de comercio electronico con carrito de compras, pagos con Stripe, panel de administracion y gestion de inventario en tiempo real.",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "Dashboard de Analiticas",
    description:
      "Panel de control interactivo para visualizar metricas de negocio con graficos en tiempo real, exportacion de reportes y notificaciones automaticas.",
    technologies: ["React", "D3.js", "Node.js", "MongoDB", "WebSockets"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "App de Gestion de Tareas",
    description:
      "Aplicacion colaborativa estilo Kanban con drag & drop, asignacion de tareas, recordatorios y sincronizacion en tiempo real entre equipos.",
    technologies: ["React", "Firebase", "Tailwind CSS", "TypeScript"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "API de Autenticacion",
    description:
      "Microservicio de autenticacion con JWT, refresh tokens, OAuth2 y manejo seguro de sesiones.",
    technologies: ["Node.js", "Express", "Redis", "PostgreSQL"],
    github: "https://github.com",
    featured: false,
  },
  {
    title: "CLI de Generacion de Codigo",
    description:
      "Herramienta de linea de comandos para generar boilerplate de proyectos con templates personalizables.",
    technologies: ["TypeScript", "Node.js", "Commander.js"],
    github: "https://github.com",
    featured: false,
  },
  {
    title: "Blog Personal con MDX",
    description:
      "Blog estatico con soporte para MDX, syntax highlighting, busqueda y generacion automatica de OG images.",
    technologies: ["Next.js", "MDX", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
];

function FeaturedProject({ project }: { project: Project }) {
  return (
    <div className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
      <div className="mb-4 flex items-start justify-between">
        <Folder className="h-10 w-10 text-primary" />
        <div className="flex items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label={`Ver codigo fuente de ${project.title}`}
            >
              <Github className="h-5 w-5" />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label={`Ver demo de ${project.title}`}
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
      <h3 className="mb-2 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
        {project.title}
      </h3>
      <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="font-mono text-xs text-muted-foreground"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

function SmallProject({ project }: { project: Project }) {
  return (
    <div className="group flex items-center justify-between rounded-lg border border-border bg-card px-5 py-4 transition-all hover:border-primary/40">
      <div className="flex items-center gap-4">
        <Folder className="h-5 w-5 shrink-0 text-primary" />
        <div>
          <h3 className="text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
            {project.title}
          </h3>
          <p className="text-xs text-muted-foreground">{project.description}</p>
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-3">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label={`Ver codigo fuente de ${project.title}`}
          >
            <Github className="h-4 w-4" />
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label={`Ver demo de ${project.title}`}
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 flex items-center gap-3">
          <span className="font-mono text-sm text-primary">03.</span>
          <h2 className="text-2xl font-bold text-foreground">Proyectos</h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Featured projects grid */}
        <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <FeaturedProject key={project.title} project={project} />
          ))}
        </div>

        {/* Other projects */}
        {other.length > 0 && (
          <div>
            <h3 className="mb-6 text-center text-lg font-semibold text-foreground">
              Otros proyectos destacados
            </h3>
            <div className="space-y-3">
              {other.map((project) => (
                <SmallProject key={project.title} project={project} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
