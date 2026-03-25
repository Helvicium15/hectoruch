import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, Share2 } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { QRCodeSVG } from "qrcode.react";
import LanguageToggle from "./LanguageToggle";

const PORTFOLIO_URL = "https://hectoruch.lovable.app";
const LINKEDIN_URL = "https://www.linkedin.com/in/hectoruch18";

const Navbar = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showQR, setShowQR] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: t.about },
    { href: "#skills", label: t.skills },
    { href: "#projects", label: t.projects },
    { href: "#contact", label: t.contact },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 flex justify-between items-center transition-all duration-500
          ${isScrolled 
            ? 'bg-background/80 backdrop-blur-md border-b border-border/30 shadow-lg shadow-background/20' 
            : 'bg-transparent'
          }`}
      >
        <div className="flex flex-col">
          <h2 className="text-lg md:text-xl font-medium tracking-wide text-foreground">HECTOR URIBE</h2>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-md"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <LanguageToggle />

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-foreground">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-background/95 backdrop-blur-xl border-l border-border/50">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <nav className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                  >
                    {link.label}
                  </a>
                ))}
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setShowQR(true);
                  }}
                  className="flex items-center gap-3 text-lg font-medium text-foreground hover:text-primary transition-colors py-2 text-left"
                >
                  <Share2 className="h-5 w-5" />
                  {t.share}
                </button>
                <div className="pt-6 border-t border-border/50">
                  <a
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all duration-300"
                  >
                    {t.startProject}
                  </a>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* QR Code Dialog */}
      <Dialog open={showQR} onOpenChange={setShowQR}>
        <DialogContent className="sm:max-w-xs flex flex-col items-center gap-6 bg-background border-border">
          <DialogHeader className="text-center">
            <DialogTitle className="text-foreground">HECTOR URIBE</DialogTitle>
            <DialogDescription className="text-muted-foreground">{t.scanToVisit}</DialogDescription>
          </DialogHeader>
          <div className="bg-white p-4 rounded-xl">
            <QRCodeSVG value={PORTFOLIO_URL} size={200} level="H" />
          </div>
          <p className="text-xs text-muted-foreground break-all">{PORTFOLIO_URL}</p>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Navbar;
