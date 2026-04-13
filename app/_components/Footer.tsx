'use client';

import React, { useState } from 'react';
import ContactModal from './ContactModal';

export default function Footer() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <footer className="bg-white border-t border-gray-100 py-16 flex flex-col items-center gap-8 relative z-50">
      <div className="flex gap-6">
        {/* Facebook Link */}
        <a 
          href="https://www.facebook.com/baltasdvaras" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="p-3 rounded-full bg-white shadow-sm border border-gray-100 text-gray-400 hover:text-brand hover:shadow-md hover:scale-110 transition-all duration-300 group" 
          aria-label="Visit Facebook"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook w-5 h-5 group-hover:-rotate-6 transition-transform" aria-hidden="true">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
        </a>

        {/* Email Button */}
        <button 
          onClick={() => setIsContactOpen(true)}
          className="p-3 rounded-full bg-white shadow-sm border border-gray-100 text-gray-400 hover:text-brand hover:shadow-md hover:scale-110 transition-all duration-300 group" 
          aria-label="Contact via Email"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail w-5 h-5 group-hover:-rotate-6 transition-transform" aria-hidden="true">
            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
            <rect x="2" y="4" width="20" height="16" rx="2"></rect>
          </svg>
        </button>

        {/* Instagram Link */}
        <a 
          href="https://www.instagram.com/baltas_dvaras_daiva/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="p-3 rounded-full bg-white shadow-sm border border-gray-100 text-gray-400 hover:text-brand hover:shadow-md hover:scale-110 transition-all duration-300 group" 
          aria-label="Visit Instagram"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram w-5 h-5 group-hover:-rotate-6 transition-transform" aria-hidden="true">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
          </svg>
        </a>
      </div>

      <div className="text-center">
        <p className="text-gray-400 text-[10px] tracking-widest uppercase mb-2">Baltas Dvaras</p>
        <p className="text-gray-300 text-[8px] tracking-[0.2em] font-sans">
          © {new Date().getFullYear()} Visos teisės saugomos. Sielos spalvų transformacija.
        </p>
      </div>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </footer>
  );
}
