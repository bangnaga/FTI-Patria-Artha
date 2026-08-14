import React, { useState, useEffect } from 'react';
import { Laboratory } from '../types';
import { api } from '../services/api';
import { 
  FlaskConical, 
  Cpu, 
  MapPin, 
  Users, 
  HardDrive, 
  CheckCircle2, 
  AlertCircle, 
  X,
  Compass,
  Calendar,
  Send
} from 'lucide-react';

export const Laboratories: React.FC = () => {
  const [labsList, setLabsList] = useState<Laboratory[]>([]);
  const [activeLabModal, setActiveLabModal] = useState<Laboratory | null>(null);
  const [reservationModalOpen, setReservationModalOpen] = useState(false);
  const [reservationSubmitted, setReservationSubmitted] = useState(false);

  useEffect(() => {
    api.getLaboratories().then(data => {
      if (data && data.length > 0) setLabsList(data);
    }).catch(err => console.warn('Laboratories fetch error:', err));
  }, []);

  return (
    <section id="laboratorium" className="py-20 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 text-xs font-semibold mb-3">
            <FlaskConical className="w-3.5 h-3.5" /> Laboratorium & Fasilitas Riset FTI
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Fasilitas Laboratorium FTI Patria Artha
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Laboratorium khusus yang dilengkapi GPU Server NVIDIA, Cisco Enterprise Network Rack, Testbed Cyber Security, dan 3D Printer High-Speed.
          </p>
        </div>

        {/* Lab Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {labsList.map((lab) => (
            <div
              key={lab.id}
              className="bg-slate-50 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Lab Image & Code Badge */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img
                    src={lab.image}
                    alt={lab.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white font-mono text-xs font-bold px-3 py-1 rounded-lg border border-slate-700">
                    {lab.code}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-red-600/90 text-white text-xs font-semibold px-3 py-1 rounded-lg backdrop-blur-md">
                    Kapasitas {lab.capacity} Kursi
                  </div>
                </div>

                {/* Lab Content */}
                <div className="p-6">
                  <h3 className="font-bold text-slate-900 dark:text-white text-lg group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                    {lab.name}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                    {lab.shortDesc}
                  </p>

                  <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700 space-y-2 text-xs">
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                      <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                      <span>{lab.location}</span>
                    </div>

                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                      <Users className="w-4 h-4 text-blue-500 shrink-0" />
                      <span>Kepala Lab: <strong>{lab.headOfLab}</strong></span>
                    </div>
                  </div>

                  {/* Software Installed Pills */}
                  <div className="mt-4">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                      Software & Environment Utama:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {lab.softwareInstalled.map((sw, idx) => (
                        <span key={idx} className="text-[10px] font-medium px-2 py-0.5 rounded bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                          {sw}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Actions */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between gap-3">
                <button
                  onClick={() => setActiveLabModal(lab)}
                  className="flex-1 px-4 py-2 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-xs rounded-xl transition-colors text-center"
                >
                  Lihat Spesifikasi Hardware
                </button>

                <button
                  onClick={() => { setActiveLabModal(lab); setReservationModalOpen(true); }}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl transition-colors"
                >
                  Izin Riset
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Lab Spec Modal */}
      {activeLabModal && !reservationModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-start justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
              <div>
                <span className="font-mono text-xs font-bold px-2.5 py-0.5 bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 rounded">
                  {activeLabModal.code}
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                  {activeLabModal.name}
                </h3>
                <p className="text-xs text-slate-500">
                  {activeLabModal.location} • Kapasitas {activeLabModal.capacity} Mahasiswa
                </p>
              </div>
              <button
                onClick={() => setActiveLabModal(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Specifications */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-blue-500" /> Spesifikasi Utama Komputasi & Jaringan:
              </h4>
              <div className="space-y-1.5">
                {activeLabModal.specifications.map((spec, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 text-xs font-medium text-slate-700 dark:text-slate-200 border border-slate-100 dark:border-slate-700/60">
                    • {spec}
                  </div>
                ))}
              </div>
            </div>

            {/* Equipment Table */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <HardDrive className="w-4 h-4 text-purple-500" /> Daftar Perangkat keras & Status Operasional:
              </h4>
              <div className="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-xl">
                <table className="w-full text-xs text-left text-slate-700 dark:text-slate-300">
                  <thead className="bg-slate-100 dark:bg-slate-800 text-slate-500 font-bold uppercase">
                    <tr>
                      <th className="px-4 py-2">Nama Perangkat</th>
                      <th className="px-4 py-2">Jumlah</th>
                      <th className="px-4 py-2">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {activeLabModal.equipmentList.map((eq, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                        <td className="px-4 py-2 font-medium">{eq.name}</td>
                        <td className="px-4 py-2">{eq.qty} Unit</td>
                        <td className="px-4 py-2">
                          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded font-bold text-[10px] ${
                            eq.status === 'Baik'
                              ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300'
                              : 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300'
                          }`}>
                            {eq.status === 'Baik' ? <CheckCircle2 className="w-3 h-3" /> : <AlertCircle className="w-3 h-3" />}
                            {eq.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Lab Assistants */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Asisten Laboratorium Aktif:</h4>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                {activeLabModal.labAssistants.join(' • ')}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
              <button
                onClick={() => setReservationModalOpen(true)}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-xs flex items-center gap-1.5"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Pengajuan Akses Riset Lab</span>
              </button>

              <button
                onClick={() => setActiveLabModal(null)}
                className="px-4 py-2 bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold rounded-xl text-xs"
              >
                Tutup
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Reservation Request Form Modal */}
      {reservationModalOpen && activeLabModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-2xl space-y-4">
            
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <h3 className="font-bold text-slate-900 dark:text-white text-base">
                Formulir Penggunaan {activeLabModal.code}
              </h3>
              <button
                onClick={() => { setReservationModalOpen(false); setReservationSubmitted(false); }}
                className="p-1 rounded text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {reservationSubmitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-base">Permohonan Izin Riset Terkirim!</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs mx-auto">
                  Pengajuan Anda telah diteruskan ke Kepala Laboratorium (<strong>{activeLabModal.headOfLab}</strong>). Konfirmasi akan dikirim ke email kampus Anda.
                </p>
                <button
                  onClick={() => { setReservationModalOpen(false); setReservationSubmitted(false); setActiveLabModal(null); }}
                  className="px-5 py-2 bg-blue-600 text-white font-bold rounded-xl text-xs"
                >
                  Selesai
                </button>
              </div>
            ) : (
              <form 
                onSubmit={(e) => { e.preventDefault(); setReservationSubmitted(true); }}
                className="space-y-3 text-xs"
              >
                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Nama Mahasiswa / Peneliti:</label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Muhammad Farhan"
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">NIM / NIDN:</label>
                    <input
                      type="text"
                      required
                      placeholder="2310114001"
                      className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Tanggal Riset:</label>
                    <input
                      type="date"
                      required
                      className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Keperluan Riset / Judul TA:</label>
                  <textarea
                    required
                    rows={2}
                    placeholder="Contoh: Pemodelan Deep Learning pada Server GPU RTX 4090 untuk Tugas Akhir"
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setReservationModalOpen(false)}
                    className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold rounded-xl"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl flex items-center gap-1"
                  >
                    <Send className="w-3.5 h-3.5" /> Kirim Pengajuan
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}

    </section>
  );
};
