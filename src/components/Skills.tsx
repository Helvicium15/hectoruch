import { Palette, Pen, Code, Camera, Box, Layers, ExternalLink } from "lucide-react";
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
  proficiency: number;
  color: string;
  embedUrl?: string;
  linkUrl?: string;
}

const Skills = () => {
  const skills: Skill[] = [
    { name: "Graphic Design", icon: Palette, proficiency: 95, color: "from-primary to-primary/70" },
    { name: "3D Modeling", icon: Box, proficiency: 90, color: "from-secondary to-secondary/70", embedUrl: "https://sketchfab.com/models/584ce27fa6034998b5a01e83864b513b/embed" },
    { name: "Photography", icon: Camera, proficiency: 88, color: "from-accent to-accent/70", linkUrl: "https://unsplash.com/es/fotos/la-copa-de-vino-se-encuentra-sobre-una-mesa-con-vistas-a-un-vinedo-cde6dorxX3w" },
    { name: "UX/UI Design", icon: Layers, proficiency: 85, color: "from-primary to-secondary", embedUrl: "https://xd.adobe.com/embed/fd07470b-99a3-4e6f-b4ef-9558d656f931-a854/", linkUrl: "https://xd.adobe.com/view/fd07470b-99a3-4e6f-b4ef-9558d656f931-a854/" },
    { name: "Illustration", icon: Pen, proficiency: 87, color: "from-accent to-primary" },
    { name: "Web Development", icon: Code, proficiency: 80, color: "from-secondary to-accent", linkUrl: "https://baby-maps.lovable.app" },
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <p className="font-inter text-sm text-primary font-medium">Skills & Expertise</p>
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            What I Do Best
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-glow animate-in fade-in slide-in-from-bottom-8"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
                
                <div className="relative space-y-4">
                  {/* 3D Model Embed */}
                  {skill.embedUrl && (
                    <div className="w-full aspect-video rounded-xl overflow-hidden mb-4 border border-border">
                      <iframe 
                        title={skill.name}
                        className="w-full h-full"
                        src={skill.embedUrl}
                        frameBorder="0"
                        allow="autoplay; fullscreen; xr-spatial-tracking"
                        allowFullScreen
                      />
                    </div>
                  )}
                  
                  {/* Icon with gradient background - only show if no embed */}
                  {!skill.embedUrl && (
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${skill.color} p-0.5`}>
                      <div className="w-full h-full bg-card rounded-xl flex items-center justify-center group-hover:bg-transparent transition-colors duration-500">
                        <Icon className="w-7 h-7 text-foreground group-hover:text-white transition-colors duration-500" />
                      </div>
                    </div>
                  )}
                  
                  {/* Skill Name */}
                  <div className="flex items-center gap-2">
                    <h3 className="font-inter text-xl font-semibold text-foreground">
                      {skill.name}
                    </h3>
                    {skill.linkUrl && (
                      <a 
                        href={skill.linkUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:text-secondary transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                  
                  {/* Progress Bar with gradient */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-inter text-sm text-muted-foreground">Proficiency</span>
                      <span className="font-inter text-sm font-medium text-foreground">{skill.proficiency}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out rounded-full`}
                        style={{ 
                          width: `${skill.proficiency}%`,
                          transitionDelay: `${index * 100 + 300}ms`
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Tools Section with modern cards */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="font-playfair text-3xl font-bold mb-4 text-foreground">
              Tools & Technologies
            </h3>
            <p className="font-inter text-muted-foreground">Professional software I work with daily</p>
          </div>
          
          <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-8 gap-4">
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
                  className="group flex flex-col items-center gap-3 p-6 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-elegant animate-in fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <IconComponent 
                    className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" 
                    style={{ color: tool.color }}
                  />
                  <p className="font-inter text-xs font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors">
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
