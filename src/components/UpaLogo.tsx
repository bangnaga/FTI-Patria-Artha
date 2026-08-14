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

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Official Universitas Patria Artha (U.P.A) Crest Emblem SVG */}
      <svg 
        width={dimension} 
        height={dimension} 
        viewBox="0 0 200 220" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-md shrink-0 transition-transform duration-200 hover:scale-105"
      >
        <defs>
          {/* Gold Gradient */}
          <linearGradient id="upaGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF176" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>

          {/* Eagle Gold Gradient */}
          <linearGradient id="eagleGoldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FDE047" />
            <stop offset="50%" stopColor="#EAB308" />
            <stop offset="100%" stopColor="#A16207" />
          </linearGradient>

          {/* Navy Shield Gradient */}
          <linearGradient id="navyShieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0F2042" />
            <stop offset="100%" stopColor="#060D1E" />
          </linearGradient>

          {/* Red Inner Shield Gradient */}
          <linearGradient id="redShieldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#DC2626" />
            <stop offset="100%" stopColor="#991B1B" />
          </linearGradient>
        </defs>

        {/* Outer Gold Border Outline */}
        <polygon 
          points="100,5 170,25 185,145 100,215 15,145 30,25" 
          fill="url(#upaGoldGrad)" 
        />

        {/* Outer Navy Blue Shield */}
        <polygon 
          points="100,10 165,28 178,141 100,208 22,141 35,28" 
          fill="url(#navyShieldGrad)" 
        />

        {/* Outer Text: U.P.A (Top) */}
        <text x="100" y="24" fill="#FFFFFF" fontSize="16" fontWeight="900" fontFamily="sans-serif" textAnchor="middle" letterSpacing="3">
          U . P . A
        </text>

        {/* Outer Text: PATRIA (Left) */}
        <text 
          x="28" 
          y="85" 
          fill="#FFFFFF" 
          fontSize="13" 
          fontWeight="900" 
          fontFamily="sans-serif" 
          textAnchor="middle" 
          transform="rotate(-72, 28, 85)" 
          letterSpacing="2"
        >
          PATRIA
        </text>

        {/* Outer Text: ARTHA (Right) */}
        <text 
          x="172" 
          y="85" 
          fill="#FFFFFF" 
          fontSize="13" 
          fontWeight="900" 
          fontFamily="sans-serif" 
          textAnchor="middle" 
          transform="rotate(72, 172, 85)" 
          letterSpacing="2"
        >
          ARTHA
        </text>

        {/* Silver Stars on Top Corners */}
        <polygon points="45,35 47,40 52,40 48,43 50,48 45,45 40,48 42,43 38,40 43,40" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="0.5" />
        <polygon points="155,35 157,40 162,40 158,43 160,48 155,45 150,48 152,43 148,40 153,40" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="0.5" />

        {/* Inner Shield (Red/White Double-Bordered Shield) */}
        <polygon points="100,32 150,45 160,130 100,175 40,130 50,45" fill="url(#upaGoldGrad)" />
        <polygon points="100,35 147,47 156,127 100,170 44,127 53,47" fill="#FFFFFF" />
        <polygon points="100,37 145,49 153,125 100,167 47,125 55,49" fill="url(#redShieldGrad)" />

        {/* Inner Shield Diagonal Split (White Lower Right Background) */}
        <polygon points="100,37 145,49 153,125 100,167" fill="#FFFFFF" opacity="0.9" />
        <polygon points="100,37 145,49 153,125 100,167" fill="url(#redShieldGrad)" opacity="0.3" />

        {/* PA Patria Artha Box at top inner shield */}
        <rect x="72" y="45" width="56" height="26" rx="2" fill="#FFFFFF" stroke="#DC2626" strokeWidth="1.5" />
        {/* Green PA emblem */}
        <path d="M 78 62 L 84 50 L 92 50 L 86 62 Z" fill="#16A34A" />
        <path d="M 94 62 L 102 50 L 110 62 Z" fill="#16A34A" />
        <text x="100" y="68" fill="#DC2626" fontSize="5.5" fontWeight="900" fontFamily="sans-serif" textAnchor="middle">
          PATRIA ARTHA
        </text>

        {/* Silver Star below PA Box */}
        <polygon points="100,73 102,77 106,77 103,80 104,84 100,82 96,84 97,80 94,77 98,77" fill="#F8FAFC" stroke="#64748B" strokeWidth="0.5" />

        {/* Golden Eagle spread wings */}
        <g id="goldenEagle">
          {/* Left Wing Feathers */}
          <path d="M 100 120 C 85 110 60 90 52 65 C 58 75 66 90 74 100 C 66 88 56 75 50 60 C 58 72 70 88 80 102 C 72 88 64 78 58 65 C 66 78 80 98 88 108 C 80 98 74 88 70 78 C 78 92 90 108 96 114 Z" fill="url(#eagleGoldGrad)" stroke="#B45309" strokeWidth="0.5" />
          
          {/* Right Wing Feathers */}
          <path d="M 100 120 C 115 110 140 90 148 65 C 142 75 134 90 126 100 C 134 88 144 75 150 60 C 142 72 130 88 120 102 C 128 88 136 78 142 65 C 134 78 120 98 112 108 C 120 98 126 88 130 78 C 122 92 110 108 104 114 Z" fill="url(#eagleGoldGrad)" stroke="#B45309" strokeWidth="0.5" />

          {/* Eagle Tail Feathers */}
          <path d="M 90 130 L 85 150 L 100 158 L 115 150 L 110 130 Z" fill="url(#eagleGoldGrad)" stroke="#78350F" strokeWidth="0.5" />

          {/* Eagle Body & Breast */}
          <ellipse cx="100" cy="122" rx="14" ry="18" fill="url(#eagleGoldGrad)" stroke="#78350F" strokeWidth="0.5" />

          {/* Eagle Head (White with Yellow Beak) */}
          <path d="M 94 106 C 94 100 100 96 106 96 C 108 96 110 98 112 100 L 115 102 L 108 105 L 106 108 Z" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="0.5" />
          {/* Eagle Beak */}
          <path d="M 108 100 L 116 102 L 110 106 Z" fill="#F59E0B" />
          {/* Eagle Eye */}
          <circle cx="103" cy="101" r="1" fill="#0F172A" />

          {/* Eagle Claws */}
          <path d="M 92 145 L 88 152 M 95 146 L 93 154 M 98 145 L 98 153" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M 108 145 L 112 152 M 105 146 L 107 154 M 102 145 L 102 153" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
        </g>

        {/* Bottom Ribbon / Banner (Navy Blue with Gold Trim) */}
        <path d="M 30 155 Q 100 178 170 155 L 175 178 Q 100 205 25 178 Z" fill="url(#navyShieldGrad)" stroke="url(#upaGoldGrad)" strokeWidth="2" />

        {/* Bottom Text: UNIVERSITAS */}
        <path id="ribbonCurve" d="M 32 173 Q 100 193 168 173" fill="none" />
        <text fontSize="12" fontWeight="900" fontFamily="sans-serif" fill="#FFFFFF" letterSpacing="2.5">
          <textPath href="#ribbonCurve" startOffset="50%" textAnchor="middle">
            UNIVERSITAS
          </textPath>
        </text>
      </svg>

      {showText && (
        <div className="flex flex-col">
          <span className="font-extrabold text-base sm:text-lg tracking-tight text-[#FFF5F5] leading-tight">
            Fakultas Teknik & Informatika
          </span>
          <span className="text-[11px] sm:text-xs text-[#FFF5F5]/80 font-semibold tracking-wide">
            Universitas Patria Artha (U.P.A)
          </span>
        </div>
      )}
    </div>
  );
};
