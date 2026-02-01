
import React from 'react';

interface NeoCardProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
  hasShadowLg?: boolean;
  noPadding?: boolean;
  onClick?: () => void;
}

const NeoCard: React.FC<NeoCardProps> = ({ children, className = '', color = 'white', hasShadowLg = false, noPadding = false, onClick }) => {
  return (
    <div
      className={`border-[3px] border-[#0f172a] ${noPadding ? 'p-0' : 'p-6'} rounded-xl ${hasShadowLg ? 'neo-shadow-lg' : 'neo-shadow'} ${className}`}
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default NeoCard;
