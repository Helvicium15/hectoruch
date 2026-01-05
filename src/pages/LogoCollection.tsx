import { ArrowLeft, ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import postersPreview from "@/assets/posters-preview.jpg";

interface LogoProject {
  title: string;
  category: string;
  images: string[];
}

// Placeholder images - replace with actual logo images
const logoProjects: LogoProject[] = [
  {
    title: "Tech Startup",
    category: "Brand Identity",
    images: [postersPreview, postersPreview, postersPreview]
  },
  {
    title: "Restaurant Brand",
    category: "Logo Design",
    images: [postersPreview, postersPreview]
  },
  {
    title: "Fashion Label",
    category: "Visual Identity",
    images: [postersPreview, postersPreview, postersPreview]
  },
  {
    title: "Fitness Studio",
    category: "Brand Mark",
    images: [postersPreview, postersPreview]
  },
  {
    title: "Creative Agency",
    category: "Logo System",
    images: [postersPreview, postersPreview, postersPreview]
  },
  {
    title: "E-commerce",
    category: "Brand Identity",
    images: [postersPreview, postersPreview]
  }
];

const LogoCarousel = ({ 
  images, 
  title, 
  onImageClick 
}: { 
  images: string[]; 
  title: string; 
  onImageClick: (index: number) => void;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative aspect-[4/3] overflow-hidden bg-muted group/carousel">
      <img
        src={images[currentIndex]}
        alt={`${title} - ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-transform duration-500 group-hover/carousel:scale-105 cursor-zoom-in"
        onClick={() => onImageClick(currentIndex)}
      />
      
      {/* Zoom indicator */}
      <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300">
        <ZoomIn className="w-4 h-4 text-foreground" />
      </div>

      {/* Navigation arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 hover:bg-background"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 hover:bg-background"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </>
      )}

      {/* Dots indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? "bg-primary w-4" 
                  : "bg-background/60 hover:bg-background/80"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const LogoCollection = () => {
  const { t, language } = useLanguage();
  const [zoomImage, setZoomImage] = useState<{ src: string; title: string } | null>(null);

  const pageTitle = language === "de" ? "Logo Kollektion" : "Logo Collection";
  const pageSubtitle = language === "de" ? "Portfolio" : "Portfolio";
  const projectsTitle = language === "de" ? "Logo Projekte" : "Logo Projects";
  const projectsDesc = language === "de"
    ? "Entdecken Sie meine Sammlung von Logo-Designs und visuellen Identitäten für verschiedene Branchen."
    : "Explore my collection of logo designs and visual identities across various industries.";

  const handleImageClick = (project: LogoProject, imageIndex: number) => {
    setZoomImage({ src: project.images[imageIndex], title: project.title });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            to="/graphic-design"
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
            <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-4 block">
              {pageSubtitle}
            </span>
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold text-foreground uppercase tracking-wider mb-6">
              {projectsTitle}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {projectsDesc}
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {logoProjects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden border border-border hover:border-primary/30 shadow-elegant transition-all duration-500 hover:shadow-glow hover:-translate-y-2 bg-card/80 backdrop-blur-sm"
              >
                <LogoCarousel
                  images={project.images}
                  title={project.title}
                  onImageClick={(imageIndex) => handleImageClick(project, imageIndex)}
                />
                <div className="p-5">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="font-orbitron text-base font-semibold text-foreground uppercase tracking-wide mt-1">
                    {project.title}
                  </h3>
                </div>
              </Card>
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

      {/* Zoom Modal */}
      <Dialog open={!!zoomImage} onOpenChange={() => setZoomImage(null)}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 bg-background/95 backdrop-blur-xl border-border/50">
          <button
            onClick={() => setZoomImage(null)}
            className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-sm rounded-full p-2 hover:bg-background transition-colors"
          >
            <X className="w-5 h-5 text-foreground" />
          </button>
          {zoomImage && (
            <div className="relative w-full h-full flex items-center justify-center p-4">
              <img
                src={zoomImage.src}
                alt={zoomImage.title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LogoCollection;
