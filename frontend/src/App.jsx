import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { HomePage } from './pages/homepage';
import AITutorPage from './pages/AITutor';
import { LearningPathPage } from './pages/learningpathpage';
import { ProfilePage } from './pages/profilepage';
import SummaryPage from './pages/summarypage';
import ChatWidget from './pages/chatwidget';
import Navigation from './components/Navigation';



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
        <ChatWidget/>
      </div>
    </Router>
  );
}
