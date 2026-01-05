import { ArrowDown, ArrowUpRight, Instagram, Send } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "./LanguageToggle";
import heroVideo from "@/assets/hero-background.mp4";
import { useEffect, useState } from "react";

const Hero = () => {
  const { t } = useLanguage();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="min-h-screen flex flex-col relative overflow-hidden bg-background">
      {/* Full Background Video with Parallax */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-[120%] absolute -top-[10%]"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-background/50" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Header */}
      <header className="relative z-20 px-6 md:px-12 py-6 flex justify-between items-center">
        <div className="flex flex-col">
          <h2 className="text-lg md:text-xl font-medium tracking-wide text-foreground">HECTOR URIBE</h2>
        </div>
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t.about}</a>
          <a href="#skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t.skills}</a>
          <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t.projects}</a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t.contact}</a>
        </nav>
        
        <div className="flex items-center gap-4">
          <LanguageToggle />
          <a 
            href="#contact" 
            className="px-5 py-2.5 rounded-full border border-foreground/20 text-sm font-medium hover:bg-foreground hover:text-background transition-all duration-300"
          >
            {t.startProject}
          </a>
        </div>
      </header>

      {/* Main Hero Content */}
      <div className="flex-1 relative px-6 md:px-12 flex items-center">
        {/* Text Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          {/* Top label */}
          <div className="mb-8">
            <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase">{t.visualDesigner}</span>
          </div>
          
          {/* Main Title */}
          <h1 className="font-orbitron font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.2em] leading-[0.9]">
            <span className="block text-foreground">HECTOR</span>
          </h1>
          
          {/* Right side label */}
          <div className="flex justify-end mt-4 mb-8">
            <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase">{t.artist3d}</span>
          </div>
          
          {/* Description and CTA */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-8">
            <p className="text-sm md:text-base text-muted-foreground max-w-xs leading-relaxed">
              {t.heroDescription}
            </p>
            
            <div className="flex items-center gap-4">
              <a 
                href="#projects" 
                className="group flex items-center gap-3 px-6 py-3 rounded-full border border-foreground/20 hover:bg-foreground hover:text-background transition-all duration-300"
              >
                <span className="text-sm font-medium">{t.viewWork}</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a 
                href="#contact" 
                className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
              >
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative z-20 px-6 md:px-12 py-8 flex justify-between items-end">
        {/* Scroll Indicator */}
        <div className="relative w-20 h-20">
          <svg className="w-full h-full animate-rotate-slow" viewBox="0 0 100 100">
            <path
              id="textPath"
              d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              fill="none"
            />
            <text className="text-[10px] fill-muted-foreground uppercase tracking-[0.2em]">
              <textPath href="#textPath">
                {t.scrollExplore}
              </textPath>
            </text>
          </svg>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <ArrowDown className="w-4 h-4 text-foreground animate-bounce" />
          </div>
        </div>
        
        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-300"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a 
            href="https://x.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-300"
          >
            <FaXTwitter className="w-4 h-4" />
          </a>
          <a 
            href="https://t.me" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-300"
          >
            <Send className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
