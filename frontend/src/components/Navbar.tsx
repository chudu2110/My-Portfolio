import React, { useState, useEffect } from 'react';
import { Sun, Moon, Languages } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import NeoButton from './NeoButton';

interface NavbarProps {
  onLangChange: (lang: 'en' | 'vi') => void;
  lang: 'en' | 'vi';
  isDark: boolean;
  setIsDark: (dark: boolean) => void;
  t: any;
}

const Navbar: React.FC<NavbarProps> = ({ onLangChange, lang, isDark, setIsDark, t }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [messageStep, setMessageStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessageStep(1);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'py-2 bg-[#fcfcfc]/95 border-b-4' : 'py-4 bg-[#fcfcfc]/90 border-b-2'
        } backdrop-blur-md border-[#0f172a] px-4 md:px-8 flex items-center justify-between`}
    >
      <div className="flex items-center gap-3 relative h-10 w-64 sm:w-96 overflow-hidden">
        <AnimatePresence mode="wait">
          {messageStep === 0 ? (
            <motion.div
              key="hello"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute left-0"
            >
              <span className="font-black text-xl tracking-tight text-[#0f172a] dark:text-[#e8e9ed] block">
                {lang === 'en' ? 'Hi there,' : 'Xin chào,'}
              </span>
            </motion.div>
          ) : (
            <motion.div
              key="welcome"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute left-0"
            >
              <span className="font-black text-xl tracking-tight text-indigo-600 dark:text-indigo-400 block italic">
                {lang === 'en' ? 'Welcome to my Portfolio!' : 'Chào mừng đến với Portfolio của tôi!'}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex items-center gap-3 md:gap-6 font-bold">
        {['about', 'skills', 'projects'].map((item) => (
          <motion.a
            key={item}
            href={`#${item}`}
            whileHover={{ scale: 1.1 }}
            className="hidden lg:block text-[#0f172a] dark:text-[#e8e9ed] hover:text-indigo-600 dark:hover:text-indigo-400 hover:underline decoration-2 underline-offset-4 transition-colors uppercase text-xs tracking-widest"
          >
            {t.nav[item]}
          </motion.a>
        ))}

        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 border-2 border-[#0f172a] dark:border-[#334155] rounded-xl neo-shadow transition-all active:translate-x-1 active:translate-y-1 active:shadow-none bg-white dark:bg-[#12121a]"
            title="Toggle Dark Mode"
          >
            {isDark ? <Sun size={20} className="text-white" /> : <Moon size={20} className="text-black" />}
          </button>

          {/* Language Toggle */}
          <button
            onClick={() => onLangChange(lang === 'en' ? 'vi' : 'en')}
            className="flex items-center gap-2 px-4 py-2 border-2 border-[#0f172a] dark:border-[#334155] rounded-xl neo-shadow transition-all active:translate-x-1 active:translate-y-1 active:shadow-none bg-white dark:bg-[#12121a] font-black text-xs md:text-sm"
            title="Switch Language"
          >
            <span className="text-[#0f172a] dark:text-white">{lang === 'en' ? 'ENG' : 'VIE'}</span>
          </button>
        </div>

        <a
          href="https://www.threads.com/@kirvu_05?hl=vi"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:block"
        >
          <NeoButton variant="primary">
            {t.nav.contact}
          </NeoButton>
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
