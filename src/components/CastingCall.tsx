/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Calendar, User, Mail, Phone, Instagram, FileText, CheckCircle, Sparkles, Send, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CastingApplication } from '../types';

export default function CastingCall() {
  const [formData, setFormData] = useState<CastingApplication>({
    fullName: '',
    email: '',
    phoneNumber: '',
    weddingDate: '',
    instagramHandle: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Basic Client-side check
    if (!formData.fullName || !formData.email || !formData.phoneNumber || !formData.weddingDate) {
      setError("Please fill out all required fields.");
      setIsSubmitting(false);
      return;
    }

    try {
      /**
       * ======================================================================
       * PRODUCTION-READY FIREBASE FIRESTORE INTEGRATION HOOK
       * ======================================================================
       * You can easily connect this to Firebase by doing the following:
       * 
       * 1. Set up Firebase in your app (import { db } from '../firebaseConfig';)
       * 2. Import firestore methods (import { collection, addDoc } from 'firebase/firestore';)
       * 3. Swap the mock sleep block below with actual database write:
       * 
       *    await addDoc(collection(db, "casting_calls"), {
       *      ...formData,
       *      submittedAt: new Date().toISOString()
       *    });
       * ======================================================================
       */

      // Simulating a luxury network request delay of 1.5 seconds
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Console logging to help debug or verify values
      console.log("Casting Application Submitted Successfully:", formData);

      // Trigger beautiful Success state
      setIsSuccess(true);
      
      // Reset form fields
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        weddingDate: '',
        instagramHandle: '',
        message: ''
      });
    } catch (err) {
      console.error("Submission Error: ", err);
      setError("Something went wrong while submitting. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="casting-call" className="py-24 md:py-32 bg-neutral-900 relative overflow-hidden">
      {/* Decorative Blur Ambient Elements */}
      <div className="absolute top-10 left-10 w-80 h-80 rounded-full bg-amber-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-amber-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-amber-500 mb-3">
            <Sparkles size={14} />
            <span className="text-xs uppercase tracking-[0.3em] font-sans font-semibold">Casting Call 2026</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight mb-4">
            Wedding Casting Call
          </h2>
          <div className="w-24 h-[1px] bg-amber-500/50 mx-auto mb-6" />
          <p className="text-neutral-400 max-w-xl mx-auto font-sans font-light text-sm md:text-base">
            Are you getting married in 2026 or early 2027? Apply to our exclusive casting program. Selected couples receive bespoke luxury filming & editorial photography collections.
          </p>
        </div>

        {/* Casting Form Container */}
        <div className="bg-neutral-950 border border-neutral-800/80 p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
          
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.form
                key="casting-form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                onSubmit={handleSubmit}
                className="space-y-6"
                id="casting-application-form"
              >
                {/* Form Error Banner */}
                {error && (
                  <div className="p-4 bg-red-950/40 border border-red-500/30 text-red-200 text-xs rounded-xl font-sans font-medium">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-neutral-400 font-semibold flex items-center space-x-1">
                      <User size={12} className="text-amber-500" />
                      <span>Full Name <span className="text-amber-500">*</span></span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        placeholder="John Doe"
                        className="w-full bg-neutral-900/60 border border-neutral-800 focus:border-amber-500 focus:ring-1 focus:ring-amber-500/20 text-white rounded-xl px-4 py-3.5 text-sm outline-none transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-neutral-400 font-semibold flex items-center space-x-1">
                      <Mail size={12} className="text-amber-500" />
                      <span>Email Address <span className="text-amber-500">*</span></span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="johndoe@example.com"
                        className="w-full bg-neutral-900/60 border border-neutral-800 focus:border-amber-500 focus:ring-1 focus:ring-amber-500/20 text-white rounded-xl px-4 py-3.5 text-sm outline-none transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-neutral-400 font-semibold flex items-center space-x-1">
                      <Phone size={12} className="text-amber-500" />
                      <span>Phone Number <span className="text-amber-500">*</span></span>
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        required
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full bg-neutral-900/60 border border-neutral-800 focus:border-amber-500 focus:ring-1 focus:ring-amber-500/20 text-white rounded-xl px-4 py-3.5 text-sm outline-none transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Wedding Date */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-neutral-400 font-semibold flex items-center space-x-1">
                      <Calendar size={12} className="text-amber-500" />
                      <span>Wedding Date <span className="text-amber-500">*</span></span>
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        name="weddingDate"
                        value={formData.weddingDate}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-neutral-900/60 border border-neutral-800 focus:border-amber-500 focus:ring-1 focus:ring-amber-500/20 text-white rounded-xl px-4 py-3.5 text-sm outline-none transition-all duration-300 [color-scheme:dark]"
                      />
                    </div>
                  </div>
                </div>

                {/* Instagram Handle */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-neutral-400 font-semibold flex items-center space-x-1">
                    <Instagram size={12} className="text-amber-500" />
                    <span>Instagram Handle</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="instagramHandle"
                      value={formData.instagramHandle}
                      onChange={handleInputChange}
                      placeholder="@yourhandle"
                      className="w-full bg-neutral-900/60 border border-neutral-800 focus:border-amber-500 focus:ring-1 focus:ring-amber-500/20 text-white rounded-xl px-4 py-3.5 text-sm outline-none transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Message / Details */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-neutral-400 font-semibold flex items-center space-x-1">
                    <FileText size={12} className="text-amber-500" />
                    <span>Wedding Plans & Details</span>
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Tell us about your love story, your vision, and details about the venue/events..."
                      className="w-full bg-neutral-900/60 border border-neutral-800 focus:border-amber-500 focus:ring-1 focus:ring-amber-500/20 text-white rounded-xl px-4 py-3.5 text-sm outline-none transition-all duration-300 resize-none"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-400 hover:from-amber-500 hover:via-amber-400 hover:to-amber-300 disabled:from-neutral-800 disabled:to-neutral-900 text-black disabled:text-neutral-500 text-sm uppercase tracking-widest font-bold py-4 rounded-xl transition-all duration-300 shadow-[0_4px_20px_rgba(245,158,11,0.15)] transform hover:scale-[1.01]"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        <span>Sending Application...</span>
                      </>
                    ) : (
                      <>
                        <Send size={14} className="fill-current" />
                        <span>Submit Application</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.form>
            ) : (
              /* Success Animation Panel */
              <motion.div
                key="success-card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-12 px-4 flex flex-col items-center space-y-6"
                id="casting-success-message"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', delay: 0.2 }}
                  className="w-20 h-20 bg-amber-500/10 border border-amber-500/20 rounded-full flex items-center justify-center text-amber-500"
                >
                  <CheckCircle size={40} className="stroke-[1.5]" />
                </motion.div>

                <div className="space-y-2">
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-tight">
                    Application Sent Successfully
                  </h3>
                  <p className="text-neutral-400 max-w-md mx-auto text-sm font-sans font-light leading-relaxed">
                    Thank you for sharing your love story with us! Our creative panel will review your details, and we'll reach out via phone or email soon.
                  </p>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 text-neutral-300 text-xs uppercase tracking-widest font-bold px-6 py-3 rounded-lg transition-colors duration-300"
                  >
                    Submit Another Application
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
