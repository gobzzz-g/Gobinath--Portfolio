import { Trophy, Award, FileText, Star, Calendar, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Achievements = () => {
  const achievements = [
    {
      title: "TAKSHAK - Management Maestro",
      organization: "Technical Event Participation",
      type: "Event Participation",
      date: "2024",
      description: "Participated in the prestigious TAKSHAK Management Maestro event, demonstrating leadership and management skills in a competitive environment.",
      icon: <Users className="h-6 w-6" />,
      category: "Leadership",
      badge: "Event"
    },
    {
      title: "SQL Programming Certification",
      organization: "Professional Certification",
      type: "Technical Certification",
      date: "2024",
      description: "Successfully completed comprehensive SQL programming certification, demonstrating proficiency in database management and query optimization.",
      icon: <FileText className="h-6 w-6" />,
      category: "Technical",
      badge: "Certified"
    },
    {
      title: "Academic Excellence",
      organization: "SNS College of Engineering",
      type: "Academic Recognition",
      date: "Ongoing",
      description: "Consistent academic performance in Computer Science and Design program, maintaining high standards in coursework and projects.",
      icon: <Star className="h-6 w-6" />,
      category: "Academic",
      badge: "Excellence"
    },
    {
      title: "Innovation Project - AudioNest",
      organization: "Personal Project",
      type: "Technical Innovation",
      date: "2024",
      description: "Developed an innovative smart earbud system with obstacle detection capabilities, showcasing skills in IoT and embedded systems.",
      icon: <Trophy className="h-6 w-6" />,
      category: "Innovation",
      badge: "Featured"
    }
  ];

  const skills = [
    { name: "JavaScript", level: 85 },
    { name: "Python", level: 80 },
    { name: "React", level: 75 },
    { name: "UI/UX Design", level: 70 },
    { name: "SQL", level: 85 },
    { name: "IoT Development", level: 65 }
  ];

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

  return (
    <section id="achievements" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Achievements & Recognition
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of my academic achievements, certifications, and recognitions that highlight my journey and growth
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Achievements */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold text-foreground mb-6 animate-slide-in">
              Major Achievements
            </h3>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <Card 
                  key={index}
                  className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-scale-in border-0 shadow-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                          {achievement.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                              {achievement.title}
                            </CardTitle>
                            <Badge className={`${getBadgeColor(achievement.badge)} text-xs ml-2`}>
                              {achievement.badge}
                            </Badge>
                          </div>
                          <p className="text-sm text-primary font-medium">
                            {achievement.organization}
                          </p>
                          <div className="flex items-center gap-4 mt-2">
                            <Badge 
                              variant="outline" 
                              className={`text-xs ${getCategoryColor(achievement.category)}`}
                            >
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
                    <p className="text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Skills & Progress */}
          <div className="animate-slide-in">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Technical Skills
            </h3>
            <Card className="shadow-card border-0">
              <CardContent className="p-6">
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
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
                            width: `${skill.level}%`,
                            animationDelay: `${index * 0.2}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
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
                <div className="text-2xl font-bold text-primary">2+</div>
                <div className="text-sm text-muted-foreground">Certifications</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;