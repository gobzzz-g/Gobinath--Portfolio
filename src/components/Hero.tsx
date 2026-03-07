import { ArrowDown, Download, Github, Linkedin, Mail, Instagram, Brain, Code, Cpu, Database, Sparkles, Zap, Palette, Globe, Terminal, Layers, Code2, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePicture from "@/assets/profile-picture.jpg";

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
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-primary rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-secondary rounded-full opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-accent rounded-full opacity-25 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-gradient-success rounded-full opacity-35 animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-12rem)]">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in mt-6 lg:mt-8 flex flex-col items-center lg:items-start">
            {/* Enhanced intro section with decorative elements */}
            <div className="relative inline-block mb-4">
              <span className="text-lg font-medium text-muted-foreground tracking-widest uppercase animate-fade-in" style={{ animationDelay: '0.2s' }}>
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="block text-foreground mb-2 drop-shadow-[0_0_15px_hsl(var(--primary)/0.3)]">
                Hi, I'm
              </span>
              <span className="relative inline-block">
                {/* Name with enhanced gradient and glow */}
                <span className="relative bg-gradient-hero bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto] drop-shadow-[0_0_25px_hsl(var(--primary)/0.5)]">
                  Gobinath
                </span>
              </span>
            </h1>
            
            {/* Role badge with enhanced styling */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 backdrop-blur-sm">
              <p className="text-sm sm:text-base font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Computer Science and Design Student
              </p>
            </div>
            
            <p className="text-lg text-muted-foreground mb-3 flex items-center justify-center lg:justify-start gap-2">
                <span className="w-2 h-2 bg-success rounded-full animate-pulse-color"></span>
              <span className="font-medium">SNS College of Engineering</span>
            </p>
            
            {/* Tagline with quote styling */}
            <div className="relative inline-block pl-4 border-l-4 border-accent/50 mb-6">
              <p className="text-lg bg-gradient-accent bg-clip-text text-transparent font-semibold">
                "Building AI-Powered Solutions & Intuitive User Experiences"
              </p>
            </div>

            {/* Currently Building Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-primary/10 border border-primary/20 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-medium text-primary">Currently Building:</span>
              <span className="text-sm text-foreground font-semibold">LoanKit AI – AI Loan Management System</span>
            </div>
            
            {/* Animated skill badges */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
              {[
                { icon: Code, label: "React", color: "primary" },
                { icon: Palette, label: "UI/UX", color: "accent" },
                { icon: Brain, label: "AI/ML", color: "success" },
                { icon: Terminal, label: "Python", color: "warning" },
                { icon: Code2, label: "Java", color: "warning" },
                { icon: Globe, label: "Web Dev", color: "primary" },
                { icon: Database, label: "DSA", color: "success" },
                { icon: Layers, label: "Figma", color: "accent" },
              ].map((skill, index) => (
                <div
                  key={skill.label}
                  className={`group flex items-center gap-2 px-3 py-1.5 rounded-full bg-${skill.color}/10 border border-${skill.color}/30 hover:bg-${skill.color}/20 hover:border-${skill.color}/50 transition-all duration-300 hover:scale-105 cursor-default animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <skill.icon className={`w-4 h-4 text-${skill.color} group-hover:rotate-12 transition-transform duration-300`} />
                  <span className={`text-sm font-medium text-${skill.color}`}>{skill.label}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 w-full max-w-md lg:max-w-none">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="group w-full sm:w-auto"
              >
                View My Works
                <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </Button>
              
              <a 
                href="https://drive.google.com/file/d/1B0Br2yoW7JPVYIhbj1QBgKdd6XXCnp-k/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline" 
                  size="lg"
                  className="group border-2 border-accent text-accent hover:bg-gradient-accent hover:text-white hover:border-accent font-semibold w-full"
                >
                  <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Download CV
                </Button>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center lg:justify-start">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => window.open("https://github.com/gobzzz-g", "_blank")}
                className="rounded-full hover:scale-110 transition-transform hover:bg-primary/10 hover:text-primary"
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => window.open("https://www.linkedin.com/in/gobinath-g-75b56832a/", "_blank")}
                className="rounded-full hover:scale-110 transition-transform hover:bg-accent/10 hover:text-accent"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => window.open("https://www.instagram.com/__gobzz_/", "_blank")}
                className="rounded-full hover:scale-110 transition-transform hover:bg-accent/10 hover:text-accent"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => scrollToSection("contact")}
                className="rounded-full hover:scale-110 transition-transform hover:bg-success/10 hover:text-success"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex flex-col items-center justify-center animate-scale-in gap-16">
            <div className="relative group">
              {/* Outer glow effects */}
              <div className="absolute inset-0 bg-gradient-hero rounded-full blur-3xl opacity-30 animate-glow"></div>
              <div className="absolute inset-2 bg-gradient-primary rounded-full blur-xl opacity-40"></div>
              
              {/* Rotating ring decorations */}
              <div className="absolute -inset-4 rounded-full border-2 border-dashed border-primary/30 animate-[spin_30s_linear_infinite]"></div>
              <div className="absolute -inset-8 rounded-full border border-accent/20 animate-[spin_30s_linear_infinite_reverse]"></div>
              
              {/* First orbit - closer to photo with more icons */}
              <div className="absolute -inset-6 animate-[spin_30s_linear_infinite_reverse]">
                <div className="absolute top-1/4 left-0 -translate-x-1/2 w-8 h-8 rounded-full bg-primary/15 backdrop-blur-sm border border-primary/30 flex items-center justify-center shadow-md">
                  <Sparkles className="w-4 h-4 text-primary" />
                </div>
                <div className="absolute bottom-1/4 right-0 translate-x-1/2 w-8 h-8 rounded-full bg-accent/15 backdrop-blur-sm border border-accent/30 flex items-center justify-center shadow-md">
                  <Zap className="w-4 h-4 text-accent" />
                </div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-success/15 backdrop-blur-sm border border-success/30 flex items-center justify-center shadow-md">
                  <Code className="w-4 h-4 text-success" />
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-8 h-8 rounded-full bg-warning/15 backdrop-blur-sm border border-warning/30 flex items-center justify-center shadow-md">
                  <Database className="w-4 h-4 text-warning" />
                </div>
                <div className="absolute top-[15%] left-[15%] -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-success/15 backdrop-blur-sm border border-success/30 flex items-center justify-center shadow-md">
                  <Terminal className="w-4 h-4 text-success" />
                </div>
                <div className="absolute top-[15%] right-[15%] translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary/15 backdrop-blur-sm border border-primary/30 flex items-center justify-center shadow-md">
                  <Wand2 className="w-4 h-4 text-primary" />
                </div>
                <div className="absolute bottom-[15%] left-[15%] -translate-x-1/2 translate-y-1/2 w-8 h-8 rounded-full bg-accent/15 backdrop-blur-sm border border-accent/30 flex items-center justify-center shadow-md">
                  <Layers className="w-4 h-4 text-accent" />
                </div>
                <div className="absolute bottom-[15%] right-[15%] translate-x-1/2 translate-y-1/2 w-8 h-8 rounded-full bg-warning/15 backdrop-blur-sm border border-warning/30 flex items-center justify-center shadow-md">
                  <Code2 className="w-4 h-4 text-warning" />
                </div>
              </div>
              
              {/* Second orbit - farther from photo with main tech icons */}
              <div className="absolute -inset-12 animate-[spin_30s_linear_infinite]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/40 flex items-center justify-center shadow-lg">
                  <Brain className="w-5 h-5 text-primary" />
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-10 h-10 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/40 flex items-center justify-center shadow-lg">
                  <Cpu className="w-5 h-5 text-accent" />
                </div>
                <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-success/20 backdrop-blur-sm border border-success/40 flex items-center justify-center shadow-lg">
                  <Globe className="w-5 h-5 text-success" />
                </div>
                <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-warning/20 backdrop-blur-sm border border-warning/40 flex items-center justify-center shadow-lg">
                  <Palette className="w-5 h-5 text-warning" />
                </div>
              </div>
              
              {/* Corner accent elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 border-t-3 border-l-3 border-primary/50 rounded-tl-2xl"></div>
              <div className="absolute -top-6 -right-6 w-12 h-12 border-t-3 border-r-3 border-accent/50 rounded-tr-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 border-b-3 border-l-3 border-accent/50 rounded-bl-2xl"></div>
              <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-3 border-r-3 border-primary/50 rounded-br-2xl"></div>
              
              {/* Main image container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full p-1 bg-gradient-to-br from-primary via-accent to-primary">
                <div className="w-full h-full rounded-full overflow-hidden bg-background p-1">
                  <img
                    src={profilePicture}
                    alt="Gobinath.G"
                    className="w-full h-full object-cover rounded-full shadow-elegant group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-success rounded-full animate-pulse-color shadow-lg"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-warning rounded-full animate-float shadow-lg"></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-gradient-primary rounded-full animate-bounce shadow-md"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-gradient-accent rounded-full animate-bounce shadow-md" style={{ animationDelay: '0.5s' }}></div>
            </div>
            
            {/* Scroll indicator with enhanced animation */}
            <div className="animate-[bounce_2s_ease-in-out_infinite]">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => scrollToSection("about")}
                className="rounded-full hover:bg-primary/10 transition-all duration-300 group relative"
              >
                <ArrowDown className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                {/* Subtle pulse ring effect */}
                <span className="absolute inset-0 rounded-full bg-primary/20 opacity-0 group-hover:opacity-100 animate-ping"></span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;