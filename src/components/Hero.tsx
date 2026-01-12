import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowRight, Download, Eye } from "lucide-react";
import profilePhoto from "@/assets/rifah.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCVPreview = () => {
    window.open('/Rifah_Sanjida_CV.pdf', '_blank');
  };

  const handleCVDownload = () => {
    const link = document.createElement('a');
    link.href = '/Rifah_Sanjida_CV.pdf';
    link.download = 'Rifah_Sanjida_CV.pdf';
    link.click();
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Soft Gradient Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'var(--gradient-hero)',
        }}
      >
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-left space-y-8 animate-fade-in">
            <div className="space-y-5">
              <div className="inline-block">
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-gradient">
                  Hi, I'm Rifah
                </h1>
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground/90">
                Electronics & Telecommunication Engineering Student
              </h2>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Level 3 student at CUET who loves building things and solving problems. From circuits to code, 
                I'm always learning something new. Currently exploring AI/ML in wireless systems and IoT. 
                Always learning, always building.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('#projects')}
                className="group shadow-lg hover:shadow-xl transition-all duration-300"
                aria-label="View my engineering projects"
              >
                View Projects
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => scrollToSection('#contact')}
                className="border-2 hover:bg-primary/10 transition-all duration-300"
                aria-label="Get in touch with me"
              >
                Get in Touch
              </Button>
              <Button 
                size="lg" 
                variant="secondary" 
                onClick={handleCVPreview}
                className="group shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0"
                aria-label="Preview my CV in new tab"
              >
                <Eye className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Preview CV
              </Button>
              <Button 
                size="lg" 
                variant="default" 
                onClick={handleCVDownload}
                className="group shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600"
                aria-label="Download my CV as PDF"
              >
                <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Download CV
              </Button>
            </div>

            <div className="flex gap-4">
              <a 
                href="https://github.com/RifahSanjida" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-card/80 backdrop-blur-sm hover:bg-gradient-to-br hover:from-primary hover:to-accent hover:text-primary-foreground transition-all duration-500 hover:scale-110 shadow-soft"
                aria-label="Visit my GitHub profile"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://linkedin.com/in/rifah-sanjida-2691b9266" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-card/80 backdrop-blur-sm hover:bg-gradient-to-br hover:from-secondary hover:to-primary hover:text-primary-foreground transition-all duration-500 hover:scale-110 shadow-soft"
                aria-label="Connect with me on LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="mailto:rifahctg20@gmail.com"
                className="p-3 rounded-2xl bg-card/80 backdrop-blur-sm hover:bg-gradient-to-br hover:from-accent hover:to-secondary hover:text-primary-foreground transition-all duration-500 hover:scale-110 shadow-soft"
                aria-label="Send me an email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="relative flex justify-center items-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Decorative elements - softer, more elegant */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary rounded-full blur-3xl opacity-25 animate-pulse" style={{ animationDuration: '4s' }} />
              <div className="absolute -top-6 -right-6 w-72 h-72 bg-primary/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s', animationDuration: '5s' }} />
              <div className="absolute -bottom-6 -left-6 w-72 h-72 bg-secondary/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s', animationDuration: '6s' }} />
              
              {/* Profile Image with elegant border */}
              <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-8 border-background shadow-[0_0_60px_rgba(232,180,247,0.3)] hover:shadow-[0_0_80px_rgba(232,180,247,0.4)] transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 mix-blend-overlay" />
                <img 
                  src={profilePhoto} 
                  alt="Rifah Sanjida - Electronics and Telecommunication Engineering student at CUET" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - softer design */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/40 bg-background/50 backdrop-blur-sm flex justify-center p-2 shadow-soft">
          <div className="w-1 h-3 bg-gradient-to-b from-primary to-secondary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
