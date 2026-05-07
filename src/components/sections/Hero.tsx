"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/Button";
import { Gamepad2 } from "lucide-react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoEnded, setVideoEnded] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set playback speed
    video.playbackRate = 1.5;

    const startVideo = () => {
      setVideoLoaded(true);
      // We play the video, it is already muted via the HTML attribute
      // which guarantees 0% delay and no NotAllowedError exception.
      video.play().catch(console.error);
    };

    // If we have enough data to play to the end without buffering, start it.
    if (video.readyState >= 4) {
      startVideo();
    } else {
      video.addEventListener("canplaythrough", startVideo);
    }

    const handleEnded = () => {
      setVideoEnded(true);
    };

    video.addEventListener("ended", handleEnded);

    // INVISIBLE INTERACTION UNMUTE:
    // Bypasses browser autoplay policies by unmuting on the first user interaction
    const handleInteraction = () => {
      if (video) {
        video.muted = false;
        video.volume = 1;
        video.play().catch(() => {}); // Catch if still blocked
      }
      // Remove listeners once triggered
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("keydown", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("scroll", handleInteraction);
    };

    window.addEventListener("click", handleInteraction);
    window.addEventListener("keydown", handleInteraction);
    window.addEventListener("touchstart", handleInteraction, { passive: true });
    window.addEventListener("scroll", handleInteraction, { passive: true });

    return () => {
      video.removeEventListener("canplaythrough", startVideo);
      video.removeEventListener("ended", handleEnded);
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("keydown", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("scroll", handleInteraction);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Full Background Video - optimized for 0 lag */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src="/visuals/animation.mp4"
          className={`w-full h-full object-cover transition-opacity duration-500 ${videoLoaded ? "opacity-100" : "opacity-0"}`}
          playsInline
          preload="auto"
          autoPlay
          muted
        />
        {/* Darkening overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/20" />
      </div>

      {/* Glassmorphism CTA Card — appears after video ends */}
      <AnimatePresence>
        {videoEnded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-20 flex items-center justify-center px-4 w-full"
          >
            {/* Extremely Wide and Short Container */}
            <div className="relative w-full max-w-[1400px] mx-auto flex justify-center">
              {/* Massive liquid glow behind card */}
              <div className="absolute -inset-12 bg-cyan-accent/20 blur-[120px] rounded-[100px] animate-pulse" />
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-accent/30 via-transparent to-cyan-accent/20 blur-[60px] rounded-[100px]" />
              
              {/* Glass Card - Much Wider, Shorter padding */}
              <div className="relative w-full bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[40px] md:rounded-[50px] px-6 sm:px-12 md:px-24 lg:px-40 py-6 sm:py-10 shadow-[0_10px_100px_rgba(0,245,212,0.15),inset_0_1px_0_rgba(255,255,255,0.1)] flex flex-col items-center justify-center overflow-hidden">
                {/* Intense Shimmer Lines */}
                <div className="absolute top-0 left-1/4 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-cyan-accent/80 to-transparent shadow-[0_0_20px_rgba(0,245,212,1)]" />
                <div className="absolute bottom-0 right-1/4 w-1/3 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                <div className="absolute top-1/2 -left-20 w-40 h-full bg-cyan-accent/10 rounded-full blur-3xl -translate-y-1/2" />
                <div className="absolute top-1/2 -right-20 w-40 h-full bg-cyan-accent/10 rounded-full blur-3xl -translate-y-1/2" />

                {/* Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="font-orbitron text-3xl sm:text-5xl md:text-7xl lg:text-[90px] font-black text-white leading-tight tracking-tighter mb-2 drop-shadow-2xl"
                >
                  Plug. Play. Dominate.
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-gray-300 font-orbitron text-sm sm:text-xl md:text-3xl font-medium leading-relaxed mb-6 sm:mb-8 max-w-4xl mx-auto drop-shadow-md"
                >
                  A refined Cronus Zen script experience
                </motion.p>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex justify-center"
                >
                  <Button
                    size="lg"
                    variant="primary"
                    className="px-10 sm:px-20 h-14 sm:h-20 rounded-full text-base sm:text-2xl font-bold shadow-[0_0_60px_rgba(0,245,212,0.5)] hover:shadow-[0_0_100px_rgba(0,245,212,0.8)] hover:scale-105 transition-all duration-300 flex items-center gap-4 border border-cyan-accent/50 bg-cyan-accent/10 hover:bg-cyan-accent/20 backdrop-blur-md"
                  >
                    <Gamepad2 className="w-6 h-6 sm:w-8 sm:h-8" />
                    Shop Scripts
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-scanlines pointer-events-none opacity-[0.05] z-10" />
    </section>
  );
}
