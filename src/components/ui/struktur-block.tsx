import React, { useState, useRef, useEffect } from 'react';
import { ZoomIn, ZoomOut, RotateCcw, Download, X, Layers, CheckCircle2 } from 'lucide-react';

export interface StrukturBlockProps {
  title?: string;
  subtitle?: string;
  rektorName?: string;
  wr1Name?: string;
  wr2Name?: string;
  wr3Name?: string;
  dekanName?: string;
  kaprodiTifName?: string;
  kaprodiTeName?: string;
  kaprodiTmName?: string;
  enableZoom?: boolean | string;
  enableExport?: boolean | string;
  theme?: 'light' | 'dark';
  containerHeight?: '600px' | '750px' | '900px' | 'auto';
}

interface NodeDetails {
  title: string;
  category: string;
  description: string;
}

export const StrukturBlock: React.FC<StrukturBlockProps> = ({
  title = 'Bagan Struktur Organisasi Universitas',
  subtitle = 'Fakultas Teknik, Biro, & Lembaga',
  rektorName = 'DR. Bastian Lubis, S.E., M.M., CFM',
  wr1Name = 'Suhendra, S.E., M.M., CFM',
  wr2Name = 'Vieni Irhaswati, S.E, M.M.',
  wr3Name = 'Ir. Asnefi., M.M., CFM',
  dekanName = 'Dr. Andi Nur Putri, S.Pd., M.T.',
  kaprodiTifName = 'Dayanti, S.Kom., M.Kom.',
  kaprodiTeName = 'Ir. Irwan Syarif, S.Pd., M.T.',
  kaprodiTmName = 'Ir. Muhammd Arham, S.Pd., M.T.',
  enableZoom = true,
  enableExport = true,
  theme = 'light',
  containerHeight = '750px'
}) => {
  const [scale, setScale] = useState<number>(1);
  const [pointX, setPointX] = useState<number>(0);
  const [pointY, setPointY] = useState<number>(0);
  const [isPanning, setIsPanning] = useState<boolean>(false);
  const [startPos, setStartPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [selectedNode, setSelectedNode] = useState<NodeDetails | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const isZoomable = enableZoom === true || enableZoom === 'true';
  const isExportable = enableExport === true || enableExport === 'true';

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest('.node-card')) return;
    setIsPanning(true);
    setStartPos({ x: e.clientX - pointX, y: e.clientY - pointY });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isPanning) return;
    e.preventDefault();
    setPointX(e.clientX - startPos.x);
    setPointY(e.clientY - startPos.y);
  };

  const handleMouseUp = () => {
    setIsPanning(false);
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (!isZoomable) return;
    e.preventDefault();
    const delta = -e.deltaY;
    let newScale = delta > 0 ? scale * 1.1 : scale / 1.1;
    newScale = Math.min(Math.max(0.4, newScale), 3);

    const xs = (e.clientX - pointX) / scale;
    const ys = (e.clientY - pointY) / scale;

    setScale(newScale);
    setPointX(e.clientX - xs * newScale);
    setPointY(e.clientY - ys * newScale);
  };

  const zoomIn = () => setScale(prev => Math.min(prev * 1.25, 3));
  const zoomOut = () => setScale(prev => Math.max(prev / 1.25, 0.4));
  const resetZoom = () => {
    setScale(1);
    setPointX(0);
    setPointY(0);
  };

  const exportSvg = () => {
    if (!svgRef.current) return;
    const svgData = svgRef.current.outerHTML;
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const svgUrl = URL.createObjectURL(svgBlob);
    const downloadLink = document.createElement('a');
    downloadLink.href = svgUrl;
    downloadLink.download = 'Struktur_Organisasi_Universitas.svg';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(svgUrl);
  };

  const selectNode = (nodeTitle: string, category: string, description: string) => {
    setSelectedNode({ title: nodeTitle, category, description });
  };

  const isDark = theme === 'dark';
  const heightClass = 
    containerHeight === '600px' ? 'h-[600px]' :
    containerHeight === '900px' ? 'h-[900px]' :
    containerHeight === 'auto' ? 'h-auto min-h-[600px]' :
    'h-[750px]';

  return (
    <div className={`w-full font-sans transition-colors ${isDark ? 'bg-slate-950 text-slate-100' : 'bg-white text-slate-900'}`}>
      
      {/* Top Bar Navigation */}
      <header className={`px-6 py-3 border-b flex flex-wrap items-center justify-between gap-4 z-20 shrink-0 shadow-xs ${
        isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
      }`}>
        <div className="flex items-center gap-3">
          <div className="w-3 h-8 bg-red-600 rounded-xs" />
          <div>
            <h2 className={`text-lg font-extrabold leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {title}
            </h2>
            {subtitle && (
              <p className={`text-xs font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                {subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Action Tools & Zoom Controls */}
        <div className="flex items-center gap-3 flex-wrap">
          {isZoomable && (
            <div className={`flex items-center border rounded-lg p-1 gap-1 ${
              isDark ? 'bg-slate-800 border-slate-700' : 'bg-slate-100 border-slate-300'
            }`}>
              <button
                type="button"
                onClick={zoomIn}
                title="Zoom In"
                className={`px-2.5 py-1 text-xs font-bold rounded transition border border-transparent cursor-pointer flex items-center gap-1 ${
                  isDark ? 'hover:bg-slate-700 text-slate-200' : 'hover:bg-white text-slate-700 hover:border-slate-300'
                }`}
              >
                <ZoomIn className="w-3.5 h-3.5" />
                <span>Zoom In</span>
              </button>
              <button
                type="button"
                onClick={zoomOut}
                title="Zoom Out"
                className={`px-2.5 py-1 text-xs font-bold rounded transition border border-transparent cursor-pointer flex items-center gap-1 ${
                  isDark ? 'hover:bg-slate-700 text-slate-200' : 'hover:bg-white text-slate-700 hover:border-slate-300'
                }`}
              >
                <ZoomOut className="w-3.5 h-3.5" />
                <span>Zoom Out</span>
              </button>
              <button
                type="button"
                onClick={resetZoom}
                title="Reset Tampilan"
                className={`px-2.5 py-1 text-xs font-bold rounded transition border border-transparent cursor-pointer flex items-center gap-1 ${
                  isDark ? 'hover:bg-slate-700 text-slate-200' : 'hover:bg-white text-slate-700 hover:border-slate-300'
                }`}
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            </div>
          )}

          {isExportable && (
            <button
              type="button"
              onClick={exportSvg}
              className="flex items-center gap-1.5 bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-4 py-2 rounded-lg transition shadow-xs cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Unduh SVG</span>
            </button>
          )}
        </div>
      </header>

      {/* Main Content Canvas Area */}
      <div className={`relative w-full overflow-hidden ${heightClass} ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
        
        {/* SVG Workspace Container */}
        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onWheel={handleWheel}
          className={`w-full h-full select-none relative overflow-hidden ${isPanning ? 'cursor-grabbing' : 'cursor-grab'}`}
        >
          <svg
            ref={svgRef}
            width="100%"
            height="100%"
            viewBox="0 0 1400 1100"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Definitions for Gradients & Patterns */}
            <defs>
              <linearGradient id="rektorHeaderGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#111827" />
                <stop offset="100%" stopColor="#1f2937" />
              </linearGradient>

              <linearGradient id="ftHeaderGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#dc2626" />
                <stop offset="100%" stopColor="#991b1b" />
              </linearGradient>

              <clipPath id="rektorCardClip">
                <rect x="420" y="40" width="500" height="150" rx="12" />
              </clipPath>

              <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="130%">
                <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#000000" floodOpacity="0.08" />
              </filter>

              <pattern id="bgGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke={isDark ? '#1e293b' : '#f1f5f9'} strokeWidth="1" />
              </pattern>
            </defs>

            {/* Background Grid */}
            <rect width="100%" height="100%" fill={isDark ? '#020617' : '#ffffff'} />
            <rect width="100%" height="100%" fill="url(#bgGrid)" opacity="0.8" />

            {/* Canvas Main Group (Supports Drag & Zoom) */}
            <g transform={`translate(${pointX}, ${pointY}) scale(${scale})`}>
              
              {/* CONNECTOR LINES GROUP */}
              <g stroke={isDark ? '#94a3b8' : '#111827'} strokeWidth="2" fill="none" strokeLinecap="square" strokeLinejoin="round">
                
                {/* Line: Rektor -> Senat (Dashed Horizontal Line) */}
                <line x1="875" y1="90" x2="1015" y2="90" stroke="#dc2626" strokeWidth="2" strokeDasharray="5,4" />

                {/* Main Vertical Spine from Rektor Downwards */}
                <line x1="670" y1="185" x2="670" y2="670" />

                {/* Horizontal Bus for Kesekretariatan & LPM */}
                <line x1="260" y1="265" x2="1080" y2="265" />
                <line x1="260" y1="265" x2="260" y2="230" />
                <line x1="1080" y1="265" x2="1080" y2="230" />

                {/* Horizontal Bus for 7 Biro / Lembaga Units */}
                <line x1="95" y1="340" x2="1145" y2="340" />
                
                {/* Vertical Drops to the 7 Biro / Lembaga Cards */}
                <line x1="95" y1="340" x2="95" y2="370" />
                <line x1="270" y1="340" x2="270" y2="370" />
                <line x1="445" y1="340" x2="445" y2="370" />
                <line x1="620" y1="340" x2="620" y2="370" />
                <line x1="795" y1="340" x2="795" y2="370" />
                <line x1="970" y1="340" x2="970" y2="370" />
                <line x1="1145" y1="340" x2="1145" y2="370" />

                {/* Vertical Drops to Sub-Biro Cards */}
                <line x1="795" y1="440" x2="795" y2="480" />
                <line x1="970" y1="440" x2="970" y2="480" />

                {/* Symmetrical Vertical Lines for Fakultas Teknik & Sub-Prodis */}
                <line x1="670" y1="685" x2="670" y2="725" />
                <line x1="670" y1="775" x2="670" y2="795" />
                <line x1="670" y1="845" x2="670" y2="865" />
                <line x1="670" y1="915" x2="670" y2="950" />

                {/* Line from Fakultas Teknik Container Down to Kelompok Dosen */}
                <line x1="670" y1="950" x2="670" y2="1015" />
              </g>

              {/* NODES GROUP */}
              <g>
                
                {/* ================= 1. REKTOR & WAKIL REKTOR ================= */}
                <g
                  className="node-card cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
                  onClick={() => selectNode('Rektor & Wakil Rektor', 'Pimpinan Tertinggi Universitas', 'Memimpin penyelenggaraan pendidikan, penelitian, dan pengabdian kepada masyarakat.')}
                >
                  <rect x="420" y="40" width="500" height="150" rx="12" fill={isDark ? '#0f172a' : '#ffffff'} stroke={isDark ? '#334155' : '#111827'} strokeWidth="2" filter="url(#cardShadow)" />
                  
                  {/* Header Bar clipped inside rounded card */}
                  <g clipPath="url(#rektorCardClip)">
                    <rect x="420" y="40" width="500" height="70" fill="url(#rektorHeaderGrad)" />
                    <rect x="420" y="90" width="500" height="20" fill="url(#rektorHeaderGrad)" />
                    <rect x="420" y="40" width="500" height="4" fill="#dc2626" />
                  </g>
                  
                  <text x="670" y="65" textAnchor="middle" fill="#ffffff" fontSize="18" fontWeight="800" letterSpacing="3">REKTOR</text>
                  <text x="670" y="88" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="700">{rektorName}</text>

                  {/* Divider Lines */}
                  <line x1="420" y1="110" x2="920" y2="110" stroke={isDark ? '#334155' : '#e5e7eb'} strokeWidth="1.5" />
                  <line x1="586" y1="110" x2="586" y2="190" stroke={isDark ? '#334155' : '#e5e7eb'} strokeWidth="1.5" />
                  <line x1="753" y1="110" x2="753" y2="190" stroke={isDark ? '#334155' : '#e5e7eb'} strokeWidth="1.5" />

                  <text x="503" y="130" textAnchor="middle" fill="#dc2626" fontSize="10" fontWeight="800">WAKIL REKTOR I</text>
                  <text x="503" y="146" textAnchor="middle" fill={isDark ? '#f8fafc' : '#111827'} fontSize="9" fontWeight="700">{wr1Name}</text>
                  <text x="503" y="162" textAnchor="middle" fill={isDark ? '#94a3b8' : '#6b7280'} fontSize="9" fontWeight="500">Bid. Akademik</text>

                  <text x="670" y="130" textAnchor="middle" fill="#dc2626" fontSize="10" fontWeight="800">WAKIL REKTOR II</text>
                  <text x="670" y="146" textAnchor="middle" fill={isDark ? '#f8fafc' : '#111827'} fontSize="9" fontWeight="700">{wr2Name}</text>
                  <text x="670" y="162" textAnchor="middle" fill={isDark ? '#94a3b8' : '#6b7280'} fontSize="9" fontWeight="500">Bid. Keuangan & Umum</text>

                  <text x="836" y="130" textAnchor="middle" fill="#dc2626" fontSize="10" fontWeight="800">WAKIL REKTOR III</text>
                  <text x="836" y="146" textAnchor="middle" fill={isDark ? '#f8fafc' : '#111827'} fontSize="9" fontWeight="700">{wr3Name}</text>
                  <text x="836" y="162" textAnchor="middle" fill={isDark ? '#94a3b8' : '#6b7280'} fontSize="9" fontWeight="500">Bid. Kemahasiswaan</text>
                </g>

                {/* ================= 2. SENAT UNIVERSITAS ================= */}
                <g
                  className="node-card cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
                  onClick={() => selectNode('Senat Universitas', 'Badan Pertimbangan & Pengawasan Akademik', 'Memberikan pertimbangan dan melakukan pengawasan kebijakan akademik Rektor.')}
                >
                  <rect x="1015" y="45" width="220" height="90" rx="10" fill={isDark ? '#0f172a' : '#ffffff'} stroke="#dc2626" strokeWidth="2" filter="url(#cardShadow)" />
                  <text x="1125" y="85" textAnchor="middle" fill={isDark ? '#f8fafc' : '#111827'} fontSize="14" fontWeight="800" letterSpacing="1">SENAT UNIVERSITAS</text>
                </g>

                {/* ================= 3. KESEKRETARIATAN & LPM ================= */}
                {/* Kesekretariatan */}
                <g
                  className="node-card cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
                  onClick={() => selectNode('Kesekretariatan', 'Unsur Administrasi Pusat', 'Mengelola administrasi persuratan, TI Universitas, dan pelaporan EPSBED.')}
                >
                  <rect x="130" y="170" width="260" height="60" rx="8" fill={isDark ? '#0f172a' : '#ffffff'} stroke={isDark ? '#334155' : '#111827'} strokeWidth="1.5" filter="url(#cardShadow)" />
                  <text x="260" y="193" textAnchor="middle" fill="#dc2626" fontSize="12" fontWeight="800">KESEKRETARIATAN</text>
                  <text x="260" y="212" textAnchor="middle" fill={isDark ? '#94a3b8' : '#4b5563'} fontSize="10" fontWeight="600">• TI UNIVERSITAS   • EPSBED</text>
                </g>

                {/* Ka. Lembaga Penjaminan Mutu */}
                <g
                  className="node-card cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
                  onClick={() => selectNode('Ka. Lembaga Penjaminan Mutu', 'Penjaminan Mutu Internal', 'Mengawal standar mutu akademik & sertifikasi ISO 9001:2008.')}
                >
                  <rect x="950" y="170" width="260" height="60" rx="8" fill={isDark ? '#0f172a' : '#ffffff'} stroke={isDark ? '#334155' : '#111827'} strokeWidth="1.5" filter="url(#cardShadow)" />
                  <text x="1080" y="193" textAnchor="middle" fill={isDark ? '#f8fafc' : '#111827'} fontSize="11" fontWeight="800">KA. LEMBAGA PENJAMINAN MUTU</text>
                  <text x="1080" y="212" textAnchor="middle" fill="#dc2626" fontSize="10" fontWeight="700">ISO 9001:2008</text>
                </g>

                {/* ================= 4. 7 BIRO / LEMBAGA CARDS ================= */}
                {/* 1. Lembaga Manajemen */}
                <g
                  className="node-card cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
                  onClick={() => selectNode('Lembaga Manajemen', 'Unsur Pelaksana Teknis', 'Mengelola pengembangan bisnis & tata kelola manajemen.')}
                >
                  <rect x="15" y="370" width="160" height="70" rx="8" fill={isDark ? '#0f172a' : '#ffffff'} stroke={isDark ? '#334155' : '#111827'} strokeWidth="1.5" filter="url(#cardShadow)" />
                  <text x="95" y="404" textAnchor="middle" fill={isDark ? '#f8fafc' : '#111827'} fontSize="10" fontWeight="800">LEMBAGA</text>
                  <text x="95" y="419" textAnchor="middle" fill={isDark ? '#f8fafc' : '#111827'} fontSize="10" fontWeight="800">MANAJEMEN</text>
                </g>

                {/* 2. Pusat Pengkajian Keuangan */}
                <g
                  className="node-card cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
                  onClick={() => selectNode('Pusat Pengkajian Keuangan Region & Daerah', 'Lembaga Kajian', 'Melaksanakan studi & kajian tata kelola keuangan daerah.')}
                >
                  <rect x="190" y="370" width="160" height="70" rx="8" fill={isDark ? '#0f172a' : '#ffffff'} stroke={isDark ? '#334155' : '#111827'} strokeWidth="1.5" filter="url(#cardShadow)" />
                  <text x="270" y="396" textAnchor="middle" fill="#dc2626" fontSize="9" fontWeight="800">PUSAT PENGKAJIAN</text>
                  <text x="270" y="410" textAnchor="middle" fill={isDark ? '#f8fafc' : '#111827'} fontSize="10" fontWeight="800">KEUANGAN</text>
                  <text x="270" y="424" textAnchor="middle" fill={isDark ? '#94a3b8' : '#4b5563'} fontSize="9" fontWeight="600">REGION & DAERAH</text>
                </g>

                {/* 3. Ka. Bag. Perpustakaan */}
                <g
                  className="node-card cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
                  onClick={() => selectNode('Ka. Bag. Perpustakaan', 'Unit Pelayanan Teknis', 'Menyediakan perpustakaan & literatur akademik.')}
                >
                  <rect x="365" y="370" width="160" height="70" rx="8" fill={isDark ? '#0f172a' : '#ffffff'} stroke={isDark ? '#334155' : '#111827'} strokeWidth="1.5" filter="url(#cardShadow)" />
                  <text x="445" y="404" textAnchor="middle" fill={isDark ? '#f8fafc' : '#111827'} fontSize="10" fontWeight="800">KA. BAG.</text>
                  <text x="445" y="419" textAnchor="middle" fill={isDark ? '#f8fafc' : '#111827'} fontSize="10" fontWeight="800">PERPUSTAKAAN</text>
                </g>

                {/* 4. Ka. LPPM */}
                <g
                  className="node-card cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
                  onClick={() => selectNode('Ka. LPPM', 'Lembaga Penelitian & Pengabdian', 'Mengordinasikan kegiatan riset dan pengabdian masyarakat.')}
                >
                  <rect x="540" y="370" width="160" height="70" rx="8" fill={isDark ? '#0f172a' : '#ffffff'} stroke={isDark ? '#334155' : '#111827'} strokeWidth="1.5" filter="url(#cardShadow)" />
                  <text x="620" y="411" textAnchor="middle" fill={isDark ? '#f8fafc' : '#111827'} fontSize="12" fontWeight="800">KA. LPPM</text>
                </g>

                {/* 5. Ka. Biro Akademik */}
                <g
                  className="node-card cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
                  onClick={() => selectNode('Ka. Biro Akademik', 'Unsur Pelaksana Administrasi Akademik', 'Mengelola administrasi perkuliahan dan kemahasiswaan.')}
                >
                  <rect x="715" y="370" width="160" height="70" rx="8" fill={isDark ? '#0f172a' : '#ffffff'} stroke={isDark ? '#334155' : '#111827'} strokeWidth="1.5" filter="url(#cardShadow)" />
                  <text x="795" y="404" textAnchor="middle" fill={isDark ? '#f8fafc' : '#111827'} fontSize="10" fontWeight="800">KA. BIRO</text>
                  <text x="795" y="419" textAnchor="middle" fill={isDark ? '#f8fafc' : '#111827'} fontSize="10" fontWeight="800">AKADEMIK</text>
                </g>
                {/* Sub: Ka. Bag. Akademik */}
                <g
                  className="node-card cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
                  onClick={() => selectNode('Ka. Bag. Akademik', 'Sub-bagian Biro Akademik', 'Pelaksanaan teknis administrasi akademik.')}
                >
                  <rect x="715" y="480" width="160" height="60" rx="8" fill={isDark ? '#1e293b' : '#f8fafc'} stroke="#dc2626" strokeWidth="1.5" filter="url(#cardShadow)" />
                  <text x="795" y="508" textAnchor="middle" fill={isDark ? '#f8fafc' : '#111827'} fontSize="10" fontWeight="800">KA. BAG.</text>
                  <text x="795" y="522" textAnchor="middle" fill="#dc2626" fontSize="10" fontWeight="700">AKADEMIK</text>
                </g>

                {/* 6. Ka. Biro Umum & Kepegawaian */}
                <g
                  className="node-card cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
                  onClick={() => selectNode('Ka. Biro Umum & Kepegawaian', 'Unsur Administrasi Umum', 'Mengelola sarana prasarana dan sumber daya manusia.')}
                >
                  <rect x="890" y="370" width="160" height="70" rx="8" fill={isDark ? '#0f172a' : '#ffffff'} stroke={isDark ? '#334155' : '#111827'} strokeWidth="1.5" filter="url(#cardShadow)" />
                  <text x="970" y="399" textAnchor="middle" fill={isDark ? '#f8fafc' : '#111827'} fontSize="10" fontWeight="800">KA. BIRO</text>
                  <text x="970" y="413" textAnchor="middle" fill={isDark ? '#f8fafc' : '#111827'} fontSize="10" fontWeight="800">UMUM DAN</text>
                  <text x="970" y="427" textAnchor="middle" fill={isDark ? '#f8fafc' : '#111827'} fontSize="9" fontWeight="800">KEPEGAWAIAN</text>
                </g>
                {/* Sub: Ka. Bag. Umum Universitas */}
                <g
                  className="node-card cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
                  onClick={() => selectNode('Ka. Bag. Umum Universitas', 'Sub-bagian Biro Umum', 'Pelaksanaan urusan rumah tangga dan perlengkapan.')}
                >
                  <rect x="890" y="480" width="160" height="60" rx="8" fill={isDark ? '#1e293b' : '#f8fafc'} stroke="#dc2626" strokeWidth="1.5" filter="url(#cardShadow)" />
                  <text x="970" y="508" textAnchor="middle" fill={isDark ? '#f8fafc' : '#111827'} fontSize="9" fontWeight="800">KA. BAG. UMUM</text>
                  <text x="970" y="522" textAnchor="middle" fill="#dc2626" fontSize="10" fontWeight="700">UNIVERSITAS</text>
                </g>

                {/* 7. Ka. Biro Keuangan */}
                <g
                  className="node-card cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
                  onClick={() => selectNode('Ka. Biro Keuangan', 'Unsur Pelaksana Keuangan', 'Mengelola anggaran, perbendaharaan, dan akuntansi universitas.')}
                >
                  <rect x="1065" y="370" width="160" height="70" rx="8" fill={isDark ? '#0f172a' : '#ffffff'} stroke={isDark ? '#334155' : '#111827'} strokeWidth="1.5" filter="url(#cardShadow)" />
                  <text x="1145" y="404" textAnchor="middle" fill={isDark ? '#f8fafc' : '#111827'} fontSize="10" fontWeight="800">KA. BIRO</text>
                  <text x="1145" y="419" textAnchor="middle" fill={isDark ? '#f8fafc' : '#111827'} fontSize="10" fontWeight="800">KEUANGAN</text>
                </g>

                {/* ================= 5. FAKULTAS TEKNIK ================= */}
                <g>
                  {/* Outer Card Boundary for FT (Centered at x=670) */}
                  <rect x="440" y="640" width="460" height="290" rx="12" fill={isDark ? '#0f172a' : '#fafafa'} stroke={isDark ? '#334155' : '#111827'} strokeWidth="2" filter="url(#cardShadow)" />
                  
                  {/* Header Dekan Fakultas Teknik */}
                  <g
                    className="node-card cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
                    onClick={() => selectNode('Dekan Fakultas Teknik', 'Pimpinan Unsur Pelaksana Akademik Fakultas', 'Memimpin penyelenggaraan pendidikan tinggi di lingkup Fakultas Teknik.')}
                  >
                    <rect x="490" y="625" width="360" height="65" rx="10" fill="url(#ftHeaderGrad)" stroke={isDark ? '#475569' : '#111827'} strokeWidth="1.5" />
                    <text x="670" y="647" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="700" letterSpacing="1">DEKAN FAKULTAS TEKNIK</text>
                    <text x="670" y="668" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="800">{dekanName}</text>
                  </g>

                  {/* Sub Program Studi 1: Teknik Informatika (Centered) */}
                  <g
                    className="node-card cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
                    onClick={() => selectNode('Ka. Prodi Teknik Informatika', 'Program Studi Jenjang S1 & D3', 'Pendidikan & riset rekayasa perangkat lunak, AI, dan komputasi.')}
                  >
                    <rect x="490" y="715" width="360" height="55" rx="8" fill={isDark ? '#1e293b' : '#ffffff'} stroke="#dc2626" strokeWidth="1.5"/>
                    <text x="670" y="734" textAnchor="middle" fill={isDark ? '#94a3b8' : '#6b7280'} fontSize="9" fontWeight="700">KA. PRODI TEKNIK INFORMATIKA (S1 DAN D3)</text>
                    <text x="670" y="753" textAnchor="middle" fill={isDark ? '#f8fafc' : '#111827'} fontSize="11" fontWeight="800">{kaprodiTifName}</text>
                  </g>

                  {/* Sub Program Studi 2: Teknik Elektro (Centered) */}
                  <g
                    className="node-card cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
                    onClick={() => selectNode('Ka. Prodi Teknik Elektro', 'Program Studi Jenjang S1', 'Pendidikan sistem tenaga listrik, elektronika, dan telekomunikasi.')}
                  >
                    <rect x="490" y="785" width="360" height="55" rx="8" fill={isDark ? '#1e293b' : '#ffffff'} stroke="#dc2626" strokeWidth="1.5"/>
                    <text x="670" y="804" textAnchor="middle" fill={isDark ? '#94a3b8' : '#6b7280'} fontSize="9" fontWeight="700">KA. PRODI TEKNIK ELEKTRO (S1)</text>
                    <text x="670" y="823" textAnchor="middle" fill={isDark ? '#f8fafc' : '#111827'} fontSize="11" fontWeight="800">{kaprodiTeName}</text>
                  </g>

                  {/* Sub Program Studi 3: Teknik Mesin (Centered) */}
                  <g
                    className="node-card cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
                    onClick={() => selectNode('Ka. Prodi Teknik Mesin', 'Program Studi Jenjang S1', 'Pendidikan konversi energi, manufaktur, dan perancangan mekanik.')}
                  >
                    <rect x="490" y="855" width="360" height="55" rx="8" fill={isDark ? '#1e293b' : '#ffffff'} stroke="#dc2626" strokeWidth="1.5"/>
                    <text x="670" y="874" textAnchor="middle" fill={isDark ? '#94a3b8' : '#6b7280'} fontSize="9" fontWeight="700">KA. PRODI TEKNIK MESIN (S1)</text>
                    <text x="670" y="893" textAnchor="middle" fill={isDark ? '#f8fafc' : '#111827'} fontSize="11" fontWeight="800">{kaprodiTmName}</text>
                  </g>
                </g>

                {/* ================= 6. KELOMPOK DOSEN ================= */}
                <g
                  className="node-card cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
                  onClick={() => selectNode('Kelompok Dosen', 'Fungsional Akademik', 'Tenaga pengajar dan peneliti yang berada di lingkungan unit kerja akademik.')}
                >
                  <rect x="520" y="1015" width="300" height="50" rx="25" fill="#111827" stroke="#dc2626" strokeWidth="2" filter="url(#cardShadow)" />
                  <text x="670" y="1046" textAnchor="middle" fill="#ffffff" fontSize="14" fontWeight="800" letterSpacing="2">KELOMPOK DOSEN</text>
                </g>

              </g>
            </g>
          </svg>
        </div>

        {/* Unit Details Side Modal / Floating Card */}
        {selectedNode && (
          <div className={`absolute bottom-6 right-6 z-30 w-80 sm:w-96 rounded-2xl p-5 shadow-2xl backdrop-blur-md border transition-all animate-in fade-in slide-in-from-bottom-3 duration-200 ${
            isDark ? 'bg-slate-900/95 border-slate-700 text-white' : 'bg-white/95 border-slate-300 text-slate-900'
          }`}>
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-7 bg-red-600 rounded-xs" />
                <div>
                  <h3 className={`text-base font-bold leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {selectedNode.title}
                  </h3>
                  <p className="text-xs text-red-600 font-semibold">
                    {selectedNode.category}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedNode(null)}
                className={`p-1 rounded-lg font-bold transition-colors cursor-pointer ${
                  isDark ? 'text-slate-400 hover:text-white hover:bg-slate-800' : 'text-slate-400 hover:text-slate-800 hover:bg-slate-100'
                }`}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className={`text-xs leading-relaxed mb-4 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              {selectedNode.description}
            </p>

            <div className={`pt-3 border-t flex justify-between items-center text-xs ${
              isDark ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-400'
            }`}>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>Status: <strong className="text-emerald-600 font-medium">Aktif</strong></span>
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StrukturBlock;
