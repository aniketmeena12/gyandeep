import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Lock, Star, TrendingUp } from "lucide-react";

export function LearningPathPage() {
  const [selectedNode, setSelectedNode] = useState(null);

  const learningNodes = [
    {
      id: 1,
      title: "Foundation",
      description: "Master the basics and build your knowledge foundation",
      status: "completed",
      angle: 0,
      distance: 120,
    },
    {
      id: 2,
      title: "Core Concepts",
      description: "Deep dive into fundamental principles",
      status: "completed",
      angle: 45,
      distance: 120,
    },
    {
      id: 3,
      title: "Advanced Theory",
      description: "Explore complex theoretical frameworks",
      status: "current",
      angle: 90,
      distance: 120,
    },
    {
      id: 4,
      title: "Practical Application",
      description: "Apply knowledge to real-world scenarios",
      status: "current",
      angle: 135,
      distance: 120,
    },
    {
      id: 5,
      title: "Specialization",
      description: "Focus on your area of interest",
      status: "locked",
      angle: 180,
      distance: 120,
    },
    {
      id: 6,
      title: "Mastery",
      description: "Achieve complete understanding and expertise",
      status: "locked",
      angle: 225,
      distance: 120,
    },
    {
      id: 7,
      title: "Innovation",
      description: "Create new knowledge and contribute",
      status: "locked",
      angle: 270,
      distance: 120,
    },
    {
      id: 8,
      title: "Enlightenment",
      description: "Share wisdom and guide others",
      status: "locked",
      angle: 315,
      distance: 120,
    },
  ];

  const getNodePosition = (angle, distance) => {
    const rad = (angle * Math.PI) / 180;
    return {
      x: Math.cos(rad) * distance,
      y: Math.sin(rad) * distance,
    };
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "#FFD95A";
      case "current":
        return "#56CCF2";
      case "locked":
        return "#CCCCCC";
      default:
        return "#FFFFFF";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return Check;
      case "current":
        return Star;
      case "locked":
        return Lock;
      default:
        return Star;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#001F54]/5 via-white to-[#56CCF2]/10 dark:from-[#001F54] dark:via-[#001F54] dark:to-[#001F54]/80 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-['Playfair_Display'] text-5xl text-[#001F54] dark:text-[#FFD95A] mb-4">
            Learning Path
          </h1>
          <p className="text-[#56CCF2] mb-2">
            Your journey radiates from the core of knowledge
          </p>
          <p className="text-sm text-[#001F54]/60 dark:text-white/60 italic">
            "समुद्रवेलात् पतितं प्रवाहं न शक्यते निवर्तयेत्"
          </p>
          <p className="text-sm text-[#001F54]/60 dark:text-white/60">
            Progress flows forward, knowledge once gained radiates eternally
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Circular Visualization */}
          <div className="lg:col-span-2">
            <div className="bg-white/60 dark:bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-[#FFD95A]/20 min-h-[700px] flex items-center justify-center">
              <div className="relative w-full max-w-[600px] aspect-square">
                {/* Center Core */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", duration: 1 }}
                >
                  <div className="relative w-32 h-32">
                    {/* Glow */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-[#FFD95A] to-[#56CCF2] rounded-full blur-2xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />

                    {/* Core */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FFD95A] to-[#56CCF2] rounded-full flex items-center justify-center">
                      <div className="w-24 h-24 bg-[#001F54] rounded-full flex items-center justify-center">
                        <TrendingUp className="w-12 h-12 text-[#FFD95A]" />
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-4">
                    <div className="text-sm text-[#001F54] dark:text-white">
                      Knowledge
                    </div>
                    <div className="text-sm text-[#001F54] dark:text-white">
                      Core
                    </div>
                  </div>
                </motion.div>

                {/* Connection Lines */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 600 600"
                >
                  {learningNodes.map((node) => {
                    const pos = getNodePosition(node.angle, node.distance);
                    const center = 300;
                    return (
                      <motion.line
                        key={`line-${node.id}`}
                        x1={center}
                        y1={center}
                        x2={center + pos.x}
                        y2={center + pos.y}
                        stroke={getStatusColor(node.status)}
                        strokeWidth="2"
                        opacity={node.status === "locked" ? 0.2 : 0.5}
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: node.id * 0.1 }}
                      />
                    );
                  })}
                </svg>

                {/* Learning Nodes */}
                {learningNodes.map((node) => {
                  const pos = getNodePosition(node.angle, node.distance);
                  const StatusIcon = getStatusIcon(node.status);

                  return (
                    <motion.button
                      key={node.id}
                      className="absolute"
                      style={{
                        left: `calc(50% + ${pos.x}px)`,
                        top: `calc(50% + ${pos.y}px)`,
                        transform: "translate(-50%, -50%)",
                      }}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: node.id * 0.1, type: "spring" }}
                      onClick={() => setSelectedNode(node)}
                      whileHover={{ scale: 1.1 }}
                    >
                      {node.status === "current" && (
                        <motion.div
                          className="absolute inset-0 rounded-full border-2"
                          style={{ borderColor: getStatusColor(node.status) }}
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 0, 0.5],
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      )}

                      <div
                        className="w-16 h-16 rounded-full border-4 flex items-center justify-center bg-white dark:bg-[#001F54] shadow-lg relative"
                        style={{
                          borderColor: getStatusColor(node.status),
                        }}
                      >
                        {node.status === "completed" && (
                          <div
                            className="absolute inset-0 rounded-full blur-md opacity-50"
                            style={{
                              backgroundColor: getStatusColor(node.status),
                            }}
                          />
                        )}

                        <StatusIcon
                          className="w-8 h-8 relative z-10"
                          style={{ color: getStatusColor(node.status) }}
                        />
                      </div>

                      <div
                        className="mt-2 text-xs text-center max-w-[80px]"
                        style={{
                          color:
                            node.status === "locked"
                              ? "#CCCCCC"
                              : "#001F54",
                        }}
                      >
                        {node.title}
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Node Details Panel */}
          <div>
            <motion.div
              className="bg-white/60 dark:bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-[#FFD95A]/20 sticky top-24"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              {selectedNode ? (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{
                        backgroundColor: `${getStatusColor(
                          selectedNode.status
                        )}20`,
                      }}
                    >
                      {(() => {
                        const Icon = getStatusIcon(selectedNode.status);
                        return (
                          <Icon
                            className="w-6 h-6"
                            style={{
                              color: getStatusColor(selectedNode.status),
                            }}
                          />
                        );
                      })()}
                    </div>
                    <div>
                      <h3 className="text-xl text-[#001F54] dark:text-white">
                        {selectedNode.title}
                      </h3>
                      <span
                        className="text-sm capitalize"
                        style={{
                          color: getStatusColor(selectedNode.status),
                        }}
                      >
                        {selectedNode.status}
                      </span>
                    </div>
                  </div>

                  <p className="text-[#001F54]/70 dark:text-white/70 mb-6">
                    {selectedNode.description}
                  </p>

                  {selectedNode.status === "completed" && (
                    <div className="space-y-3 mb-6">
                      <h4 className="text-sm text-[#001F54] dark:text-white">
                        Completed Lessons:
                      </h4>
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-sm text-[#001F54]/60 dark:text-white/60"
                        >
                          <Check className="w-4 h-4 text-[#FFD95A]" />
                          Lesson {i} - Mastered
                        </div>
                      ))}
                    </div>
                  )}

                  {selectedNode.status === "current" && (
                    <div className="mb-6">
                      <h4 className="text-sm text-[#001F54] dark:text-white mb-3">
                        Progress:
                      </h4>
                      <div className="relative h-2 bg-[#001F54]/10 dark:bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#FFD95A] to-[#56CCF2]"
                          initial={{ width: 0 }}
                          animate={{ width: "60%" }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                      </div>
                      <p className="text-xs text-[#001F54]/60 dark:text-white/60 mt-2">
                        60% Complete
                      </p>
                    </div>
                  )}

                  {selectedNode.status !== "locked" ? (
                    <button className="w-full py-3 px-6 bg-gradient-to-r from-[#FFD95A] to-[#56CCF2] text-[#001F54] rounded-xl hover:shadow-lg hover:shadow-[#FFD95A]/30 transition-all">
                      {selectedNode.status === "completed"
                        ? "Review"
                        : "Continue Learning"}
                    </button>
                  ) : (
                    <div className="text-center py-4 text-[#001F54]/60 dark:text-white/60 text-sm">
                      Complete previous modules to unlock
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#FFD95A] to-[#56CCF2] flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-[#001F54]" />
                  </div>
                  <p className="text-[#001F54]/60 dark:text-white/60">
                    Select a node to view details
                  </p>
                </div>
              )}
            </motion.div>

            {/* Quote Card */}
            <motion.div
              className="mt-6 bg-white/60 dark:bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-[#FFD95A]/20"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <blockquote className="text-sm italic text-[#001F54] dark:text-[#FFD95A] mb-2">
                "Knowledge once gained flows forever"
              </blockquote>
              <p className="text-xs text-[#001F54]/60 dark:text-white/60">
                Completed lessons radiate eternal light
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
