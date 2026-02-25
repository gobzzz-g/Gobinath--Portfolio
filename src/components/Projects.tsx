import { ExternalLink, Github, Headphones, Code, Smartphone, Brain, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();
  const projects = [
    {
      title: "LoanKit AI",
      description:
        "A revolutionary AI-driven loan management system that automates risk assessment and document processing using advanced Generative AI model.",
      technologies: ["React", "TypeScript", "Vite", "Firebase", "GenAI"],
      icon: <Brain className="h-8 w-8" />,
      category: "Gen AI",
      status: "In Development",
      links: {
        github: "https://github.com/gobzzz-g/LoanKit-AI",
        demo: "https://loankit-ai-demo.web.app",
      },
      highlights: [
        "Automated Risk Profiling",
        "Smart Document Analysis",
        "Instant Loan Approval",
        "Secure & Scalable",
      ],
    },
    {
      title: "AudioNest",
      description:
        "An innovative smart earbud project integrating obstacle detection using advanced sensors and premium voice outputs. Features real-time environmental awareness and seamless audio experience.",
      technologies: ["IoT", "Sensors", "Audio Processing", "Embedded Systems", "Arduino"],
      icon: <Headphones className="h-8 w-8" />,
      category: "Software and IoT",
      status: "Featured Project",
      links: {
        github: "https://github.com/gobzzz-g/AudioNest",
        demo: "https://drive.google.com/drive/folders/12N-NIjWqvQO8PJVyBhR4UH17h_Q1R-uO?usp=sharing",
      },
      highlights: [
        "Real-time obstacle detection",
        "Premium audio quality",
        "Smart sensor integration",
        "User-friendly interface",
      ],
    },
    {
      title: "Streamlit Website",
      description:
        "A modern, responsive personal Streamlit website built with React and TypeScript. Features smooth animations, dark mode support, and optimized performance.",
      technologies: ["Python", "Streamlit", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
      icon: <Code className="h-8 w-8" />,
      category: "Web Development",
      status: "Live",
      links: {
        github: "https://github.com/gobzzz-g/Streamlit-Living_Simulator_for_Mars",
        demo: "https://streamlit-portfolio.vercel.app/",
      },
      highlights: [
        "Responsive design",
        "Smooth animations",
        "Modern UI/UX",
        "Performance optimized",
      ],
    },
    {
      title: "Mobile App Concept",
      description:
        "A conceptual mobile application focusing on user experience and intuitive design. Demonstrates proficiency in mobile UI/UX principles and modern design patterns.",
      technologies: ["Figma", "UI/UX Design", "Prototyping", "User Research"],
      icon: <Smartphone className="h-8 w-8" />,
      category: "UI/UX Design",
      status: "Design Phase",
      links: {
        github: "https://github.com/gobzzz-g/Mobile-Application-PlayHub",
        demo: "https://mobileappconcept-demo.vercel.app/",
      },
      highlights: [
        "User-centered design",
        "Interactive prototypes",
        "Design system",
        "Accessibility focused",
      ],
    },
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
      <div ref={ref} className={isVisible ? 'animate-on-scroll' : 'opacity-0'}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my technical projects and creative solutions that demonstrate my skills in software development, design, and innovation.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-glow transition-all duration-500 hover:-translate-y-3 border-0 shadow-primary [background:var(--gradient-card)] animate-scale-in"
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

                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
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
                        <div
                          key={idx}
                          className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
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
                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <Button
                      variant="outline"
                      size="default"
                      onClick={() => window.open(project.links.github, "_blank")}
                      className="flex-1 bg-transparent border-blue-600/80 text-blue-500 hover:bg-blue-600/10 hover:border-blue-500 hover:text-blue-400 group/btn transition-all duration-300"
                    >
                      <Github className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                      Code
                    </Button>

                    <Button
                      variant="default"
                      size="default"
                      onClick={() => window.open(project.links.demo, "_blank")}
                      className="flex-1 bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white border-0 shadow-lg shadow-purple-500/20 group/btn transition-all duration-300"
                    >
                      {project.title === "AudioNest" ? (
                        <>
                          <Download className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                          Download App
                        </>
                      ) : (
                        <>
                          <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                          Live Demo
                        </>
                      )}
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
            <Button
              variant="hero"
              size="lg"
              className="group"
              onClick={() => window.open("https://github.com/gobzzz-g", "_blank")}
            >
              <Github className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
