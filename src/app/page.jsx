"use client";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { GiHolosphere } from "react-icons/gi";
import { MorphingLoginButton } from "@/app/_components/MorphingLoginButton";
import { Prosto_One } from "next/font/google";

const prostoOne = Prosto_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const AgroverseLanding = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const heroText = "🌱 Agroverse – Your Smart Farming Companion";
  const subText =
    "Track expenses, manage lands, connect with nearby farmers, and plan your harvests — all in one platform.";
  const logoText = "Agroverse";

  if (!mounted) return null;

  return (
    <div className="min-h-screen w-full relative overflow-hidden pb-32 sm:pb-48 lg:pb-64">
      {/* Mesh Gradient Background */}
      <div
        className="fixed inset-0 w-full h-full"
        style={{
          backgroundColor: "#cdfadb",
          backgroundImage: `
            radial-gradient(at 79% 25%, #cdfadb 0%, transparent 60%), 
            radial-gradient(at 20% 59%, #f6fdc3 0%, transparent 50%), 
            radial-gradient(at 47% 39%, #ffcf96 0%, transparent 40%), 
            radial-gradient(at 74% 40%, #ff8080 0%, transparent 30%)
          `,
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 w-full px-4 sm:px-6 mx-auto min-h-screen flex flex-col">
        {/* Navigation */}
        <nav className="w-3/4 mx-auto mt-4 sm:mt-6 px-4 sm:px-6 py-3 sm:py-4 bg-blue-800/60 backdrop-blur-md rounded-full border border-sky-600/80 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <GiHolosphere
                className={`h-8 w-8 sm:h-12 sm:w-12 text-green-400 shrink-0 ${prostoOne.className}`}
              />
              <span
                className={`text-lg sm:text-2xl font-bold text-white truncate ${prostoOne.className}`}
              >
                Agroverse
              </span>
            </div>
            <button
              className={`px-3 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm text-white font-medium hover:bg-emerald-600/20 rounded-full transition-all duration-300 whitespace-nowrap shrink-0 ${prostoOne.className}`}
            >
              About Us
            </button>
          </div>
        </nav>

        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-8 sm:py-12">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto w-full"
          >
            <h1
              className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight ${prostoOne.className}`}
            >
              {heroText}
            </h1>
            <p
              className={`text-sm sm:text-base md:text-lg lg:text-2xl text-gray-700 leading-relaxed ${prostoOne.className}`}
            >
              {subText}
            </p>
          </motion.div>

          {/* Login Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.6, ease: "easeOut" }}
            className="mt-8 sm:mt-12 w-full sm:w-auto flex justify-center"
          >
            <MorphingLoginButton />
          </motion.div>
        </div>
      </div>

      {/* Large Logo at Bottom */}
      <div className="fixed bottom-0 left-0 w-full h-32 sm:h-48 lg:h-64 overflow-hidden z-0 flex items-center justify-center">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 lg:gap-6 w-full px-4">
          {/* Icon with shadow */}
          <div className="overflow-hidden shrink-0 h-24 w-24 sm:h-40 sm:w-40 lg:h-48 lg:w-48 flex items-center justify-center">
            <motion.div
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
              className="overflow-hidden h-full w-full flex items-center justify-center"
            >
              <GiHolosphere className="h-full w-full text-green-400 drop-shadow-[0_5px_15px_rgba(34,197,94,0.5)]" />
            </motion.div>
          </div>

          {/* Text with shadow */}
          <div
            className={`flex text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-bold text-black overflow-visible leading-none sm:leading-[1.15] max-h-24 sm:max-h-40 lg:max-h-48 ${prostoOne.className}`}
          >
            {logoText.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ y: 300, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 1.2 + index * 0.08,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                className="inline-block overflow-hidden"
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgroverseLanding;
