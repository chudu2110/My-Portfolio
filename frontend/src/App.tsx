import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ImageModal from './components/ImageModal';
import ScrollReveal from './components/ScrollReveal';
import BackgroundObjects from './components/BackgroundObjects';
import { TRANSLATIONS } from './translations';
import { motion, AnimatePresence } from 'framer-motion';

// Import split sections
import Hero from './sections/Hero';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Achievements from './sections/Achievements';
import Community from './sections/Community';
import Footer from './sections/Footer';

const App: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [lang, setLang] = useState<'en' | 'vi'>('en');
  const [isDark, setIsDark] = useState(false);
  const t = TRANSLATIONS[lang];

  return (
    <div className="min-h-screen selection:bg-indigo-500 selection:text-white overflow-x-hidden relative">
      <BackgroundObjects />

      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageSrc={selectedImage || ''}
      />

      <Navbar lang={lang} onLangChange={setLang} isDark={isDark} setIsDark={setIsDark} t={t} />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto px-4 mt-12 md:mt-20 space-y-32"
      >
        <Hero t={t} isDark={isDark} />

        <ScrollReveal direction="up" delay={0.2}>
          <Education lang={lang} t={t} />
        </ScrollReveal>

        <ScrollReveal direction="right" delay={0.2}>
          <Skills t={t} />
        </ScrollReveal>

        <ScrollReveal direction="left" delay={0.2}>
          <Projects t={t} />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <Achievements t={t} setSelectedImage={setSelectedImage} />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.3}>
          <Community t={t} setSelectedImage={setSelectedImage} />
        </ScrollReveal>
      </motion.main>

      <Footer t={t} />
    </div>
  );
};

export default App;
