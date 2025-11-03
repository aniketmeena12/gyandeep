import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Brain, Sparkles, TrendingUp, MessageCircle } from 'lucide-react';
import { ImageWithFallback } from '../Imagefallback/Imagewithfallback';
import LightParticles from '../components/lightparticles';
import WaveTransition from '../components/waveparticle';

export function HomePage() {
  const features = [
    {
      icon: Brain,
      title: 'AI Tutor',
      description: 'Personalized guidance powered by advanced AI that adapts to your learning style',
      color: '#FFD95A',
    },
    {
      icon: TrendingUp,
      title: 'Adaptive Path',
      description: 'Dynamic learning journey that evolves with your progress and understanding',
      color: '#56CCF2',
    },
    {
      icon: Sparkles,
      title: 'Smart Summaries',
      description: 'Instant AI-generated summaries that distill complex knowledge into clarity',
      color: '#FFD95A',
    },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <LightParticles />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FFD95A]/5 to-transparent"></div>

        {/* Glowing Diya */}
        <motion.div
          className="relative z-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="relative w-48 h-48 mx-auto mb-8"
            animate={{
              filter: [
                'drop-shadow(0 0 20px rgba(255, 217, 90, 0.3))',
                'drop-shadow(0 0 40px rgba(255, 217, 90, 0.5))',
                'drop-shadow(0 0 20px rgba(255, 217, 90, 0.3))',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFD95A] to-[#56CCF2] rounded-full blur-3xl opacity-30 animate-pulse"></div>
            
            <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full">
              <circle cx="100" cy="100" r="90" fill="none" stroke="#FFD95A" strokeWidth="1" opacity="0.3" />
              <circle cx="100" cy="100" r="80" fill="none" stroke="#FFD95A" strokeWidth="0.5" opacity="0.2" />
              {[...Array(8)].map((_, i) => (
                <line
                  key={i}
                  x1="100"
                  y1="100"
                  x2={100 + 90 * Math.cos((i * Math.PI) / 4)}
                  y2={100 + 90 * Math.sin((i * Math.PI) / 4)}
                  stroke="#FFD95A"
                  strokeWidth="0.5"
                  opacity="0.2"
                />
              ))}
            </svg>

            <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full">
              <motion.path
                d="M100 60 Q95 75 100 85 Q105 75 100 60"
                fill="#FFD95A"
                animate={{
                  d: [
                    'M100 60 Q95 75 100 85 Q105 75 100 60',
                    'M100 55 Q92 75 100 85 Q108 75 100 55',
                    'M100 60 Q95 75 100 85 Q105 75 100 60',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <ellipse cx="100" cy="110" rx="35" ry="15" fill="#FFD95A" />
              <path d="M65 110 Q65 120 70 125 L130 125 Q135 120 135 110" fill="#FFD95A" opacity="0.8" />
              <ellipse cx="100" cy="125" rx="30" ry="8" fill="#001F54" opacity="0.3" />
            </svg>
          </motion.div>

          <motion.h1
            className="font-['Playfair_Display'] text-6xl text-[#001F54] dark:text-white mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Gyaan-Deep
          </motion.h1>

          <motion.p
            className="text-2xl text-[#56CCF2] mb-2 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Where AI meets Enlightenment
          </motion.p>

          <motion.p
            className="text-xl text-[#001F54] dark:text-white/80 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            ज्ञान से दीपित हर मन | Learn. Adapt. Illuminate.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <Link
              to="/learning-path"
              className="px-8 py-4 bg-gradient-to-r from-[#FFD95A] to-[#56CCF2] text-[#001F54] rounded-full hover:shadow-lg hover:shadow-[#FFD95A]/50 transition-all"
            >
              Start Learning
            </Link>
            <Link
              to="/ai-tutor"
              className="px-8 py-4 bg-white/10 dark:bg-white/5 backdrop-blur-md border border-[#FFD95A]/30 text-[#001F54] dark:text-white rounded-full hover:bg-[#FFD95A]/10 transition-all"
            >
              Ask AI Tutor
            </Link>
            <Link
              to="/summaries"
              className="px-8 py-4 bg-white/10 dark:bg-white/5 backdrop-blur-md border border-[#56CCF2]/30 text-[#001F54] dark:text-white rounded-full hover:bg-[#56CCF2]/10 transition-all"
            >
              Explore Path
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <WaveTransition />

      {/* Why Gyaan-Deep Section */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-[#001F54]/5 to-transparent dark:from-[#001F54] dark:to-[#001F54]/50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="font-['Playfair_Display'] text-4xl text-center text-[#001F54] dark:text-[#FFD95A] mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Why Gyaan-Deep?
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div
                  className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                  style={{ backgroundColor: feature.color }}
                ></div>

                <div className="relative bg-white/60 dark:bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-[#FFD95A]/20 hover:border-[#FFD95A]/50 transition-all">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${feature.color}20` }}
                  >
                    <feature.icon className="w-8 h-8" style={{ color: feature.color }} />
                  </div>
                  <h3 className="text-xl text-[#001F54] dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[#001F54]/70 dark:text-white/60">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Shloka */}
      <section className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="relative bg-white/40 dark:bg-white/5 backdrop-blur-md rounded-3xl p-12 border border-[#FFD95A]/30"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 opacity-5 dark:opacity-10">
              <svg viewBox="0 0 400 400" className="w-full h-full">
                <circle cx="200" cy="200" r="150" fill="none" stroke="#FFD95A" strokeWidth="1" />
                <circle cx="200" cy="200" r="120" fill="none" stroke="#FFD95A" strokeWidth="1" />
                <circle cx="200" cy="200" r="90" fill="none" stroke="#FFD95A" strokeWidth="1" />
              </svg>
            </div>

            <blockquote className="relative text-2xl text-[#001F54] dark:text-[#FFD95A] italic mb-4">
              "परात्मानमेकं जगद्बीजमाद्यं"
            </blockquote>
            <p className="text-[#56CCF2]">
              One source of knowledge, infinite paths of enlightenment
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 bg-[#001F54] dark:bg-[#001F54]/80">
        <div className="absolute inset-0 opacity-5">
          <svg viewBox="0 0 800 200" className="w-full h-full" preserveAspectRatio="none">
            {[...Array(12)].map((_, i) => (
              <circle key={i} cx={70 * i} cy={100} r="40" fill="none" stroke="#FFD95A" strokeWidth="1" />
            ))}
          </svg>
        </div>

        <div className="relative max-w-6xl mx-auto text-center text-white/60">
          <p className="mb-2">© 2025 Gyaan-Deep. All rights reserved.</p>
          <p className="text-sm">ज्ञानं परमं बलम् — Knowledge is the supreme power</p>
        </div>
      </footer>
    </div>
  );
}
