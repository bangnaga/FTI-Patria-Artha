import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import { PMBTrack, FAQItem } from '../types';
import { 
  GraduationCap, 
  CheckCircle2, 
  HelpCircle, 
  ChevronDown, 
  Send, 
  Sparkles,
  DollarSign,
  FileText,
  Clock,
  ArrowRight
} from 'lucide-react';

interface PmbProps {
  onOpenAIAssistant: () => void;
}

export const PmbAndServices: React.FC<PmbProps> = ({ onOpenAIAssistant }) => {
  const [pmbTracks, setPmbTracks] = useState<PMBTrack[]>([]);
  const [faqs, setFaqs] = useState<FAQItem[]>([]);
  const [activeFaq, setActiveFaq] = useState<string | null>('faq-01');

  useEffect(() => {
    Promise.all([
      api.getPMBTracks(),
      api.getFAQs()
    ]).then(([tracks, faqList]) => {
      if (tracks) setPmbTracks(tracks);
      if (faqList) setFaqs(faqList);
    }).catch(err => console.warn('PMB fetch error:', err));
  }, []);
  


  return (
    <section id="pmb" className="py-20 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 text-xs font-semibold mb-3">
            <GraduationCap className="w-3.5 h-3.5" /> Penerimaan Mahasiswa Baru FTI
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Jalur Pendaftaran PMB & Kalkulator UKT FTI Patria Artha
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Informasi lengkap jalur pendaftaran SNBP, SNBT, dan Mandiri Prestasi Fakultas Teknik dan Informatika Universitas Patria Artha.
          </p>
        </div>

        {/* PMB Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {pmbTracks.map((track) => (
            <div
              key={track.id}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-extrabold px-3 py-1 rounded-lg bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300">
                    {track.code}
                  </span>
                  <span className="text-xs text-slate-500 font-semibold">
                    Daya Tampung: {track.capacity} Kursi
                  </span>
                </div>

                <h3 className="font-bold text-slate-900 dark:text-white text-lg">
                  {track.name}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {track.description}
                </p>

                <div className="pt-2 text-xs font-semibold text-red-600 dark:text-red-400 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Periode: {track.period}</span>
                </div>

                {/* Requirements */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-700/80">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                    Persyaratan Utama:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                    {track.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700 flex flex-col gap-3">
                <p className="text-xs text-slate-500">
                  Estimasi Biaya: <strong className="text-slate-900 dark:text-white">{track.feeEstimate}</strong>
                </p>

                <button
                  onClick={onOpenAIAssistant}
                  className="w-full py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm shadow-red-500/20"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Konsultasi PMB via AI Bot</span>
                </button>
              </div>

            </div>
          ))}
        </div>



        {/* FAQ Accordion */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Pertanyaan Umum (FAQ) PMB & Akademik
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Jawaban seputar pendaftaran, beasiswa, fasilitas, dan kurikulum Informatika
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq) => {
              const isOpen = activeFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : faq.id)}
                    className="w-full p-5 text-left font-bold text-slate-900 dark:text-white text-sm flex items-center justify-between gap-4"
                  >
                    <span className="flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-blue-500 shrink-0" />
                      {faq.question}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 border-t border-slate-100 dark:border-slate-700/80 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
