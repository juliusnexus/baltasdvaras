'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, Variants } from 'motion/react';
import { Facebook, Instagram, Mail, X } from 'lucide-react';

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
  const [formStatus, setFormStatus] = useState('idle');
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
  const [showContactModal, setShowContactModal] = useState(false);

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
            <motion.div 
              variants={fadeIn}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brand/10 text-brand text-[10px] font-bold tracking-[0.3em] mb-8 md:mb-10 shadow-sm border border-brand/20"
            >
              {settings['hero_badge'] || 'Sielos spalvų transformacija'}
            </motion.div>

            <div className="flex flex-col gap-10 md:gap-12 mb-12">
              <motion.div variants={fadeIn} className="group">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight tracking-wider mb-2 text-rose-gradient drop-shadow-sm font-prata small-caps">
                  {settings['hero_title_1'] || 'Čia gali būti kuo esi.'}
                </h1>
                <p className="text-rose-gradient text-base md:text-lg font-medium italic opacity-100 group-hover:scale-[1.02] transition-transform origin-left font-montserrat tracking-wider small-caps">
                  {settings['hero_subtitle_1'] || 'Tai atsivėrimas. Tiesa.'}
                </p>
              </motion.div>

              <motion.div variants={fadeIn} className="group">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight tracking-wider mb-2 text-rose-gradient drop-shadow-sm font-prata small-caps">
                  {settings['hero_title_2'] || 'Čia dėmesys tau.'}
                </h2>
                <p className="text-rose-gradient text-base md:text-lg font-medium italic opacity-100 group-hover:scale-[1.02] transition-transform origin-left font-montserrat tracking-wider small-caps">
                  {settings['hero_subtitle_2'] || 'Tai esmė. Meilė.'}
                </p>
              </motion.div>

              <motion.div variants={fadeIn} className="group">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight tracking-wider mb-2 text-rose-gradient drop-shadow-sm font-prata small-caps">
                  {settings['hero_title_3'] || 'Čia susitinka dvasia ir materija.'}
                </h2>
                <p className="text-rose-gradient text-base md:text-lg font-medium italic opacity-100 group-hover:scale-[1.02] transition-transform origin-left font-montserrat tracking-wider small-caps">
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
            className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full rounded-[32px] md:rounded-[40px] overflow-hidden shadow-2xl border border-white/50"
          >
            <Image 
              src="https://i.postimg.cc/vDFvv5KK/baltas-dvaras-aromoterapija.jpg" 
              alt="Baltas Dvaras" 
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
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
            {/* Floating Glass Element */}
            <motion.div 
              animate={{ y: [0, -20, 0], rotate: [2, -2, 2] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-32 h-44 md:w-40 md:h-56 bg-white/50 backdrop-blur-2xl p-2 rounded-2xl md:rounded-3xl shadow-2xl border border-white/40 z-20 flex flex-col"
            >
              <div className="h-1/2 bg-blue-300/60 rounded-t-xl md:rounded-t-2xl" />
              <div className="h-1/2 bg-[#2D2D2D]/60 rounded-b-xl md:rounded-b-2xl" />
              <div className="p-3 md:p-4 text-center">
                <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest opacity-0 italic font-sans">Balansas</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="order-1 lg:order-2 text-center lg:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 tracking-tight">
              {'Apie mane'}
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8 md:mb-10 text-base md:text-lg font-light">
              {settings['about_desc'] || 'Aura-Soma sujungia spalvų, augalų ir kristalų energijas. Tai nėra spėjimas – tai jūsų pasąmonės atspindys per vizualų traukos dėsnį.'}
            </p>
            <div className="grid grid-cols-2 gap-3 md:gap-4 max-w-md mx-auto lg:mx-0">
              {['Augalai', 'Kristalai', 'Spalvos', 'Šviesa'].map((item) => (
                <div key={item} className="bg-white/40 backdrop-blur-md p-4 md:p-6 rounded-2xl border border-white/30">
                  <h4 className="font-bold text-[9px] md:text-[10px] uppercase tracking-widest text-brand mb-1">{item}</h4>
                  <p className="text-[8px] md:text-[9px] text-gray-400 uppercase tracking-tighter">Grynoji energija</p>
                </div>
              ))}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">{settings['journey_title'] || 'Transformacijos kelionė'}</h2>
            <p className="text-gray-400 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em]">{settings['journey_subtitle'] || 'Penkios pakopos į tavo tikrąjį Aš'}</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6"
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
                    '02': 'Tikslas',
                    '03': 'Ritmas',
                    '04': 'Metodika',
                    '05': 'Planas',
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
                  '02': 'Tikslas',
                  '03': 'Ritmas',
                  '04': 'Metodika',
                  '05': 'Planas',
                }[selectedStep.stepId]) || selectedStep.title}
              </h3>
              
              <p className="text-gray-500 leading-relaxed text-xs md:text-sm font-light mb-6">
                {selectedStep.longDesc}
              </p>
              
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Kainos */}
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
          className="max-w-md mx-auto flex flex-col gap-6"
        >
          {pricingPlans
            .filter(plan => plan.title !== 'Viena sesija')
            .sort((a, b) => a.order - b.order)
            .map((plan) => {
            // Robustness Fix: Override details for specific plans
            const displayPlan = plan.title === 'Pilna kelionė' ? {
              ...plan,
              title: 'Individuali sesija',
              description: 'Viena nuosekli patirtis Jūsų transformacijai',
              price: '45 €',
              bonusText: 'Penkių lygių sąmoningumo analizė.',
              savingsText: null, // Remove "Sutaupai 50 eur" badge
            } : plan;

            return (
              <motion.div key={displayPlan.id} variants={fadeIn} className={`p-8 md:p-10 rounded-[32px] md:rounded-[40px] flex flex-col justify-between transition-shadow relative overflow-hidden ${true ? 'bg-brand/5 backdrop-blur-xl border border-brand/20 shadow-xl shadow-brand/5 hover:shadow-brand/10' : 'border border-stone-200 bg-stone-50/50 backdrop-blur-xl shadow-sm hover:shadow-md'}`}>
                 {displayPlan.savingsText && (
                    <div className="absolute top-6 right-6 md:top-8 md:right-8 bg-brand/20 text-brand text-[8px] md:text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">{displayPlan.savingsText}</div>
                 )}
                <div>
                  <h3 className={`text-xl md:text-2xl font-bold italic mb-3 md:mb-4 text-brand`}>{displayPlan.title}</h3>
                  <p className={`text-[10px] md:text-xs mb-6 md:mb-8 text-[#4A6B4B]`}>{displayPlan.description}</p>
                  <div className={`text-xl md:text-2xl font-bold tracking-tighter mb-2 text-brand`}>{displayPlan.price}</div>
                  {displayPlan.bonusText && (
                    <p className="text-[#4A6B4B] text-[9px] md:text-[10px] font-bold uppercase mb-8 md:mb-10 tracking-widest">{displayPlan.bonusText}</p>
                  )}
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


      <footer className="py-20 flex flex-col items-center gap-8 border-t border-gray-100">
        <div className="flex gap-6">
          {[
            { 
              icon: Facebook, 
              label: 'Facebook', 
              href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}` 
            },
            { 
              icon: Mail, 
              label: 'Email', 
              onClick: () => setShowContactModal(true)
            },
            { 
              icon: Instagram, 
              label: 'Instagram', 
              href: 'https://instagram.com' 
            }
          ].map((social) => (
            social.href ? (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white shadow-sm border border-gray-100 text-gray-400 hover:text-brand hover:shadow-md hover:scale-110 transition-all duration-300 group"
                aria-label={`Share on ${social.label}`}
              >
                <social.icon className="w-5 h-5 group-hover:-rotate-6 transition-transform" />
              </a>
            ) : (
              <button
                key={social.label}
                onClick={social.onClick}
                className="p-3 rounded-full bg-white shadow-sm border border-gray-100 text-gray-400 hover:text-brand hover:shadow-md hover:scale-110 transition-all duration-300 group"
                aria-label={`Contact via ${social.label}`}
              >
                <social.icon className="w-5 h-5 group-hover:-rotate-6 transition-transform" />
              </button>
            )
          ))}
        </div>
        <div className="text-center">
          <p className="text-gray-400 text-[10px] tracking-widest uppercase mb-2">Baltas Dvaras</p>
          <p className="text-gray-300 text-[8px] tracking-[0.2em] font-sans">© {new Date().getFullYear()} Visos teisės saugomos.</p>
        </div>
      </footer>

      {/* Contact Modal */}
      <AnimatePresence>
        {showContactModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowContactModal(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm cursor-pointer"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-[32px] p-8 md:p-12 shadow-2xl overflow-hidden"
            >
              <button 
                onClick={() => setShowContactModal(false)}
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
                      suppressHydrationWarning
                    >
                      Siųsti dar kartą
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleForm} className="space-y-4" suppressHydrationWarning>
                    <input name="name" required placeholder="Vardas" className="w-full bg-gray-50 border border-gray-100 p-4 rounded-2xl outline-none focus:border-brand/40 transition-colors text-sm" suppressHydrationWarning />
                    <input name="email" required type="email" placeholder="El. paštas" className="w-full bg-gray-50 border border-gray-100 p-4 rounded-2xl outline-none focus:border-brand/40 transition-colors text-sm" suppressHydrationWarning />
                    <textarea name="message" rows={4} placeholder="Jūsų žinutė" className="w-full bg-gray-50 border border-gray-100 p-4 rounded-2xl outline-none focus:border-brand/40 transition-colors text-sm" suppressHydrationWarning />
                    
                    {formStatus === 'error' && (
                      <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest text-center mt-2">Klaida siunčiant. Bandykite dar kartą.</p>
                    )}

                    <button className="w-full py-4 md:py-5 bg-black text-white rounded-2xl font-bold text-[9px] md:text-[10px] uppercase tracking-[0.3em] hover:bg-gray-800 transition-all shadow-lg hover:scale-[1.02] active:scale-[0.98] hover:shadow-xl" suppressHydrationWarning>
                      {formStatus === 'sending' ? 'Siunčiama...' : 'Siųsti užklausą'}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
