import { motion } from 'framer-motion';

export default function Quote() {
  return (
    <motion.div
      key="calculator"
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
    >
      <h2>Hello quote</h2>
    </motion.div>
  );
}
