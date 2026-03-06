import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import ImageMosaic from "@/components/ImageMosaic";
import HowIWork from "@/components/HowIWork";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FluidBackground from "@/components/FluidBackground";
const Index = () => {
  return <div className="min-h-screen bg-background font-inter relative">
      <FluidBackground />
      <Navbar />
      <Hero />
      
      
      <About />
      <HowIWork />
      <ImageMosaic />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>;
};
export default Index;