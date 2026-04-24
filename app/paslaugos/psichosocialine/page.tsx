'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, Variants } from 'motion/react';
import { ArrowLeft, Clock, CheckCircle2, AlertCircle, Sparkles, User, Users, MapPin, Target, Zap, Shield, Compass } from 'lucide-react';

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

export default function PsichosocialinePage() {
  const [selectedDuration, setSelectedDuration] = useState(PRICING_OPTIONS[0]);

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
        <Link href="/" className="text-lg lg:text-xl font-bold tracking-tighter flex items-center gap-2 lg:gap-3 text-gray-500 hover:opacity-80 transition-opacity">
          <Image 
            src="https://i.postimg.cc/gjvvVWt6/baltas-dvaras-logo.png" 
            alt="Baltas Dvaras Logo" 
            width={32} 
            height={32} 
            className="w-8 h-8 lg:w-10 lg:h-10 object-contain"
            referrerPolicy="no-referrer"
          />
          Baltas Dvaras
        </Link>
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
              PSICHOSOCIALINĖ PAGALBA
            </motion.div>
            <motion.h1 
              variants={fadeIn}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-custom-gradient leading-[1.0] font-prata"
            >
              Sielos ir pasaulio architektūra
            </motion.h1>
            <motion.div variants={fadeIn} className="space-y-6">
              <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed text-justify italic">
                Mes nesame izoliuotos salos. Kiekvienas mūsų išgyvenimas, emocija ar elgesio modelis yra susipynęs su aplinka, kurioje gyvename: šeima, darbu, kultūra ir santykiais. Mes dažnai bandome spręsti savo sunkumus „vakume“ – manome, kad liūdesys, nerimas ar pasimetimas yra tik mūsų vidinis gedimas. Tačiau tiesa yra gilesnė: žmogus yra gyva sistema, kuri nuolat šoka dialoge su savo aplinka.
              </p>
              <p className="text-gray-500 text-sm md:text-base font-light leading-relaxed text-justify">
                Psichosocialinė konsultacija – tai erdvė, kurioje mes žiūrime ne tik į tai, kas vyksta tavo viduje, bet ir į tai, kaip tavo vidinis pasaulis „susikalba“ su išore. Tai ne tik pokalbis. Tai saugi, konfidenciali ir strateginė sesija tavo emocinei gerovei ir socialiniam komfortui atstatyti.
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] lg:aspect-square rounded-[40px] overflow-hidden shadow-2xl border border-white/50"
          >
            <Image 
              src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1000&auto=format&fit=crop"
              alt="Psichosocialinė asmens konsultacija"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand/10 to-transparent pointer-events-none" />
          </motion.div>
        </section>

        {/* Giluminis požiūris */}
        <section className="mb-32">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-brand font-prata italic mb-4">Giluminis požiūris</h2>
            <p className="text-gray-500 font-light text-base tracking-wide">Kur susitinka tavo „Aš“ ir „Mes“?</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Vidinė dinamika (Psicho)",
                desc: "Tavo įsitikinimai, vertybės, vaikystės šešėliai ir emociniai atsakai. Kodėl tavo psichika renkasi būtent tokią reakciją? Kokie vidiniai balsai tave stabdo, o kokie – veda į priekį?",
                icon: User
              },
              {
                title: "Išorinė erdvė (Socio)",
                desc: "Tavo santykiai, šeimos sistema, darbas ir visuomenės lūkesčiai. Kaip aplinka formuoja tavo pasirinkimus ir kur tu prarandi savo autentiškumą bandydamas įtikti kitiems?",
                icon: Users
              },
              {
                title: "Sąveikos laukas (Sinergio)",
                desc: "Kaip tavo vidinė būsena kuria tavo išorinę realybę? Mes ieškome „mazgų“ – kaip vidinis nesaugumo jausmas virsta konfliktais ar įtampa.",
                icon: Zap
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/40 backdrop-blur-xl p-8 rounded-[32px] border border-white shadow-xl hover:translate-y-[-5px] transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center text-brand mb-6">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-4">{item.title}</h3>
                <p className="text-gray-500 text-sm font-light leading-relaxed text-justify">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Kam skirta */}
        <section className="mb-32">
          <div className="bg-stone-50 rounded-[48px] p-8 md:p-16 border border-stone-200">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-brand font-prata italic mb-12 text-center">Kam skirta ši konsultacija?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Santykiai", text: "jautiesi įstrigęs pasikartojančiuose santykių modeliuose, patiri nuolatinius konfliktus su aplinkiniais (artimaisiais) ir ieškai būdų kurti sveikesnį, autentišką ryšį." },
                { title: "Veikla", text: "patiri nuolatinį spaudimą, jauti perdegimo požymius, praradai motyvaciją arba nesugebi nubrėžti ribos tarp vaidmens ir asmeninės personos." },
                { title: "Kryžkelės", text: "esi ties krizės riba, po netekties, keičiantis karjerai ar išgyveni vidurio amžiaus“ egzistencinę krizę ir t.t., kai senos prasmės nebeveikia, o naujų dar nėra." },
                { title: "Jautrumas", text: "stipriai sugeri aplinkos emocijas, jautiesi socialiai pavargęs, sunkiai apginti savo asmeninę erdvę socialiniame triukšme." },
                { title: "Nuovargis, beprasmybė", text: "sunku rasti bendrą kalbą su aplinkiniais, jautiesi vienišas arba „ne savo vietoje“, „tarsi filme“." },
                { title: "Balansas", text: "nori suderinti asmeninius poreikius su socialiniais vaidmenimis (tėvystė, partnerystė, profesija ir pan.)." },
                { title: "Vientisumas", text: "jei jauti prarają tarp to, kas esi viduje, ir to, kokį tave mato pasaulis. Norintiems nusiimti primestines socialines kaukes ir pradėti gyventi iš savo tikrojo „Aš“." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="mt-1 w-6 h-6 rounded-lg bg-brand/10 flex items-center justify-center text-brand shrink-0 group-hover:bg-brand group-hover:text-white transition-all duration-300">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-xs tracking-widest uppercase mb-2">{item.title}</h4>
                    <p className="text-gray-500 text-xs font-light leading-relaxed text-justify">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ką pasieksime */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-brand font-prata italic mb-8">Ką mes pasieksime šiame procese?</h2>
            <p className="text-gray-500 font-light mb-8 italic">Mes netaisome tavęs kaip sugedusio prietaiso, o padedame tau evoliucionuoti:</p>
            <div className="space-y-6">
              {[
                { title: "Iššifruosime elgesio kodus", desc: "Suprasi, kodėl vėl ir vėl patenki į tas pačias situacijas.", icon: Compass },
                { title: "Atstatysime asmenines ribas", desc: "Išmoksi sakyti „ne“ tam, kas tave sekina, nesijaučiant kaltam.", icon: Shield },
                { title: "Aktyvuosime resursus", desc: "Identifikuosime tavo paslėptus talentus ir išorinius palaikymo šaltinius.", icon: Zap },
                { title: "Emocinis atsparumas", desc: "Sukursime tavo asmeninį įrankių rinkinį, skirtą išlikti ramybėje net ir didžiausiose gyvenimo audrose.", icon: Target }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-5">
                  <div className="p-3 rounded-2xl bg-white shadow-lg border border-gray-100 text-brand shrink-0">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-xs font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Pricing Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative bg-white rounded-[40px] p-8 md:p-12 shadow-2xl shadow-brand/10 border border-gray-100 flex flex-col justify-between overflow-hidden"
          >
             <div className="relative z-10">
                <p className="text-2xl md:text-3xl font-bold tracking-tight text-brand mb-10 font-prata italic">„Susitikime ten, kur prasideda pokyčiai.“</p>

                <div className="space-y-3 mb-12">
                  <div className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400 mb-4 text-left">Pasirinkite sesijos trukmę</div>
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

                  <button className="w-full py-5 bg-black text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-black/10 hover:bg-brand transition-all hover:scale-[1.02] active:scale-95">
                    UŽSAKYTI KONSULTACIJĄ
                  </button>
                </div>
             </div>

             <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
             <div className="absolute bottom-10 left-10 text-[10rem] font-black text-brand/[0.03] select-none pointer-events-none leading-none">
               {selectedDuration.durationSymbol}
             </div>
          </motion.div>
        </section>

        {/* Closing paragraph */}
        <section className="text-center max-w-4xl mx-auto py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/60 backdrop-blur-md p-8 md:p-12 rounded-[40px] border border-white shadow-lg"
          >
            <h3 className="text-xl md:text-2xl font-bold text-brand font-prata italic mb-6">Nuo įžvalgos iki veiksmo</h3>
            <p className="text-gray-600 text-sm md:text-base font-light leading-relaxed text-justify">
              Mano darbe susipina empatiškas išklausymas, sisteminė analizė ir praktinė sociopsichologija. Konsultacijos pabaigoje turėsi ne tik geresnę savijautą, bet ir aiškų supratimą, kokį naują žingsnį žengti rytoj, kad tavo autentiškiausias gyvenimo scenarijus pildytųsi sklandžiai.
            </p>
          </motion.div>
        </section>

      </main>
    </div>
  );
}
