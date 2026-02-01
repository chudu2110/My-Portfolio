import React from 'react';

interface NeoButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent';
  className?: string;
}

const NeoButton: React.FC<NeoButtonProps> = ({ children, onClick, variant = 'primary', className = '' }) => {
  const baseStyles = "px-6 py-2 border-2 border-[#0f172a] dark:border-[#334155] font-bold transition-all neo-shadow neo-shadow-hover active:translate-x-1 active:translate-y-1 active:shadow-none rounded-md";

  const variants = {
    primary: "bg-[#FCFCE4] hover:bg-[#fefecc] dark:bg-[#2dd4bf] dark:hover:bg-[#26bba8] text-black dark:!text-black",
    secondary: "bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-white",
    accent: "bg-[#FCE4E4] hover:bg-[#ffdbdb] dark:bg-rose-950/40 dark:hover:bg-rose-950/60 dark:text-rose-200"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default NeoButton;
