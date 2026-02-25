import { useState, useEffect } from "react";
import { Award, Calendar, Building2, ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";

const ExperiencePage = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Experience - Gobinath.dev";
    window.scrollTo(0, 0); // Scroll to top when page loads
    return () => {
      document.title = "Gobinath.dev - Portfolio";
    };
  }, []);

  const certificates = [
    {
      title: "Artificial Intelligence Fundamentals",
      issuer: "IBM SkillsBuild",
      date: "August 18, 2025",
      image: "/ai-fundamentals-ibm-certificate.png",
      description: "Successfully completed comprehensive AI Fundamentals certification, demonstrating commitment to achieve professional excellence in artificial intelligence concepts and applications.",
      skills: ["AI Fundamentals", "Machine Learning Basics", "IBM SkillsBuild"],
    },
    {
      title: "Databricks Accredited Generative AI Fundamentals",
      issuer: "Databricks Academy",
      date: "October 13, 2025",
      image: "/databricks-genai-certificate.png",
      description: "Successfully completed the requirements to obtain Databricks Academy Accreditation in Generative AI Fundamentals, demonstrating proficiency in generative AI concepts and applications.",
      skills: ["Generative AI", "Databricks", "AI Fundamentals"],
    },
    {
      title: "MongoDB and AI Fundamentals - ICT Academy Learnathon 2025",
      issuer: "ICT Academy & MongoDB, Inc",
      date: "October 24, 2025",
      image: "/mongodb-ict-certificate.png",
      description: "Successfully completed MongoDB and AI Fundamentals course offered by ICT Academy Learnathon 2025, demonstrating proficiency in database management and AI integration.",
      skills: ["MongoDB", "AI Fundamentals", "Database Management"],
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      issuer: "Oracle University",
      date: "August 20, 2025",
      image: "/oracle-ai-foundations-certificate.png",
      description: "Recognized by Oracle Corporation as Oracle Certified Foundations Associate. This certificate validates knowledge in Oracle Cloud Infrastructure AI Foundations. Valid until August 20, 2027.",
      skills: ["Oracle Cloud", "AI Foundations", "Cloud Infrastructure"],
    },
  ];

  return (
    <div className="min-h-screen bg-background/95 relative">
      <ParticleBackground />
      <div className="relative z-10">
        <Navigation />
        
        <main className="pt-24 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back Button */}
            <div className="mb-8 animate-fade-in">
              <Link to="/">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 hover:bg-primary/10 hover:border-primary transition-all duration-300"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
            </div>

            {/* Header */}
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent pb-2">
                My Certifications
              </h1>
              <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
                Explore my professional Certifications
              </p>
            </div>

            {/* Certificates Section */}
            <section className="mb-20">
              <div className="flex items-center gap-3 mb-8">
                <Award className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold text-foreground">Professional Certificates</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
                {certificates.map((cert, index) => (
                  <Card
                    key={index}
                    className="group relative overflow-hidden hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 cursor-pointer border border-border/50 bg-card/50 backdrop-blur-sm"
                    onClick={() => setSelectedCertificate(index)}
                  >
                    <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                    <CardContent className="p-0">
                      <div className="aspect-[4/3] relative overflow-hidden bg-gradient-subtle p-6 flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
                        <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-primary/40 rounded-tl-lg" />
                        <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-primary/40 rounded-tr-lg" />
                        <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-primary/40 rounded-bl-lg" />
                        <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-primary/40 rounded-br-lg" />
                        <div className="relative w-[85%] h-[85%] rounded-xl overflow-hidden shadow-elegant ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-500">
                          <img
                            src={cert.image}
                            alt={cert.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-primary text-primary-foreground shadow-primary">
                            Certified
                          </Badge>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {cert.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-primary font-medium mb-3">
                          <Building2 className="h-4 w-4" />
                          {cert.issuer}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-foreground/60 mb-4">
                          <Calendar className="h-3 w-3" />
                          {cert.date}
                        </div>
                        <p className="text-sm text-foreground/70 mb-4 leading-relaxed">
                          {cert.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        </main>

        <Footer />
      </div>

      {/* Certificate Modal */}
      <Dialog open={selectedCertificate !== null} onOpenChange={() => setSelectedCertificate(null)}>
        <DialogContent className="w-[calc(100%-2rem)] sm:w-full max-w-3xl max-h-[90vh] overflow-y-auto p-0">
          {selectedCertificate !== null && (
            <div>
              <DialogTitle className="sr-only">
                {certificates[selectedCertificate].title}
              </DialogTitle>
              <DialogDescription className="sr-only">
                Certificate details and information
              </DialogDescription>
              <div className="relative overflow-hidden bg-white">
                <img
                  src={certificates[selectedCertificate].image}
                  alt={certificates[selectedCertificate].title}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-foreground mb-3">
                  {certificates[selectedCertificate].title}
                </h3>
                <div className="flex items-center gap-2 text-lg text-primary font-medium mb-2">
                  <Building2 className="h-5 w-5" />
                  {certificates[selectedCertificate].issuer}
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground/70 mb-6">
                  <Calendar className="h-4 w-4" />
                  {certificates[selectedCertificate].date}
                </div>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  {certificates[selectedCertificate].description}
                </p>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">Skills Covered:</h4>
                  <div className="flex flex-wrap gap-2">
                    {certificates[selectedCertificate].skills.map((skill, idx) => (
                      <Badge key={idx} variant="outline" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ExperiencePage;
