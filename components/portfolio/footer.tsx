export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto max-w-5xl text-center">
        <p className="font-mono text-xs text-muted-foreground">
          Diseñado y construido por{" "}
          <a
            href="#"
            className="text-primary transition-colors hover:underline"
          >
            Tu Nombre Aqui
          </a>
        </p>
        <p className="mt-1 font-mono text-xs text-muted-foreground">
          Hecho con Next.js, TypeScript y Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
