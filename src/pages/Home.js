import { motion } from 'framer-motion';

export default function Home() {
  return (
    <section
      className="home"
      style={{ paddingInline: '3rem', color: 'rgb(255 255 255 / 0.8)' }}
    >
      <motion.div
        key="home"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      >
        <h2>Welcome to our page!</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
          numquam, magni placeat fugit asperiores, veniam est sunt eius mollitia
          dolores vel assumenda saepe natus nihil, repudiandae quam sed quod a.
          Odit tenetur sunt ab quod facere quam ducimus aperiam nisi?
        </p>
      </motion.div>
    </section>
  );
}
