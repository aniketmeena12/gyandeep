import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Sun,
  Moon,
  Menu,
  Home,
  BookOpen,
  GraduationCap,
  FileText,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

export default function Navigation() {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const leftLinks = [
    { path: "/", label: "Home", icon: Home },
    { path: "/ai-tutor", label: "AI Tutor", icon: BookOpen },
    { path: "/learning-path", label: "Learning Path", icon: GraduationCap },
    { path: "/summaries", label: "Summaries", icon: FileText },
  ];

  const rightLinks = [{ path: "/profile", label: "Profile", icon: User }];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-white/90 to-[#fdfdfd]/80 dark:from-[#001F54]/90 dark:to-[#002a7a]/80 backdrop-blur-md border-b border-[#FFD95A]/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* LEFT SIDE: logo + main links */}
        <div className="flex items-center gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative w-9 h-9 flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFD95A] to-[#56CCF2] rounded-full blur-md opacity-70 animate-pulse"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-7 h-7 bg-[#FFD95A] rounded-full shadow-md"></div>
                <div className="absolute w-2 h-3 bg-[#001F54] rounded-t-full bottom-1"></div>
              </div>
            </div>
            <div className="leading-tight">
              <div className="font-['Playfair_Display'] text-lg font-semibold text-[#001F54] dark:text-[#FFD95A] group-hover:text-[#56CCF2] transition-colors">
                Gyaan-Deep
              </div>
              <div className="text-[10px] text-[#56CCF2]">ज्ञान से दीपित</div>
            </div>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-3 ml-2">
            {leftLinks.map(({ path, label, icon: Icon }) => {
              const isActive = location.pathname === path;
              return (
                <Link
                  key={path}
                  to={path}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-[#FFD95A]/20 text-[#FFD95A] shadow-inner"
                      : "text-[#001F54] dark:text-gray-100 hover:text-[#56CCF2] hover:bg-[#56CCF2]/10"
                  }`}
                >
                  <Icon
                    className={`h-4 w-4 ${
                      isActive ? "text-[#FFD95A]" : "text-[#56CCF2]"
                    }`}
                  />
                  <span className="font-medium text-[15px]">{label}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* RIGHT SIDE: Profile + Dark Mode */}
        <div className="hidden md:flex items-center gap-4">
          {rightLinks.map(({ path, label, icon: Icon }) => {
            const isActive = location.pathname === path;
            return (
              <Link
                key={path}
                to={path}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                  isActive
                    ? "bg-[#FFD95A]/20 text-[#FFD95A] shadow-inner"
                    : "text-[#001F54] dark:text-gray-100 hover:text-[#56CCF2] hover:bg-[#56CCF2]/10"
                }`}
              >
                <Icon
                  className={`h-4 w-4 ${
                    isActive ? "text-[#FFD95A]" : "text-[#56CCF2]"
                  }`}
                />
                <span className="font-medium text-[15px]">{label}</span>
              </Link>
            );
          })}

          {/* Dark mode toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="hover:bg-[#FFD95A]/20"
          >
            {darkMode ? (
              <Sun className="h-[1.2rem] w-[1.2rem] text-[#FFD95A]" />
            ) : (
              <Moon className="h-[1.2rem] w-[1.2rem] text-[#001F54]" />
            )}
          </Button>
        </div>

        {/* MOBILE MENU */}
        <div className="md:hidden flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-[#001F54] dark:text-[#FFD95A]" />
              </Button>
            </SheetTrigger>

            {/* Mobile drawer */}
            <SheetContent
              side="right"
              className="w-[260px] sm:w-[300px] bg-gradient-to-b from-[#001F54] to-[#00306b] text-white border-l border-[#FFD95A]/30 shadow-xl"
            >
              <br />
              <div className="flex flex-col gap-2">
                {[...leftLinks, ...rightLinks].map(({ path, label, icon: Icon }) => {
                  const isActive = location.pathname === path;
                  return (
                    <Link
                      key={path}
                      to={path}
                      className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 ${
                        isActive
                          ? "bg-[#FFD95A]/20 text-[#FFD95A] shadow-inner"
                          : "text-gray-200 hover:text-[#56CCF2] hover:bg-white/10"
                      }`}
                    >
                      <Icon
                        className={`h-4 w-4 ${
                          isActive ? "text-[#FFD95A]" : "text-[#56CCF2]"
                        }`}
                      />
                      <span className="text-base font-medium">{label}</span>
                    </Link>
                  );
                })}

                <Separator className="my-4 bg-[#FFD95A]/30" />

                <Button
                  variant="outline"
                  onClick={toggleDarkMode}
                  className="flex items-center justify-center gap-2 border-[#FFD95A]/40 hover:bg-[#FFD95A]/10 text-[#FFD95A] text-sm font-medium rounded-lg transition-all"
                >
                  {darkMode ? (
                    <>
                      <Sun className="h-4 w-4 text-[#FFD95A]" /> Light Mode
                    </>
                  ) : (
                    <>
                      <Moon className="h-4 w-4 text-[#FFD95A]" /> Dark Mode
                    </>
                  )}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
