/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Sparkles, MessageSquare, Plus, Trash2, Edit3, Check, X, Settings, EyeOff, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  event: string;
}

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: "Gupta Studio created an absolute masterpiece for our pre-wedding shoot at Rewalsar Lake. Every single frame looks like a pure painting. Truly professional and gentle during the whole process.",
    author: "Anjali & Vikram",
    event: "Rewalsar Lake Pre-Wedding"
  },
  {
    id: 't2',
    quote: "The visual storytelling of our traditional wedding in Mandi was breath-taking. They captured raw, candid emotions, natural smiles, and majestic scenic backdrops with extreme dedication.",
    author: "Neha & Dr. Amit",
    event: "Mandi Traditional Wedding"
  }
];

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isSectionVisible, setIsSectionVisible] = useState(true);
  const [isEditingMode, setIsEditingMode] = useState(false);
  
  // States for adding a new review
  const [newQuote, setNewQuote] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [newEvent, setNewEvent] = useState('');

  // State for active inline editing
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editQuote, setEditQuote] = useState('');
  const [editAuthor, setEditAuthor] = useState('');
  const [editEvent, setEditEvent] = useState('');

  // Load from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem('gupta_studio_testimonials');
    if (saved) {
      try {
        setTestimonials(JSON.parse(saved));
      } catch (e) {
        setTestimonials(DEFAULT_TESTIMONIALS);
      }
    } else {
      setTestimonials(DEFAULT_TESTIMONIALS);
    }

    const savedVisibility = localStorage.getItem('gupta_studio_testimonials_visible');
    if (savedVisibility !== null) {
      setIsSectionVisible(savedVisibility === 'true');
    }
  }, []);

  // Helper to save current testimonials
  const saveToStorage = (updatedList: Testimonial[]) => {
    setTestimonials(updatedList);
    localStorage.setItem('gupta_studio_testimonials', JSON.stringify(updatedList));
  };

  // Helper to save section visibility state
  const toggleSectionVisibility = () => {
    const nextVal = !isSectionVisible;
    setIsSectionVisible(nextVal);
    localStorage.setItem('gupta_studio_testimonials_visible', String(nextVal));
  };

  // Delete a testimonial
  const handleDelete = (id: string) => {
    const updated = testimonials.filter(t => t.id !== id);
    saveToStorage(updated);
  };

  // Start inline editing
  const startEditing = (t: Testimonial) => {
    setEditingId(t.id);
    setEditQuote(t.quote);
    setEditAuthor(t.author);
    setEditEvent(t.event);
  };

  // Save inline editing
  const saveEdit = (id: string) => {
    if (!editQuote || !editAuthor) return;
    const updated = testimonials.map(t => {
      if (t.id === id) {
        return { ...t, quote: editQuote, author: editAuthor, event: editEvent };
      }
      return t;
    });
    saveToStorage(updated);
    setEditingId(null);
  };

  // Add new testimonial
  const handleAddNew = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newQuote || !newAuthor) return;
    
    const newTestimonial: Testimonial = {
      id: `t_${Date.now()}`,
      quote: newQuote,
      author: newAuthor,
      event: newEvent || "Client Review"
    };

    const updated = [...testimonials, newTestimonial];
    saveToStorage(updated);

    // Reset inputs
    setNewQuote('');
    setNewAuthor('');
    setNewEvent('');
  };

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-neutral-950 relative overflow-hidden border-t border-neutral-900">
      {/* Absolute Glow Backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Upper Dashboard Management Header for Owners */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-sm max-w-5xl mx-auto">
          <div className="flex items-center space-x-3">
            <Settings className="text-amber-500 animate-spin-slow" size={18} />
            <div>
              <h4 className="text-xs uppercase tracking-widest text-white font-bold">Reviews Manager</h4>
              <p className="text-[10px] text-neutral-400">Add, edit, or hide client words to control your brand reputation</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            {/* Show/Hide Entire Section Trigger */}
            <button
              onClick={toggleSectionVisibility}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-300 border ${
                isSectionVisible 
                  ? 'bg-amber-500/10 border-amber-500/20 text-amber-400' 
                  : 'bg-red-500/10 border-red-500/20 text-red-400'
              }`}
              title={isSectionVisible ? "Section is active and visible to visitors" : "Section is hidden from visitors"}
            >
              {isSectionVisible ? <Eye size={14} /> : <EyeOff size={14} />}
              <span>{isSectionVisible ? 'Section Visible' : 'Section Hidden'}</span>
            </button>

            {/* Toggle Editor Tools */}
            <button
              onClick={() => setIsEditingMode(!isEditingMode)}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-300 border ${
                isEditingMode 
                  ? 'bg-white text-black border-white' 
                  : 'bg-neutral-800 hover:bg-neutral-750 border-neutral-700 text-neutral-300'
              }`}
            >
              <Edit3 size={12} />
              <span>{isEditingMode ? 'Exit Tools' : 'Edit Content'}</span>
            </button>
          </div>
        </div>

        {/* Outer Visibility check */}
        {!isSectionVisible && !isEditingMode ? (
          <div className="text-center py-16 max-w-xl mx-auto bg-neutral-900/20 rounded-3xl border border-dashed border-neutral-800">
            <EyeOff className="text-neutral-600 mx-auto mb-4" size={32} />
            <h3 className="text-sm uppercase tracking-widest text-neutral-400 font-bold">Testimonials Hiding Instantly</h3>
            <p className="text-xs text-neutral-500 mt-2">
              You turned off public visibility. Visitors won't see this section at all. Change the status inside "Reviews Manager" above to display it again.
            </p>
          </div>
        ) : (
          <div className={!isSectionVisible ? 'opacity-40 select-none pointer-events-none' : ''}>
            
            {/* Main Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 text-amber-500 mb-3">
                <Sparkles size={14} />
                <span className="text-xs uppercase tracking-[0.3em] font-sans font-semibold">Kind Words</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight mb-4">
                Loved By Our Couples
              </h2>
              <div className="w-24 h-[1px] bg-amber-500/50 mx-auto mb-6" />
              {!isSectionVisible && (
                <span className="bg-red-500/20 border border-red-500/30 text-red-400 text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider font-semibold">
                  Preview Only (Hidden from guests)
                </span>
              )}
            </div>

            {/* Interactive Reviews Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16" id="testimonials-grid">
              {testimonials.length === 0 ? (
                <div className="col-span-full text-center py-12 text-neutral-500 text-sm font-light">
                  No testimonials to display. Use the "Edit Content" panel below or add a new one!
                </div>
              ) : (
                testimonials.map((t) => (
                  <div
                    key={t.id}
                    className="bg-neutral-900/40 border border-neutral-850 p-8 md:p-10 rounded-2xl flex flex-col justify-between relative hover:border-amber-500/20 transition-all duration-300 group"
                  >
                    <div className="absolute top-6 right-8 text-amber-500/5">
                      <MessageSquare size={48} className="stroke-[1.5]" />
                    </div>

                    {/* Check if current item is being inline edited */}
                    {editingId === t.id ? (
                      <div className="space-y-4 w-full z-10">
                        <textarea
                          value={editQuote}
                          onChange={(e) => setEditQuote(e.target.value)}
                          className="w-full bg-neutral-950 border border-neutral-800 text-white rounded-xl p-3 text-sm focus:border-amber-500 outline-none"
                          rows={4}
                        />
                        <div className="grid grid-cols-2 gap-3">
                          <input
                            type="text"
                            value={editAuthor}
                            onChange={(e) => setEditAuthor(e.target.value)}
                            placeholder="Name"
                            className="bg-neutral-950 border border-neutral-800 text-white rounded-xl p-2.5 text-xs focus:border-amber-500 outline-none"
                          />
                          <input
                            type="text"
                            value={editEvent}
                            onChange={(e) => setEditEvent(e.target.value)}
                            placeholder="Location/Event"
                            className="bg-neutral-950 border border-neutral-800 text-white rounded-xl p-2.5 text-xs focus:border-amber-500 outline-none"
                          />
                        </div>
                        <div className="flex space-x-2 pt-2">
                          <button
                            onClick={() => saveEdit(t.id)}
                            className="bg-amber-500 hover:bg-amber-400 text-black px-4 py-2 rounded-lg text-xs font-bold flex items-center space-x-1"
                          >
                            <Check size={14} />
                            <span>Save</span>
                          </button>
                          <button
                            onClick={() => setEditingId(null)}
                            className="bg-neutral-800 hover:bg-neutral-700 text-white px-4 py-2 rounded-lg text-xs font-bold flex items-center space-x-1"
                          >
                            <X size={14} />
                            <span>Cancel</span>
                          </button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <p className="text-neutral-300 font-sans font-light italic leading-relaxed text-base md:text-lg mb-8 relative z-10">
                          "{t.quote}"
                        </p>

                        <div className="flex justify-between items-end">
                          <div>
                            <h4 className="text-white font-serif font-semibold tracking-wide text-lg">
                              {t.author}
                            </h4>
                            <p className="text-amber-500 text-xs uppercase tracking-widest mt-1">
                              {t.event}
                            </p>
                          </div>

                          {/* Quick Management Triggers displayed during Editing mode */}
                          {isEditingMode && (
                            <div className="flex space-x-2 z-20">
                              <button
                                onClick={() => startEditing(t)}
                                className="p-2 bg-neutral-850 hover:bg-amber-500 hover:text-black border border-neutral-850 text-neutral-400 rounded-lg transition-all"
                                title="Edit review"
                              >
                                <Edit3 size={14} />
                              </button>
                              <button
                                onClick={() => handleDelete(t.id)}
                                className="p-2 bg-neutral-850 hover:bg-red-500 hover:text-white border border-neutral-850 text-neutral-400 rounded-lg transition-all"
                                title="Remove / Delete review"
                              >
                                <Trash2 size={14} />
                              </button>
                            </div>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                ))
              )}
            </div>

            {/* Create New Review Panel for Customization */}
            <AnimatePresence>
              {isEditingMode && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  className="bg-neutral-900/50 border border-neutral-800 p-8 rounded-3xl max-w-3xl mx-auto"
                >
                  <div className="flex items-center space-x-2 mb-6">
                    <Plus size={18} className="text-amber-500" />
                    <h3 className="text-sm uppercase tracking-widest text-white font-bold">Add Custom Word / Review</h3>
                  </div>

                  <form onSubmit={handleAddNew} className="space-y-4">
                    <textarea
                      placeholder="Write the client's quote here..."
                      value={newQuote}
                      onChange={(e) => setNewQuote(e.target.value)}
                      required
                      rows={3}
                      className="w-full bg-neutral-950 border border-neutral-800 text-white rounded-xl p-4 text-sm focus:border-amber-500 outline-none transition-colors"
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Client Names (e.g., Sunil & Priya)"
                        value={newAuthor}
                        onChange={(e) => setNewAuthor(e.target.value)}
                        required
                        className="bg-neutral-950 border border-neutral-800 text-white rounded-xl p-3.5 text-xs focus:border-amber-500 outline-none transition-colors"
                      />
                      <input
                        type="text"
                        placeholder="Event/Location (e.g., Rewalsar Temple Wedding)"
                        value={newEvent}
                        onChange={(e) => setNewEvent(e.target.value)}
                        className="bg-neutral-950 border border-neutral-800 text-white rounded-xl p-3.5 text-xs focus:border-amber-500 outline-none transition-colors"
                      />
                    </div>

                    <div className="pt-4 flex justify-end">
                      <button
                        type="submit"
                        className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-black text-xs uppercase tracking-widest font-bold px-6 py-3 rounded-xl transition-all shadow-[0_4px_15px_rgba(245,158,11,0.2)]"
                      >
                        Add to list
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        )}
      </div>
    </section>
  );
}
