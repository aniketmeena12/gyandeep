import { motion } from 'framer-motion';
import { Award, TrendingUp, BookOpen, Star, Download, Calendar } from 'lucide-react';

export function ProfilePage() {
  const milestones = [
    {
      id: 8,
      title: 'Completed Advanced Theory',
      description: 'Mastered complex theoretical frameworks',
      date: 'Today',
      type: 'achievement',
    },
    {
      id: 7,
      title: 'Lesson: Applied Mathematics',
      description: 'Learned practical applications of mathematical concepts',
      date: 'Yesterday',
      type: 'lesson',
    },
    {
      id: 6,
      title: '100 Lessons Milestone',
      description: 'Reached a significant learning milestone',
      date: '2 days ago',
      type: 'milestone',
    },
    {
      id: 5,
      title: 'Lesson: AI Fundamentals',
      description: 'Explored the basics of artificial intelligence',
      date: '3 days ago',
      type: 'lesson',
    },
    {
      id: 4,
      title: 'Core Concepts Completed',
      description: 'Successfully completed all core concept modules',
      date: '5 days ago',
      type: 'achievement',
    },
    {
      id: 3,
      title: 'Lesson: Sanskrit Philosophy',
      description: 'Studied ancient wisdom and modern applications',
      date: '1 week ago',
      type: 'lesson',
    },
    {
      id: 2,
      title: '30-Day Learning Streak',
      description: 'Maintained consistent daily learning',
      date: '1 week ago',
      type: 'milestone',
    },
    {
      id: 1,
      title: 'Foundation Complete',
      description: 'Built a solid knowledge foundation',
      date: '2 weeks ago',
      type: 'achievement',
    },
  ];

  const stats = [
    { label: 'Total Lessons', value: '127', icon: BookOpen, color: '#FFD95A' },
    { label: 'Learning Streak', value: '45 days', icon: TrendingUp, color: '#56CCF2' },
    { label: 'Achievements', value: '18', icon: Award, color: '#FFD95A' },
    { label: 'Knowledge Points', value: '2,840', icon: Star, color: '#56CCF2' },
  ];

  const getTypeIcon = (type) => {
    switch (type) {
      case 'achievement':
        return Award;
      case 'lesson':
        return BookOpen;
      case 'milestone':
        return Star;
      default:
        return BookOpen;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'achievement':
        return '#FFD95A';
      case 'lesson':
        return '#56CCF2';
      case 'milestone':
        return '#FFD95A';
      default:
        return '#56CCF2';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFD95A]/10 via-white to-[#56CCF2]/10 dark:from-[#001F54] dark:via-[#001F54] dark:to-[#001F54]/80 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="relative w-32 h-32 mx-auto mb-6">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[#FFD95A] to-[#56CCF2] rounded-full"
              animate={{
                rotate: 360,
              }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
            <div className="absolute inset-2 bg-white dark:bg-[#001F54] rounded-full flex items-center justify-center">
              <span className="text-4xl">🧘</span>
            </div>
          </div>

          <h1 className="font-['Playfair_Display'] text-5xl text-[#001F54] dark:text-[#FFD95A] mb-2">
            Your Learning Journey
          </h1>
          <p className="text-[#56CCF2] mb-4">
            Knowledge once gained flows forever
          </p>
          <p className="text-sm text-[#001F54]/60 dark:text-white/60 italic">
            "समुद्रवेलात् पतितं प्रवाहं न शक्यते निवर्तयेत्"
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white/60 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-[#FFD95A]/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: `${stat.color}20` }}
              >
                <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
              </div>
              <div className="text-3xl text-[#001F54] dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-[#001F54]/60 dark:text-white/60">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Learning River Timeline */}
          <div className="lg:col-span-2">
            <motion.div
              className="bg-white/60 dark:bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-[#FFD95A]/20"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl text-[#001F54] dark:text-white">
                  Learning River
                </h2>
                <Calendar className="w-6 h-6 text-[#56CCF2]" />
              </div>

              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FFD95A] via-[#56CCF2] to-[#FFD95A] opacity-30"></div>

                <div className="space-y-6">
                  {milestones.map((milestone, index) => {
                    const TypeIcon = getTypeIcon(milestone.type);
                    const color = getTypeColor(milestone.type);

                    return (
                      <motion.div
                        key={milestone.id}
                        className="relative flex gap-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="relative flex-shrink-0">
                          <motion.div
                            className="absolute inset-0 rounded-full"
                            style={{ backgroundColor: color }}
                            animate={{
                              scale: [1, 1.5, 1],
                              opacity: [0.3, 0, 0.3],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              delay: index * 0.3,
                            }}
                          />
                          <div
                            className="relative w-16 h-16 rounded-full flex items-center justify-center border-4 bg-white dark:bg-[#001F54] z-10"
                            style={{ borderColor: color }}
                          >
                            <TypeIcon className="w-7 h-7" style={{ color }} />
                          </div>
                        </div>

                        <div className="flex-1 pb-6">
                          <div
                            className="inline-block px-3 py-1 rounded-full text-xs mb-2"
                            style={{
                              backgroundColor: `${color}20`,
                              color: color,
                            }}
                          >
                            {milestone.date}
                          </div>
                          <h3 className="text-lg text-[#001F54] dark:text-white mb-1">
                            {milestone.title}
                          </h3>
                          <p className="text-sm text-[#001F54]/60 dark:text-white/60">
                            {milestone.description}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                <motion.div
                  className="relative flex gap-4 mt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: milestones.length * 0.1 }}
                >
                  <div className="relative flex-shrink-0">
                    <motion.div
                      className="w-16 h-16 rounded-full border-4 border-dashed flex items-center justify-center bg-white/50 dark:bg-white/5"
                      style={{ borderColor: '#56CCF2' }}
                      animate={{
                        rotate: 360,
                      }}
                      transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                    >
                      <TrendingUp className="w-7 h-7 text-[#56CCF2]" />
                    </motion.div>
                  </div>
                  <div className="flex-1 flex items-center">
                    <p className="text-[#001F54]/60 dark:text-white/60 italic">
                      Your journey continues forward...
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <motion.div
              className="bg-white/60 dark:bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-[#FFD95A]/20"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h3 className="text-xl text-[#001F54] dark:text-white mb-6">
                Recent Achievements
              </h3>
              <div className="space-y-4">
                {[
                  { title: 'Speed Learner', desc: '10 lessons in one day', color: '#FFD95A' },
                  { title: 'Dedicated Scholar', desc: '30-day streak', color: '#56CCF2' },
                  { title: 'Knowledge Seeker', desc: '50 topics explored', color: '#FFD95A' },
                ].map((achievement, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/50 dark:bg-white/5 border border-[#FFD95A]/10"
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${achievement.color}20` }}
                    >
                      <Award className="w-6 h-6" style={{ color: achievement.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm text-[#001F54] dark:text-white truncate">
                        {achievement.title}
                      </div>
                      <div className="text-xs text-[#001F54]/60 dark:text-white/60">
                        {achievement.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-[#FFD95A]/20 to-[#56CCF2]/20 backdrop-blur-xl rounded-3xl p-6 border border-[#FFD95A]/30"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#FFD95A] to-[#56CCF2] flex items-center justify-center">
                  <Award className="w-8 h-8 text-[#001F54]" />
                </div>
                <h3 className="text-lg text-[#001F54] dark:text-white mb-2">
                  Learning Certificate
                </h3>
                <p className="text-sm text-[#001F54]/70 dark:text-white/70 mb-4">
                  Export your achievements and celebrate your progress
                </p>
                <button className="w-full py-3 px-6 bg-gradient-to-r from-[#FFD95A] to-[#56CCF2] text-[#001F54] rounded-xl hover:shadow-lg hover:shadow-[#FFD95A]/30 transition-all flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" />
                  Download Certificate
                </button>
              </div>
            </motion.div>

            <motion.div
              className="bg-white/60 dark:bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-[#FFD95A]/20"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <blockquote className="text-center italic text-[#001F54] dark:text-[#FFD95A] mb-2">
                "ज्ञानं परमं बलम्"
              </blockquote>
              <p className="text-center text-sm text-[#001F54]/60 dark:text-white/60">
                Knowledge is the supreme power
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
