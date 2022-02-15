import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './pages/calculator';
import Home from './pages/Home';
import Quote from './pages/Quote';
import Navbar from './components/Navbar';

const App = () => (
  <>
    <Navbar />
    <AnimatePresence exitBeforeEnter>
      <Routes>
        <Route path="/math-magicians/" element={<Home />} />
        <Route path="/math-magicians/calculator" element={<Calculator />} />
        <Route path="/math-magicians/Quote" element={<Quote />} />
      </Routes>
    </AnimatePresence>
  </>
);

export default App;
