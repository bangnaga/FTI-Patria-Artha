"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AdminDashboard } from '../../components/AdminDashboard';
import { PageBuilder } from '../../components/PageBuilder';
import { AdminLoginModal } from '../../components/AdminLoginModal';
import { useApp } from '../../context/AppContext';
import { api } from '../../services/api';

export default function AdminPage() {
  const router = useRouter();
  const {
    adminUser,
    handleAdminLogout,
    handleLoginSuccess,
    newsList,
    setNewsList,
    lecturersList,
    setLecturersList,
    studyProgramsList,
    setStudyProgramsList,
    coursesList,
    setCoursesList,
    menuItemsList,
    setMenuItemsList,
    mediaFilesList,
    setMediaFilesList,
    studentOrgData,
    setStudentOrgData,
    setCustomPagesList,
  } = useApp();

  const [viewMode, setViewMode] = useState<'dashboard' | 'builder'>('dashboard');
  const [editingCustomPage, setEditingCustomPage] = useState<any | null>(null);

  if (!adminUser) {
    return (
      <div className="max-w-xl mx-auto px-4 py-24 text-center">
        <AdminLoginModal
          isOpen={true}
          onClose={() => router.push('/')}
          onLoginSuccess={(u) => {
            handleLoginSuccess(u);
          }}
        />
      </div>
    );
  }

  if (viewMode === 'builder') {
    return (
      <PageBuilder
        editingPage={editingCustomPage}
        onBackToMainSite={() => setViewMode('dashboard')}
        onSavePage={async (pageObj) => {
          try {
            let saved: any = null;
            if (editingCustomPage) {
              saved = await api.updateCustomPage(pageObj.id, pageObj);
            } else {
              try {
                saved = await api.updateCustomPage(pageObj.id, pageObj);
              } catch {
                saved = await api.createCustomPage(pageObj);
              }
            }

            const updatedPageItem = saved || pageObj;

            // Sync to AppContext state in real-time
            setCustomPagesList((prev) => {
              const targetKey = (updatedPageItem.slug || updatedPageItem.id || '')
                .toLowerCase()
                .replace(/^cp_/i, '')
                .replace(/^\/halaman\//i, '')
                .replace(/^halaman\//i, '')
                .replace(/^\//, '')
                .replace(/\/$/, '')
                .trim();

              const idx = prev.findIndex((p) => {
                if (!p) return false;
                const pKey = (p.slug || p.id || '')
                  .toLowerCase()
                  .replace(/^cp_/i, '')
                  .replace(/^\/halaman\//i, '')
                  .replace(/^halaman\//i, '')
                  .replace(/^\//, '')
                  .replace(/\/$/, '')
                  .trim();
                return pKey === targetKey || p.id === updatedPageItem.id || p.slug === updatedPageItem.slug;
              });

              if (idx >= 0) {
                const nextList = [...prev];
                nextList[idx] = { ...nextList[idx], ...updatedPageItem };
                return nextList;
              } else {
                return [...prev, updatedPageItem];
              }
            });

            // Dispatch global event for instant reactivity
            if (typeof window !== 'undefined') {
              window.dispatchEvent(new Event('fti_pages_updated'));
            }
          } catch (err) {
            console.error('Failed to save custom page:', err);
          }
        }}
      />
    );
  }

  return (
    <AdminDashboard
      currentUser={adminUser}
      onLogout={() => {
        handleAdminLogout();
        router.push('/');
      }}
      onBackToWebsite={() => router.push('/')}
      onOpenPageBuilder={(pageObj) => {
        setEditingCustomPage(pageObj || null);
        setViewMode('builder');
      }}
      newsList={newsList}
      setNewsList={setNewsList}
      lecturersList={lecturersList}
      setLecturersList={setLecturersList}
      studyProgramsList={studyProgramsList}
      setStudyProgramsList={setStudyProgramsList}
      coursesList={coursesList}
      setCoursesList={setCoursesList}
      menuItemsList={menuItemsList}
      setMenuItemsList={setMenuItemsList}
      mediaFilesList={mediaFilesList}
      setMediaFilesList={setMediaFilesList}
      studentOrg={studentOrgData}
      setStudentOrg={setStudentOrgData}
    />
  );
}
