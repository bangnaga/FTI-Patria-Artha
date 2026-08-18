import React, { useState, useEffect } from 'react';
import { NewsItem } from '../types';
import { api } from '../services/api';
import { renderMarkdownToHtml } from '../utils/markdown';
import { getNewsSlug } from '../utils/slugify';
import { 
  Newspaper, 
  Calendar, 
  User, 
  Tag, 
  ArrowRight, 
  ArrowLeft,
  Share2,
  Copy,
  Check,
  Clock,
  BookOpen,
  Sparkles,
  Eye,
  ChevronRight,
  MessageSquare,
  Layers,
  ExternalLink,
  Search
} from 'lucide-react';

interface NewsAndAgendaProps {
  newsList?: NewsItem[];
}

export const NewsAndAgenda: React.FC<NewsAndAgendaProps> = ({ newsList: propNewsList }) => {
  const [fetchedNews, setFetchedNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    if (!propNewsList || propNewsList.length === 0) {
      api.getNews().then(data => {
        if (data) setFetchedNews(data);
      }).catch(err => console.warn('News fetch error:', err));
    }
  }, [propNewsList]);

  const newsList = propNewsList && propNewsList.length > 0 ? propNewsList : fetchedNews;
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  
  const [activeArticle, setActiveArticle] = useState<NewsItem | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [sidebarSearch, setSidebarSearch] = useState<string>('');
  // Read article from URL query param on load
  useEffect(() => {
    if (newsList.length > 0 && !activeArticle) {
      const urlParams = new URLSearchParams(window.location.search);
      const slug = urlParams.get('berita');
      if (slug) {
        const found = newsList.find(n => n.slug === slug || n.id === slug);
        if (found) {
          setActiveArticle(found);
          setTimeout(() => {
            const el = document.getElementById('berita');
            if (el) window.scrollTo({ top: el.offsetTop, behavior: 'smooth' });
          }, 300);
        }
      }
    }
  }, [newsList]);

  const filteredNews = newsList.filter((news) => {
    return selectedCategory === 'ALL' || news.category === selectedCategory;
  });

  const handleOpenArticle = (article: NewsItem) => {
    setActiveArticle(article);
    const targetSlug = getNewsSlug(article);
    const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + `?berita=${encodeURIComponent(targetSlug)}#berita`;
    window.history.pushState({path:newUrl},'',newUrl);
    window.scrollTo({ top: document.getElementById('berita')?.offsetTop || 0, behavior: 'smooth' });
  };

  const handleBackToList = () => {
    setActiveArticle(null);
    const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
    window.history.pushState({path:newUrl},'',newUrl + '#berita');
    window.scrollTo({ top: document.getElementById('berita')?.offsetTop || 0, behavior: 'smooth' });
  };

  const handleCopyShareLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  // -------------------------------------------------------------
  // DEDICATED NEWS DETAIL PAGE VIEW (When an article is active)
  // -------------------------------------------------------------
  if (activeArticle) {
    const relatedArticles = newsList.filter(n => n.id !== activeArticle.id && n.category === activeArticle.category).slice(0, 3);
    const recentArticles = newsList.filter(n => n.id !== activeArticle.id).slice(0, 5);

    return (
      <section id="berita" className="py-10 bg-slate-50 dark:bg-slate-950 transition-colors min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Action Bar (Back to List & Share Link) */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
            <button 
              onClick={handleBackToList} 
              className="px-3.5 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-[#9B2C2C] dark:hover:text-red-400 text-xs font-bold transition-all flex items-center gap-1.5 shadow-xs cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-[#9B2C2C] dark:text-red-400" /> 
              <span>Kembali ke Daftar Berita</span>
            </button>

            <button
              onClick={handleCopyShareLink}
              className="px-3.5 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-700 transition-all flex items-center gap-1.5 shadow-xs cursor-pointer"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Share2 className="w-3.5 h-3.5 text-[#9B2C2C]" />}
              <span>{copiedLink ? 'Link Tersalin!' : 'Bagikan Berita'}</span>
            </button>
          </div>

          {/* TWO COLUMN MAIN GRID: MAIN CONTENT (70%) + SIDEBAR (30%) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT MAIN ARTICLE COLUMN (8 cols / ~67%) */}
            <div className="lg:col-span-8 space-y-6">
              <article className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-xl space-y-6 animate-fadeIn">
                
                {/* Header Metadata & Title */}
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-xl bg-[#9B2C2C] text-white font-black text-xs uppercase tracking-wider shadow-xs">
                      {activeArticle.category}
                    </span>
                    <span className="px-3 py-1 rounded-xl bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300 font-bold text-xs flex items-center gap-1 border border-amber-300 dark:border-amber-800">
                      <Sparkles className="w-3.5 h-3.5 text-[#9B2C2C]" /> Warta Resmi Universitas Patria Artha
                    </span>
                  </div>

                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug">
                    {activeArticle.title}
                  </h1>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-[#9B2C2C]" />
                      {activeArticle.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <User className="w-4 h-4 text-[#9B2C2C]" />
                      Redaksi: <strong className="text-slate-800 dark:text-slate-200">{activeArticle.author}</strong>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-[#9B2C2C]" />
                      3 Menit Baca
                    </span>
                  </div>
                </div>

                {/* Summary Box */}
                {activeArticle.summary && (
                  <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/90 dark:bg-slate-950/80 border-l-4 border-[#9B2C2C] text-sm text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                    <p className="font-bold text-[#9B2C2C] dark:text-red-400 mb-1 uppercase tracking-wider text-xs">Ringkasan Berita:</p>
                    {activeArticle.summary}
                  </div>
                )}

                {/* FULL FEATURED IMAGE (UNCROPPED NATURAL VIEW) */}
                {activeArticle.thumbnail && (
                  <div className="space-y-2 my-6">
                    <div className="w-full bg-slate-100 dark:bg-slate-950 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md p-2 flex items-center justify-center">
                      <img
                        src={activeArticle.thumbnail}
                        alt={activeArticle.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-auto max-h-[700px] object-contain rounded-2xl mx-auto block"
                      />
                    </div>
                    <p className="text-xs text-center text-slate-400 italic">
                      Visual Dokumentasi: {activeArticle.title}
                    </p>
                  </div>
                )}

                {/* NARRATIVE ARTICLE CONTENT (MARKDOWN RENDERED) */}
                <div 
                  className="prose prose-slate dark:prose-invert max-w-none text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed pt-2 space-y-4"
                  dangerouslySetInnerHTML={{ __html: renderMarkdownToHtml(activeArticle.content || activeArticle.summary) }}
                />

                {/* ARTICLE TAGS */}
                {activeArticle.tags && activeArticle.tags.length > 0 && (
                  <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-1.5">
                    <Tag className="w-4 h-4 text-[#9B2C2C] mr-1" />
                    {activeArticle.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs font-bold px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}

              </article>
            </div>

            {/* RIGHT SIDEBAR COLUMN (4 cols / ~33%) */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* SIDEBAR WIDGET 1: CARI BERITA */}
              <div className="bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg space-y-3">
                <h3 className="text-sm font-extrabold text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
                  <Search className="w-4 h-4 text-[#9B2C2C]" /> Cari Berita & Informasi
                </h3>
                <p className="text-xs text-slate-500">Temukan berita, kegiatan kampus, dan pengumuman terbaru UPA.</p>
                <div className="relative">
                  <Search className="w-3.5 h-3.5 absolute left-3 top-3 text-slate-400" />
                  <input
                    type="text"
                    value={sidebarSearch}
                    onChange={(e) => setSidebarSearch(e.target.value)}
                    placeholder="Kata kunci berita..."
                    className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-800 dark:text-slate-200 focus:outline-none focus:border-[#9B2C2C]"
                  />
                </div>
              </div>

              {/* SIDEBAR WIDGET 2: KATEGORI BERITA */}
              <div className="bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg space-y-3">
                <h3 className="text-sm font-extrabold text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
                  <Layers className="w-4 h-4 text-[#9B2C2C]" /> Kategori Berita Utama
                </h3>
                <div className="space-y-1.5">
                  {[
                    { name: 'Pendidikan', desc: 'Berita akademik & pembelajaran' },
                    { name: 'Kemahasiswaan', desc: 'Kegiatan & organisasi mahasiswa' },
                    { name: 'Prestasi', desc: 'Pencapaian mahasiswa & dosen' },
                    { name: 'Kerjasama', desc: 'Kolaborasi & kemitraan institusi' }
                  ].map((cat) => (
                    <button
                      key={cat.name}
                      onClick={() => {
                        setSelectedCategory(cat.name);
                        handleBackToList();
                      }}
                      className="w-full p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-950 hover:bg-red-50 dark:hover:bg-slate-800 text-left transition-all border border-slate-100 dark:border-slate-800 group flex items-center justify-between cursor-pointer"
                    >
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-[#9B2C2C]">{cat.name}</h4>
                        <p className="text-[10px] text-slate-400">{cat.desc}</p>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 transition-transform" />
                    </button>
                  ))}
                </div>
              </div>

              {/* SIDEBAR WIDGET 3: BERITA TERBARU POPULER */}
              <div className="bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg space-y-4">
                <h3 className="text-sm font-extrabold text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
                  <Newspaper className="w-4 h-4 text-[#9B2C2C]" /> Berita Terkini Lainnya
                </h3>
                <div className="space-y-3">
                  {recentArticles.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => handleOpenArticle(item)}
                      className="flex items-start gap-3 p-2 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer group"
                    >
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-14 h-14 rounded-xl object-cover shrink-0 border border-slate-200 dark:border-slate-800"
                      />
                      <div className="min-w-0 flex-1">
                        <span className="text-xs font-extrabold text-[#9B2C2C] uppercase block mb-0.5">{item.category}</span>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-[#9B2C2C] line-clamp-2 leading-snug">
                          {item.title}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SIDEBAR WIDGET 4: MEDIA TERVERIFIKASI & YOUTUBE OFFICIAL */}
              <div className="p-5 rounded-3xl bg-gradient-to-br from-[#800020] to-red-950 text-white shadow-xl space-y-3">
                <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-amber-200 text-xs font-black uppercase">Media Terverifikasi</span>
                <h4 className="text-sm font-black">Portal Berita Resmi UPA</h4>
                <p className="text-xs text-red-100/90 leading-relaxed">
                  Universitas Patria Artha terverifikasi dan berkomitmen menyajikan informasi akademik yang akurat dan terpercaya.
                </p>
                <a
                  href="https://www.youtube.com/@Official.Univ_PatriaArtha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-400 text-slate-950 font-black text-xs shadow-md hover:bg-amber-300 transition-all"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> Tonton YouTube Official UPA
                </a>
              </div>

            </div>

          </div>

          {/* BOTTOM RELATED ARTICLES SECTION */}
          {relatedArticles.length > 0 && (
            <div className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-800 space-y-6">
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#9B2C2C]" /> Berita Terkait Lainnya
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map((rel) => (
                  <div
                    key={rel.id}
                    onClick={() => handleOpenArticle(rel)}
                    className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between group"
                  >
                    <div>
                      <div className="h-40 overflow-hidden bg-slate-100 dark:bg-slate-950">
                        <img
                          src={rel.thumbnail}
                          alt={rel.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-5 space-y-2">
                        <span className="text-xs font-black px-2.5 py-0.5 rounded bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 uppercase">
                          {rel.category}
                        </span>
                        <h4 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-[#9B2C2C] line-clamp-2 leading-snug">
                          {rel.title}
                        </h4>
                      </div>
                    </div>

                    <div className="p-5 pt-0 text-xs font-bold text-[#9B2C2C] flex items-center justify-between">
                      <span>Baca Artikel</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>
    );
  }

  // -------------------------------------------------------------
  // MAIN NEWS LIST GRID VIEW (Default)
  // -------------------------------------------------------------
  return (
    <section id="berita" className="py-20 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-100 dark:bg-red-950/80 text-[#9B2C2C] dark:text-red-300 text-xs font-bold mb-3">
            <Newspaper className="w-3.5 h-3.5" /> Berita, Pengumuman & Agenda Kampus
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Kabar Terkini & Event Informatika
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Pusat berita resmi seputar pengumuman perkuliahan, kabar kejuaraan mahasiswa, seminar nasional, dan kuliah tamu industri.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center mb-10">
          <div className="bg-slate-100 dark:bg-slate-800 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xs flex flex-wrap justify-center gap-1">
            {['ALL', 'Berita', 'Pengumuman', 'Agenda', 'Prestasi'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#9B2C2C] text-white shadow-md shadow-red-900/20'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat === 'ALL' ? 'Semua Berita' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredNews.map((article) => (
            <div
              key={article.id}
              onClick={() => handleOpenArticle(article)}
              className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-52 overflow-hidden bg-slate-100 dark:bg-slate-900">
                  <img
                    src={article.thumbnail}
                    alt={article.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-[#9B2C2C] text-white text-xs font-black px-3 py-1 rounded-lg shadow-md uppercase">
                    {article.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-slate-400 mb-2 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#9B2C2C]" />
                      {article.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-[#9B2C2C]" />
                      {article.author}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-slate-900 dark:text-white text-base group-hover:text-[#9B2C2C] dark:group-hover:text-red-400 transition-colors line-clamp-2 leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-2.5 line-clamp-3 leading-relaxed">
                    {article.summary}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-slate-700/80 flex items-center justify-between text-xs font-black text-[#9B2C2C] dark:text-red-400">
                <span className="flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5" /> Baca Selengkapnya
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
