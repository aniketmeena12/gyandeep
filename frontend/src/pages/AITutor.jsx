import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mic, Volume2, FileText, HelpCircle, BookOpen } from 'lucide-react';

export default function AITutorPage() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content:
        'Namaste! I am your AI tutor, here to guide you on your learning journey. How may I illuminate your path today?',
      timestamp: new Date(),
    },
  ]);

  const [inputValue, setInputValue] = useState('');
  const [isThinking, setIsThinking] = useState(false);

  const quickTools = [
    { icon: FileText, label: 'Summarize', color: '#FFD95A' },
    { icon: HelpCircle, label: 'Explain', color: '#56CCF2' },
    { icon: BookOpen, label: 'Quiz Me', color: '#FFD95A' },
  ];

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInputValue('');
    setIsThinking(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage = {
        id: messages.length + 2,
        type: 'ai',
        content: `I understand you're interested in "${inputValue}". Let me provide you with a comprehensive explanation that breaks down this concept into digestible parts. This knowledge will illuminate your understanding and help you progress on your learning path.`,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsThinking(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#56CCF2]/10 via-white to-[#FFD95A]/10 dark:from-[#001F54] dark:via-[#001F54] dark:to-[#001F54]/80 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-['Playfair_Display'] text-5xl text-[#001F54] dark:text-[#FFD95A] mb-4">
            AI Tutor
          </h1>
          <p className="text-[#56CCF2]">
            Ask, Learn, Evolve — Your personal guide to enlightenment
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Chat Interface */}
          <div className="lg:col-span-3">
            <div className="bg-white/60 dark:bg-white/5 backdrop-blur-xl rounded-3xl border border-[#FFD95A]/20 overflow-hidden shadow-xl">
              {/* Messages Area */}
              <div className="h-[600px] overflow-y-auto p-8 space-y-6">
                <AnimatePresence>
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      className={`flex ${
                        message.type === 'user' ? 'justify-end' : 'justify-start'
                      }`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                    >
                      {message.type === 'ai' && (
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFD95A] to-[#56CCF2] flex items-center justify-center mr-3 flex-shrink-0">
                          <div className="w-6 h-6 bg-[#001F54] rounded-full relative">
                            <motion.div
                              className="absolute inset-0 bg-[#FFD95A] rounded-full"
                              animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.5, 0.8, 0.5],
                              }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                          </div>
                        </div>
                      )}

                      <div
                        className={`max-w-[70%] rounded-2xl px-6 py-4 ${
                          message.type === 'user'
                            ? 'bg-gradient-to-r from-[#FFD95A] to-[#56CCF2] text-[#001F54]'
                            : 'bg-white/80 dark:bg-white/10 text-[#001F54] dark:text-white border border-[#FFD95A]/20'
                        }`}
                      >
                        <p>{message.content}</p>
                        <span className="text-xs opacity-60 mt-2 block">
                          {message.timestamp.toLocaleTimeString()}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Thinking Indicator */}
                {isThinking && (
                  <motion.div
                    className="flex justify-start"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFD95A] to-[#56CCF2] flex items-center justify-center mr-3">
                      <div className="w-6 h-6 bg-[#001F54] rounded-full"></div>
                    </div>
                    <div className="bg-white/80 dark:bg-white/10 rounded-2xl px-6 py-4 border border-[#FFD95A]/20">
                      <div className="flex space-x-2">
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="w-2 h-2 bg-[#56CCF2] rounded-full"
                            animate={{
                              y: [0, -8, 0],
                              opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              delay: i * 0.2,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Input Area */}
              <div className="border-t border-[#FFD95A]/20 p-6">
                <div className="flex gap-3">
                  <button
                    className="p-4 rounded-xl bg-[#56CCF2]/10 hover:bg-[#56CCF2]/20 transition-colors"
                    aria-label="Voice input"
                  >
                    <Mic className="w-5 h-5 text-[#56CCF2]" />
                  </button>

                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Ask anything... knowledge awaits"
                    className="flex-1 px-6 py-4 rounded-xl bg-white/50 dark:bg-white/5 border border-[#FFD95A]/30 focus:border-[#FFD95A] focus:outline-none text-[#001F54] dark:text-white placeholder-[#001F54]/40 dark:placeholder-white/40"
                  />

                  <button
                    onClick={handleSend}
                    className="p-4 rounded-xl bg-gradient-to-r from-[#FFD95A] to-[#56CCF2] hover:shadow-lg hover:shadow-[#FFD95A]/30 transition-all"
                    aria-label="Send message"
                  >
                    <Send className="w-5 h-5 text-[#001F54]" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* AI Avatar */}
            <motion.div
              className="bg-white/60 dark:bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-[#FFD95A]/20"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="relative w-32 h-32 mx-auto mb-4">
                {/* Chakra Animation */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      'conic-gradient(from 0deg, #FFD95A, #56CCF2, #FFD95A)',
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                />
                <div className="absolute inset-2 rounded-full bg-white dark:bg-[#001F54]"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FFD95A] to-[#56CCF2]">
                    <motion.div
                      className="w-full h-full rounded-full bg-[#001F54]"
                      animate={{
                        scale: [0.9, 1, 0.9],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                </div>
              </div>
              <h3 className="text-center text-[#001F54] dark:text-white mb-2">
                AI Guide
              </h3>
              <p className="text-center text-sm text-[#001F54]/60 dark:text-white/60">
                Powered by wisdom & intelligence
              </p>
            </motion.div>

            {/* Quick Tools */}
            <motion.div
              className="bg-white/60 dark:bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-[#FFD95A]/20"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-[#001F54] dark:text-white mb-4">Quick Tools</h3>
              <div className="space-y-3">
                {quickTools.map((tool, index) => (
                  <button
                    key={index}
                    className="w-full flex items-center gap-3 p-3 rounded-xl bg-white/50 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 border border-transparent hover:border-[#FFD95A]/30 transition-all"
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${tool.color}20` }}
                    >
                      <tool.icon className="w-5 h-5" style={{ color: tool.color }} />
                    </div>
                    <span className="text-[#001F54] dark:text-white">
                      {tool.label}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Transcript */}
            <motion.div
              className="bg-white/60 dark:bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-[#FFD95A]/20"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-[#001F54] dark:text-white">Transcript</h3>
                <Volume2 className="w-5 h-5 text-[#56CCF2]" />
              </div>
              <p className="text-sm text-[#001F54]/60 dark:text-white/60">
                Your conversation history will appear here for easy review and reference.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
