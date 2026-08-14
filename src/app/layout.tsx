import type { Metadata } from 'next'
import '../index.css'
import { AppProvider } from '../context/AppContext'
import { MainLayout } from '../components/MainLayout'

export const metadata: Metadata = {
  title: 'Fakultas Teknik & Informatika | Universitas Patria Artha',
  description: 'Fakultas Teknik & Informatika Universitas Patria Artha. Menyelenggarakan pendidikan tinggi vokasi dan sarjana berkualitas global di bidang rekayasa teknologi dan informatika.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased min-h-screen font-sans bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 selection:bg-red-500/30">
        <AppProvider>
          <MainLayout>{children}</MainLayout>
        </AppProvider>
      </body>
    </html>
  )
}
