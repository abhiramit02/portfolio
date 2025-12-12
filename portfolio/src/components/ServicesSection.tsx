import { Brain, Bot, Globe, Eye, BarChart3, Settings } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Build AI pipelines, predictive models, and intelligent automation systems.',
    gradient: 'from-purple-600 to-pink-600',
  },
  {
    icon: Bot,
    title: 'AI Agents & Automation',
    description: 'Design autonomous agents with reasoning and task execution capabilities.',
    gradient: 'from-pink-600 to-cyan-600',
  },
  {
    icon: Globe,
    title: 'Full-Stack Development',
    description: 'Responsive UI, REST APIs, and scalable MERN stack systems.',
    gradient: 'from-cyan-600 to-blue-600',
  },
  {
    icon: Eye,
    title: 'Computer Vision',
    description: 'YOLOv8, OCR, assistive tech, and real-time object detection.',
    gradient: 'from-blue-600 to-purple-600',
  },
  {
    icon: BarChart3,
    title: 'Data Visualization',
    description: 'Interactive dashboards with Power BI, Seaborn, and Matplotlib.',
    gradient: 'from-purple-600 to-cyan-600',
  },
  {
    icon: Settings,
    title: 'System Integration',
    description: 'AI-ML integration, automation workflows, and end-to-end solutions.',
    gradient: 'from-cyan-600 to-pink-600',
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm font-medium mb-4">
            Services
          </div>
          <h2 className="section-title">
            What I <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Comprehensive solutions from concept to deployment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Gradient Glow on Hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`} />
              
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="font-display font-semibold text-xl mb-3 text-foreground">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
