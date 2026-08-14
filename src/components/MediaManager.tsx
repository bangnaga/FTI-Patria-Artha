import React, { useState, useEffect, useRef } from 'react';
import { MediaFile, MediaFolder } from '../types';
import { api } from '../services/api';
import { 
  Trash2, 
  Search, 
  UploadCloud, 
  Image as ImageIcon, 
  Copy, 
  X, 
  Plus, 
  LayoutGrid, 
  LayoutList, 
  CheckSquare, 
  Square,
  Zap,
  Folder,
  FolderPlus,
  Edit3,
  Move,
  AlertTriangle,
  HardDrive,
  FolderOpen
} from 'lucide-react';

interface MediaManagerProps {
  mediaFiles?: MediaFile[];
  onUpdateMediaFiles?: (files: MediaFile[]) => void;
  onSelectImage?: (url: string) => void;
  isModalMode?: boolean;
  onCloseModal?: () => void;
}

interface UploadProgress {
  fileName: string;
  progress: number; // 0 - 100
  status: 'converting' | 'completed' | 'error';
}

export const MediaManager: React.FC<MediaManagerProps> = ({
  mediaFiles: propMediaFiles,
  onUpdateMediaFiles,
  onSelectImage,
  isModalMode = false,
  onCloseModal
}) => {
  // --- STATES ---
  const [mediaList, setMediaList] = useState<MediaFile[]>(() => {
    if (propMediaFiles && propMediaFiles.length > 0) return propMediaFiles;
    const saved = localStorage.getItem('fti_media_manager_files');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { /* ignore */ }
    }
    return [];
  });

  const [folders, setFolders] = useState<MediaFolder[]>(() => {
    const saved = localStorage.getItem('fti_media_manager_folders');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { /* ignore */ }
    }
    return [
      { id: 'fld-berita', name: 'Gambar Berita & Pengumuman' },
      { id: 'fld-[#dosen]', name: 'Foto Dosen & Staf' },
      { id: 'fld-lab', name: 'Fasilitas Laboratorium' },
      { id: 'fld-kegiatan', name: 'Kegiatan Mahasiswa HMTI' }
    ];
  });

  const [activeFolderId, setActiveFolderId] = useState<string>('all'); // 'all', 'root', or folder.id

  // Display & Filter States
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filterType, setFilterType] = useState<string>('all');
  const [filterDate, setFilterDate] = useState<string>('all');
  const [searchMediaTerm, setSearchMediaTerm] = useState('');

  // Bulk Selection States
  const [isBulkSelectMode, setIsBulkSelectMode] = useState(false);
  const [selectedMediaIds, setSelectedMediaIds] = useState<string[]>([]);

  // Add New Uploader Drawer State
  const [showUploadDrawer, setShowUploadDrawer] = useState(false);
  const [uploadQueue, setUploadQueue] = useState<UploadProgress[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Preview / Copy States
  const [previewImage, setPreviewImage] = useState<MediaFile | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // --- FOLDER & FILE OPERATION MODALS ---
  const [isCreateFolderOpen, setIsCreateFolderOpen] = useState(false);
  const [newFolderName, setNewFolderName] = useState('');

  const [renameFolderModal, setRenameFolderModal] = useState<{
    isOpen: boolean;
    folderId: string;
    currentName: string;
  }>({ isOpen: false, folderId: '', currentName: '' });

  const [renameFileModal, setRenameFileModal] = useState<{
    isOpen: boolean;
    fileId: string;
    currentName: string;
  }>({ isOpen: false, fileId: '', currentName: '' });

  const [moveFileModal, setMoveFileModal] = useState<{
    isOpen: boolean;
    fileId: string;
    fileName: string;
    targetFolderId: string;
  }>({ isOpen: false, fileId: '', fileName: '', targetFolderId: '' });

  // --- DELETE CONFIRMATION DIALOG BOX STATE ---
  const [deleteConfirmDialog, setDeleteConfirmDialog] = useState<{
    isOpen: boolean;
    type: 'file' | 'folder' | 'bulk';
    targetId?: string;
    targetName?: string;
    count?: number;
  }>({ isOpen: false, type: 'file' });

  // Fetch initial files & folders from Database API on mount
  useEffect(() => {
    Promise.all([
      api.getMediaFiles().catch(() => []),
      api.getMediaFolders().catch(() => [])
    ]).then(([filesData, foldersData]) => {
      if (Array.isArray(filesData) && filesData.length > 0) {
        setMediaList(filesData);
        localStorage.setItem('fti_media_manager_files', JSON.stringify(filesData));
      }
      if (Array.isArray(foldersData) && foldersData.length > 0) {
        setFolders(foldersData);
        localStorage.setItem('fti_media_manager_folders', JSON.stringify(foldersData));
      }
    });
  }, []);

  useEffect(() => {
    if (propMediaFiles && propMediaFiles.length > 0) {
      setMediaList(propMediaFiles);
    }
  }, [propMediaFiles]);

  const saveMediaList = (newList: MediaFile[]) => {
    setMediaList(newList);
    localStorage.setItem('fti_media_manager_files', JSON.stringify(newList));
    if (onUpdateMediaFiles) {
      onUpdateMediaFiles(newList);
    }
  };

  const saveFolders = (newFolders: MediaFolder[]) => {
    setFolders(newFolders);
    localStorage.setItem('fti_media_manager_folders', JSON.stringify(newFolders));
  };

  // --- WEBP AUTO CONVERTER & UPLOAD LOGIC ---
  const convertFileToWebP = (file: File): Promise<MediaFile> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext('2d');
          if (!ctx) {
            reject(new Error('Canvas context error'));
            return;
          }
          ctx.drawImage(img, 0, 0);

          const webpDataUrl = canvas.toDataURL('image/webp', 0.85);
          const sizeInBytes = Math.round((webpDataUrl.length * 3) / 4);

          const cleanName = file.name.substring(0, file.name.lastIndexOf('.')) || file.name;
          const webpFileName = `${cleanName.toLowerCase().replace(/[^a-z0-9]/g, '-')}.webp`;

          const newMediaFile: MediaFile = {
            id: `med-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
            fileName: webpFileName,
            originalName: file.name,
            sizeBytes: sizeInBytes,
            type: 'image/webp',
            url: webpDataUrl,
            uploadedAt: new Date().toISOString().replace('T', ' ').substring(0, 16),
            dimensions: { width: img.width, height: img.height },
            folderId: activeFolderId !== 'all' && activeFolderId !== 'root' ? activeFolderId : undefined
          };

          resolve(newMediaFile);
        };
        img.onerror = () => reject(new Error('Image load failed'));
        img.src = e.target?.result as string;
      };
      reader.onerror = () => reject(new Error('File read failed'));
      reader.readAsDataURL(file);
    });
  };

  const handleProcessFiles = async (files: FileList | File[]) => {
    const fileArray = Array.from(files).filter(f => f.type.startsWith('image/'));
    if (fileArray.length === 0) {
      alert('Silakan pilih file gambar (JPG, PNG, WebP, GIF).');
      return;
    }

    const initialQueue: UploadProgress[] = fileArray.map(f => ({
      fileName: f.name,
      progress: 15,
      status: 'converting'
    }));
    setUploadQueue(initialQueue);

    const newlyCreated: MediaFile[] = [];

    for (let i = 0; i < fileArray.length; i++) {
      const file = fileArray[i];
      setUploadQueue(prev => prev.map((q, idx) => idx === i ? { ...q, progress: 50 } : q));

      try {
        // Upload physical file to server (/public/uploads) and record MediaFile in Prisma DB
        try {
          const uploadedFile = await api.uploadMediaFile(file);
          newlyCreated.push(uploadedFile);
        } catch (uploadErr) {
          console.warn('Physical upload failed, falling back to WebP client conversion:', uploadErr);
          const converted = await convertFileToWebP(file);
          const savedServerFile = await api.createMediaFile(converted);
          newlyCreated.push(savedServerFile || converted);
        }
        setUploadQueue(prev => prev.map((q, idx) => idx === i ? { ...q, progress: 100, status: 'completed' } : q));
      } catch (err) {
        console.error('Error processing file upload:', err);
        setUploadQueue(prev => prev.map((q, idx) => idx === i ? { ...q, status: 'error' } : q));
      }
    }

    if (newlyCreated.length > 0) {
      const updatedList = [...newlyCreated, ...mediaList];
      saveMediaList(updatedList);
    }

    setTimeout(() => {
      setUploadQueue([]);
    }, 3000);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleProcessFiles(e.dataTransfer.files);
    }
  };

  // --- FOLDER MANAGEMENT ACTIONS ---
  const handleCreateFolder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFolderName.trim()) return;

    try {
      const created = await api.createMediaFolder(newFolderName.trim());
      const updated = [...folders, created];
      saveFolders(updated);
    } catch {
      const fallback: MediaFolder = {
        id: `fld-${Date.now()}`,
        name: newFolderName.trim()
      };
      const updated = [...folders, fallback];
      saveFolders(updated);
    }

    setNewFolderName('');
    setIsCreateFolderOpen(false);
  };

  const handleRenameFolder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!renameFolderModal.currentName.trim()) return;

    try {
      await api.updateMediaFolder(renameFolderModal.folderId, renameFolderModal.currentName.trim());
    } catch {
      /* ignore server error */
    }

    const updated = folders.map(f => f.id === renameFolderModal.folderId ? { ...f, name: renameFolderModal.currentName.trim() } : f);
    saveFolders(updated);
    setRenameFolderModal({ isOpen: false, folderId: '', currentName: '' });
  };

  const handleConfirmDeleteFolder = async () => {
    const { targetId } = deleteConfirmDialog;
    if (!targetId) return;

    try {
      await api.deleteMediaFolder(targetId);
    } catch {
      /* ignore */
    }

    const updatedFolders = folders.filter(f => f.id !== targetId);
    saveFolders(updatedFolders);

    // Reset folderId for files in deleted folder to root
    const updatedMedia = mediaList.map(m => m.folderId === targetId ? { ...m, folderId: undefined } : m);
    saveMediaList(updatedMedia);

    if (activeFolderId === targetId) setActiveFolderId('all');
    setDeleteConfirmDialog({ isOpen: false, type: 'folder' });
  };

  // --- FILE MANAGEMENT ACTIONS ---
  const handleRenameFile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!renameFileModal.currentName.trim()) return;

    const cleanName = renameFileModal.currentName.trim();
    try {
      await api.updateMediaFile(renameFileModal.fileId, { fileName: cleanName });
    } catch {
      /* ignore */
    }

    const updated = mediaList.map(m => m.id === renameFileModal.fileId ? { ...m, fileName: cleanName } : m);
    saveMediaList(updated);
    setRenameFileModal({ isOpen: false, fileId: '', currentName: '' });
  };

  const handleMoveFile = async (e: React.FormEvent) => {
    e.preventDefault();
    const targetFolder = moveFileModal.targetFolderId === 'root' || !moveFileModal.targetFolderId ? undefined : moveFileModal.targetFolderId;

    try {
      await api.updateMediaFile(moveFileModal.fileId, { folderId: targetFolder || null });
    } catch {
      /* ignore */
    }

    const updated = mediaList.map(m => m.id === moveFileModal.fileId ? { ...m, folderId: targetFolder } : m);
    saveMediaList(updated);
    setMoveFileModal({ isOpen: false, fileId: '', fileName: '', targetFolderId: '' });
  };

  const handleConfirmDeleteSingleFile = async () => {
    const { targetId } = deleteConfirmDialog;
    if (!targetId) return;

    try {
      await api.deleteMediaFile(targetId);
    } catch {
      /* ignore */
    }

    const updated = mediaList.filter(m => m.id !== targetId);
    saveMediaList(updated);
    if (previewImage?.id === targetId) setPreviewImage(null);
    setDeleteConfirmDialog({ isOpen: false, type: 'file' });
  };

  const handleConfirmBulkDelete = async () => {
    for (const id of selectedMediaIds) {
      try {
        await api.deleteMediaFile(id);
      } catch {
        /* ignore */
      }
    }
    const updated = mediaList.filter(m => !selectedMediaIds.includes(m.id));
    saveMediaList(updated);
    setSelectedMediaIds([]);
    setDeleteConfirmDialog({ isOpen: false, type: 'bulk' });
  };

  const toggleSelectMedia = (id: string) => {
    if (selectedMediaIds.includes(id)) {
      setSelectedMediaIds(prev => prev.filter(item => item !== id));
    } else {
      setSelectedMediaIds(prev => [...prev, id]);
    }
  };

  const handleCopyUrl = (media: MediaFile) => {
    navigator.clipboard.writeText(media.url);
    setCopiedId(media.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Filter media items
  const displayedMediaList = mediaList.filter(m => {
    // 1. Filter by Active Folder
    if (activeFolderId === 'root' && m.folderId) return false;
    if (activeFolderId !== 'all' && activeFolderId !== 'root' && m.folderId !== activeFolderId) return false;

    // 2. Filter by Type
    if (filterType === 'images' && !m.type.startsWith('image/')) return false;
    if (filterType === 'webp' && m.type !== 'image/webp') return false;

    // 3. Filter by Search
    if (searchMediaTerm.trim()) {
      const query = searchMediaTerm.toLowerCase();
      const matchName = m.fileName.toLowerCase().includes(query) || m.originalName.toLowerCase().includes(query);
      if (!matchName) return false;
    }

    return true;
  });

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <div className={`bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden flex flex-col ${isModalMode ? 'p-0 max-h-[88vh]' : 'p-0 min-h-[720px]'}`}>
      
      {/* App Top Bar header */}
      <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/90 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between gap-4 shrink-0">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-[#9B2C2C] text-white shadow-xs">
            <ImageIcon className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-black text-slate-900 dark:text-white">Media Manager FTI UPA</h2>
              <span className="px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 flex items-center gap-1">
                <HardDrive className="w-3 h-3" /> Hosting Asset Storage
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">Penyimpanan aset terstruktur di folder hosting server <code className="font-mono bg-slate-200 dark:bg-slate-700 px-1 py-0.5 rounded text-[11px]">/public/assets/</code> & MySQL DB.</p>
          </div>
        </div>

        {isModalMode && onCloseModal && (
          <button
            onClick={onCloseModal}
            className="p-2 rounded-2xl bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* STORAGE & FOLDER NOTICE BANNER */}
      <div className="px-6 py-2.5 bg-gradient-to-r from-red-50 to-amber-50 dark:from-slate-800/60 dark:to-slate-800/80 border-b border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 flex flex-wrap items-center justify-between gap-2 shrink-0">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-[#9B2C2C] shrink-0" />
          <span>Gambar dikonversi ke **WebP**, disimpan di folder **Asset Hosting**, dan dikelola dalam folder.</span>
        </div>
        <div className="flex items-center gap-1.5 font-bold text-[11px] text-[#9B2C2C] dark:text-red-400">
          <span>{mediaList.length} Total Berkas</span>
          <span>•</span>
          <span>{folders.length} Folder Kategori</span>
        </div>
      </div>

      {/* MAIN LAYOUT: SIDEBAR FOLDERS + MEDIA CONTENT */}
      <div className="flex-1 bg-white dark:bg-slate-900 flex flex-col md:flex-row min-w-0 overflow-hidden">
        
        {/* LEFT FOLDER NAVIGATION SIDEBAR */}
        <div className="w-full md:w-64 bg-slate-50/80 dark:bg-slate-800/40 border-r border-slate-200 dark:border-slate-800 p-4 flex flex-col shrink-0">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <FolderOpen className="w-4 h-4 text-[#9B2C2C]" /> Folder Media
            </h3>

            <button
              onClick={() => setIsCreateFolderOpen(true)}
              className="p-1.5 rounded-lg bg-[#9B2C2C] hover:bg-[#800020] text-white text-xs font-bold transition-colors flex items-center gap-1"
              title="Buat Folder Baru"
            >
              <FolderPlus className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-1 overflow-y-auto max-h-52 md:max-h-none flex-1 pr-1">
            {/* All Files Folder */}
            <button
              onClick={() => setActiveFolderId('all')}
              className={`w-full px-3 py-2 rounded-xl text-xs font-bold flex items-center justify-between transition-all ${
                activeFolderId === 'all'
                  ? 'bg-[#9B2C2C] text-white shadow-xs'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              <span className="flex items-center gap-2 truncate">
                <Folder className="w-4 h-4" /> Semua Media
              </span>
              <span className={`px-2 py-0.5 rounded-md text-[10px] ${activeFolderId === 'all' ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'}`}>
                {mediaList.length}
              </span>
            </button>

            {/* Root Folder (Tanpa Folder) */}
            <button
              onClick={() => setActiveFolderId('root')}
              className={`w-full px-3 py-2 rounded-xl text-xs font-bold flex items-center justify-between transition-all ${
                activeFolderId === 'root'
                  ? 'bg-[#9B2C2C] text-white shadow-xs'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              <span className="flex items-center gap-2 truncate">
                <Folder className="w-4 h-4" /> Utama (Tanpa Folder)
              </span>
              <span className={`px-2 py-0.5 rounded-md text-[10px] ${activeFolderId === 'root' ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'}`}>
                {mediaList.filter(m => !m.folderId).length}
              </span>
            </button>

            {/* Custom Sub-folders */}
            <div className="pt-2 border-t border-slate-200 dark:border-slate-700/60 space-y-1">
              <p className="px-2 text-[10px] font-black uppercase text-slate-400 mb-1">Daftar Folder</p>
              {folders.map(folder => {
                const count = mediaList.filter(m => m.folderId === folder.id).length;
                const isActive = activeFolderId === folder.id;

                return (
                  <div key={folder.id} className="group relative flex items-center">
                    <button
                      onClick={() => setActiveFolderId(folder.id)}
                      className={`w-full px-3 py-2 rounded-xl text-xs font-bold flex items-center justify-between transition-all pr-14 ${
                        isActive
                          ? 'bg-[#9B2C2C] text-white shadow-xs'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                      }`}
                    >
                      <span className="flex items-center gap-2 truncate">
                        <Folder className="w-4 h-4 text-amber-500 shrink-0" />
                        <span className="truncate">{folder.name}</span>
                      </span>
                      <span className={`px-1.5 py-0.5 rounded text-[10px] ${isActive ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'}`}>
                        {count}
                      </span>
                    </button>

                    {/* Folder Quick Action Buttons */}
                    <div className="absolute right-1 top-1/2 -translate-y-1/2 flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={(e) => { e.stopPropagation(); setRenameFolderModal({ isOpen: true, folderId: folder.id, currentName: folder.name }); }}
                        className="p-1 rounded bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-blue-600 shadow-xs"
                        title="Ubah Nama Folder"
                      >
                        <Edit3 className="w-3 h-3" />
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); setDeleteConfirmDialog({ isOpen: true, type: 'folder', targetId: folder.id, targetName: folder.name, count }); }}
                        className="p-1 rounded bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-rose-600 shadow-xs"
                        title="Hapus Folder"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* RIGHT MEDIA FILES CONTENT */}
        <div className="flex-1 bg-white dark:bg-slate-900 flex flex-col min-w-0 overflow-hidden">
          
          {/* Header Row: Folder Title + Add New Upload */}
          <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 shrink-0">
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <FolderOpen className="w-5 h-5 text-[#9B2C2C]" />
                {activeFolderId === 'all' 
                  ? 'Semua Berkas Media' 
                  : activeFolderId === 'root'
                  ? 'Folder Utama'
                  : folders.find(f => f.id === activeFolderId)?.name || 'Folder Media'}
              </h3>
              
              <button
                onClick={() => setShowUploadDrawer(!showUploadDrawer)}
                className="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-xs font-extrabold shadow-2xs flex items-center gap-1.5 transition-colors"
              >
                <Plus className="w-3.5 h-3.5 text-[#9B2C2C]" />
                <span>Unggah Gambar Baru</span>
              </button>
            </div>

            <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-1.5">
              <span>Item Tampil:</span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 font-bold text-slate-800 dark:text-slate-200">
                {displayedMediaList.length} File
              </span>
            </div>
          </div>

          {/* ADD NEW UPLOAD DRAWER */}
          {showUploadDrawer && (
            <div className="p-4 bg-amber-50/80 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700 animate-fadeIn">
              <div
                onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`p-6 rounded-2xl border-2 border-dashed text-center cursor-pointer transition-all ${
                  isDragging 
                    ? 'border-[#9B2C2C] bg-red-50 dark:bg-slate-700' 
                    : 'border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 hover:border-[#9B2C2C]'
                }`}
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={(e) => e.target.files && handleProcessFiles(e.target.files)}
                  multiple
                  accept="image/*"
                  className="hidden"
                />

                <UploadCloud className="w-8 h-8 mx-auto text-[#9B2C2C] mb-2" />
                <p className="font-extrabold text-sm text-slate-800 dark:text-slate-100">
                  Unggah Gambar Ke Asset Hosting (Otomatis WebP)
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Tarik file di sini atau klik untuk memilih file dari komputer Anda.
                </p>
              </div>

              {/* Upload Progress Display */}
              {uploadQueue.length > 0 && (
                <div className="mt-3 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 space-y-2">
                  <p className="text-xs font-bold text-[#9B2C2C] flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 animate-spin" />
                    Mengonversi & Unggah WebP ({uploadQueue.length} File)...
                  </p>
                  {uploadQueue.map((item, idx) => (
                    <div key={idx} className="text-xs flex items-center justify-between gap-2">
                      <span className="truncate max-w-xs text-slate-700 dark:text-slate-300">{item.fileName}</span>
                      <span className="font-bold text-emerald-600">
                        {item.status === 'completed' ? '100% WebP Done ✓' : 'Konversi...'}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* FILTER & CONTROL TOOLBAR */}
          <div className="p-3 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 shrink-0">
            
            <div className="flex flex-wrap items-center gap-2">
              {/* View Switch Icons (List | Grid) */}
              <div className="flex items-center bg-white dark:bg-slate-800 rounded-xl p-0.5 border border-slate-200 dark:border-slate-700">
                <button
                  type="button"
                  onClick={() => setViewMode('list')}
                  className={`p-1.5 rounded-lg text-xs font-bold transition-all ${
                    viewMode === 'list'
                      ? 'bg-[#9B2C2C] text-white shadow-2xs'
                      : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700'
                  }`}
                  title="List View"
                >
                  <LayoutList className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded-lg text-xs font-bold transition-all ${
                    viewMode === 'grid'
                      ? 'bg-[#9B2C2C] text-white shadow-2xs'
                      : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700'
                  }`}
                  title="Grid View"
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
              </div>

              {/* Filter Dropdown 1: Media Types */}
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-semibold focus:outline-none focus:border-[#9B2C2C]"
              >
                <option value="all">Semua Tipe Media</option>
                <option value="images">Gambar (JPG, PNG, WebP)</option>
                <option value="webp">Hanya Format WebP</option>
              </select>

              {/* Filter Dropdown 2: Dates */}
              <select
                value={filterDate}
                onChange={(e) => setFilterDate(e.target.value)}
                className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-semibold focus:outline-none focus:border-[#9B2C2C]"
              >
                <option value="all">Semua Tanggal</option>
                <option value="aug-2026">Agustus 2026</option>
                <option value="jul-2026">Juli 2026</option>
              </select>

              {/* Bulk Select Toggle Button */}
              <button
                onClick={() => {
                  setIsBulkSelectMode(!isBulkSelectMode);
                  setSelectedMediaIds([]);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                  isBulkSelectMode
                    ? 'bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-950 dark:text-amber-200'
                    : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                {isBulkSelectMode ? 'Batal Pilih Masal' : 'Pilih Masal'}
              </button>
            </div>

            {/* Media Search Input */}
            <div className="relative w-full sm:w-52">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Cari berkas media..."
                value={searchMediaTerm}
                onChange={(e) => setSearchMediaTerm(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-[#9B2C2C]"
              />
            </div>
          </div>

          {/* BULK SELECTION ACTIVE ACTION BAR */}
          {isBulkSelectMode && (
            <div className="p-3 bg-red-50 dark:bg-slate-800 border-b border-red-200 dark:border-slate-700 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 font-bold text-red-900 dark:text-red-300">
                <CheckSquare className="w-4 h-4 text-[#9B2C2C]" />
                <span>{selectedMediaIds.length} berkas media terpilih</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  disabled={selectedMediaIds.length === 0}
                  onClick={() => setDeleteConfirmDialog({ isOpen: true, type: 'bulk', count: selectedMediaIds.length })}
                  className="px-3 py-1 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold disabled:opacity-40 flex items-center gap-1"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Hapus Terpilih</span>
                </button>
              </div>
            </div>
          )}

          {/* MEDIA CONTENT GRID / LIST AREA */}
          <div className="flex-1 p-4 overflow-y-auto min-h-0">
            {displayedMediaList.length === 0 ? (
              <div className="py-20 text-center text-slate-400 dark:text-slate-500">
                <ImageIcon className="w-12 h-12 mx-auto stroke-1 mb-2 opacity-50 text-[#9B2C2C]" />
                <p className="text-sm font-bold text-slate-700 dark:text-slate-300">Tidak ada berkas media di folder ini.</p>
                <p className="text-xs text-slate-400 mt-1">Klik "Unggah Gambar Baru" untuk mengunggah gambar ke folder ini.</p>
              </div>
            ) : viewMode === 'grid' ? (
              /* GRID VIEW */
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3.5">
                {displayedMediaList.map((media) => {
                  const isSelected = selectedMediaIds.includes(media.id);

                  return (
                    <div
                      key={media.id}
                      onClick={() => {
                        if (isBulkSelectMode) {
                          toggleSelectMedia(media.id);
                        } else if (onSelectImage) {
                          onSelectImage(media.url);
                          if (onCloseModal) onCloseModal();
                        } else {
                          setPreviewImage(media);
                        }
                      }}
                      className={`group relative aspect-square rounded-2xl bg-slate-100 dark:bg-slate-800 border-2 overflow-hidden cursor-pointer transition-all duration-200 shadow-2xs hover:shadow-md ${
                        isSelected 
                          ? 'border-[#9B2C2C] ring-2 ring-red-500/30' 
                          : 'border-slate-200 dark:border-slate-700 hover:border-[#9B2C2C] dark:hover:border-slate-500'
                      }`}
                    >
                      <img
                        src={media.url}
                        alt={media.fileName}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />

                      {/* WebP / Asset Badge */}
                      <span className="absolute top-2 left-2 px-1.5 py-0.5 rounded text-[9px] font-black bg-[#9B2C2C] text-white shadow-xs">
                        {media.type.includes('webp') ? 'WEBP' : 'ASSET'}
                      </span>

                      {/* Checkbox overlay in bulk select mode */}
                      {isBulkSelectMode && (
                        <div className="absolute top-2 right-2 p-1 rounded-lg bg-white/90 dark:bg-slate-900/90 shadow-md">
                          {isSelected ? (
                            <CheckSquare className="w-5 h-5 text-[#9B2C2C] fill-red-100" />
                          ) : (
                            <Square className="w-5 h-5 text-slate-400" />
                          )}
                        </div>
                      )}

                      {/* Hover Overlay with Actions (Rename, Move, Copy, Delete) */}
                      {!isBulkSelectMode && (
                        <div className="absolute inset-0 bg-slate-900/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-2.5 text-white">
                          <div className="flex justify-end gap-1">
                            <button
                              type="button"
                              onClick={(e) => { e.stopPropagation(); setRenameFileModal({ isOpen: true, fileId: media.id, currentName: media.fileName }); }}
                              className="p-1.5 rounded-lg bg-white/20 hover:bg-white/40 text-white backdrop-blur-xs transition-colors"
                              title="Ubah Nama File"
                            >
                              <Edit3 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              type="button"
                              onClick={(e) => { e.stopPropagation(); setMoveFileModal({ isOpen: true, fileId: media.id, fileName: media.fileName, targetFolderId: media.folderId || 'root' }); }}
                              className="p-1.5 rounded-lg bg-white/20 hover:bg-white/40 text-white backdrop-blur-xs transition-colors"
                              title="Pindahkan ke Folder Lain"
                            >
                              <Move className="w-3.5 h-3.5" />
                            </button>
                            <button
                              type="button"
                              onClick={(e) => { e.stopPropagation(); handleCopyUrl(media); }}
                              className="p-1.5 rounded-lg bg-white/20 hover:bg-white/40 text-white backdrop-blur-xs transition-colors"
                              title="Salin URL Gambar"
                            >
                              <Copy className="w-3.5 h-3.5" />
                            </button>
                            <button
                              type="button"
                              onClick={(e) => { e.stopPropagation(); setDeleteConfirmDialog({ isOpen: true, type: 'file', targetId: media.id, targetName: media.fileName }); }}
                              className="p-1.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-white backdrop-blur-xs transition-colors"
                              title="Hapus Berkas"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <div className="text-[11px]">
                            <p className="font-bold truncate text-white" title={media.fileName}>
                              {media.fileName}
                            </p>
                            <div className="flex items-center justify-between text-[10px] text-slate-200 mt-0.5">
                              <span>{formatFileSize(media.sizeBytes)}</span>
                              <span>{media.uploadedAt.substring(0, 10)}</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {copiedId === media.id && (
                        <div className="absolute inset-x-0 bottom-0 py-1 bg-emerald-600 text-white text-[10px] font-extrabold text-center">
                          URL Tersalin! ✓
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              /* LIST VIEW TABLE */
              <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-extrabold uppercase tracking-wider text-[10px] border-b border-slate-200 dark:border-slate-700">
                    <tr>
                      {isBulkSelectMode && <th className="p-3 w-8">Pilih</th>}
                      <th className="p-3">Pratinjau</th>
                      <th className="p-3">Nama Berkas</th>
                      <th className="p-3">Folder</th>
                      <th className="p-3">Ukuran</th>
                      <th className="p-3">Tanggal Unggah</th>
                      <th className="p-3 text-right">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-800 dark:text-slate-200">
                    {displayedMediaList.map(media => {
                      const isSelected = selectedMediaIds.includes(media.id);
                      const folderName = folders.find(f => f.id === media.folderId)?.name || 'Utama';

                      return (
                        <tr key={media.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/60">
                          {isBulkSelectMode && (
                            <td className="p-3">
                              <input
                                type="checkbox"
                                checked={isSelected}
                                onChange={() => toggleSelectMedia(media.id)}
                                className="rounded text-[#9B2C2C] focus:ring-red-500"
                              />
                            </td>
                          )}
                          <td className="p-3">
                            <div className="w-12 h-12 rounded-xl bg-slate-100 overflow-hidden border border-slate-200 shrink-0">
                              <img src={media.url} alt={media.fileName} className="w-full h-full object-cover" />
                            </div>
                          </td>
                          <td className="p-3">
                            <p className="font-bold text-slate-900 dark:text-slate-100">{media.fileName}</p>
                            <p className="text-[10px] text-slate-400 font-mono">Asli: {media.originalName}</p>
                          </td>
                          <td className="p-3">
                            <span className="px-2 py-0.5 rounded-lg bg-amber-100 dark:bg-slate-700 text-amber-800 dark:text-amber-300 font-bold text-[10px] flex items-center gap-1 w-fit">
                              <Folder className="w-3 h-3 text-amber-600" />
                              {folderName}
                            </span>
                          </td>
                          <td className="p-3 font-mono">{formatFileSize(media.sizeBytes)}</td>
                          <td className="p-3 text-slate-500 dark:text-slate-400">{media.uploadedAt}</td>
                          <td className="p-3 text-right">
                            <div className="flex items-center justify-end gap-1">
                              <button
                                onClick={() => setRenameFileModal({ isOpen: true, fileId: media.id, currentName: media.fileName })}
                                className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300"
                                title="Ubah Nama"
                              >
                                <Edit3 className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => setMoveFileModal({ isOpen: true, fileId: media.id, fileName: media.fileName, targetFolderId: media.folderId || 'root' })}
                                className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300"
                                title="Pindahkan Folder"
                              >
                                <Move className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => handleCopyUrl(media)}
                                className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300"
                                title="Salin URL"
                              >
                                <Copy className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => setDeleteConfirmDialog({ isOpen: true, type: 'file', targetId: media.id, targetName: media.fileName })}
                                className="p-1.5 rounded-lg bg-rose-100 text-rose-700 hover:bg-rose-200"
                                title="Hapus"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Bottom Footer Info */}
          <div className="p-3 bg-slate-50 dark:bg-slate-800/80 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 shrink-0">
            <span>Menampilkan <strong>{displayedMediaList.length}</strong> dari {mediaList.length} total media items.</span>
            <span className="font-bold text-[#9B2C2C]">Asset Hosting Directory & WebP Engine Active</span>
          </div>
        </div>
      </div>

      {/* --- MODAL 1: BUAT FOLDER BARU --- */}
      {isCreateFolderOpen && (
        <div className="fixed inset-0 z-[100000] bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-800 rounded-3xl max-w-md w-full p-6 text-slate-900 dark:text-slate-100 relative shadow-2xl border border-slate-200 dark:border-slate-700 animate-fadeIn">
            <button
              onClick={() => setIsCreateFolderOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-200"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-4">
              <FolderPlus className="w-6 h-6 text-[#9B2C2C]" />
              <h3 className="text-lg font-extrabold">Buat Folder Baru</h3>
            </div>

            <form onSubmit={handleCreateFolder} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Nama Folder Baru
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Foto Wisuda, Banner PMB..."
                  value={newFolderName}
                  onChange={(e) => setNewFolderName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:border-[#9B2C2C]"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsCreateFolderOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-200"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-[#9B2C2C] text-white hover:bg-[#800020] transition-colors"
                >
                  Simpan Folder
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* --- MODAL 2: UBAH NAMA FOLDER --- */}
      {renameFolderModal.isOpen && (
        <div className="fixed inset-0 z-[100000] bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-800 rounded-3xl max-w-md w-full p-6 text-slate-900 dark:text-slate-100 relative shadow-2xl border border-slate-200 dark:border-slate-700 animate-fadeIn">
            <button
              onClick={() => setRenameFolderModal({ isOpen: false, folderId: '', currentName: '' })}
              className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-200"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-4">
              <Edit3 className="w-6 h-6 text-[#9B2C2C]" />
              <h3 className="text-lg font-extrabold">Ubah Nama Folder</h3>
            </div>

            <form onSubmit={handleRenameFolder} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Nama Folder
                </label>
                <input
                  type="text"
                  required
                  value={renameFolderModal.currentName}
                  onChange={(e) => setRenameFolderModal({ ...renameFolderModal, currentName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:border-[#9B2C2C]"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setRenameFolderModal({ isOpen: false, folderId: '', currentName: '' })}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-200"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-[#9B2C2C] text-white hover:bg-[#800020] transition-colors"
                >
                  Simpan Perubahan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* --- MODAL 3: UBAH NAMA FILE --- */}
      {renameFileModal.isOpen && (
        <div className="fixed inset-0 z-[100000] bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-800 rounded-3xl max-w-md w-full p-6 text-slate-900 dark:text-slate-100 relative shadow-2xl border border-slate-200 dark:border-slate-700 animate-fadeIn">
            <button
              onClick={() => setRenameFileModal({ isOpen: false, fileId: '', currentName: '' })}
              className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-200"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-4">
              <Edit3 className="w-6 h-6 text-[#9B2C2C]" />
              <h3 className="text-lg font-extrabold">Ubah Nama Berkas</h3>
            </div>

            <form onSubmit={handleRenameFile} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Nama Berkas Media
                </label>
                <input
                  type="text"
                  required
                  value={renameFileModal.currentName}
                  onChange={(e) => setRenameFileModal({ ...renameFileModal, currentName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:border-[#9B2C2C]"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setRenameFileModal({ isOpen: false, fileId: '', currentName: '' })}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-200"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-[#9B2C2C] text-white hover:bg-[#800020] transition-colors"
                >
                  Simpan Nama
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* --- MODAL 4: PINDAHKAN FILE KE FOLDER LAIN --- */}
      {moveFileModal.isOpen && (
        <div className="fixed inset-0 z-[100000] bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-800 rounded-3xl max-w-md w-full p-6 text-slate-900 dark:text-slate-100 relative shadow-2xl border border-slate-200 dark:border-slate-700 animate-fadeIn">
            <button
              onClick={() => setMoveFileModal({ isOpen: false, fileId: '', fileName: '', targetFolderId: '' })}
              className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-200"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <Move className="w-6 h-6 text-[#9B2C2C]" />
              <h3 className="text-lg font-extrabold">Pindahkan Berkas Media</h3>
            </div>
            <p className="text-xs text-slate-500 mb-4 truncate font-mono">{moveFileModal.fileName}</p>

            <form onSubmit={handleMoveFile} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Pilih Folder Tujuan
                </label>
                <select
                  value={moveFileModal.targetFolderId}
                  onChange={(e) => setMoveFileModal({ ...moveFileModal, targetFolderId: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:border-[#9B2C2C]"
                >
                  <option value="root">Folder Utama (Akar)</option>
                  {folders.map(f => (
                    <option key={f.id} value={f.id}>{f.name}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setMoveFileModal({ isOpen: false, fileId: '', fileName: '', targetFolderId: '' })}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-200"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-[#9B2C2C] text-white hover:bg-[#800020] transition-colors"
                >
                  Pindahkan File
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* --- DIALOG BOX KONFIRMASI HAPUS (PROMINENT CONFIRMATION DIALOG BOX) --- */}
      {deleteConfirmDialog.isOpen && (
        <div className="fixed inset-0 z-[100000] bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-800 rounded-3xl max-w-md w-full p-6 text-slate-900 dark:text-slate-100 relative shadow-2xl border-2 border-rose-500/30 animate-fadeIn">
            
            <div className="w-12 h-12 rounded-2xl bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-4">
              <AlertTriangle className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-2">
              Konfirmasi Hapus {deleteConfirmDialog.type === 'folder' ? 'Folder' : deleteConfirmDialog.type === 'bulk' ? 'Masal' : 'Berkas Media'}
            </h3>

            <p className="text-xs text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              {deleteConfirmDialog.type === 'folder' ? (
                <>Apakah Anda yakin ingin menghapus folder <strong className="text-slate-900 dark:text-white">"{deleteConfirmDialog.targetName}"</strong>? File di dalamnya akan dipindahkan ke folder Utama.</>
              ) : deleteConfirmDialog.type === 'bulk' ? (
                <>Apakah Anda yakin ingin menghapus secara permanen <strong className="text-rose-600">{deleteConfirmDialog.count} berkas media</strong> terpilih dari hosting server dan database?</>
              ) : (
                <>Apakah Anda yakin ingin menghapus berkas <strong className="text-slate-900 dark:text-white font-mono">"{deleteConfirmDialog.targetName}"</strong> secara permanen?</>
              )}
            </p>

            <div className="flex items-center justify-end gap-3 pt-2 border-t border-slate-100 dark:border-slate-700">
              <button
                type="button"
                onClick={() => setDeleteConfirmDialog({ isOpen: false, type: 'file' })}
                className="px-4 py-2.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-200 transition-colors"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={
                  deleteConfirmDialog.type === 'folder' 
                    ? handleConfirmDeleteFolder 
                    : deleteConfirmDialog.type === 'bulk'
                    ? handleConfirmBulkDelete
                    : handleConfirmDeleteSingleFile
                }
                className="px-5 py-2.5 rounded-xl text-xs font-extrabold bg-rose-600 hover:bg-rose-700 text-white transition-colors shadow-md shadow-rose-500/20 flex items-center gap-1.5"
              >
                <Trash2 className="w-4 h-4" />
                <span>Ya, Hapus Permanen</span>
              </button>
            </div>

          </div>
        </div>
      )}

      {/* --- PREVIEW IMAGE LIGHTBOX --- */}
      {previewImage && (
        <div className="fixed inset-0 z-[100000] bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-800 rounded-3xl max-w-2xl w-full p-6 text-slate-900 dark:text-slate-100 relative shadow-2xl border border-slate-200 dark:border-slate-700">
            <button
              onClick={() => setPreviewImage(null)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-200"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-lg font-extrabold mb-4 text-[#9B2C2C] dark:text-red-400">Pratinjau File Media Hosting</h3>

            <div className="aspect-video bg-slate-100 dark:bg-slate-900 rounded-2xl overflow-hidden flex items-center justify-center mb-4 border border-slate-200 dark:border-slate-700">
              <img src={previewImage.url} alt={previewImage.fileName} className="w-full h-full object-contain" />
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs bg-slate-50 dark:bg-slate-900 p-3 rounded-2xl border border-slate-200 dark:border-slate-700">
              <div>
                <p className="font-bold text-slate-500">Nama File WebP:</p>
                <p className="font-semibold text-slate-900 dark:text-slate-100 truncate">{previewImage.fileName}</p>
              </div>
              <div>
                <p className="font-bold text-slate-500">Ukuran File:</p>
                <p className="font-semibold text-[#9B2C2C] dark:text-red-400">{formatFileSize(previewImage.sizeBytes)}</p>
              </div>
              <div>
                <p className="font-bold text-slate-500">Dimensi Gambar:</p>
                <p className="font-semibold text-slate-900 dark:text-slate-100">
                  {previewImage.dimensions ? `${previewImage.dimensions.width} x ${previewImage.dimensions.height} px` : 'N/A'}
                </p>
              </div>
              <div>
                <p className="font-bold text-slate-500">Tanggal Unggah:</p>
                <p className="font-semibold text-slate-900 dark:text-slate-100">{previewImage.uploadedAt}</p>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-end gap-2">
              <button
                onClick={() => handleCopyUrl(previewImage)}
                className="px-4 py-2 text-xs font-bold rounded-xl bg-[#9B2C2C] text-white hover:bg-[#800020] transition-colors flex items-center gap-1.5"
              >
                <Copy className="w-4 h-4" />
                <span>Salin URL Gambar</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
