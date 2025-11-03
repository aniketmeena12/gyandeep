import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Moon, Sun } from 'lucide-react';

import HomePage from './components/HomePage';
import AITutorPage from './components/AITutorPage';
import LearningPathPage from './components/LearningPathPage';
import SummaryPage from './components/SummaryPage';
import ProfilePage from './components/ProfilePage';
import ChatWidget from './components/ChatWidget';

function Navigation() {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/ai-tutor', label: 'AI Tutor' },
    { path: '/learning-path', label: 'Learning Path' },
    { path: '/summaries', label: 'Summaries' },
    { path: '/profile', label: 'Profile' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#001F54]/80 backdrop-blur-md border-b border-[#FFD95A]/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFD95A] to-[#56CCF2] rounded-full blur-md opacity-50 animate-pulse"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 bg-[#FFD95A] rounded-full"></div>
              <div className="absolute w-2 h-3 bg-[#001F54] rounded-t-full bottom-1"></div>
            </div>
          </div>
          <div>
            <div className="font-['Playfair_Display'] text-xl text-[#001F54] dark:text-[#FFD95A]">Gyaan-Deep</div>
            <div className="text-xs text-[#56CCF2]">ज्ञान से दीपित</div>
          </div>
        </Link>

        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm transition-colors ${
                location.pathname === link.path
                  ? 'text-[#FFD95A]'
                  : 'text-[#001F54] dark:text-white hover:text-[#56CCF2]'
              }`}
            >
              {link.label}
            </Link>
          ))}

          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-[#FFD95A]/10 hover:bg-[#FFD95A]/20 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-[#FFD95A]" />
            ) : (
              <Moon className="w-5 h-5 text-[#001F54]" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-[#001F54] transition-colors duration-300">
        <Navigation />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ai-tutor" element={<AITutorPage />} />
            <Route path="/learning-path" element={<LearningPathPage />} />
            <Route path="/summaries" element={<SummaryPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </main>
        <ChatWidget />
      </div>
    </Router>
  );
}
