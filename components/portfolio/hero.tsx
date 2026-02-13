import Image from "next/image";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-screen items-center justify-center px-6 pt-20"
    >
      <div className="mx-auto flex max-w-5xl flex-col-reverse items-center gap-12 md:flex-row md:gap-16">
        {/* Left: Text */}
        <div className="flex-1 text-center md:text-left">
          <p className="mb-4 font-mono text-sm text-primary">
            Hola, mi nombre es
          </p>
          <h1 className="mb-4 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Rogelio Zamarripa Martinez
          </h1>
          <h2 className="mb-6 text-balance text-xl font-semibold text-muted-foreground md:text-2xl lg:text-3xl">
            Software Engineer
          </h2>
          <p className="mb-10 max-w-lg text-pretty leading-relaxed text-muted-foreground">
            I build accessible, high-performance digital experiences. I'm
            passionate about clean code, modern interfaces, and creative
            problem-solving.
          </p>

          <div className="mb-10 flex items-center justify-center gap-5 md:justify-start">
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

        {/* Right: Profile Photo */}
        <div className="flex flex-shrink-0 items-center justify-center">
          <div className="relative h-56 w-56 overflow-hidden rounded-full border-4 border-primary/20 shadow-lg shadow-primary/10 md:h-72 md:w-72 lg:h-80 lg:w-80">
            <Image
              src="/images/profile.jpeg"
              alt="Rogelio Zamarripa Martinez"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}