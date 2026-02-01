import React from 'react';
import { MessageSquare } from 'lucide-react';
import NeoCard from '../components/NeoCard';
import HorizontalSlider from '../components/HorizontalSlider';
import { FEEDBACKS } from '../constants';

interface CommunityProps {
    t: any;
    setSelectedImage: (image: string) => void;
}

const Community: React.FC<CommunityProps> = ({ t, setSelectedImage }) => {
    return (
        <section id="feedback" className="space-y-12">
            <div className="space-y-4">
                <div>
                    <h2 className="text-5xl font-black italic text-[#0f172a] dark:text-white uppercase tracking-tighter">
                        {t.sections.community}
                    </h2>
                    <div className="h-2 w-48 bg-[#0f172a] dark:bg-indigo-500 mt-2"></div>
                </div>
                <p className="font-bold text-slate-500 dark:text-slate-400 max-w-2xl">{t.descriptions.community}</p>
            </div>
            <HorizontalSlider>
                {FEEDBACKS.map((item, idx) => (
                    <NeoCard
                        key={idx}
                        className="bg-white dark:bg-[#12121a] p-3 border-4 border-[#0f172a] dark:border-[#334155] neo-shadow-hover transition-all cursor-zoom-in w-[280px] sm:w-[320px]"
                        onClick={() => setSelectedImage(item.image)}
                    >
                        <div className="bg-white dark:bg-white/5 rounded border-2 border-[#0f172a]/20 dark:border-white/10 overflow-hidden">
                            <img
                                src={item.image}
                                alt={`Feedback ${idx + 1}`}
                                className="w-full h-[200px] sm:h-[280px] object-contain transition-all duration-500 brightness-100 dark:brightness-110"
                            />
                        </div>
                        <div className="mt-3 flex justify-between items-center px-1">
                            <span className="text-[10px] font-black uppercase tracking-widest text-[#0f172a] dark:text-indigo-400">
                                {item.type === 'feedback' ? t.labels.feedback : t.labels.collab}
                            </span>
                            <MessageSquare size={14} className="text-slate-300 dark:text-slate-600" />
                        </div>
                    </NeoCard>
                ))}
            </HorizontalSlider>
        </section>
    );
};

export default Community;
