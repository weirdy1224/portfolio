import Header from "./components/Header"
import { Hero } from "./components/Hero"
import Skills from "./components/Skills";
import Exp from "./components/Exp";
import MatrixBackground from "./components/MatrixBackground";
import AOS from 'aos';
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <main className="relative overflow-hidden">

      <MatrixBackground />

      <img className="absolute top-0 right-0 opacity-60 -z-10" src="/gradient.png" alt="Gradient-png" />

      <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg] -z-10"></div>

      <Header />

      <section id="about">
        <Hero />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="exp">
        <Exp />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>

    </main>
  );
}
