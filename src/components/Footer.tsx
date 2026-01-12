import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-background to-muted/30 border-t border-border/50 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Rifah's Portfolio
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Electronics & Telecommunication Engineering student passionate about AI/ML, wireless communication, and IoT innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 text-foreground/90">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-6 text-foreground/90">Connect</h4>
            <div className="flex gap-3">
              <a
                href="https://github.com/RifahSanjida"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-gradient-to-br from-card to-background border border-border/50 hover:bg-gradient-to-br hover:from-primary hover:to-accent hover:text-white hover:border-primary/40 transition-all duration-500 hover:scale-110 shadow-soft"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/rifah-sanjida-2691b9266"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-gradient-to-br from-card to-background border border-border/50 hover:bg-gradient-to-br hover:from-secondary hover:to-primary hover:text-white hover:border-secondary/40 transition-all duration-500 hover:scale-110 shadow-soft"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:rifahctg20@gmail.com"
                className="p-3 rounded-2xl bg-gradient-to-br from-card to-background border border-border/50 hover:bg-gradient-to-br hover:from-accent hover:to-secondary hover:text-white hover:border-accent/40 transition-all duration-500 hover:scale-110 shadow-soft"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 text-center text-muted-foreground">
          <p className="text-sm">&copy; {new Date().getFullYear()} Rifah Sanjida. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
