import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Deployments from "@/components/Deployments";
import Builds from "@/components/Builds";
import Looking from "@/components/Looking";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Stats />
      <About />
      <Deployments />
      <Builds />
      <Looking />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}
