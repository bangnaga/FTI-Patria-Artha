import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import { StudentOrg, StudentAchievement, AlumniTestimonial, JobVacancy } from '../types';
import { 
  Users, 
  Trophy, 
  Briefcase, 
  Calendar, 
  ExternalLink, 
  Linkedin, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  Clock,
  MapPin,
  Building2
} from 'lucide-react';

interface StudentAndAlumniProps {
  studentOrg?: StudentOrg;
}

export const StudentAndAlumni: React.FC<StudentAndAlumniProps> = ({ studentOrg: propStudentOrg }) => {
  const [fetchedOrg, setFetchedOrg] = useState<StudentOrg | null>(null);
  const orgData = propStudentOrg || fetchedOrg || {
    id: 'default_org',
    name: 'Himpunan Mahasiswa FTI',
    abbreviation: 'HIMA-FTI',
    logo: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=200',
    description: 'Wadah organisasi mahasiswa Fakultas Teknik & Informatika UPA.',
    cabinetName: 'Kabinet Sinergi Inovasi',
    cabinetYear: '2026/2027',
    leaderName: 'Muh. Fadel Rahman',
    leaderPhoto: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400',
    viceLeaderName: 'Andi Nurul Fatima',
    divisions: [],
    upcomingEvents: []
  };

  const [activeTab, setActiveTab] = useState<'IMFTI' | 'PRESTASI' | 'ALUMNI' | 'JOBS'>('IMFTI');
  const [achievements, setAchievements] = useState<StudentAchievement[]>([]);
  const [alumniTestimonials, setAlumniTestimonials] = useState<AlumniTestimonial[]>([]);
  const [jobVacancies, setJobVacancies] = useState<JobVacancy[]>([]);

  useEffect(() => {
    if (!propStudentOrg) {
      api.getStudentOrg().then(data => { if (data && data.name) setFetchedOrg(data); }).catch(e => console.warn(e));
    }
    Promise.all([
      api.getStudentAchievements(),
      api.getAlumniTestimonials(),
      api.getJobVacancies()
    ]).then(([sas, ats, jvs]) => {
      if (sas) setAchievements(sas);
      if (ats) setAlumniTestimonials(ats);
      if (jvs) setJobVacancies(jvs);
    }).catch(err => console.warn('StudentAndAlumni fetch error:', err));
  }, [propStudentOrg]);

  return (
    <section id="kemahasiswaan" className="py-20 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-semibold mb-3">
            <Users className="w-3.5 h-3.5" /> Kemahasiswaan & Tracer Study
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Organisasi, Prestasi & Karir Alumni
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Ekosistem organisasi mahasiswa yang aktif, kejuaraan nasional/internasional, dan jejaring alumni unggulan di perusahaan teknologi multinasional.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2 scrollbar-none">
          <div className="bg-slate-100 dark:bg-slate-800 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-700 flex items-center gap-1">
            <button
              onClick={() => setActiveTab('IMFTI')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'IMFTI'
                  ? 'bg-red-600 text-white shadow-md shadow-red-500/20'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Ikatan Mahasiswa FTI (IMFTI UPA)</span>
            </button>

            <button
              onClick={() => setActiveTab('PRESTASI')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'PRESTASI'
                  ? 'bg-red-600 text-white shadow-md shadow-red-500/20'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Trophy className="w-4 h-4 text-amber-400" />
              <span>Prestasi & Kejuaraan</span>
            </button>

            <button
              onClick={() => setActiveTab('ALUMNI')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'ALUMNI'
                  ? 'bg-red-600 text-white shadow-md shadow-red-500/20'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Tracer Study Alumni</span>
            </button>

            <button
              onClick={() => setActiveTab('JOBS')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'JOBS'
                  ? 'bg-red-600 text-white shadow-md shadow-red-500/20'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Building2 className="w-4 h-4 text-emerald-400" />
              <span>Papan Lowongan Kerja / Magang</span>
            </button>
          </div>
        </div>

        {/* TAB 1: IKATAN MAHASISWA FTI (IMFTI UPA) */}
        {activeTab === 'IMFTI' && (
          <div className="space-y-8">
            
            {/* Header IMFTI Box */}
            <div className="bg-gradient-to-r from-red-900 via-rose-950 to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs font-semibold">
                  {orgData.cabinetName} ({orgData.cabinetYear})
                </div>
                <h3 className="text-2xl font-extrabold text-white">
                  {orgData.name} ({orgData.abbreviation})
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {orgData.description}
                </p>
                <div className="pt-2 text-xs text-red-200">
                  Ketua Umum: <strong>{orgData.leaderName}</strong> • Wakil Ketua: <strong>{orgData.viceLeaderName}</strong>
                </div>
              </div>

              <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-red-400/40 shrink-0">
                <img
                  src={orgData.leaderPhoto}
                  alt={orgData.leaderName}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Divisions Grid */}
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-4">
                Departemen & Divisi Kerja IMFTI UPA:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {orgData.divisions.map((div, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <h5 className="font-bold text-slate-900 dark:text-white text-sm mb-1">
                      {div.name}
                    </h5>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {div.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Student Events & Hackathons */}
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-500" /> Agenda Kegiatan & Hackathon IMFTI UPA:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {orgData.upcomingEvents.map((evt, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-extrabold px-2.5 py-0.5 bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 rounded">
                        {evt.category}
                      </span>
                      <span className="text-xs text-slate-400 font-semibold">{evt.date}</span>
                    </div>
                    <h5 className="font-bold text-slate-900 dark:text-white text-sm">
                      {evt.title}
                    </h5>
                    <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-red-400" />
                      <span>{evt.location}</span>
                    </p>
                    {evt.registrationUrl && (
                      <a
                        href={evt.registrationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline pt-2"
                      >
                        <span>Daftar Peserta</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: PRESTASI MAHASISWA HALL OF FAME */}
        {activeTab === 'PRESTASI' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((ach) => (
              <div
                key={ach.id}
                className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={ach.image}
                      alt={ach.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-md">
                      Tingkat {ach.level} • {ach.year}
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 bg-amber-500 text-slate-950 font-extrabold text-xs px-3 py-1 rounded-lg backdrop-blur-md flex items-center gap-1.5 shadow-md">
                      <Trophy className="w-4 h-4 shrink-0" />
                      <span className="truncate">{ach.rank}</span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider block">
                      {ach.competition}
                    </span>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base">
                      {ach.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300">
                      Anggota Tim: <strong>{Array.isArray(ach.studentNames) ? ach.studentNames.join(', ') : ''}</strong>
                    </p>
                    <p className="text-[11px] text-slate-400 italic">
                      Dosen Pembimbing: {ach.mentorLecturer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: TRACER STUDY & ALUMNI TESTIMONIALS */}
        {activeTab === 'ALUMNI' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {alumniTestimonials.map((alumni) => (
                <div
                  key={alumni.id}
                  className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={alumni.photo || '/uploads/noface-1787027055368-je087.jpg'}
                        alt={alumni.name}
                        referrerPolicy="no-referrer"
                        className="w-14 h-14 rounded-2xl object-cover border-2 border-blue-500/30"
                      />
                      <div>
                        <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                          {alumni.name}
                        </h3>
                        <p className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                          {alumni.role}
                        </p>
                        <p className="text-[11px] text-slate-400">
                          {alumni.company} • Lulusan {alumni.gradYear}
                        </p>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-300 italic leading-relaxed">
                      "{alumni.quote}"
                    </p>
                  </div>

                  {alumni.linkedinUrl && (
                    <a
                      href={alumni.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pt-3 border-t border-slate-100 dark:border-slate-700/80 inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-blue-600"
                    >
                      <Linkedin className="w-3.5 h-3.5 text-blue-500" />
                      <span>Profil LinkedIn Alumni</span>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: JOB BOARD LOWONGAN KERJA / MAGANG */}
        {activeTab === 'JOBS' && (
          <div className="space-y-4">
            {jobVacancies.map((job) => (
              <div
                key={job.id}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:border-emerald-500/60 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded ${
                      job.type === 'Full-time' ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300' : 'bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300'
                    }`}>
                      {job.type}
                    </span>
                    <span className="text-xs text-slate-400 font-semibold">{job.location}</span>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white text-base">
                    {job.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-300 font-semibold">
                    {job.company} • Batas Akhir: {job.applyDeadline}
                  </p>

                  <div className="flex flex-wrap gap-1 pt-1">
                    {job.requirements.map((req, idx) => (
                      <span key={idx} className="text-[10px] px-2 py-0.5 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded">
                        • {req}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={job.applyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs flex items-center gap-1.5 transition-colors"
                >
                  <span>Lamar Sekarang</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
