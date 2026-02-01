import React from 'react';
import NeoCard from '../components/NeoCard';
import { CV_DATA } from '../constants';

interface EducationProps {
    lang: 'en' | 'vi';
    t: any;
}

const Education: React.FC<EducationProps> = ({ lang, t }) => {
    return (
        <section className="space-y-8">
            <h2 className="text-4xl font-black italic text-[#0f172a] dark:text-white uppercase tracking-tighter">
                {lang === 'en' ? 'Education' : 'Học vấn'}
            </h2>
            <NeoCard className="flex flex-col md:flex-row items-center gap-8 bg-white dark:bg-[#12121a] dark:border-[#334155]" hasShadowLg={false}>
                <div className="keep-white-bg w-24 h-24 flex-shrink-0 border-2 border-[#0f172a] dark:border-[#334155] p-2 rounded-lg bg-white neo-shadow">
                    <img src={CV_DATA.education.logo} alt="PTIT Logo" className="w-full h-full object-contain brightness-100 dark:brightness-110" />
                </div>
                <div className="space-y-2 text-center md:text-left">
                    <h3 className="text-2xl font-black text-[#0f172a] dark:text-white">{t.education.school}</h3>
                    <p className="text-xl font-bold text-slate-500 dark:text-slate-400">
                        {lang === 'en' ? 'Major' : 'Chuyên ngành'}: <span className="text-indigo-600 dark:text-indigo-400">{t.education.major}</span>
                    </p>
                    <div className="inline-block bg-[#FCE4E4] dark:bg-rose-900/40 border-2 border-[#0f172a] dark:border-rose-500/30 px-3 py-1 rounded-md text-sm font-bold text-[#0f172a] dark:text-rose-200">
                        {lang === 'en' ? 'Class of 2023' : 'Niên khóa 2023'}
                    </div>
                </div>
            </NeoCard>
        </section>
    );
};

export default Education;
