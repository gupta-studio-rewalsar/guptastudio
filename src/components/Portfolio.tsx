/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Play, Eye, X, Film, Image as ImageIcon, MapPin, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO_ITEMS } from '../data';
import { PortfolioItem } from '../types';

type FilterType = 'all' | 'photo' | 'video';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = PORTFOLIO_ITEMS.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.type === activeFilter;
  });

  const getGridSpanClasses = (size?: string) => {
    switch (size) {
      case 'large':
        return 'md:col-span-2 md:row-span-2 h-[450px] md:h-[600px]';
      case 'wide':
        return 'md:col-span-2 md:row-span-1 h-[250px] md:h-[288px]';
      case 'tall':
        return 'md:col-span-1 md:row-span-2 h-[450px] md:h-[600px]';
      case 'regular':
      default:
        return 'md:col-span-1 md:row-span-1 h-[250px] md:h-[288px]';
    }
  };

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-neutral-950 relative overflow-hidden">
      {/* Subtle Ambient Light Gradients */}
      <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-amber-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full bg-amber-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-amber-500 mb-3">
            <Sparkles size={14} />
            <span className="text-xs uppercase tracking-[0.3em] font-sans font-semibold">Fine Art Portfolios</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight mb-4">
            The Stories We Have Captured
          </h2>
          <div className="w-24 h-[1px] bg-amber-500/50 mx-auto mb-6" />
          <p className="text-neutral-400 max-w-2xl mx-auto font-sans font-light">
            Each film and photograph represents a rare combination of fine-art portraits, raw human chemistry, and deep cinematic framing.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex justify-center mb-12" id="portfolio-filters-container">
          <div className="bg-neutral-900/60 border border-neutral-800/80 p-1.5 rounded-full inline-flex space-x-1 backdrop-blur-sm">
            {(['all', 'photo', 'video'] as FilterType[]).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`relative px-6 py-2 rounded-full text-xs uppercase tracking-widest font-semibold font-sans transition-all duration-300 ${
                  activeFilter === filter
                    ? 'text-black'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {activeFilter === filter && (
                  <motion.div
                    layoutId="active-tab"
                    className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-400 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center space-x-1.5">
                  {filter === 'photo' && <ImageIcon size={12} />}
                  {filter === 'video' && <Film size={12} />}
                  <span>{filter === 'all' ? 'All Masterpieces' : `${filter}s`}</span>
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Masonry Bento Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto"
          id="portfolio-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className={`group relative overflow-hidden rounded-2xl border border-neutral-900 bg-neutral-900 cursor-pointer ${getGridSpanClasses(
                  item.size
                )}`}
                onClick={() => setSelectedItem(item)}
              >
                {/* Background Image / Thumb */}
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />
                </div>

                {/* Video Play Button Overlay / Indicator */}
                {item.type === 'video' && (
                  <div className="absolute top-4 right-4 bg-black/60 border border-white/10 backdrop-blur-md p-2 rounded-full z-10 text-amber-500">
                    <Film size={14} />
                  </div>
                )}

                {/* Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center space-x-2 text-amber-400 text-[10px] uppercase tracking-widest font-semibold mb-2">
                    <MapPin size={10} />
                    <span>{item.location}</span>
                    <span className="text-neutral-500">•</span>
                    <span className="capitalize">{item.category}</span>
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-serif text-white mb-2 font-semibold">
                    {item.title}
                  </h3>
                  
                  <p className="text-xs text-neutral-400 font-light line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.description}
                  </p>

                  <div className="flex items-center space-x-2 text-xs font-semibold text-amber-500 uppercase tracking-widest group-hover:text-white transition-colors duration-300">
                    {item.type === 'video' ? (
                      <>
                        <Play size={12} className="fill-current text-amber-500 group-hover:text-white" />
                        <span>Play Film Trailer</span>
                      </>
                    ) : (
                      <>
                        <Eye size={12} />
                        <span>View Masterpiece</span>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Cinematic Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6 md:p-12"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative max-w-5xl w-full bg-neutral-950 border border-neutral-900 rounded-2xl overflow-hidden shadow-[0_10px_50px_rgba(245,158,11,0.05)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-50 bg-black/60 hover:bg-amber-500 hover:text-black border border-white/10 text-white rounded-full p-2.5 transition-all duration-300"
                aria-label="Close Modal"
              >
                <X size={18} />
              </button>

              {/* Lightbox Media Render */}
              <div className="grid grid-cols-1 lg:grid-cols-5 min-h-[300px] lg:min-h-[500px]">
                {/* Media frame */}
                <div className="lg:col-span-3 bg-black flex items-center justify-center relative overflow-hidden">
                  {selectedItem.type === 'video' && selectedItem.videoUrl ? (
                    <video
                      src={selectedItem.videoUrl}
                      className="w-full h-full object-contain max-h-[75vh]"
                      controls
                      autoPlay
                      loop
                      playsInline
                    />
                  ) : (
                    <img
                      src={selectedItem.url}
                      alt={selectedItem.title}
                      className="w-full h-full object-contain max-h-[75vh]"
                      referrerPolicy="no-referrer"
                    />
                  )}
                </div>

                {/* Cinematic Narrative Side panel */}
                <div className="lg:col-span-2 p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-neutral-900">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between border-b border-neutral-900 pb-4">
                      <div className="flex items-center space-x-2 text-amber-500 text-xs font-semibold uppercase tracking-widest">
                        <MapPin size={12} />
                        <span>{selectedItem.location}</span>
                      </div>
                      <span className="text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 capitalize">
                        {selectedItem.type}
                      </span>
                    </div>

                    <h4 className="text-2xl md:text-3xl font-serif font-bold text-white leading-tight">
                      {selectedItem.title}
                    </h4>

                    <p className="text-neutral-400 font-sans font-light text-sm leading-relaxed">
                      {selectedItem.description}
                    </p>

                    <div className="pt-4 border-t border-neutral-900/50">
                      <h5 className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold mb-2">Technical Specs & Category</h5>
                      <p className="text-xs text-neutral-400 capitalize">
                        Genre: <span className="text-white font-medium">{selectedItem.category} Filmwork</span>
                      </p>
                      <p className="text-xs text-neutral-400 mt-1">
                        Format: <span className="text-white font-medium">{selectedItem.type === 'video' ? 'ProRes ProRes RAW 4K / Cine LUTS' : 'Sony Alpha Full Frame Fine Art Raw'}</span>
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-neutral-900">
                    <a
                      href="#casting-call"
                      onClick={() => setSelectedItem(null)}
                      className="block text-center w-full bg-neutral-900 hover:bg-amber-500 hover:text-black border border-neutral-800 hover:border-amber-500 text-neutral-300 text-xs uppercase tracking-widest font-bold py-3.5 rounded-xl transition-all duration-300"
                    >
                      Book Your Session
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
