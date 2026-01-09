import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";
import obsidianPreview from "@/assets/obsidian-ux-preview.png";
import ecothreadPreview from "@/assets/ecothread-preview.png";
import onlyfranzPreview from "@/assets/onlyfranz-preview.png";
import sentinelPreview from "@/assets/sentinel-preview.png";
import mobilePreview from "@/assets/mobile-preview.png";
import unsplashPreview from "@/assets/unsplash-preview.png";
import saasDashboardPreview from "@/assets/saas-dashboard-preview.png";

interface UxProject {
  title: string;
  category: string;
  imageUrl: string;
  link: string;
}

const projects: UxProject[] = [
  {
    title: "Obsidian Crypto",
    category: "Landing Page Design",
    imageUrl: obsidianPreview,
    link: "https://obsidian-rise-shine.lovable.app"
  },
  {
    title: "Ecothread Fashion",
    category: "E-commerce Design",
    imageUrl: ecothreadPreview,
    link: "https://ecothread.lovable.app"
  },
  {
    title: "Only Franz",
    category: "Recipe App",
    imageUrl: onlyfranzPreview,
    link: "https://onlyfranz.lovable.app"
  },
  {
    title: "SentinelOne Dashboard",
    category: "Dashboard Design",
    imageUrl: sentinelPreview,
    link: "https://sentinel-2025.vercel.app/"
  },
  {
    title: "Mobile App Concept",
    category: "Mobile UI/UX",
    imageUrl: mobilePreview,
    link: "https://xd.adobe.com/view/686d220c-8ac2-4168-8435-e61ee5c05780-3d3e/"
  },
  {
    title: "Photo Gallery App",
    category: "App Redesign",
    imageUrl: unsplashPreview,
    link: "https://www.behance.net/hectoruribe2"
  },
  {
    title: "SaaS Dashboard",
    category: "Landing Page & Dashboard",
    imageUrl: saasDashboardPreview,
    link: "https://xd.adobe.com/view/fd07470b-99a3-4e6f-b4ef-9558d656f931-a854/"
  }
];

const UxUiDesign = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-inter text-sm uppercase tracking-wider">{t.back}</span>
          </Link>
          <h1 className="font-orbitron text-lg md:text-xl font-bold text-foreground uppercase tracking-wider">
            {t.uxUiDesign}
          </h1>
          <LanguageToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-4 block">{t.portfolio}</span>
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold text-foreground uppercase tracking-wider mb-6">
              {t.uxUiProjects}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t.uxUiProjectsDesc}
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <a 
                key={index}
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group block"
              >
                <Card className="overflow-hidden border border-border hover:border-primary/30 shadow-elegant transition-all duration-500 hover:shadow-glow hover:-translate-y-2 bg-card/80 backdrop-blur-sm">
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-secondary/90 to-accent/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <div className="text-center space-y-3 px-6">
                        <h3 className="font-orbitron text-xl md:text-2xl font-bold text-white uppercase tracking-wide">
                          {project.title}
                        </h3>
                        <p className="font-inter text-sm text-white/90 uppercase tracking-wider">
                          {project.category}
                        </p>
                        <div className="pt-2">
                          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                            {t.viewProject} <ArrowUpRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">{project.category}</span>
                    <h3 className="font-orbitron text-base font-semibold text-foreground uppercase tracking-wide mt-1">
                      {project.title}
                    </h3>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border/30">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Hector Uribe. {t.allRightsReserved}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default UxUiDesign;
