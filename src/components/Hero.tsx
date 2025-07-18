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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-card">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-primary rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-secondary rounded-full opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-accent rounded-full opacity-25 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-gradient-success rounded-full opacity-35 animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
                Gobinath.G
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground mb-4 font-medium">
              <span className="text-primary">Computer Science and Design Student</span>
            </p>
            
            <p className="text-lg text-muted-foreground mb-2 flex items-center justify-center lg:justify-start">
              <span className="w-2 h-2 bg-gradient-primary rounded-full mr-2 animate-pulse-color"></span>
              SNS College of Engineering
            </p>
            
            <p className="text-lg bg-gradient-accent bg-clip-text text-transparent font-semibold mb-8">
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
                className="group border-2 border-accent text-accent hover:bg-gradient-accent hover:text-white hover:border-accent font-semibold"
              >
                <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center lg:justify-start">
              <Button variant="ghost" size="icon" className="rounded-full hover:scale-110 transition-transform hover:bg-primary/10 hover:text-primary">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:scale-110 transition-transform hover:bg-accent/10 hover:text-accent">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:scale-110 transition-transform hover:bg-success/10 hover:text-success">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-hero rounded-full blur-3xl opacity-30 animate-glow"></div>
              <div className="absolute inset-2 bg-gradient-primary rounded-full blur-xl opacity-40"></div>
              <img
                src={heroImage}
                alt="Gobinath.G"
                className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-elegant border-4 border-white hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-success rounded-full animate-pulse-color"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-warning rounded-full animate-float"></div>
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