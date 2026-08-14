"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { AiChatWidget } from './AiChatWidget';
import { GlobalSearchModal } from './GlobalSearchModal';
import { AdminLoginModal } from './AdminLoginModal';
import { useApp } from '../context/AppContext';

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const {
    theme,
    toggleTheme,
    isAiChatOpen,
    setIsAiChatOpen,
    isSearchOpen,
    setIsSearchOpen,
    isAdminLoginModalOpen,
    setIsAdminLoginModalOpen,
    adminUser,
    handleLoginSuccess,
    menuItemsList
  } = useApp();

  const handleOpenAdminLogin = () => {
    if (adminUser) {
      router.push('/admin');
    } else {
      setIsAdminLoginModalOpen(true);
    }
  };

  const handleSelectSearchResult = (sectionId: string) => {
    setIsSearchOpen(false);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push(`/${sectionId}`);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans antialiased selection:bg-[#9B2C2C] selection:text-white transition-colors duration-200">
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenAIAssistant={() => setIsAiChatOpen(true)}
        onOpenAdminLogin={handleOpenAdminLogin}
        isAdminLoggedIn={!!adminUser}
        customMenuItems={menuItemsList}
      />

      <main>{children}</main>

      <Footer />

      <AiChatWidget
        isOpen={isAiChatOpen}
        onClose={() => setIsAiChatOpen(false)}
      />

      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectResult={handleSelectSearchResult}
      />

      <AdminLoginModal
        isOpen={isAdminLoginModalOpen}
        onClose={() => setIsAdminLoginModalOpen(false)}
        onLoginSuccess={(user) => {
          handleLoginSuccess(user);
          router.push('/admin');
        }}
      />
    </div>
  );
};
