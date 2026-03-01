import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useLocation, useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { id: "home", label: "Home", type: "section" },
    { id: "about", label: "About", type: "section" },
    { id: "projects", label: "Projects", type: "section" },
    { id: "experience", label: "Experience", type: "both", path: "/experience" },
    { id: "achievements", label: "Achievements", type: "section" },
    { id: "contact", label: "Contact", type: "section" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Track scroll position for blur effect
      setScrolled(window.scrollY > 50);
      
      // Track active section
      const sections = navItems.map(item => ({
        id: item.id,
        element: document.getElementById(item.id),
      }));

      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        if (section.element) {
          const { offsetTop, offsetHeight } = section.element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (item: typeof navItems[0]) => {
    if (item.type === "page" && item.path) {
      navigate(item.path);
      setIsOpen(false);
    } else if (item.type === "both" && item.path) {
      // Experience can be both a section and a page
      if (location.pathname === "/") {
        // On main page, scroll to experience section
        const element = document.getElementById(item.id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // On other pages, navigate to experience page
        navigate(item.path);
      }
      setIsOpen(false);
    } else {
      // If on Experience page, navigate to home first
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const element = document.getElementById(item.id);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        const element = document.getElementById(item.id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Floating Navbar */}
      <nav className={`fixed top-8 left-1/2 -translate-x-1/2 z-50 hidden md:block transition-all duration-500 animate-fade-in w-[95%] max-w-7xl ${
        scrolled ? 'top-6' : 'top-8'
      }`}>
        <div className="relative group w-full">
          {/* Enhanced gradient background with subtle dark overlay */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-background/20 via-background/10 to-background/20 pointer-events-none"></div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/12 via-accent/12 to-primary/12 pointer-events-none"></div>
          
          {/* Enhanced mirror shine effect overlay */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/18 via-transparent to-accent/12 pointer-events-none"></div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/12 to-transparent pointer-events-none opacity-60"></div>
          
          {/* Main navbar container with enhanced mirror effect */}
          <div className={`relative flex items-center justify-between gap-4 px-8 py-3 rounded-full transition-all duration-300 w-full ${
            scrolled 
              ? 'bg-background/50 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-primary/35' 
              : 'bg-background/40 backdrop-blur-2xl shadow-[0_8px_28px_rgba(0,0,0,0.3)] border border-primary/25'
          }`}>
            {/* Inner glass reflection with theme gradient */}
            <div className="absolute inset-[1px] rounded-full bg-gradient-to-b from-primary/5 via-accent/5 to-transparent pointer-events-none"></div>
            
          {/* Logo */}
          <button
            onClick={() => {
              if (location.pathname !== "/") {
                navigate("/");
              } else {
                scrollToSection(navItems[0]);
              }
            }}
            className="relative z-10 text-lg font-bold text-foreground hover:text-primary transition-all duration-300 hover:scale-105 flex-shrink-0"
          >
            Gobinath.dev
          </button>
          
          {/* Navigation Links - Centered */}
          <div className="relative z-10 flex items-center gap-1 flex-1 justify-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item)}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 group ${
                  location.pathname === "/" && (
                    (item.type === "section" && activeSection === item.id) ||
                    (item.type === "both" && activeSection === item.id)
                  )
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                }`}
              >
                {item.label}
                {/* Active indicator with animated underline only */}
                {location.pathname === "/" && (
                  (item.type === "section" && activeSection === item.id) ||
                  (item.type === "both" && activeSection === item.id)
                ) && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full animate-pulse"></span>
                )}
              </button>
            ))}
          </div>
          
          {/* Theme Toggle */}
          <div className="relative z-10 flex-shrink-0">
            <ThemeToggle />
          </div>
        </div>
        </div>
      </nav>

      {/* Mobile Navigation - Compact with Hamburger Menu */}
      <nav className="fixed top-0 left-0 right-0 z-50 md:hidden">
        {/* Enhanced gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/20 via-background/10 to-background/20 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/12 via-accent/12 to-primary/12 pointer-events-none"></div>
        {/* Enhanced mirror effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/18 via-transparent to-accent/12 pointer-events-none"></div>
        
        <div className="relative bg-background/50 backdrop-blur-2xl border-b border-primary/35 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
          {/* Inner glass reflection */}
          <div className="absolute inset-[1px] bg-gradient-to-b from-primary/5 via-accent/5 to-transparent pointer-events-none"></div>
          
          <div className="px-4 py-3">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <button
                onClick={() => {
                  if (location.pathname !== "/") {
                    navigate("/");
                  } else {
                    scrollToSection(navItems[0]);
                  }
                }}
                className="text-xl font-bold text-foreground hover:text-primary transition-colors"
              >
                Gobinath.dev
              </button>

              {/* Theme Toggle and Hamburger Menu */}
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-foreground hover:bg-accent/50"
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </div>
            </div>

            {/* Mobile Navigation Dropdown Menu */}
            {isOpen && (
              <div className="mt-4 animate-fade-in">
                <div className="relative">
                  {/* Enhanced gradient background for dropdown */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-background/20 via-background/10 to-background/20 pointer-events-none"></div>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/12 via-accent/12 to-primary/12 pointer-events-none"></div>
                  {/* Enhanced mirror shine effect for dropdown */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/18 via-transparent to-accent/12 pointer-events-none"></div>
                  
                  <div className="relative px-2 py-3 space-y-1 bg-background/50 backdrop-blur-2xl rounded-2xl border border-primary/35 shadow-[0_8px_28px_rgba(0,0,0,0.35)]">
                    {/* Inner glass reflection with theme gradient */}
                    <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-b from-primary/5 via-accent/5 to-transparent pointer-events-none"></div>
                    
                    {navItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item)}
                        className={`relative z-10 block px-4 py-3 text-base font-medium w-full text-left transition-all duration-300 rounded-xl ${
                          location.pathname === "/" && (
                            (item.type === "section" && activeSection === item.id) ||
                            (item.type === "both" && activeSection === item.id)
                          )
                            ? "text-primary bg-gradient-to-r from-primary/15 to-accent/15 shadow-sm"
                            : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                        }`}
                      >
                        {item.label}
                        {/* Active indicator for mobile */}
                        {location.pathname === "/" && (
                          (item.type === "section" && activeSection === item.id) ||
                          (item.type === "both" && activeSection === item.id)
                        ) && (
                          <span className="absolute left-2 top-1/2 -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-primary to-accent rounded-full"></span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;