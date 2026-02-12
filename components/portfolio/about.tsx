import { User, MapPin, Briefcase, GraduationCap } from "lucide-react";

export function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 flex items-center gap-3">
          <span className="font-mono text-sm text-primary">01.</span>
          <h2 className="text-2xl font-bold text-foreground">About me</h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid gap-12 md:grid-cols-5">
          {/* Text content */}
          <div className="space-y-5 md:col-span-3">
            <p className="leading-relaxed text-muted-foreground">
              I'm a web developper with a passion for creating elegant and efficient solutions. With
              experience in both frontend and backend technologies,
              I enjoy building products that not only function well but also provide a great user
              experience.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              I enjoy facing new technological challenges and learning constantly. 
              My main focus is to build products that are useful, scalable, 
              and provide an excellent user experience.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              When I'm not programming, I like to read about new technologies, contribute
              to open source projects, and explore creative ideas.
            </p>
          </div>

          {/* Info cards */}
          <div className="flex flex-col gap-4 md:col-span-2">
            <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
              <User className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-medium text-foreground">Name</p>
                <p className="text-sm text-muted-foreground">Rogelio Zamarripa Martínez</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-medium text-foreground">Location</p>
                <p className="text-sm text-muted-foreground">Zacatecas, Mexico</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
              <Briefcase className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-medium text-foreground">Current Role</p>
                <p className="text-sm text-muted-foreground">
                  Full Stack Developer
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
              <GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-medium text-foreground">Education</p>
                <p className="text-sm text-muted-foreground">
                  B.S. in Computer Systems Engineering<br />
                  Currently pursuing a Master's in Software Engineering
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
