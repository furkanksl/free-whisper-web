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
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const floatingBlobVariants = {
    animate: {
      x: [0, 10, -5, 0],
      y: [0, -15, 5, 0],
      scale: [1, 1.05, 0.98, 1],
      rotate: [0, 1, -1, 0],
      transition: {
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const stats = [
    // { icon: Users, value: "10K+", label: "Active Users" },
    { icon: Star, value: "98.5%", label: "Accuracy Rate" },
    { icon: Globe, value: "20+", label: "Languages" },
    { icon: Mic, value: "<2s", label: "Response Time" },
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
            variants={floatingBlobVariants}
            animate="animate"
          />

          {/* Secondary blobs */}
          <motion.div
            className="absolute -bottom-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-cyan-300/10 via-blue-400/5 to-cyan-200/10 dark:from-cyan-400/10 dark:via-blue-500/5 dark:to-cyan-300/10 blur-3xl"
            variants={floatingBlobVariants}
            animate={{
              ...floatingBlobVariants.animate,
              transition: {
                ...floatingBlobVariants.animate.transition,
                delay: 2,
              },
            }}
          />

          {/* Accent blobs */}
          <motion.div
            className="absolute top-[20%] left-[5%] w-[20%] h-[20%] rounded-full bg-gradient-to-r from-blue-400/10 via-cyan-300/10 to-blue-500/5 dark:from-blue-500/10 dark:via-cyan-400/5 dark:to-blue-600/10 blur-2xl"
            variants={floatingBlobVariants}
            animate={{
              ...floatingBlobVariants.animate,
              transition: {
                ...floatingBlobVariants.animate.transition,
                delay: 1,
                duration: 8,
              },
            }}
          />

          <motion.div
            className="absolute bottom-[30%] right-[15%] w-[15%] h-[15%] rounded-full bg-gradient-to-l from-cyan-400/15 to-blue-300/15 dark:from-cyan-500/10 dark:to-blue-400/10 blur-2xl"
            variants={floatingBlobVariants}
            animate={{
              ...floatingBlobVariants.animate,
              transition: {
                ...floatingBlobVariants.animate.transition,
                delay: 3,
                duration: 10,
              },
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
                The Ultimate Free & Private Speech-to-Text Experience
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-center text-lg text-slate-600 dark:text-slate-300 max-w-2xl mb-10"
            >
              Transform your voice into text with unprecedented accuracy and
              complete privacy. Built on advanced AI, runs entirely on your
              device, and costs absolutely nothing.
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
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300 delay-75"></div>
                <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-300 delay-100"></div>

                {/* Main button */}
                <a
                  href="https://github.com/furkanksl/FreeWhisper/releases/download/0.0.5/FreeWhisper.dmg"
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
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      Download Now
                    </div>
                    <div className="text-xl font-bold">FreeWhisper for Mac</div>
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

            {/* Main Content Area - Completely Different Approach */}
            <motion.div variants={itemVariants} className="w-full mb-16">
              {/* App Preview - Enhanced Version */}
              <div className="max-w-5xl mx-auto mb-20">
                <div className="relative">
                  {/* 3D-style layered interface - Enhanced */}
                  <div className="flex flex-col md:flex-row items-center gap-y-10">
                    {/* Left side: Floating cards - Enhanced */}
                    <div className="w-full md:w-1/2 relative h-[450px] mt-28">
                      {/* Background elements */}
                      <div className="absolute top-5 right-0 w-4/5 h-4/5 bg-gradient-to-br from-blue-600/70 to-cyan-600/70 rounded-3xl transform rotate-6 shadow-xl"></div>
                      <motion.div
                        className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full blur-xl"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />

                      {/* Main card - Enhanced */}
                      <motion.div
                        className="absolute top-10 right-5 w-[85%] bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-6 z-10 border border-slate-200/50 dark:border-slate-700/50"
                        initial={{ y: 20, opacity: 0, rotateZ: 6 }}
                        animate={{ y: 0, opacity: 1, rotateZ: 0 }}
                        transition={{ duration: 0.7, type: "spring" }}
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-md bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                              <Mic className="w-4 h-4 text-white" />
                            </div>
                            <span className="ml-2 font-medium text-slate-800 dark:text-white">
                              Voice Recording
                            </span>
                          </div>
                          <div className="flex items-center">
                            <span className="text-xs text-slate-500 dark:text-slate-400 mr-2">
                              00:24
                            </span>
                            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                          </div>
                        </div>

                        {/* Waveform - Enhanced */}
                        <div className="flex items-end h-16 space-x-1 mb-6 bg-slate-50/50 dark:bg-slate-800/50 rounded-lg p-3">
                          {[...Array(48)].map((_, i) => {
                            // Create a more natural looking waveform pattern
                            const baseHeight = 10;
                            const maxVariation = 25;
                            const position = i / 32;
                            const pattern =
                              Math.sin(position * Math.PI * 4) *
                              Math.sin(position * Math.PI * 2.5);
                            const height =
                              baseHeight + Math.abs(pattern) * maxVariation;

                            return (
                              <motion.div
                                key={i}
                                className={`w-1 ${
                                  i % 5 === 0
                                    ? "bg-blue-500"
                                    : i % 3 === 0
                                    ? "bg-cyan-500"
                                    : "bg-gradient-to-t from-blue-500 to-cyan-500"
                                } rounded-full`}
                                style={{ height: `${height}px` }}
                                animate={{
                                  height: [
                                    `${height}px`,
                                    `${height + (Math.random() * 10 - 5)}px`,
                                    `${height}px`,
                                  ],
                                  opacity:
                                    i % 3 === 0 ? [0.7, 1, 0.7] : undefined,
                                }}
                                transition={{
                                  duration: 1.5 + Math.random(),
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                  delay: i * 0.03,
                                }}
                              />
                            );
                          })}
                        </div>

                        <div className="flex justify-between items-center">
                          <p className="text-slate-700 dark:text-slate-300 text-sm">
                            "Transform your voice into text..."
                          </p>
                          <motion.div
                            className="w-8 h-8 rounded-full bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center"
                            whileHover={{
                              scale: 1.1,
                              backgroundColor: "rgba(59, 130, 246, 0.2)",
                            }}
                          >
                            <Pause className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                          </motion.div>
                        </div>
                      </motion.div>

                      {/* Secondary card - Enhanced */}
                      <motion.div
                        className="absolute bottom-10 left-5 w-[80%] bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-6 z-20 border border-slate-200/50 dark:border-slate-700/50"
                        initial={{ y: 20, opacity: 0, rotateZ: -3 }}
                        animate={{ y: 0, opacity: 1, rotateZ: 0 }}
                        transition={{
                          duration: 0.7,
                          delay: 0.2,
                          type: "spring",
                        }}
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <div className="w-6 h-6 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                              <FileText className="w-3 h-3 text-white" />
                            </div>
                            <span className="ml-2 text-sm font-medium text-slate-800 dark:text-white">
                              Transcription
                            </span>
                          </div>
                          <Badge className="bg-green-500/10 text-green-600 dark:bg-green-500/20 dark:text-green-400 hover:bg-green-500/20">
                            99% Accurate
                          </Badge>
                        </div>

                        <div className="bg-slate-50/80 dark:bg-slate-800/80 rounded-lg p-4 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50">
                          <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                            Transform your voice into text with unmatched
                            accuracy and privacy.
                            <motion.span
                              className="inline-block w-0.5 h-4 bg-blue-500 ml-1 align-middle"
                              animate={{ opacity: [1, 0, 1] }}
                              transition={{ duration: 1, repeat: Infinity }}
                            />
                          </p>
                        </div>

                        <div className="flex justify-end mt-3">
                          <motion.button
                            className="text-xs text-blue-600 dark:text-blue-400 flex items-center"
                            whileHover={{ scale: 1.05 }}
                          >
                            <Save className="w-3 h-3 mr-1" /> Save
                          </motion.button>
                        </div>
                      </motion.div>
                    </div>

                    {/* Right side: Interactive 3D element - Enhanced */}
                    <div className="w-full md:w-1/2 h-[450px] flex items-center justify-center">
                      <div className="relative w-72 h-72">
                        {/* Background glow */}
                        <motion.div
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full bg-gradient-to-r  blur-xl"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 0.8, 0.5],
                          }}
                          transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />

                        {/* Orbiting elements - Fixed positioning with lines pointing to center */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          {[...Array(3)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-full h-full"
                              style={{
                                width: "100%",
                                height: "100%",
                                transformOrigin: "center",
                              }}
                              animate={{
                                rotate: [0, 360],
                              }}
                              transition={{
                                duration: 25,
                                repeat: Infinity,
                                ease: "linear",
                                repeatType: "loop",
                              }}
                            >
                              <motion.div
                                className="absolute"
                                style={{
                                  top: `${
                                    50 - Math.sin(i * ((2 * Math.PI) / 3)) * 40
                                  }%`,
                                  left: `${
                                    50 + Math.cos(i * ((2 * Math.PI) / 3)) * 40
                                  }%`,
                                  transform: "translate(-50%, -50%)",
                                }}
                              >
                                <div className="relative w-10 h-10 rounded-full bg-gradient-to-r dark:from-blue-700 dark:to-cyan-700 from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg z-40">
                                  {i === 0 ? (
                                    <Shield
                                      className="w-5 h-5 text-white"
                                      strokeWidth={1.5}
                                    />
                                  ) : i === 1 ? (
                                    <Cpu
                                      className="w-5 h-5 text-white"
                                      strokeWidth={1.5}
                                    />
                                  ) : (
                                    <Zap
                                      className="w-5 h-5 text-white"
                                      strokeWidth={1.5}
                                    />
                                  )}

                                  {/* Line pointing to center */}
                                  <div
                                    className="absolute bg-gradient-to-b from-blue-500/50 to-transparent w-[1px]"
                                    style={{
                                      height: "100px",
                                      left: "50%",
                                      top: "50%",
                                      transformOrigin: "top",
                                      transform: `translateX(-50%) rotate(${
                                        Math.atan2(
                                          50 -
                                            Math.sin(i * ((2 * Math.PI) / 3)) *
                                              40 -
                                            50,
                                          50 +
                                            Math.cos(i * ((2 * Math.PI) / 3)) *
                                              40 -
                                            50
                                        ) *
                                          (180 / Math.PI) +
                                        90
                                      }deg)`,
                                    }}
                                  />
                                </div>
                              </motion.div>
                            </motion.div>
                          ))}
                        </div>

                        {/* Central element - Enhanced */}
                        <motion.div
                          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center shadow-2xl z-10"
                          animate={{
                            boxShadow: [
                              "0 0 20px rgba(37, 99, 235, 0.3)",
                              "0 0 40px rgba(37, 99, 235, 0.5)",
                              "0 0 20px rgba(37, 99, 235, 0.3)",
                            ],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <motion.div
                            className="w-[92px] h-[92px] rounded-full bg-white dark:bg-slate-900 flex items-center justify-center cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <motion.div
                              animate={{
                                scale: [0.95, 1.05, 0.95],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                            >
                              <Mic
                                className="w-8 h-8 text-blue-600 dark:text-blue-400"
                                strokeWidth={1.5}
                              />
                            </motion.div>
                          </motion.div>
                        </motion.div>

                        {/* Pulse effects - Optimized for performance */}
                        {[...Array(2)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-500/30 dark:border-blue-400/30"
                            style={{
                              width: 36 * (i + 1) + "%",
                              height: 36 * (i + 1) + "%",
                            }}
                            animate={{
                              scale: [1, 1.1, 1],
                              opacity: [0.3, 0.1, 0.3],
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: i * 0.7,
                            }}
                          />
                        ))}

                        {/* Floating labels */}
                        <motion.div
                          className="absolute -top-4 -right-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-md border border-blue-100/50 dark:border-blue-900/50 text-xs font-medium text-blue-600 dark:text-blue-400"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.8 }}
                        >
                          Whisper AI
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom feature highlight - Redesigned */}
                  <div className="relative mt-44">
                    {/* Background decorative elements */}
                    <div className="absolute inset-0 -z-10 overflow-hidden">
                      <motion.div
                        className="absolute -top-20 -left-10 w-64 h-64 rounded-full bg-blue-500/10 dark:bg-blue-500/5 blur-3xl"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      <motion.div
                        className="absolute -bottom-20 -right-10 w-64 h-64 rounded-full bg-cyan-500/10 dark:bg-cyan-500/5 blur-3xl"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 2,
                        }}
                      />
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
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {[
                        {
                          icon: Shield,
                          label: "Privacy First",
                          desc: "Your audio never leaves your device, ensuring complete confidentiality and security for all your transcriptions.",
                          color: "from-blue-500 to-blue-600",
                          bgColor:
                            "from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20",
                          delay: 0,
                        },
                        {
                          icon: Cpu,
                          label: "AI-Powered",
                          desc: "Advanced Whisper AI model delivers industry-leading accuracy for crystal-clear transcriptions in any environment.",
                          color: "from-cyan-500 to-cyan-600",
                          bgColor:
                            "from-cyan-50 to-cyan-100 dark:from-cyan-900/20 dark:to-cyan-800/20",
                          delay: 0.15,
                        },
                        {
                          icon: Zap,
                          label: "Lightning Fast",
                          desc: "Real-time transcription with minimal latency, perfect for meetings, interviews, lectures, and more.",
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
                            />

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
                                    ease: "easeInOut",
                                    delay: delay,
                                  }}
                                />
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
                                  ease: "easeInOut",
                                }}
                              />
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
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Recording Indicators Showcase - NEW SECTION */}
              <div className="max-w-5xl mx-auto mb-20 mt-40">
                <motion.div
                  className="text-center mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent inline-block mb-3">
                    Intuitive User Experience
                  </h2>
                  <p className="text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
                    Elegant interface with keyboard shortcuts for seamless
                    control
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
                              ease: "easeInOut",
                            }}
                          />
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
                          />
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
                    to start recording, then again to transcribe. The recording
                    indicator can be dragged around. All processing happens
                    locally on your device.
                  </p>
                </motion.div>
              </div>

              {/* Stats - Minimal Bar */}
              <div className="max-w-2xl mx-auto mb-20 mt-40">
                <div className="bg-white/30 dark:bg-slate-900/30 backdrop-blur-sm rounded-xl p-8 border border-blue-100/50 dark:border-blue-900/50">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
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
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA - Redesigned for smoother, softer appearance */}
        <div className="text-center mt-2 mb-8">
          <div className="relative inline-flex flex-col items-center">
            {/* Softer floating elements with larger blur */}
            <motion.div
              className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-gradient-to-br from-blue-400/10 to-cyan-300/10 dark:from-blue-400/5 dark:to-cyan-300/5 blur-[80px]"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.4, 0.3],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-gradient-to-tr from-cyan-400/10 to-blue-300/10 dark:from-cyan-400/5 dark:to-blue-300/5 blur-[80px]"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.4, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 4,
              }}
            />

            {/* Main card with softer styling */}
            <div className="relative bg-white/70 dark:bg-slate-900/70 backdrop-blur-md rounded-[28px] p-10 shadow-lg border border-blue-100/30 dark:border-blue-900/20 max-w-lg overflow-hidden">
              {/* Subtle inner gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 to-cyan-50/40 dark:from-blue-900/10 dark:to-cyan-900/10 rounded-[28px] -z-10"></div>

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
                  Ready to Experience FreeWhisper?
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-md mx-auto">
                  Transform your voice into text with unmatched accuracy and
                  privacy, all for free.
                </p>

                {/* Download button with softer animation */}
                <motion.div
                  className="inline-block"
                  whileHover={{
                    y: -3,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                >
                  <a
                    href="https://github.com/furkanksl/FreeWhisper/releases/download/0.0.5/FreeWhisper.dmg"
                    className="group cursor-pointer"
                  >
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-[1px] rounded-full">
                      <div className="flex items-center gap-3 bg-white dark:bg-slate-900 rounded-full px-8 py-3.5 group-hover:bg-opacity-0 group-hover:dark:bg-opacity-0 transition-all duration-300">
                        <svg
                          viewBox="0 0 24 24"
                          className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-300"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09998 22C7.78998 22.05 6.79998 20.68 5.95998 19.47C4.24998 17 2.93998 12.45 4.69998 9.39C5.56998 7.87 7.12998 6.91 8.81998 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.35 4.26 13 3.5Z" />
                        </svg>
                        <span className="text-slate-800 dark:text-white font-medium group-hover:text-white transition-colors duration-300">
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
