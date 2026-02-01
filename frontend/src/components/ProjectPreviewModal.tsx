import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectPreviewModalProps {
    isOpen: boolean;
    onClose: () => void;
    imageSrc: string;
    projectTitle: string;
}

const ProjectPreviewModal: React.FC<ProjectPreviewModalProps> = ({
    isOpen,
    onClose,
    imageSrc,
    projectTitle
}) => {
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-6xl max-h-[90vh] bg-white dark:bg-[#12121a] border-4 border-[#0f172a] dark:border-[#334155] rounded-2xl overflow-hidden neo-shadow flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 border-b-4 border-[#0f172a] dark:border-[#334155] bg-[#fcfcfc] dark:bg-[#1a1a24] shrink-0">
                            <h2 className="text-xl font-black text-[#0f172a] dark:text-white">
                                {projectTitle}
                            </h2>
                        </div>

                        {/* Image Container */}
                        <div className="flex-1 overflow-auto p-4 flex items-center justify-center bg-gray-100 dark:bg-[#0c0c11]">
                            <img
                                src={imageSrc}
                                className="max-w-full max-h-full object-contain rounded shadow-lg"
                                alt={projectTitle}
                            />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ProjectPreviewModal;
