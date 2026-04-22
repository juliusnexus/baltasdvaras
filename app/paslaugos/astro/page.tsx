'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, Variants } from 'motion/react';
import { ArrowLeft, CheckCircle2, Sparkles, Stars, Compass, Map, MapPin, X } from 'lucide-react';
import ContactModal from '../../_components/ContactModal';


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

export default function AstroPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-brand font-montserrat tracking-wider selection:bg-brand/20 selection:text-brand overflow-x-hidden">
      
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
        <svg viewBox="0 0 800 800" className="w-full h-full stroke-brand/40 fill-none">
          <motion.circle 
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 4, ease: "easeInOut" }}
            cx="400" cy="400" r="300" strokeWidth="0.5"
          />
          <motion.path 
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, delay: 1, ease: "easeInOut" }}
            d="M400,100 L400,700 M100,400 L700,400" 
            strokeWidth="0.3"
          />
        </svg>
      </div>

      {/* Navigation Bar */}
      <nav className="fixed w-full z-[60] px-6 lg:px-12 py-4 lg:py-6 flex justify-between items-center bg-white/60 backdrop-blur-xl border-b border-white/20">
        <Link href="/" className="flex items-center gap-2 text-gray-500 hover:text-brand transition-colors group">
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
        
        {/* Intro Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 lg:mb-32">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col gap-6"
          >
            <motion.div 
              variants={fadeIn}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/10 text-brand text-[9px] font-bold tracking-[0.2em] w-fit uppercase"
            >
              <Stars className="w-3 h-3" />
              Astrologinė konsultacija
            </motion.div>
            <motion.h1 
              variants={fadeIn}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-custom-gradient leading-[1.1] font-prata"
            >
              Astro konsultacija: Tavo asmeninis žvaigždėlapis
            </motion.h1>
            <motion.div variants={fadeIn} className="space-y-6">
              <blockquote className="border-l-4 border-brand/20 pl-6 italic text-gray-600 text-lg md:text-xl font-light leading-relaxed">
                &ldquo;Mes gimstame tam tikru momentu, tam tikroje vietoje ir, kaip ir gero vyno derlius, turime tų metų ir to sezono savybių, kuriais išvydome šviesą.&rdquo;
                <footer className="mt-2 text-sm font-bold text-gray-400 not-italic">— Carl Jung</footer>
              </blockquote>
              
              <div className="space-y-6">
                <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed text-justify">
                  Astrologija yra tavo gyvenimo navigacija. Tai nėra spėlionės, ką atneš rytojus; tai analizė to, kokį potencialą ir „įrankių rinkinį“ atsinešei gimdamas.
                </p>
                <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed text-justify">
                  Žvaigždės negali versti tavęs veikti, bet jos puikiai sufleruoja, kokiame kelyje tavęs laukia didžiausia sėkmė, o kur – vertingos pamokos ar būtinas atidumas.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white/40 backdrop-blur-xl p-3 md:p-4 rounded-[32px] md:rounded-[40px] shadow-2xl border border-white/20 overflow-hidden relative"
          >
            <div className="relative w-full">
              <Image 
                src="/images/astro/pagrindinis asto.jpg"
                alt="Astrologinis žemėlapis"
                width={800}
                height={1000}
                className="w-full h-auto object-cover rounded-[24px] md:rounded-[32px]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand/10 to-transparent pointer-events-none rounded-[24px] md:rounded-[32px]" />
            </div>
          </motion.div>
        </section>

        {/* Focus Section */}
        <section className="mb-24 lg:mb-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-brand/5 backdrop-blur-xl rounded-[40px] p-8 md:p-16 border border-brand/10"
          >
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center text-gray-800">Viena tema – gilus atsakymas</h2>
              <p className="text-gray-600 text-lg font-light leading-relaxed text-justify mb-10">
                Šio formato konsultacija skirta tiems, kurie nemėgsta pilstymo iš tuščio į kiaurą. Fokusas į vieną konkrečią tau aktualią sritį. Kai žinai, kur žiūrėti, atsakymai tampa stebėtinai aiškūs.
              </p>
              
              <div className="space-y-6">
                <h3 className="text-sm font-bold uppercase tracking-widest text-brand/60 text-center">Kokias temas galime nagrinėti?</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    "savirealizacija", "santykiai", "finansai", "sveikata", "sugebėjimai", 
                    "namai", "šeima", "pomėgiai", "kelionės", "įvaizdis", 
                    "mokslai", "darbas", "tobulėjimas", "bendravimas", "dvasingumas"
                  ].map((topic, i) => (
                    <span key={i} className="px-4 py-2 bg-white/60 border border-brand/5 rounded-full text-[10px] font-bold text-gray-500 uppercase tracking-wider hover:bg-brand hover:text-white hover:scale-105 transition-all cursor-default shadow-sm hover:shadow-md">
                      {topic}
                    </span>
                  ))}
                  <span className="px-4 py-2 bg-white/60 border border-brand/5 rounded-full text-[10px] font-bold text-gray-500 uppercase tracking-wider italic">
                    ir t.t.
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Process Section */}
        <section className="mb-24 lg:mb-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="flex flex-col gap-8 order-2 lg:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-gray-800">Kaip tai vyksta?</h2>
              <p className="text-gray-500 font-light leading-relaxed text-justify italic">
                Astrologinė analizė – tai matematiškai tikslus procesas, sujungtas su intuityvia įžvalga.
              </p>
              
              <div className="space-y-8">
                {[
                  {
                    num: "01",
                    title: "Duomenys",
                    desc: "Man reikės tikslaus tavo gimimo laiko (valandos ir minutės), datos bei vietos."
                  },
                  {
                    num: "02",
                    title: "Analizė",
                    desc: "Išanalizuoju tavo natalinį žemėlapį per pasirinktos temos prizmę."
                  },
                  {
                    num: "03",
                    title: "Sesija",
                    desc: "Susitikimo metu (arba nuotoliu) aptariame rezultatus. Jokių gąsdinančių ar koduojamų prognozių – tik tavo potencialo suskatinimas ir rekomendacijos, kaip geriau išnaudoti esamus gimimo planetų pozicijų duomenis."
                  }
                ].map((step, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="text-3xl font-black text-brand/30 select-none">{step.num}</div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">{step.title}</h4>
                      <p className="text-gray-500 text-sm font-light text-justify leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white/40 backdrop-blur-xl p-3 md:p-4 rounded-[32px] md:rounded-[40px] shadow-2xl border border-white/20 overflow-hidden relative order-1 lg:order-2"
            >
              <div className="relative w-full">
                <Image 
                  src="/images/astro/subimage astro.jpg"
                  alt="Astrologinės analizės procesas"
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain rounded-[24px] md:rounded-[32px]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand/10 to-transparent pointer-events-none rounded-[24px] md:rounded-[32px]" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why it works Section */}
        <section className="mb-24 lg:mb-32">
          <div className="max-w-4xl mx-auto px-6 py-16 bg-white/40 backdrop-blur-xl rounded-[48px] border border-white/50 shadow-xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter mb-8 text-gray-800">Kodėl tai veikia?</h2>
            <div className="space-y-6 text-gray-600 font-light leading-relaxed text-justify max-w-2xl mx-auto">
              <p>
                Visi mes esame kintančios būtybės. Suprasdami savo kosminį brėžinį, nustojame kovoti su vėtra ir pradedame buriuoti pavėjui. Tai suteikia ramybės jausmą: „Ah, štai kodėl aš taip jaučiuosi ir štai ką man dabar geriausia daryti“.
              </p>
              <p className="font-medium text-brand/80 italic text-center text-lg mt-8">
                Tad, leisk astrologinei išminčiai tapti tavo sąjungininke.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Card */}
        <section className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-white p-3 md:p-4 rounded-[48px] shadow-2xl border border-white/20 overflow-hidden"
          >
            <div className="relative bg-[#fcfcfc]/80 backdrop-blur-3xl rounded-[40px] p-10 md:p-16 border border-white/40 text-center space-y-10">
              <div className="space-y-4">
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Paslaugos kaina</h3>
                <div className="text-gray-800 font-prata text-2xl md:text-3xl tracking-tight">Vienos temos analizė</div>
              </div>

              <div className="mx-auto max-w-[240px] py-4 bg-brand text-white rounded-[20px] shadow-lg shadow-brand/10">
                <div className="text-3xl md:text-4xl font-bold tracking-tighter leading-none">
                  40 €
                </div>
              </div>

              <div className="pt-4 flex flex-col gap-6 items-center">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full max-w-sm py-6 bg-black text-white rounded-[24px] font-black text-xs uppercase tracking-[0.3em] shadow-xl shadow-black/20 hover:bg-brand transition-all hover:scale-[1.02] active:scale-95"
                >
                  REGISTRUOTIS KONSULTACIJAI
                </button>
                <motion.div 
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="flex items-center gap-3 text-gray-400"
                >
                  <MapPin className="w-4 h-4" />
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em]">Gyvai arba nuotoliu</span>
                </motion.div>
              </div>
            </div>
            
            {/* Celestial Ornaments */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />
          </motion.div>
        </section>

      </main>

      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>


      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

    </div>

  );
}
