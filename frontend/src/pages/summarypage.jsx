import React, { useState } from "react";
import { motion } from "framer-motion";
import { FileText, ChevronRight, Sparkles, BookOpen } from "lucide-react";

export default function SummaryPage() {
  const [selectedSummary, setSelectedSummary] = useState(null);

  const summaries = [
    {
      id: 1,
      title: "Introduction to AI Learning",
      topic: "Artificial Intelligence",
      points: [
        "AI adapts to individual learning patterns and preferences",
        "Machine learning enables personalized educational experiences",
        "Neural networks process and analyze student progress data",
      ],
      timestamp: "2 hours ago",
      color: "#FFD95A",
    },
    {
      id: 2,
      title: "Sanskrit Philosophy in Modern Context",
      topic: "Philosophy",
      points: [
        "Ancient wisdom provides timeless principles for learning",
        "Integration of traditional knowledge with modern technology",
        "Holistic approach to education and personal development",
      ],
      timestamp: "1 day ago",
      color: "#56CCF2",
    },
    {
      id: 3,
      title: "Adaptive Learning Systems",
      topic: "Education Technology",
      points: [
        "Systems adjust difficulty based on user performance",
        "Real-time feedback enhances learning outcomes",
        "Data-driven insights guide educational strategies",
      ],
      timestamp: "2 days ago",
      color: "#FFD95A",
    },
    {
      id: 4,
      title: "Multi-Modal Learning Theory",
      topic: "Cognitive Science",
      points: [
        "Integration of visual, auditory, and kinesthetic learning",
        "Multiple sensory inputs enhance knowledge retention",
        "Personalized learning paths accommodate different styles",
      ],
      timestamp: "3 days ago",
      color: "#56CCF2",
    },
    {
      id: 5,
      title: "Knowledge Management Systems",
      topic: "Information Science",
      points: [
        "Efficient organization and retrieval of information",
        "Semantic connections between related concepts",
        "Progressive knowledge building and integration",
      ],
      timestamp: "5 days ago",
      color: "#FFD95A",
    },
    {
      id: 6,
      title: "Continuous Learning Frameworks",
      topic: "Lifelong Learning",
      points: [
        "Ongoing skill development and knowledge acquisition",
        "Adaptation to evolving information landscapes",
        "Self-directed learning and personal growth",
      ],
      timestamp: "1 week ago",
      color: "#56CCF2",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#001F54]/10 via-white to-[#FFD95A]/5 dark:from-[#001F54] dark:via-[#001F54] dark:to-[#001F54]/80 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-['Playfair_Display'] text-5xl text-[#001F54] dark:text-[#FFD95A] mb-4">
            Smart Summaries
          </h1>
          <p className="text-[#56CCF2]">
            AI-generated insights that illuminate complex knowledge
          </p>
        </motion.div>

        {/* Summary Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {summaries.map((summary, index) => (
            <motion.div
              key={summary.id}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedSummary(summary)}
            >
              {/* Light Ray Animation */}
              <motion.div
                className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at center, ${summary.color}, transparent)`,
                }}
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1.2 }}
              />

              {/* Card */}
              <div
                className="relative bg-white dark:bg-[#001F54] rounded-2xl p-6 border-2 transition-all duration-300 group-hover:shadow-xl overflow-hidden"
                style={{ borderColor: `${summary.color}40` }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${summary.color}10, transparent)`,
                  }}
                />

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4 relative z-10"
                  style={{ backgroundColor: `${summary.color}20` }}
                >
                  <FileText className="w-6 h-6" style={{ color: summary.color }} />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg text-[#001F54] dark:text-white pr-2">
                      {summary.title}
                    </h3>
                    <ChevronRight
                      className="w-5 h-5 flex-shrink-0 text-[#001F54]/30 dark:text-white/30 group-hover:text-[#56CCF2] transition-colors"
                    />
                  </div>

                  <div
                    className="inline-block px-3 py-1 rounded-full text-xs mb-4"
                    style={{
                      backgroundColor: `${summary.color}20`,
                      color: summary.color,
                    }}
                  >
                    {summary.topic}
                  </div>

                  <ul className="space-y-2 mb-4">
                    {summary.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-[#001F54]/70 dark:text-white/70"
                      >
                        <div
                          className="w-1 h-1 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: summary.color }}
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#001F54]/50 dark:text-white/50">
                      {summary.timestamp}
                    </span>
                    <button
                      className="text-xs px-3 py-1 rounded-full border transition-colors"
                      style={{
                        borderColor: `${summary.color}40`,
                        color: summary.color,
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedSummary(summary);
                      }}
                    >
                      Explain more
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Generate New Summary */}
        <motion.div
          className="mt-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="bg-white/60 dark:bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-[#FFD95A]/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFD95A] to-[#56CCF2] flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-[#001F54]" />
              </div>
              <h3 className="text-xl text-[#001F54] dark:text-white">
                Generate New Summary
              </h3>
            </div>

            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Enter a topic or paste content to summarize..."
                className="flex-1 px-6 py-4 rounded-xl bg-white/50 dark:bg-white/5 border border-[#FFD95A]/30 focus:border-[#FFD95A] focus:outline-none text-[#001F54] dark:text-white placeholder-[#001F54]/40 dark:placeholder-white/40"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-[#FFD95A] to-[#56CCF2] text-[#001F54] rounded-xl hover:shadow-lg hover:shadow-[#FFD95A]/30 transition-all flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Summarize
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Detail Modal */}
      {selectedSummary && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedSummary(null)}
        >
          <motion.div
            className="bg-white dark:bg-[#001F54] rounded-3xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8 border-2"
            style={{ borderColor: selectedSummary.color }}
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start gap-4 mb-6">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${selectedSummary.color}20` }}
              >
                <BookOpen
                  className="w-8 h-8"
                  style={{ color: selectedSummary.color }}
                />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl text-[#001F54] dark:text-white mb-2">
                  {selectedSummary.title}
                </h2>
                <div
                  className="inline-block px-3 py-1 rounded-full text-sm"
                  style={{
                    backgroundColor: `${selectedSummary.color}20`,
                    color: selectedSummary.color,
                  }}
                >
                  {selectedSummary.topic}
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <h3 className="text-lg text-[#001F54] dark:text-white">Key Points:</h3>
              <ul className="space-y-3">
                {selectedSummary.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: `${selectedSummary.color}20` }}
                    >
                      <span style={{ color: selectedSummary.color }}>{i + 1}</span>
                    </div>
                    <span className="text-[#001F54]/80 dark:text-white/80">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#FFD95A]/10 dark:bg-[#FFD95A]/5 rounded-2xl p-6 mb-6">
              <h4 className="text-[#001F54] dark:text-white mb-3">
                Detailed Explanation:
              </h4>
              <p className="text-[#001F54]/70 dark:text-white/70 leading-relaxed">
                This summary distills the core concepts into digestible insights. Each
                point represents a key pillar of understanding that contributes to your
                overall knowledge of {selectedSummary.topic}. Continue exploring these
                concepts to deepen your mastery and illuminate new connections.
              </p>
            </div>

            <div className="flex gap-3">
              <button
                className="flex-1 px-6 py-3 bg-gradient-to-r from-[#FFD95A] to-[#56CCF2] text-[#001F54] rounded-xl hover:shadow-lg hover:shadow-[#FFD95A]/30 transition-all"
                onClick={() => setSelectedSummary(null)}
              >
                Got it
              </button>
              <button className="px-6 py-3 bg-white/50 dark:bg-white/5 border border-[#FFD95A]/30 text-[#001F54] dark:text-white rounded-xl hover:bg-[#FFD95A]/10 transition-all">
                Learn More
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
