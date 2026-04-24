'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, Variants } from 'motion/react';
import { ArrowLeft, Clock, CheckCircle2, AlertCircle, Sparkles, User, Users, MapPin } from 'lucide-react';

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

const PRICING_OPTIONS = [
  { id: '1h', label: '1 valanda', price: '40 €', durationSymbol: '1h' },
  { id: '1.5h', label: '1,5 valandos', price: '50 €', durationSymbol: '1.5h' },
  { id: '2h', label: '2 valandos', price: '60 €', durationSymbol: '2h' },
];

export default function KvapuPage() {
  const [selectedDuration, setSelectedDuration] = useState(PRICING_OPTIONS[1]); // Default 1.5h
  const [sessionType, setSessionType] = useState<'asmeniui' | 'poroms'>('asmeniui');

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-brand font-montserrat tracking-wider selection:bg-brand/20 selection:text-brand overflow-x-hidden">
      
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
        <svg viewBox="0 0 800 800" className="w-full h-full stroke-brand/30 fill-none">
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
              Kvapų konsultacija
            </motion.div>
            <motion.h1 
              variants={fadeIn}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-custom-gradient leading-[1.0] font-prata"
            >
              Kelionė į pasąmonę per uoslę
            </motion.h1>
            <motion.div variants={fadeIn} className="space-y-6">
              <div className="text-gray-600 text-base md:text-lg font-light leading-relaxed text-center">
                &ldquo;Kvapo įtaiga stipresnė už žodžius, reginius, jausmus ir valią. Kvapo įtaigai neįmanoma atsispirti, jis patenka į mus kaip oras į plaučius, jis užlieja mus, tiesiog užtvindo ir niekas negali nuo jo apsiginti.&rdquo;
                <footer className="mt-2 text-sm font-bold text-gray-400 italic font-prata">&mdash; Patrick S&uuml;skind</footer>
              </div>
              <div className="text-gray-600 text-base md:text-lg font-light leading-relaxed text-justify space-y-4">
                <p>
                  Ar žinojote, kad kvapas yra trumpiausias kelias į jūsų emocijas? Kol protas kuria loginius paaiškinimus, jūsų uoslė jau žino tiesą. Mes esame simbiozėje su augalais, todėl eterinių aliejų molekulės mūsų ląstelėms yra savos ir atpažįstamos.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white p-4 md:p-6 rounded-[40px] md:rounded-[56px] shadow-2xl border border-gray-100 overflow-hidden relative aspect-[4/3]"
          >
            <div className="relative w-full h-full">
              <Image 
                src="/images/aura-soma/kvapu konsultacija baltas dvaras.jpg"
                alt="Kvapų konsultacija Baltas Dvaras"
                fill
                className="object-cover rounded-[24px] md:rounded-[32px]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand/10 to-transparent pointer-events-none rounded-[24px] md:rounded-[32px]" />
            </div>
          </motion.div>
        </section>

        {/* How it works */}
        <section className="mb-24 lg:mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 bg-white p-3 md:p-4 rounded-[32px] md:rounded-[40px] shadow-2xl border border-gray-100 overflow-hidden relative aspect-[3/2]"
            >
              <div className="relative w-full h-full">
                <Image 
                  src="/images/aura-soma/kaip vyksta.jpg"
                  alt="Kvapų testavimo procesas"
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
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-gray-800 font-prata">Kaip tai veikia?</h2>
              <div className="text-gray-600 font-light leading-relaxed text-justify space-y-4">
                <p>
                  Įkvėpus kvapą, molekulės akimirksniu pasiekia limbinę smegenų sistemą – mūsų jausmų, atminties ir instinktų centrą. Tai sužadina pogumburį, kuris reguliuoja viską: nuo jūsų energijos lygio iki seksualinio potraukio.
                </p>
                <p className="font-medium text-brand/80">
                  Faktas: Net 95 % fizinių negalavimų turi psichosomatinę šaknį. Kvapų vibracijos padeda „atrakinti“ užspaustas emocijas ir grąžinti organizmą į darnią visumą.
                </p>
              </div>
              <div className="space-y-4 pt-4 border-t border-brand/5">
                <h3 className="font-bold text-gray-800">Kodėl verta rinktis?</h3>
                {[
                  "Gilus vidinės būsenos analizavimas",
                  "Psichoemocinės būsenos atskleidimas",
                  "Individuali 60 dienų korekcijos programa",
                  "Asmeniniai sielos kvepalai (pagal pageidavimą)"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-500">
                    <CheckCircle2 className="w-5 h-5 text-brand/60" />
                    <span className="text-sm font-medium">{item}</span>
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
            <h2 className="text-3xl font-bold tracking-tighter mb-12 text-center text-gray-800 font-prata">Kaip vyksta kvapų testavimas?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              <div className="flex flex-col gap-6">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border border-brand/5 shrink-0 font-bold text-brand">1</div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Procesas</h4>
                    <p className="text-gray-500 text-sm font-light leading-relaxed text-justify">Jūs pratestuojate 50 aukščiausios kokybės eterinių aliejų. Kiekvieną jų vertinate intuityviai: patinka, neutralu arba nepatinka.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border border-brand/5 shrink-0 font-bold text-brand">2</div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Analizė</h4>
                    <p className="text-gray-500 text-sm font-light leading-relaxed text-justify">Jūsų reakcijos atskleidžia tikrąją psichoemocinę būseną, stiprybes, baimes ir tai, kas šiuo metu vyksta jūsų gyvenimo tėkmėje.</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border border-brand/5 shrink-0 font-bold text-brand">3</div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Programa</h4>
                    <p className="text-gray-500 text-sm font-light leading-relaxed text-justify">Iš jūsų išsirinktų favoritų sudaroma individuali 60 dienų korekcijos programa.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border border-brand/5 shrink-0 font-bold text-brand">4</div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Savistaba</h4>
                    <p className="text-gray-500 text-sm font-light leading-relaxed text-justify">Gausite specialią metodiką pokyčiams fiksuoti. Po kurso aptariame pasiektus rezultatus. Esant pageidavimui, sukuriame jūsų sielos kvepalus.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Who is it for? */}
        <section className="mb-24 lg:mb-32">
          <h2 className="text-3xl font-bold tracking-tighter mb-12 text-center text-gray-800 font-prata">Kam tai skirta?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[32px] border border-gray-100 shadow-xl shadow-brand/5 hover:translate-y-[-8px] transition-all duration-500"
            >
              <div className="mb-6 w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center text-brand">
                <User className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-6">Asmeninė konsultacija</h3>
              <ul className="space-y-4 text-gray-500 font-light text-sm text-justify">
                <li className="flex gap-3"><Sparkles className="w-4 h-4 text-brand/40 shrink-0 mt-0.5" /> <span>Savo asmenybės tipą, poreikius ir paslėptą potencialą.</span></li>
                <li className="flex gap-3"><Sparkles className="w-4 h-4 text-brand/40 shrink-0 mt-0.5" /> <span>Vidinius įstrigimus, kompleksus ar iššūkius, kuriuos jau esate pasiruošę paleisti.</span></li>
                <li className="flex gap-3"><Sparkles className="w-4 h-4 text-brand/40 shrink-0 mt-0.5" /> <span>Dabartinį energijos vektorių – kur link sukasi jūsų gyvenimas?</span></li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-10 rounded-[32px] border border-gray-100 shadow-xl shadow-brand/5 hover:translate-y-[-8px] transition-all duration-500"
            >
              <div className="mb-6 w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center text-brand">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-6">Porų konsultacija</h3>
              <ul className="space-y-4 text-gray-500 font-light text-sm text-justify">
                <li className="flex gap-3"><Sparkles className="w-4 h-4 text-brand/40 shrink-0 mt-0.5" /> <span>Santykių dinamiką ir suderinamumą.</span></li>
                <li className="flex gap-3"><Sparkles className="w-4 h-4 text-brand/40 shrink-0 mt-0.5" /> <span>Vyrų ir moterų tipų sąveiką, stipriąsias bei silpnąsias sąjungos puses.</span></li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Important Info & Pricing Card */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch mb-24">
          {/* Important Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-stone-50 p-8 md:p-12 rounded-[40px] border border-stone-200"
          >
            <div className="flex items-center gap-3 mb-8">
              <AlertCircle className="w-6 h-6 text-brand/60" />
              <h2 className="text-2xl font-bold tracking-tighter text-gray-800 font-prata">Svarbi informacija</h2>
            </div>
            <ul className="space-y-6 pl-9">
              {/* Bullet Points List */}
              {[
                { label: "Moterims", text: "Testavimas neatliekamas 3 dienos iki menstruacijų ir pirmas 3 ciklo dienas (dėl hormoninių svyravimų)." },
                { label: "Amžius", text: "Rekomenduojama asmenims nuo 12 metų." },
                { label: "Pasiruošimas", text: "Parą iki susitikimo nevartoti psichotropinių medžiagų, vengti aštraus maisto." },
                { label: "Švara", text: "Į konsultaciją atvykite nesikvėpinę." },
                { label: "Hidratacija", text: "Testavimo metu ir parą po jo rekomenduojama gerti daug vandens." }
              ].map((info, i) => (
                <li key={i} className="flex gap-4 group">
                  <div className="mt-1 w-5 h-5 rounded-lg bg-brand/10 flex items-center justify-center text-brand/60 shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="w-3 h-3" />
                  </div>
                  <div>
                    <span className="font-bold text-gray-800 text-sm tracking-tight block mb-1 uppercase text-[10px]">{info.label}</span>
                    <p className="text-gray-500 text-sm font-light leading-relaxed text-justify">{info.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Pricing Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative bg-white rounded-[40px] p-8 md:p-12 shadow-2xl shadow-brand/10 border border-gray-100 flex flex-col justify-between overflow-hidden"
          >
             <div className="relative z-10">
                <h3 className="text-3xl font-bold tracking-tight text-gray-800 mb-2 font-prata">Rezervuokite laiką</h3>
                <p className="text-gray-500 font-light mb-8 text-sm italic">„Susitikime ten, kur prasideda pokyčiai.“</p>

                {/* Session Type Selection - Option Buttons */}
                <div className="flex flex-col gap-4 mb-8">
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400">Pasirinkite narius</span>
                  <div className="flex gap-2">
                    {[
                      { id: 'asmeniui', label: 'Asmeniui' },
                      { id: 'poroms', label: 'Poroms' }
                    ].map((type) => {
                      const isActive = sessionType === type.id;
                      return (
                        <button
                          key={type.id}
                          onClick={() => setSessionType(type.id as any)}
                          className={`flex-1 py-3 rounded-xl text-[9px] font-bold uppercase tracking-[0.2em] transition-all duration-500 border ${
                            isActive 
                              ? 'bg-brand text-white border-brand shadow-lg shadow-brand/20' 
                              : 'bg-white/80 border-gray-100 text-gray-400 hover:bg-white hover:text-brand'
                          }`}
                        >
                          {type.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-3 mb-10">
                  <div className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400 mb-4 text-left">Pasirinkite trukmę</div>
                  {PRICING_OPTIONS.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setSelectedDuration(option)}
                      className={`w-full group flex items-center justify-between p-5 rounded-2xl border transition-all duration-300 ${
                        selectedDuration.id === option.id 
                          ? 'border-brand bg-brand/5 shadow-inner' 
                          : 'border-gray-100 bg-gray-50/50 hover:bg-white hover:border-brand/30'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-xl transition-colors ${
                          selectedDuration.id === option.id ? 'bg-brand text-white' : 'bg-white text-gray-400 group-hover:text-brand'
                        }`}>
                          <Clock className="w-5 h-5" />
                        </div>
                        <div className="text-left">
                          <span className={`block font-bold text-sm tracking-wide ${selectedDuration.id === option.id ? 'text-brand' : 'text-gray-600'}`}>
                            {option.label}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className={`text-xl font-bold ${selectedDuration.id === option.id ? 'text-brand' : 'text-gray-800'}`}>
                          {option.price}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="space-y-4">
                  {/* Notice Badge */}
                  <div className="flex items-center justify-center gap-2 py-3 mb-2 bg-brand text-white rounded-xl shadow-lg shadow-brand/10">
                    <MapPin className="w-4 h-4" />
                    <span className="text-[9px] font-black uppercase tracking-[0.2em]">Tik gyvai Baltame Dvare</span>
                  </div>

                  <button className="w-full py-5 bg-brand text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-brand/20 hover:bg-brand/90 transition-all hover:scale-[1.02] active:scale-95">
                    REGISTRUOTIS KONSULTACIJAI
                  </button>
                </div>
             </div>

             {/* Dynamic background element */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
             <div className="absolute bottom-10 left-10 text-[10rem] font-black text-brand/[0.03] select-none pointer-events-none leading-none">
               {selectedDuration.durationSymbol}
             </div>
          </motion.div>
        </section>

        {/* Footer Text */}
        <section className="text-center max-w-2xl mx-auto py-12">
           <p className="text-gray-500 font-light leading-relaxed italic text-sm">
             Leiskite augalų galioms padėti jums rasti harmoningiausią kelią į save ir savo socialinį gyvenimą.
           </p>
        </section>
      </main>

    </div>
  );
}
