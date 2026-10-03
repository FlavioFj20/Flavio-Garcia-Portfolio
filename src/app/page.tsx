import { About } from "@/components/about";
import { Capabilities } from "@/components/capabilities";
import { Contact } from "@/components/contact";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";

/* Seven sections, each carrying content that exists. Order follows the brief:
   identity, background, what I work with, real experience, training, proof,
   contact. Everything below the fold is static output. */
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Capabilities />
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </>
  );
}