import { Cpu, Radio, Code2, Zap } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Tools",
      icon: <Code2 className="h-6 w-6" />,
      color: "linear-gradient(135deg, hsl(288 76% 84%) 0%, hsl(218 100% 85%) 100%)",
      skills: [
        { name: "C/C++", level: 85 },
        { name: "Python", level: 80 },
        { name: "MATLAB", level: 90 },
        { name: "JavaScript", level: 65 },
      ],
    },
    {
      title: "Circuit Design & Simulation",
      icon: <Cpu className="h-6 w-6" />,
      color: "linear-gradient(135deg, hsl(218 100% 85%) 0%, hsl(270 70% 88%) 100%)",
      skills: [
        { name: "Proteus", level: 85 },
        { name: "Livewire", level: 80 },
        { name: "MATLAB Simulink", level: 85 },
        { name: "Digital Logic Design", level: 90 },
      ],
    },
    {
      title: "Core Engineering",
      icon: <Radio className="h-6 w-6" />,
      color: "linear-gradient(135deg, hsl(270 70% 88%) 0%, hsl(330 100% 95%) 100%)",
      skills: [
        { name: "Signal Processing", level: 85 },
        { name: "Communication Systems", level: 90 },
        { name: "VLSI Design", level: 80 },
        { name: "Control Systems", level: 85 },
      ],
    },
    {
      title: "Development & Frameworks",
      icon: <Zap className="h-6 w-6" />,
      color: "linear-gradient(135deg, hsl(330 100% 95%) 0%, hsl(288 76% 84%) 100%)",
      skills: [
        { name: "Node.js", level: 75 },
        { name: "Express.js", level: 75 },
        { name: "MongoDB", level: 80 },
        { name: "Git & VS Code", level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Technical skills crafted through dedication, passion, and continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="group p-8 rounded-3xl bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/40 hover:shadow-[0_10px_40px_rgb(232,180,247,0.15)] transition-all duration-500 animate-fade-in hover:-translate-y-2"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500"
                  style={{ background: category.color }}
                >
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground/90">{category.title}</h3>
              </div>
              
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground/80">{skill.name}</span>
                      <span className="text-sm text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2.5 bg-muted/50 rounded-full overflow-hidden shadow-inner">
                      <div
                        className="h-full rounded-full progress-bar shadow-sm"
                        style={{ 
                          width: `${skill.level}%`,
                          background: category.color
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes progress-bar {
          from {
            width: 0%;
          }
        }
        .progress-bar {
          animation: progress-bar 1.5s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Skills;
