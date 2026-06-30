import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import CaseStudies from "@/components/CaseStudies";
import Projects from "@/components/Projects";
import FeaturedIn from "@/components/FeaturedIn";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <CaseStudies />
        <Projects />
        <FeaturedIn />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
