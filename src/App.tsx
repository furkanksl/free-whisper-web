import "./App.css";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import { SEO } from "@/components/SEO";
import { useEffect, useState } from "react";
import {
  Download,
  Github,
  Shield,
  Zap,
  Heart,
  Mic,
  Lock,
  Code,
  Star,
  Cpu,
  Globe,
  FileText,
  Pause,
  Save,
  VolumeX,
  Monitor,
  AlignLeft,
  Copy,
  Maximize2,
  ArrowRight,
  Keyboard,
  Terminal,
  Play,
  Settings,
  Plus,
} from "lucide-react";

function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
    },
  };

  const stats = [
    // { icon: Users, value: "10K+", label: "Active Users" },
    { icon: Star, value: "98.5%", label: "Accuracy Rate" },
    { icon: Globe, value: "20+", label: "Languages" },
    { icon: Mic, value: "<2s", label: "Response Time" },
    { icon: Zap, value: "∞", label: "Voice Commands" },
  ];

  // Track the recording indicator position between state changes
  const [indicatorPosition, setIndicatorPosition] = useState({ x: 0, y: 0 });

  // Demo state management
  const [demoState, setDemoState] = useState("initial"); // initial, recording, transcribing, welcome
  const [typedText, setTypedText] = useState("");
  const fullWelcomeText =
    "Welcome to FreeWhisper! Your audio has been transcribed successfully.";

  // Handle keyboard shortcuts for the demo
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Check for Option + Backtick (`) shortcut - more comprehensive detection
      if (
        e.altKey &&
        (e.key === "`" || e.key === "Dead" || e.code === "Backquote")
      ) {
        e.preventDefault();
        cycleState();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [demoState]);

  // Handle the typing animation for welcome message
  useEffect(() => {
    if (demoState === "welcome") {
      let currentText = "";
      let currentIndex = 0;

      const typingInterval = setInterval(() => {
        if (currentIndex < fullWelcomeText.length) {
          currentText += fullWelcomeText[currentIndex];
          setTypedText(currentText);
          currentIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }, 80); // Slightly slower typing speed for better readability

      return () => clearInterval(typingInterval);
    } else {
      setTypedText("");
    }
  }, [demoState]);

  // Function to cycle through demo states
  const cycleState = () => {
    if (demoState === "initial") {
      setDemoState("recording");
    } else if (demoState === "recording") {
      setDemoState("transcribing");
      // Automatically transition to welcome state after 1 second
      setTimeout(() => {
        setDemoState("welcome");
      }, 1000);
    } else if (demoState === "transcribing") {
      // This branch should never be hit because of the auto-transition
      setDemoState("welcome");
    } else if (demoState === "welcome") {
      // Reset to initial state
      setDemoState("initial");
    }
  };

  return (
    <div className="min-h-screen">
      <SEO />
      <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-white to-blue-50/50 dark:from-slate-950 dark:to-blue-950/30">
        {/* Theme Toggle */}
        <div className="absolute top-6 right-6 z-20">
          <ThemeToggle />
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Main large gradient blob */}
          <motion.div
            className="absolute -top-[30%] -right-[20%] w-[80%] h-[80%] rounded-full bg-gradient-to-br from-blue-400/10 via-cyan-300/10 to-blue-500/5 dark:from-blue-500/10 dark:via-cyan-400/5 dark:to-blue-600/10 blur-3xl"
            animate={{
              x: [0, 10, -5, 0],
              y: [0, -15, 5, 0],
              scale: [1, 1.05, 0.98, 1],
              rotate: [0, 1, -1, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: [0.4, 0, 0.2, 1],
            }}
          />

          {/* Secondary blobs */}
          <motion.div
            className="absolute -bottom-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-cyan-300/10 via-blue-400/5 to-cyan-200/10 dark:from-cyan-400/10 dark:via-blue-500/5 dark:to-cyan-300/10 blur-3xl"
            animate={{
              x: [0, 10, -5, 0],
              y: [0, -15, 5, 0],
              scale: [1, 1.05, 0.98, 1],
              rotate: [0, 1, -1, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: [0.4, 0, 0.2, 1],
              delay: 2,
            }}
          />

          {/* Accent blobs */}
          <motion.div
            className="absolute top-[20%] left-[5%] w-[20%] h-[20%] rounded-full bg-gradient-to-r from-blue-400/10 via-cyan-300/10 to-blue-500/5 dark:from-blue-500/10 dark:via-cyan-400/5 dark:to-blue-600/10 blur-2xl"
            animate={{
              x: [0, 10, -5, 0],
              y: [0, -15, 5, 0],
              scale: [1, 1.05, 0.98, 1],
              rotate: [0, 1, -1, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: [0.4, 0, 0.2, 1],
              delay: 1,
            }}
          />

          <motion.div
            className="absolute bottom-[30%] right-[15%] w-[15%] h-[15%] rounded-full bg-gradient-to-l from-cyan-400/15 to-blue-300/15 dark:from-cyan-500/10 dark:to-blue-400/10 blur-2xl"
            animate={{
              x: [0, 10, -5, 0],
              y: [0, -15, 5, 0],
              scale: [1, 1.05, 0.98, 1],
              rotate: [0, 1, -1, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: [0.4, 0, 0.2, 1],
              delay: 3,
            }}
          />

          {/* More visible grid pattern overlay */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(to right, rgba(99, 179, 237, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(99, 179, 237, 0.05) 1px, transparent 1px)
            `,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 pt-24 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center"
          >
            {/* Top badge */}
            <motion.div variants={itemVariants} className="mb-8">
              <Badge
                variant="outline"
                className="backdrop-blur-md bg-white/30 dark:bg-slate-900/30 border border-blue-200/50 dark:border-blue-800/50 px-4 py-2 rounded-full"
              >
                <Star className="w-4 h-4 mr-2 fill-yellow-400 text-yellow-400" />
                <span className="text-blue-700 dark:text-blue-300 font-medium">
                  Open Source • Privacy First • Completely Free
                </span>
              </Badge>
            </motion.div>

            {/* Main heading */}
            <motion.div variants={itemVariants} className="text-center mb-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
                <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent inline-block">
                  FreeWhisper
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-slate-700 dark:text-slate-200 max-w-4xl">
                New way to communicate with your computer
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-center text-lg text-slate-600 dark:text-slate-300 max-w-2xl mb-10"
            >
              Transform your voice into text with high accuracy and control your
              system with voice commands. Built on advanced AI, runs entirely on
              your device with complete privacy, automatically mutes system
              audio during recording, and lets you launch apps, control windows,
              and execute custom commands - all for free.
            </motion.p>

            {/* Feature Pills */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-3 mb-10"
            >
              <div className="flex items-center gap-2 backdrop-blur-md rounded-full px-4 py-2 border border-blue-200/50 dark:border-blue-700/30">
                <Lock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                  100% Private
                </span>
              </div>
              <div className="flex items-center gap-2 backdrop-blur-md rounded-full px-4 py-2 border border-purple-200/50 dark:border-purple-700/30">
                <Mic className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                  Voice Commands
                </span>
              </div>
              <div className="flex items-center gap-2 backdrop-blur-md rounded-full px-4 py-2 border border-cyan-200/50 dark:border-cyan-700/30">
                <Code className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                  Open Source
                </span>
              </div>
              <div className="flex items-center gap-2 backdrop-blur-md rounded-full px-4 py-2 border border-blue-200/50 dark:border-blue-700/30">
                <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                  Forever Free
                </span>
              </div>
            </motion.div>

            {/* CTA Buttons - Completely Redesigned */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center mb-16"
            >
              {/* Main download button with 3D effect */}
              <div className="relative group mb-6">
                {/* 3D layers for depth effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/80 to-cyan-500/80 rounded-2xl blur opacity-30 group-hover:opacity-40 transition duration-300"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/80 to-cyan-500/80 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300 delay-75"></div>
                <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600/80 to-cyan-500/80 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-300 delay-100"></div>

                {/* Main button */}
                <a
                  href="https://github.com/furkanksl/FreeWhisper/releases/download/0.0.9/FreeWhisper.dmg"
                  className="relative flex items-center gap-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white px-4 py-3 rounded-2xl border border-blue-200/50 dark:border-blue-800/50 shadow-lg transition-all duration-300 group-hover:shadow-blue-500/20 dark:group-hover:shadow-cyan-500/20 cursor-pointer"
                >
                  {/* macOS logo */}
                  <div className="relative w-14 h-14 flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl"></div>
                    <div className="absolute inset-0.5 bg-white dark:bg-slate-900 rounded-[10px] flex items-center justify-center">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-8 h-8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09998 22C7.78998 22.05 6.79998 20.68 5.95998 19.47C4.24998 17 2.93998 12.45 4.69998 9.39C5.56998 7.87 7.12998 6.91 8.81998 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.35 4.26 13 3.5Z"
                          fill="url(#paint0_linear)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear"
                            x1="2.5"
                            y1="12"
                            x2="21.5"
                            y2="12"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#4F46E5" />
                            <stop offset="1" stopColor="#06B6D4" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>

                  {/* Text content */}
                  <div className="text-left">
                    {/* <div className="text-sm text-slate-600 dark:text-slate-400">
                      Download Now
                    </div> */}
                    <div className="text-xl font-bold">MacOS only</div>
                    <div className="flex items-center mt-1 text-xs text-slate-500 dark:text-slate-400">
                      <span className="flex items-center">
                        <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-1"></span>
                        Apple Silicon
                      </span>
                      <span className="mx-2">•</span>
                      <span>Free</span>
                    </div>
                  </div>

                  {/* Download icon */}
                  <div className="ml-auto bg-transparent border border-blue-200/50 dark:border-blue-800/50 p-3 rounded-lg text-blue-600 dark:text-blue-400">
                    <Download className="w-5 h-5" />
                  </div>
                </a>
              </div>

              {/* GitHub button */}
              <motion.div
                className="flex items-center gap-2 text-slate-700 dark:text-slate-300"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <a
                  href="https://github.com/furkanksl/FreeWhisper"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                >
                  <Github className="w-5 h-5" />
                  <span className="font-medium">View on GitHub</span>
                </a>
                <span className="mx-2 text-slate-400">•</span>
                <a
                  href="https://github.com/furkanksl/FreeWhisper/stargazers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                >
                  <Star className="w-5 h-5" />
                  <span className="font-medium">Star</span>
                </a>
              </motion.div>
            </motion.div>
            {/* Stats - Updated */}
            <div className="max-w-3xl mx-auto mb-20 mt-40">
              <div className="bg-white/30 dark:bg-slate-900/30 backdrop-blur-sm rounded-xl p-8 border border-blue-100/50 dark:border-blue-900/50">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content Area - Completely Different Approach */}
            <motion.div variants={itemVariants} className="w-full mb-16">
              {/* App Preview - Enhanced Version */}
              <div className="max-w-5xl mx-auto mb-20">
                <div className="relative">
                  {/* 3D-style layered interface - Enhanced */}

                  {/* Bottom feature highlight - Redesigned */}
                  <div className="relative mt-44">
                    {/* Background decorative elements */}
                    <div className="absolute inset-0 -z-10 overflow-hidden">
                      {/* <motion.div className="absolute -top-20 -left-10 w-64 h-64 rounded-full bg-blue-500/10 dark:bg-blue-500/5 blur-3xl"></motion.div> */}
                      <motion.div className="absolute -bottom-20 -right-10 w-64 h-64 rounded-full bg-cyan-500/10 dark:bg-cyan-500/5 blur-3xl"></motion.div>
                    </div>

                    {/* Section heading */}
                    <motion.div
                      className="text-center mb-12"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent inline-block mb-3">
                        Powerful Features
                      </h2>
                      <p className="text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
                        Experience the perfect blend of privacy, performance,
                        and precision
                      </p>
                    </motion.div>

                    {/* Features cards - redesigned with staggered animation */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                      {[
                        {
                          icon: Shield,
                          label: "Privacy First",
                          desc: "Your audio never leaves your device, ensuring complete confidentiality and security for all your transcriptions and voice commands.",
                          color: "from-blue-500 to-blue-600",
                          bgColor:
                            "from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20",
                          delay: 0,
                        },
                        {
                          icon: Mic,
                          label: "Voice Commands",
                          desc: "Control your system with natural voice commands. Launch apps, align windows, copy text, and execute custom shell commands effortlessly.",
                          color: "from-purple-500 to-purple-600",
                          bgColor:
                            "from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20",
                          delay: 0.1,
                        },
                        {
                          icon: VolumeX,
                          label: "Smart Audio Control",
                          desc: "Automatically mutes system audio during recording to prevent interference and ensure crystal-clear voice capture for both transcription and commands.",
                          color: "from-cyan-500 to-cyan-600",
                          bgColor:
                            "from-cyan-50 to-cyan-100 dark:from-cyan-900/20 dark:to-cyan-800/20",
                          delay: 0.2,
                        },
                        {
                          icon: Cpu,
                          label: "AI-Powered",
                          desc: "Advanced Whisper AI model delivers industry-leading accuracy for crystal-clear transcriptions and precise voice command recognition.",
                          color: "from-blue-400 to-cyan-500",
                          bgColor:
                            "from-blue-50 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-800/20",
                          delay: 0.3,
                        },
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          className="relative group"
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: item.delay, duration: 0.6 }}
                        >
                          {/* Card */}
                          <div className="relative h-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-2xl p-8 flex flex-col shadow-lg border border-slate-200/50 dark:border-slate-700/50 overflow-hidden z-10">
                            {/* Gradient background */}
                            <div
                              className={`absolute inset-0 bg-gradient-to-br ${item.bgColor} opacity-40 dark:opacity-30 -z-10`}
                            ></div>

                            {/* Subtle light beams */}
                            {[...Array(3)].map((_, index) => {
                              const width = 1 + Math.random() * 2;
                              const height = 60 + Math.random() * 80;
                              const rotation = Math.random() * 180;
                              const posX = Math.random() * 100;
                              const posY = Math.random() * 100;
                              const duration = 30 + Math.random() * 40;
                              const delay = Math.random() * 10;

                              return (
                                <motion.div
                                  key={index}
                                  className={`absolute bg-gradient-to-b ${item.color} opacity-5 blur-sm`}
                                  style={{
                                    width: `${width}px`,
                                    height: `${height}px`,
                                    left: `${posX}%`,
                                    top: `${posY}%`,
                                    transformOrigin: "center",
                                    transform: `rotate(${rotation}deg)`,
                                  }}
                                  animate={{
                                    rotate: [
                                      `${rotation}deg`,
                                      `${rotation + 20}deg`,
                                      `${rotation}deg`,
                                    ],
                                    x: [0, 15 * (Math.random() - 0.5), 0],
                                    y: [0, 15 * (Math.random() - 0.5), 0],
                                  }}
                                  transition={{
                                    duration: duration,
                                    repeat: Infinity,
                                    ease: [0.4, 0, 0.2, 1],
                                    delay: delay,
                                  }}
                                ></motion.div>
                              );
                            })}

                            {/* Icon with subtle glow */}
                            <div className="relative mb-6">
                              <motion.div
                                className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-full blur-md opacity-20`}
                                animate={{ scale: [0.95, 1.05, 0.95] }}
                                transition={{
                                  duration: 6,
                                  repeat: Infinity,
                                  ease: [0.4, 0, 0.2, 1],
                                }}
                              ></motion.div>
                              <div
                                className={`relative w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg`}
                              >
                                <item.icon
                                  className="w-8 h-8 text-white"
                                  strokeWidth={1.5}
                                />
                              </div>
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">
                              {item.label}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-300">
                              {item.desc}
                            </p>
                          </div>

                          {/* Subtle hover effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 dark:from-blue-500/10 dark:to-cyan-500/10 rounded-2xl -z-10"
                            initial={{ opacity: 0, y: 5 }}
                            whileHover={{
                              opacity: 1,
                              y: 4,
                              transition: { duration: 0.3 },
                            }}
                          ></motion.div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Voice Commands Showcase - Simple & Clean */}
              <div className="max-w-4xl mx-auto mb-20 mt-40">
                {/* Section Header */}
                <motion.div
                  className="text-center mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent inline-block mb-3">
                    Voice Commands
                  </h2>
                  <p className="text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
                    Control your system naturally with voice. Just speak and
                    watch it happen.
                  </p>
                </motion.div>

                {/* Simple Command Grid */}
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {[
                    { command: "Open Safari", category: "Launch Apps" },
                    { command: "Align left", category: "Window Control" },
                    { command: "Copy all", category: "Quick Actions" },
                    { command: "Make fullscreen", category: "Window Control" },
                    { command: "Save file", category: "Quick Actions" },
                    { command: "Lock screen", category: "System Control" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center justify-between p-4 bg-white/50 dark:bg-slate-800/50 rounded-xl border border-slate-200/50 dark:border-slate-700/50"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    >
                      <div>
                        <p className="font-medium text-slate-800 dark:text-white">
                          "{item.command}"
                        </p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          {item.category}
                        </p>
                      </div>
                      <Mic className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Simple CTA */}
                {/* <motion.div
                  className="text-center mt-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Press{" "}
                    <kbd className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs">
                      ⌥ + `
                    </kbd>{" "}
                    to start
                  </p>
                </motion.div> */}
              </div>

              {/* Recording Indicators Showcase - Updated */}
              <div className="max-w-5xl mx-auto mb-20 mt-40">
                <motion.div
                  className="text-center mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent inline-block mb-3">
                    Seamless Voice Interaction
                  </h2>
                  <p className="text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
                    Elegant interface with keyboard shortcuts for both
                    transcription and voice commands
                  </p>
                </motion.div>

                {/* Interactive Demo Area */}
                <div className="relative w-full max-w-3xl h-[400px] mx-auto bg-gradient-to-br from-slate-100 to-white dark:from-slate-900 dark:to-slate-800 rounded-2xl overflow-hidden shadow-xl border border-slate-200/50 dark:border-slate-700/50">
                  {/* Grid background */}
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[url('/grid-pattern-dark.svg')] opacity-10 dark:opacity-20"></div>
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `
                        linear-gradient(to right, rgba(203, 213, 225, 0.3) 0.5px, transparent 0.5px),
                        linear-gradient(to bottom, rgba(203, 213, 225, 0.3) 0.5px, transparent 0.5px)
                      `,
                        backgroundSize: "20px 20px",
                      }}
                    ></div>
                  </div>

                  {/* State-based indicators */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    {/* State 1: Recording indicator */}
                    <motion.div
                      className="absolute z-30"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{
                        scale: demoState === "recording" ? 1 : 0,
                        opacity: demoState === "recording" ? 1 : 0,
                        x: 0,
                        y: 0,
                      }}
                      transition={{
                        scale: { duration: 0.3 },
                        opacity: { duration: 0.3 },
                      }}
                      style={{
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      {/* Shadow effect for depth */}
                      {/* <div className="absolute -inset-1 bg-slate-400/20 dark:bg-red-500/20 rounded-full blur-md -z-10"></div> */}

                      {/* Recording indicator with pulsing dot */}
                      <motion.div
                        className="flex items-center px-6 py-2.5 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md rounded-full shadow-lg border border-slate-200 dark:border-slate-700 cursor-grab active:cursor-grabbing"
                        drag={demoState === "recording"}
                        dragMomentum={false}
                        dragElastic={0.1}
                        animate={{
                          x: indicatorPosition.x,
                          y: indicatorPosition.y,
                        }}
                        onDragEnd={(_, info) => {
                          setIndicatorPosition({
                            x: info.offset.x,
                            y: info.offset.y,
                          });
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileDrag={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="h-1 w-10 bg-slate-200 dark:bg-slate-700 rounded-full absolute top-1 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

                        <div className="relative">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <motion.div
                            className="absolute inset-0 rounded-full bg-red-500"
                            animate={{
                              scale: [1, 1.6, 1],
                              opacity: [0.8, 0, 0.8],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: [0.4, 0, 0.2, 1],
                            }}
                          ></motion.div>
                        </div>
                        <span className="ml-3 text-slate-800 dark:text-white font-light select-none text-sm">
                          Recording...
                        </span>
                      </motion.div>
                    </motion.div>

                    {/* State 2: Transcribing indicator */}
                    <motion.div
                      className="absolute z-30"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{
                        scale: demoState === "transcribing" ? 1 : 0,
                        opacity: demoState === "transcribing" ? 1 : 0,
                        x: indicatorPosition.x,
                        y: indicatorPosition.y,
                      }}
                      transition={{
                        scale: { duration: 0.3 },
                        opacity: { duration: 0.3 },
                      }}
                      style={{
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      {/* Shadow effect for depth */}
                      {/* <div className="absolute -inset-1 bg-slate-400/20 dark:bg-blue-500/20 rounded-full blur-md -z-10"></div> */}

                      {/* Transcribing indicator */}
                      <div className="relative flex items-center px-6 py-2.5 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md rounded-full shadow-lg border border-slate-200 dark:border-slate-700">
                        <div className="h-1 w-10 bg-slate-200 dark:bg-slate-700 rounded-full absolute top-1 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

                        <div className="relative flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-blue-500 dark:text-blue-400 animate-spin"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                              fill="none"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                        </div>
                        <span className="ml-3 text-slate-800 dark:text-white font-light select-none text-sm">
                          Transcribing...
                        </span>
                      </div>
                    </motion.div>

                    {/* State 3: Welcome message with typing animation - directly on canvas */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: demoState === "welcome" ? 1 : 0,
                      }}
                      transition={{
                        opacity: { duration: 0.5 },
                      }}
                    >
                      <div className="text-center px-8 max-w-2xl">
                        <motion.p
                          className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-slate-700 to-slate-500 dark:from-slate-100 dark:via-slate-200 dark:to-slate-400 bg-clip-text text-transparent leading-relaxed"
                          initial={{ scale: 0.9, opacity: 0 }}
                          animate={{
                            scale: demoState === "welcome" ? 1 : 0.9,
                            opacity: demoState === "welcome" ? 1 : 0,
                          }}
                          transition={{ duration: 0.4, delay: 0.2 }}
                        >
                          {typedText}
                          <motion.span
                            className="inline-block w-1 h-8 bg-slate-500 dark:bg-slate-300 ml-1 align-middle"
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                          ></motion.span>
                        </motion.p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Keyboard shortcut display */}
                  <motion.div
                    className="absolute bottom-4 left-0 right-0 text-center"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <motion.div
                      className="inline-flex items-center px-4 py-2 bg-white/70 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-full backdrop-blur-sm gap-2 cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      onClick={cycleState}
                    >
                      <div className="flex space-x-1">
                        <kbd className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-semibold rounded-md border border-slate-300 dark:border-slate-600">
                          ⌥
                        </kbd>
                        <kbd className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-semibold rounded-md border border-slate-300 dark:border-slate-600">
                          `
                        </kbd>
                      </div>
                      <span>Click or use shortcut to cycle states</span>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Caption */}
                <motion.div
                  className="text-center mt-8"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <p className="text-slate-600 dark:text-slate-400 text-sm max-w-xl mx-auto">
                    Press{" "}
                    <kbd className="px-1.5 py-0.5 text-xs bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded">
                      ⌥
                    </kbd>
                    +
                    <kbd className="px-1.5 py-0.5 text-xs bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded">
                      `
                    </kbd>{" "}
                    to start recording for transcription or voice commands. The
                    recording indicator can be dragged anywhere. All processing
                    happens locally on your device for complete privacy.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA - Redesigned for smoother, softer appearance */}
        <div className="text-center mt-2 mb-8">
          <div className="relative inline-flex flex-col items-center">
            {/* Softer floating elements with larger blur */}
            {/* <motion.div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-gradient-to-br from-blue-400/10 to-cyan-300/10 dark:from-blue-400/5 dark:to-cyan-300/5 blur-[80px]"></motion.div>
            <motion.div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-gradient-to-tr from-cyan-400/10 to-blue-300/10 dark:from-cyan-400/5 dark:to-blue-300/5 blur-[80px]"></motion.div> */}

            {/* Main card with softer styling */}
            <div className="relative p-10 max-w-2xl overflow-hidden">
              {/* Subtle inner gradient */}
              {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 to-cyan-50/40 dark:from-blue-900/10 dark:to-cyan-900/10 rounded-[28px] -z-10"></div> */}

              {/* Subtle accent lines */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-blue-400/30 dark:via-blue-400/20 to-transparent"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 dark:via-cyan-400/20 to-transparent"></div>

              {/* Content with improved typography */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-[28px] font-bold mb-3 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent inline-block">
                  Ready to Control Everything with Your Voice?
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-md mx-auto">
                  Transform your voice into text and commands with unmatched
                  accuracy and privacy, all for free.
                </p>

                {/* Download button with softer animation */}
                <motion.div
                  className="inline-block"
                  whileHover={{
                    y: -3,
                    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
                  }}
                >
                  <a
                    href="https://github.com/furkanksl/FreeWhisper/releases/download/0.0.9/FreeWhisper.dmg"
                    className="group cursor-pointer"
                  >
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-[1px] rounded-full">
                      <div className="flex items-center gap-3 bg-white dark:bg-slate-900 rounded-full px-8 py-3.5 group-hover:bg-opacity-0 group-hover:dark:bg-opacity-0 transition-all duration-300">
                        <svg
                          viewBox="0 0 24 24"
                          className="w-6 h-6 text-blue-600 dark:text-blue-400 dark:group-hover:text-white transition-colors duration-300"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09998 22C7.78998 22.05 6.79998 20.68 5.95998 19.47C4.24998 17 2.93998 12.45 4.69998 9.39C5.56998 7.87 7.12998 6.91 8.81998 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.35 4.26 13 3.5Z" />
                        </svg>
                        <span className="text-slate-800 dark:text-white font-medium dark:group-hover:text-white transition-colors duration-300">
                          Download for macOS
                        </span>
                      </div>
                    </div>
                  </a>
                </motion.div>
              </motion.div>

              {/* System requirements with improved spacing and styling */}
              <div className="mt-6 text-xs text-slate-500 dark:text-slate-400 flex items-center justify-center">
                <div className="flex items-center space-x-4 px-4 py-2 bg-slate-100/50 dark:bg-slate-800/50 rounded-full">
                  <span className="flex items-center">
                    <Cpu className="w-3.5 h-3.5 mr-1.5 text-blue-500 dark:text-blue-400" />
                    Apple Silicon
                  </span>
                  <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                  <span className="flex items-center">
                    <svg
                      className="w-3.5 h-3.5 mr-1.5 text-blue-500 dark:text-blue-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M12 12L16 10M12 12V16.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                    macOS 12+
                  </span>
                  <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                  <span className="flex items-center">
                    <Lock className="w-3.5 h-3.5 mr-1.5 text-blue-500 dark:text-blue-400" />
                    100% Private
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
