const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-inter text-sm text-muted-foreground">
            © {new Date().getFullYear()} Hector Uribe Chacon. All rights reserved.
          </p>
          
          <div className="flex gap-8">
            <a 
              href="https://www.behance.net/hectoruribe2" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-inter text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              Behance
            </a>
            <a 
              href="mailto:contact@hectoruribe.com"
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
