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
            if (editingCustomPage) {
              await api.updateCustomPage(pageObj.id, pageObj);
            } else {
              try {
                await api.updateCustomPage(pageObj.id, pageObj);
              } catch {
                await api.createCustomPage(pageObj);
              }
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
