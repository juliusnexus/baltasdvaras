'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, Variants } from 'motion/react';
import { ArrowLeft, Maximize2, X, CheckCircle2, Facebook, Instagram, Twitter } from 'lucide-react';

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const GALLERY_IMAGES = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1000&auto=format&fit=crop',
    title: 'Gilus atsipalaidavimas',
    category: 'Hipnozė'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1000&auto=format&fit=crop',
    title: 'Pasąmonės galia',
    category: 'Transformacija'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop',
    title: 'Vidinė kelionė',
    category: 'Savišvieta'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1000&auto=format&fit=crop',
    title: 'Ramybės oazė',
    category: 'Aplinka'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1000&auto=format&fit=crop',
    title: 'Šviesos terapija',
    category: 'Energija'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1501854140801-50d01674db4e?q=80&w=1000&auto=format&fit=crop',
    title: 'Nauja pradžia',
    category: 'Rezultatas'
  }
];

export default function HipnozePage() {
  const [selectedImage, setSelectedImage] = useState<typeof GALLERY_IMAGES[0] | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');

  React.useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const fullText = "Hipnozė – tai gilus atsipalaidavimas ir darbas su pasąmone. Tai saugus metodas, padedantis pasiekti vidinius resursus, keisti ribojančius įsitikinimus ir rasti atsakymus, kurie dažnai slypi giliau nei mūsų sąmoningas protas. Tai kelionė į vidinę ramybę ir transformaciją. Šio proceso metu mes nedirbame su kontrole, o priešingai – leidžiame sau atsipalaiduoti tiek, kad galėtume išgirsti savo tikrąjį balsą ir atlikti teigiamus pokyčius savo gyvenime.";
  const shortText = "Hipnozė – tai gilus atsipalaidavimas ir darbas su pasąmone. Tai saugus metodas, padedantis pasiekti vidinius resursus, keisti ribojančius įsitikinimus.";

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-[#1a1a1a] font-sans selection:bg-purple-100 selection:text-purple-900 overflow-x-hidden">
      
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
        <svg viewBox="0 0 800 800" className="w-full h-full stroke-purple-300 fill-none">
          <motion.path 
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
            d="M800,400 C650,500 450,300 300,400 C150,500 50,350 0,400" 
            strokeWidth="0.5"
          />
        </svg>
      </div>

      {/* Navigation Bar */}
      <nav className="fixed w-full z-[60] px-6 lg:px-12 py-4 lg:py-6 flex justify-between items-center bg-white/60 backdrop-blur-xl border-b border-white/20">
        <Link href="/" className="flex items-center gap-2 text-gray-500 hover:text-purple-600 transition-colors group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-bold tracking-[0.2em]">Grįžti į pradžią</span>
        </Link>
        <div className="text-lg lg:text-xl font-bold tracking-tighter flex items-center gap-2 lg:gap-3 text-gray-500">
          <Image 
            src="https://i.postimg.cc/gjvvVWt6/baltas-dvaras-logo.png" 
            alt="Baltas Dvaras Logo" 
            width={32} 
            height={32} 
            className="w-8 h-8 lg:w-10 lg:h-10 object-contain"
            referrerPolicy="no-referrer"
          />
          Baltas Dvaras
        </div>
        <div className="w-24 hidden lg:block"></div>
      </nav>

      <main className="relative z-10 pt-32 pb-24 px-6 lg:px-12 max-w-7xl mx-auto">
        
        {/* Intro Section: Text Left, Image Right */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 lg:mb-32">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col gap-6"
          >
            <motion.div 
              variants={fadeIn}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 text-custom-gradient text-[9px] font-bold tracking-[0.2em] w-fit"
            >
              Seansai
            </motion.div>
            <motion.h1 
              variants={fadeIn}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-custom-gradient leading-[0.9]"
            >
              Hipnozė
            </motion.h1>
            <motion.div variants={fadeIn} className="space-y-6">
              <div className="relative">
                <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed italic transition-all duration-500">
                  &ldquo;{isExpanded ? fullText : shortText}&rdquo;
                  {!isExpanded && (
                    <button 
                      onClick={() => setIsExpanded(true)}
                      className="ml-2 text-purple-600 font-bold text-sm hover:underline cursor-pointer inline-block"
                    >
                      skaityti daugiau
                    </button>
                  )}
                </p>
                <AnimatePresence>
                  {isExpanded && (
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onClick={() => setIsExpanded(false)}
                      className="mt-2 text-purple-600 font-bold text-sm hover:underline cursor-pointer block"
                    >
                      Skaityti mažiau
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>
              <div className="space-y-4">
                {[
                  "Gilus fizinis ir emocinis atsipalaidavimas",
                  "Darbas su ribojančiais pasąmonės įsitikinimais",
                  "Vidinių resursų ir kūrybiškumo aktyvavimas",
                  "Teigiamų elgesio pokyčių skatinimas"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-500">
                    <CheckCircle2 className="w-5 h-5 text-purple-400" />
                    <span className="text-sm md:text-base font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <button className="mt-4 px-8 py-4 bg-black text-white rounded-2xl font-bold text-[10px] tracking-widest hover:bg-purple-600 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-black/10">
                REGISTRUOTIS SEANSUI
              </button>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] lg:aspect-square rounded-[40px] overflow-hidden shadow-2xl border border-white/50"
          >
            <Image 
              src="https://images.unsplash.com/photo-1516302752625-fbbad369eb41?q=80&w=1000&auto=format&fit=crop"
              alt="Hipnozės seansas"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent pointer-events-none" />
          </motion.div>
        </section>

        {/* Gallery Section */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter mb-12 text-center text-gray-800">Darbo akimirkos ir erdvė</h2>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {GALLERY_IMAGES.map((image) => (
              <motion.div 
                key={image.id}
                variants={fadeIn}
                className="group relative aspect-[4/3] rounded-[32px] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50"
                onClick={() => setSelectedImage(image)}
              >
                <Image 
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-white/60 text-[9px] uppercase tracking-widest mb-2">{image.category}</span>
                  <h3 className="text-white text-xl font-bold tracking-tight">{image.title}</h3>
                  <div className="mt-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-8 right-8 text-white/60 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </motion.button>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl aspect-[4/3] md:aspect-video rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image 
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 bg-gradient-to-t from-black/80 to-transparent">
                <span className="text-white/60 text-[10px] uppercase tracking-widest mb-2 block">{selectedImage.category}</span>
                <h2 className="text-white text-2xl md:text-4xl font-bold tracking-tight">{selectedImage.title}</h2>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12 px-6 lg:px-12 text-center">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
          <div className="flex gap-6">
            {[
              { 
                icon: Facebook, 
                label: 'Facebook', 
                href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}` 
              },
              { 
                icon: Twitter, 
                label: 'Twitter', 
                href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}` 
              },
              { 
                icon: Instagram, 
                label: 'Instagram', 
                href: 'https://instagram.com' 
              }
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white shadow-sm border border-gray-100 text-gray-400 hover:text-purple-600 hover:shadow-md hover:scale-110 transition-all duration-300 group"
                aria-label={`Share on ${social.label}`}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="text-lg font-bold tracking-tighter flex items-center gap-2 text-gray-400">
              Baltas Dvaras
            </div>
            <p className="text-gray-400 text-[10px] tracking-widest">
              © 2026 Visos teisės saugomos. Sielos spalvų transformacija.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
