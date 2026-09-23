import React from 'react';

interface VisualArtProps {
  type: 'coffee' | 'trung' | 'data' | 'bicycles' | 'debate' | 'materials' | 'wildlife';
  className?: string;
  caption?: string;
}

export const VisualArtAsset: React.FC<VisualArtProps> = ({ type, className = '', caption }) => {
  return (
    <div className={`relative rounded-2xl overflow-hidden bg-[#FAF9F2] border border-[#335C33]/15 flex flex-col items-center justify-center group ${className}`}>
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FAF9F2] via-[#F6F6EE] to-[#E3EDD3]/30 pointer-events-none" />
      
      {/* Ambient circular aura */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#335C33]/5 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#8C5A35]/5 rounded-full blur-xl pointer-events-none" />

      {/* SVG Illustrations tailored for each domain */}
      <div className="relative z-10 p-6 flex flex-col items-center justify-center w-full">
        {type === 'coffee' && (
          <svg viewBox="0 0 320 180" className="w-full max-w-[280px] h-auto drop-shadow-sm text-[#335C33]" fill="none" stroke="currentColor">
            {/* Coffee branch & berries */}
            <path d="M40 140 C 90 120, 160 80, 280 50" strokeWidth="3" strokeLinecap="round" />
            <path d="M90 120 C 80 95, 100 80, 120 85 C 135 90, 130 110, 105 118" fill="#335C33" fillOpacity="0.15" strokeWidth="2" />
            <path d="M160 80 C 145 55, 175 40, 195 50 C 210 60, 200 78, 175 82" fill="#335C33" fillOpacity="0.15" strokeWidth="2" />
            <path d="M220 62 C 210 35, 240 25, 260 35 C 275 45, 265 62, 235 64" fill="#335C33" fillOpacity="0.15" strokeWidth="2" />
            {/* Coffee Cherries & Cascara Husk */}
            <circle cx="105" cy="115" r="9" fill="#8C5A35" stroke="#335C33" strokeWidth="2" />
            <circle cx="120" cy="122" r="8" fill="#335C33" stroke="#8C5A35" strokeWidth="2" />
            <circle cx="175" cy="78" r="9" fill="#8C5A35" stroke="#335C33" strokeWidth="2" />
            <circle cx="190" cy="85" r="8" fill="#335C33" stroke="#8C5A35" strokeWidth="2" />
            <circle cx="235" cy="60" r="9" fill="#8C5A35" stroke="#335C33" strokeWidth="2" />
            {/* Circular Arrow loop representing CAFLOOP upcycling */}
            <path d="M 60 40 A 28 28 0 1 1 80 75" stroke="#8C5A35" strokeWidth="2.5" strokeDasharray="3 3" />
            <polygon points="82,78 72,75 80,67" fill="#8C5A35" />
            <text x="60" y="55" fontSize="9" fontWeight="bold" fill="#335C33" textAnchor="middle" fontFamily="Lora">LOOP</text>
          </svg>
        )}

        {type === 'trung' && (
          <svg viewBox="0 0 320 180" className="w-full max-w-[280px] h-auto drop-shadow-sm text-[#335C33]" fill="none" stroke="currentColor">
            {/* T'rung Suspended Bamboo Pipes */}
            <line x1="50" y1="30" x2="270" y2="70" stroke="#8C5A35" strokeWidth="3" strokeLinecap="round" />
            <line x1="50" y1="150" x2="270" y2="130" stroke="#8C5A35" strokeWidth="3" strokeLinecap="round" />
            {/* Bamboo Tubes of descending sizes */}
            {[
              { x: 70, yTop: 34, h: 114, w: 14 },
              { x: 95, yTop: 39, h: 105, w: 13 },
              { x: 120, yTop: 43, h: 96, w: 12 },
              { x: 145, yTop: 48, h: 88, w: 12 },
              { x: 170, yTop: 53, h: 79, w: 11 },
              { x: 195, yTop: 58, h: 71, w: 10 },
              { x: 220, yTop: 62, h: 63, w: 10 },
              { x: 245, yTop: 67, h: 56, w: 9 },
            ].map((p, idx) => (
              <g key={idx}>
                <rect x={p.x} y={p.yTop} width={p.w} height={p.h} rx="4" fill="#E3EDD3" stroke="#335C33" strokeWidth="2" />
                <line x1={p.x + 3} y1={p.yTop + 6} x2={p.x + p.w - 3} y2={p.yTop + 6} stroke="#8C5A35" strokeWidth="1.5" />
                <line x1={p.x + 3} y1={p.yTop + p.h - 8} x2={p.x + p.w - 3} y2={p.yTop + p.h - 8} stroke="#8C5A35" strokeWidth="1.5" />
              </g>
            ))}
            {/* Sound Wave Ripple */}
            <path d="M 260 40 Q 280 30 295 50 T 310 40" stroke="#8C5A35" strokeWidth="2" strokeLinecap="round" />
            <path d="M 265 52 Q 285 45 298 62" stroke="#335C33" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        )}

        {type === 'data' && (
          <svg viewBox="0 0 320 180" className="w-full max-w-[280px] h-auto drop-shadow-sm text-[#335C33]" fill="none" stroke="currentColor">
            {/* Grid Coordinates */}
            <line x1="45" y1="140" x2="280" y2="140" stroke="#335C33" strokeWidth="2" />
            <line x1="45" y1="25" x2="45" y2="140" stroke="#335C33" strokeWidth="2" />
            {/* Grid lines subtle */}
            <line x1="45" y1="100" x2="280" y2="100" stroke="#335C33" strokeWidth="1" strokeOpacity="0.15" strokeDasharray="3 3" />
            <line x1="45" y1="60" x2="280" y2="60" stroke="#335C33" strokeWidth="1" strokeOpacity="0.15" strokeDasharray="3 3" />
            {/* Logistic Sigmoid Curve & Data nodes */}
            <path d="M 45 132 C 110 130, 140 120, 160 85 C 180 50, 210 38, 280 34" stroke="#335C33" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M 45 140 L 45 132 C 110 130, 140 120, 160 85 C 180 50, 210 38, 280 34 L 280 140 Z" fill="#E3EDD3" fillOpacity="0.4" />
            {/* Regression Points */}
            <circle cx="85" cy="130" r="4.5" fill="#8C5A35" stroke="#FAF9F2" strokeWidth="1.5" />
            <circle cx="120" cy="120" r="4.5" fill="#8C5A35" stroke="#FAF9F2" strokeWidth="1.5" />
            <circle cx="155" cy="92" r="5" fill="#335C33" stroke="#FAF9F2" strokeWidth="1.5" />
            <circle cx="180" cy="58" r="5" fill="#335C33" stroke="#FAF9F2" strokeWidth="1.5" />
            <circle cx="215" cy="42" r="4.5" fill="#8C5A35" stroke="#FAF9F2" strokeWidth="1.5" />
            <circle cx="250" cy="36" r="4.5" fill="#8C5A35" stroke="#FAF9F2" strokeWidth="1.5" />
            {/* Regression Stat Box */}
            <rect x="185" y="70" width="85" height="42" rx="8" fill="#FAF9F2" stroke="#335C33" strokeWidth="1.5" />
            <text x="195" y="86" fontSize="10" fontWeight="bold" fill="#335C33">p &lt; 0.001</text>
            <text x="195" y="102" fontSize="9.5" fontWeight="600" fill="#8C5A35">OR = 3.482</text>
          </svg>
        )}

        {type === 'bicycles' && (
          <svg viewBox="0 0 320 180" className="w-full max-w-[280px] h-auto drop-shadow-sm text-[#335C33]" fill="none" stroke="currentColor">
            {/* Bicycle frame */}
            <circle cx="90" cy="115" r="32" stroke="#335C33" strokeWidth="3" fill="#E3EDD3" fillOpacity="0.25" />
            <circle cx="230" cy="115" r="32" stroke="#335C33" strokeWidth="3" fill="#E3EDD3" fillOpacity="0.25" />
            <circle cx="90" cy="115" r="5" fill="#335C33" />
            <circle cx="230" cy="115" r="5" fill="#335C33" />
            <circle cx="160" cy="115" r="8" fill="#8C5A35" stroke="#335C33" strokeWidth="2" />
            <line x1="90" y1="115" x2="160" y2="115" stroke="#335C33" strokeWidth="3" />
            <line x1="90" y1="115" x2="135" y2="65" stroke="#335C33" strokeWidth="3" />
            <line x1="160" y1="115" x2="135" y2="65" stroke="#335C33" strokeWidth="3" />
            <line x1="160" y1="115" x2="200" y2="65" stroke="#335C33" strokeWidth="3" />
            <line x1="135" y1="65" x2="200" y2="65" stroke="#335C33" strokeWidth="3" />
            <line x1="200" y1="65" x2="230" y2="115" stroke="#335C33" strokeWidth="3" />
            {/* Saddle & Handlebars */}
            <line x1="125" y1="58" x2="145" y2="58" stroke="#8C5A35" strokeWidth="4" strokeLinecap="round" />
            <line x1="135" y1="58" x2="135" y2="65" stroke="#335C33" strokeWidth="3" />
            <line x1="195" y1="52" x2="210" y2="48" stroke="#8C5A35" strokeWidth="4" strokeLinecap="round" />
            <line x1="200" y1="65" x2="200" y2="50" stroke="#335C33" strokeWidth="3" />
            {/* Gift ribbon badge */}
            <circle cx="160" cy="40" r="16" fill="#8C5A35" stroke="#FAF9F2" strokeWidth="2" />
            <text x="160" y="44" fontSize="11" fontWeight="bold" fill="#F6F6EE" textAnchor="middle" fontFamily="Lora">77</text>
          </svg>
        )}

        {type === 'materials' && (
          <svg viewBox="0 0 320 180" className="w-full max-w-[280px] h-auto drop-shadow-sm text-[#335C33]" fill="none" stroke="currentColor">
            {/* Atomic lattice / VESTA representation */}
            <g stroke="#335C33" strokeWidth="1.5" strokeOpacity="0.4">
              <line x1="90" y1="50" x2="160" y2="35" />
              <line x1="160" y1="35" x2="230" y2="50" />
              <line x1="90" y1="50" x2="60" y2="110" />
              <line x1="160" y1="35" x2="160" y2="100" />
              <line x1="230" y1="50" x2="260" y2="110" />
              <line x1="60" y1="110" x2="160" y2="100" />
              <line x1="160" y1="100" x2="260" y2="110" />
              <line x1="60" y1="110" x2="120" y2="155" />
              <line x1="160" y1="100" x2="160" y2="150" />
              <line x1="260" y1="110" x2="200" y2="155" />
              <line x1="120" y1="155" x2="200" y2="155" />
            </g>
            {/* Atoms */}
            <circle cx="160" cy="100" r="14" fill="#335C33" stroke="#E3EDD3" strokeWidth="3" />
            <circle cx="90" cy="50" r="9" fill="#8C5A35" stroke="#FAF9F2" strokeWidth="2" />
            <circle cx="160" cy="35" r="9" fill="#8C5A35" stroke="#FAF9F2" strokeWidth="2" />
            <circle cx="230" cy="50" r="9" fill="#8C5A35" stroke="#FAF9F2" strokeWidth="2" />
            <circle cx="60" cy="110" r="9" fill="#8C5A35" stroke="#FAF9F2" strokeWidth="2" />
            <circle cx="260" cy="110" r="9" fill="#8C5A35" stroke="#FAF9F2" strokeWidth="2" />
            <circle cx="120" cy="155" r="9" fill="#8C5A35" stroke="#FAF9F2" strokeWidth="2" />
            <circle cx="200" cy="155" r="9" fill="#8C5A35" stroke="#FAF9F2" strokeWidth="2" />
            <text x="160" y="104" fontSize="9" fontWeight="bold" fill="#F6F6EE" textAnchor="middle">DFT</text>
          </svg>
        )}

        {type === 'debate' && (
          <svg viewBox="0 0 320 180" className="w-full max-w-[280px] h-auto drop-shadow-sm text-[#335C33]" fill="none" stroke="currentColor">
            {/* Balance scales of justice & economics */}
            <line x1="160" y1="30" x2="160" y2="145" stroke="#335C33" strokeWidth="4" strokeLinecap="round" />
            <line x1="120" y1="145" x2="200" y2="145" stroke="#335C33" strokeWidth="4" strokeLinecap="round" />
            <circle cx="160" cy="35" r="7" fill="#8C5A35" />
            <line x1="70" y1="60" x2="250" y2="60" stroke="#335C33" strokeWidth="3.5" strokeLinecap="round" />
            {/* Left Pan */}
            <line x1="70" y1="60" x2="45" y2="105" stroke="#8C5A35" strokeWidth="1.5" />
            <line x1="70" y1="60" x2="95" y2="105" stroke="#8C5A35" strokeWidth="1.5" />
            <path d="M 40 105 Q 70 120 100 105 Z" fill="#E3EDD3" stroke="#335C33" strokeWidth="2" />
            {/* Right Pan */}
            <line x1="250" y1="60" x2="225" y2="105" stroke="#8C5A35" strokeWidth="1.5" />
            <line x1="250" y1="60" x2="275" y2="105" stroke="#8C5A35" strokeWidth="1.5" />
            <path d="M 220 105 Q 250 120 280 105 Z" fill="#E3EDD3" stroke="#335C33" strokeWidth="2" />
            {/* Laurel Wreath */}
            <path d="M 125 90 C 135 110, 150 120, 160 120 C 170 120, 185 110, 195 90" stroke="#8C5A35" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 3" />
          </svg>
        )}

        {type === 'wildlife' && (
          <svg viewBox="0 0 320 180" className="w-full max-w-[280px] h-auto drop-shadow-sm text-[#335C33]" fill="none" stroke="currentColor">
            {/* Forest foliage & wildlife conservation symbol */}
            <path d="M 90 140 C 90 110, 130 90, 140 60 C 150 90, 190 110, 190 140 Z" fill="#E3EDD3" stroke="#335C33" strokeWidth="2.5" />
            <path d="M 140 60 L 140 140" stroke="#335C33" strokeWidth="2" />
            <circle cx="210" cy="75" r="28" fill="#FAF9F2" stroke="#8C5A35" strokeWidth="2" />
            {/* Animal footprint */}
            <ellipse cx="210" cy="80" rx="9" ry="7" fill="#8C5A35" />
            <circle cx="199" cy="67" r="3.5" fill="#8C5A35" />
            <circle cx="206" cy="64" r="3.5" fill="#8C5A35" />
            <circle cx="214" cy="64" r="3.5" fill="#8C5A35" />
            <circle cx="221" cy="67" r="3.5" fill="#8C5A35" />
            {/* Heart of conservation */}
            <path d="M 65 65 C 65 55, 78 50, 85 60 C 92 50, 105 55, 105 65 C 105 80, 85 92, 85 92 C 85 92, 65 80, 65 65 Z" fill="#8C5A35" fillOpacity="0.8" stroke="#335C33" strokeWidth="1.5" />
          </svg>
        )}
      </div>

      {caption && (
        <div className="w-full bg-[#FAF9F2]/90 border-t border-[#335C33]/10 px-3.5 py-2 text-center text-[11px] font-medium text-[#8C5A35] flex items-center justify-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#335C33]" />
          <span>{caption}</span>
        </div>
      )}
    </div>
  );
};
