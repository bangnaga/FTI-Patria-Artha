import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Award, 
  Users, 
  GraduationCap, 
  FlaskConical, 
  Briefcase, 
  Play, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  X,
  Code2,
  ShieldCheck,
  Brain,
  Cpu,
  ChevronLeft,
  ChevronRight,
  Pause,
  Rocket,
  Globe,
  Zap,
  Terminal,
  Database
} from 'lucide-react';
import { api } from '../services/api';

interface HeroProps {
  onNavigateToPmb?: () => void;
  onNavigateToCurriculum?: () => void;
  onOpenAIAssistant: () => void;
}

interface SlideData {
  id: number;
  badgeText: string;
  badgeIcon: React.ElementType;
  badgeStyle: string;
  titlePrefix: string;
  titleHighlight: string;
  titleSuffix: string;
  description: string;
  primaryCtaText: string;
  primaryCtaAction: 'pmb' | 'curriculum' | 'ai';
  secondaryCtaText: string;
  bgGradient: string;
  imageUrl: string;
  floatingBadges: {
    icon: React.ElementType;
    label: string;
    subtext: string;
    color: string;
    position: string;
    delay: number;
  }[];
}

const HERO_SLIDES: SlideData[] = [
  {
    id: 1,
    badgeText: 'Fakultas Teknik & Informatika Patria Artha',
    badgeIcon: Award,
    badgeStyle: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-300',
    titlePrefix: 'Mencetak Talenta Digital',
    titleHighlight: 'Berdaya Saing Global',
    titleSuffix: '& Inovatif',
    description: 'Pendidikan vokasi & sarjana berbasis Outcome-Based Education (OBE) yang mengintegrasikan Artificial Intelligence, Cloud Software, Cyber Security, dan Internet of Things.',
    primaryCtaText: 'Daftar PMB Patria Artha',
    primaryCtaAction: 'pmb',
    secondaryCtaText: 'Jelajahi Kurikulum & SKS',
    bgGradient: 'from-[#800020]/90 via-[#9B2C2C]/80 to-slate-900',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    floatingBadges: [
      {
        icon: Brain,
        label: 'AI & Big Data Lab',
        subtext: 'Powered by GPU A100',
        color: 'border-red-500/30 bg-white/90 dark:bg-slate-900/90 text-red-600',
        position: 'top-8 -left-4 sm:left-4',
        delay: 0.2
      },
      {
        icon: ShieldCheck,
        label: 'Akreditasi UNGGUL',
        subtext: 'LAM INFOKOM & IABEE',
        color: 'border-emerald-500/30 bg-white/90 dark:bg-slate-900/90 text-emerald-600',
        position: 'bottom-12 -left-2 sm:left-8',
        delay: 0.4
      },
      {
        icon: Cpu,
        label: 'IoT & Smart System',
        subtext: 'Robotics & Hardware',
        color: 'border-amber-500/30 bg-white/90 dark:bg-slate-900/90 text-amber-600',
        position: 'top-12 -right-4 sm:right-4',
        delay: 0.3
      },
      {
        icon: Users,
        label: '98.4% Serapan Kerja',
        subtext: 'Alumni di Industri Tech',
        color: 'border-blue-500/30 bg-white/90 dark:bg-slate-900/90 text-blue-600',
        position: 'bottom-8 -right-2 sm:right-8',
        delay: 0.5
      }
    ]
  },
  {
    id: 2,
    badgeText: 'Pusat Riset & Laboratorium Terpadu 2026',
    badgeIcon: FlaskConical,
    badgeStyle: 'bg-blue-500/10 border-blue-500/30 text-blue-700 dark:text-blue-300',
    titlePrefix: 'Laboratorium Canggih &',
    titleHighlight: 'Infrastruktur Cloud AI',
    titleSuffix: 'Standar Industri',
    description: 'Akses penuh ke 6 laboratorium praktikum modern: Lab AI & Machine Learning, Lab Cyber Security & Networking, Lab Robotika IoT, dan Multimedia Studio.',
    primaryCtaText: 'Tanya Bot AI FTI',
    primaryCtaAction: 'ai',
    secondaryCtaText: 'Lihat Fasilitas Lab',
    bgGradient: 'from-slate-900 via-blue-950 to-[#800020]/80',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    floatingBadges: [
      {
        icon: Terminal,
        label: 'Cyber Security Lab',
        subtext: 'Red Team & Defense',
        color: 'border-cyan-500/30 bg-white/90 dark:bg-slate-900/90 text-cyan-600',
        position: 'top-6 left-2',
        delay: 0.2
      },
      {
        icon: Database,
        label: 'Cloud Infrastructure',
        subtext: 'High Performance Compute',
        color: 'border-indigo-500/30 bg-white/90 dark:bg-slate-900/90 text-indigo-600',
        position: 'bottom-10 right-4',
        delay: 0.4
      }
    ]
  },
  {
    id: 3,
    badgeText: 'PMB Gelombang Tiga T.A. 2026/2027',
    badgeIcon: Rocket,
    badgeStyle: 'bg-rose-500/10 border-rose-500/30 text-rose-700 dark:text-rose-300',
    titlePrefix: 'Raih Beasiswa',
    titleHighlight: 'Technopreneur Digital',
    titleSuffix: 'Hingga 100%',
    description: 'Bergabunglah bersama keluarga besar FTI Universitas Patria Artha. Nikmati fasilitas potongan UKT, pendampingan inkubator bisnis, dan sertifikasi internasional.',
    primaryCtaText: 'Daftar PMB Sekarang',
    primaryCtaAction: 'pmb',
    secondaryCtaText: 'Kalkulator Simulasi UKT',
    bgGradient: 'from-[#9B2C2C] via-[#800020] to-purple-950',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    floatingBadges: [
      {
        icon: GraduationCap,
        label: 'Beasiswa Unggulan',
        subtext: 'Bebas Biaya Masuk',
        color: 'border-rose-500/30 bg-white/90 dark:bg-slate-900/90 text-rose-600',
        position: 'top-10 left-6',
        delay: 0.3
      },
      {
        icon: Zap,
        label: 'Jalur Prestasi',
        subtext: 'Tanpa Tes Tertulis',
        color: 'border-amber-500/30 bg-white/90 dark:bg-slate-900/90 text-amber-600',
        position: 'bottom-8 right-6',
        delay: 0.5
      }
    ]
  }
];

export const Hero: React.FC<HeroProps> = ({
  onNavigateToPmb,
  onNavigateToCurriculum,
  onOpenAIAssistant,
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [prodiStats, setProdiStats] = useState<any>({
    activeStudents: 2050,
    lecturersCount: 48,
    doctorateLecturers: '18 Dosen',
    labsCount: 8,
    employmentRate: '97.4%',
    avgStartingSalary: '8.5 Juta/bln'
  });

  useEffect(() => {
    api.getSiteData().then(data => {
      if (data && data.PRODI_STATS) {
        setProdiStats(data.PRODI_STATS);
      }
    }).catch(err => console.warn('Hero siteData load error:', err));
  }, []);

  // Auto advance slides
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const currentSlide = HERO_SLIDES[currentSlideIndex];

  const handlePrevSlide = () => {
    setCurrentSlideIndex((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handlePmbClick = () => {
    if (onNavigateToPmb) {
      onNavigateToPmb();
    } else {
      document.getElementById('pmb')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCurriculumClick = () => {
    if (onNavigateToCurriculum) {
      onNavigateToCurriculum();
    } else {
      document.getElementById('kurikulum')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePrimaryCta = (action: 'pmb' | 'curriculum' | 'ai') => {
    if (action === 'pmb') handlePmbClick();
    else if (action === 'curriculum') handleCurriculumClick();
    else if (action === 'ai') onOpenAIAssistant();
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-slate-950 text-white transition-colors">
      
      {/* Background Animated Floating Orbs & Light Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -50, 20, 0],
            scale: [1, 1.2, 0.9, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-24 -left-20 w-[500px] h-[500px] bg-[#9B2C2C]/25 rounded-full blur-[130px]"
        />
        <motion.div
          animate={{
            x: [0, -40, 30, 0],
            y: [0, 40, -30, 0],
            scale: [1, 0.85, 1.15, 1]
          }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 -right-20 -translate-y-1/2 w-[450px] h-[450px] bg-red-600/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            opacity: [0.3, 0.7, 0.3],
            scale: [0.9, 1.1, 0.9]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-0 left-1/3 w-[600px] h-[300px] bg-amber-500/10 rounded-full blur-[140px]"
        />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
      </div>

      {/* Hero Carousel Container */}
      <div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        
        {/* Carousel Content Transition with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center"
          >
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Badge Header */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border backdrop-blur-md shadow-sm"
              >
                <div className={`p-1 rounded-full ${currentSlide.badgeStyle}`}>
                  <currentSlide.badgeIcon className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-bold text-slate-200 tracking-wide">
                  {currentSlide.badgeText}
                </span>
              </motion.div>

              {/* Headline with Staggered Entrance */}
              <motion.h1 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight"
              >
                {currentSlide.titlePrefix}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-300 to-amber-300">
                  {currentSlide.titleHighlight}
                </span>{' '}
                {currentSlide.titleSuffix}
              </motion.h1>

              {/* Subtitle Description */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-slate-300 text-sm sm:text-base lg:text-lg font-normal max-w-2xl leading-relaxed mx-auto lg:mx-0"
              >
                {currentSlide.description}
              </motion.p>

              {/* CTA Buttons Row */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2"
              >
                <button
                  onClick={() => handlePrimaryCta(currentSlide.primaryCtaAction)}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#9B2C2C] to-[#800020] hover:from-[#b33333] hover:to-[#990026] text-white font-extrabold text-sm shadow-xl shadow-red-950/50 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
                >
                  <span>{currentSlide.primaryCtaText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={handleCurriculumClick}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 text-slate-100 font-bold text-sm transition-all shadow-md backdrop-blur-sm flex items-center justify-center gap-2"
                >
                  <Code2 className="w-4 h-4 text-red-400" />
                  <span>{currentSlide.secondaryCtaText}</span>
                </button>

                <button
                  onClick={() => setVideoModalOpen(true)}
                  className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white font-semibold text-sm transition-all backdrop-blur-md flex items-center justify-center gap-2"
                >
                  <div className="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center shadow-xs">
                    <Play className="w-3 h-3 fill-current ml-0.5" />
                  </div>
                  <span>Video Profil</span>
                </button>
              </motion.div>



            </div>

            {/* Right Media Showcase Column with Floating Badges */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Main Hero Image Frame */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="relative rounded-3xl overflow-hidden border-2 border-slate-700/60 shadow-2xl bg-slate-900 aspect-[4/3] sm:aspect-[16/11]"
                >
                  <img
                    src={currentSlide.imageUrl}
                    alt="FTI Patria Artha Campus"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${currentSlide.bgGradient} opacity-60 mix-blend-multiply`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

                  {/* Overlaid Banner Label */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-950/80 backdrop-blur-md border border-slate-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 block">
                        Universitas Patria Artha
                      </span>
                      <h4 className="text-xs font-extrabold text-white">
                        Fakultas Teknik & Informatika
                      </h4>
                    </div>
                    <div className="px-2.5 py-1 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-[10px] font-bold">
                      Akreditasi UNGGUL
                    </div>
                  </div>
                </motion.div>

                {/* Interactive Animated Floating Badges */}
                {currentSlide.floatingBadges.map((badge, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: 1,
                      y: [0, -10, 0]
                    }}
                    transition={{
                      opacity: { delay: badge.delay, duration: 0.4 },
                      y: {
                        duration: 3.5 + idx * 0.5,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }
                    }}
                    className={`absolute ${badge.position} hidden sm:flex items-center gap-3 p-3 rounded-2xl border shadow-xl backdrop-blur-md z-20 hover:scale-105 transition-transform ${badge.color}`}
                  >
                    <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 shrink-0">
                      <badge.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-black leading-tight">{badge.label}</p>
                      <p className="text-[10px] opacity-75 font-medium">{badge.subtext}</p>
                    </div>
                  </motion.div>
                ))}

              </div>
            </div>

          </motion.div>
        </AnimatePresence>

        {/* Carousel Controls Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Slide Indicator Dots */}
          <div className="flex items-center gap-3">
            {HERO_SLIDES.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlideIndex(index)}
                className={`relative h-2.5 rounded-full transition-all duration-300 ${
                  currentSlideIndex === index
                    ? 'w-10 bg-gradient-to-r from-red-500 to-rose-400'
                    : 'w-2.5 bg-slate-700 hover:bg-slate-600'
                }`}
                aria-label={`Slide ${index + 1}`}
              >
                {currentSlideIndex === index && (
                  <motion.div
                    layoutId="activeSlideIndicator"
                    className="absolute inset-0 rounded-full bg-white/30"
                  />
                )}
              </button>
            ))}
            <span className="text-xs font-mono font-bold text-slate-400 ml-2">
              0{currentSlideIndex + 1} / 0{HERO_SLIDES.length}
            </span>
          </div>

          {/* Controls Navigation Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 text-xs flex items-center gap-1.5 transition-colors"
              title={isAutoPlaying ? 'Jeda Auto Play' : 'Mulai Auto Play'}
            >
              {isAutoPlaying ? <Pause className="w-3.5 h-3.5 text-amber-400" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
              <span className="text-[11px] font-semibold">{isAutoPlaying ? 'Auto' : 'Paused'}</span>
            </button>

            <button
              onClick={handlePrevSlide}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 hover:text-white text-slate-400 transition-colors"
              aria-label="Slide Sebelumya"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={handleNextSlide}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 hover:text-white text-slate-400 transition-colors"
              aria-label="Slide Selanjutnya"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Key Metrics Stats Grid with Framer Motion Entrance */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-lg backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 text-red-400 mb-2">
              <div className="p-2.5 rounded-xl bg-red-500/10 text-red-400">
                <Users className="w-5 h-5" />
              </div>
              <span className="text-2xl sm:text-3xl font-black text-white">
                {prodiStats.activeStudents}+
              </span>
            </div>
            <p className="text-xs font-bold text-slate-200">Mahasiswa Aktif</p>
            <p className="text-[11px] text-slate-400 mt-1">Berbagai daerah & internasional</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-lg backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 text-rose-400 mb-2">
              <div className="p-2.5 rounded-xl bg-rose-500/10 text-rose-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="text-2xl sm:text-3xl font-black text-white">
                {prodiStats.lecturersCount}
              </span>
            </div>
            <p className="text-xs font-bold text-slate-200">Dosen Pengajar</p>
            <p className="text-[11px] text-rose-400 font-semibold mt-1">{prodiStats.doctorateLecturers} Bergelar Doktor (S3)</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -4 }}
            className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-lg backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 text-amber-400 mb-2">
              <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400">
                <FlaskConical className="w-5 h-5" />
              </div>
              <span className="text-2xl sm:text-3xl font-black text-white">
                {prodiStats.labsCount} Lab
              </span>
            </div>
            <p className="text-xs font-bold text-slate-200">Laboratorium Terpadu</p>
            <p className="text-[11px] text-slate-400 mt-1">Dilengkapi GPU Server A100</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -4 }}
            className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-lg backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 text-emerald-400 mb-2">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                <Briefcase className="w-5 h-5" />
              </div>
              <span className="text-2xl sm:text-3xl font-black text-white">
                {prodiStats.employmentRate}
              </span>
            </div>
            <p className="text-xs font-bold text-slate-200">Serapan Kerja Alumni</p>
            <p className="text-[11px] text-emerald-400 font-semibold mt-1">Rata-rata {prodiStats.avgStartingSalary}</p>
          </motion.div>

        </div>

      </div>

      {/* Video Profile Modal with AnimatePresence */}
      <AnimatePresence>
        {videoModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Play className="w-4 h-4 text-red-400 fill-current" />
                  <h3 className="font-bold text-white text-base">Video Profil FTI Universitas Patria Artha</h3>
                </div>
                <button
                  onClick={() => setVideoModalOpen(false)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="relative aspect-video bg-black flex items-center justify-center">
                <div className="text-center p-8 space-y-4">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-16 h-16 rounded-full bg-red-600/30 border border-red-500/50 text-red-400 flex items-center justify-center mx-auto"
                  >
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </motion.div>
                  <h4 className="text-xl font-bold text-white">Profil Kampus & Fasilitas Laboratorium FTI Patria Artha</h4>
                  <p className="text-sm text-slate-400 max-w-md mx-auto">
                    Saksikan langsung tur laboratorium AI, kegiatan riset, suasana perkuliahan, dan pengakuan alumni FTI Universitas Patria Artha.
                  </p>
                  <div className="inline-block px-4 py-2 bg-red-600/20 border border-red-500/40 rounded-xl text-red-300 text-xs font-mono">
                    [Simulasi Pemutaran Video Profil Terintegrasi]
                  </div>
                </div>
              </div>

              <div className="p-4 bg-slate-950 flex justify-between items-center text-xs text-slate-400 border-t border-slate-800">
                <span>Fakultas Teknik dan Informatika Universitas Patria Artha</span>
                <button
                  onClick={() => setVideoModalOpen(false)}
                  className="px-4 py-1.5 bg-slate-800 text-white rounded-lg hover:bg-slate-700"
                >
                  Tutup
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
