/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Phone, Play, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { HERO_DATA, BRAND_TAGLINE, PHONE_NUMBER, PHONE_DISPLAY } from '../data';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-950"
    >
      {/* Background Image with elegant gradient overlays */}
      <div className="absolute inset-0 z-0 select-none">
        <img
          src={HERO_DATA.image}
          alt="Cinematic Wedding Couple by Gupta Studio"
          className="w-full h-full object-cover object-center scale-[1.02]"
          referrerPolicy="no-referrer"
        />
        {/* Deep, professional cinematic gradient vignette overlays */}
        <div className="absolute inset-0 bg-radial-[circle_at_center,rgba(0,0,0,0.1)_0%,rgba(10,10,10,0.85)_80%] z-10" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-neutral-950 via-neutral-950/75 to-transparent z-10" />
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-neutral-950/80 to-transparent z-10" />
      </div>

      {/* Decorative Gold Light Leak / Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-amber-500/10 blur-[120px] pointer-events-none z-10" />
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-amber-500/5 blur-[100px] pointer-events-none z-10" />

      {/* Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 md:px-12 text-center pt-24 pb-12">
        
        {/* Animated Brand Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full mb-8"
        >
          <Sparkles size={12} className="text-amber-500 animate-pulse" />
          <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-amber-400 font-sans font-semibold">
            {BRAND_TAGLINE}
          </span>
        </motion.div>

        {/* Cinematic Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-white tracking-tight leading-none mb-6"
        >
          Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 font-normal italic">Cinematic</span> Wedding Films
        </motion.h1>

        {/* Narrative Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto font-sans font-light leading-relaxed mb-12"
        >
          {HERO_DATA.subtitle}
        </motion.p>

        {/* Dynamic Interactive CTA Triggers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6"
        >
          {/* Direct Phone Dial Button */}
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-400 hover:from-amber-500 hover:via-amber-400 hover:to-amber-300 text-black text-sm uppercase tracking-widest font-bold px-8 py-4.5 rounded-xl transition-all duration-300 shadow-[0_4px_30px_rgba(245,158,11,0.3)] transform hover:scale-[1.03]"
            id="hero-call-now"
          >
            <Phone size={16} className="fill-current" />
            <span>Call Now: {PHONE_DISPLAY}</span>
          </a>

          {/* Explore Work / Scroll Down CTA */}
          <a
            href="#portfolio"
            className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-500/30 text-white text-sm uppercase tracking-widest font-semibold px-8 py-4.5 rounded-xl transition-all duration-300"
            id="hero-explore"
          >
            <Play size={14} className="fill-current text-amber-500" />
            <span>Explore Portfolio</span>
          </a>
        </motion.div>
      </div>

      {/* Elegant Infinite Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none hidden md:block">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center space-y-2"
        >
          <span className="text-[9px] uppercase tracking-[0.3em] text-neutral-500">Scroll Down</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-amber-500/80 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
