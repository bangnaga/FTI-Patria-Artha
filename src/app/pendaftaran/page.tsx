"use client";

import React from 'react';
import { PmbRegistrationIframe } from '../../components/PmbRegistrationIframe';
import PageBanner from '../../components/ui/page-banner';

export default function PendaftaranPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-200">
      {/* 1. Page Header Banner */}
      <PageBanner
        id="banner-pmb-reg"
        title="Pendaftaran Mahasiswa Baru (PMB)"
        subtitle="Formulir Online Penerimaan Calon Mahasiswa Baru Universitas Patria Artha (FTI UPA)"
        badge="PMB Online 2026/2027"
        breadcrumb="Beranda / Pendaftaran PMB"
        bannerHeight="compact"
        bgType="gradient"
        accentColor="maroon"
      />

      {/* 2. Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="mb-6 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 text-xs sm:text-sm text-amber-900 dark:text-amber-200">
          <span className="text-xl shrink-0">🎓</span>
          <div>
            <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-0.5">
              Petunjuk Pengisian Formulir PMB Patria Artha:
            </h4>
            <p className="leading-relaxed opacity-90">
              Isi data diri calon mahasiswa baru dengan teliti sesuai Ijazah / KTP / Kartu Keluarga. Jika formulir tidak muncul sempurna pada peramban Anda, silakan klik tombol <strong>Buka Tab Baru</strong> di kanan atas frame.
            </p>
          </div>
        </div>

        {/* 3. Embedded PMB Iframe Component */}
        <PmbRegistrationIframe
          src="https://pmb.patria-artha.ac.id/join/reg/camaba.php"
          height="880px"
          title="Formulir Pendaftaran Mahasiswa Baru (CAMABA) UPA"
          subtitle="Direct Connection: pmb.patria-artha.ac.id"
          themeStyle="maroon"
          showCardHeader={true}
          showFooterNotice={true}
        />
      </div>
    </div>
  );
}
