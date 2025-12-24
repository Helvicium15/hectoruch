import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-12 px-6 border-t border-border bg-gradient-to-b from-transparent to-primary/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-inter text-sm text-muted-foreground">
            © {new Date().getFullYear()} Hector Uribe Chacon. {t.allRightsReserved}
          </p>
          
          <div className="flex gap-8">
            <a 
              href="https://www.behance.net/hectoruribe2" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-inter text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Behance
            </a>
            <a 
              href="https://unsplash.com/de/@helvicium" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-inter text-sm text-muted-foreground hover:text-secondary transition-colors"
            >
              Unsplash
            </a>
            <a 
              href="mailto:hectoruch18@gmail.com"
              className="font-inter text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
