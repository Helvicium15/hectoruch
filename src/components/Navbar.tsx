import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "./LanguageToggle";

const Navbar = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 flex justify-between items-center transition-all duration-500
        ${isScrolled 
          ? 'bg-background/80 backdrop-blur-md border-b border-border/30 shadow-lg shadow-background/20' 
          : 'bg-transparent'
        }`}
    >
      <div className="flex flex-col">
        <h2 className="text-lg md:text-xl font-medium tracking-wide text-foreground">HECTOR URIBE</h2>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-md">{t.about}</a>
        <a href="#skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-md">{t.skills}</a>
        <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-md">{t.projects}</a>
        <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-md">{t.contact}</a>
      </nav>

      <div className="flex items-center gap-4">
        <LanguageToggle />
        <a href="#contact" className="px-5 py-2.5 rounded-full bg-black border border-foreground/20 text-sm font-medium hover:bg-foreground hover:text-background transition-all duration-300">
          {t.startProject}
        </a>
      </div>
    </header>
  );
};

export default Navbar;
