import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

import leetcodeIcon from '@/assets/leetcode.png';
import codechefIcon from '@/assets/codechef.png';
import skillrackIcon from '@/assets/skillrack.png';
import hackerrankIcon from '@/assets/Hackerrank.png';

const codingProfiles = [
  {
    name: 'LeetCode',
    icon: (
      <img 
        src={leetcodeIcon} 
        alt="LeetCode" 
        className="w-full h-full object-contain"
      />
    ),
    stats: [
      'Solved 200+ problems',
      'Max Rating: 1,755',
      'Global Rank: 6,41,246'
    ],
    link: 'https://leetcode.com/u/abhiramit03/'
  },
  {
    name: 'CodeChef',
    icon: (
      <img 
        src={codechefIcon} 
        alt="CodeChef" 
        className="w-full h-full object-contain"
      />
    ),
    stats: [
      'Solved 600+ problems',
      'Max Rating: 1045',
      'Global Rank: 12141'
    ],
    link: 'https://www.codechef.com/users/abhiramit0302'
  },
  {
    name: 'SkillRack',
    icon: (
      <img 
        src={skillrackIcon} 
        alt="SkillRack" 
        className="w-full h-full object-contain"
      />
    ),
    stats: [
      'Solved 1000+ problems',
      'Top 15th in College contest',
      '250+ Bronze badges'
    ],
    link: 'https://www.skillrack.com/faces/resume.xhtml?id=483790&key=b13b9eb1837220f5fd83ea6c66e4cce6cba1279b'
  },
  {
    name: 'HackerRank',
    icon: (
      <img 
        src={hackerrankIcon} 
        alt="HackerRank" 
        className="w-full h-full object-contain"
      />
    ),
    stats: [
      '5⭐ gold badge in C',
      '5⭐ gold badge in Python',
      '5⭐ gold badge in Java & SQL'
    ],
    link: 'https://www.hackerrank.com/profile/abhirami_t2023a1'
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

export const CodingProfilesSection = () => {
  return (
    <section id="coding-profiles" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-4">
            Coding Profiles
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Coding</span> Profiles
          </h2>
       <p className="text-muted-foreground max-w-2xl mx-auto text-2xl text-center whitespace-nowrap">
  Check out my profiles on various coding platforms where I solve problems and participate in contests.
</p>



        </div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {codingProfiles.map((profile, index) => (
    <motion.div
      key={profile.name}
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
      className="bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 p-6 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-16 h-16 flex items-center justify-center bg-card/50 rounded-lg p-2">
          {profile.icon}
        </div>
        <a 
          href={profile.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-foreground hover:text-cyan-500 transition-colors mt-2"
          aria-label={`Visit ${profile.name} profile`}
        >
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>

      {/* Increased Profile Name Font */}
      <h3 className="text-2xl font-semibold mb-3">{profile.name}</h3>

      {/* Increased Profile Stats Font */}
      <ul className="space-y-2 text-lg text-muted-foreground">
        {profile.stats.map((stat, i) => (
          <li key={i} className="flex items-center">
            <span className="w-2 h-2 rounded-full bg-cyan-500 mr-2"></span>
            {stat}
          </li>
        ))}
      </ul>
    </motion.div>
  ))}
</div>

      </div>
    </section>
  );
};
