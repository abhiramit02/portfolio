import { Sparkles, Code, Brain, Rocket } from 'lucide-react';

const highlights = [
  { icon: Brain, label: 'AI/ML Development', description: 'Building intelligent systems' },
  { icon: Code, label: 'Full-Stack', description: 'MERN stack expertise' },
  { icon: Sparkles, label: 'Computer Vision', description: 'YOLOv8, OpenCV, OCR' },
  { icon: Rocket, label: 'Innovation', description: 'Hackathon enthusiast' },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan-600/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Text Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm font-medium">
              About Me
            </div>
            
            <h2 className="section-title">
              Crafting <span className="gradient-text">Intelligent</span> Solutions
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm <span className="text-foreground font-semibold">Abhirami T</span>, an AI Engineer 
                passionate about building human-centered intelligent systems that make a real difference.
              </p>
              <p>
                My expertise spans across AI/ML development, computer vision, and full-stack engineering. 
                I love experimenting with emerging technologies and turning complex problems into elegant solutions.
              </p>
              <p>
                From creating assistive technologies for the visually impaired to building productivity 
                enhancement tools, I'm driven by the impact technology can have on people's lives.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center p-4 glass-card">
                <div className="text-3xl font-bold gradient-text">5+</div>
                <div className="text-xs text-muted-foreground mt-1">Projects Completed</div>
              </div>
              <div className="text-center p-4 glass-card">
                <div className="text-3xl font-bold gradient-text">3</div>
                <div className="text-xs text-muted-foreground mt-1">Internships</div>
              </div>
              <div className="text-center p-4 glass-card">
                <div className="text-3xl font-bold gradient-text">10+</div>
                <div className="text-xs text-muted-foreground mt-1">Technologies</div>
              </div>
            </div>
          </div>

          {/* Right - Highlight Cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div 
                key={item.label}
                className="glass-card-hover p-6 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/20 to-cyan-600/20 flex items-center justify-center mb-4 group-hover:from-purple-600/30 group-hover:to-cyan-600/30 transition-all">
                  <item.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-1">{item.label}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
