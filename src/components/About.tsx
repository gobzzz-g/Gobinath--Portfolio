import { GraduationCap, Code, Palette, Users, Target, Heart, BookOpen, PenTool, Gamepad2, Share2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();
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
      <div ref={ref} className={isVisible ? 'animate-on-scroll' : 'opacity-0'}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
              Passionate about solving real-world problems through technology and empathetic design
            </p>
            <p className="text-sm italic text-primary font-medium">
              "Technology is most powerful when it makes complex things simple for everyone."
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
                    <span className="bg-gradient-primary bg-clip-text text-transparent">Problem-Driven Thinker, Solution-Focused Developer</span>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    I'm a B.E. Computer Science & Design student who builds AI-powered applications, and user-centered interfaces.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    My focus? Bridging the gap between complex backend logic and intuitive user experiences - making tech feel human, not intimidating.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    From hackathons to real-world projects, I thrive on turning ideas into scalable, impactful solutions.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-3 flex items-center">
                    <div className="p-1.5 bg-gradient-accent rounded-lg mr-2">
                      <Heart className="h-5 w-5 text-white" />
                    </div>
                    <span className="bg-gradient-accent bg-clip-text text-transparent">What I Bring to the Table</span>
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Full-stack development with React, TypeScript & modern frameworks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>AI/ML integration for intelligent automation & data insights</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Data processing and model integration for AI-driven applications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>UI/UX design with Figma—wireframes to polished interfaces</span>
                    </li>
                  </ul>
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
                    className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 cursor-pointer bg-card/80 backdrop-blur-sm border border-border/50 shadow-md hover:border-primary/30"
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

              {/* Beyond the Code - Personal Interests */}
              <div className="mt-8 animate-fade-in delay-200">
                <Card className="bg-card/50 backdrop-blur-sm border border-border/50 shadow-md">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                      <span className="w-1.5 h-6 bg-gradient-accent rounded-full mr-3"></span>
                      Beyond the Code
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors group">
                        <div className="p-2 bg-gradient-primary text-white rounded-lg group-hover:bg-gradient-accent transition-all duration-300">
                          <BookOpen className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground text-sm group-hover:text-primary transition-colors">Tech Blogging</p>
                          <p className="text-xs text-muted-foreground">Sharing insights</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors group">
                        <div className="p-2 bg-gradient-primary text-white rounded-lg group-hover:bg-gradient-accent transition-all duration-300">
                          <PenTool className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground text-sm group-hover:text-primary transition-colors">Design</p>
                          <p className="text-xs text-muted-foreground">Creative exploration</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors group">
                        <div className="p-2 bg-gradient-primary text-white rounded-lg group-hover:bg-gradient-accent transition-all duration-300">
                          <Gamepad2 className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground text-sm group-hover:text-primary transition-colors">Gaming</p>
                          <p className="text-xs text-muted-foreground">Strategic thinking</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors group">
                        <div className="p-2 bg-gradient-primary text-white rounded-lg group-hover:bg-gradient-accent transition-all duration-300">
                          <Share2 className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground text-sm group-hover:text-primary transition-colors">Open Source</p>
                          <p className="text-xs text-muted-foreground">Community contrib</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;