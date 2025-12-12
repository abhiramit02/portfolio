import { Github } from 'lucide-react';

const projects = [
  {
    title: 'SmartLife -AI',
    subtitle: 'Personalized Daily Companion Assistant',
    year: '2025',
    description: 'Developed an AI-driven productivity & wellness assistant with news, weather, task planning, and wellness features. Integrated TTS, YouTube search, and voice assistant in Streamlit for an interactive user experience.',
    tech: ['Python', 'Streamlit', 'TTS', 'OpenAI API', 'YouTube Data API', 'SpeechRecognition'],
    gradient: 'from-purple-600 to-pink-600',
    github: 'https://github.com/abhiramit02/SmartLife'
  },
  {
    title: 'Food Ordering System',
    subtitle: 'E-commerce Platform',
    year: '2025',
    description: 'Developed a full-stack food ordering app with React.js, Node.js, and MongoDB. Implemented user authentication, admin panel, cart, and category filters.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Bootstrap'],
    gradient: 'from-cyan-600 to-blue-600',
    github: 'https://github.com/abhiramit02/Food-Ordering-App-mern-stack'
  },
  {
    title: 'MediCap',
    subtitle: 'AI-Powered Healthcare Assistant',
    year: '2024',
    description: 'Comprehensive medical diagnosis and health insights platform with disease prediction, medication safety verification, and hospital locator features.',
    tech: ['Python', 'Streamlit', 'Scikit-learn', 'Pandas', 'OpenStreetMap API'],
    gradient: 'from-pink-600 to-purple-600',
    github: 'https://github.com/abhiramit02/Medicap---AI-Medical-Assistant'
  },
  {
    title: 'Sense Route',
    subtitle: 'AI-Powered Assistive Personal Assistant',
    year: '2025',
    description: 'Built a voice-activated assistant for the visually impaired with YOLOv8 object detection, OCR, TTS, and Gmail API alerts. Integrated environment description, news reader, and maze game, demonstrating AI and full-stack skills.',
    tech: ['Python', 'YOLOv8', 'Tesseract', 'React.js', 'Node.js', 'Gmail API'],
    gradient: 'from-blue-600 to-cyan-600',
    github: 'https://github.com/abhiramit02/SenseRoute'
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-4">
            Portfolio
          </div>
         <h2 className="section-title text-4xl md:text-5xl">
  Featured <span className="gradient-text">Projects</span>
</h2>

<p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg md:text-xl">
  A showcase of my recent work in AI, ML, and full-stack development
</p>

        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative rounded-2xl overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
              
              {/* Card Content */}
              <div className="relative glass-card-hover p-8 h-full">
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 text-xs bg-white/10 rounded-full text-muted-foreground">
                    {project.year}
                  </span>
                  <div className="flex gap-3">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="font-display text-3xl font-bold mb-1 text-foreground">
  {project.title}
</h3>

<p className="text-purple-400 text-lg mb-4">
  {project.subtitle}
</p>

<p className="text-muted-foreground leading-relaxed mb-6 text-lg">
  {project.description}
</p>

<div className="flex flex-wrap gap-2">
  {project.tech.map((tech) => (
    <span
      key={tech}
      className="px-3 py-1 text-sm bg-white/5 border border-white/10 rounded-full text-muted-foreground"
    >
      {tech}
    </span>
  ))}
</div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
