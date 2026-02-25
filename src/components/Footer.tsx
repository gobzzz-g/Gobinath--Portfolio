import { Heart, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/gobzzz-g",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/gobinath-g-75b56832a/",
      label: "LinkedIn"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:gobinath2702@gmail.com",
      label: "Email"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const id = sectionId.replace('#', '');
    
    // If we're not on the main page, navigate to it first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // Already on main page, just scroll
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-gradient-subtle border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-4 text-indigo-500">
              Gobinath.G
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Computer Science and Design Student passionate about creating innovative solutions 
              that bridge technology and design.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="p-2 bg-background rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110" aria-label={social.label}>
                  {social.icon}
                </a>)}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-lg mb-4 text-indigo-500 font-bold">
              Quick Links
            </h4>
            <nav className="space-y-3">
              {quickLinks.map((link, index) => <button key={index} onClick={() => scrollToSection(link.href)} className="block text-muted-foreground hover:text-primary transition-colors duration-300 text-left">
                  {link.name}
                </button>)}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h4 className="text-lg mb-4 text-indigo-500 font-bold">
              Get In Touch
            </h4>
            <div className="space-y-3 text-muted-foreground">
              <p>
                <strong className="text-indigo-500">Email:</strong><br />
                gobinath2702@gmail.com
              </p>
              <p>
                <strong className="text-indigo-500">Location:</strong><br />
                Tamil Nadu, Coimbatore, India
              </p>
              <p>
                <strong className="text-indigo-500">Education:</strong><br />
                SNS College of Engineering
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border/50">
          <div className="flex justify-center items-center">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>Powered by React and TypeScript</span>
              <span>•</span>
              <span>Designed by Gobinath </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;