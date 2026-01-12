import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Linkedin, Send, ExternalLink, MessageCircle, Facebook } from "lucide-react";
import { toast } from "sonner";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoLink = `mailto:rifahctg20@gmail.com?subject=${subject}&body=${body}`;
    
    window.open(mailtoLink);
    toast.success("Opening your email client...");
    
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Let's create something beautiful together - I'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-foreground/90">Contact Information</h3>
              <div className="space-y-5">
                <a 
                  href="mailto:rifahctg20@gmail.com"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/40 hover:shadow-[0_8px_30px_rgb(232,180,247,0.12)] transition-all duration-500 group hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium text-foreground/90">rifahctg20@gmail.com</p>
                  </div>
                </a>
                
                <a 
                  href="https://linkedin.com/in/rifah-sanjida-2691b9266"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border border-border/50 hover:border-secondary/40 hover:shadow-[0_8px_30px_rgb(180,212,255,0.12)] transition-all duration-500 group hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <Linkedin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <p className="font-medium text-foreground/90">Connect with me</p>
                  </div>
                </a>
                
                <a 
                  href="https://www.facebook.com/Sanjida.rifah.20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border border-border/50 hover:border-blue-400/40 hover:shadow-[0_8px_30px_rgb(59,130,246,0.12)] transition-all duration-500 group hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <Facebook className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Facebook</p>
                    <p className="font-medium text-foreground/90">Follow me</p>
                  </div>
                </a>
                
                <a 
                  href="https://wa.me/8801628061556"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border border-border/50 hover:border-green-400/40 hover:shadow-[0_8px_30px_rgb(34,197,94,0.12)] transition-all duration-500 group hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">WhatsApp</p>
                    <p className="font-medium text-foreground/90">+880 1628-061556</p>
                  </div>
                </a>
                
                <a 
                  href="https://upwork.com/freelancers/~0140d8e98a6b3647fa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border border-border/50 hover:border-accent/40 hover:shadow-[0_8px_30px_rgb(255,180,247,0.12)] transition-all duration-500 group hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <ExternalLink className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Upwork</p>
                    <p className="font-medium text-foreground/90">Freelance Profile</p>
                  </div>
                </a>
                
                <div className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border border-border/50 shadow-soft">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center text-white shadow-lg">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium text-foreground/90">SNKH, CUET, Chattogram, Bangladesh</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className="space-y-6 p-10 rounded-3xl bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border border-border/50 shadow-[0_8px_30px_rgb(232,180,247,0.1)]">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground/80">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-input focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground/80">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-input focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2 text-foreground/80">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-background/50 border border-input focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground/80">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-background/50 border border-input focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Your message..."
                />
              </div>
              
              <Button type="submit" className="w-full group rounded-xl shadow-lg hover:shadow-xl transition-all duration-500" size="lg">
                Send Message
                <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
