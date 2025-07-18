import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Hi, I'm{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Gobinath.G
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground mb-4">
              Computer Science and Design Student
            </p>
            
            <p className="text-lg text-muted-foreground mb-2">
              SNS College of Engineering
            </p>
            
            <p className="text-lg text-primary font-medium mb-8">
              "Designing solutions, developing impact."
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="group"
              >
                View My Work
                <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="group"
              >
                <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center lg:justify-start">
              <Button variant="ghost" size="icon" className="rounded-full hover:scale-110 transition-transform">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:scale-110 transition-transform">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:scale-110 transition-transform">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-20 animate-glow"></div>
              <img
                src={heroImage}
                alt="Gobinath.G"
                className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-elegant border-4 border-white"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => scrollToSection("about")}
          className="rounded-full"
        >
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;