import { useState } from "react";
import { Briefcase, Calendar, Building2, ExternalLink, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Experience = () => {
  const [selectedInternship, setSelectedInternship] = useState<number | null>(null);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

  const internships = [
    {
      title: "Software Developer Intern",
      company: "SNS Square · Internship",
      duration: "Jan 2026 - Present · 2 mos",
      location: "Coimbatore, Tamil Nadu, India · On-site",
      image: "/sns-ihub-logo.png",
      certificateImage: "",
      description: "Software Developer at SNS Square, contributing to the design and development of responsive applications. Working with modern technologies in a collaborative, project-driven environment to deliver scalable and user-focused solutions.",
      technologies: ["Software Development", "Collaborative Problem Solving"],
      achievements: [
        "Software Developer at SNS Square, contributing to the design and development of responsive applications.",
        "Working with modern technologies in a collaborative, project-driven environment to deliver scalable and user-focused solutions."
      ]
    },
    {
      title: "UI/UX Designer Intern",
      company: "Infotact Solutions · Internship",
      duration: "August 2025 - October 2025",
      location: "Remote",
      image: "/infotact-logo.png",
      certificateImage: "/infotact-internship-certificate.png",
      description: "Worked on UI/UX design and front-end development tasks, focusing on creating intuitive, user-friendly interfaces for web applications.",
      technologies: ["UI/UX", "Figma", "Front-End Development"],
      achievements: [
        "Designed clean and user-focused UI layouts aligned with usability principles.",
        "Assisted in front-end development to implement design concepts effectively.",
        "Collaborated with mentors to improve visual consistency and user experience.",
        "Gained hands-on experience in real-world UI/UX workflows and design thinking."
      ]
    },
    {
      title: "Python Developer Intern",
      company: "Alfido Tech · Internship",
      duration: "Jul 2025 – Aug 2025",
      location: "Remote",
      image: "/alfido-tech-logo.png",
      certificateImage: "/alfido-tech-internship-certificate.png",
      description: "Focused on Python programming fundamentals and problem-solving using Data Structures and Algorithms.",
      technologies: ["Python", "DSA"],
      achievements: [
        "Practiced Python programming concepts through hands-on tasks and exercises",
        "Improved problem-solving approach and coding discipline.",
        "Solved logical and algorithmic problems using basic data structures",
        "Completed internship requirements successfully and earned certification."
      ]
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className={`text-center mb-20 transition-all duration-500 ease-out ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent pb-2">
            My Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Internship experiences showcasing my journey of continuous learning and growth
          </p>
        </div>

        {/* Internships Section */}
        <div ref={cardsRef} className={`transition-all duration-500 ease-out ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-8 justify-center">
            <Briefcase className="h-8 w-8 text-accent" />
            <h3 className="text-3xl font-bold text-foreground">Internship Experience</h3>
          </div>
          <div className="space-y-6">
            {internships.map((internship, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden hover:shadow-elegant transition-all duration-500 border border-border/50 bg-card/50 backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none" />
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-[300px_1fr] gap-6">
                    <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden bg-white/95">
                      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-primary/5 to-transparent" />
                      {/* Vertical accent stripe */}
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-primary to-accent" />
                      <div className="p-6 h-full flex items-center justify-center">
                        <div className="relative w-full h-full flex items-center justify-center">
                          <img
                            src={internship.image}
                            alt={internship.company}
                            className="max-w-[80%] max-h-[80%] object-contain group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      </div>
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-accent text-accent-foreground shadow-accent">
                          Internship
                        </Badge>
                      </div>
                    </div>
                    <div className="p-6 md:py-6 md:pr-6 md:pl-0">
                      <h4 className="text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                        {internship.title}
                      </h4>
                      <div className="flex flex-col gap-2 mb-4">
                        <div className="flex items-center gap-2 text-accent font-medium">
                          <Building2 className="h-4 w-4" />
                          {internship.company}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {internship.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <ExternalLink className="h-4 w-4" />
                            {internship.location}
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {internship.description}
                      </p>
                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-foreground mb-2">Technologies Used:</h5>
                        <div className="flex flex-wrap gap-2">
                          {internship.technologies.map((tech, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-foreground mb-2">Key Achievements:</h5>
                        <ul className="space-y-1">
                          {internship.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      {internship.certificateImage && (
                        <Button
                          size="sm"
                          className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold transition-all duration-300"
                          onClick={() => setSelectedInternship(index)}
                        >
                          <Eye className="h-4 w-4" />
                          View Certificate
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Internship Modal */}
      <Dialog open={selectedInternship !== null} onOpenChange={() => setSelectedInternship(null)}>
        <DialogContent className="w-[calc(100%-2rem)] sm:w-full max-w-4xl max-h-[90vh] overflow-y-auto p-0">
          {selectedInternship !== null && (
            <div>
              <DialogTitle className="sr-only">
                {internships[selectedInternship].title}
              </DialogTitle>
              <DialogDescription className="sr-only">
                Internship details and information
              </DialogDescription>
              <div className="relative overflow-hidden bg-white">
                <img
                  src={internships[selectedInternship].certificateImage}
                  alt={`${internships[selectedInternship].title} Certificate`}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-foreground mb-3">
                  {internships[selectedInternship].title}
                </h3>
                <div className="flex items-center gap-2 text-lg text-accent font-medium mb-2">
                  <Building2 className="h-5 w-5" />
                  {internships[selectedInternship].company}
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {internships[selectedInternship].duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <ExternalLink className="h-4 w-4" />
                    {internships[selectedInternship].location}
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {internships[selectedInternship].description}
                </p>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {internships[selectedInternship].technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {internships[selectedInternship].achievements.map((achievement, idx) => (
                      <li key={idx} className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Experience;
