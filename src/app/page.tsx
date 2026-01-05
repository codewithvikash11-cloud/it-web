import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import TechStack from "@/components/home/TechStack";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Process from "@/components/home/Process";
import Team from "@/components/home/Team";
import Portfolio from "@/components/home/Portfolio";
import Testimonials from "@/components/home/Testimonials";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <TechStack />
      <WhyChooseUs />
      <Process />
      <Team />
      <Portfolio />
      <Testimonials />
      <Contact />
    </>
  );
}
