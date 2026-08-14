import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import { 
  Target, 
  Award, 
  ShieldCheck, 
  Brain, 
  Code, 
  Cpu, 
  CheckCircle, 
  ChevronRight, 
  Sparkles,
  Info,
  X
} from 'lucide-react';
import { SpecializationType } from '../types';

export const AcademicProfile: React.FC = () => {
  const [selectedSpec, setSelectedSpec] = useState<SpecializationType | null>(null);

  const [visiMisiData, setVisiMisiData] = useState<any>({
    visi: "Menjadi Fakultas Teknik & Informatika Unggul, Inovatif, dan Berdaya Saing Global Berbasis Technopreneurship dan Teknologi Cerdas pada Tahun 2030.",
    misi: [
      "Menyelenggarakan pendidikan tinggi bidang teknik & informatika berkualitas tinggi berbasis kurikulum OBE (Outcome-Based Education).",
      "Melakukan riset dan inovasi terapan unggulan di bidang AI, Cyber Security, Software Engineering, dan Internet of Things.",
      "Mengimplementasikan pengabdian masyarakat berbasis teknologi terpat guna bagi industri, UMKM, dan masyarakat luas.",
      "Membangun jejaring kemitraan strategis dengan industri teknologi nasional maupun internasional."
    ],
    fokusKeahlian: [
      { code: 'AI', title: 'Artificial Intelligence & Big Data', description: 'Pengembangan model machine learning, deep learning, kecerdasan buatan, dan analitik data terstruktur.' },
      { code: 'RPL', title: 'Software Engineering & Cloud', description: 'Arsitektur perangkat lunak modern, aplikasi web/mobile full-stack, microservices, dan cloud computing.' },
      { code: 'CyberSecurity', title: 'Cyber Security & Forensics', description: 'Keamanan jaringan, ethical hacking, analisis kerentanan sistem, kriptografi, dan analisis insiden siber.' },
      { code: 'IoT', title: 'IoT & Embedded Robotics', description: 'Sistem terbenam (embedded system), mikrokontroler, jaringan sensor nirkabel, dan otomatisasi industri.' }
    ]
  });

  const [accreditationData, setAccreditationData] = useState<any>({
    nasional: { status: "Unggul (A)", skNumber: "048/SK/LAM-INFOKOM/Akred/S1/XII/2024" },
    internasional: [
      { badan: "ASIIN Germany Accreditation", status: "Accredited", year: "2024-2029" },
      { badan: "IABEE Provisionally Accredited", status: "Full Member", year: "2025" }
    ]
  });

  useEffect(() => {
    api.getSiteData().then(data => {
      if (data && data.VISI_MISI_DATA) setVisiMisiData(data.VISI_MISI_DATA);
      if (data && data.ACCREDITATION_DATA) setAccreditationData(data.ACCREDITATION_DATA);
    }).catch(err => console.warn('AcademicProfile siteData fetch error:', err));
  }, []);

  const getSpecIcon = (code: SpecializationType) => {
    switch (code) {
      case 'AI': return <Brain className="w-6 h-6 text-blue-500" />;
      case 'RPL': return <Code className="w-6 h-6 text-purple-500" />;
      case 'CyberSecurity': return <ShieldCheck className="w-6 h-6 text-emerald-500" />;
      case 'IoT': return <Cpu className="w-6 h-6 text-amber-500" />;
      default: return <Brain className="w-6 h-6 text-blue-500" />;
    }
  };

  const getSpecDetails = (code: SpecializationType) => {
    switch (code) {
      case 'AI':
        return {
          title: 'Artificial Intelligence & Data Science',
          skills: ['Deep Learning', 'PyTorch & TensorFlow', 'Natural Language Processing', 'Computer Vision', 'Generative AI', 'Big Data Engineering'],
          careers: ['AI Research Engineer', 'Machine Learning Developer', 'Data Scientist', 'NLP Engineer', 'Computer Vision Specialist'],
          labs: ['Lab Artificial Intelligence & Big Data'],
          desc: 'Spesialisasi ini membekali mahasiswa dengan fondasi matematika komputasi dan teknik AI mutakhir untuk membangun agen cerdas, model pemroses bahasa alami (LLM), serta visi komputer otomatis.'
        };
      case 'RPL':
        return {
          title: 'Software Engineering & Cloud Computing',
          skills: ['Microservices Architecture', 'React & TypeScript', 'Node.js/Express', 'Docker & Kubernetes', 'Agile Scrum', 'CI/CD Pipelines'],
          careers: ['Full-Stack Software Engineer', 'Backend Architect', 'DevOps & Cloud Engineer', 'Mobile App Developer', 'Software QA Lead'],
          labs: ['Lab Rekayasa Perangkat Lunak & Web'],
          desc: 'Fokus pada prinsip perancangan perangkat lunak bersih (clean code), arsitektur terdistribusi, sistem mikroservis terukur, serta otomatisasi deployment pada cloud.'
        };
      case 'CyberSecurity':
        return {
          title: 'Cyber Security & Network Infrastructure',
          skills: ['Ethical Hacking & PenTesting', 'OWASP Security', 'Network Forensics', 'Cryptography Applications', 'Cloud Security (AWS/GCP)', 'SIEM Operations'],
          careers: ['Cyber Security Analyst', 'Ethical Hacker / PenTester', 'Information Security Engineer', 'SOC Analyst', 'Network Security Architect'],
          labs: ['Lab Cyber Security & Network Operations'],
          desc: 'Mahasiswa dilatih mengamankan infrastruktur jaringan dan sistem informasi dari ancaman siber, melakukan analisis kerentanan, serta merespons insiden serangan siber.'
        };
      case 'IoT':
        return {
          title: 'Internet of Things & Embedded Systems',
          skills: ['ESP32 & Raspberry Pi', 'MQTT & Cloud IoT Protocol', 'Sensor Integration & LiDAR', 'ROS2 Robotics', 'PCB Hardware Design', 'Edge AI'],
          careers: ['IoT Solutions Architect', 'Embedded Firmware Engineer', 'Robotics Systems Developer', 'Smart City Engineer', 'Hardware Product Specialist'],
          labs: ['Lab Internet of Things & Robotics'],
          desc: 'Mengintegrasikan perangkat keras mikrokontroler, jaringan sensor nirkabel, dan kecerdasan buatan di tingkat perangkat fisik (Edge AI) untuk aplikasi otomasi dan robotika.'
        };
      default:
        return null;
    }
  };

  const activeSpecData = selectedSpec ? getSpecDetails(selectedSpec) : null;

  return (
    <section id="profil" className="py-20 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 text-xs font-semibold mb-3">
            <Info className="w-3.5 h-3.5" />
             Profil & Visi Strategis FTI
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Arah Strategis & Akreditasi Unggul
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Komitmen Fakultas Teknik dan Informatika Universitas Patria Artha dalam mencetak lulusan berdaya saing global melalui kurikulum Outcome-Based Education (OBE) dan laboratorium berteknologi tinggi.
          </p>
        </div>

        {/* Accreditation Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          
          {/* Accreditation National */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-bl-full pointer-events-none" />
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-emerald-100 dark:bg-emerald-950/80 rounded-xl text-emerald-600 dark:text-emerald-400">
                <Award className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 bg-emerald-500 text-white font-extrabold text-xs rounded-full uppercase tracking-wider">
                {accreditationData.nasional?.status || 'Unggul (A)'}
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Akreditasi Nasional (LAM INFOKOM)
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Badan Akreditasi Mandiri Informatika & Komputer Indonesia
            </p>
            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700 space-y-2 text-xs text-slate-600 dark:text-slate-300">
              <div className="flex justify-between">
                <span className="text-slate-400">Nomor SK:</span>
                <span className="font-mono font-medium">{accreditationData.nasional?.skNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Masa Berlaku:</span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">Hingga 31 Desember 2029</span>
              </div>
            </div>
          </div>

          {/* Accreditation International */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-bl-full pointer-events-none" />
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-red-100 dark:bg-red-950/80 rounded-xl text-red-600 dark:text-red-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 bg-red-600 text-white font-extrabold text-xs rounded-full uppercase tracking-wider">
                Sertifikasi Internasional
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Sertifikasi & Keanggotaan Internasional
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
               Washington Accord Global Engineering Standard
            </p>
            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700 space-y-2 text-xs">
              {(accreditationData.internasional || []).map((item: any, idx: number) => (
                <div key={idx} className="flex items-center justify-between">
                  <span className="text-slate-700 dark:text-slate-300 font-medium">{item.badan}</span>
                  <span className="px-2 py-0.5 rounded bg-red-50 dark:bg-red-950 text-red-700 dark:text-red-300 font-bold">
                    {item.status} ({item.year})
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Visi, Misi & Tujuan Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Visi */}
          <div className="bg-gradient-to-br from-red-900 via-rose-950 to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-lg relative overflow-hidden">
            <div className="flex items-center gap-2 text-red-300 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-4 h-4" /> Visi FTI Patria Artha 2030
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-slate-100 font-medium italic">
              "{visiMisiData.visi}"
            </p>
            <div className="mt-6 pt-4 border-t border-red-800/80 text-xs text-red-200">
              ✓ Berfokus pada AI, Cybersecurity, Software Engineering, dan Technopreneurship.
            </div>
          </div>

          {/* Misi */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 shadow-sm lg:col-span-2">
            <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 text-xs font-bold uppercase tracking-wider mb-4">
              <Target className="w-4 h-4" /> Misi Strategis FTI
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {(visiMisiData.misi || []).map((m: string, idx: number) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                  <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    {m}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* 4 Peminatan / Konsentrasi Studi */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              4 Fokus Keahlian & Peminatan Studi
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Mahasiswa memilih spesialisasi pada semester 5 sesuai minat bakat dan cita-cita karir
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(visiMisiData.fokusKeahlian || []).map((fokus: any) => (
              <div
                key={fokus.code}
                onClick={() => setSelectedSpec(fokus.code)}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-red-500/60 transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-700/60 w-fit mb-4 group-hover:scale-110 transition-transform">
                    {getSpecIcon(fokus.code)}
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                    {fokus.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                    {fokus.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between text-xs font-semibold text-red-600 dark:text-red-400">
                  <span>Rincian Kurikulum & Karir</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Specialization Detail Modal */}
      {selectedSpec && activeSpecData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-red-100 dark:bg-red-950/80">
                  {getSpecIcon(selectedSpec)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {activeSpecData.title}
                  </h3>
                  <p className="text-xs text-red-600 dark:text-red-400 font-medium">
                    Program Peminatan FTI Universitas Patria Artha
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedSpec(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {activeSpecData.desc}
            </p>

            {/* Skills */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Kompetensi & Tools Yang Dipelajari:
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {activeSpecData.skills.map((skill, idx) => (
                  <span key={idx} className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-lg text-xs font-medium border border-slate-200 dark:border-slate-700">
                    ✓ {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Career Outcomes */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Prospek Profesi & Karir Alumni:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeSpecData.careers.map((career, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 text-xs font-semibold">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>{career}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Lab Support */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span>Dikelola di: <strong className="text-slate-800 dark:text-slate-200">{activeSpecData.labs.join(', ')}</strong></span>
              <button
                onClick={() => setSelectedSpec(null)}
                className="px-4 py-2 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 shadow-sm"
              >
                Tutup
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
