import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import NeoCard from '../components/NeoCard';
import NeoButton from '../components/NeoButton';
import HorizontalSlider from '../components/HorizontalSlider';
import ProjectPreviewModal from '../components/ProjectPreviewModal';
import { PROJECTS } from '../constants';

interface ProjectsProps {
    t: any;
}

const Projects: React.FC<ProjectsProps> = ({ t }) => {
    const [previewProject, setPreviewProject] = useState<{ image: string; title: string } | null>(null);

    const handlePreview = (image: string, title: string) => {
        setPreviewProject({ image, title });
    };

    return (
        <section id="projects" className="space-y-8">
            <ProjectPreviewModal
                isOpen={!!previewProject}
                onClose={() => setPreviewProject(null)}
                imageSrc={previewProject?.image || ''}
                projectTitle={previewProject?.title || ''}
            />

            <div className="space-y-4">
                <div>
                    <h2 className="text-5xl font-black italic text-[#0f172a] dark:text-white uppercase tracking-tighter">
                        {t.sections.projects}
                    </h2>
                    <div className="h-2 w-32 bg-[#0f172a] dark:bg-emerald-500 mt-2"></div>
                </div>
                <p className="font-bold text-slate-500 dark:text-slate-400 max-w-2xl">{t.descriptions.projects}</p>
            </div>
            <HorizontalSlider>
                {PROJECTS.map((project, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ y: -10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="h-full"
                    >
                        <NeoCard color={project.color} className="flex flex-col h-full space-y-6 w-[300px] sm:w-[350px]">
                            <div className="h-44 bg-white border-2 border-[#0f172a] rounded-lg overflow-hidden neo-shadow relative group">
                                <img src={project.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt={project.title} />
                                <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <NeoButton
                                        variant="secondary"
                                        className="scale-75"
                                        onClick={() => handlePreview(project.image, project.title)}
                                    >
                                        {t.buttons.viewLive}
                                    </NeoButton>
                                </div>
                            </div>
                            <div className="space-y-3 flex-grow px-1">
                                <h3 className="text-2xl font-black text-black">
                                    {t.projectsList ? t.projectsList[idx].title : project.title}
                                </h3>
                                <p className="font-medium text-black/80 line-clamp-3">
                                    {t.projectsList ? t.projectsList[idx].description : project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="bg-white/60 border border-[#0f172a] px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider text-black">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full"
                            >
                                <NeoButton
                                    variant="secondary"
                                    className="w-full flex items-center justify-center gap-2"
                                >
                                    {t.buttons.preview} <ExternalLink size={18} />
                                </NeoButton>
                            </a>
                        </NeoCard>
                    </motion.div>
                ))}
            </HorizontalSlider>
        </section>
    );
};

export default Projects;
