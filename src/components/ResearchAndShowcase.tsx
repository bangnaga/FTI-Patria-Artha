import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import { ResearchGroup, Publication, InnovationProduct } from '../types';
import { 
  Rocket, 
  BookOpen, 
  ExternalLink, 
  Github, 
  Search, 
  Award, 
  Code, 
  FileText,
  Layers,
  Sparkles
} from 'lucide-react';

export const ResearchAndShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'PRODUCTS' | 'PAPERS' | 'GROUPS'>('PRODUCTS');
  const [pubFilter, setPubFilter] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const [researchGroups, setResearchGroups] = useState<ResearchGroup[]>([]);
  const [publications, setPublications] = useState<Publication[]>([]);
  const [innovationProducts, setInnovationProducts] = useState<InnovationProduct[]>([]);

  useEffect(() => {
    Promise.all([
      api.getResearchGroups(),
      api.getPublications(),
      api.getInnovationProducts()
    ]).then(([rgs, pubs, ips]) => {
      if (rgs) setResearchGroups(rgs);
      if (pubs) setPublications(pubs);
      if (ips) setInnovationProducts(ips);
    }).catch(err => console.warn('Research fetch error:', err));
  }, []);

  const filteredPubs = publications.filter((pub) => {
    const matchesFilter = pubFilter === 'ALL' || pub.type === pubFilter;
    const matchesSearch = pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (Array.isArray(pub.authors) && pub.authors.some(a => a.toLowerCase().includes(searchQuery.toLowerCase())));
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="riset" className="py-20 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 text-xs font-semibold mb-3">
            <Rocket className="w-3.5 h-3.5" /> Karya & Publikasi Ilmiah FTI
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Karya Inovasi & Repositori Riset FTI Patria Artha
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Etalase karya inovasi mahasiswa, publikasi jurnal internasional bereputasi, dan kelompok riset unggulan Fakultas Teknik dan Informatika Universitas Patria Artha.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="bg-white dark:bg-slate-800 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-center gap-1">
            <button
              onClick={() => setActiveTab('PRODUCTS')}
              className={`px-5 py-2 text-xs font-bold rounded-xl transition-all flex items-center gap-2 ${
                activeTab === 'PRODUCTS'
                  ? 'bg-red-600 text-white shadow-md shadow-red-500/20'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Showcase Produk Inovasi</span>
            </button>

            <button
              onClick={() => setActiveTab('PAPERS')}
              className={`px-5 py-2 text-xs font-bold rounded-xl transition-all flex items-center gap-2 ${
                activeTab === 'PAPERS'
                  ? 'bg-red-600 text-white shadow-md shadow-red-500/20'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Jurnal & Repositori TA</span>
            </button>

            <button
              onClick={() => setActiveTab('GROUPS')}
              className={`px-5 py-2 text-xs font-bold rounded-xl transition-all flex items-center gap-2 ${
                activeTab === 'GROUPS'
                  ? 'bg-red-600 text-white shadow-md shadow-red-500/20'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Grup Riset Dosen</span>
            </button>
          </div>
        </div>

        {/* TAB 1: SHOWCASE PRODUK INOVASI */}
        {activeTab === 'PRODUCTS' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {innovationProducts.map((prod) => (
              <div
                key={prod.id}
                className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={prod.thumbnail}
                      alt={prod.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-md">
                      {prod.category} • {prod.year}
                    </div>
                    {prod.award && (
                      <div className="absolute bottom-3 left-3 right-3 bg-amber-500/95 text-slate-950 font-extrabold text-[11px] px-2.5 py-1 rounded-lg backdrop-blur-md flex items-center gap-1.5 shadow-sm">
                        <Award className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate">{prod.award}</span>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                      {prod.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
                      Pengembang: {prod.developer}
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                      {prod.description}
                    </p>

                    {/* Tech Stack Badges */}
                    <div className="mt-4 flex flex-wrap gap-1">
                      {prod.techStack.map((tech, idx) => (
                        <span key={idx} className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-red-50 dark:bg-red-950/80 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-slate-700/80 flex items-center gap-3">
                  {prod.githubUrl && (
                    <a
                      href={prod.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 px-3 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 text-slate-800 dark:text-slate-200 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Source Code</span>
                    </a>
                  )}
                  {prod.demoUrl && (
                    <a
                      href={prod.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 px-3 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

              </div>
            ))}
          </div>
        )}

        {/* TAB 2: JURNAL & REPOSITORI SKRIPSI */}
        {activeTab === 'PAPERS' && (
          <div className="space-y-6">
            
            {/* Search and Category Filter */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Cari judul paper / nama penulis..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200"
                />
              </div>

              <div className="flex flex-wrap items-center gap-1.5">
                {[
                  { code: 'ALL', label: 'Semua Publikasi' },
                  { code: 'Jurnal Internasional', label: 'Scopus Q1/Q2' },
                  { code: 'Jurnal Nasional Sinta 1-2', label: 'Sinta 1-2' },
                  { code: 'Konferensi IEEE/ACM', label: 'IEEE Xplore' }
                ].map((f) => (
                  <button
                    key={f.code}
                    onClick={() => setPubFilter(f.code)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                      pubFilter === f.code
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Papers List */}
            <div className="space-y-4">
              {filteredPubs.map((pub) => (
                <div
                  key={pub.id}
                  className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:border-blue-500/60 transition-all flex flex-col sm:flex-row items-start justify-between gap-4"
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                        {pub.type}
                      </span>
                      <span className="text-xs text-slate-400 font-semibold">{pub.year}</span>
                    </div>

                    <h3 className="font-bold text-slate-900 dark:text-white text-base">
                      {pub.title}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                      Penulis: {pub.authors.join(', ')}
                    </p>

                    <p className="text-xs text-slate-400 italic">
                      Diterbitkan di: {pub.publisher}
                    </p>
                  </div>

                  {pub.doi && (
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-700 hover:bg-blue-600 hover:text-white text-slate-700 dark:text-slate-200 font-bold text-xs flex items-center gap-1.5 transition-colors"
                    >
                      <span>DOI Link</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              ))}
            </div>

          </div>
        )}

        {/* TAB 3: GRUP RISET DOSEN */}
        {activeTab === 'GROUPS' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {researchGroups.map((group) => (
              <div
                key={group.id}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-extrabold px-2.5 py-1 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                    {group.code}
                  </span>
                  <span className="text-xs text-slate-500 font-semibold">
                    {group.membersCount} Peneliti
                  </span>
                </div>

                <h3 className="font-bold text-slate-900 dark:text-white text-lg">
                  {group.name}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {group.description}
                </p>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-700/80">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                    Topik Riset Utama:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {group.topics.map((t, idx) => (
                      <span key={idx} className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                        • {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 text-xs font-medium text-slate-500">
                  Ketua Riset: <strong className="text-slate-800 dark:text-slate-200">{group.leadLecturer}</strong>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
