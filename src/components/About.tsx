import { GraduationCap, Code, Palette, Users, Target, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const skills = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Software Development",
      description: "Passionate about creating efficient and innovative solutions through code"
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "UI/UX Design",
      description: "Focused on user-centric design principles and creating intuitive interfaces"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Teamwork & Leadership",
      description: "Strong collaborative skills and experience leading project teams"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Problem Solving",
      description: "Analytical mindset with a passion for tackling complex technical challenges"
    }
  ];

  const education = {
    degree: "B.E. in Computer Science and Design",
    institution: "SNS College of Engineering",
    status: "Currently Pursuing",
    description: "Specializing in the intersection of computer science and design thinking"
  };

  return (
    <section id="about" className="py-20 bg-gradient-card relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-accent rounded-full opacity-10 -translate-y-20 translate-x-20"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-secondary rounded-full opacity-15 translate-y-16 -translate-x-16"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A passionate student exploring the fascinating world of technology, design, and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Personal Story */}
          <div className="animate-slide-in">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
                  <div className="p-2 bg-gradient-primary rounded-lg mr-3">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <span className="bg-gradient-primary bg-clip-text text-transparent">My Journey</span>
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  I'm an undergraduate student pursuing B.E. in Computer Science and Design at SNS College of Engineering. 
                  My academic journey has been driven by a deep fascination with how technology can be leveraged to create 
                  meaningful solutions that impact people's lives.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-foreground mb-3 flex items-center">
                  <div className="p-1.5 bg-gradient-accent rounded-lg mr-2">
                    <Heart className="h-5 w-5 text-white" />
                  </div>
                  <span className="bg-gradient-accent bg-clip-text text-transparent">What Drives Me</span>
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  I believe in the power of combining technical expertise with creative design thinking. 
                  My passion lies in developing innovative solutions that bridge the gap between complex technology 
                  and user-friendly experiences. Whether it's coding a new application or designing an intuitive interface, 
                  I strive to create work that is both technically sound and aesthetically pleasing.
                </p>
              </div>

              {/* Education Card */}
              <Card className="border-l-4 border-l-primary shadow-primary bg-gradient-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-2 flex items-center">
                    <span className="w-2 h-2 bg-gradient-primary rounded-full mr-2 animate-pulse-color"></span>
                    {education.degree}
                  </h4>
                  <p className="text-primary font-medium mb-1 bg-gradient-primary bg-clip-text text-transparent">
                    {education.institution}
                  </p>
                  <p className="text-sm text-success font-medium mb-3 flex items-center">
                    <span className="w-1.5 h-1.5 bg-success rounded-full mr-1.5"></span>
                    {education.status}
                  </p>
                  <p className="text-muted-foreground">
                    {education.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Skills & Attributes */}
          <div className="animate-slide-in relative z-10">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Core <span className="bg-gradient-accent bg-clip-text text-transparent">Strengths</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-primary transition-all duration-300 hover:-translate-y-2 cursor-pointer bg-gradient-card border-0"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 p-3 bg-gradient-primary rounded-lg text-white group-hover:bg-gradient-accent group-hover:scale-110 transition-all duration-300">
                        {skill.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">
                          {skill.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Personal Interests */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-foreground mb-4">
                Beyond Academics
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not immersed in code or design projects, I enjoy exploring new technologies, 
                participating in hackathons, and contributing to open-source projects. I'm also passionate 
                about staying updated with the latest trends in AI, IoT, and emerging technologies that 
                shape our digital future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;