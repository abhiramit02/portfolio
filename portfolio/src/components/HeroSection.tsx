import { useEffect, useState } from 'react';
import { Download, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import profileImage from '@/assets/profile.png';

const titles = [
  'AI Engineer',
  'ML Specialist',
  'Full-Stack Developer',
  'Computer Vision Innovator',
];

export const HeroSection = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const title = titles[currentTitle];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < title.length) {
          setDisplayText(title.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(title.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentTitle((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTitle]);

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-purple-900/10 to-cyan-900/10 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-muted-foreground">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Available for opportunities
            </div>
            
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Hi, I'm{' '}
              <span className="gradient-text">Abhirami T</span>
            </h1>
            
            <div className="h-12 flex items-center">
              <span className="font-display text-2xl md:text-3xl text-muted-foreground">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </div>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
  Passionate AI Engineer building human-centered intelligent systems. 
  I create AI agents, computer vision models, and full-stack applications 
  that solve real-world problems.
</p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="/Abhirami_T_Resume.pdf" 
                download="Abhirami_T_Resume.pdf"
                className="btn-primary inline-flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download size={18} />
                Download Resume
              </a>
              <a href="#projects" className="btn-outline inline-flex items-center gap-2">
                View Projects
                <ArrowRight size={18} />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-6">
              <a href="https://github.com/abhiramit02" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github size={22} />
              </a>
              <a href="https://linkedin.com/in/abhiramit03/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin size={22} />
              </a>
              <a href="mailto:abhiramitamil2006@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail size={22} />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative flex justify-center animate-fade-in-right" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-full blur-3xl opacity-30 scale-110 animate-pulse" />
              
              {/* Image Container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden neon-border animate-float">
                <img 
                  src={profileImage} 
                  alt="Abhirami T - AI Engineer" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -right-4 top-1/4 glass-card px-4 py-3 animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold gradient-text">AI</span>
                  <div className="text-xs text-muted-foreground">
                    <div className="font-semibold text-foreground">Engineer</div>
                    <div className="font-semibold text-foreground">& Developer</div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -left-8 bottom-1/4 w-4 h-4 bg-purple-500 rounded-full animate-pulse" />
              <div className="absolute -right-8 top-1/3 w-3 h-3 bg-cyan-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
