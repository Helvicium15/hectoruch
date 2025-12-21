import { Palette, Pen, Code, Camera, Box, Layers, ExternalLink, ArrowUpRight } from "lucide-react";
import { 
  SiAdobephotoshop, 
  SiAdobeillustrator, 
  SiAdobeaftereffects, 
  SiAdobeindesign, 
  SiAdobexd, 
  SiAutodesk,
  SiHtml5,
  SiCss3
} from "react-icons/si";

interface Skill {
  name: string;
  icon: React.ElementType;
  description: string;
  color: string;
  embedUrl?: string;
  linkUrl?: string;
}

const Skills = () => {
  const skills: Skill[] = [
    { 
      name: "Graphic Design", 
      icon: Palette, 
      description: "Creating visual identities and brand experiences that captivate and communicate.",
      color: "from-primary to-primary/70" 
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
      linkUrl: "https://unsplash.com/es/fotos/la-copa-de-vino-se-encuentra-sobre-una-mesa-con-vistas-a-un-vinedo-cde6dorxX3w" 
    },
    { 
      name: "UX/UI Design", 
      icon: Layers, 
      description: "Designing intuitive interfaces that blend form and function seamlessly.",
      color: "from-primary to-secondary", 
      embedUrl: "https://xd.adobe.com/embed/fd07470b-99a3-4e6f-b4ef-9558d656f931-a854/", 
      linkUrl: "https://xd.adobe.com/view/fd07470b-99a3-4e6f-b4ef-9558d656f931-a854/" 
    },
    { 
      name: "Illustration", 
      icon: Pen, 
      description: "Hand-crafted illustrations that bring ideas and concepts to life.",
      color: "from-accent to-primary" 
    },
    { 
      name: "Web Development", 
      icon: Code, 
      description: "Building responsive, modern websites with clean and efficient code.",
      color: "from-secondary to-accent", 
      linkUrl: "https://baby-maps.lovable.app" 
    },
  ];

  const formatNumber = (num: number) => {
    return `[${String(num).padStart(2, '0')}]`;
  };

  return (
    <section id="skills" className="py-32 px-6 relative overflow-hidden bg-background">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
          <div>
            <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-4 block">Services</span>
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold text-foreground uppercase tracking-wider">
              What I Do Best
            </h2>
          </div>
          <p className="text-muted-foreground text-sm md:text-base max-w-md">
            Specialized skills refined through years of practice and countless projects.
          </p>
        </div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="group relative overflow-hidden rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-500"
              >
                {/* Card Content */}
                <div className="p-6 md:p-8">
                  {/* Number */}
                  <div className="flex items-start justify-between mb-6">
                    <span className="font-orbitron text-xs text-muted-foreground tracking-wider">
                      {formatNumber(index + 1)}
                    </span>
                    {skill.linkUrl && (
                      <a 
                        href={skill.linkUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  {/* Embed or Icon */}
                  {skill.embedUrl ? (
                    <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-6 border border-border/30 bg-muted/20">
                      <iframe 
                        title={skill.name}
                        className="w-full h-full"
                        src={skill.embedUrl}
                        frameBorder="0"
                        allow="autoplay; fullscreen; xr-spatial-tracking"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <div className="w-full aspect-[4/3] rounded-xl mb-6 bg-gradient-to-br from-muted/30 to-muted/10 border border-border/30 flex items-center justify-center group-hover:from-primary/10 group-hover:to-accent/10 transition-all duration-500">
                      <Icon className="w-16 h-16 text-muted-foreground/50 group-hover:text-primary/70 transition-colors duration-500" />
                    </div>
                  )}
                  
                  {/* Title */}
                  <h3 className="font-orbitron text-lg md:text-xl font-semibold text-foreground uppercase tracking-wide mb-3">
                    {skill.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>

                  {/* Bottom Actions */}
                  <div className="flex items-center gap-3 mt-6 pt-6 border-t border-border/30">
                    <button className="px-5 py-2.5 rounded-full bg-foreground/5 border border-border/50 text-xs font-medium text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 uppercase tracking-wider">
                      View
                    </button>
                    <button className="px-5 py-2.5 rounded-full border border-border/50 text-xs font-medium text-muted-foreground hover:text-foreground hover:border-foreground/50 transition-all duration-300 uppercase tracking-wider">
                      Learn More
                    </button>
                  </div>
                </div>

                {/* Hover Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
              </div>
            );
          })}
        </div>
        
        {/* Tools Section */}
        <div className="mt-32">
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