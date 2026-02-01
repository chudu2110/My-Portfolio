import React from 'react';
import { motion } from 'framer-motion';
import NeoCard from '../components/NeoCard';
import { SKILLS } from '../constants';

interface SkillsProps {
    t: any;
}

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.25 // Chậm lại để mắt kịp theo dõi
        }
    }
};

const item = {
    hidden: { opacity: 0, scale: 0.5, y: 30 },
    show: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

const Skills: React.FC<SkillsProps> = ({ t }) => {
    return (
        <section id="skills" className="space-y-8">
            <h2 className="text-4xl font-black italic text-[#0f172a] dark:text-white uppercase tracking-tighter">
                {t.sections.techstack}
            </h2>
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
            >
                {SKILLS.map((skill) => (
                    <motion.div
                        key={skill.name}
                        variants={item}
                        className="flex flex-col items-center gap-3 group"
                    >
                        <motion.div
                            whileHover={{
                                scale: 1.15,
                                y: -5
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 10
                            }}
                            className="w-20 h-20 bg-white dark:bg-[#12121a] border-2 border-[#0f172a] dark:border-[#334155] rounded-xl p-4 flex items-center justify-center neo-shadow"
                        >
                            <img src={skill.icon} alt={skill.name} className="w-12 h-12 brightness-100 dark:brightness-125" />
                        </motion.div>
                        <span className="font-bold text-sm text-slate-700 dark:text-slate-400">{skill.name}</span>
                    </motion.div>
                ))}
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
                <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 400 }}>
                    <NeoCard color="#E4E4FC" className="space-y-4 h-full dark:bg-indigo-900/20 dark:border-indigo-500/30">
                        <h4 className="font-black text-xl underline decoration-[#0f172a] decoration-4 underline-offset-4 !text-black">
                            {t.skills.aiTitle}
                        </h4>
                        <ul className="space-y-2 font-bold !text-black/80">
                            {t.skills.aiItems.map((item: string, idx: number) => (
                                <li key={idx}>• {item}</li>
                            ))}
                        </ul>
                    </NeoCard>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 400 }}>
                    <NeoCard color="#FCE4E4" className="space-y-4 h-full dark:bg-rose-900/20 dark:border-rose-500/30">
                        <h4 className="font-black text-xl underline decoration-[#0f172a] decoration-4 underline-offset-4 !text-black">
                            {t.skills.devopsTitle}
                        </h4>
                        <ul className="space-y-2 font-bold !text-black/80">
                            {t.skills.devopsItems.map((item: string, idx: number) => (
                                <li key={idx}>• {item}</li>
                            ))}
                        </ul>
                    </NeoCard>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
