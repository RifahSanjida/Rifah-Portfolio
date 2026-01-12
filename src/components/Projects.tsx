import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string | null;
  backgroundImage: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Digital Stopwatch Using 4026 IC",
      description: "My first real hardware project! Built this on a breadboard using CD4026 and 555 Timer ICs. I'll be honest - getting those push buttons to work properly was harder than I thought. Spent hours debugging why the reset wasn't working (turned out to be a loose connection). But that's how you learn, right? This project taught me patience and the importance of double-checking every connection.",
      technologies: ["Digital Logic", "CD4026 IC", "555 Timer", "7-Segment Display"],
      github: "https://github.com/RifahSanjida",
      demo: null,
      backgroundImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&q=80&fm=webp",
    },
    {
      title: "Tesla Model S P85 Vehicle Dynamics Modeling",
      description: "This MATLAB project was challenging but super interesting. I modeled the Tesla Model S dynamics and designed a PID controller to maintain 65 km/h. The tricky part? Tuning those PID parameters - took me way more iterations than I'd like to admit! But seeing the simulation finally stabilize at the target speed felt amazing. Learned a ton about control systems from this one.",
      technologies: ["MATLAB", "Simulink", "PID Control", "Vehicle Dynamics"],
      github: "https://github.com/RifahSanjida",
      demo: null,
      backgroundImage: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=600&q=80&fm=webp",
    },
    {
      title: "Gorentable – You Seek, We Rent",
      description: "My first full-stack MERN project! Built this rental marketplace with my team. We wanted to create something actually useful - a platform where people can rent out or rent anything. From furniture to tools to clothes. Had some late nights figuring out MongoDB queries and authentication, but we pulled it off. Now it's live on Vercel! Still adding features and fixing bugs as we find them.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js"],
      github: "https://github.com/ShafinAhm/Gorentable",
      demo: "https://gorentableapp.vercel.app/",
      backgroundImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&q=80&fm=webp",
    },
    {
      title: "Machine Learning Projects (EDGE)",
      description: "Completed four ML projects under Dr. Nursadul Mamun and Eftekhar Hossain. Started with basics - classification, regression, visualization. Python was new to me, so the learning curve was steep initially. But breaking down complex problems into code? That's where it clicked. These projects made me realize I actually enjoy working with data and seeing patterns emerge from numbers.",
      technologies: ["Python", "Machine Learning", "Data Analysis", "Visualization"],
      github: "https://github.com/RifahSanjida",
      demo: null,
      backgroundImage: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=800&h=600&q=80&fm=webp",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-background to-muted/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Engineering solutions that bridge theory and real-world applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-500 animate-fade-in hover:scale-[1.02] hover:shadow-2xl"
              style={{ 
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 100%), url(${project.backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              
              {/* Content */}
              <div className="relative z-10 p-6 h-full flex flex-col justify-between min-h-[420px]">
                <div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-200 mb-4 leading-relaxed text-sm line-clamp-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs rounded-md bg-primary/20 text-primary border border-primary/30 backdrop-blur-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3 mt-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 group/btn rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm text-white hover:bg-primary hover:border-primary hover:text-white transition-all duration-300"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  {project.demo && (
                    <Button
                      size="sm"
                      className="flex-1 group/btn rounded-lg bg-primary hover:bg-primary/90 transition-all duration-300"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
