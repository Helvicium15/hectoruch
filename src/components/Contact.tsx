import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section className="py-32 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-foreground">
          Let's Work Together
        </h2>
        
        <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          I'm always interested in new projects and creative collaborations. 
          Feel free to reach out if you'd like to discuss your next design challenge.
        </p>
        
        <Button 
          variant="default"
          size="lg"
          className="font-inter text-base px-8 py-6 transition-all hover:shadow-elegant"
          asChild
        >
          <a href="mailto:contact@hectoruribe.com">
            <Mail className="mr-2 h-5 w-5" />
            Get in Touch
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Contact;
