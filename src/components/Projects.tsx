import ProjectCard from "./ProjectCard";
import { useLanguage } from "@/contexts/LanguageContext";
import obsidianPreview from "@/assets/obsidian-preview.png";
import landingpagePreview from "@/assets/landingpage-preview.png";
import ecothreadPreview from "@/assets/ecothread-preview.png";
import mobilePreview from "@/assets/mobile-preview.png";
import unsplashPreview from "@/assets/unsplash-preview.png";
import sentinelPreview from "@/assets/sentinel-preview.png";

const Projects = () => {
  const { t } = useLanguage();

  // Placeholder projects - replace with actual projects from Behance
  const projects = [
    {
      title: "Silly Crab",
      category: "Web App",
      imageUrl: obsidianPreview,
      link: "https://silly-crab-sc75.vercel.app/"
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
      title: "EcoThread",
      category: "Ecommerce Website",
      imageUrl: ecothreadPreview,
      link: "https://ecothread.lovable.app"
    },
    {
      title: "Mobile Design",
      category: "Product",
      imageUrl: mobilePreview,
      link: "https://xd.adobe.com/view/686d220c-8ac2-4168-8435-e61ee5c05780-3d3e/"
    },
    {
      title: "SentinelOne",
      category: "Dashboard Design",
      imageUrl: sentinelPreview,
      link: "https://sentinel-2025.vercel.app/"
    },
    {
      title: "Photograph",
      category: "Unsplash",
      imageUrl: unsplashPreview,
      link: "https://unsplash.com/de/@helvicium"
    }
  ];

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-16 text-foreground uppercase tracking-wider">
          {t.selectedWorks}
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
