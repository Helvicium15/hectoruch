import ProjectCard from "./ProjectCard";

const Projects = () => {
  // Placeholder projects - replace with actual projects from Behance
  const projects = [
    {
      title: "Visual Identity",
      category: "Branding",
      imageUrl: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=800&q=80",
      link: "https://www.behance.net/hectoruribe2"
    },
    {
      title: "Editorial Design",
      category: "Print",
      imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
      link: "https://www.behance.net/hectoruribe2"
    },
    {
      title: "Typography Exploration",
      category: "Graphic Design",
      imageUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
      link: "https://www.behance.net/hectoruribe2"
    },
    {
      title: "Brand System",
      category: "Identity",
      imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
      link: "https://www.behance.net/hectoruribe2"
    },
    {
      title: "Packaging Design",
      category: "Product",
      imageUrl: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=800&q=80",
      link: "https://www.behance.net/hectoruribe2"
    },
    {
      title: "Art Direction",
      category: "Creative",
      imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
      link: "https://www.behance.net/hectoruribe2"
    }
  ];

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-playfair text-4xl md:text-5xl font-semibold mb-16 text-foreground">
          Selected Works
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="animate-in fade-in slide-in-from-bottom-8 duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
