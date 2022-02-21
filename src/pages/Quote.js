import { motion } from 'framer-motion';
import styles from '../sass/components/quote.module.scss';

export default function Quote() {
  const { par } = styles;
  return (
    <section
      className={`${styles.quote} ${styles['padding-x']} ${styles['padding-top']}`}
    >
      <motion.div
        key="calculator"
        initial={{ x: '10%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      >
        <p className={par}>
          Without mathematics, there&apos;s nothing you can do. Everything
          around you is mathematics. Everything around you is numbers.
        </p>
        <h2 className={styles['display-2']}>— Shakuntala Devi</h2>
      </motion.div>
    </section>
  );
}
