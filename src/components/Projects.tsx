import { ExternalLink, Github, Headphones, Code, Smartphone, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "AudioNest",
      description: "An innovative smart earbud project integrating obstacle detection using advanced sensors and premium voice outputs. Features real-time environmental awareness and seamless audio experience.",
      technologies: ["IoT", "Sensors", "Audio Processing", "Embedded Systems", "Arduino"],
      icon: <Headphones className="h-8 w-8" />,
      category: "IoT & Hardware",
      status: "Featured Project",
      links: {
        github: "#",
        demo: "#"
      },
      highlights: [
        "Real-time obstacle detection",
        "Premium audio quality",
        "Smart sensor integration",
        "User-friendly interface"
      ]
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive personal portfolio website built with React and TypeScript. Features smooth animations, dark mode support, and optimized performance.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
      icon: <Code className="h-8 w-8" />,
      category: "Web Development",
      status: "Live",
      links: {
        github: "#",
        demo: "#"
      },
      highlights: [
        "Responsive design",
        "Smooth animations",
        "Modern UI/UX",
        "Performance optimized"
      ]
    },
    {
      title: "Mobile App Concept",
      description: "A conceptual mobile application focusing on user experience and intuitive design. Demonstrates proficiency in mobile UI/UX principles and modern design patterns.",
      technologies: ["Figma", "UI/UX Design", "Prototyping", "User Research"],
      icon: <Smartphone className="h-8 w-8" />,
      category: "UI/UX Design",
      status: "Design Phase",
      links: {
        github: "#",
        demo: "#"
      },
      highlights: [
        "User-centered design",
        "Interactive prototypes",
        "Design system",
        "Accessibility focused"
      ]
    },
    {
      title: "AI Learning Assistant",
      description: "An intelligent learning companion application that uses machine learning to personalize educational content and provide adaptive learning experiences.",
      technologies: ["Python", "Machine Learning", "TensorFlow", "Flask", "AI"],
      icon: <Brain className="h-8 w-8" />,
      category: "AI/ML",
      status: "In Development",
      links: {
        github: "#",
        demo: "#"
      },
      highlights: [
        "Personalized learning",
        "ML algorithms",
        "Adaptive content",
        "Progress tracking"
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Featured Project":
        return "bg-gradient-primary text-white";
      case "Live":
        return "bg-green-500 text-white";
      case "In Development":
        return "bg-yellow-500 text-white";
      case "Design Phase":
        return "bg-purple-500 text-white";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <section id="projects" className="py-20 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-gradient-secondary rounded-full opacity-10"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-primary rounded-full opacity-10"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-accent rounded-full opacity-15"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical projects and creative solutions that demonstrate my skills in software development, design, and innovation
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group hover:shadow-glow transition-all duration-500 hover:-translate-y-3 border-0 shadow-primary bg-gradient-card animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-gradient-primary rounded-lg text-white group-hover:bg-gradient-accent group-hover:scale-110 transition-all duration-300">
                      {project.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-foreground group-hover:bg-gradient-primary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {project.title}
                      </CardTitle>
                      <p className="text-sm bg-gradient-accent bg-clip-text text-transparent font-medium">
                        {project.category}
                      </p>
                    </div>
                  </div>
                  <Badge className={`${getStatusColor(project.status)} text-xs font-medium`}>
                    {project.status}
                  </Badge>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Highlights */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center">
                    <span className="w-2 h-2 bg-gradient-primary rounded-full mr-2"></span>
                    Key Features
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
                        <div className="w-1.5 h-1.5 bg-gradient-accent rounded-full mr-2 animate-pulse-color"></div>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center">
                    <span className="w-2 h-2 bg-gradient-secondary rounded-full mr-2"></span>
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary" 
                        className="text-xs hover:bg-gradient-primary hover:text-white hover:scale-105 transition-all duration-300 cursor-default"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 group/btn hover:bg-gradient-primary hover:text-white hover:border-primary"
                  >
                    <Github className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                    Code
                  </Button>
                  <Button 
                    variant="default" 
                    size="sm" 
                    className="flex-1 group/btn bg-gradient-accent hover:bg-gradient-primary hover:scale-105"
                  >
                    <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-muted-foreground mb-6">
            Interested in collaborating or want to see more of my work?
          </p>
          <Button variant="hero" size="lg" className="group">
            <Github className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;