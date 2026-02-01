import React from 'react';
import { Award } from 'lucide-react';
import NeoCard from '../components/NeoCard';
import HorizontalSlider from '../components/HorizontalSlider';
import { ACHIEVEMENTS } from '../constants';

interface AchievementsProps {
    t: any;
    setSelectedImage: (image: string) => void;
}

const Achievements: React.FC<AchievementsProps> = ({ t, setSelectedImage }) => {
    return (
        <section id="achievements" className="space-y-12">
            <div className="space-y-4">
                <div>
                    <h2 className="text-5xl font-black italic text-[#0f172a] dark:text-white uppercase tracking-tighter">
                        {t.sections.achievements}
                    </h2>
                    <div className="h-2 w-32 bg-[#0f172a] dark:bg-emerald-500 mt-2"></div>
                </div>
                <p className="font-bold text-slate-500 dark:text-slate-400 max-w-2xl">{t.descriptions.achievements}</p>
            </div>
            <HorizontalSlider>
                {ACHIEVEMENTS.map((achievement, idx) => (
                    <NeoCard
                        key={idx}
                        className="flex flex-col h-full bg-white dark:bg-[#12121a] group overflow-hidden border-4 border-[#0f172a] dark:border-[#334155] neo-shadow-hover w-[280px] sm:w-[320px] cursor-zoom-in"
                        onClick={() => setSelectedImage(achievement.image)}
                    >
                        <div className="h-48 sm:h-56 border-b-4 border-[#0f172a] dark:border-[#334155] overflow-hidden bg-white dark:bg-white/5 relative">
                            <img
                                src={achievement.image}
                                alt={achievement.title}
                                className="w-full h-full object-contain p-4 brightness-100 dark:brightness-110"
                            />
                        </div>
                        <div className="p-6 space-y-3 bg-white dark:bg-[#12121a] flex-grow">
                            <div className="flex items-center gap-2">
                                <Award size={16} className="text-[#0f172a] dark:text-emerald-400" />
                                <span className="text-xs font-black uppercase text-[#0f172a] dark:text-emerald-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors tracking-widest">
                                    {achievement.issuer === 'Certificate' ? t.labels.certificate : t.labels.award}
                                </span>
                            </div>
                            <h3 className="text-xl font-black text-[#0f172a] dark:text-white leading-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                {achievement.title}
                            </h3>
                        </div>
                    </NeoCard>
                ))}
            </HorizontalSlider>
        </section>
    );
};

export default Achievements;
