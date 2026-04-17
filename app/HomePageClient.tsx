'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, Variants } from 'motion/react';
import { Facebook, Instagram } from 'lucide-react';

// --- Animacijų nustatymai ---
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
};

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
  }
};

// --- Tipai ---
interface NavItem {
  id: string;
  label: string;
  href?: string | null;
  targetId?: string | null;
  children?: NavItem[];
}

interface SiteSettingMap {
  [key: string]: string;
}

interface JourneyStep {
  id: string;
  stepId: string;
  title: string;
  desc: string;
  longDesc: string;
  order: number;
}

interface PricingPlan {
  id: string;
  title: string;
  description: string;
  price: string;
  bonusText?: string | null;
  savingsText?: string | null;
  isPopular: boolean;
  buttonText: string;
  order: number;
}

export default function HomePageClient({ 
  settings, 
  journeySteps, 
  pricingPlans, 
  navItems 
}: { 
  settings: SiteSettingMap; 
  journeySteps: JourneyStep[]; 
  pricingPlans: PricingPlan[]; 
  navItems: NavItem[] 
}) {

  const [selectedStep, setSelectedStep] = useState<JourneyStep | null>(null);
  const [popupPos, setPopupPos] = useState<any>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);
  const [expandedMobileItems, setExpandedMobileItems] = useState<string[]>([]);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const subTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      setActiveSubDropdown(null);
    }, 300);
  };

  const handleSubMouseEnter = (label: string) => {
    if (subTimeoutRef.current) clearTimeout(subTimeoutRef.current);
    setActiveSubDropdown(label);
  };

  const handleSubMouseLeave = () => {
    subTimeoutRef.current = setTimeout(() => {
      setActiveSubDropdown(null);
    }, 300);
  };
  const [currentUrl, setCurrentUrl] = useState('');

  React.useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const toggleMobileItem = (label: string) => {
    setExpandedMobileItems(prev => 
      prev.includes(label) ? prev.filter(i => i !== label) : [...prev, label]
    );
  };

  const handleStepClick = (e: React.MouseEvent, step: JourneyStep) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPopupPos({
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height
    });
    setSelectedStep(step);
  };

  const [selectedIndividualDurationId, setSelectedIndividualDurationId] = useState('60min');
  const [selectedCouplesDurationId, setSelectedCouplesDurationId] = useState('60min');

  const INDIVIDUAL_DURATION_OPTIONS = [
    { id: '60min', label: '60 min.', price: '40 €', description: '60 min. trukmės analizė ir sprendimų paieška' },
    { id: '1val30min', label: '1 val. 30 min.', price: '60 €', description: '90 min. trukmės išsami analizė ir sprendimų paieška' },
    { id: '2val', label: '2 val.', price: '70 €', description: '120 min. trukmės giluminė analizė ir sprendimų paieška' }
  ];

  const COUPLES_DURATION_OPTIONS = [
    { id: '60min', label: '60 min.', price: '40 €', description: '60 min. trukmės analizė ir sprendimų paieška' },
    { id: '1val30min', label: '1 val. 30 min.', price: '60 €', description: '90 min. trukmės išsami analizė ir sprendimų paieška' },
    { id: '2val', label: '2 val.', price: '70 €', description: '120 min. trukmės giluminė analizė ir sprendimų paieška' }
  ];

  const currentIndividualOption = INDIVIDUAL_DURATION_OPTIONS.find(opt => opt.id === selectedIndividualDurationId) || INDIVIDUAL_DURATION_OPTIONS[0];
  const currentCouplesOption = COUPLES_DURATION_OPTIONS.find(opt => opt.id === selectedCouplesDurationId) || COUPLES_DURATION_OPTIONS[0];



  const scrollToSection = (id: string | null | undefined) => {
    if (!id) return;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-brand font-montserrat tracking-wider selection:bg-brand/20 selection:text-brand overflow-x-hidden">
      
      {/* Skaitmeninės Linijos Fone */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-30">
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-brand/30 fill-none opacity-20">
          <motion.path 
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
            d="M0,400 C150,300 350,500 500,400 C650,300 750,450 800,400" 
            strokeWidth="0.5"
          />
          <motion.path 
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
            d="M0,450 C200,350 400,550 600,450 C700,400 750,500 800,450" 
            strokeWidth="0.5"
          />
        </svg>
      </div>

      {/* Navigacija */}
      <nav className="fixed w-full z-[60] px-6 lg:px-12 py-4 lg:py-6 flex justify-between items-center bg-white/60 backdrop-blur-xl border-b border-white/20">
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

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-8 items-center text-[10px] font-bold tracking-[0.2em] text-gray-500">
          {navItems.map((item) => (
            <div 
              key={item.id} 
              className="relative group"
              onMouseEnter={() => handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              {item.href ? (
                <Link href={item.href} className="hover:text-brand transition-colors flex items-center gap-1 py-4">
                  {item.label}
                </Link>
              ) : (
                <button 
                  onClick={() => scrollToSection(item.targetId)} 
                  className="hover:text-brand transition-colors flex items-center gap-1 py-4"
                  suppressHydrationWarning
                >
                  {item.label}
                  {item.children && item.children.length > 0 && (
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" className={`transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : ''}`}>
                      <path d="M1 2.5L4 5.5L7 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </button>
              )}

              {/* Dropdown */}
              {item.children && item.children.length > 0 && activeDropdown === item.label && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full left-0 w-48 bg-white/95 backdrop-blur-xl border border-gray-100 rounded-2xl shadow-2xl p-4 flex flex-col gap-3 z-[70]"
                >
                  {item.children.map((child) => (
                    <div 
                      key={child.id} 
                      className="relative group/sub"
                      onMouseEnter={() => handleSubMouseEnter(child.label)}
                      onMouseLeave={handleSubMouseLeave}
                    >
                      {child.href && (!child.children || child.children.length === 0) ? (
                        <Link 
                          href={child.href}
                          className="text-left hover:text-brand transition-colors text-[9px] tracking-widest block"
                        >
                          {child.label}
                        </Link>
                      ) : (
                        <button 
                          onClick={() => !child.children && scrollToSection(child.targetId)}
                          className="w-full text-left hover:text-brand transition-colors text-[9px] tracking-widest flex items-center justify-between"
                          suppressHydrationWarning
                        >
                          {child.label}
                          {child.children && child.children.length > 0 && (
                            <svg width="6" height="6" viewBox="0 0 8 8" fill="none" className="text-gray-400 -rotate-90">
                              <path d="M1 2.5L4 5.5L7 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          )}
                        </button>
                      )}

                      {/* Nested Dropdown */}
                      {child.children && child.children.length > 0 && activeSubDropdown === child.label && (
                        <div 
                          className="absolute top-0 left-[calc(100%-1px)] w-48 pl-2 z-[80] flex"
                        >
                          <div className="w-full bg-white/95 backdrop-blur-xl border border-gray-100 rounded-2xl shadow-2xl p-4 flex flex-col gap-3">
                            {child.children.map((grandchild) => (
                              grandchild.href ? (
                                <Link 
                                  key={grandchild.id}
                                  href={grandchild.href}
                                  className="text-left hover:text-brand transition-colors text-[9px] tracking-widest block"
                                >
                                  {grandchild.label}
                                </Link>
                              ) : (
                                <button 
                                  key={grandchild.id}
                                  onClick={() => scrollToSection(grandchild.targetId)}
                                  className="text-left hover:text-brand transition-colors text-[9px] tracking-widest block w-full"
                                  suppressHydrationWarning
                                >
                                  {grandchild.label}
                                </button>
                              )
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4">


          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-500 hover:text-brand transition-colors"
            suppressHydrationWarning
          >
            {isMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full max-h-[80vh] overflow-y-auto bg-white/95 backdrop-blur-2xl border-b border-gray-100 p-8 flex flex-col gap-6 lg:hidden shadow-xl z-[60]"
            >
              {navItems.map((item) => (
                <div key={item.id} className="flex flex-col gap-4">
                  {item.href ? (
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-[10px] font-bold tracking-[0.2em] text-gray-500 hover:text-brand text-left"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button 
                      onClick={() => {
                        if (item.children && item.children.length > 0) {
                          toggleMobileItem(item.label);
                        } else {
                          scrollToSection(item.targetId);
                          setIsMenuOpen(false);
                        }
                      }} 
                      className="text-[10px] font-bold tracking-[0.2em] text-gray-500 hover:text-brand text-left flex items-center justify-between"
                      suppressHydrationWarning
                    >
                      {item.label}
                      {item.children && item.children.length > 0 && (
                        <svg width="10" height="10" viewBox="0 0 8 8" fill="none" className={`transition-transform duration-300 ${expandedMobileItems.includes(item.label) ? 'rotate-180' : ''}`}>
                          <path d="M1 2.5L4 5.5L7 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </button>
                  )}

                  {/* Mobile Submenu */}
                  <AnimatePresence>
                    {expandedMobileItems.includes(item.label) && item.children && item.children.length > 0 && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden flex flex-col gap-4 pl-4 border-l border-brand/10"
                      >
                        {item.children.map((child) => (
                          <div key={child.id} className="flex flex-col gap-4">
                            {child.href && (!child.children || child.children.length === 0) ? (
                              <Link 
                                href={child.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-[9px] tracking-widest text-gray-400 text-left block"
                              >
                                {child.label}
                              </Link>
                            ) : (
                              <button 
                                onClick={() => {
                                  if (child.children && child.children.length > 0) {
                                    toggleMobileItem(child.label);
                                  } else {
                                    scrollToSection(child.targetId);
                                    setIsMenuOpen(false);
                                  }
                                }}
                                className="text-[9px] tracking-widest text-gray-400 text-left flex items-center justify-between w-full"
                                suppressHydrationWarning
                              >
                                {child.label}
                                {child.children && child.children.length > 0 && (
                                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" className={`transition-transform duration-300 ${expandedMobileItems.includes(child.label) ? 'rotate-180' : ''}`}>
                                    <path d="M1 2.5L4 5.5L7 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                                )}
                              </button>
                            )}

                            {/* Nested Mobile Submenu */}
                            <AnimatePresence>
                              {child.children && child.children.length > 0 && expandedMobileItems.includes(child.label) && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  className="overflow-hidden flex flex-col gap-4 pl-4 border-l border-brand/10"
                                >
                                  {child.children.map(grandchild => (
                                    grandchild.href ? (
                                      <Link 
                                        key={grandchild.id}
                                        href={grandchild.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="text-[8px] tracking-widest text-gray-400 text-left block"
                                      >
                                        {grandchild.label}
                                      </Link>
                                    ) : (
                                      <button 
                                        key={grandchild.id}
                                        onClick={() => { scrollToSection(grandchild.targetId); setIsMenuOpen(false); }}
                                        className="text-[8px] tracking-widest text-gray-400 text-left block w-full"
                                        suppressHydrationWarning
                                      >
                                        {grandchild.label}
                                      </button>
                                    )
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Sekcija */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 pt-32 pb-20 md:pt-20"
      >
        <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
          <div className="max-w-2xl text-center lg:text-left">


            <div className="flex flex-col gap-10 md:gap-12 mb-12">
              <motion.div variants={fadeIn} className="group">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-normal tracking-wider mb-2 text-hero drop-shadow-sm font-times pt-2">
                  {settings['hero_title_1'] || 'Čia gali būti kuo esi.'}
                </h1>
                <p className="text-hero text-xl md:text-2xl font-bold leading-normal opacity-100 group-hover:scale-[1.02] transition-transform origin-left font-times tracking-wider pt-1">
                  {settings['hero_subtitle_1'] || 'Tai atsivėrimas. Tiesa.'}
                </p>
              </motion.div>

              <motion.div variants={fadeIn} className="group">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-normal tracking-wider mb-2 text-hero drop-shadow-sm font-times pt-2">
                  {settings['hero_title_2'] || 'Čia dėmesys tau.'}
                </h2>
                <p className="text-hero text-xl md:text-2xl font-bold leading-normal opacity-100 group-hover:scale-[1.02] transition-transform origin-left font-times tracking-wider pt-1">
                  {settings['hero_subtitle_2'] || 'Tai esmė. Meilė.'}
                </p>
              </motion.div>

              <motion.div variants={fadeIn} className="group">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-normal tracking-wider mb-2 text-hero drop-shadow-sm font-times pt-2">
                  {settings['hero_title_3'] || 'Čia susitinka dvasia ir materija.'}
                </h2>
                <p className="text-hero text-xl md:text-2xl font-bold leading-normal opacity-100 group-hover:scale-[1.02] transition-transform origin-left font-times tracking-wider pt-1">
                  {settings['hero_subtitle_3'] || 'Tai darna. Evoliucija.'}
                </p>
              </motion.div>
            </div>

            <motion.div 
              variants={fadeIn}
              className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start"
            >

              <button 
                onClick={() => scrollToSection('journey')}
                className="w-full sm:w-auto bg-brand text-white px-10 py-4 md:py-5 rounded-2xl font-bold text-xs uppercase tracking-widest shadow-xl shadow-brand/20 hover:bg-brand/90 transition-all hover:scale-105 active:scale-95 hover:shadow-brand/30"
                suppressHydrationWarning
              >
                <span className="text-white">Pradėti kelionę</span>
              </button>
            </motion.div>
          </div>

          <motion.div 
            variants={fadeIn}
            className="relative w-full"
          >
            <div className="bg-white/40 backdrop-blur-xl p-3 md:p-4 rounded-[32px] md:rounded-[40px] shadow-2xl border border-white/20 overflow-hidden">
              <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full">
                <Image 
                  src="https://i.postimg.cc/vDFvv5KK/baltas-dvaras-aromoterapija.jpg" 
                  alt="Baltas Dvaras" 
                  fill
                  className="object-cover rounded-[24px] md:rounded-[32px]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Glassmorphism Metodas */}
      <motion.section 
        id="about" 
        className="py-20 md:py-32 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div 
            variants={fadeIn}
            className="relative order-2 lg:order-1"
          >
            <div className="bg-white/40 backdrop-blur-xl p-3 md:p-4 rounded-[32px] md:rounded-[40px] shadow-2xl border border-white/20 overflow-hidden">
              <Image 
                src={settings.about_image || "/images/aura-soma/about-me.jpg"} 
                alt="Aura-Soma Esencija" 
                width={1000}
                height={500}
                className="w-full h-[350px] md:h-[500px] object-cover rounded-[24px] md:rounded-[32px]"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="order-1 lg:order-2 text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 tracking-tight">
              {'Apie mane'}
            </h2>
            <div className="space-y-6 md:space-y-8">
              <p className="text-brand font-bold text-lg md:text-xl leading-tight text-justify">
                Remiuosi dviem esminiais poliais: kritiniu mąstymu ir praktiniu sprendimų pritaikymu.
              </p>
              
              <div className="space-y-4">
                <p className="text-gray-500 leading-relaxed text-base md:text-lg font-light text-justify">
                  Mano manymu, kiekviena problema yra tik dar neišspręstas uždavinys, reikalaujantis gilaus
                  situacijos vertinimo ir priežastinio ryšio aptikimo, o sprendimas yra išmintinga išvada ir
                  vykęs planas, pritaikomas būtent jūsų realybei.
                </p>
                <p className="text-gray-500 leading-relaxed text-base md:text-lg font-light text-justify">
                  Teorija be praktikos, tai sąnaudos be grąžos ir nerealizuotas potencialas. Dirbdami
                  kartu, sutelksime dėmesį į tai, kas iš tiesų generuoja progresą. Vertinu tiesų ir nuoširdų
                  bendravimą. Leiskite padėti jums pamatyti tai, kas slepiasi šešėlyje ir paversti tai jūsų
                  sėkme.
                </p>
              </div>

              <div className="pt-6 border-t border-brand/5">
                <div className="inline-flex items-start md:items-center gap-3 px-4 py-3 bg-brand/[0.03] rounded-2xl border border-brand/5 text-left">
                  <div className="mt-1 md:mt-0 text-brand opacity-60">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                  </div>
                  <p className="text-[10px] md:text-[11px] font-bold text-gray-400 uppercase tracking-widest leading-relaxed text-justify">
                    Išsilavinimas – socialinio darbo medicinoje bakalauras, psichosocialinis konsultavimas VDU.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* 5 Sesijų Planas */}
      <motion.section 
        id="journey" 
        className="py-20 md:py-32 bg-brand/5 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeIn} className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">{settings['journey_title'] || 'Pokyčio kelionė'}</h2>
            <p className="text-gray-400 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em]">{settings['journey_subtitle'] || 'Šešios pakopos į tavo naująjį Aš'}</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 md:gap-6"
          >
            {journeySteps.sort((a, b) => a.order - b.order).map((step, idx) => (
              <motion.div 
                key={step.id}
                variants={fadeIn}
                whileHover={{ y: -5 }}
                onClick={(e) => handleStepClick(e, step)}
                className="bg-white/40 backdrop-blur-xl p-6 md:p-8 rounded-[24px] md:rounded-[32px] border border-white/50 text-center flex flex-col items-center group shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
                suppressHydrationWarning
              >
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center text-xs font-bold mb-4 md:mb-6 shadow-sm group-hover:bg-brand group-hover:text-white transition-colors">
                  {step.stepId}
                </div>
                <h3 className="font-bold text-xs md:text-sm mb-3 md:mb-4 uppercase tracking-tighter group-hover:text-brand transition-colors">
                  {({
                    '01': 'Analizė',
                    '02': 'Šešėlis',
                    '03': 'Resursai',
                    '04': 'Tikslas',
                    '05': 'Metodika',
                    '06': 'Refleksija',
                  }[step.stepId]) || step.title}
                </h3>
                <p className="text-[9px] md:text-[10px] text-gray-400 leading-relaxed uppercase tracking-widest font-sans">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Contextual Popup */}
      <AnimatePresence>
        {selectedStep && popupPos && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedStep(null)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[100] cursor-pointer"
            />
            <motion.div
              initial={{ 
                top: popupPos.top, 
                left: popupPos.left, 
                width: popupPos.width, 
                height: popupPos.height,
                scale: 1,
                opacity: 0
              }}
              animate={{ 
                top: '50%', 
                left: '50%', 
                width: 'min(90%, 400px)', 
                height: 'auto',
                x: '-50%',
                y: '-50%',
                scale: 1,
                opacity: 1
              }}
              exit={{ 
                top: popupPos.top, 
                left: popupPos.left, 
                width: popupPos.width, 
                height: popupPos.height,
                x: '0%',
                y: '0%',
                scale: 1,
                opacity: 0
              }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed z-[101] bg-white/95 backdrop-blur-3xl p-6 md:p-10 rounded-[32px] md:rounded-[40px] border border-white shadow-2xl flex flex-col items-center text-center"
            >
              <button 
                onClick={() => setSelectedStep(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                suppressHydrationWarning
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 1L13 13M1 13L13 1" />
                </svg>
              </button>
              
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand text-white flex items-center justify-center text-xs md:text-sm font-bold mb-4 md:mb-6 shadow-lg shadow-brand/20">
                {selectedStep.stepId}
              </div>
              
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 uppercase tracking-tighter text-brand">
                {({
                  '01': 'Analizė',
                  '02': 'Šešėlis',
                  '03': 'Resursai',
                  '04': 'Tikslas',
                  '05': 'Metodika',
                  '06': 'Refleksija',
                }[selectedStep.stepId]) || selectedStep.title}
              </h3>
              
              <p className="text-gray-500 leading-relaxed text-xs md:text-sm font-light mb-6">
                {selectedStep.longDesc}
              </p>
              
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <motion.section 
        id="pricing" 
        className="py-20 md:py-32 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariants}
      >
        <motion.div 
          variants={staggerContainer}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
           {pricingPlans
            .filter(plan => plan.title !== 'Viena sesija' && plan.title !== 'Pilna kelionė')
            .sort((a, b) => a.order - b.order)
            .map((plan) => {
            // Robustness Fix: Override details for specific plans
            const isIndividual = plan.title === '"Psichosocialinė asmens konsultacija"';
            const isCouples = plan.title === '"Psichosocialinė porų konsultacija"';
            const isTaro = plan.title === '"Asmeninė taro konsultacija"';
            
            const currentOpt = isIndividual ? currentIndividualOption : isCouples ? currentCouplesOption : null;
            const durOptions = isIndividual ? INDIVIDUAL_DURATION_OPTIONS : isCouples ? COUPLES_DURATION_OPTIONS : [];
            const activeDurId = isIndividual ? selectedIndividualDurationId : isCouples ? selectedCouplesDurationId : '';
            const setDurId = isIndividual ? setSelectedIndividualDurationId : isCouples ? setSelectedCouplesDurationId : () => {};

            // For Taro, we use the values directly from the database plan since there's no duration selection
            const displayPlan = (isIndividual || isCouples) && currentOpt ? {
              ...plan,
              description: currentOpt.description,
              price: currentOpt.price,
              bonusText: null,
              savingsText: null,
            } : plan;

            // Strip "Investicija: " if it already exists in the string to avoid doubling it in the UI
            const cleanPrice = displayPlan.price.replace(/^Investicija:\s*/, '');

            return (
              <motion.div key={displayPlan.id} variants={fadeIn} className={`p-8 md:p-10 rounded-[32px] md:rounded-[40px] flex flex-col justify-between transition-shadow relative overflow-hidden ${true ? 'bg-brand/5 backdrop-blur-xl border border-brand/20 shadow-xl shadow-brand/5 hover:shadow-brand/10' : 'border border-stone-200 bg-stone-50/50 backdrop-blur-xl shadow-sm hover:shadow-md'}`}>
                 {displayPlan.savingsText && (
                    <div className="absolute top-6 right-6 md:top-8 md:right-8 bg-brand/20 text-brand text-[8px] md:text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">{displayPlan.savingsText}</div>
                 )}
                <div>
                  <h3 className={`text-xl md:text-2xl font-bold italic mb-3 md:mb-4 text-brand`}>{displayPlan.title}</h3>
                  
                  {(isIndividual || isCouples) && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {durOptions.map((opt) => (
                        <button
                          key={opt.id}
                          onClick={() => setDurId(opt.id)}
                          className={`px-3 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest transition-all ${
                            activeDurId === opt.id 
                              ? 'bg-brand text-white shadow-lg shadow-brand/20' 
                              : 'bg-white/50 text-brand/60 hover:bg-white border border-brand/10'
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  )}

                  <p className={`text-[10px] md:text-xs mb-6 md:mb-8 text-[#4A6B4B]`}>{displayPlan.description}</p>
                  <div className={`text-xl md:text-2xl font-bold tracking-tighter mb-2 text-brand`}>Investicija: {cleanPrice}</div>
                </div>
                <button className={`w-full py-4 rounded-2xl font-bold text-[9px] md:text-[10px] uppercase tracking-widest transition-all hover:scale-[1.02] active:scale-[0.98] md:py-5 bg-brand text-white hover:bg-brand/90 shadow-lg shadow-brand/20`} suppressHydrationWarning>
                  {displayPlan.buttonText}
                </button>
              </motion.div>
            );
          })}

        </motion.div>
      </motion.section>

      {/* Renginiai */}
      <motion.section 
        id="events" 
        className="py-20 md:py-32 px-6 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariants}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">Artimiausi Renginiai</h2>
          <p className="text-gray-500 mb-12 font-light">Sekite mūsų naujienas ir prisijunkite prie bendruomenės susitikimų.</p>
          <div className="bg-brand/5 p-8 rounded-[32px] border border-brand/10">
            <p className="text-brand font-bold uppercase tracking-widest text-xs">Šiuo metu planuojamų renginių nėra</p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
