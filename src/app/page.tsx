import { About } from "@/components/about";
import { Capabilities } from "@/components/capabilities";
import { Contact } from "@/components/contact";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Networking } from "@/components/networking";
import { Projects } from "@/components/projects";

/* Eight sections, each carrying content that exists. Order follows the brief:
   identity, background, what I work with, the networks/systems base, real
   experience, training, proof, contact. Everything below the fold is static. */
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Capabilities />
      <Networking />
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </>
  );
}
