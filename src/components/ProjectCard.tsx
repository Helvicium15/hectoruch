import { Card } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  category: string;
  imageUrl: string;
  link: string;
}

const ProjectCard = ({ title, category, imageUrl, link }: ProjectCardProps) => {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group block"
    >
      <Card className="overflow-hidden border border-border hover:border-primary/30 shadow-elegant transition-all duration-500 hover:shadow-glow hover:-translate-y-2">
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-secondary/90 to-accent/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <div className="text-center space-y-3 px-6">
              <h3 className="font-playfair text-2xl md:text-3xl font-bold text-white">
                {title}
              </h3>
              <p className="font-inter text-sm text-white/90 uppercase tracking-wider">
                {category}
              </p>
              <div className="pt-2">
                <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                  View Project →
                </span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </a>
  );
};

export default ProjectCard;
