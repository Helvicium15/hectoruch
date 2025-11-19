import { Palette, Pen, Layout, Type, Package, Sparkles } from "lucide-react";

interface Skill {
  name: string;
  icon: React.ElementType;
  proficiency: number;
}

const Skills = () => {
  const skills: Skill[] = [
    { name: "Visual Identity", icon: Palette, proficiency: 95 },
    { name: "Typography", icon: Type, proficiency: 90 },
    { name: "Editorial Design", icon: Layout, proficiency: 88 },
    { name: "Illustration", icon: Pen, proficiency: 85 },
    { name: "Packaging", icon: Package, proficiency: 82 },
    { name: "Art Direction", icon: Sparkles, proficiency: 90 },
  ];

  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-playfair text-4xl md:text-5xl font-semibold mb-16 text-foreground text-center">
          Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="group animate-in fade-in slide-in-from-bottom-8 duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-4">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center group-hover:bg-accent transition-colors duration-500">
                    <Icon className="w-8 h-8 text-foreground group-hover:text-accent-foreground transition-colors duration-500" />
                  </div>
                  
                  {/* Skill Name */}
                  <h3 className="font-inter text-xl font-medium text-foreground">
                    {skill.name}
                  </h3>
                  
                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="h-1 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-accent transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.proficiency}%`,
                          transitionDelay: `${index * 100 + 300}ms`
                        }}
                      />
                    </div>
                    <p className="font-inter text-sm text-muted-foreground">
                      {skill.proficiency}%
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Tools Section */}
        <div className="mt-24 pt-16 border-t border-border">
          <h3 className="font-playfair text-2xl font-semibold mb-8 text-foreground text-center">
            Tools & Software
          </h3>
          <div className="flex flex-wrap justify-center gap-6 text-muted-foreground font-inter">
            {["Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Figma", "Adobe XD", "Sketch"].map((tool, index) => (
              <span 
                key={tool}
                className="px-4 py-2 bg-secondary rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300 animate-in fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
