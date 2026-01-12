import { GraduationCap, Award, Briefcase, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            My journey, passion, and the story behind the code
          </p>
        </div>

        {/* Education Section - Larger and More Prominent */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="p-10 rounded-3xl bg-gradient-to-br from-primary/5 via-card to-accent/5 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 transition-all duration-500 animate-fade-in shadow-[0_8px_30px_rgb(232,180,247,0.15)] hover:shadow-[0_12px_40px_rgb(232,180,247,0.25)]">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white shadow-lg">
                <GraduationCap className="h-8 w-8" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Education
              </h3>
            </div>
            
            <div className="space-y-8">
              {/* Bachelor's Degree */}
              <div className="relative pl-6 border-l-2 border-primary/30">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50"></div>
                <div className="mb-2">
                  <h4 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                    B.Sc in Electronics and Telecommunication Engineering
                  </h4>
                  <p className="text-primary font-medium mb-3">2021 – Present</p>
                  <p className="text-lg font-bold text-foreground/90 mb-2">
                    Chittagong University of Engineering and Technology
                  </p>
                  <p className="text-muted-foreground">
                    <span className="font-semibold">GPA:</span> (blank) out of 4.00
                  </p>
                </div>
              </div>

              {/* HSC */}
              <div className="relative pl-6 border-l-2 border-primary/30">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent shadow-lg shadow-accent/50"></div>
                <div className="mb-2">
                  <h4 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                    Higher Secondary School Certificate (HSC)
                  </h4>
                  <p className="text-primary font-medium mb-3">2019 - 2021</p>
                  <p className="text-lg font-bold text-foreground/90 mb-2">
                    Chittagong Govt. Woman's College
                  </p>
                  <p className="text-muted-foreground">
                    <span className="font-semibold">GPA:</span> 5.00 out of 5.00
                  </p>
                </div>
              </div>

              {/* SSC */}
              <div className="relative pl-6 border-l-2 border-primary/30">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-secondary shadow-lg shadow-secondary/50"></div>
                <div className="mb-2">
                  <h4 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                    Secondary School Certificate (SSC)
                  </h4>
                  <p className="text-primary font-medium mb-3">2019</p>
                  <p className="text-lg font-bold text-foreground/90 mb-2">
                    Aunkur Society Girls' High School
                  </p>
                  <p className="text-muted-foreground">
                    <span className="font-semibold">GPA:</span> 5.00 out of 5.00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Research Interests and Leadership - Side by Side */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {[
            {
              icon: <Award className="h-8 w-8" />,
              title: "Research Interests",
              description: "AI/ML for Wireless Communication",
              details: "Cyber-Physical Systems & IoT Edge",
              gradient: "from-secondary to-primary"
            },
            {
              icon: <Briefcase className="h-8 w-8" />,
              title: "Leadership",
              description: "IEEE Student Branch Executive",
              details: "CUET Photographic Society Coordinator",
              gradient: "from-accent to-secondary"
            },
          ].map((item, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 backdrop-blur-sm hover:shadow-[0_8px_30px_rgb(232,180,247,0.12)] transition-all duration-500 animate-fade-in border border-border/50 hover:border-primary/30 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-5 text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground/90">{item.title}</h3>
              <p className="text-foreground mb-2 font-medium">{item.description}</p>
              <p className="text-sm text-muted-foreground">{item.details}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="p-10 rounded-3xl bg-gradient-to-br from-card via-card/80 to-muted/30 backdrop-blur-sm border border-border/50 animate-fade-in shadow-[0_8px_30px_rgb(232,180,247,0.1)]" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed text-center text-lg">
              Hi! I'm Rifah, a Level 3 ETE student at CUET who loves solving problems with tech. What drives me? 
              The challenge of turning complex problems into elegant solutions. Whether it's building circuits on a breadboard, 
              training ML models, or debugging why a controller misbehaves at 2 AM – I genuinely enjoy it all.
            </p>
            <p className="text-muted-foreground leading-relaxed text-center text-lg mt-4">
              Right now, I'm exploring AI/ML for wireless communication and IoT systems. There's something fascinating about 
              making devices smarter and more efficient. I'm still learning (aren't we all?), but that's what makes engineering 
              exciting – every project teaches me something new. When I'm not buried in MATLAB or breadboards, you'll find me 
              coordinating events with IEEE or capturing moments with CUET Photographic Society.
            </p>
            
            {/* Achievements Button */}
            <div className="text-center mt-8">
              <Button 
                onClick={() => navigate('/achievements')}
                className="group rounded-xl shadow-lg hover:shadow-xl transition-all duration-500"
                size="lg"
              >
                View My Achievements
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
