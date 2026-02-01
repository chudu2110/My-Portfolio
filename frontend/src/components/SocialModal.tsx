import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Copy } from 'lucide-react';

interface SocialModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    url: string;
    icon: React.ComponentType<{ size: number }>;
}

const SocialModal: React.FC<SocialModalProps> = ({ isOpen, onClose, title, url, icon: Icon }) => {
    const [copied, setCopied] = React.useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleVisit = () => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md"
                    >
                        <div className="bg-white dark:bg-[#12121a] border-4 border-[#0f172a] dark:border-[#334155] rounded-2xl p-6 neo-shadow-lg">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 border-2 border-[#0f172a] dark:border-[#334155] rounded-lg bg-[#E4FCE4] dark:bg-emerald-900/30">
                                        <Icon size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#0f172a] dark:text-white">{title}</h3>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2 border-2 border-[#0f172a] dark:border-[#334155] rounded-lg hover:bg-[#FCE4E4] dark:hover:bg-rose-900/30 transition-colors"
                                >
                                    <X size={20} className="text-[#0f172a] dark:text-white" />
                                </button>
                            </div>

                            {/* URL Display */}
                            <div className="mb-6">
                                <label className="block text-sm font-bold mb-2 text-slate-600 dark:text-slate-400">Link:</label>
                                <div className="bg-[#f3f4f6] dark:bg-[#1e1e28] border-2 border-[#0f172a] dark:border-[#334155] rounded-lg p-3">
                                    <p className="text-sm text-[#0f172a] dark:text-white break-all font-mono">{url}</p>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-3">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={handleCopy}
                                    className="flex-1 flex items-center justify-center gap-2 bg-[#E4E4FC] dark:bg-indigo-900/30 border-2 border-[#0f172a] dark:border-[#334155] rounded-lg py-3 px-4 font-bold neo-shadow hover:translate-y-[-2px] transition-transform text-[#0f172a] dark:text-white"
                                >
                                    <Copy size={18} />
                                    {copied ? 'Copied!' : 'Copy Link'}
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={handleVisit}
                                    className="flex-1 flex items-center justify-center gap-2 bg-[#E4FCE4] dark:bg-emerald-900/30 border-2 border-[#0f172a] dark:border-[#334155] rounded-lg py-3 px-4 font-bold neo-shadow hover:translate-y-[-2px] transition-transform text-[#0f172a] dark:text-white"
                                >
                                    <ExternalLink size={18} />
                                    Visit
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default SocialModal;
