import { Briefcase, Calendar, MapPin } from 'lucide-react';

const professionalExperiences = [
  {
    title: 'AI Engineer Intern',
    company: 'Synapslogic',
    location: 'Remote',
    period: 'Aug 2025 – Sept 2025',
    description: [
      'Contributed to AI/ML model development and deployment',
      'Integrated AI models with frontend systems',
      'Worked on production-ready ML pipelines',
    ],
    gradient: 'from-purple-600 to-pink-600',
  },
];

const internships = [
  {
    title: 'AI Agents Intern',
    company: 'CodeBoosters Tech',
    location: 'Remote',
    period: '2025',
    description: [
      'Developed AI agents using Python and LangChain',
      'Built autonomous reasoning systems with OpenAI',
      'Implemented workflow automation solutions',
    ],
    gradient: 'from-cyan-600 to-blue-600',
  },
  {
    title: 'MERN Stack Intern',
    company: 'G-Zoft Tech Solutions',
    location: 'On-site',
    period: '2025',
    description: [
      'Full-stack development using MERN stack',
      'Built data warehouse solutions',
      'Improved backend logic and system efficiency',
    ],
    gradient: 'from-pink-600 to-purple-600',
  },
];

const ExperienceItem = ({ exp }: { exp: typeof professionalExperiences[0] }) => (
  <div className="relative pl-12 md:pl-20 pb-12 last:pb-0">
    <div className={`absolute left-0 md:left-4 w-8 h-8 rounded-full bg-gradient-to-br ${exp.gradient} flex items-center justify-center glow-pulse`}>
      <Briefcase className="w-4 h-4 text-white" />
    </div>
    <div className="glass-card-hover p-6">
      <div className="flex flex-wrap items-center gap-3 mb-3">
        <h3 className="font-display font-semibold text-xl text-foreground">
          {exp.title}
        </h3>
        <span className="text-purple-400">@</span>
        <span className="text-cyan-400 font-medium">{exp.company}</span>
      </div>
      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
        <span className="flex items-center gap-1">
          <Calendar size={14} />
          {exp.period}
        </span>
        <span className="flex items-center gap-1">
          <MapPin size={14} />
          {exp.location}
        </span>
      </div>
      <ul className="space-y-2">
        {exp.description.map((item, i) => (
          <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export const InternshipsSection = () => {
  return (
    <section id="internships" className="py-16 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-cyan-600/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Internships
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-600 via-blue-600 to-cyan-600" />
            {internships.map((exp) => (
              <ExperienceItem key={exp.title} exp={exp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-cyan-600/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm font-medium mb-4">
            Experience
          </div>
          <h2 className="section-title">
            Professional <span className="gradient-text">Journey</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple-600 via-cyan-600 to-purple-600" />

            {professionalExperiences.map((exp, index) => (
              <ExperienceItem key={exp.title} exp={exp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
