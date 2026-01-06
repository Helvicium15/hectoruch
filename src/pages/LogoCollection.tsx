import { ArrowLeft, ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import postersPreview from "@/assets/posters-preview.jpg";
import aeroleaf01 from "@/assets/aeroleaf-01.jpg";
import aeroleaf02 from "@/assets/aeroleaf-02.jpg";
import aeroleaf03 from "@/assets/aeroleaf-03.jpg";
import nordwand01 from "@/assets/nordwand-01.jpg";
import nordwand02 from "@/assets/nordwand-02.jpg";
import nordwand03 from "@/assets/nordwand-03.jpg";

interface LogoProject {
  title: string;
  category: string;
  images: string[];
  description?: string;
}

// Logo projects data
const logoProjects: LogoProject[] = [
  {
    title: "AeroLeaf",
    category: "AgriTech / Urban Vertical Farming",
    images: [aeroleaf01, aeroleaf02, aeroleaf03],
    description: "A Berlin-based tech startup designing smart hydroponic systems for growing vegetables in small apartments and offices without direct natural light. Targeting eco-conscious urban professionals (25-40), the brand embodies innovation, cleanliness, efficiency, and a futuristic yet organic personality. Core concept: \"Where nature meets German engineering.\""
  },
  {
    title: "NordWand",
    category: "Outdoor Fashion / Mountain Apparel",
    images: [nordwand01, nordwand02, nordwand03],
    description: "A Hamburg-based premium technical clothing brand for extreme climates, focused on 100% recycled materials and urban monochromatic aesthetics. Targeting adventurers, climbers, and rainy city dwellers who value the 'Gorpcore' aesthetic. The brand embodies resilience, stoicism, and minimalism. Core concept: \"Protection against the elements.\""
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
  const [zoomData, setZoomData] = useState<{ images: string[]; title: string; currentIndex: number } | null>(null);

  const pageTitle = language === "de" ? "Logo Kollektion" : "Logo Collection";
  const pageSubtitle = language === "de" ? "Portfolio" : "Portfolio";
  const projectsTitle = language === "de" ? "Logo Projekte" : "Logo Projects";
  const projectsDesc = language === "de"
    ? "Entdecken Sie meine Sammlung von Logo-Designs und visuellen Identitäten für verschiedene Branchen."
    : "Explore my collection of logo designs and visual identities across various industries.";

  const handleImageClick = (project: LogoProject, imageIndex: number) => {
    setZoomData({ images: project.images, title: project.title, currentIndex: imageIndex });
  };

  const goToZoomPrevious = () => {
    if (zoomData) {
      setZoomData({
        ...zoomData,
        currentIndex: zoomData.currentIndex === 0 ? zoomData.images.length - 1 : zoomData.currentIndex - 1
      });
    }
  };

  const goToZoomNext = () => {
    if (zoomData) {
      setZoomData({
        ...zoomData,
        currentIndex: zoomData.currentIndex === zoomData.images.length - 1 ? 0 : zoomData.currentIndex + 1
      });
    }
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
                  {project.description && (
                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                      {project.description}
                    </p>
                  )}
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
      <Dialog open={!!zoomData} onOpenChange={() => setZoomData(null)}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 bg-background/95 backdrop-blur-xl border-border/50">
          <button
            onClick={() => setZoomData(null)}
            className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-sm rounded-full p-2 hover:bg-background transition-colors"
          >
            <X className="w-5 h-5 text-foreground" />
          </button>
          {zoomData && (
            <div className="relative w-full h-full flex items-center justify-center p-4">
              {/* Navigation arrows */}
              {zoomData.images.length > 1 && (
                <>
                  <button
                    onClick={goToZoomPrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm rounded-full p-3 hover:bg-background transition-colors z-10"
                  >
                    <ChevronLeft className="w-6 h-6 text-foreground" />
                  </button>
                  <button
                    onClick={goToZoomNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm rounded-full p-3 hover:bg-background transition-colors z-10"
                  >
                    <ChevronRight className="w-6 h-6 text-foreground" />
                  </button>
                </>
              )}
              
              <img
                src={zoomData.images[zoomData.currentIndex]}
                alt={`${zoomData.title} - ${zoomData.currentIndex + 1}`}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              
              {/* Dots indicator */}
              {zoomData.images.length > 1 && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                  {zoomData.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setZoomData({ ...zoomData, currentIndex: index })}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        index === zoomData.currentIndex 
                          ? "bg-primary w-5" 
                          : "bg-foreground/40 hover:bg-foreground/60"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LogoCollection;
