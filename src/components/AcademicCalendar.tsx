import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import { AcademicCalendarItem } from '../types';
import { 
  Calendar as CalendarIcon, 
  Download, 
  CheckCircle2, 
  Clock, 
  GraduationCap, 
  BookOpen, 
  FileCheck
} from 'lucide-react';

export const AcademicCalendar: React.FC = () => {
  const [calendarItems, setCalendarItems] = useState<AcademicCalendarItem[]>([]);
  const [categoryFilter, setCategoryFilter] = useState<string>('ALL');

  useEffect(() => {
    api.getAcademicCalendar().then(items => {
      if (items) setCalendarItems(items);
    }).catch(err => console.warn('Academic calendar fetch error:', err));
  }, []);

  const filteredCalendar = calendarItems.filter((item) => {
    return categoryFilter === 'ALL' || item.category === categoryFilter;
  });

  const getCategoryBadge = (cat: string) => {
    switch (cat) {
      case 'Perkuliahan': return 'bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300';
      case 'Ujian': return 'bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300';
      case 'PMB': return 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300';
      case 'Wisuda': return 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300';
      default: return 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300';
    }
  };

  return (
    <section id="kalender" className="py-20 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-3">
            <CalendarIcon className="w-3.5 h-3.5" /> Agenda & Kalender Akademik
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Jadwal Perkuliahan & Kegiatan Penting
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Agenda resmi perkuliahan, periode UTS/UAS, pendaftaran PMB, serta sidang wisuda Teknik Informatika.
          </p>
        </div>

        {/* Filter and Download Header Bar */}
        <div className="bg-slate-50 dark:bg-slate-800/80 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-700 shadow-sm mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
            {['ALL', 'Perkuliahan', 'Ujian', 'PMB', 'Wisuda'].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                  categoryFilter === cat
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700'
                }`}
              >
                {cat === 'ALL' ? 'Semua Agenda' : cat}
              </button>
            ))}
          </div>

          <button
            onClick={() => alert('Mengunduh Kalender Akademik Resmi FTI Universitas Patria Artha (PDF/iCal)')}
            className="w-full sm:w-auto px-4 py-2 bg-slate-900 dark:bg-slate-700 hover:bg-slate-800 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Unduh Kalender (PDF)</span>
          </button>

        </div>

        {/* Calendar Timeline List */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {filteredCalendar.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-slate-800 rounded-2xl p-5 border border-slate-200 dark:border-slate-700 shadow-sm hover:border-blue-500/60 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded ${getCategoryBadge(item.category)}`}>
                    {item.category}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {item.semester}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base">
                  {item.title}
                </h3>
              </div>

              <div className="shrink-0 px-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                📅 {item.startDate} {item.startDate !== item.endDate && `s/d ${item.endDate}`}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
