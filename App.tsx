import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route path="/" element={<AboutPage />} />
        <Route path="/trabalhos" element={<HomePage />} />
        <Route path="/project/:id" element={<ProjectPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  );
}

function App(): React.JSX.Element {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 min-h-screen font-sans flex flex-col transition-colors duration-300 selection:bg-indigo-500 selection:text-white">
        <Navbar />
        <main className="flex-grow pt-16">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
