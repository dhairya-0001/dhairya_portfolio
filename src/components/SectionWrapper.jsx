
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const SectionWrapper = ({ children, delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
};

export default SectionWrapper;
