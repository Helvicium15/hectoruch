import { useLanguage } from "@/contexts/LanguageContext";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1.5 rounded-full border border-foreground/20 text-xs font-medium uppercase tracking-wider hover:bg-foreground hover:text-background transition-all duration-300"
      aria-label={language === "en" ? "Switch to German" : "Switch to English"}
    >
      {language === "en" ? "DE" : "EN"}
    </button>
  );
};

export default LanguageToggle;
