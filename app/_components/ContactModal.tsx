'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formStatus, setFormStatus] = useState('idle');

  const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };

    try {
      const resp = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      if (resp.ok) {
        setFormStatus('success');
      } else {
        setFormStatus('error');
      }
    } catch (err) {
      setFormStatus('error');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm cursor-pointer"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-[32px] p-8 md:p-12 shadow-2xl overflow-hidden"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center mb-8 md:mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">Susisiekti</h2>
              <p className="text-gray-400 text-xs md:text-sm font-light">Atsakome per 24 valandas</p>
            </div>

            <AnimatePresence mode="wait">
              {formStatus === 'success' ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-10"
                >
                  <div className="text-green-500 mb-4 font-bold uppercase tracking-widest text-xs">Išsiųsta sėkmingai!</div>
                  <button 
                    onClick={() => setFormStatus('idle')} 
                    className="text-[10px] font-bold uppercase tracking-widest text-brand underline"
                  >
                    Siųsti dar kartą
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleForm} className="space-y-4">
                  <input name="name" required placeholder="Vardas" className="w-full bg-gray-50 border border-gray-100 p-4 rounded-2xl outline-none focus:border-brand/40 transition-colors text-sm" />
                  <input name="email" required type="email" placeholder="El. paštas" className="w-full bg-gray-50 border border-gray-100 p-4 rounded-2xl outline-none focus:border-brand/40 transition-colors text-sm" />
                  <textarea name="message" rows={4} placeholder="Jūsų žinutė" className="w-full bg-gray-50 border border-gray-100 p-4 rounded-2xl outline-none focus:border-brand/40 transition-colors text-sm" />
                  
                  {formStatus === 'error' && (
                    <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest text-center mt-2">Klaida siunčiant. Bandykite dar kartą.</p>
                  )}

                  <button className="w-full py-4 md:py-5 bg-black text-white rounded-2xl font-bold text-[9px] md:text-[10px] uppercase tracking-[0.3em] hover:bg-gray-800 transition-all shadow-lg hover:scale-[1.02] active:scale-[0.98] hover:shadow-xl">
                    {formStatus === 'sending' ? 'Siunčiama...' : 'Siųsti užklausą'}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
