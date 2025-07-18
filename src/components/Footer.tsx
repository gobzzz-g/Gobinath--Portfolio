import { Heart, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/gobinath-g",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com/in/gobinath-g",
      label: "LinkedIn"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:gobinath.g@email.com",
      label: "Email"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-subtle border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Gobinath.G
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Computer Science and Design Student passionate about creating innovative solutions 
              that bridge technology and design.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <nav className="space-y-3">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300 text-left"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Get In Touch
            </h4>
            <div className="space-y-3 text-muted-foreground">
              <p>
                <strong className="text-foreground">Email:</strong><br />
                gobinath.g@email.com
              </p>
              <p>
                <strong className="text-foreground">Location:</strong><br />
                Tamil Nadu, India
              </p>
              <p>
                <strong className="text-foreground">Education:</strong><br />
                SNS College of Engineering
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center text-muted-foreground">
              <span>© {currentYear} Gobinath.G. Made with</span>
              <Heart className="h-4 w-4 mx-1 text-red-500 animate-pulse" />
              <span>and lots of ☕</span>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>Built with React + TypeScript</span>
              <span>•</span>
              <span>Designed for impact</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;