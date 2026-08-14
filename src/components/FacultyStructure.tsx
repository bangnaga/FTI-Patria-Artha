import React, { useState, useCallback, useMemo } from 'react';
import { 
  ReactFlow, 
  Background, 
  Controls, 
  MiniMap, 
  Handle, 
  Position, 
  useNodesState, 
  useEdgesState, 
  Node, 
  Edge,
  BackgroundVariant
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { 
  Building2, 
  UserCheck, 
  Award, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight, 
  ShieldCheck, 
  Sparkles, 
  Cpu, 
  Laptop, 
  Wrench, 
  X,
  Briefcase
} from 'lucide-react';

export interface FacultyLeader {
  id: string;
  name: string;
  role: string;
  category: 'dekanat' | 'kaprodi' | 'lembaga' | 'dosen';
  department?: string;
  photo?: string;
  nidn?: string;
  email?: string;
  office?: string;
  responsibilities: string[];
  education?: string[];
}

export const FACULTY_STRUCTURE_DATA: FacultyLeader[] = [
  {
    id: 'rektor',
    name: 'Rektor Universitas Patria Artha',
    role: 'Rektor',
    category: 'dekanat',
    department: 'Rektorat Universitas',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
    email: 'rektorat@patria-artha.ac.id',
    office: 'Gedung Rektorat Lt. 3',
    responsibilities: [
      'Penanggung jawab dan pimpinan tertinggi penyelenggaraan Perguruan Tinggi.',
      'Menetapkan kebijakan strategis pengembangan institusi, kurikulum, dan tata kelola universitas.',
      'Membina hubungan kemitraan dengan kementerian, pemerintah daerah, dan mitra industri.'
    ],
    education: ['Doktor (S3) Kepemimpinan Pendidikan']
  },
  {
    id: 'dekan',
    name: 'Dr. Andi Nur Putri, S.Pd., M.T.',
    role: 'Dekan',
    category: 'dekanat',
    department: 'Fakultas Teknik & Informatika',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    nidn: '0912048501',
    email: 'dekan.fti@patria-artha.ac.id',
    office: 'Gedung Rektorat & FTI Lt. 2, Ruang Dekan',
    responsibilities: [
      'Memimpin penyelenggaraan pendidikan, penelitian, dan pengabdian masyarakat di FTI Patria Artha.',
      'Mengembangkan kerja sama strategis nasional & internasional dengan industri teknologi.',
      'Menjamin mutu akademik dan akreditasi seluruh Program Studi di lingkungan Fakultas Teknik dan Informatika.'
    ],
    education: [
      'S3 Doktor Pendidikan & Teknologi',
      'S2 Magister Teknik (M.T.)',
      'S1 Sarjana Pendidikan (S.Pd.)'
    ]
  },
  {
    id: 'upm',
    name: 'Unit Penjaminan Mutu (UPM)',
    role: 'UPM',
    category: 'lembaga',
    department: 'Gugus Mutu FTI',
    photo: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400',
    email: 'upm.fti@patria-artha.ac.id',
    office: 'Gedung FTI Lt. 2, Ruang Penjaminan Mutu',
    responsibilities: [
      'Mengkoordinasikan audit mutu internal (AMI) bidang akademik & operasional fakultas.',
      'Mengevaluasi Kinerja Dosen dan ketercapaian Outcome Based Education (OBE).',
      'Mendampingi proses akreditasi Program Studi BAN-PT & LAM Teknik / LAM Infokom.'
    ],
    education: ['Tim Sertifikasi Auditor Mutu Internal']
  },
  {
    id: 'sekfak',
    name: 'Suandi, S.Kep., M.M.',
    role: 'Sek Fak (Sekretaris Fakultas)',
    category: 'dekanat',
    department: 'Fakultas Teknik & Informatika',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400',
    nidn: '0905088203',
    email: 'sekretaris.fti@patria-artha.ac.id',
    office: 'Gedung FTI Lt. 2, Ruang Tata Usaha & Sekretariat',
    responsibilities: [
      'Mengkoordinasikan administrasi akademik, keuangan, dan sumber daya manusia tingkat fakultas.',
      'Mengelola tata kelola pelayanan mahasiswa, surat-menyurat, serta arsip resmi fakultas.',
      'Mendampingi Dekan dalam evaluasi kinerja operasional fakultas harian.'
    ],
    education: [
      'S2 Magister Manajemen (M.M.)',
      'S1 Sarjana Keperawatan (S.Kep.)'
    ]
  },
  {
    id: 'prodi-te',
    name: 'Ir. Irwan Syarif, S.Pd., M.T.',
    role: 'Prodi Teknik Elektro (TE)',
    category: 'kaprodi',
    department: 'Program Studi S1 Teknik Elektro',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
    nidn: '0915117802',
    email: 'elektro@patria-artha.ac.id',
    office: 'Gedung FTI Lt. 1, Ruang Kaprodi Teknik Elektro',
    responsibilities: [
      'Menyusun & mengevaluasi kurikulum berbasis OBE bidang Teknik Elektro & Sistem Tenaga.',
      'Mengelola kegiatan operasional perkuliahan, praktikum laboratorium mikroprosesor & IoT.',
      'Memfasilitasi riset dosen dan mahasiswa di bidang energi terbarukan dan otomasi.'
    ],
    education: [
      'Insinyur Profesional (Ir.)',
      'S2 Magister Teknik Elektro (M.T.)',
      'S1 Sarjana Pendidikan Teknik (S.Pd.)'
    ]
  },
  {
    id: 'prodi-ti',
    name: 'Dayanti, S.Kom., M.Kom.',
    role: 'Prodi Teknik Informatika (TI)',
    category: 'kaprodi',
    department: 'Program Studi S1 Teknik Informatika',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
    nidn: '0922038704',
    email: 'informatika@patria-artha.ac.id',
    office: 'Gedung FTI Lt. 2, Ruang Kaprodi Teknik Informatika',
    responsibilities: [
      'Memimpin pengembangan kurikulum merdeka belajar riset AI, Software Engineering & Cyber Security.',
      'Mengkoordinasikan pelaksanaan Tugas Akhir, Sertifikasi Kompetensi, dan Magang Industri IT.',
      'Meningkatkan pencapaian akreditasi prodi dan luaran publikasi ilmiah berkala.'
    ],
    education: [
      'S2 Magister Ilmu Komputer / Informatika (M.Kom.)',
      'S1 Sarjana Komputer (S.Kom.)'
    ]
  },
  {
    id: 'prodi-tm',
    name: 'Ir. Muhammd Arham, S.Pd., M.T.',
    role: 'Prodi Teknik Mesin (TM)',
    category: 'kaprodi',
    department: 'Program Studi S1 Teknik Mesin',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    nidn: '0908108001',
    email: 'mesin@patria-artha.ac.id',
    office: 'Gedung FTI Lt. 1, Ruang Kaprodi Teknik Mesin',
    responsibilities: [
      'Pengembangan proses pembelajaran bidang Konstruksi Mesin, Konversi Energi & Manufaktur.',
      'Pengelolaan laboratorium bengkel manufaktur, perancangan CAD/CAM, dan CNC.',
      'Pembimbingan program kemitraan industri manufaktur dan otomotif daerah.'
    ],
    education: [
      'Insinyur Profesional (Ir.)',
      'S2 Magister Teknik Mesin (M.T.)',
      'S1 Sarjana Pendidikan Teknik Mesin (S.Pd.)'
    ]
  },
  {
    id: 'dosen',
    name: 'Dosen & Tenaga Pengajar FTI',
    role: 'Dosen',
    category: 'dosen',
    department: 'Seluruh Program Studi FTI',
    photo: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=400',
    email: 'dosen.fti@patria-artha.ac.id',
    office: 'Ruang Dosen Bersama FTI Lt. 1 & 2',
    responsibilities: [
      'Melaksanakan Tri Dharma Perguruan Tinggi (Pengajaran, Penelitian, dan Pengabdian kepada Masyarakat).',
      'Membimbing mahasiswa dalam perkuliahan, praktikum laboratorium, dan tugas akhir/skripsi.',
      'Menghasilkan publikasi ilmiah bereputasi nasional dan internasional.'
    ],
    education: ['Magister (S2) & Doktor (S3) Bidang Teknik & Komputer']
  }
];

// Custom React Flow Node Component matching the exact style of the user provided diagram
const CustomOrgNode = ({ data }: { data: any }) => {
  const getTopBarColor = () => {
    switch (data.colorTheme) {
      case 'green':
        return 'bg-[#76A882] border-[#5E916B]';
      case 'grey':
        return 'bg-[#9CA3AF] border-[#6B7280]';
      case 'blue':
      default:
        return 'bg-[#5B8FB9] border-[#41729F]';
    }
  };

  const getCardBg = () => {
    switch (data.colorTheme) {
      case 'green':
        return 'bg-gradient-to-b from-[#E2F0D9] to-[#D5E8C9] border-[#92C19C] text-[#1E3A23]';
      case 'grey':
        return 'bg-gradient-to-b from-[#EAEAEA] to-[#DCDCDC] border-[#B0B0B0] text-[#222222]';
      case 'blue':
      default:
        return 'bg-gradient-to-b from-[#E8F1F9] to-[#D3E3F2] border-[#91B3D5] text-[#0F2840]';
    }
  };

  return (
    <div className={`relative rounded-xl border-2 shadow-md hover:shadow-xl transition-all duration-200 ${getCardBg()} w-[200px] sm:w-[220px] overflow-hidden group cursor-pointer`}>
      {/* Top Banner Header like the user diagram image */}
      <div className={`h-3.5 w-full ${getTopBarColor()} border-b`} />

      {/* React Flow Handles */}
      {data.hasTopTarget && (
        <Handle 
          type="target" 
          position={Position.Top} 
          id="top" 
          className="!bg-[#334155] !w-2.5 !h-2.5 !border-2 !border-white" 
        />
      )}
      {data.hasLeftTarget && (
        <Handle 
          type="target" 
          position={Position.Left} 
          id="left" 
          className="!bg-[#334155] !w-2.5 !h-2.5 !border-2 !border-white" 
        />
      )}

      <div className="p-3 sm:p-3.5 text-center flex flex-col items-center justify-center min-h-[58px]">
        <h3 className="font-serif font-bold text-sm sm:text-base tracking-tight leading-tight">
          {data.label}
        </h3>
        {data.sublabel && (
          <p className="text-[11px] font-sans text-slate-700 mt-1 font-semibold leading-tight">
            {data.sublabel}
          </p>
        )}
      </div>

      {data.hasBottomSource && (
        <Handle 
          type="source" 
          position={Position.Bottom} 
          id="bottom" 
          className="!bg-[#334155] !w-2.5 !h-2.5 !border-2 !border-white" 
        />
      )}
      {data.hasRightSource && (
        <Handle 
          type="source" 
          position={Position.Right} 
          id="right" 
          className="!bg-[#334155] !w-2.5 !h-2.5 !border-2 !border-white" 
        />
      )}
    </div>
  );
};

export const FacultyStructure: React.FC = () => {
  const [selectedLeader, setSelectedLeader] = useState<FacultyLeader | null>(null);
  const [viewType, setViewType] = useState<'reactflow' | 'cards'>('reactflow');

  // React Flow initial node definition laying out exactly as user image
  const initialNodes: Node[] = useMemo(() => [
    {
      id: 'rektor',
      type: 'orgNode',
      position: { x: 350, y: 20 },
      data: { 
        label: 'Rektor', 
        colorTheme: 'blue',
        hasBottomSource: true,
        leaderId: 'rektor'
      }
    },
    {
      id: 'dekan',
      type: 'orgNode',
      position: { x: 350, y: 150 },
      data: { 
        label: 'Dekan', 
        colorTheme: 'blue',
        hasTopTarget: true,
        hasRightSource: true,
        hasBottomSource: true,
        leaderId: 'dekan'
      }
    },
    {
      id: 'upm',
      type: 'orgNode',
      position: { x: 670, y: 150 },
      data: { 
        label: 'UPM', 
        colorTheme: 'blue',
        hasLeftTarget: true,
        leaderId: 'upm'
      }
    },
    {
      id: 'sekfak',
      type: 'orgNode',
      position: { x: 600, y: 275 },
      data: { 
        label: 'Sek Fak', 
        colorTheme: 'blue',
        hasLeftTarget: true,
        leaderId: 'sekfak'
      }
    },
    {
      id: 'prodi-te',
      type: 'orgNode',
      position: { x: 80, y: 390 },
      data: { 
        label: 'Prodi Teknik Elektro (TE)', 
        colorTheme: 'green',
        hasTopTarget: true,
        hasBottomSource: true,
        leaderId: 'prodi-te'
      }
    },
    {
      id: 'prodi-ti',
      type: 'orgNode',
      position: { x: 350, y: 390 },
      data: { 
        label: 'Prodi Teknik Informatika (TI)', 
        colorTheme: 'green',
        hasTopTarget: true,
        hasBottomSource: true,
        leaderId: 'prodi-ti'
      }
    },
    {
      id: 'prodi-tm',
      type: 'orgNode',
      position: { x: 620, y: 390 },
      data: { 
        label: 'Prodi Teknik Mesin (TM)', 
        colorTheme: 'green',
        hasTopTarget: true,
        hasBottomSource: true,
        leaderId: 'prodi-tm'
      }
    },
    {
      id: 'dosen',
      type: 'orgNode',
      position: { x: 350, y: 550 },
      data: { 
        label: 'Dosen', 
        colorTheme: 'grey',
        hasTopTarget: true,
        leaderId: 'dosen'
      }
    }
  ], []);

  // React Flow edges matching line styles from user image
  const initialEdges: Edge[] = useMemo(() => [
    {
      id: 'e-rektor-dekan',
      source: 'rektor',
      sourceHandle: 'bottom',
      target: 'dekan',
      targetHandle: 'top',
      type: 'straight',
      style: { strokeDasharray: '6 6', strokeWidth: 2, stroke: '#2563EB' }
    },
    {
      id: 'e-dekan-upm',
      source: 'dekan',
      sourceHandle: 'right',
      target: 'upm',
      targetHandle: 'left',
      type: 'straight',
      style: { strokeDasharray: '6 6', strokeWidth: 2, stroke: '#2563EB' }
    },
    {
      id: 'e-dekan-sekfak',
      source: 'dekan',
      sourceHandle: 'bottom',
      target: 'sekfak',
      targetHandle: 'left',
      type: 'smoothstep',
      style: { strokeWidth: 2, stroke: '#334155' }
    },
    {
      id: 'e-dekan-prodi-te',
      source: 'dekan',
      sourceHandle: 'bottom',
      target: 'prodi-te',
      targetHandle: 'top',
      type: 'smoothstep',
      style: { strokeWidth: 2, stroke: '#334155' }
    },
    {
      id: 'e-dekan-prodi-ti',
      source: 'dekan',
      sourceHandle: 'bottom',
      target: 'prodi-ti',
      targetHandle: 'top',
      type: 'smoothstep',
      style: { strokeWidth: 2, stroke: '#334155' }
    },
    {
      id: 'e-dekan-prodi-tm',
      source: 'dekan',
      sourceHandle: 'bottom',
      target: 'prodi-tm',
      targetHandle: 'top',
      type: 'smoothstep',
      style: { strokeWidth: 2, stroke: '#334155' }
    },
    {
      id: 'e-prodi-te-dosen',
      source: 'prodi-te',
      sourceHandle: 'bottom',
      target: 'dosen',
      targetHandle: 'top',
      type: 'smoothstep',
      style: { strokeWidth: 2, stroke: '#334155' }
    },
    {
      id: 'e-prodi-ti-dosen',
      source: 'prodi-ti',
      sourceHandle: 'bottom',
      target: 'dosen',
      targetHandle: 'top',
      type: 'smoothstep',
      style: { strokeWidth: 2, stroke: '#334155' }
    },
    {
      id: 'e-prodi-tm-dosen',
      source: 'prodi-tm',
      sourceHandle: 'bottom',
      target: 'dosen',
      targetHandle: 'top',
      type: 'smoothstep',
      style: { strokeWidth: 2, stroke: '#334155' }
    }
  ], []);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const nodeTypes = useMemo(() => ({
    orgNode: CustomOrgNode
  }), []);

  // Handle node click to show detail modal
  const onNodeClick = useCallback((_: React.MouseEvent, node: Node) => {
    const leaderId = node.data?.leaderId as string;
    const found = FACULTY_STRUCTURE_DATA.find(l => l.id === leaderId);
    if (found) {
      setSelectedLeader(found);
    }
  }, []);

  return (
    <section id="organisasi" className="py-16 sm:py-24 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 dark:bg-red-950/60 text-[#9B2C2C] dark:text-red-400 text-xs font-bold mb-3 border border-red-200 dark:border-red-900/60">
            <Briefcase className="w-4 h-4 text-[#9B2C2C] dark:text-red-400" />
            Struktur Organisasi Interactive
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Bagan Organisasi Fakultas Teknik & Informatika
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            Bagan hirarki kepemimpinan fakultas disajikan secara interaktif menggunakan <strong>React Flow</strong>. Klik pada elemen bagan untuk melihat rincian tugas dan pejabat terkait.
          </p>

          {/* View Toggle */}
          <div className="mt-6 inline-flex p-1 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <button
              onClick={() => setViewType('reactflow')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                viewType === 'reactflow'
                  ? 'bg-[#9B2C2C] text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-[#9B2C2C]'
              }`}
            >
              Bagan React Flow
            </button>
            <button
              onClick={() => setViewType('cards')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                viewType === 'cards'
                  ? 'bg-[#9B2C2C] text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-[#9B2C2C]'
              }`}
            >
              Kartu Profil Pimpinan
            </button>
          </div>
        </div>

        {/* REACT FLOW DIAGRAM VIEW */}
        {viewType === 'reactflow' ? (
          <div className="bg-slate-50 dark:bg-slate-950/80 rounded-3xl border border-slate-200 dark:border-slate-800 p-3 sm:p-6 shadow-xl relative overflow-hidden">
            
            {/* Guide hint */}
            <div className="flex items-center justify-between gap-2 mb-3 px-2 text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5 font-medium">
                <Sparkles className="w-4 h-4 text-amber-500 animate-pulse" />
                Gunakan scroll/gesture untuk zoom & geser canvas bagan. Klik kotak untuk detail.
              </span>
              <span className="hidden sm:inline font-mono text-[11px] bg-slate-200 dark:bg-slate-800 px-2 py-0.5 rounded text-slate-700 dark:text-slate-300">
                Powered by React Flow
              </span>
            </div>

            {/* React Flow Container */}
            <div className="w-full h-[620px] sm:h-[680px] bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 relative">
              <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                nodeTypes={nodeTypes}
                onNodeClick={onNodeClick}
                fitView
                fitViewOptions={{ padding: 0.15 }}
                minZoom={0.5}
                maxZoom={1.5}
                proOptions={{ hideAttribution: true }}
              >
                <Background variant={BackgroundVariant.Dots} gap={16} size={1} color="#cbd5e1" />
                <Controls className="!bg-white dark:!bg-slate-800 !border-slate-200 dark:!border-slate-700 !shadow-md" />
                <MiniMap 
                  nodeColor={(node) => {
                    if (node.data?.colorTheme === 'green') return '#86efac';
                    if (node.data?.colorTheme === 'grey') return '#cbd5e1';
                    return '#93c5fd';
                  }}
                  className="!bg-white/90 dark:!bg-slate-800/90 !border-slate-200 dark:!border-slate-700 rounded-lg overflow-hidden shadow-md"
                />
              </ReactFlow>
            </div>

            {/* Legend / Key below diagram */}
            <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded bg-[#5B8FB9] border border-[#41729F]" />
                <span>Pimpinan / Unit Fakultas</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded bg-[#76A882] border border-[#5E916B]" />
                <span>Program Studi (Prodi)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded bg-[#9CA3AF] border border-[#6B7280]" />
                <span>Tenaga Pengajar (Dosen)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-6 border-b-2 border-dashed border-blue-600" />
                <span>Garis Koordinasi / Pimpinan</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-6 border-b-2 border-slate-700" />
                <span>Garis Komando Struktural</span>
              </div>
            </div>

          </div>
        ) : (
          /* CARDS VIEW */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FACULTY_STRUCTURE_DATA.map((leader) => (
              <div
                key={leader.id}
                onClick={() => setSelectedLeader(leader)}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:border-red-500/60 transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <span className={`text-[10px] font-extrabold font-mono px-2.5 py-1 rounded-full uppercase tracking-wider ${
                      leader.category === 'kaprodi' 
                        ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                        : leader.category === 'dosen'
                        ? 'bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-200'
                        : 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300'
                    }`}>
                      {leader.role}
                    </span>
                    {leader.nidn && (
                      <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                        NIDN: {leader.nidn}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={leader.photo}
                      alt={leader.name}
                      className="w-16 h-16 rounded-2xl object-cover border border-slate-200 dark:border-slate-700 shrink-0"
                    />
                    <div>
                      <h3 className="font-extrabold text-slate-900 dark:text-white text-base leading-snug group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                        {leader.name}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
                        {leader.department}
                      </p>
                    </div>
                  </div>

                  {leader.email && (
                    <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-700/80">
                      <div className="flex items-center gap-2">
                        <Mail className="w-3.5 h-3.5 text-red-500 shrink-0" />
                        <span className="truncate">{leader.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span className="truncate">{leader.office}</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between text-xs font-bold text-red-600 dark:text-red-400">
                  <span>Rincian Wewenang & Detail</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* DETAIL MODAL FOR SELECTED LEADER OR UNIT */}
        {selectedLeader && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <div className="relative w-full max-w-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden p-6 sm:p-8 space-y-6">
              
              {/* Modal Header */}
              <div className="flex items-start justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
                <div className="flex items-center gap-4">
                  <img
                    src={selectedLeader.photo}
                    alt={selectedLeader.name}
                    className="w-16 h-16 rounded-2xl object-cover border-2 border-red-500/50 shadow-md"
                  />
                  <div>
                    <span className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-wider block">
                      {selectedLeader.role}
                    </span>
                    <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
                      {selectedLeader.name}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      {selectedLeader.department}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedLeader(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Responsibilities */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-red-500" /> Tugas & Wewenang Utama
                </h4>
                <ul className="space-y-1.5">
                  {selectedLeader.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                      <span className="text-red-500 font-bold">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Education Background */}
              {selectedLeader.education && selectedLeader.education.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-amber-500" /> Kualifikasi & Pendidikan
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedLeader.education.map((edu, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium">
                        {edu}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Office & Contact */}
              {selectedLeader.office && (
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                    <span><strong>Lokasi Kantor:</strong> {selectedLeader.office}</span>
                  </div>
                  {selectedLeader.email && (
                    <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                      <Mail className="w-4 h-4 text-rose-500 shrink-0" />
                      <span><strong>Email Resmi:</strong> {selectedLeader.email}</span>
                    </div>
                  )}
                </div>
              )}

              {/* Modal Footer */}
              <div className="flex justify-end pt-2">
                <button
                  onClick={() => setSelectedLeader(null)}
                  className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-xs transition-colors shadow-sm"
                >
                  Tutup Profil
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
