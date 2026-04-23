'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'motion/react';
import { ArrowLeft, Clock, CheckCircle2, Sparkles, Moon, Stars, Target, Compass } from 'lucide-react';

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

export default function TaroPage() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] text-brand font-montserrat tracking-wider selection:bg-brand/20 selection:text-brand overflow-x-hidden">
      
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
        <svg viewBox="0 0 800 800" className="w-full h-full stroke-brand/30 fill-none">
          <motion.path 
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
            d="M0,400 C150,300 350,500 500,400 C650,300 750,450 800,400" 
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
            referrerPolicy="no-referrer"
          />
          Baltas Dvaras
        </div>
        <div className="w-24 hidden lg:block"></div>
      </nav>

      <main className="relative z-10 pt-32 pb-24 px-6 lg:px-12 max-w-7xl mx-auto">
        
        {/* Hero Section */}
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
              Taro konsultacija
            </motion.div>
            <motion.h1 
              variants={fadeIn}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-custom-gradient leading-[1.0] font-prata"
            >
              Taro konsultacija: Dialogas su tavo pasąmone
            </motion.h1>
            <motion.div variants={fadeIn} className="space-y-6">
              <div className="text-gray-600 text-base md:text-lg font-light leading-relaxed text-center">
                &ldquo;Taro – tai pasąmonės abėcėlė. Kiekviena ištraukta korta yra žodis, o jų derinys – tavo sielos pasakojama istorija.&rdquo;
                <footer className="mt-2 text-sm font-bold text-gray-400 italic font-prata">&mdash; Sielos pasakojimas</footer>
              </div>
              <div className="text-gray-600 text-base md:text-lg font-light leading-relaxed text-justify space-y-4">
                <p>
                  Taro kortos nėra burtų ar „likimo spėjimų“ įrankis. Tai simbolių ir archetipų kalba. Kai protas pasimeta tarp loginių argumentų, o jausmai pasiklysta emocijų audroje - Taro padeda pamatyti situaciją tarsi per mikroskopą ir teleskopą, išsmulkina situaciją detalėmis arba apima pilną jos vaizdą iš toli.
                </p>
                <p>
                  Svarbu suprasti: kortos rodo tendenciją ir dabartinę energiją. Tu visada turi laisvą valią ir gali keisti savo kryptį. Taro tiesiog parodo harmoningiausią kelią į tavo tikslą ir lydi tarsi išmintingas patarėjas. Leisk kortoms papasakoti tavo istoriją. Atrask atsakymus, kurie slepiasi.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white p-4 md:p-6 rounded-[40px] md:rounded-[56px] shadow-2xl border border-gray-100 overflow-hidden relative aspect-[3/4]"
          >
            <div className="relative w-full h-full">
              <Image 
                src="/images/taro/sub-taro.jpg"
                alt="Taro kortų konsultacija"
                fill
                className="object-cover rounded-[24px] md:rounded-[32px]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand/10 to-transparent pointer-events-none rounded-[24px] md:rounded-[32px]" />
            </div>
          </motion.div>
        </section>

        {/* Benefits Section */}
        <section className="mb-24 lg:mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 bg-white p-3 md:p-4 rounded-[32px] md:rounded-[40px] shadow-2xl border border-gray-100 overflow-hidden relative aspect-[3/4]"
            >
              <div className="relative w-full h-full">
                <Image 
                  src="/images/taro/main-taro.jpg"
                  alt="Taro skaitymo procesas"
                  fill
                  className="object-cover rounded-[24px] md:rounded-[32px]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="order-1 lg:order-2 flex flex-col gap-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-gray-800 font-prata">Kodėl verta rinktis Taro sesiją?</h2>
              <div className="text-gray-600 font-light leading-relaxed text-justify">
                <p>
                  Konsultacija skirta ne tam, kad pasakyčiau, „kas bus“, o tam, kad suteikčiau tau įrankius susikurti tokį rytojų, kokio nori. Tai aiškumo, įkvėpimo ir vidinės ramybės šaltinis.
                </p>
              </div>
              <div className="space-y-4 pt-4 border-t border-brand/5">
                <h3 className="font-bold text-gray-800">Kada Taro yra geriausias tavo palydovas?</h3>
                {[
                  { title: "Sprendimų priėmimas", text: "Kai stovi kryžkelėje ir reikia pamatyti galimas pasirinkimų pasekmes." },
                  { title: "Situacijos analizė", text: "Nori suprasti, kas iš tiesų vyksta tavo santykiuose, vidiniame pasaulyje ar išorinėje aplinkoje." },
                  { title: "Sąstingio pralaužimas", text: "Jautiesi užstrigęs ir nežinai, koks turėtų būti tavo kitas žingsnis." },
                  { title: "Savęs pažinimas", text: "Nori suprasti savo elgesio modelius ir išmokti pamokas, kurias tau siunčia gyvenimas." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="mt-1 w-5 h-5 rounded-lg bg-brand/10 flex items-center justify-center text-brand/60 shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Sparkles className="w-3 h-3" />
                    </div>
                    <div>
                      <span className="font-bold text-gray-800 text-xs tracking-tight block mb-1 uppercase">{item.title}</span>
                      <p className="text-gray-500 text-sm font-light leading-relaxed text-justify">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-24 lg:mb-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-brand/5 backdrop-blur-xl rounded-[40px] p-8 md:p-16 border border-brand/10"
          >
            <h2 className="text-3xl font-bold tracking-tighter mb-12 text-center text-gray-800 font-prata">Kaip vyksta procesas?</h2>
            <p className="text-gray-500 text-center mb-12 font-light italic">Mūsų sesija yra saugi, konfidenciali ir gili erdvė tavo klausimams.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              <div className="flex flex-col gap-6">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border border-brand/5 shrink-0 font-bold text-brand">1</div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2 uppercase text-xs tracking-widest">Klausimas</h4>
                    <p className="text-gray-500 text-sm font-light leading-relaxed text-justify">Pradedame nuo to klausimo, kas tau šiuo metu svarbiausia.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border border-brand/5 shrink-0 font-bold text-brand">2</div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2 uppercase text-xs tracking-widest">Išdėstymas</h4>
                    <p className="text-gray-500 text-sm font-light leading-relaxed text-justify">Naudoju skirtingas kortų skaitymo schemas, priklausomai nuo temos.</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border border-brand/5 shrink-0 font-bold text-brand">3</div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2 uppercase text-xs tracking-widest">Simboliai</h4>
                    <p className="text-gray-500 text-sm font-light leading-relaxed text-justify">Analizuoju archetipų ir ženklų sąveiką, spalvų ir skaičių reikšmes, jų ryšį.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border border-brand/5 shrink-0 font-bold text-brand">4</div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2 uppercase text-xs tracking-widest">Gairės</h4>
                    <p className="text-gray-500 text-sm font-light leading-relaxed text-justify">Išeisi ne tik su atsakymu „kodėl“, bet ir su „kaip“ elgtis toliau.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Pricing Section */}
        <section className="max-w-3xl mx-auto mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-brand/5 backdrop-blur-xl rounded-[40px] p-8 md:p-12 shadow-xl shadow-brand/5 border border-brand/20 overflow-hidden text-center"
          >
              <div className="relative z-10 flex flex-col h-full">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold italic mb-3 md:mb-4 text-brand">"Taro konsultacija"</h3>
                  <p className="text-[10px] md:text-xs mb-6 md:mb-8 text-[#4A6B4B]">60min. trukmės analizė ir sprendimų paieška</p>
                </div>

                <div className="py-10 bg-white/60 rounded-[32px] border border-white/40 mb-10">
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center gap-2 text-brand">
                      <Clock className="w-5 h-5" />
                      <span className="font-bold text-lg uppercase tracking-widest">1 VALANDA</span>
                    </div>
                    <div className="text-6xl font-bold tracking-tighter text-gray-800">40 €</div>
                  </div>
                </div>

                <div className="mt-auto space-y-4">
                  <button 
                    className="w-full py-5 bg-brand text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-brand/20 hover:bg-brand/90 transition-all hover:scale-[1.02] active:scale-95"
                  >
                    UŽSAKYTI
                  </button>
                  <button className="w-full py-4 bg-transparent text-gray-400 rounded-2xl font-bold text-[10px] uppercase tracking-widest hover:text-brand transition-colors">
                    SUSISIEKTI DĖL DETALIŲ
                  </button>
                </div>
              </div>

             {/* Dynamic background element */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
             <div className="absolute bottom-10 left-10 text-[10rem] font-black text-brand/[0.03] select-none pointer-events-none leading-none">
               1h
             </div>
          </motion.div>
        </section>

        {/* Footer Text */}
        <section className="text-center max-w-2xl mx-auto py-12">
           <p className="text-gray-500 font-light leading-relaxed italic text-sm">
             Taro kortos – tai veidrodis tavo sielai. Leisk joms parodyti tai, ką tavo širdis jau seniai žino.
           </p>
        </section>
      </main>

    </div>
  );
}
