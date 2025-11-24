import ProjectCard from "./ProjectCard";
import ecothreadPreview from "@/assets/ecothread-preview.png";
import landingpagePreview from "@/assets/landingpage-preview.png";

const Projects = () => {
  // Placeholder projects - replace with actual projects from Behance
  const projects = [
    {
      title: "EcoThread",
      category: "Ecommerce Website",
      imageUrl: ecothreadPreview,
      link: "https://preview--ecothread.lovable.app/#impact"
    },
    {
      title: "Landingpage Webservice",
      category: "Web Design",
      imageUrl: landingpagePreview,
      link: "https://xd.adobe.com/view/fd07470b-99a3-4e6f-b4ef-9558d656f931-a854/"
    },
    {
      title: "3D Models",
      category: "Sketchfab",
      imageUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
      link: "https://sketchfab.com/hectorz151"
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
