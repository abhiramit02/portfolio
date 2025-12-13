import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const certifications = [
  {
    title: 'SQL Server on Linux',
    issuer: 'Microsoft',
    year: '2025',
    link: 'https://drive.google.com/file/d/19mCD1uCGkxn2NWlQnz4gVDNJd_DeTTKQ/view'
  },
  {
    title: 'AWS S3 Basics',
    issuer: 'Coursera',
    year: '2025',
    link: 'https://drive.google.com/file/d/1wJ9ZaQOPW4vdgH0psPtiaOK3CvZZdfbg/view'
  },
  {
    title: 'AI-Machine Learning Engineer',
    issuer: 'Reliance Foundation',
    year: '2025',
    link: 'https://drive.google.com/file/d/161_D6VEnExwFaC0knNfZk3cu5Z5UjJc6/view'
  },
  {
    title: 'Large Language Models',
    issuer: 'Hugging Face',
    year: '2025',
    link: 'https://drive.google.com/file/d/1kxDjdq4h5H1djTqwq92QMsD6zTCahNyE/view'
  },
  {
    title: 'Build a Computer Vision App with Azure Cognitive Services',
    issuer: 'Microsoft – Coursera',
    year: '2025',
    link: 'https://drive.google.com/file/d/17n4vU9BRlOr9zI5XdgIdzw25OPl4PWJx/view'
  },
  {
    title: 'Cloud Computing',
    issuer: 'NPTEL',
    year: '2025',
    link: 'https://drive.google.com/file/d/1H1x71855pwJ_t5y4sPynTSWYE-s4RvVY/view'
  },
  {
    title: 'Mastering Data Structures & Algorithms using C and C++',
    issuer: 'Udemy',
    year: '2024',
    link: 'https://drive.google.com/file/d/1z80HAJOdqLLBCgjtXE9bMReCxtQ0ezoD/view'
  },
  {
    title: 'Python for Machine Learning',
    issuer: 'Great Learning',
    year: '2024',
    link: 'https://drive.google.com/file/d/1j0oiH9Iuv93bGGVPRdcfjbct_b4GtnL2/view'
  },
  {
    title:'Cloud Foundations',
    issuer:'AWS',
    year:'2025',
    link:'https://drive.google.com/file/d/1FDS4ODnNLIvg0Xq3Q1z8gPO7wHhddfn-/view?usp=sharing'
  },
  {
    title:'Networking Basics',
    issuer:'Cisco',
    year:'2025',
    link:'https://drive.google.com/file/d/1gbY5WzPdr_VLgcwhLtn1NcHxVJEkK-uG/view?usp=sharing'
  }
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5
    }
  })
};

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/10 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm font-medium mb-4">
            Certifications
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-2xl text-center whitespace-nowrap">
  Professional certifications that validate my skills and knowledge in various technologies.
</p>


        </div>

        <div className="max-w-4xl mx-auto space-y-4">
  {certifications.map((cert, index) => (
    <motion.div
      key={cert.title}
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index % 3}
      className="group bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 p-6 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          {/* Title - Increased size */}
          <h3 className="text-2xl font-semibold group-hover:text-purple-400 transition-colors">
            {cert.title}
          </h3>

          {/* Issuer & year - Increased size */}
          <p className="text-lg text-muted-foreground">
            {cert.issuer} • {cert.year}
          </p>
        </div>

        {/* View Certificate - Increased size */}
        <a 
          href={cert.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-lg text-foreground hover:text-purple-400 transition-colors"
          aria-label={`View ${cert.title} certificate`}
        >
          View Certificate
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>
    </motion.div>
  ))}
</div>

      </div>
    </section>
  );
};
