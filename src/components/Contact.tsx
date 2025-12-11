import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
const Contact = () => {
  return <section id="contact" className="py-32 px-6 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
        <div className="inline-block px-4 py-2 bg-primary/20 border border-primary/30 rounded-full mb-6">
          <p className="font-inter text-sm text-primary font-bold uppercase tracking-wider">Let's Connect</p>
        </div>
        
        <h2 className="font-playfair text-4xl md:text-6xl font-black leading-tight">
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            READY TO CREATE SOMETHING BOLD?
          </span>
        </h2>
        
        <p className="font-inter text-lg md:text-xl text-foreground/90 max-w-2xl mx-auto leading-relaxed font-medium">Got a project that needs that extra edge? Let's collaborate!!</p>
        
        <div className="flex flex-wrap gap-4 justify-center pt-4">
          <a 
            href="mailto:hectoruch18@gmail.com" 
            className="inline-flex items-center justify-center font-inter text-base px-8 py-6 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-md hover:shadow-glow transition-all duration-300 font-medium"
          >
            <Mail className="mr-2 h-5 w-5" />
            Send Email
          </a>
          
          <Button variant="outline" size="lg" className="font-inter text-base px-8 py-6 border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300" asChild>
            <a href="https://www.behance.net/hectoruribe2" target="_blank" rel="noopener noreferrer">
              View Portfolio
            </a>
          </Button>
        </div>
        
        <div className="pt-12 flex flex-wrap justify-center gap-8 text-sm font-inter text-muted-foreground">
          <a href="https://unsplash.com/de/@helvicium" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            Unsplash Photography
          </a>
          <span>•</span>
          <span>Based in Mainz, Germany</span>
        </div>
      </div>
    </section>;
};
export default Contact;