'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Search, ArrowUpRight, Star, ChevronDown, Check, Shield, Wrench, Truck, Globe } from 'lucide-react';
import { content, Language } from '@/content';

export default function Home() {
  const [lang, setLang] = useState<Language>('uz');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const t = content[lang];

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#4F46E5] selection:text-white font-sans overflow-hidden">
      
      {/* HEADER */}
      <header className="container mx-auto px-6 lg:px-12 py-6 flex justify-between items-center relative z-50">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#4F46E5] to-[#818cf8] flex items-center justify-center p-[2px] shadow-[0_0_20px_rgba(79,70,229,0.35)] group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#050505] rounded-full flex items-center justify-center">
              <div className="w-3.5 h-3.5 bg-[#4F46E5] rounded-full"></div>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg tracking-wider leading-none">MICHELIN</span>
            <span className="text-[10px] text-gray-400 tracking-widest font-semibold uppercase">
              {lang === 'uz' ? 'O\'zbekiston' : 'Узбекистан'}
            </span>
          </div>
        </motion.div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#catalog" className="flex items-center gap-1 hover:text-white transition-colors duration-200">{t.nav.catalog}</a>
          <a href="#supercars" className="hover:text-white transition-colors duration-200">{t.nav.supercars}</a>
          <a href="#tech" className="hover:text-white transition-colors duration-200">{t.nav.technology}</a>
          <a href="#wheels" className="hover:text-white transition-colors duration-200">{t.nav.wheels}</a>
          <a href="#faq" className="hover:text-white transition-colors duration-200">{t.nav.faq}</a>
          <a href="#contact" className="hover:text-white transition-colors duration-200">{t.nav.contact}</a>
        </nav>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          {/* Language Switcher Button Group */}
          <div className="flex items-center p-1 rounded-full bg-[#121212] border border-white/10 text-xs font-bold shadow-inner">
            <button 
              onClick={() => setLang('uz')}
              className={`px-3 py-1 rounded-full transition-all duration-300 cursor-pointer active:scale-95 ${
                lang === 'uz' 
                  ? 'bg-[#4F46E5] text-white shadow-[0_0_14px_rgba(79,70,229,0.55)]' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              UZ
            </button>
            <button 
              onClick={() => setLang('ru')}
              className={`px-3 py-1 rounded-full transition-all duration-300 cursor-pointer active:scale-95 ${
                lang === 'ru' 
                  ? 'bg-[#4F46E5] text-white shadow-[0_0_14px_rgba(79,70,229,0.55)]' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              RU
            </button>
          </div>

          <a 
            href="#contact" 
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-semibold bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/20 active:scale-[0.98] transition-all duration-200"
          >
            {t.nav.bookFitting}
          </a>
        </motion.div>
      </header>

      {/* 1. HERO SECTION */}
      <section className="relative container mx-auto px-6 lg:px-12 pt-12 lg:pt-20 pb-24 flex flex-col lg:flex-row items-center min-h-[85vh]">
        {/* Ambient atmospheric glow */}
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#4F46E5]/12 rounded-full blur-[140px] pointer-events-none -z-10"></div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:w-1/2 z-10 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-300 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
            {t.hero.badge}
          </div>
          <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black tracking-tight leading-[1.05]">
            {t.hero.titleLine1} <br/>
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent">
              {t.hero.titleHighlight}
            </span>
          </h1>
          <h2 className="text-xl sm:text-2xl text-gray-300 font-semibold tracking-tight">
            {t.hero.subtitle}
          </h2>
          <p className="text-gray-400 max-w-[55ch] text-sm sm:text-base leading-relaxed">
            {t.hero.description}
          </p>
          <div className="pt-2 flex flex-wrap gap-4 items-center">
            <a 
              href="#catalog" 
              className="bg-[#4F46E5] hover:bg-[#4338ca] active:scale-[0.98] text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-[0_0_30px_rgba(79,70,229,0.35)] flex items-center gap-2"
            >
              {t.hero.catalogBtn} <ArrowUpRight size={18} />
            </a>
            <a 
              href="#tech" 
              className="px-6 py-4 rounded-xl font-semibold text-gray-300 hover:text-white border border-white/10 hover:border-white/20 active:scale-[0.98] transition-all"
            >
              {t.hero.exploreTechBtn}
            </a>
          </div>
        </motion.div>

        {/* Hero Vehicle Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:w-1/2 relative mt-12 lg:mt-0 w-full h-[420px] sm:h-[520px] flex items-center justify-center"
        >
          <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
            <Image 
              src="/images/hero_jeep.jpg" 
              alt="Premium 4x4 Vehicle with Offroad Wheels" 
              fill 
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
            {/* Vignette gradients to blend cleanly into black */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent opacity-75 lg:opacity-50"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-65"></div>
          </div>
        </motion.div>
      </section>

      {/* 2. CATEGORY SECTION */}
      <section id="catalog" className="container mx-auto px-6 lg:px-12 py-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-white/10 pb-8 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">{t.categories.title}</h2>
            <p className="text-gray-400 text-sm mt-1">{t.categories.subtitle}</p>
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder={t.categories.searchPlaceholder}
              className="w-full bg-[#121212] border border-gray-800 rounded-full py-3.5 pl-12 pr-12 text-sm focus:outline-none focus:border-[#4F46E5] text-white placeholder-gray-500 transition-colors" 
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#4F46E5] hover:bg-[#4338ca] active:scale-95 transition-all flex items-center justify-center text-white cursor-pointer">
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Category 1: Tire */}
          <motion.div 
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="relative h-[420px] rounded-3xl overflow-hidden group border border-[#262626] hover:border-[#4F46E5] transition-colors duration-500 cursor-pointer shadow-2xl"
          >
            <Image 
              src="/images/cat_tire.jpg" 
              alt="Tire Category" 
              fill 
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30 group-hover:via-black/50 transition-all duration-500"></div>
            <div className="absolute inset-0 bg-[#4F46E5]/0 group-hover:bg-[#4F46E5]/10 transition-colors duration-500"></div>

            <div className="relative z-10 p-8 flex flex-col justify-between h-full">
              <div className="flex justify-between items-start">
                <span className="px-3.5 py-1.5 rounded-full glass-panel text-[11px] font-bold tracking-widest text-[#818cf8] uppercase border border-white/10 backdrop-blur-md">
                  {t.categories.tire.badge}
                </span>
                <div className="w-11 h-11 rounded-full glass-panel border border-white/20 flex items-center justify-center text-white group-hover:bg-[#4F46E5] group-hover:border-[#4F46E5] group-hover:scale-110 transition-all duration-300">
                  <ArrowUpRight size={20} />
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-black mb-2 text-white tracking-tight group-hover:text-white transition-colors">{t.categories.tire.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed drop-shadow-md">
                  {t.categories.tire.desc}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Category 2: Wheel */}
          <motion.div 
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="relative h-[420px] rounded-3xl overflow-hidden group border border-[#262626] hover:border-[#4F46E5] transition-colors duration-500 cursor-pointer shadow-2xl"
          >
            <Image 
              src="/images/rim_dark.jpg" 
              alt="Wheel Category" 
              fill 
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30 group-hover:via-black/50 transition-all duration-500"></div>
            <div className="absolute inset-0 bg-[#4F46E5]/0 group-hover:bg-[#4F46E5]/10 transition-colors duration-500"></div>

            <div className="relative z-10 p-8 flex flex-col justify-between h-full">
              <div className="flex justify-between items-start">
                <span className="px-3.5 py-1.5 rounded-full glass-panel text-[11px] font-bold tracking-widest text-[#818cf8] uppercase border border-white/10 backdrop-blur-md">
                  {t.categories.wheel.badge}
                </span>
                <div className="w-11 h-11 rounded-full glass-panel border border-white/20 flex items-center justify-center text-white group-hover:bg-[#4F46E5] group-hover:border-[#4F46E5] group-hover:scale-110 transition-all duration-300">
                  <ArrowUpRight size={20} />
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-black mb-2 text-white tracking-tight group-hover:text-white transition-colors">{t.categories.wheel.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed drop-shadow-md">
                  {t.categories.wheel.desc}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Category 3: Accessories */}
          <motion.div 
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="relative h-[420px] rounded-3xl overflow-hidden group border border-[#262626] hover:border-[#4F46E5] transition-colors duration-500 cursor-pointer shadow-2xl"
          >
            <Image 
              src="/images/cat_accessories.jpg" 
              alt="Accessories Category" 
              fill 
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30 group-hover:via-black/50 transition-all duration-500"></div>
            <div className="absolute inset-0 bg-[#4F46E5]/0 group-hover:bg-[#4F46E5]/10 transition-colors duration-500"></div>

            <div className="relative z-10 p-8 flex flex-col justify-between h-full">
              <div className="flex justify-between items-start">
                <span className="px-3.5 py-1.5 rounded-full glass-panel text-[11px] font-bold tracking-widest text-[#818cf8] uppercase border border-white/10 backdrop-blur-md">
                  {t.categories.accessories.badge}
                </span>
                <div className="w-11 h-11 rounded-full glass-panel border border-white/20 flex items-center justify-center text-white group-hover:bg-[#4F46E5] group-hover:border-[#4F46E5] group-hover:scale-110 transition-all duration-300">
                  <ArrowUpRight size={20} />
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-black mb-2 text-white tracking-tight group-hover:text-white transition-colors">{t.categories.accessories.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed drop-shadow-md">
                  {t.categories.accessories.desc}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SUPERCAR BENTO GALLERY */}
      <section id="supercars" className="container mx-auto px-6 lg:px-12 py-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">{t.supercars.title}</h2>
            <p className="text-gray-400 text-sm mt-2 max-w-xl">
              {t.supercars.subtitle}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-4 py-2 rounded-full glass-panel text-xs font-semibold text-gray-300 border border-white/10 shadow-sm">
              {t.supercars.badge}
            </span>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[280px] md:auto-rows-[290px]">
          
          {/* Card 1: Ferrari SF90 - Big Hero (col-span-8, row-span-2) */}
          <motion.div 
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="md:col-span-8 md:row-span-2 relative rounded-3xl overflow-hidden group border border-[#262626] hover:border-[#4F46E5] transition-colors duration-500 cursor-pointer shadow-2xl"
          >
            <Image 
              src="/images/supercars/ferrari_sf90.jpg" 
              alt="Ferrari SF90 Stradale" 
              fill 
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            <div className="relative z-10 p-8 flex flex-col justify-between h-full">
              <div className="flex justify-between items-start">
                <span className="px-3.5 py-1.5 rounded-full bg-red-600/90 text-white text-[11px] font-bold tracking-wider uppercase backdrop-blur-md shadow-md">
                  {t.supercars.ferrari.badge}
                </span>
                <span className="text-xs font-mono font-bold text-gray-300 glass-panel px-3.5 py-1.5 rounded-full border border-white/10">
                  {t.supercars.ferrari.stat}
                </span>
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-2">{t.supercars.ferrari.tireName}</h3>
                <p className="text-gray-300 text-sm max-w-lg leading-relaxed">
                  {t.supercars.ferrari.desc}
                </p>
                <div className="mt-4 flex flex-wrap gap-3 text-xs font-semibold text-gray-300">
                  <span className="px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/5">{t.supercars.ferrari.front}</span>
                  <span className="px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/5">{t.supercars.ferrari.rear}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Porsche 911 GT3 RS - Tall Card (col-span-4, row-span-2) */}
          <motion.div 
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="md:col-span-4 md:row-span-2 relative rounded-3xl overflow-hidden group border border-[#262626] hover:border-[#4F46E5] transition-colors duration-500 cursor-pointer shadow-2xl"
          >
            <Image 
              src="/images/supercars/porsche_gt3.jpg" 
              alt="Porsche 911 GT3" 
              fill 
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            <div className="relative z-10 p-8 flex flex-col justify-between h-full">
              <div className="flex justify-between items-start">
                <span className="px-3.5 py-1.5 rounded-full bg-yellow-500 text-black text-[11px] font-extrabold tracking-wider uppercase backdrop-blur-md shadow-md">
                  {t.supercars.porsche.badge}
                </span>
                <div className="w-10 h-10 rounded-full glass-panel border border-white/20 flex items-center justify-center text-white group-hover:bg-[#4F46E5] group-hover:border-[#4F46E5] group-hover:scale-110 transition-all">
                  <ArrowUpRight size={18} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-black text-white mb-2">{t.supercars.porsche.title}</h3>
                <p className="text-gray-300 text-xs leading-relaxed">
                  {t.supercars.porsche.desc}
                </p>
                <div className="mt-4 text-[11px] text-gray-400 font-mono">
                  {t.supercars.porsche.spec}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Lamborghini Aventador (col-span-4, row-span-1) */}
          <motion.div 
            whileHover={{ y: -3 }}
            transition={{ duration: 0.3 }}
            className="md:col-span-4 relative rounded-3xl overflow-hidden group border border-[#262626] hover:border-[#4F46E5] transition-colors duration-500 cursor-pointer shadow-2xl"
          >
            <Image 
              src="/images/supercars/lambo_aventador.jpg" 
              alt="Lamborghini Aventador" 
              fill 
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20"></div>
            <div className="relative z-10 p-6 flex flex-col justify-between h-full">
              <div className="flex justify-between items-start">
                <span className="px-3 py-1 rounded-full glass-panel text-[10px] font-bold tracking-widest text-amber-400 uppercase border border-amber-400/30">
                  {t.supercars.lambo.badge}
                </span>
              </div>
              <div>
                <h4 className="text-xl font-extrabold text-white">{t.supercars.lambo.title}</h4>
                <p className="text-gray-300 text-xs mt-1">{t.supercars.lambo.desc}</p>
              </div>
            </div>
          </motion.div>

          {/* Card 4: McLaren 720S (col-span-4, row-span-1) */}
          <motion.div 
            whileHover={{ y: -3 }}
            transition={{ duration: 0.3 }}
            className="md:col-span-4 relative rounded-3xl overflow-hidden group border border-[#262626] hover:border-[#4F46E5] transition-colors duration-500 cursor-pointer shadow-2xl"
          >
            <Image 
              src="/images/supercars/mclaren_720s.jpg" 
              alt="McLaren 720S" 
              fill 
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20"></div>
            <div className="relative z-10 p-6 flex flex-col justify-between h-full">
              <div className="flex justify-between items-start">
                <span className="px-3 py-1 rounded-full glass-panel text-[10px] font-bold tracking-widest text-[#818cf8] uppercase border border-white/10">
                  {t.supercars.mclaren.badge}
                </span>
              </div>
              <div>
                <h4 className="text-xl font-extrabold text-white">{t.supercars.mclaren.title}</h4>
                <p className="text-gray-300 text-xs mt-1">{t.supercars.mclaren.desc}</p>
              </div>
            </div>
          </motion.div>

          {/* Card 5: Mercedes-AMG GT (col-span-4, row-span-1) */}
          <motion.div 
            whileHover={{ y: -3 }}
            transition={{ duration: 0.3 }}
            className="md:col-span-4 relative rounded-3xl overflow-hidden group border border-[#262626] hover:border-[#4F46E5] transition-colors duration-500 cursor-pointer shadow-2xl"
          >
            <Image 
              src="/images/supercars/amg_gt.jpg" 
              alt="Mercedes-AMG GT" 
              fill 
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20"></div>
            <div className="relative z-10 p-6 flex flex-col justify-between h-full">
              <div className="flex justify-between items-start">
                <span className="px-3 py-1 rounded-full glass-panel text-[10px] font-bold tracking-widest text-emerald-400 uppercase border border-emerald-400/30">
                  {t.supercars.amg.badge}
                </span>
              </div>
              <div>
                <h4 className="text-xl font-extrabold text-white">{t.supercars.amg.title}</h4>
                <p className="text-gray-300 text-xs mt-1">{t.supercars.amg.desc}</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 3. STATS & PARTNERS */}
      <section className="container mx-auto px-6 lg:px-12 py-24 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold max-w-4xl mx-auto leading-tight mb-4">
          {t.stats.headline}
        </h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mb-16">
          {t.stats.subtitle}
        </p>

        <div className="mb-20">
          <h3 className="text-[100px] sm:text-[140px] md:text-[180px] font-black leading-none bg-gradient-to-b from-white via-gray-200 to-gray-600 bg-clip-text text-transparent tracking-tighter">
            {t.stats.number.replace('+', '')}<span className="text-[#4F46E5]">+</span>
          </h3>
          <p className="text-gray-300 font-semibold text-base sm:text-lg tracking-wide uppercase mt-2">
            {t.stats.numberLabel}
          </p>
        </div>

        {/* Integration Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="border border-[#262626] rounded-3xl p-8 bg-[#0a0a0a] flex flex-col justify-between">
            <p className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-6 text-center">{t.stats.dataIntegrations}</p>
            <div className="flex justify-around items-center gap-6">
              <div className="relative h-10 w-28 opacity-85 hover:opacity-100 transition-opacity">
                <Image src="/images/logo_sdc.svg" alt="SDC SEMA Data Co-op" fill className="object-contain" />
              </div>
              <div className="relative h-10 w-32 opacity-85 hover:opacity-100 transition-opacity">
                <Image src="/images/logo_autosync.svg" alt="AutoSync" fill className="object-contain" />
              </div>
              <div className="relative h-10 w-24 opacity-85 hover:opacity-100 transition-opacity">
                <Image src="/images/logo_asap.svg" alt="ASAP" fill className="object-contain" />
              </div>
            </div>
          </div>
          <div className="border border-[#262626] rounded-3xl p-8 bg-[#0a0a0a] flex flex-col justify-between">
            <p className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-6 text-center">{t.stats.warehouseDist}</p>
            <div className="flex justify-around items-center gap-6">
              <div className="relative h-10 w-32 opacity-85 hover:opacity-100 transition-opacity">
                <Image src="/images/logo_turn14.svg" alt="Turn14 Distribution" fill className="object-contain" />
              </div>
              <div className="relative h-10 w-32 opacity-85 hover:opacity-100 transition-opacity">
                <Image src="/images/logo_keystone.svg" alt="Keystone Automotive Operations" fill className="object-contain" />
              </div>
              <div className="relative h-10 w-28 opacity-85 hover:opacity-100 transition-opacity">
                <Image src="/images/logo_meyer.svg" alt="Meyer" fill className="object-contain" />
              </div>
            </div>
          </div>
        </div>

        {/* Retailer Network Banner */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14 text-gray-500 font-black tracking-wider text-xs md:text-sm uppercase opacity-40 mb-16 select-none">
          <span className="hover:text-gray-300 transition-colors">CARiD</span>
          <span className="hover:text-gray-300 transition-colors">CanadaWheels.ca</span>
          <span className="hover:text-gray-300 transition-colors">AudioCityUSA</span>
          <span className="hover:text-gray-300 transition-colors">BuyBrakes</span>
          <span className="hover:text-gray-300 transition-colors">Octane Lighting</span>
          <span className="hover:text-gray-300 transition-colors">Borges Stanley</span>
        </div>
      </section>

      {/* BRAND LOGOS ROW */}
      <section className="container mx-auto px-6 lg:px-12 pb-24">
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
          {[
            { name: "MERCEDES", image: "/images/logo_mercedes.jpg", isSvg: false, active: false },
            { name: "ROLLS ROYCE", image: "/images/logo_rolls_royce.jpg", isSvg: false, active: false },
            { name: "BMW", image: "/images/logo_bmw.jpg", isSvg: false, active: false },
            { name: "LAMBORGHINI", image: "/images/logo_lamborghini.svg", isSvg: true, active: true },
            { name: "FERRARI", image: "/images/logo_ferrari.svg", isSvg: true, active: false },
            { name: "BENTLEY", image: "/images/logo_bentley.svg", isSvg: true, active: false },
            { name: "PORSCHE", image: "/images/logo_porsche.svg", isSvg: true, active: false }
          ].map((brand, i) => (
            <motion.div 
              key={i} 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className={`w-24 h-28 sm:w-32 sm:h-36 rounded-2xl flex flex-col items-center justify-center p-3 text-center transition-all duration-300 cursor-pointer ${
                brand.active 
                  ? 'bg-[#151515] border-2 border-[#4F46E5] scale-105 shadow-[0_0_35px_rgba(79,70,229,0.35)]' 
                  : 'bg-[#101010] border border-[#222222] hover:border-gray-700 hover:bg-[#161616]'
              }`}
            >
              <div className="relative w-12 h-12 sm:w-16 sm:h-16 mb-2 flex items-center justify-center">
                <Image 
                  src={brand.image} 
                  alt={brand.name} 
                  fill 
                  sizes="64px"
                  className={`object-contain ${brand.isSvg ? 'p-1' : 'rounded-full'}`} 
                />
              </div>
              <span className={`text-[10px] font-bold tracking-wider ${brand.active ? 'text-white' : 'text-gray-400'}`}>
                {brand.name}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. EXCEPTIONAL GRIP (3D TIRE SECTION) */}
      <section id="tech" className="container mx-auto px-6 lg:px-12 py-24 relative">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            {t.tech.title}
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 min-h-[580px]">
          {/* Left Cards */}
          <div className="flex flex-col gap-12 w-full lg:w-[340px] z-10">
            <motion.div 
              whileHover={{ x: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-[#121212] border border-[#262626] rounded-2xl p-6 relative hover:border-[#4F46E5]/60 transition-colors shadow-lg"
            >
              <div className="flex items-center gap-3 mb-3">
                <Shield className="text-[#10b981]" size={20} />
                <h3 className="font-bold text-lg">{t.tech.safety.title}</h3>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, idx) => (
                    <div key={idx} className="w-5 h-1.5 bg-[#10b981] rounded-full"></div>
                  ))}
                </div>
                <span className="text-xs font-bold text-gray-300">5 / 5</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                {t.tech.safety.desc}
              </p>
              <div className="hidden lg:block absolute top-1/2 -right-12 w-12 border-t border-dashed border-[#4F46E5]/40"></div>
            </motion.div>

            <motion.div 
              whileHover={{ x: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-[#121212] border border-[#262626] rounded-2xl p-6 relative hover:border-[#4F46E5]/60 transition-colors shadow-lg"
            >
              <div className="flex items-center gap-3 mb-3">
                <Wrench className="text-[#10b981]" size={20} />
                <h3 className="font-bold text-lg">{t.tech.versatility.title}</h3>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, idx) => (
                    <div key={idx} className="w-5 h-1.5 bg-[#10b981] rounded-full"></div>
                  ))}
                </div>
                <span className="text-xs font-bold text-gray-300">5 / 5</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                {t.tech.versatility.desc}
              </p>
              <div className="hidden lg:block absolute top-1/2 -right-12 w-12 border-t border-dashed border-[#4F46E5]/40"></div>
            </motion.div>
          </div>

          {/* Center 3D Tire Blueprint Render */}
          <div className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] z-0 flex items-center justify-center my-6 lg:my-0">
            <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(79,70,229,0.3)] bg-black">
              <Image 
                src="/images/tech_tire.jpg" 
                alt="3D Holographic Tire Blueprint" 
                fill 
                sizes="(max-width: 768px) 320px, 420px"
                className="object-contain"
              />
            </div>
            {/* Concentric radar rings */}
            <div className="absolute inset-0 rounded-full border border-[#4F46E5]/30 animate-ping opacity-25 pointer-events-none"></div>
            <div className="absolute -inset-4 rounded-full border border-dashed border-[#4F46E5]/20 pointer-events-none"></div>
          </div>

          {/* Right Cards */}
          <div className="flex flex-col gap-12 w-full lg:w-[340px] z-10">
            <motion.div 
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              className="bg-[#121212] border border-[#262626] rounded-2xl p-6 relative hover:border-[#4F46E5]/60 transition-colors shadow-lg"
            >
              <div className="flex items-center gap-3 mb-3">
                <Check className="text-[#10b981]" size={20} />
                <h3 className="font-bold text-lg">{t.tech.durability.title}</h3>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, idx) => (
                    <div key={idx} className="w-5 h-1.5 bg-[#10b981] rounded-full"></div>
                  ))}
                </div>
                <span className="text-xs font-bold text-gray-300">5 / 5</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                {t.tech.durability.desc}
              </p>
              <div className="hidden lg:block absolute top-1/2 -left-12 w-12 border-t border-dashed border-[#4F46E5]/40"></div>
            </motion.div>

            <motion.div 
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              className="bg-[#121212] border border-[#262626] rounded-2xl p-6 relative hover:border-[#4F46E5]/60 transition-colors shadow-lg"
            >
              <div className="flex items-center gap-3 mb-3">
                <Truck className="text-[#10b981]" size={20} />
                <h3 className="font-bold text-lg">{t.tech.testing.title}</h3>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, idx) => (
                    <div key={idx} className="w-5 h-1.5 bg-[#10b981] rounded-full"></div>
                  ))}
                </div>
                <span className="text-xs font-bold text-gray-300">5 / 5</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                {t.tech.testing.desc}
              </p>
              <div className="hidden lg:block absolute top-1/2 -left-12 w-12 border-t border-dashed border-[#4F46E5]/40"></div>
            </motion.div>
          </div>
        </div>
        
        <div className="text-center mt-16 relative z-20">
          <a 
            href="#catalog" 
            className="inline-flex items-center gap-2 bg-[#4F46E5] hover:bg-[#4338ca] active:scale-[0.98] text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-[0_0_35px_rgba(79,70,229,0.45)]"
          >
            {t.tech.btn} <ArrowUpRight size={18} />
          </a>
        </div>
      </section>

      {/* 5. WHEELS SHOWCASE */}
      <section id="wheels" className="container mx-auto px-6 lg:px-12 py-24 bg-[#080808] rounded-[3rem] my-12 border border-white/5">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            {t.wheels.title}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Wheel 1 */}
          <motion.div 
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="bg-[#121212] border border-[#262626] rounded-3xl p-8 hover:border-[#4F46E5] transition-colors duration-300 cursor-pointer flex flex-col items-center group shadow-xl"
          >
            <div className="w-full mb-6">
              <h3 className="font-bold text-lg mb-1 group-hover:text-[#818cf8] transition-colors">2018 Jeep Wrangler Rim W9198PB</h3>
              <p className="text-xs text-gray-400 mb-2">{t.wheels.sizes} • Polished Chrome</p>
              <div className="flex items-center gap-1.5 text-xs text-gray-300">
                <span className="text-yellow-400 font-bold">5.0</span>
                <div className="flex text-yellow-400"><Star size={13} className="fill-yellow-400" /><Star size={13} className="fill-yellow-400" /><Star size={13} className="fill-yellow-400" /><Star size={13} className="fill-yellow-400" /><Star size={13} className="fill-yellow-400" /></div>
                <span className="text-gray-500">(1,433)</span>
              </div>
            </div>
            
            <div className="relative w-56 h-56 mb-8 rounded-full overflow-hidden bg-black flex items-center justify-center p-2 shadow-[0_15px_35px_rgba(0,0,0,0.8)] border border-white/5">
              <Image 
                src="/images/rim_chrome.jpg" 
                alt="Chrome Luxury Wheel Rim" 
                fill 
                sizes="224px"
                className="object-contain p-2 group-hover:scale-105 transition-transform duration-500 ease-out" 
              />
            </div>
            <p className="text-3xl font-black text-white mt-auto">$374.99</p>
          </motion.div>

          {/* Wheel 2 */}
          <motion.div 
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="bg-[#121212] border border-[#262626] rounded-3xl p-8 hover:border-[#4F46E5] transition-colors duration-300 cursor-pointer flex flex-col items-center group shadow-xl"
          >
            <div className="w-full mb-6">
              <h3 className="font-bold text-lg mb-1 group-hover:text-[#818cf8] transition-colors">2019 Jeep Wrangler Rim W9222PC</h3>
              <p className="text-xs text-gray-400 mb-2">{t.wheels.sizes} • Machined Silver</p>
              <div className="flex items-center gap-1.5 text-xs text-gray-300">
                <span className="text-yellow-400 font-bold">5.0</span>
                <div className="flex text-yellow-400"><Star size={13} className="fill-yellow-400" /><Star size={13} className="fill-yellow-400" /><Star size={13} className="fill-yellow-400" /><Star size={13} className="fill-yellow-400" /><Star size={13} className="fill-yellow-400" /></div>
                <span className="text-gray-500">(1,433)</span>
              </div>
            </div>
            
            <div className="relative w-56 h-56 mb-8 rounded-full overflow-hidden bg-black flex items-center justify-center p-2 shadow-[0_15px_35px_rgba(0,0,0,0.8)] border border-white/5">
              <Image 
                src="/images/rim_silver.jpg" 
                alt="Machined Silver Wheel Rim" 
                fill 
                sizes="224px"
                className="object-contain p-2 group-hover:scale-105 transition-transform duration-500 ease-out" 
              />
            </div>
            <p className="text-3xl font-black text-white mt-auto">$339.99</p>
          </motion.div>

          {/* Wheel 3 */}
          <motion.div 
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="bg-[#121212] border border-[#262626] rounded-3xl p-8 hover:border-[#4F46E5] transition-colors duration-300 cursor-pointer flex flex-col items-center group shadow-xl"
          >
            <div className="w-full mb-6">
              <h3 className="font-bold text-lg mb-1 group-hover:text-[#818cf8] transition-colors">2022 Jeep Grand Cherokee Rim</h3>
              <p className="text-xs text-gray-400 mb-2">{t.wheels.sizes} • Gunmetal Trail</p>
              <div className="flex items-center gap-1.5 text-xs text-gray-300">
                <span className="text-yellow-400 font-bold">5.0</span>
                <div className="flex text-yellow-400"><Star size={13} className="fill-yellow-400" /><Star size={13} className="fill-yellow-400" /><Star size={13} className="fill-yellow-400" /><Star size={13} className="fill-yellow-400" /><Star size={13} className="fill-yellow-400" /></div>
                <span className="text-gray-500">(1,433)</span>
              </div>
            </div>
            
            <div className="relative w-56 h-56 mb-8 rounded-full overflow-hidden bg-black flex items-center justify-center p-2 shadow-[0_15px_35px_rgba(0,0,0,0.8)] border border-white/5">
              <Image 
                src="/images/rim_dark.jpg" 
                alt="Gunmetal Trail Wheel Rim" 
                fill 
                sizes="224px"
                className="object-contain p-2 group-hover:scale-105 transition-transform duration-500 ease-out" 
              />
            </div>
            <p className="text-3xl font-black text-white mt-auto">$369.99</p>
          </motion.div>
        </div>
        
        <div className="text-center">
          <a 
            href="#catalog"
            className="inline-flex items-center justify-center bg-[#4F46E5] hover:bg-[#4338ca] active:scale-[0.98] text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-[0_0_30px_rgba(79,70,229,0.3)]"
          >
            {t.wheels.btn}
          </a>
        </div>
      </section>

      {/* 6. TESTIMONIALS SECTION */}
      <section className="container mx-auto px-6 lg:px-12 py-24 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium leading-relaxed max-w-4xl mx-auto mb-16 text-gray-100">
          {t.testimonials.quote}
        </h2>
        
        <div className="flex justify-center items-center gap-3 sm:gap-6">
          <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-gray-700 to-gray-800 border border-gray-700 flex items-center justify-center text-xs font-bold text-gray-400">
            AM
          </div>
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-gray-600 to-gray-700 border border-gray-600 flex items-center justify-center text-xs font-bold text-gray-300">
            SK
          </div>
          <div className="w-14 h-14 sm:w-18 sm:h-18 rounded-full bg-gradient-to-tr from-gray-500 to-gray-600 border border-gray-500 flex items-center justify-center text-sm font-bold text-gray-200">
            DJ
          </div>
          
          {/* Active Center Testimonial Avatar */}
          <motion.div 
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.2 }}
            className="w-20 h-20 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-[#4F46E5] shadow-[0_0_35px_rgba(79,70,229,0.5)] scale-110 relative bg-black cursor-pointer"
          >
            <Image 
              src="/images/avatar_center.jpg" 
              alt={t.testimonials.author} 
              fill 
              sizes="112px"
              className="object-cover" 
            />
          </motion.div>
          
          <div className="w-14 h-14 sm:w-18 sm:h-18 rounded-full bg-gradient-to-tr from-gray-500 to-gray-600 border border-gray-500 flex items-center justify-center text-sm font-bold text-gray-200">
            RU
          </div>
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-gray-600 to-gray-700 border border-gray-600 flex items-center justify-center text-xs font-bold text-gray-300">
            TM
          </div>
          <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-gray-700 to-gray-800 border border-gray-700 flex items-center justify-center text-xs font-bold text-gray-400">
            FB
          </div>
        </div>
        <p className="mt-6 text-sm font-bold text-white">{t.testimonials.author}</p>
        <p className="text-xs text-gray-400">{t.testimonials.role}</p>
      </section>

      {/* 7. FAQ SECTION */}
      <section id="faq" className="container mx-auto px-6 lg:px-12 py-24 max-w-5xl flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <h2 className="text-3xl md:text-5xl font-black leading-tight mb-6">
            {t.faq.title}
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            {t.faq.subtitle}
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 text-xs font-bold text-[#818cf8] hover:text-white uppercase tracking-wider transition-colors">
            {t.faq.contactLink}
          </a>
        </div>
        
        <div className="md:w-2/3 divide-y divide-white/10">
          {t.faq.items.map((faq, i) => (
            <div key={i} className="py-6 first:pt-0">
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex justify-between items-center text-left hover:text-[#818cf8] transition-colors gap-4 cursor-pointer"
              >
                <span className="font-semibold text-base sm:text-lg">{faq.q}</span>
                <ChevronDown 
                  className={`shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-[#4F46E5]' : 'text-gray-500'}`} 
                  size={20} 
                />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-48 pt-4' : 'max-h-0'}`}>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. CTA SECTION */}
      <section id="contact" className="container mx-auto px-6 lg:px-12 py-16 mb-16">
        <div className="relative rounded-[3rem] overflow-hidden bg-[#0a0a0a] border border-white/10 min-h-[460px] flex items-center justify-center text-center px-6 py-16">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/cta_bg.jpg" 
              alt="Stacked Alloy Wheels Studio" 
              fill 
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="object-cover opacity-35" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-[#050505]"></div>
          </div>
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
              {t.cta.title}<br />
              <span className="text-[#818cf8]">{t.cta.highlight}</span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {t.cta.desc}
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <a 
                href="https://t.me" 
                target="_blank"
                rel="noreferrer"
                className="bg-[#4F46E5] hover:bg-[#4338ca] active:scale-[0.98] text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-[0_0_35px_rgba(79,70,229,0.5)] flex items-center gap-2"
              >
                {t.cta.actionBtn} <ArrowUpRight size={18} />
              </a>
              <a 
                href="#catalog"
                className="bg-white/10 hover:bg-white/20 active:scale-[0.98] border border-white/10 text-white px-8 py-4 rounded-xl font-semibold transition-all"
              >
                {t.cta.catalogBtn}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="border-t border-white/10 bg-[#070707] py-12">
        <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-3">
            <span className="font-bold text-white tracking-wider">MICHELIN UZBEKISTAN</span>
            <span>•</span>
            <span>{t.footer.center}</span>
          </div>
          <div className="flex gap-8 text-xs font-medium">
            <a href="#catalog" className="hover:text-white transition-colors">{t.nav.catalog}</a>
            <a href="#supercars" className="hover:text-white transition-colors">{t.nav.supercars}</a>
            <a href="#tech" className="hover:text-white transition-colors">{t.nav.technology}</a>
            <a href="#wheels" className="hover:text-white transition-colors">{t.nav.wheels}</a>
            <a href="#faq" className="hover:text-white transition-colors">{t.nav.faq}</a>
            <a href="#contact" className="hover:text-white transition-colors">{t.nav.contact}</a>
          </div>
          <p className="text-xs">© 2026 Michelin UZ. {t.footer.rights}</p>
        </div>
      </footer>

    </div>
  );
}
