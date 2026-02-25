import { useState } from "react";
import { Link } from "react-router-dom";
import { Trophy, Award, FileText, Star, Calendar, Users, Building2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Achievements = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { ref: skillsRef, isVisible: skillsVisible } = useScrollAnimation();
  const [selectedCertificate, setSelectedCertificate] = useState<number | null>(null);

  const achievements = [{
    title: "Innovation Project - AudioNest",
    organization: "Personal Project",
    type: "Technical Innovation",
    date: "2024",
    description: "Developed an innovative smart earbud system with obstacle detection capabilities, showcasing skills in IoT and embedded systems.",
    icon: <Trophy className="h-6 w-6" />,
    category: "Innovation",
    badge: "Featured",
    hasCertificate: false,
    certificateImage: "/placeholder.svg"
  }, {
    title: "INNOVATEX - 48 Hrs HACKATHON EVENT 2024 (OFFLINE)",
    organization: "Hackathon Participation",
    type: "Event Participation",
    date: "2025",
    description: "Secured 2nd Runner Up in the InnovateX Hackathon 2024, showcasing problem-solving skills and teamwork in a competitive environment.",
    icon: <Award className="h-6 w-6" />,
    category: "Technical",
    badge: "Certified",
    hasCertificate: true,
    certificateImage: "/innovatex-hackathon-certificate.png"
  }, {
    title: "Python Programming Certification",
    organization: "Professional Certification",
    type: "Technical Certification",
    date: "2025",
    description: "Successfully completed comprehensive Python programming certification at ByteXL , demonstrating proficiency in Python development and data analysis.",
    icon: <FileText className="h-6 w-6" />,

    category: "Technical",
    badge: "Certified",
    hasCertificate: true,
    certificateImage: "/python-bytexl-certificate.png"
  }, {
    title: "TAKSHAK - Management Maestro",
    organization: "Technical Event Participation",
    type: "Event Participation",
    date: "2024",
    description: "Participated in the prestigious TAKSHAK Management Maestro event, demonstrating leadership and management skills in a competitive environment.",
    icon: <Users className="h-6 w-6" />,
    category: "Leadership",
    badge: "Event",
    hasCertificate: true,
    certificateImage: "/takshak-event-certificate.png"
  }, {
    title: "Academic Excellence",
    organization: "SNS College of Engineering",
    type: "Academic Recognition",
    date: "Ongoing",
    description: "Consistent academic performance in Computer Science and Design program, maintaining high standards in coursework and projects.",
    icon: <Star className="h-6 w-6" />,
    category: "Academic",
    badge: "Excellence",
    hasCertificate: false,
    certificateImage: "/placeholder.svg"
  }];
  const skills = [{
    name: "Python",
    level: 90
  }, {
    name: "C++",
    level: 78
  }, {
    name: "Java",
    level: 80
  }, {
    name: "Figma",
    level: 85
  }, {
    name: "MySQL",
    level: 70
  }, {
    name: "React and Node js",
    level: 75

  }];
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Leadership":
        return "bg-blue-500/10 text-blue-600 border-blue-200";
      case "Technical":
        return "bg-green-500/10 text-green-600 border-green-200";
      case "Academic":
        return "bg-purple-500/10 text-purple-600 border-purple-200";
      case "Innovation":
        return "bg-orange-500/10 text-orange-600 border-orange-200";
      default:
        return "bg-gray-500/10 text-gray-600 border-gray-200";
    }
  };
  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "Event":
        return "bg-blue-500 text-white";
      case "Certified":
        return "bg-green-500 text-white";
      case "Excellence":
        return "bg-purple-500 text-white";
      case "Featured":
        return "bg-gradient-primary text-white";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };
  return <section id="achievements" className="py-20 bg-gradient-subtle">
    <div ref={ref} className={isVisible ? 'animate-on-scroll' : 'opacity-0'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-indigo-500">
            Achievements & Recognition
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of my academic achievements, certifications, and recognitions that highlight my journey and growth
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Achievements */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl mb-6 animate-slide-in text-indigo-500 font-bold">
              Major Achievements
            </h3>
            <div className="space-y-6">
              {achievements.map((achievement, index) => {
                // Alternating card styles for visual differentiation
                const isEven = index % 2 === 0;
                const cardStyles = isEven
                  ? "border-l-4 border-l-primary bg-gradient-to-r from-primary/5 to-transparent"
                  : "border-r-4 border-r-accent bg-gradient-to-l from-accent/5 to-transparent";

                return (
                  <Card
                    key={index}
                    className={`group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-scale-in border-0 shadow-card overflow-hidden ${cardStyles}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Decorative top accent bar */}
                    <div className={`h-1 w-full ${isEven ? 'bg-gradient-to-r from-primary via-primary/50 to-transparent' : 'bg-gradient-to-l from-accent via-accent/50 to-transparent'}`} />

                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4">
                          <div className={`p-3 rounded-lg transition-all duration-300 ${isEven
                            ? 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white group-hover:rotate-6 group-hover:scale-110'
                            : 'bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white group-hover:-rotate-6 group-hover:scale-110'}`}>
                            {achievement.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <CardTitle className={`text-lg font-bold text-foreground transition-colors ${isEven ? 'group-hover:text-primary' : 'group-hover:text-accent'}`}>
                                {achievement.title}
                              </CardTitle>
                              <Badge className={`${getBadgeColor(achievement.badge)} text-xs ml-2 shadow-sm`}>
                                {achievement.badge}
                              </Badge>
                            </div>
                            <p className={`text-sm font-medium ${isEven ? 'text-primary' : 'text-accent'}`}>
                              {achievement.organization}
                            </p>
                            <div className="flex items-center gap-4 mt-2">
                              <Badge variant="outline" className={`text-xs ${getCategoryColor(achievement.category)}`}>
                                {achievement.category}
                              </Badge>
                              <div className="flex items-center text-xs text-muted-foreground">
                                <Calendar className="h-3 w-3 mr-1" />
                                {achievement.date}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {achievement.description}
                      </p>
                      {achievement.hasCertificate && (
                        <Button
                          size="sm"
                          className="w-full gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold transition-all duration-300"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedCertificate(index);
                          }}
                        >
                          <FileText className="h-4 w-4" />
                          View Certificate
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Skills & Progress */}
          <div ref={skillsRef} className="animate-slide-in">
            <h3 className="text-2xl mb-6 font-bold text-indigo-500">
              Technical Skills
            </h3>
            <Card className="shadow-card border-0">
              <CardContent className="p-6">
                <div className="space-y-6">
                  {skills.map((skill, index) => <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div
                        className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: skillsVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 150}ms`
                        }}
                      ></div>
                    </div>
                  </div>)}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <Card className="text-center p-4 shadow-card border-0">
                <div className="text-2xl font-bold text-primary">4+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </Card>
              <Card className="text-center p-4 shadow-card border-0">
                <div className="text-2xl font-bold text-primary">12+</div>
                <div className="text-sm text-muted-foreground">Certifications</div>
              </Card>
            </div>

            {/* My Experience Section */}
            <div className="mt-8">
              <Card className="text-center p-6 shadow-card border-0 bg-card/50">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">My Certifications</h3>
                <p className="text-sm text-muted-foreground mb-4 px-2">
                  Explore my professional certifications which highlighting my skills and continuous learning
                </p>
                <Link to="/experience">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold">
                    Explore Certificates
                  </Button>
                </Link>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Certificate Modal */}
    <Dialog open={selectedCertificate !== null} onOpenChange={() => setSelectedCertificate(null)}>
      <DialogContent className="w-[calc(100%-2rem)] sm:w-full max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        {selectedCertificate !== null && (
          <div>
            <DialogTitle className="sr-only">
              {achievements[selectedCertificate].title}
            </DialogTitle>
            <DialogDescription className="sr-only">
              Certificate details and information
            </DialogDescription>
            <div className="relative overflow-hidden bg-white">
              <img
                src={achievements[selectedCertificate].certificateImage}
                alt={achievements[selectedCertificate].title}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-3xl font-bold text-foreground mb-3">
                {achievements[selectedCertificate].title}
              </h3>
              <div className="flex items-center gap-2 text-lg text-primary font-medium mb-2">
                <Building2 className="h-5 w-5" />
                {achievements[selectedCertificate].organization}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Calendar className="h-4 w-4" />
                {achievements[selectedCertificate].date}
              </div>
              <div className="mb-4">
                <Badge variant="outline" className={`text-sm ${getCategoryColor(achievements[selectedCertificate].category)}`}>
                  {achievements[selectedCertificate].category}
                </Badge>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {achievements[selectedCertificate].description}
              </p>
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3">Type:</h4>
                <Badge className={`${getBadgeColor(achievements[selectedCertificate].badge)}`}>
                  {achievements[selectedCertificate].badge}
                </Badge>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  </section>;
};
export default Achievements;