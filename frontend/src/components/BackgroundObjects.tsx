import React from 'react';
import { motion } from 'framer-motion';

const BackgroundObjects: React.FC = () => {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            {/* Top Left Gradient */}
            <motion.div
                animate={{
                    y: [0, 50, 0],
                    rotate: [0, 90, 0],
                    scale: [1, 1.2, 1]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-20 -left-10 w-64 h-64 bg-indigo-200/20 dark:bg-indigo-500/10 rounded-full blur-3xl"
            />
            {/* Bottom Right Gradient */}
            <motion.div
                animate={{
                    y: [0, -70, 0],
                    rotate: [0, -90, 0],
                    scale: [1, 1.1, 1]
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-40 -right-10 w-80 h-80 bg-emerald-200/20 dark:bg-emerald-500/10 rounded-full blur-3xl"
            />
            {/* Center Gradient */}
            <motion.div
                animate={{
                    x: [0, 30, 0],
                    y: [0, 20, 0],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-100/10 dark:bg-cyan-500/5 rounded-full blur-[100px]"
            />
        </div>
    );
};

export default BackgroundObjects;
