// src/app/page.tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechArsenal from "@/components/TechArsenal";
import FeaturedProject from "@/components/FeaturedProject";
import Projects from "@/components/projo";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TechArsenal />
      <FeaturedProject />
      <Projects />
      <Experience />
      <About />
      <Contact />
      <Footer />
    </>
  );
}