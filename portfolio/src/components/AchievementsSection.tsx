import { Trophy, Award, Medal } from 'lucide-react';
import { motion } from 'framer-motion';

const achievements = [
  {
    title: '1st place – Freshathon, Sri Eshwar',
    icon: <Trophy className="w-5 h-5 text-yellow-500" />,
    description: 'Won first place in the Freshathon hackathon at Sri Eshwar College of Engineering.'
  },
  {
    title: '2nd place – Mini-Project Expo, Sri Eshwar',
    icon: <Award className="w-5 h-5 text-blue-500" />,
    description: 'Secured second position in the college mini-project exhibition.'
  },
  {
    title: '2nd rank – CodeSpirit 2025 (Unstop platform)',
    icon: <Medal className="w-5 h-5 text-purple-500" />,
    description: 'Achieved 2nd rank in the CodeSpirit 2025 coding competition.'
  },
  {
    title: '1st place – Sri Eshwar Coding Carnival – Finals (2025)',
    icon: <Trophy className="w-5 h-5 text-yellow-500" />,
    description: 'Won the finals of the annual coding carnival at Sri Eshwar.'
  },
  {
    title: 'Finalist – Shine Healthcare Hackathon 2025',
    icon: <Award className="w-5 h-5 text-green-500" />,
    description: 'Selected as finalist among 2000+ teams in the national healthcare hackathon.'
  },
  {
    title: '2nd place – Hackathon 3.0 (2025), IES College of Engineering',
    icon: <Medal className="w-5 h-5 text-purple-500" />,
    description: 'Secured second position in the inter-college hackathon.'
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

export const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-muted/10">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0dGVybiBpZD0icGF0dGVybi1iYWNrZ3JvdW5kIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFucmZvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InJnYmEoMCwwLDAsMC4wMSkiLz48L3BhdHRlcm4+PC9zdmc+')]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-medium mb-4">
            Achievements
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Recognitions and awards that highlight my journey and dedication to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index % 3}
              className="bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 p-6 hover:border-amber-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10"
            >
              <div className="flex items-center gap-3 mb-3">
                {achievement.icon}
                <h3 className="text-lg font-semibold">{achievement.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
