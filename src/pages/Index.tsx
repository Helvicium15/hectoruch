import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Solutions from "@/components/Solutions";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FluidBackground from "@/components/FluidBackground";
const Index = () => {
  return <div className="min-h-screen bg-background font-inter relative">
      <FluidBackground />
      <Hero />
      
      
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>;
};
export default Index;