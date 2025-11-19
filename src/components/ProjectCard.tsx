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
      <Card className="overflow-hidden border-0 shadow-elegant transition-all duration-500 hover:shadow-xl">
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <div className="text-center space-y-2 px-6">
              <h3 className="font-playfair text-2xl font-semibold text-primary-foreground">
                {title}
              </h3>
              <p className="font-inter text-sm text-primary-foreground/80 uppercase tracking-wider">
                {category}
              </p>
            </div>
          </div>
        </div>
      </Card>
    </a>
  );
};

export default ProjectCard;
