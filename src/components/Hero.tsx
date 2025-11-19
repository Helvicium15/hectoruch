import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-6 py-20 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-hero-gradient opacity-10" />
      
      {/* Geometric shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-700" />
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-accent/10 rounded-full blur-2xl animate-pulse delay-1000" />
      
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in duration-1000 relative z-10">
        <div className="inline-block px-6 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
          <p className="font-inter text-sm md:text-base text-primary font-medium tracking-wide">
            Media Designer • Digital & Print
          </p>
        </div>
        
        <h1 className="font-playfair text-6xl md:text-8xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Hector Uribe Chacon
          </span>
        </h1>
        
        <div className="h-1 w-32 mx-auto bg-accent-gradient rounded-full" />
        
        <p className="font-inter text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
          Crafting bold visual experiences through innovative design, 3D art, and digital storytelling
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center pt-4">
          <a 
            href="https://www.behance.net/hectoruribe2" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:shadow-glow transition-all duration-300 font-inter font-medium"
          >
            View Portfolio
          </a>
          <a 
            href="#contact" 
            className="px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-inter font-medium"
          >
            Get in Touch
          </a>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-12 animate-bounce z-10"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="w-6 h-6 text-primary hover:text-accent transition-colors" />
      </a>
    </section>
  );
};

export default Hero;
