import React, { useState } from 'react';
import { 
  MapPin, 
  Mail, 
  Clock, 
  Phone, 
  ExternalLink, 
  Send, 
  CheckCircle2, 
  Building2, 
  Navigation,
  Globe
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Informasi Pendaftaran PMB',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const googleMapsFullUrl = "https://www.google.com/maps/place/Universitas+Patria+Artha/@-5.1884872,119.4764326,632m/data=!3m2!1e3!4b1!4m6!3m5!1s0x2dbee3ba7c6341ab:0x665d56d632f5d082!8m2!3d-5.1884872!4d119.4764326!16s%2Fg%2F12qhkdv92?hl=id&entry=ttu&g_ep=EgoyMDI2MDgwNS4xIKXMDSoASAFQAw%3D%3D";
  
  // Clean query iframe embed URL for coordinates -5.1884872, 119.4764326
  const mapEmbedUrl = "https://maps.google.com/maps?q=-5.1884872,119.4764326&hl=id&z=16&output=embed";

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormState({ name: '', email: '', phone: '', subject: 'Informasi Pendaftaran PMB', message: '' });
        }, 5000);
      } else {
        setErrorMessage(data.error || 'Gagal mengirim pesan.');
      }
    } catch (err: any) {
      console.error('Contact Form Submit Error:', err);
      setErrorMessage('Terjadi kesalahan koneksi saat mengirim pesan.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="kontak" className="py-20 bg-white dark:bg-slate-900 transition-colors scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 dark:bg-red-950/80 text-[#9B2C2C] dark:text-red-400 text-xs font-black uppercase tracking-wider mb-3 border border-red-200 dark:border-red-900">
            <Building2 className="w-3.5 h-3.5" />
            <span>Kontak & Lokasi Kampus</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
            Hubungi Fakultas Teknik & Informatika
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            Sekretariat FTI Universitas Patria Artha siap melayani informasi akademik, pendaftaran mahasiswa baru, dan kemitraan riset.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left Column: Essential Contact Information Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Card 1: Our Address */}
            <div className="p-5 rounded-3xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 shadow-xs hover:border-[#9B2C2C]/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-red-100 dark:bg-red-950 text-[#9B2C2C] dark:text-red-400 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#9B2C2C] dark:text-red-400 mb-1">
                    Our Address (Alamat Kampus)
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 leading-relaxed">
                    Jl. Tun Abdul Razak, (Terusan Jl. Hertasning Baru - Makassar), Kabupaten Gowa (SUL-SEL)
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                    Gedung Utama FTI Universitas Patria Artha
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Email Address */}
            <div className="p-5 rounded-3xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 shadow-xs hover:border-[#9B2C2C]/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-amber-800 dark:text-amber-300 mb-1">
                    Email Address
                  </h3>
                  <a 
                    href="mailto:info@patria-artha.ac.id" 
                    className="text-xs sm:text-sm font-extrabold text-[#9B2C2C] dark:text-red-400 hover:underline font-mono block"
                  >
                    info@patria-artha.ac.id
                  </a>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    Layanan respon cepat sekretariat akademik
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Hours of Operation */}
            <div className="p-5 rounded-3xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 shadow-xs hover:border-[#9B2C2C]/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xs font-black uppercase tracking-wider text-blue-800 dark:text-blue-300 mb-2">
                    Hours of Operation (Jam Operasional)
                  </h3>
                  <div className="space-y-1.5 text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
                    <div className="flex justify-between items-center pb-1 border-b border-slate-200 dark:border-slate-700/60">
                      <span>Senin - Jum'at</span>
                      <span className="font-mono text-[#9B2C2C] dark:text-red-400 font-extrabold">08:00 - 16:00</span>
                    </div>
                    <div className="flex justify-between items-center pt-0.5">
                      <span>Sabtu</span>
                      <span className="font-mono text-[#9B2C2C] dark:text-red-400 font-extrabold">08:00 - 14:00</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2">
                    *Minggu & Hari Libur Nasional: Tutup
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4: Telepon & Direct Link Button */}
            <div className="p-5 rounded-3xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
                    Telepon & WhatsApp
                  </p>
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-200 font-mono">
                    (0411) 898-7654 / WA: 0812-3456-7890
                  </p>
                </div>
              </div>

              <a
                href={googleMapsFullUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-2xl bg-[#9B2C2C] hover:bg-[#800020] text-[#FFF5F5] font-extrabold text-xs transition-all shadow-md flex items-center justify-center gap-2 group"
              >
                <Navigation className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>Petunjuk Arah Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 ml-auto" />
              </a>
            </div>

          </div>

          {/* Right Column: Embedded Google Map & Contact Form (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Embedded Google Map */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xl bg-slate-100 dark:bg-slate-800 relative group">
              <div className="p-3 bg-slate-900 text-white flex items-center justify-between text-xs px-5">
                <div className="flex items-center gap-2 font-bold">
                  <Globe className="w-4 h-4 text-emerald-400" />
                  <span>Peta Lokasi Kampus Universitas Patria Artha</span>
                </div>
                <a
                  href={googleMapsFullUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold text-amber-300 hover:underline flex items-center gap-1"
                >
                  <span>Buka di Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="w-full h-[320px] sm:h-[380px] relative">
                <iframe
                  title="Peta Universitas Patria Artha"
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale-[15%] hover:grayscale-0 transition-all duration-300"
                />
              </div>

              <div className="p-3 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2">
                <span className="font-semibold">Koordinat GPS: -5.1884872, 119.4764326</span>
                <span className="font-bold text-[#9B2C2C] dark:text-red-400">Jl. Tun Abdul Razak, Kab. Gowa</span>
              </div>
            </div>

            {/* Quick Message Form */}
            <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-xs">
              <h3 className="text-base font-black text-slate-900 dark:text-slate-100 mb-1">
                Kirim Pesan Ke Fakultas
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                Punya pertanyaan seputar prodi, kurikulum, atau PMB? Kirimkan pesan Anda langsung ke admin.
              </p>

              {errorMessage && (
                <div className="mb-3 p-3 rounded-2xl bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-200 text-xs font-bold">
                  {errorMessage}
                </div>
              )}

              {isSubmitted ? (
                <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <div>
                    <h4 className="text-xs font-black">Pesan Terkirim!</h4>
                    <p className="text-[11px]">Terima kasih. Tim sekretariat FTI UPA akan membalas melalui email info@patria-artha.ac.id.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">Nama Lengkap</label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Ahmad Tri"
                        className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-[#9B2C2C] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">Email Anda</label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="nama@email.com"
                        className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-[#9B2C2C] outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">No. WhatsApp</label>
                      <input
                        type="text"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="081234567890"
                        className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-[#9B2C2C] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">Topik Informasi</label>
                      <select
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-[#9B2C2C] outline-none font-medium"
                      >
                        <option value="Informasi Pendaftaran PMB">Informasi Pendaftaran PMB</option>
                        <option value="Pertanyaan Kurikulum & Prodi">Pertanyaan Kurikulum & Prodi</option>
                        <option value="Kerjasama & Penelitian">Kerjasama & Penelitian</option>
                        <option value="Layanan Administrasi">Layanan Administrasi</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">Pesan Anda</label>
                    <textarea
                      rows={3}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Tuliskan pertanyaan Anda di sini..."
                      className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-[#9B2C2C] outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl bg-[#9B2C2C] hover:bg-[#800020] text-[#FFF5F5] font-extrabold text-xs transition-colors flex items-center justify-center gap-2 shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Kirim Pesan Ke FTI UPA</span>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
