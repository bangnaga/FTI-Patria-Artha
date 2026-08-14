import React, { useState, useEffect } from 'react';
import { ShieldCheck, Lock, User, Key, CheckCircle2, AlertCircle, X, Sparkles, ArrowRight } from 'lucide-react';
import { UpaLogo } from './UpaLogo';

interface AdminLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (user: { name: string; role: string; email: string }) => void;
}

export const AdminLoginModal: React.FC<AdminLoginModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess
}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const [websiteSettings, setWebsiteSettings] = useState<any>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('fti_website_settings');
      if (saved) {
        setWebsiteSettings(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    const updateSettings = () => {
      try {
        const saved = localStorage.getItem('fti_website_settings');
        if (saved) setWebsiteSettings(JSON.parse(saved));
      } catch (e) { /* ignore */ }
    };

    if (isOpen) {
      updateSettings();
    }

    window.addEventListener('fti_settings_updated', updateSettings);
    window.addEventListener('storage', updateSettings);
    return () => {
      window.removeEventListener('fti_settings_updated', updateSettings);
      window.removeEventListener('storage', updateSettings);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const performApiLogin = async (userStr: string, passStr: string) => {
    setLoading(true);
    setErrorMsg(null);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: userStr, password: passStr })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        localStorage.setItem('fti_admin_user', JSON.stringify(data.user));
        if (data.token) localStorage.setItem('fti_auth_token', data.token);
        onLoginSuccess(data.user);
        onClose();
      } else {
        setErrorMsg(data.error || 'Username atau password tidak valid!');
      }
    } catch (err: any) {
      console.error('Admin Login API Error:', err);
      setErrorMsg('Gagal terhubung ke server autentikasi.');
    } finally {
      setLoading(false);
    }
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    performApiLogin(username, password);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#FFFFFF] border border-[#E2E8F0] text-[#2D3748] rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-[#EDF2F7] hover:bg-[#E2E8F0] text-[#2D3748] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Brand Header */}
        <div className="text-center mb-6 flex flex-col items-center">
          {websiteSettings?.logoUrl || websiteSettings?.logoDarkUrl ? (
            <img
              src={websiteSettings.logoUrl || websiteSettings.logoDarkUrl}
              alt="Logo Website Admin"
              className="h-14 max-w-[220px] object-contain mb-3"
            />
          ) : (
            <div className="mb-3 drop-shadow-md">
              <UpaLogo size={52} />
            </div>
          )}
          <h2 className="text-xl font-black text-[#800020]">
            {websiteSettings?.logoText ? `Portal Admin - ${websiteSettings.logoText}` : 'Portal Admin FTI'}
          </h2>
          <p className="text-xs text-[#2D3748]/75 mt-1 font-medium">
            {websiteSettings?.logoSubtitle || 'Universitas Patria Artha • Sistem Manajemen Konten'}
          </p>
        </div>

        {errorMsg && (
          <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs font-semibold flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleLoginSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-[#2D3748] mb-1">Email / Username Login</label>
            <div className="relative">
              <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#2D3748]/50" />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full pl-9 pr-3 py-2.5 text-xs font-semibold rounded-xl border border-[#E2E8F0] bg-[#FDFBF7] text-[#2D3748] focus:outline-none focus:border-[#9B2C2C]"
                placeholder="Masukkan email / username..."
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#2D3748] mb-1">Kata Sandi / Password</label>
            <div className="relative">
              <Key className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#2D3748]/50" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-9 pr-3 py-2.5 text-xs font-semibold rounded-xl border border-[#E2E8F0] bg-[#FDFBF7] text-[#2D3748] focus:outline-none focus:border-[#9B2C2C]"
                placeholder="Masukkan password..."
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 rounded-xl bg-[#9B2C2C] hover:bg-[#800020] text-[#FFF5F5] font-extrabold text-xs shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            {loading ? (
              <span>Memverifikasi Akses ke Database...</span>
            ) : (
              <>
                <span>Masuk ke Panel Kelola</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
