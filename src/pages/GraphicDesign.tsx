import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";
import postersPreview from "@/assets/posters-preview.jpg";
import vegetablesCalendarPreview from "@/assets/vegetables-calendar-preview.png";
import logoCollectionPreview from "@/assets/logo-collection-preview.jpg";

interface DesignProject {
  title: string;
  category: string;
  imageUrl: string;
  link: string;
  isInternal?: boolean;
}

const projects: DesignProject[] = [
  {
    title: "Vegetables Calendar 2024",
    category: "Print Design",
    imageUrl: vegetablesCalendarPreview,
    link: "https://www.behance.net/gallery/162725755/VEGETABLES-SEASONAL-CALENDAR-2024"
  },
  {
    title: "Logo Collection",
    category: "Logo Design",
    imageUrl: logoCollectionPreview,
    link: "/logo-collection",
    isInternal: true
  },
  {
    title: "Posters",
    category: "Poster Design",
    imageUrl: postersPreview,
    link: "https://www.behance.net/hectoruribe2"
  }
];

const GraphicDesign = () => {
  const { t, language } = useLanguage();

  const pageTitle = language === "de" ? "Grafikdesign" : "Graphic Design";
  const pageSubtitle = language === "de" ? "Portfolio" : "Portfolio";
  const projectsTitle = language === "de" ? "Design Projekte" : "Design Projects";
  const projectsDesc = language === "de" 
    ? "Entdecken Sie meine Sammlung von Branding, Logo-Design, Postern und visuellen Identitäten."
    : "Explore my collection of branding, logo design, posters, and visual identities.";

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
            {pageTitle}
          </h1>
          <LanguageToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-4 block">{pageSubtitle}</span>
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold text-foreground uppercase tracking-wider mb-6">
              {projectsTitle}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {projectsDesc}
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => {
              const CardWrapper = project.isInternal ? Link : 'a';
              const linkProps = project.isInternal 
                ? { to: project.link }
                : { href: project.link, target: "_blank", rel: "noopener noreferrer" };
              
              return (
                <CardWrapper
                  key={index}
                  {...linkProps as any}
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
                </CardWrapper>
              );
            })}
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

export default GraphicDesign;
