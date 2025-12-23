import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Palette, Pen, Code, Camera, Box, Layers, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { 
  SiAdobephotoshop, 
  SiAdobeillustrator, 
  SiAdobeaftereffects, 
  SiAdobeindesign, 
  SiAdobexd, 
  SiAutodesk,
  SiHtml5,
  SiCss3,
  SiFigma,
  SiCanva,
  SiWebflow
} from "react-icons/si";
import { RiOpenaiFill } from "react-icons/ri";
import photographyPreview from "@/assets/photography-preview.png";
import illustrationPreview from "@/assets/illustration-preview.webp";
import graphicDesignPreview from "@/assets/graphic-design-preview.png";
import webdevPreview from "@/assets/webdev-preview.png";

interface Skill {
  name: string;
  icon: React.ElementType;
  description: string;
  color: string;
  embedUrl?: string;
  linkUrl?: string;
  previewImage?: string;
  internalRoute?: string;
}

const Skills = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();
  
  const skills: Skill[] = [
    { 
      name: "Graphic Design", 
      icon: Palette, 
      description: "Creating visual identities and brand experiences that captivate and communicate.",
      color: "from-primary to-primary/70",
      linkUrl: "https://www.behance.net/hectoruribe2",
      previewImage: graphicDesignPreview
    },
    { 
      name: "3D Modeling", 
      icon: Box, 
      description: "Building immersive 3D worlds and objects with attention to detail and realism.",
      color: "from-secondary to-secondary/70", 
      embedUrl: "https://sketchfab.com/models/584ce27fa6034998b5a01e83864b513b/embed" 
    },
    { 
      name: "Photography", 
      icon: Camera, 
      description: "Capturing moments and stories through a unique artistic lens.",
      color: "from-accent to-accent/70", 
      linkUrl: "https://unsplash.com/es/@helvicium",
      previewImage: photographyPreview
    },
    { 
      name: "UX/UI Design", 
      icon: Layers, 
      description: "Designing intuitive interfaces that blend form and function seamlessly.",
      color: "from-primary to-secondary", 
      embedUrl: "https://xd.adobe.com/embed/fd07470b-99a3-4e6f-b4ef-9558d656f931-a854/", 
      internalRoute: "/ux-ui-design"
    },
    { 
      name: "Illustration", 
      icon: Pen, 
      description: "Hand-crafted illustrations that bring ideas and concepts to life.",
      color: "from-accent to-primary",
      linkUrl: "https://www.behance.net/gallery/162725755/VEGETABLES-SEASONAL-CALENDAR-2024",
      previewImage: illustrationPreview
    },
    { 
      name: "Web Development", 
      icon: Code, 
      description: "Building responsive, modern websites with clean and efficient code.",
      color: "from-secondary to-accent", 
      linkUrl: "https://baby-maps.lovable.app",
      previewImage: webdevPreview
    },
  ];

  // Autoplay effect
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === skills.length - 1 ? 0 : prev + 1));
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isPaused, skills.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? skills.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === skills.length - 1 ? 0 : prev + 1));
  };

  const getCardStyle = (index: number) => {
    const diff = index - activeIndex;
    const absDiff = Math.abs(diff);
    
    // Handle wrap-around for circular carousel
    let adjustedDiff = diff;
    if (diff > skills.length / 2) adjustedDiff = diff - skills.length;
    if (diff < -skills.length / 2) adjustedDiff = diff + skills.length;
    
    const isActive = adjustedDiff === 0;
    const rotation = adjustedDiff * 8; // degrees of rotation
    const translateX = adjustedDiff * 120; // horizontal offset
    const translateY = Math.abs(adjustedDiff) * 20; // slight vertical offset for non-active
    const scale = isActive ? 1 : 0.85 - Math.abs(adjustedDiff) * 0.05;
    const zIndex = 10 - Math.abs(adjustedDiff);
    const opacity = Math.abs(adjustedDiff) > 2 ? 0 : 1 - Math.abs(adjustedDiff) * 0.15;
    
    return {
      transform: `translateX(${translateX}px) translateY(${translateY}px) rotate(${rotation}deg) scale(${scale})`,
      zIndex,
      opacity,
    };
  };

  const formatNumber = (num: number) => {
    return `[${String(num).padStart(2, '0')}]`;
  };

  return (
    <section id="skills" className="py-32 px-6 relative overflow-hidden bg-background">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-6 mb-16">
          <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase">Services</span>
          <h2 className="font-orbitron text-3xl md:text-5xl font-bold text-foreground uppercase tracking-wider">
            What I Do Best
          </h2>
        </div>
        
        {/* Fan Carousel */}
        <div 
          className="relative h-[500px] md:h-[550px] flex items-center justify-center mb-16"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Cards Container */}
          <div className="relative w-full max-w-[300px] md:max-w-[350px] h-full flex items-center justify-center">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              const style = getCardStyle(index);
              const isActive = index === activeIndex;
              
              return (
                <div
                  key={skill.name}
                  onClick={() => {
                    if (index === activeIndex) {
                      if (skill.internalRoute) {
                        navigate(skill.internalRoute);
                      } else if (skill.linkUrl) {
                        window.open(skill.linkUrl, '_blank', 'noopener,noreferrer');
                      }
                    } else {
                      setActiveIndex(index);
                    }
                  }}
                  className={`absolute w-[280px] md:w-[320px] cursor-pointer transition-all duration-500 ease-out
                    ${isActive ? 'pointer-events-auto' : 'pointer-events-auto hover:opacity-90'}`}
                  style={style}
                >
                  <div className={`relative overflow-hidden rounded-3xl bg-card/80 backdrop-blur-md border transition-all duration-500
                    ${isActive ? 'border-primary/50 shadow-2xl shadow-primary/20' : 'border-border/30'}`}>
                    
                    {/* Card Content */}
                    <div className="p-5 md:p-6">
                      {/* Number */}
                      <div className="flex items-start justify-between mb-4">
                        <span className="font-orbitron text-xs text-muted-foreground tracking-wider">
                          {formatNumber(index + 1)}
                        </span>
                      {(skill.linkUrl || skill.internalRoute) && (
                          skill.internalRoute ? (
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                navigate(skill.internalRoute!);
                              }}
                              className="w-8 h-8 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                            >
                              <ArrowUpRight className="w-3 h-3" />
                            </button>
                          ) : (
                            <a 
                              href={skill.linkUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="w-8 h-8 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                            >
                              <ArrowUpRight className="w-3 h-3" />
                            </a>
                          )
                        )}
                      </div>

                      {/* Visual Area */}
                      <div className={`w-full aspect-square rounded-2xl mb-4 overflow-hidden bg-gradient-to-br from-muted/30 to-muted/10 border border-border/30 flex items-center justify-center transition-all duration-500
                        ${isActive ? 'from-primary/15 to-accent/10' : ''}`}>
                        {skill.embedUrl && isActive ? (
                          <iframe 
                            title={skill.name}
                            className="w-full h-full"
                            src={skill.embedUrl}
                            frameBorder="0"
                            allow="autoplay; fullscreen; xr-spatial-tracking"
                            allowFullScreen
                          />
                        ) : skill.previewImage ? (
                          <img 
                            src={skill.previewImage} 
                            alt={skill.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <Icon className={`w-16 h-16 md:w-20 md:h-20 transition-colors duration-500
                            ${isActive ? 'text-primary/80' : 'text-muted-foreground/40'}`} />
                        )}
                      </div>
                      
                      {/* Title */}
                      <h3 className="font-orbitron text-base md:text-lg font-semibold text-foreground uppercase tracking-wide mb-2">
                        {skill.name}
                      </h3>
                      
                      {/* Description - only visible on active */}
                      <p className={`text-xs md:text-sm text-muted-foreground leading-relaxed transition-all duration-300
                        ${isActive ? 'opacity-100' : 'opacity-60'}`}>
                        {skill.description}
                      </p>
                    </div>

                    {/* Hover Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 transition-opacity duration-500 pointer-events-none
                      ${isActive ? 'opacity-5' : ''}`} />
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Navigation Arrows */}
          <button 
            onClick={handlePrev}
            className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={handleNext}
            className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex items-center justify-center gap-2 mb-20">
          {skills.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300
                ${index === activeIndex ? 'bg-primary w-6' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'}`}
            />
          ))}
        </div>
        
        {/* Tools Section */}
        <div className="mt-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-4 block">Tools</span>
              <h3 className="font-orbitron text-2xl md:text-3xl font-bold text-foreground uppercase tracking-wide">
                Technologies
              </h3>
            </div>
            <p className="text-muted-foreground text-sm max-w-sm">
              Professional software I work with daily
            </p>
          </div>
          
          <div className="grid grid-cols-4 md:grid-cols-8 gap-3 md:gap-4">
            {[
              { name: "Photoshop", icon: SiAdobephotoshop, color: "#31A8FF" },
              { name: "Illustrator", icon: SiAdobeillustrator, color: "#FF9A00" },
              { name: "After Effects", icon: SiAdobeaftereffects, color: "#9999FF" },
              { name: "InDesign", icon: SiAdobeindesign, color: "#FF3366" },
              { name: "Adobe XD", icon: SiAdobexd, color: "#FF61F6" },
              { name: "Maya", icon: SiAutodesk, color: "#0696D7" },
              { name: "3DS Max", icon: SiAutodesk, color: "#37A5CC" },
              { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
              { name: "CSS3", icon: SiCss3, color: "#1572B6" },
              { name: "Figma", icon: SiFigma, color: "#F24E1E" },
              { name: "Canva", icon: SiCanva, color: "#00C4CC" },
              { name: "Webflow", icon: SiWebflow, color: "#4353FF" },
              { name: "Midjourney", icon: RiOpenaiFill, color: "#FFFFFF" },
            ].map((tool, index) => {
              const IconComponent = tool.icon;
              return (
                <div 
                  key={tool.name}
                  className="group flex flex-col items-center gap-3 p-4 md:p-6 rounded-xl bg-card/30 border border-border/30 hover:border-primary/30 transition-all duration-300"
                >
                  <IconComponent 
                    className="w-8 h-8 md:w-10 md:h-10 transition-all duration-300 group-hover:scale-110" 
                    style={{ color: tool.color }}
                  />
                  <p className="font-inter text-[10px] md:text-xs font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors uppercase tracking-wider">
                    {tool.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;