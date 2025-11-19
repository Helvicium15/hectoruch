import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-6 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in duration-1000">
        <h1 className="font-playfair text-6xl md:text-8xl font-bold tracking-tight text-foreground">
          Hector Uribe Chacon
        </h1>
        
        <p className="font-inter text-xl md:text-2xl text-muted-foreground font-light tracking-wide">
          Graphic Designer
        </p>
        
        <div className="h-px w-24 mx-auto bg-accent" />
        
        <p className="font-inter text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Creating visual identities and design solutions that blend elegance with purpose
        </p>
      </div>
      
      <a 
        href="#projects" 
        className="absolute bottom-12 animate-bounce"
        aria-label="Scroll to projects"
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground hover:text-accent transition-colors" />
      </a>
    </section>
  );
};

export default Hero;
