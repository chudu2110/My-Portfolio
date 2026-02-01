import React from 'react';
import { Github, Linkedin, Mail, AtSign } from 'lucide-react';
import { motion } from 'framer-motion';
import NeoCard from '../components/NeoCard';
import { CV_DATA } from '../constants';

interface HeroProps {
    t: any;
    isDark: boolean;
}

const Hero: React.FC<HeroProps> = ({ t, isDark }) => {
    const socialLinks = [
        { icon: AtSign, title: t.social.threads, color: "hover:bg-[#f3f4f6] dark:hover:bg-slate-800", url: "https://www.threads.com/@kirvu_05?hl=vi" },
        { icon: Github, title: t.social.github, color: "hover:bg-[#E4FCE4] dark:hover:bg-emerald-900/50", url: "https://github.com/chudu2110" },
        { icon: Linkedin, title: t.social.linkedin, color: "hover:bg-[#E4E4FC] dark:hover:bg-indigo-900/50", url: "https://www.linkedin.com/in/chu-du-5698b128a/" },
        { icon: Mail, title: t.social.email, color: "hover:bg-[#FCE4E4] dark:hover:bg-rose-900/50", url: `https://mail.google.com/mail/?view=cm&fs=1&to=${CV_DATA.email}` }
    ];

    return (
        <section id="about" className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-6"
            >
                <h1 className="text-5xl md:text-7xl font-black leading-tight text-[#0f172a] dark:text-white">
                    {t.name}
                </h1>
                <p className="text-2xl font-bold text-slate-600 dark:text-slate-400">
                    {t.bio.role}
                </p>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-lg leading-relaxed bg-white dark:bg-[#12121a] border-2 border-[#0f172a] dark:border-[#334155] p-5 rounded-lg neo-shadow text-slate-700 dark:text-slate-300"
                >
                    {t.bio.about}
                </motion.p>

                <div className="flex flex-wrap items-center gap-6">
                    <div className="flex items-center gap-4">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-2 bg-white dark:bg-[#12121a] border-2 border-[#0f172a] dark:border-[#334155] pl-1 pr-3 py-1 rounded-full neo-shadow mr-2 cursor-default"
                        >
                            <div className="w-7 h-7 rounded-full border-2 border-[#0f172a] dark:border-[#334155] overflow-hidden flex-shrink-0">
                                <img
                                    src="https://flagcdn.com/w80/vn.png"
                                    alt="Vietnam Flag"
                                    className="w-full h-full object-cover scale-110"
                                />
                            </div>
                            <span className="font-bold text-xs md:text-sm text-[#0f172a] dark:text-white whitespace-nowrap">{t.hero.location}</span>
                        </motion.div>

                        <div className="flex gap-3">
                            {socialLinks.map((social, i) => (
                                <motion.a
                                    key={social.title}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 + (i * 0.1) }}
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`p-2 border-2 border-[#0f172a] dark:border-[#334155] rounded-md ${social.color} transition-colors neo-shadow dark:text-white`}
                                    title={social.title}
                                >
                                    <social.icon size={24} />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, ease: "backOut" }}
                className="relative flex flex-col items-center gap-6"
            >
                <motion.div
                    animate={{
                        y: [0, -15, 0],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <NeoCard color="#E4FCE4" className="w-full max-w-sm aspect-square flex flex-col items-center justify-center overflow-hidden" hasShadowLg noPadding>
                        <img
                            src={isDark ? "/assets/pic1.png" : CV_DATA.avatar}
                            alt={CV_DATA.name}
                            className="w-full h-full object-cover"
                            style={{ objectPosition: '85% center' }}
                        />
                    </NeoCard>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="flex items-center gap-4"
                >
                    <div className="inline-block bg-[#E4E4FC] border-2 border-[#0f172a] dark:border-[#334155] px-4 py-1 rounded-full font-bold neo-shadow text-[#0f172a] dark:text-indigo-200">
                        {t.hero.available}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
