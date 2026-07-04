/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Instagram, Facebook } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BRAND_NAME, PHONE_NUMBER, SOCIAL_LINKS } from '../data';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Casting Call', href: '#casting-call' },
    { name: 'Testimonials', href: '#testimonials' }
  ];

  return (
    <header
      id="app-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800/60 py-4 shadow-xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a 
          href="#home" 
          className="text-2xl md:text-3xl font-serif font-semibold tracking-[0.25em] text-white hover:text-amber-500 transition-colors duration-300"
          id="nav-logo"
        >
          {BRAND_NAME}
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10" id="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] text-neutral-300 hover:text-amber-500 font-sans font-medium transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls & Socials */}
        <div className="hidden md:flex items-center space-x-6" id="nav-actions">
          {/* Social Icons */}
          <div className="flex items-center space-x-4 border-r border-neutral-800 pr-6 mr-2">
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-amber-500 transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-amber-500 transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
          </div>

          <a
            href={`tel:${PHONE_NUMBER}`}
            className="flex items-center space-x-2 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-black text-xs uppercase tracking-widest font-semibold px-5 py-2.5 rounded-full transition-all duration-300 transform hover:scale-[1.03] shadow-[0_4px_20px_rgba(245,158,11,0.2)]"
            id="nav-phone-cta"
          >
            <Phone size={14} className="fill-current" />
            <span>Call Now</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-neutral-300 hover:text-amber-500 focus:outline-none p-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
          id="mobile-menu-btn"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-neutral-950 border-b border-neutral-800/80 shadow-2xl md:hidden z-40"
            id="mobile-nav-panel"
          >
            <div className="flex flex-col px-6 py-8 space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm uppercase tracking-[0.2em] text-neutral-300 hover:text-amber-500 font-sans font-medium transition-colors duration-300 py-1"
                >
                  {link.name}
                </a>
              ))}
              
              <div className="pt-6 border-t border-neutral-900 flex flex-col space-y-6">
                {/* Socials in mobile menu */}
                <div className="flex items-center space-x-6 justify-center">
                  <a
                    href={SOCIAL_LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-amber-500 transition-colors duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href={SOCIAL_LINKS.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-amber-500 transition-colors duration-300"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                </div>

                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="flex items-center justify-center space-x-3 bg-gradient-to-r from-amber-600 to-amber-500 text-black text-sm uppercase tracking-widest font-semibold py-4.5 rounded-xl transition-all duration-300 shadow-[0_4px_20px_rgba(245,158,11,0.2)]"
                >
                  <Phone size={16} className="fill-current" />
                  <span>Call +91 94183 59966</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
