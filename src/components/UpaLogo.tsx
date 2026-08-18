import React from 'react';

interface UpaLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | number;
  showText?: boolean;
}

export const UpaLogo: React.FC<UpaLogoProps> = ({ 
  className = '', 
  size = 'md',
  showText = false 
}) => {
  let dimension = 40;
  if (typeof size === 'number') {
    dimension = size;
  } else {
    switch (size) {
      case 'sm': dimension = 32; break;
      case 'md': dimension = 44; break;
      case 'lg': dimension = 56; break;
      case 'xl': dimension = 72; break;
    }
  }

  const fontSize = Math.max(10, Math.floor(dimension * 0.38));

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Clean Modern Badge Logo (Non-SVG) */}
      <div 
        style={{ width: `${dimension}px`, height: `${dimension}px`, fontSize: `${fontSize}px` }}
        className="rounded-2xl bg-gradient-to-tr from-red-600 via-red-500 to-rose-600 text-white font-black flex items-center justify-center shadow-lg border border-white/20 shrink-0 select-none tracking-widest hover:scale-105 transition-transform duration-200"
      >
        UPA
      </div>

      {showText && (
        <div className="flex flex-col justify-center">
          <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 dark:text-white leading-tight">
            Fakultas Teknik & Informatika
          </span>
          <span className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-semibold tracking-wide">
            Universitas Patria Artha (U.P.A)
          </span>
        </div>
      )}
    </div>
  );
};
