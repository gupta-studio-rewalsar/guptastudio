/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import CastingCall from './components/CastingCall';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-neutral-950 font-sans text-neutral-200 antialiased selection:bg-amber-500 selection:text-black">
      {/* Premium Ambient Light Flares behind layout */}
      <div className="absolute top-0 left-0 right-0 h-[100vh] bg-gradient-to-b from-amber-500/5 to-transparent pointer-events-none z-10" />

      {/* Sticky Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* Full screen hero section with Call Now button */}
        <Hero />

        {/* Dynamic, filterable photo & video bento portfolio with lightbox */}
        <Portfolio />

        {/* Client endorsements & social proof section */}
        <Testimonials />

        {/* Casting call form block */}
        <CastingCall />
      </main>

      {/* Professional contact & copyright footer */}
      <Footer />
    </div>
  );
}
