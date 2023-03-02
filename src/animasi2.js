import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const animations = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
};

function Animasi2({ children }) {
    const [ref, inView] = useInView({
        threshold: 0.5, // deteksi ketika 50% dari elemen muncul di viewport
        triggerOnce: true, // memicu animasi hanya sekali saat elemen pertama kali muncul
    });
    return (
        <motion.div
            ref={ref}
            variants={animations}
            initial="initial"
            animate={inView ? 'animate' : 'initial'}
            transition={{ duration: 1 }}
        >
            {children}
        </motion.div >
    );
}

export default Animasi2