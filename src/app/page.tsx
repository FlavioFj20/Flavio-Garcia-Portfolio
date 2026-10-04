import { About } from "@/components/about";
import { Capabilities } from "@/components/capabilities";
import { Contact } from "@/components/contact";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Networking } from "@/components/networking";
import { Projects } from "@/components/projects";
import { RevealObserver } from "@/components/reveal-observer";
import { School42 } from "@/components/school-42";
import { Services } from "@/components/services";

/* Ten sections, and the order is the argument: who I am, what I can contribute,
   the stack behind it, the networking base, the project-based formation, the
   experience that proves it applies, the formal training underneath, the public
   code, and how to get in touch.

   Each section commits to one side for its text assembly — left, right, left,
   right — so the effect reads as a designed sequence instead of noise. The hero
   is the exception: it spreads from all four corners. */
export default function Home() {
  return (
    <>
      <RevealObserver />
      <Hero />
      <About />
      <Services />
      <Capabilities />
      <Networking />
      <School42 />
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </>
  );
}