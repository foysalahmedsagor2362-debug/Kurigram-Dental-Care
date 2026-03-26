import React from 'react';

interface LogoProps {
  variant?: 'horizontal' | 'badge';
  theme?: 'light' | 'dark';
  className?: string;
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  variant = 'horizontal', 
  theme = 'light', 
  className = '',
  showTagline = true 
}) => {
  const primaryColor = '#2A7FFF';
  const accentColor = '#4FD1C5'; // Light teal
  const textColor = theme === 'light' ? '#1A202C' : '#FFFFFF';
  const secondaryTextColor = theme === 'light' ? '#718096' : '#A0AEC0';

  const Icon = ({ size = "100%" }: { size?: string | number }) => (
    <svg 
      viewBox="0 0 100 100" 
      style={{ width: size, height: size }}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Tooth Base - Minimalist & Premium */}
      <path 
        d="M50 15C38 15 30 22 30 40C30 55 35 85 50 85C65 85 70 55 70 40C70 22 62 15 50 15Z" 
        fill={primaryColor} 
        fillOpacity="0.08"
      />
      <path 
        d="M50 20C40 20 32 26 32 40C32 52 36 78 50 78C64 78 68 52 68 40C68 26 60 20 50 20Z" 
        stroke={primaryColor} 
        strokeWidth="3.5" 
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Leaf / Smile Element - Symbolizing Care & Health */}
      <path 
        d="M38 52C42 60 58 60 62 52" 
        stroke={accentColor} 
        strokeWidth="4" 
        strokeLinecap="round"
      />
      <path 
        d="M62 52C65 48 68 48 72 50" 
        stroke={accentColor} 
        strokeWidth="3" 
        strokeLinecap="round"
      />
      
      {/* Subtle Medical Cross */}
      <path 
        d="M50 32V44M44 38H56" 
        stroke={primaryColor} 
        strokeWidth="3" 
        strokeLinecap="round"
      />
    </svg>
  );

  if (variant === 'badge') {
    return (
      <div className={`relative flex items-center justify-center ${className}`}>
        {/* Circular Container */}
        <div 
          className="absolute inset-0 rounded-full border-2" 
          style={{ borderColor: `${primaryColor}20`, backgroundColor: theme === 'dark' ? '#1A202C' : 'white' }} 
        />
        <div className="relative flex flex-col items-center p-6">
          <div className="w-16 h-16 mb-3">
            <Icon />
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold text-sm tracking-tighter leading-none" style={{ color: textColor }}>
              KURIGRAM
            </span>
            <span className="font-bold text-[8px] tracking-[0.25em] uppercase mt-1" style={{ color: primaryColor }}>
              DENTAL CARE
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="w-12 h-12 flex-shrink-0">
        <Icon />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col -space-y-1">
          <span className="font-bold text-2xl tracking-tight" style={{ color: textColor }}>
            KURIGRAM
          </span>
          <span className="font-bold text-[10px] tracking-[0.3em] uppercase" style={{ color: primaryColor }}>
            DENTAL CARE
          </span>
        </div>
        {showTagline && (
          <span className="text-[9px] font-semibold tracking-widest uppercase mt-1 opacity-60" style={{ color: secondaryTextColor }}>
            Healthy Smile, Beautiful Life
          </span>
        )}
      </div>
    </div>
  );
};
