import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="mb-4 block font-mono text-sm text-primary">05.</span>
        <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
          Let's get in touch
        </h2>
        <p className="mb-10 text-pretty leading-relaxed text-muted-foreground">
          I'm open to new opportunities, collaborations, or just a good 
          conversation about technology. If you have a project in mind or 
          want to connect, feel free to reach out.
        </p>

        <a
          href="mailto:rzamarripam2001@gmail.com"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90"
        >
          <Mail className="h-4 w-4" />
          Send me a message
        </a>

        <div className="mt-12 flex items-center justify-center gap-6">
          <a
            href="https://github.com"
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
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="Twitter"
          >
            <Twitter className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
