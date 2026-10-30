import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Deployments from "@/components/Deployments";
import Builds from "@/components/Builds";
import BeyondDeployment from "@/components/BeyondDeployment";
import Awards from "@/components/Awards";
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
      <BeyondDeployment />
      <Awards />
      <Contact />
      <Footer />
    </>
  );
}
