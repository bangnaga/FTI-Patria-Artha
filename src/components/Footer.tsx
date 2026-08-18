import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { UpaLogo } from './UpaLogo';
import { 
  Code2, 
  MapPin, 
  Phone, 
  Mail, 
  Award, 
  Instagram, 
  Youtube, 
  Github, 
  Linkedin, 
  Play,
  ArrowUp
} from 'lucide-react';

export const Footer: React.FC = () => {
  const [websiteSettings, setWebsiteSettings] = useState<any>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('fti_website_settings');
      if (saved) {
        setWebsiteSettings(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    const updateSettings = () => {
      try {
        const saved = localStorage.getItem('fti_website_settings');
        if (saved) setWebsiteSettings(JSON.parse(saved));
      } catch (e) {
        /* ignore */
      }
    };

    window.addEventListener('fti_settings_updated', updateSettings);
    window.addEventListener('storage', updateSettings);
    return () => {
      window.removeEventListener('fti_settings_updated', updateSettings);
      window.removeEventListener('storage', updateSettings);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="kontak" className="relative bg-gradient-to-r from-[#690013] via-[#850018] to-[#4F000E] text-white pt-16 pb-8 border-t-2 border-amber-500/40 shadow-2xl overflow-hidden scroll-mt-10">
      {/* Background Subtle Shimmer Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-amber-500/20">
          
          {/* Col 1: About Prodi */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              {websiteSettings?.logoUrl || websiteSettings?.logoDarkUrl ? (
                <img
                  src={websiteSettings.logoUrl || websiteSettings.logoDarkUrl}
                  alt="Logo Footer"
                  className="h-12 max-w-[160px] object-contain shrink-0"
                />
              ) : (
                <div className="shrink-0">
                  <UpaLogo size={46} />
                </div>
              )}
              <div>
                <span style={{ color: '#FFD700' }} className="font-black tracking-wider text-xl block leading-tight font-heading !text-[#FFD700] [text-shadow:_0_2px_4px_rgba(0,0,0,0.9)]">
                  {websiteSettings?.logoText || 'FTI – UPA'}
                </span>
                <span style={{ color: '#FCD34D' }} className="text-[11px] !text-amber-300 font-extrabold uppercase tracking-widest block mt-0.5 font-heading [text-shadow:_0_1px_3px_rgba(0,0,0,0.9)]">
                  {websiteSettings?.logoSubtitle || 'UNIVERSITAS PATRIA ARTHA'}
                </span>
              </div>
            </div>

            <p className="text-sm leading-relaxed max-w-sm text-white/95 font-medium">
              {websiteSettings?.aboutText || 'Fakultas Teknik dan Informatika Universitas Patria Artha terakreditasi UNGGUL & Sertifikasi Internasional. Unggul dalam riset Artificial Intelligence, Cyber Security, dan Software Engineering.'}
            </p>

            {/* 3D Metallic Accreditation Badge with Bright Gold Text */}
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#1A1A1A] via-[#2A1F13] to-[#1A1A1A] border-2 border-amber-500/80 shadow-[0_6px_20px_rgba(0,0,0,0.7)] text-xs sm:text-sm font-black mt-2">
              <Award className="w-4.5 h-4.5 text-[#FFD700] shrink-0" />
              <span style={{ color: '#FFD700' }} className="!text-[#FFD700] font-black tracking-wide [text-shadow:_0_2px_4px_rgba(0,0,0,0.9)]">
                {websiteSettings?.accreditationText || 'Unggul & Terakreditasi BAN-PT / LAM INFOKOM'}
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <h4 style={{ color: '#FFD700' }} className="text-sm font-black uppercase tracking-wider !text-[#FFD700] font-heading [text-shadow:_0_2px_4px_rgba(0,0,0,0.9)]">TAUTAN CEPAT</h4>
            <ul className="space-y-2.5 text-sm font-semibold text-white/95">
              <li><Link href="/halaman/profil" className="hover:text-[#FFD700] transition-colors">Profil & Akreditasi</Link></li>
              <li><Link href="/halaman/prodi" className="hover:text-[#FFD700] transition-colors">Kurikulum & Silabus</Link></li>
              <li><Link href="/halaman/dosen" className="hover:text-[#FFD700] transition-colors">Direktori Dosen</Link></li>
              <li><Link href="/halaman/prodi" className="hover:text-[#FFD700] transition-colors">Publikasi & Showcase</Link></li>
              <li><Link href="/halaman/kontak" className="hover:text-[#FFD700] transition-colors">Informasi PMB</Link></li>
            </ul>
          </div>

          {/* Col 3: Academic Services */}
          <div className="space-y-4">
            <h4 style={{ color: '#FFD700' }} className="text-sm font-black uppercase tracking-wider !text-[#FFD700] font-heading [text-shadow:_0_2px_4px_rgba(0,0,0,0.9)]">LAYANAN AKADEMIK</h4>
            <ul className="space-y-2.5 text-sm font-semibold text-white/95">
              <li><Link href="/halaman/berita" className="hover:text-[#FFD700] transition-colors">Kalender Akademik</Link></li>
              <li><Link href="/halaman/organisasi" className="hover:text-[#FFD700] transition-colors">HMTI & Organisasi</Link></li>
              <li><Link href="/halaman/dosen" className="hover:text-[#FFD700] transition-colors">Tracer Study Alumni</Link></li>
              <li><Link href="/halaman/berita" className="hover:text-[#FFD700] transition-colors">Pengumuman Terbaru</Link></li>
              <li><Link href="/halaman/kontak" className="hover:text-[#FFD700] transition-colors">Kalkulator UKT</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="space-y-4">
            <h4 style={{ color: '#FFD700' }} className="text-sm font-black uppercase tracking-wider !text-[#FFD700] font-heading [text-shadow:_0_2px_4px_rgba(0,0,0,0.9)]">KONTAK & SEKRETARIAT</h4>
            <ul className="space-y-3 text-sm font-semibold text-white/95 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]" />
                <span className="leading-snug">{websiteSettings?.address || 'Jl. Tun Abdul Razak No. 1, Gowa - Makassar, Sulawesi Selatan'}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]" />
                <span>{websiteSettings?.phone || '+62 411 888 9999'}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]" />
                <a href={`mailto:${websiteSettings?.email || 'fti@patria-artha.ac.id'}`} className="hover:underline text-white font-semibold">
                  {websiteSettings?.email || 'fti@patria-artha.ac.id'}
                </a>
              </li>
            </ul>

            {/* 3D Metallic Social Icons */}
            <div className="flex items-center gap-2.5 pt-3">
              <a href={websiteSettings?.instagram || '#'} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-600 via-amber-950 to-slate-950 border border-amber-400/50 shadow-[0_4px_12px_rgba(0,0,0,0.6)] flex items-center justify-center text-amber-200 hover:text-white hover:scale-110 hover:border-amber-300 transition-all cursor-pointer" title="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={websiteSettings?.youtube || '#'} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-600 via-amber-950 to-slate-950 border border-amber-400/50 shadow-[0_4px_12px_rgba(0,0,0,0.6)] flex items-center justify-center text-amber-200 hover:text-white hover:scale-110 hover:border-amber-300 transition-all cursor-pointer" title="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-600 via-amber-950 to-slate-950 border border-amber-400/50 shadow-[0_4px_12px_rgba(0,0,0,0.6)] flex items-center justify-center text-amber-200 hover:text-white hover:scale-110 hover:border-amber-300 transition-all cursor-pointer" title="Play">
                <Play className="w-4 h-4 fill-amber-200" />
              </a>
              <a href={websiteSettings?.linkedin || '#'} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-600 via-amber-950 to-slate-950 border border-amber-400/50 shadow-[0_4px_12px_rgba(0,0,0,0.6)] flex items-center justify-center text-amber-200 hover:text-white hover:scale-110 hover:border-amber-300 transition-all cursor-pointer" title="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/80 font-medium">
          <p>{websiteSettings?.copyrightText || `© 2026 ${websiteSettings?.facultyName || 'Fakultas Teknik dan Informatika'} - ${websiteSettings?.universityName || 'Universitas Patria Artha'}. All rights reserved.`}</p>
          
          <button
            onClick={scrollToTop}
            className="px-4 py-2 rounded-full bg-gradient-to-r from-[#1A1A1A] to-[#2E2E2E] hover:from-amber-950 hover:to-amber-900 text-amber-200 hover:text-white border border-amber-500/40 transition-all flex items-center gap-2 font-bold shadow-md cursor-pointer"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5 text-amber-400" />
          </button>
        </div>

      </div>
    </footer>
  );
};
