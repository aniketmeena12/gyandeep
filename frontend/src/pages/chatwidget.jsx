import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <>
      {/* Chat Button */}
      <motion.button
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-[#FFD95A] to-[#56CCF2] rounded-full shadow-lg flex items-center justify-center z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle chat"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-6 h-6 text-[#001F54]" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <MessageCircle className="w-6 h-6 text-[#001F54]" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse Effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FFD95A] to-[#56CCF2]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 w-96 h-[500px] bg-white/95 dark:bg-[#001F54]/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-[#FFD95A]/20 z-40 flex flex-col overflow-hidden"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#FFD95A] to-[#56CCF2] p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#001F54] flex items-center justify-center">
                  <motion.div
                    className="w-6 h-6 bg-[#FFD95A] rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                <div className="flex-1">
                  <div className="text-[#001F54] font-semibold">AI Tutor</div>
                  <div className="text-xs text-[#001F54]/70">
                    Always here to help
                  </div>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              <motion.div
                className="flex justify-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className="max-w-[80%] bg-white/80 dark:bg-white/10 rounded-2xl rounded-tl-sm p-4 border border-[#FFD95A]/20">
                  <p className="text-sm text-[#001F54] dark:text-white">
                    Namaste! I'm your AI guide. Ask me anything about your
                    learning journey.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-[#FFD95A]/20">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your question..."
                  className="flex-1 px-4 py-3 rounded-xl bg-white/50 dark:bg-white/5 border border-[#FFD95A]/30 focus:border-[#FFD95A] focus:outline-none text-sm text-[#001F54] dark:text-white placeholder-[#001F54]/40 dark:placeholder-white/40"
                  onKeyPress={(e) => {
                    if (e.key === "Enter" && message.trim()) {
                      setMessage("");
                    }
                  }}
                />
                <button
                  className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#FFD95A] to-[#56CCF2] flex items-center justify-center hover:shadow-lg transition-all"
                  onClick={() => {
                    if (message.trim()) {
                      setMessage("");
                    }
                  }}
                  aria-label="Send message"
                >
                  <Send className="w-5 h-5 text-[#001F54]" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;
