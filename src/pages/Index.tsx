import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background/95 relative">
      <ParticleBackground />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
