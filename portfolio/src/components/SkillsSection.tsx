const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['Python', 'JavaScript', 'Java', 'C', 'C++'],
  },
  {
    title: 'AI & Machine Learning',
    skills: ['TensorFlow', 'Keras', 'Scikit-learn', 'YOLOv8', 'OpenCV', 'OCR', 'LangChain'],
  },
  {
    title: 'Web Development',
    skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Streamlit'],
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git', 'VS Code', 'Jupyter', 'Power BI', 'OpenAI APIs'],
  },
  {
    title: 'Data & Visualization',
    skills: ['Matplotlib', 'Seaborn', 'Pandas', 'NumPy'],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-4">
            My Skills
          </div>
          <h2 className="section-title">
            Technologies I <span className="gradient-text">Work With</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div 
              key={category.title}
              className="glass-card-hover p-6"
            >
              <h3 className="font-display font-semibold text-lg mb-4 gradient-text">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-white/5 border border-white/10 rounded-full text-muted-foreground hover:text-foreground hover:border-purple-500/50 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
