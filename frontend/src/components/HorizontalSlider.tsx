import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HorizontalSliderProps {
    children: React.ReactNode[];
    gap?: number;
}

const HorizontalSlider: React.FC<HorizontalSliderProps> = ({ children, gap = 8 }) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 10);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

            // Update active dot based on scroll position
            const index = Math.round(scrollLeft / (scrollWidth / children.length));
            setActiveIndex(Math.min(index, children.length - 1));
        }
    };

    useEffect(() => {
        checkScroll();
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, [children.length]);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { clientWidth } = scrollRef.current;
            const scrollAmount = direction === 'left' ? -clientWidth * 0.8 : clientWidth * 0.8;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="relative group/slider">
            {/* Navigation Buttons */}
            <AnimatePresence>
                {canScrollLeft && (
                    <motion.button
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        whileHover={{ scale: 1.1, x: -5 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => scroll('left')}
                        className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10 bg-white border-2 border-[#0f172a] p-3 rounded-full neo-shadow active:shadow-none transition-shadow"
                    >
                        <ChevronLeft size={24} />
                    </motion.button>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {canScrollRight && (
                    <motion.button
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        whileHover={{ scale: 1.1, x: 5 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => scroll('right')}
                        className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10 bg-white border-2 border-[#0f172a] p-3 rounded-full neo-shadow active:shadow-none transition-shadow"
                    >
                        <ChevronRight size={24} />
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Scrollable Container */}
            <div
                ref={scrollRef}
                onScroll={checkScroll}
                className="flex overflow-x-auto gap-8 pb-10 hide-scrollbar snap-x snap-mandatory cursor-grab active:cursor-grabbing"
            >
                {children.map((child, idx) => (
                    <div
                        key={idx}
                        className="flex-shrink-0 snap-start"
                    >
                        {child}
                    </div>
                ))}
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-3 mt-2">
                {children.map((_, idx) => (
                    <motion.button
                        key={idx}
                        onClick={() => {
                            if (scrollRef.current) {
                                const childWidth = scrollRef.current.scrollWidth / children.length;
                                scrollRef.current.scrollTo({ left: childWidth * idx, behavior: 'smooth' });
                            }
                        }}
                        animate={{
                            width: activeIndex === idx ? 32 : 12,
                            backgroundColor: activeIndex === idx ? "#0f172a" : "#ffffff"
                        }}
                        className="h-3 rounded-full border-2 border-[#0f172a] cursor-pointer"
                    />
                ))}
            </div>
        </div>
    );
};

export default HorizontalSlider;
