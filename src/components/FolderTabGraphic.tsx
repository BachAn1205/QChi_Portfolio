import React from 'react';

interface FolderTabGraphicProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  rotate?: number;
  variant?: 'matcha' | 'forest' | 'terracotta' | 'cream';
  label?: string;
}

export const FolderTabGraphic: React.FC<FolderTabGraphicProps> = ({
  className = '',
  size = 'md',
  rotate = 0,
  variant = 'matcha',
  label,
}) => {
  const colorConfig = {
    matcha: {
      tab: '#CDE0B7',
      tabBorder: '#A9C589',
      body: 'linear-gradient(145deg, #DEECCE 0%, #C2D9A7 100%)',
      bodyBorder: '#A4C382',
      shadow: 'rgba(51, 92, 51, 0.12)',
      labelColor: '#2B4E2B',
    },
    forest: {
      tab: '#3D6B3D',
      tabBorder: '#274927',
      body: 'linear-gradient(145deg, #325832 0%, #203A20 100%)',
      bodyBorder: '#1F371F',
      shadow: 'rgba(32, 58, 32, 0.2)',
      labelColor: '#E3EDD3',
    },
    terracotta: {
      tab: '#B57E57',
      tabBorder: '#8C5A35',
      body: 'linear-gradient(145deg, #A86F48 0%, #7E4A28 100%)',
      bodyBorder: '#6E4021',
      shadow: 'rgba(140, 90, 53, 0.15)',
      labelColor: '#FFFFFF',
    },
    cream: {
      tab: '#EBEAE0',
      tabBorder: '#D8D6C2',
      body: 'linear-gradient(145deg, #FAF9F3 0%, #EDECE1 100%)',
      bodyBorder: '#D2D0BA',
      shadow: 'rgba(44, 46, 43, 0.08)',
      labelColor: '#2C2E2B',
    },
  };

  const c = colorConfig[variant];

  return (
    <div
      className={`relative inline-block transition-transform duration-500 hover:scale-105 pointer-events-none select-none ${className}`}
      style={{
        transform: `rotate(${rotate}deg)`,
        filter: `drop-shadow(0 10px 18px ${c.shadow})`,
      }}
    >
      <svg
        viewBox="0 0 160 120"
        className="w-full h-full overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Back folder flap */}
        <path
          d="M 10 32 L 60 32 C 68 32, 72 20, 80 20 L 142 20 C 150 20, 154 26, 154 34 L 154 106 C 154 114, 148 120, 140 120 L 14 120 C 6 120, 0 114, 0 106 L 0 42 C 0 34, 4 32, 10 32 Z"
          fill={c.tab}
          stroke={c.tabBorder}
          strokeWidth="1.5"
        />

        {/* Front folder main body */}
        <path
          d="M 6 42 L 146 42 C 154 42, 160 48, 160 56 L 155 110 C 154 116, 148 120, 141 120 L 13 120 C 6 120, 1 116, 0 110 L 0 52 C 0 46, 3 42, 6 42 Z"
          fill={`url(#folder-gradient-${variant})`}
          stroke={c.bodyBorder}
          strokeWidth="1.5"
        />

        {/* Gloss highlight edge */}
        <line
          x1="12"
          y1="44"
          x2="148"
          y2="44"
          stroke="rgba(255, 255, 255, 0.45)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        <defs>
          <linearGradient id={`folder-gradient-${variant}`} x1="0" y1="40" x2="160" y2="120" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={variant === 'forest' ? '#355E35' : variant === 'terracotta' ? '#A86F48' : variant === 'cream' ? '#FAF9F2' : '#E0ECCF'} />
            <stop offset="100%" stopColor={variant === 'forest' ? '#1D351D' : variant === 'terracotta' ? '#784422' : variant === 'cream' ? '#E5E4D6' : '#BCD4A1'} />
          </linearGradient>
        </defs>
      </svg>

      {label && (
        <span
          className="absolute bottom-4 left-4 right-4 text-center text-xs font-bold truncate tracking-tight"
          style={{ color: c.labelColor, fontFamily: 'var(--font-display)' }}
        >
          {label}
        </span>
      )}
    </div>
  );
};
