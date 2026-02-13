export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto max-w-5xl text-center">
        <p className="font-mono text-xs text-muted-foreground">
          Designed by{" "}
          <a
            href="#"
            className="text-primary transition-colors hover:underline"
          >
            Rogelio Zamarripa Martínez
          </a>
        </p>
        <p className="mt-1 font-mono text-xs text-muted-foreground">
          Made with Next.js, TypeScript and Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
