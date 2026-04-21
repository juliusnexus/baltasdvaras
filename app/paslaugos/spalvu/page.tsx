'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, Variants } from 'motion/react';
import { ArrowLeft, Maximize2, X, CheckCircle2, User, Users, MapPin } from 'lucide-react';

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
    src: '/images/aura-soma/1.jpg',
    title: 'Aura-Soma Equilibrium',
    category: 'Spalvų energija'
  },
  {
    id: 2,
    src: '/images/aura-soma/2.jpg',
    title: 'Dvasinis balansas',
    category: 'Sielos veidrodis'
  },
  {
    id: 3,
    src: '/images/aura-soma/3.jpg',
    title: 'Apsaugos pomanderis',
    category: 'Aura apsauga'
  },
  {
    id: 4,
    src: '/images/aura-soma/4.jpg',
    title: 'Harmonijos buteliukas',
    category: 'Emocinis gijimas'
  },
  {
    id: 5,
    src: '/images/aura-soma/5.jpg',
    title: 'Aura-Soma kolekcija',
    category: 'Produktų grupė'
  },
  {
    id: 6,
    src: '/images/aura-soma/6.jpg',
    title: 'Vidinė šviesa',
    category: 'Sąmoningumas'
  },
  {
    id: 7,
    src: '/images/aura-soma/7.jpg',
    title: 'Transformacijos esencija',
    category: 'Evoliucija'
  },
  {
    id: 8,
    src: '/images/aura-soma/8.JPG',
    title: 'Sielos kelionė',
    category: 'Sąmoningas pasirinkimas'
  },
  {
    id: 9,
    src: '/images/aura-soma/9.jpg',
    title: 'Energijos srautas',
    category: 'Vibracinė medicina'
  },
  {
    id: 10,
    src: '/images/aura-soma/10.jpg',
    title: 'Pusiausvyros menas',
    category: 'Holistinis gijimas'
  },
  {
    id: 11,
    src: '/images/aura-soma/11.jpg',
    title: 'Šviesos kristalai',
    category: 'Sielos šviesa'
  },
  {
    id: 12,
    src: '/images/aura-soma/12.jpg',
    title: 'Spalvų harmonija',
    category: 'Dvasinė praktika'
  }
];

const PRICING_OPTIONS = [
  { id: '1h', label: '1 valanda', price: '40 €' },
  { id: '1.5h', label: '1,5 valandos', price: '50 €' },
  { id: '2h', label: '2 valandos', price: '60 €' },
];

export default function SpalvuPage() {
  const [selectedImage, setSelectedImage] = useState<typeof GALLERY_IMAGES[0] | null>(null);
  const [sessionType, setSessionType] = useState<'asmeniui' | 'poroms'>('asmeniui');
  const [selectedDurationId, setSelectedDurationId] = useState('1.5h');

  const selectedDuration = PRICING_OPTIONS.find(opt => opt.id === selectedDurationId) || PRICING_OPTIONS[1];


  return (
    <div className="min-h-screen bg-[#fcfcfc] text-brand font-montserrat tracking-wider selection:bg-brand/20 selection:text-brand overflow-x-hidden">
      
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
        <svg viewBox="0 0 800 800" className="w-full h-full stroke-brand/40 fill-none">
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
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/10 text-brand text-[9px] font-bold tracking-[0.2em] w-fit"
            >
              Spalvų konsultacija. Aura-Soma®
            </motion.div>
            <motion.h1 
              variants={fadeIn}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-custom-gradient leading-[1.1] font-prata"
            >
              Spalvų kalba tavo sielai
            </motion.h1>
            <motion.div variants={fadeIn} className="space-y-6">
              <blockquote className="border-l-4 border-brand/20 pl-6 italic text-gray-600 text-lg md:text-xl font-light leading-relaxed">
                &ldquo;Mes esame spalvos, kurias pasirenkame, ir jos atspindi mūsų tikruosius poreikius.&rdquo;
                <footer className="mt-2 text-sm font-bold text-gray-400 not-italic">— Vicky Wall, sistemos įkūrėja.</footer>
              </blockquote>
              
              <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed text-justify">
                „Aura-Soma“ – tai unikali, liberali savęs pažinimo sistema, jungianti spalvų, augalų ir kristalų energijas. Tai ne tik gražūs dvispalviai buteliukai; tai veidrodis, padedantis suprasti save, suvokti savo gyvenimo kryptį ir atstatyti vidinę pusiausvyrą.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-800">Kas yra Aura-Soma?</h3>
                <p className="text-gray-600 font-light text-justify">
                  Tai holistinė terapija, kurios pagrindą sudaro „Equilibrium“ (pusiausvyros) aliejai. Kiekviename buteliuke telpa dvi dalys: viršutinė (aliejinė) ir apatinė (vandeninė). Jose susitinka spalvų energija, augalų ekstraktai bei skystieji kristalai.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  {[
                    { title: "Spalvos", desc: "Vibracinė galia" },
                    { title: "Augalai", desc: "Eteriniai aliejai" },
                    { title: "Kristalai", desc: "Taurieji mineralai" }
                  ].map((item, i) => (
                    <div key={i} className="bg-white/40 backdrop-blur-md p-4 rounded-2xl border border-white/30 shadow-sm">
                      <h4 className="font-bold text-[10px] uppercase tracking-widest text-brand mb-1">{item.title}</h4>
                      <p className="text-[10px] text-gray-400 uppercase tracking-tighter">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white/40 backdrop-blur-xl p-3 md:p-4 rounded-[32px] md:rounded-[40px] shadow-2xl border border-white/20 overflow-hidden relative aspect-[4/5] lg:aspect-square"
          >
            <div className="relative w-full h-full">
              <Image 
                src="/images/aura-soma/titulinis.jpg"
                alt="Aura-Soma buteliukai"
                fill
                className="object-cover rounded-[24px] md:rounded-[32px]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand/10 to-transparent pointer-events-none rounded-[24px] md:rounded-[32px]" />
            </div>
          </motion.div>
        </section>

        {/* Benefits Section */}
        <section className="mb-24 lg:mb-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-brand/5 backdrop-blur-xl rounded-[40px] p-8 md:p-16 border border-brand/10"
          >
            <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center text-gray-800">Kokią naudą tai teikia?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Vidinė ramybė", desc: "Sumažinsite stresą ir įtampą." },
                { title: "Intuicija", desc: "Pradėsite geriau girdėti savo vidinį balsą." },
                { title: "Talentai", desc: "Suprasite savo stiprybes, kurios buvo užslėptos." },
                { title: "Emocinis paleidimas", desc: "Švelniai paleisite nuoskaudas ar baimes." },
                { title: "Energija", desc: "Atstatysite gyvybines jėgas po išsekimo." },
                { title: "Sąmoningumas", desc: "Gydomas žmogus, stiprinant jo savimonę." }
              ].map((benefit, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-1 bg-white p-2 rounded-full shadow-sm border border-brand/10">
                    <CheckCircle2 className="w-5 h-5 text-brand" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">{benefit.title}</h3>
                    <p className="text-gray-500 text-sm font-light leading-relaxed text-justify">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Consultation Process */}
        <section className="mb-24 lg:mb-32 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
           <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/40 backdrop-blur-xl p-3 md:p-4 rounded-[32px] md:rounded-[40px] shadow-2xl border border-white/20 overflow-hidden relative aspect-[4/5]"
          >
            <div className="relative w-full h-full">
              <Image 
                src="/images/aura-soma/kaip vyksta.JPG"
                alt="Konsultacijos aplinka"
                fill
                className="object-cover rounded-[24px] md:rounded-[32px]"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col gap-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-gray-800">Kaip vyksta konsultacija?</h2>
            <p className="text-gray-500 font-light leading-relaxed text-justify">
              Tai sakralus procesas, kuriame jūs esate pagrindinis dalyvis. Konsultantas tik padeda perskaityti spalvų siunčiamą žinutę.
            </p>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="text-3xl font-black text-brand/30 select-none">01</div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Buteliukų pasirinkimas</h4>
                  <p className="text-gray-500 text-sm font-light text-justify">Prieš jus išsirikiuoja daugiau nei 120 buteliukų. Jūs intuityviai išsirenkate keturis, kurie jus labiausiai traukia.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-3xl font-black text-brand/30 select-none">02</div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Skaitymas (Interpretacija)</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-stone-100 flex items-center justify-center text-[10px] font-bold text-stone-400 shrink-0 mt-0.5">1</div>
                      <p className="text-gray-500 text-xs font-light"><span className="font-bold text-gray-700">1-asis buteliukas:</span> jūsų sielos misija ir tikslas – kodėl jūs čia?</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-stone-100 flex items-center justify-center text-[10px] font-bold text-stone-400 shrink-0 mt-0.5">2</div>
                      <p className="text-gray-500 text-xs font-light"><span className="font-bold text-gray-700">2-asis buteliukas:</span> jūsų didžiausi iššūkiai ir dovanos, kurios slepiasi už jų.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-stone-100 flex items-center justify-center text-[10px] font-bold text-stone-400 shrink-0 mt-0.5">3</div>
                      <p className="text-gray-500 text-xs font-light"><span className="font-bold text-gray-700">3-asis buteliukas:</span> „čia ir dabar“ – jūsų dabartinė būsena.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-stone-100 flex items-center justify-center text-[10px] font-bold text-stone-400 shrink-0 mt-0.5">4</div>
                      <p className="text-gray-500 text-xs font-light"><span className="font-bold text-gray-700">4-asis buteliukas:</span> ateities energija ir tai, kas ateina į jūsų gyvenimą.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-3xl font-black text-brand/30 select-none">03</div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Terapinio produkto parinkimas</h4>
                  <p className="text-gray-500 text-sm font-light text-justify">Rekomenduojamas konkretus buteliukas naudojimui namuose, bei kiti pagalbiniai produktai (pomanderiai, kvintesencijos, archangelojai).</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Pricing / Target Table */}
        <section className="mb-24 lg:mb-32">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter mb-12 text-center text-gray-800">Kam tai skirta?</h2>
            <div className="overflow-hidden rounded-[32px] border border-gray-100 shadow-xl bg-white/50 backdrop-blur-xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-brand/5">
                    <th className="p-6 md:p-10 text-[10px] uppercase tracking-widest font-black text-brand border-b border-brand/10">Ką sprendžia?</th>
                    <th className="p-6 md:p-10 text-[10px] uppercase tracking-widest font-black text-brand border-b border-brand/10">Kuo padeda?</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 font-light text-sm md:text-base">
                  <tr>
                    <td className="p-6 md:p-10 border-b border-gray-50 bg-white/30">Sprendimų priėmimas</td>
                    <td className="p-6 md:p-10 border-b border-gray-50 text-justify">Suteikia aiškumo ir pasitikėjimo.</td>
                  </tr>
                  <tr>
                    <td className="p-6 md:p-10 border-b border-gray-50 bg-white/30">Santykių krizės</td>
                    <td className="p-6 md:p-10 border-b border-gray-50 text-justify">Padeda suprasti reakcijas, rasti pilnatvę.</td>
                  </tr>
                  <tr>
                    <td className="p-6 md:p-10 border-b border-gray-50 bg-white/30">Kūrybinis blokas</td>
                    <td className="p-6 md:p-10 border-b border-gray-50 text-justify">Atveria įkvėpimą ir saviraišką.</td>
                  </tr>
                  <tr>
                    <td className="p-6 md:p-10 bg-white/30">Nuovargis / Perdegimas</td>
                    <td className="p-6 md:p-10 text-justify">Harmonizuoja energetinį lauką.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>


        {/* Gallery */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter mb-12 text-center text-gray-800">Produktų galerija</h2>
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

        {/* Final CTA Section - Grid Layout */}
        <section className="max-w-7xl mx-auto px-4 md:px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Info (div[1]) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-left space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-wider font-prata text-brand uppercase leading-tight">Ženkite žingsnį<br/>link savęs</h2>
            <div className="w-20 h-1 bg-brand/20" />
            <p className="text-gray-500 font-light leading-relaxed italic text-justify text-base max-w-lg">
              Spalvos kalba tiesiai į mūsų pasąmonę. Leiskite joms papasakoti jūsų istoriją.<br/><br/>
              Aura-Soma konsultacija padeda pamatyti savo tikrąjį potencialą ir giliausius sielos poreikius per spalvų pasirinkimą. Ar esate pasiruošę susitikti su savimi?
            </p>
            
            {/* Notice Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-brand/5 text-brand rounded-2xl border border-brand/10">
              <MapPin className="w-5 h-5 shrink-0" />
              <span className="text-[10px] font-black uppercase tracking-[0.25em]">Tik gyvai Baltame Dvare</span>
            </div>
          </motion.div>

          {/* Right Side: Selection Card (div[2]) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-3 md:p-4 rounded-[48px] shadow-2xl border border-white/20 overflow-hidden"
          >
            <div className="relative bg-[#fcfcfc]/80 backdrop-blur-3xl rounded-[40px] p-8 md:p-12 border border-white/40 text-center">
              <div className="relative z-10 space-y-10">
                {/* Duration Selection */}
                <div className="flex flex-col gap-5">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Pasirinkite trukmę</span>
                  <div className="flex flex-wrap justify-center gap-3">
                    {PRICING_OPTIONS.map((opt) => {
                      const isSelected = selectedDurationId === opt.id;
                      return (
                        <button
                          key={opt.id}
                          onClick={() => setSelectedDurationId(opt.id)}
                          className={`px-6 py-3 rounded-2xl text-[9px] font-bold uppercase tracking-[0.2em] transition-all duration-500 border ${
                            isSelected 
                              ? 'bg-brand text-white border-brand shadow-lg shadow-brand/20 scale-105' 
                              : 'bg-white/80 border-white/60 text-gray-400 hover:bg-white hover:text-brand'
                          }`}
                        >
                          {opt.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Session Type Selection - Option Buttons */}
                <div className="flex flex-col gap-5">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Pasirinkite narius</span>
                  <div className="flex flex-wrap justify-center gap-3">
                    {[
                      { id: 'asmeniui', label: 'Asmeniui' },
                      { id: 'poroms', label: 'Poroms' }
                    ].map((type) => {
                      const isActive = sessionType === type.id;
                      return (
                        <button
                          key={type.id}
                          onClick={() => setSessionType(type.id as any)}
                          className={`px-8 py-4 rounded-2xl text-[9px] font-bold uppercase tracking-[0.2em] transition-all duration-500 border ${
                            isActive 
                              ? 'bg-brand text-white border-brand shadow-lg shadow-brand/20 scale-105' 
                              : 'bg-white/80 border-white/60 text-gray-400 hover:bg-white hover:text-brand'
                          }`}
                        >
                          {type.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Price Display */}
                <div className="py-8 bg-brand/5 rounded-[32px] border border-brand/5">
                  <div className="text-5xl md:text-7xl font-bold tracking-tighter text-brand leading-none">
                    {selectedDuration.price}
                  </div>
                </div>

                <div className="pt-4">
                  <button className="w-full py-6 bg-black text-white rounded-[24px] font-black text-xs uppercase tracking-[0.3em] shadow-xl shadow-black/20 hover:bg-brand transition-all hover:scale-[1.02] active:scale-95 group">
                    REGISTRUOTIS KONSULTACIJAI
                  </button>
                </div>
              </div>

              {/* Dynamic background elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />
            </div>
          </motion.div>
        </section>
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
              />
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 bg-gradient-to-t from-black/80 to-transparent">
                <span className="text-white/60 text-[10px] uppercase tracking-widest mb-2 block">{selectedImage.category}</span>
                <h2 className="text-white text-2xl md:text-4xl font-bold tracking-tight">{selectedImage.title}</h2>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


    </div>
  );
}
