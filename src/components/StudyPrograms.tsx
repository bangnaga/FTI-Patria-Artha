import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { StudyProgram } from '../types';
import { api } from '../services/api';
import { 
  GraduationCap, 
  Search, 
  Award, 
  UserCheck, 
  ChevronRight, 
  CheckCircle2
} from 'lucide-react';

interface StudyProgramsProps {
  programs?: StudyProgram[];
}

export const StudyPrograms: React.FC<StudyProgramsProps> = ({ programs: propPrograms }) => {
  const [fetchedPrograms, setFetchedPrograms] = useState<StudyProgram[]>([]);

  useEffect(() => {
    if (!propPrograms || propPrograms.length === 0) {
      api.getStudyPrograms().then(data => {
        if (data) setFetchedPrograms(data);
      }).catch(err => console.warn('StudyPrograms fetch error:', err));
    }
  }, [propPrograms]);

  const displayPrograms = propPrograms && propPrograms.length > 0 ? propPrograms : fetchedPrograms;
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDegree, setSelectedDegree] = useState<string>('ALL');

  const filteredPrograms = displayPrograms.filter((prodi) => {
    const matchesDegree = selectedDegree === 'ALL' || prodi.degree === selectedDegree;
    const matchesSearch = prodi.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          prodi.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          prodi.headOfProgram.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          prodi.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDegree && matchesSearch;
  });

  return (
    <section id="prodi" className="py-20 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 dark:bg-red-950 text-[#800020] dark:text-red-300 text-xs font-bold mb-3">
            <GraduationCap className="w-3.5 h-3.5" /> Program Studi FTI Patria Artha
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Pilihan Program Studi Unggulan
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Mencetak talenta digital, insinyur, dan profesional berdaya saing global melalui pendidikan berkualitas tinggi berbasis OBE.
          </p>
        </motion.div>

        {/* Filter Bar */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-700 shadow-sm mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Cari prodi / kaprodi..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto">
            <span className="text-xs font-semibold text-slate-500">Jenjang:</span>
            {['ALL', 'S1', 'D3'].map((deg) => (
              <button
                key={deg}
                onClick={() => setSelectedDegree(deg)}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg border transition-all ${
                  selectedDegree === deg
                    ? 'bg-[#800020] text-white border-[#800020]'
                    : 'bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                }`}
              >
                {deg === 'ALL' ? 'Semua Jenjang' : deg}
              </button>
            ))}
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredPrograms.map((prodi, idx) => (
            <motion.div
              key={prodi.id}
              id={prodi.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:border-red-500/50 transition-all p-6 flex flex-col justify-between group scroll-mt-24"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-black px-2.5 py-1 rounded-md bg-red-50 dark:bg-red-950 text-[#800020] dark:text-red-300 border border-red-200 dark:border-red-800">
                    {prodi.degree} • {prodi.code}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-200 dark:border-emerald-800">
                    <Award className="w-3.5 h-3.5" />
                    <span>Akreditasi {prodi.accreditation}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-[#800020] dark:group-hover:text-red-400 transition-colors">
                  {prodi.name}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2.5 leading-relaxed">
                  {prodi.description}
                </p>

                {/* Kaprodi Info Box */}
                <div className="mt-5 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-100 dark:border-slate-700 flex items-center gap-3">
                  {prodi.headOfProdiPhoto ? (
                    <img
                      src={prodi.headOfProdiPhoto}
                      alt={prodi.headOfProgram || prodi.headOfProdi || 'Kaprodi'}
                      className="w-10 h-10 rounded-xl object-cover border border-[#9B2C2C]/30 shrink-0"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-xl bg-[#800020] text-white flex items-center justify-center font-bold text-xs shrink-0">
                      <UserCheck className="w-4 h-4" />
                    </div>
                  )}
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Ketua Program Studi (Kaprodi):</span>
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block truncate">{prodi.headOfProgram || prodi.headOfProdi || 'Belum Diatur'}</span>
                    {prodi.headOfProdiNidn && (
                      <span className="text-[10px] font-mono text-[#9B2C2C] dark:text-red-400 block font-semibold">NIDN: {prodi.headOfProdiNidn}</span>
                    )}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mt-4 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                    <span>Total Bebas Studi: <strong>{prodi.totalSks} SKS</strong></span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">FTI Patria Artha</span>
                <a
                  href="#kurikulum"
                  className="flex items-center gap-1 text-xs font-bold text-[#9B2C2C] dark:text-red-400 hover:underline"
                >
                  <span>Lihat Kurikulum</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
