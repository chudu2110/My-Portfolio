import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface ScrollRevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
    children,
    width = "100%",
    delay = 0.2,
    direction = "up"
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView]);

    const getVariants = () => {
        switch (direction) {
            case "up": return { hidden: { opacity: 0, y: 75 }, visible: { opacity: 1, y: 0 } };
            case "down": return { hidden: { opacity: 0, y: -75 }, visible: { opacity: 1, y: 0 } };
            case "left": return { hidden: { opacity: 0, x: 75 }, visible: { opacity: 1, x: 0 } };
            case "right": return { hidden: { opacity: 0, x: -75 }, visible: { opacity: 1, x: 0 } };
            default: return { hidden: { opacity: 0, y: 75 }, visible: { opacity: 1, y: 0 } };
        }
    };

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "visible" }}>
            <motion.div
                variants={getVariants()}
                initial="hidden"
                animate={mainControls}
                transition={{
                    duration: 0.7,
                    delay: delay,
                    ease: [0.25, 0.1, 0.25, 1.0] // smooth cubic-bezier
                }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default ScrollReveal;
