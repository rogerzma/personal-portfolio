import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 pt-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-4 font-mono text-sm text-primary">
          Hi, my name is
        </p>
        <h1 className="mb-4 text-balance text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
          Rogelio Zamarripa Martínez
        </h1>
        <h2 className="mb-6 text-balance text-2xl font-semibold text-muted-foreground md:text-3xl lg:text-4xl">
          Software Engineer
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          I build accessible, high-performance digital experiences.
          I'm passionate about clean code, modern interfaces, and
          creative problem-solving.
        </p>

        <div className="mb-12 flex items-center justify-center gap-5">
          <a
            href="https://github.com/rogerzma"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/rogelio-zamarripa-mart%C3%ADnez-518aa6335/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:rzamarripam2001@gmail.com"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>

        <a
          href="#about"
          className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm text-muted-foreground transition-all hover:border-primary hover:text-primary"
        >
          Know more about me 
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
