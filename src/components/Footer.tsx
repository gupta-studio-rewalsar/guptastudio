/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Mail, MapPin, Phone, Instagram, Facebook, ArrowUp } from 'lucide-react';
import { BRAND_NAME, BRAND_TAGLINE, OFFICE_LOCATION, PHONE_NUMBER, PHONE_DISPLAY, EMAIL_ADDRESS, SOCIAL_LINKS } from '../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-neutral-900 pt-20 pb-10" id="contact">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Main Grid split */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-16 border-b border-neutral-900">
          
          {/* Brand & Tagline Col */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-semibold tracking-[0.2em] text-white">
              {BRAND_NAME}
            </h3>
            <p className="text-xs uppercase tracking-[0.15em] text-amber-500 font-semibold">
              {BRAND_TAGLINE}
            </p>
            <p className="text-neutral-400 font-sans font-light text-sm leading-relaxed max-w-sm">
              Capturing raw human connection, fine-art details, and cinematic grand-scale storytelling across India and worldwide.
            </p>
          </div>

          {/* Quick Links Nav Col */}
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-bold">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <a href="#home" className="text-sm text-neutral-400 hover:text-amber-500 transition-colors duration-300">
                Home
              </a>
              <a href="#portfolio" className="text-sm text-neutral-400 hover:text-amber-500 transition-colors duration-300">
                Portfolio
              </a>
              <a href="#casting-call" className="text-sm text-neutral-400 hover:text-amber-500 transition-colors duration-300">
                Casting Call
              </a>
              <a href="#testimonials" className="text-sm text-neutral-400 hover:text-amber-500 transition-colors duration-300">
                Testimonials
              </a>
            </div>
          </div>

          {/* Contact Details Col */}
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-bold">
              Contact & Studios
            </h4>
            <div className="space-y-4 text-sm text-neutral-400">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-amber-500 mt-1 shrink-0" />
                <span>{OFFICE_LOCATION}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-amber-500 shrink-0" />
                <a href={`tel:${PHONE_NUMBER}`} className="hover:text-amber-500 transition-colors duration-300">
                  {PHONE_DISPLAY}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-amber-500 shrink-0" />
                <a href={`mailto:${EMAIL_ADDRESS}`} className="hover:text-amber-500 transition-colors duration-300">
                  {EMAIL_ADDRESS}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright and Social links */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-10 gap-6">
          
          {/* Copyright description */}
          <p className="text-xs text-neutral-500 font-sans font-light text-center md:text-left">
            © {currentYear} {BRAND_NAME}. All rights reserved. Crafted for luxurious cinematic storytelling.
          </p>

          {/* Social Icons and Scroll Up */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-amber-500 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-amber-500 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="bg-neutral-900 border border-neutral-800 hover:border-amber-500 hover:text-amber-500 text-neutral-400 p-2.5 rounded-full transition-all duration-300"
              aria-label="Scroll to Top"
            >
              <ArrowUp size={16} />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
