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

  const footerStylePreset = websiteSettings?.footerStyle || 'maroon';

  const getFooterBgClasses = () => {
    switch (footerStylePreset) {
      case 'dark':
        return 'bg-slate-950 text-slate-100 border-t border-slate-800';
      case 'navy':
        return 'bg-slate-900 text-slate-100 border-t border-slate-800';
      case 'emerald':
        return 'bg-emerald-950 text-emerald-100 border-t border-emerald-900';
      case 'black':
        return 'bg-black text-slate-100 border-t border-slate-900';
      default:
        return 'bg-[#800020] text-[#FFF5F5] border-t border-[#9B2C2C]';
    }
  };

  return (
    <footer id="kontak" className={`${getFooterBgClasses()} pt-16 pb-8 relative scroll-mt-10 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
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
                <UpaLogo size={48} />
              )}
              <div>
                <span className="font-black tracking-wider text-lg block leading-tight">
                  {websiteSettings?.logoText || 'FTI PATRIA ARTHA'}
                </span>
                <span className="text-[10px] text-amber-300 font-bold uppercase tracking-widest block mt-0.5">
                  {websiteSettings?.logoSubtitle || 'Universitas Patria Artha (U.P.A)'}
                </span>
              </div>
            </div>

            <p className="text-sm leading-relaxed max-w-sm opacity-90">
              {websiteSettings?.aboutText || 'Fakultas Teknik dan Informatika Universitas Patria Artha terakreditasi UNGGUL & Sertifikasi Internasional. Unggul dalam riset Artificial Intelligence, Cyber Security, dan Software Engineering.'}
            </p>

            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black/25 border border-white/20 text-xs sm:text-sm font-semibold">
              <Award className="w-4 h-4 text-amber-300 shrink-0" />
              <span>{websiteSettings?.accreditationText || 'Akreditasi UNGGUL • SK No: 0482/SK/LAM-INFOKOM/2024'}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-amber-300">Tautan Cepat</h4>
            <ul className="space-y-2 text-sm opacity-85">
              <li><Link href="/halaman/profil" className="hover:text-white transition-colors">Profil & Akreditasi</Link></li>
              <li><Link href="/halaman/prodi" className="hover:text-white transition-colors">Kurikulum & Silabus</Link></li>
              <li><Link href="/halaman/dosen" className="hover:text-white transition-colors">Direktori Dosen</Link></li>
              <li><Link href="/halaman/prodi" className="hover:text-white transition-colors">Publikasi & Showcase</Link></li>
              <li><Link href="/halaman/kontak" className="hover:text-white transition-colors">Informasi PMB</Link></li>
            </ul>
          </div>

          {/* Col 3: Academic Services */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-amber-300">Layanan Akademik</h4>
            <ul className="space-y-2 text-sm opacity-85">
              <li><Link href="/halaman/berita" className="hover:text-white transition-colors">Kalender Akademik</Link></li>
              <li><Link href="/halaman/organisasi" className="hover:text-white transition-colors">HMTI & Organisasi</Link></li>
              <li><Link href="/halaman/dosen" className="hover:text-white transition-colors">Tracer Study Alumni</Link></li>
              <li><Link href="/halaman/berita" className="hover:text-white transition-colors">Pengumuman Terbaru</Link></li>
              <li><Link href="/halaman/kontak" className="hover:text-white transition-colors">Kalkulator UKT</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-amber-300">Kontak & Sekretariat</h4>
            <ul className="space-y-2.5 text-sm opacity-90">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{websiteSettings?.address || 'Jl. Tun Abdul Razak, (Terusan Jl. Hertasning Baru - Makassar), Kab. Gowa (SUL-SEL)'}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{websiteSettings?.phone || '(0411) 898-7654 / WA: 0812-3456-7890'}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${websiteSettings?.email || 'info@patria-artha.ac.id'}`} className="hover:underline font-mono text-amber-200">
                  {websiteSettings?.email || 'info@patria-artha.ac.id'}
                </a>
              </li>
            </ul>

            {websiteSettings?.officeHours && (
              <div className="pt-1.5 text-xs text-amber-200 font-medium border-t border-white/10 space-y-0.5">
                <p className="font-bold text-white uppercase text-[11px] tracking-wider">Jam Operasional:</p>
                <p>{websiteSettings.officeHours}</p>
              </div>
            )}

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2 flex-wrap">
              {websiteSettings?.instagram && (
                <a href={websiteSettings.instagram} target="_blank" rel="noopener noreferrer" className="p-2 bg-black/40 border border-white/10 rounded-xl hover:bg-white/20 transition-all text-slate-200 hover:text-white" title="Instagram">
                  <Instagram className="w-4 h-4" />
                </a>
              )}
              {websiteSettings?.youtube && (
                <a href={websiteSettings.youtube} target="_blank" rel="noopener noreferrer" className="p-2 bg-black/40 border border-white/10 rounded-xl hover:bg-white/20 transition-all text-slate-200 hover:text-white" title="YouTube">
                  <Youtube className="w-4 h-4" />
                </a>
              )}
              {websiteSettings?.linkedin && (
                <a href={websiteSettings.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-black/40 border border-white/10 rounded-xl hover:bg-white/20 transition-all text-slate-200 hover:text-white" title="LinkedIn">
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {websiteSettings?.github && (
                <a href={websiteSettings.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-black/40 border border-white/10 rounded-xl hover:bg-white/20 transition-all text-slate-200 hover:text-white" title="GitHub">
                  <Github className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs opacity-75">
          <p>{websiteSettings?.copyrightText || `© 2026 ${websiteSettings?.facultyName || 'Fakultas Teknik dan Informatika'} - ${websiteSettings?.universityName || 'Universitas Patria Artha'}. All rights reserved.`}</p>
          
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-black/40 hover:bg-black/60 text-slate-200 hover:text-white border border-white/15 transition-all flex items-center gap-1.5 font-bold shadow-xs cursor-pointer"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5 text-amber-300" />
          </button>
        </div>

      </div>
    </footer>
  );
};
