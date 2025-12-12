import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

export const ContactSection = () => {
  const contactInfo = [
    { 
      icon: Mail, 
      label: 'Email', 
      value: 'abhiramitamil2006@gmail.com', 
      href: 'mailto:abhiramitamil2006@gmail.com' 
    },
    { 
      icon: Phone, 
      label: 'Phone', 
      value: '+91 90258 17343', 
      href: 'tel:+919025817343' 
    },
    { 
      icon: MapPin, 
      label: 'Location', 
      value: 'India', 
      href: '#' 
    },
  ];

  const socials = [
    { 
      icon: Github, 
      label: 'GitHub', 
      href: 'https://github.com/abhiramit02' 
    },
    { 
      icon: Linkedin, 
      label: 'LinkedIn', 
      href: 'https://linkedin.com/in/abhiramit03/' 
    },
    { 
      icon: Mail, 
      label: 'Email', 
      href: 'mailto:abhiramitamil2006@gmail.com' 
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-950/20 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-4">
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
        </div>

        <div className="max-w-md mx-auto">
          <div className="space-y-8 text-center">
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex flex-col items-center gap-2 group"
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-600/20 to-cyan-600/20 flex items-center justify-center group-hover:from-purple-600/30 group-hover:to-cyan-600/30 transition-all">
                    <item.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                    <div className="text-foreground group-hover:text-purple-400 transition-colors">
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="pt-6 border-t border-white/10">
              <h4 className="font-semibold mb-6 text-foreground text-lg">Follow Me</h4>
              <div className="flex justify-center gap-6">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-purple-500/50 hover:bg-purple-500/10 transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6 text-muted-foreground hover:text-foreground" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
