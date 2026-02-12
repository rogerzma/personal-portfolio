import { Navbar } from "../components/portfolio/navbar";
import { Hero } from "../components/portfolio/hero";
import { About } from "../components/portfolio/about";
import { Experience } from "../components/portfolio/experience";
import { Projects } from "../components/portfolio/projects";
import { Skills } from "../components/portfolio/skills";
import { Contact } from "../components/portfolio/contact";
import { Footer } from "../components/portfolio/footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
