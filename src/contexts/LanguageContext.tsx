import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "de";

interface Translations {
  // Hero
  visualDesigner: string;
  artist3d: string;
  heroDescription: string;
  viewWork: string;
  startProject: string;
  scrollExplore: string;
  // Navigation
  about: string;
  skills: string;
  projects: string;
  contact: string;
  // About
  whoIAm: string;
  creatingVisualImpact: string;
  aboutIntro: string;
  aboutText1: string;
  aboutText2: string;
  aboutOutro: string;
  boldCreativity: string;
  mediaDesigner: string;
  quickFacts: string;
  basedIn: string;
  heritage: string;
  role: string;
  languages: string;
  focusAreas: string;
  // Skills
  services: string;
  whatIBest: string;
  tools: string;
  technologies: string;
  professionalSoftware: string;
  graphicDesign: string;
  graphicDesignDesc: string;
  modeling3d: string;
  modeling3dDesc: string;
  photography: string;
  photographyDesc: string;
  uxUiDesign: string;
  uxUiDesignDesc: string;
  illustration: string;
  illustrationDesc: string;
  webDevelopment: string;
  webDevelopmentDesc: string;
  // Projects
  selectedWorks: string;
  // Contact
  letsConnect: string;
  readyToCreate: string;
  contactText: string;
  viewPortfolio: string;
  unsplashPhotography: string;
  // Footer
  allRightsReserved: string;
  // UX/UI Page
  back: string;
  portfolio: string;
  uxUiProjects: string;
  uxUiProjectsDesc: string;
  viewProject: string;
}

const translations: Record<Language, Translations> = {
  en: {
    // Hero
    visualDesigner: "Visual Designer",
    artist3d: "3D Artist",
    heroDescription: "Making the world a little more beautiful, one pixel at a time. Specializing in visual design and 3D artistry.",
    viewWork: "View Work",
    startProject: "Start A Project",
    scrollExplore: "• SCROLL • EXPLORE • SCROLL • EXPLORE",
    // Navigation
    about: "About",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
    // About
    whoIAm: "Who I Am",
    creatingVisualImpact: "Creating Visual Impact",
    aboutIntro: "I don't just design—I create experiences that demand attention.",
    aboutText1: "From childhood sketches to cutting-edge 3D worlds, I've turned my obsession with art and tech into a career that blends",
    aboutText2: "with technical precision.",
    aboutOutro: "Always evolving. Always innovating. Never settling.",
    boldCreativity: "bold creativity",
    mediaDesigner: "Media Designer for Digital and Print",
    quickFacts: "Quick Facts",
    basedIn: "Based in Mainz, Germany",
    heritage: "Mexican Heritage",
    role: "Junior Graphic Designer",
    languages: "Trilingual: Spanish, German, English and sometimes Italian",
    focusAreas: "Focus Areas",
    // Skills
    services: "Services",
    whatIBest: "What I Do Best",
    tools: "Tools",
    technologies: "Technologies",
    professionalSoftware: "Professional software I work with daily",
    graphicDesign: "Graphic Design",
    graphicDesignDesc: "Creating visual identities and brand experiences that captivate and communicate.",
    modeling3d: "3D Modeling",
    modeling3dDesc: "Building immersive 3D worlds and objects with attention to detail and realism.",
    photography: "Photography",
    photographyDesc: "Capturing moments and stories through a unique artistic lens.",
    uxUiDesign: "UX/UI Design",
    uxUiDesignDesc: "Designing intuitive interfaces that blend form and function seamlessly.",
    illustration: "Illustration",
    illustrationDesc: "Hand-crafted illustrations that bring ideas and concepts to life.",
    webDevelopment: "Web Development",
    webDevelopmentDesc: "Building responsive, modern websites with clean and efficient code.",
    // Projects
    selectedWorks: "Selected Works",
    // Contact
    letsConnect: "Let's Connect",
    readyToCreate: "Ready to Create Something Bold?",
    contactText: "Got a project that needs that extra edge? Let's collaborate!!",
    viewPortfolio: "View Portfolio",
    unsplashPhotography: "Unsplash Photography",
    // Footer
    allRightsReserved: "All rights reserved.",
    // UX/UI Page
    back: "Back",
    portfolio: "Portfolio",
    uxUiProjects: "UX/UI Projects",
    uxUiProjectsDesc: "A collection of user experience and interface design projects, showcasing intuitive interfaces that blend form and function seamlessly.",
    viewProject: "View Project",
  },
  de: {
    // Hero
    visualDesigner: "Visual Designer",
    artist3d: "3D Künstler",
    heroDescription: "Die Welt ein bisschen schöner machen, ein Pixel nach dem anderen. Spezialisiert auf visuelles Design und 3D-Kunst.",
    viewWork: "Arbeiten ansehen",
    startProject: "Projekt starten",
    scrollExplore: "• SCROLLEN • ENTDECKEN • SCROLLEN • ENTDECKEN",
    // Navigation
    about: "Über mich",
    skills: "Fähigkeiten",
    projects: "Projekte",
    contact: "Kontakt",
    // About
    whoIAm: "Wer ich bin",
    creatingVisualImpact: "Visuelle Wirkung schaffen",
    aboutIntro: "Ich designe nicht nur—ich schaffe Erlebnisse, die Aufmerksamkeit fordern.",
    aboutText1: "Von Kindheitsskizzen bis hin zu modernsten 3D-Welten habe ich meine Leidenschaft für Kunst und Technik in eine Karriere verwandelt, die",
    aboutText2: "mit technischer Präzision verbindet.",
    aboutOutro: "Immer weiterentwickeln. Immer innovieren. Niemals stillstehen.",
    boldCreativity: "mutige Kreativität",
    mediaDesigner: "Mediengestalter für Digital und Print",
    quickFacts: "Kurzinfo",
    basedIn: "Wohnhaft in Mainz, Deutschland",
    heritage: "Mexikanische Herkunft",
    role: "Junior Grafikdesigner",
    languages: "Dreisprachig: Spanisch, Deutsch, Englisch und manchmal Italienisch",
    focusAreas: "Schwerpunkte",
    // Skills
    services: "Dienstleistungen",
    whatIBest: "Was ich am besten kann",
    tools: "Werkzeuge",
    technologies: "Technologien",
    professionalSoftware: "Professionelle Software, mit der ich täglich arbeite",
    graphicDesign: "Grafikdesign",
    graphicDesignDesc: "Visuelle Identitäten und Markenerlebnisse schaffen, die fesseln und kommunizieren.",
    modeling3d: "3D-Modellierung",
    modeling3dDesc: "Immersive 3D-Welten und Objekte mit Liebe zum Detail und Realismus erstellen.",
    photography: "Fotografie",
    photographyDesc: "Momente und Geschichten durch eine einzigartige künstlerische Linse einfangen.",
    uxUiDesign: "UX/UI Design",
    uxUiDesignDesc: "Intuitive Benutzeroberflächen gestalten, die Form und Funktion nahtlos verbinden.",
    illustration: "Illustration",
    illustrationDesc: "Handgefertigte Illustrationen, die Ideen und Konzepte zum Leben erwecken.",
    webDevelopment: "Webentwicklung",
    webDevelopmentDesc: "Responsive, moderne Websites mit sauberem und effizientem Code erstellen.",
    // Projects
    selectedWorks: "Ausgewählte Arbeiten",
    // Contact
    letsConnect: "Kontakt aufnehmen",
    readyToCreate: "Bereit, etwas Mutiges zu schaffen?",
    contactText: "Haben Sie ein Projekt, das den gewissen Extra-Touch braucht? Lassen Sie uns zusammenarbeiten!!",
    viewPortfolio: "Portfolio ansehen",
    unsplashPhotography: "Unsplash Fotografie",
    // Footer
    allRightsReserved: "Alle Rechte vorbehalten.",
    // UX/UI Page
    back: "Zurück",
    portfolio: "Portfolio",
    uxUiProjects: "UX/UI Projekte",
    uxUiProjectsDesc: "Eine Sammlung von User Experience und Interface Design Projekten, die intuitive Benutzeroberflächen zeigen, die Form und Funktion nahtlos verbinden.",
    viewProject: "Projekt ansehen",
  },
};

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "de" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
