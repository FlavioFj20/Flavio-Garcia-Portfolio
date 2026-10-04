import { About } from "@/components/about";
import { Capabilities } from "@/components/capabilities";
import { Contact } from "@/components/contact";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Networking } from "@/components/networking";
import { Projects } from "@/components/projects";
import { RevealObserver } from "@/components/reveal-observer";

/* Eight sections, each carrying content that exists. Order follows the brief:
   identity, background, what I work with, the networks/systems base, real
   experience, training, proof, contact.

   Each section commits to one side for its text assembly — left, right, left,
   right — so the effect reads as a designed sequence instead of noise. The hero
   is the exception: it spreads from all four corners. */
export default function Home() {
  return (
    <>
      <RevealObserver />
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