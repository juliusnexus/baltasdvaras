'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, Variants } from 'motion/react';
import { ArrowLeft, Maximize2, X, CheckCircle2 } from 'lucide-react';

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
    src: '/images/aura-soma/bottle1.png',
    title: 'Raudona & Mėlyna',
    category: 'Equilibrium'
  },
  {
    id: 2,
    src: '/images/aura-soma/bottle2.png',
    title: 'Purpurinė & Geltona',
    category: 'Equilibrium'
  },
  {
    id: 3,
    src: '/images/aura-soma/bottle3.png',
    title: 'Aura-Soma kolekcija',
    category: 'Produktų grupė'
  },
  {
    id: 4,
    src: '/images/aura-soma/bottle4.png',
    title: 'Raudona & Juoda',
    category: 'Equilibrium'
  },
  {
    id: 5,
    src: '/images/aura-soma/bottle5.png',
    title: 'Rožinė & Žalia',
    category: 'Equilibrium'
  },
  {
    id: 6,
    src: 'https://i.postimg.cc/vDFvv5KK/baltas-dvaras-aromoterapija.jpg',
    title: 'Aromaterapinė erdvė',
    category: 'Aplinka'
  }
];

export default function SpalvuPage() {
  const [selectedImage, setSelectedImage] = useState<typeof GALLERY_IMAGES[0] | null>(null);


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
              
              <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed">
                „Aura-Soma“ – tai unikali, liberali savęs pažinimo sistema, jungianti spalvų, augalų ir kristalų energijas. Tai ne tik gražūs dvispalviai buteliukai; tai veidrodis, padedantis suprasti save, suvokti savo gyvenimo kryptį ir atstatyti vidinę pusiausvyrą.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-800">Kas yra Aura-Soma?</h3>
                <p className="text-gray-600 font-light">
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
            className="relative aspect-[4/5] lg:aspect-square rounded-[40px] overflow-hidden shadow-2xl border border-white/50"
          >
            <Image 
              src="https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1000&auto=format&fit=crop"
              alt="Aura-Soma buteliukai"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand/10 to-transparent pointer-events-none" />
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
                    <p className="text-gray-500 text-sm font-light leading-relaxed">{benefit.desc}</p>
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
            className="relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl border border-white/50"
          >
            <Image 
              src="https://images.unsplash.com/photo-1544161515-4af6b1d46b59?q=80&w=1000&auto=format&fit=crop"
              alt="Konsultacijos aplinka"
              fill
              className="object-cover"
            />
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col gap-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-gray-800">Kaip vyksta konsultacija?</h2>
            <p className="text-gray-500 font-light leading-relaxed">
              Tai sakralus procesas, kuriame jūs esate pagrindinis dalyvis. Konsultantas tik padeda perskaityti spalvų siunčiamą žinutę.
            </p>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="text-3xl font-black text-brand/30 select-none">01</div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Buteliukų pasirinkimas</h4>
                  <p className="text-gray-500 text-sm font-light">Prieš jus išsirikiuoja daugiau nei 120 buteliukų. Jūs intuityviai išsirenkate keturis, kurie jus labiausiai traukia.</p>
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
                  <p className="text-gray-500 text-sm font-light">Rekomenduojamas konkretus buteliukas naudojimui namuose, bei kiti pagalbiniai produktai (pomanderiai, kvintesencijos, archangelojai).</p>
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
                    <td className="p-6 md:p-10 border-b border-gray-50">Suteikia aiškumo ir pasitikėjimo.</td>
                  </tr>
                  <tr>
                    <td className="p-6 md:p-10 border-b border-gray-50 bg-white/30">Santykių krizės</td>
                    <td className="p-6 md:p-10 border-b border-gray-50">Padeda suprasti reakcijas, rasti pilnatvę.</td>
                  </tr>
                  <tr>
                    <td className="p-6 md:p-10 border-b border-gray-50 bg-white/30">Kūrybinis blokas</td>
                    <td className="p-6 md:p-10 border-b border-gray-50">Atveria įkvėpimą ir saviraišką.</td>
                  </tr>
                  <tr>
                    <td className="p-6 md:p-10 bg-white/30">Nuovargis / Perdegimas</td>
                    <td className="p-6 md:p-10">Harmonizuoja energetinį lauką.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="mb-24 lg:mb-32">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { time: "1 val.", price: "40 €", desc: "Trumpa pažintis ir pirminė analizė" },
              { time: "1,5 val.", price: "50 €", desc: "Išsami konsultacija su produktų parinkimu", popular: true },
              { time: "2 val.", price: "60 €", desc: "Gili loginė-energetinė sesija" }
            ].map((plan, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className={`p-10 rounded-[32px] border flex flex-col items-center text-center transition-all ${plan.popular ? 'bg-brand text-white border-brand shadow-2xl shadow-brand/20' : 'bg-white border-gray-100 shadow-xl'}`}
              >
                <div className={`text-[10px] font-black uppercase tracking-widest mb-4 ${plan.popular ? 'text-brand/20' : 'text-brand'}`}>Investicija</div>
                <div className="text-3xl font-black mb-1">{plan.price}</div>
                <div className={`text-xs mb-8 ${plan.popular ? 'text-white/80' : 'text-gray-400'}`}>{plan.time} — {plan.desc}</div>
                <button className={`mt-auto w-full py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${plan.popular ? 'bg-white text-brand hover:bg-brand/10' : 'bg-black text-white hover:bg-brand'}`}>
                  Užsakyti
                </button>
              </motion.div>
            ))}
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

        {/* Final CTA */}
        <section className="text-center py-20">
          <h2 className="text-4xl font-bold tracking-wider mb-8 font-prata">Ženkite žingsnį link savęs</h2>
          <p className="max-w-2xl mx-auto text-gray-500 font-light mb-12 leading-relaxed italic">
            Spalvos kalba tiesiai į mūsų pasąmonę. Leiskite joms papasakoti jūsų istoriją.<br/>
            Ar esi pasiruošęs pamatyti savo tikrąjį potencialą ir poreikius?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <button className="px-10 py-5 bg-brand text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] shadow-xl shadow-brand/20 hover:bg-brand/90 transition-all hover:scale-105 active:scale-95">
              REGISTRUOTIS KONSULTACIJAI
            </button>
          </div>
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
