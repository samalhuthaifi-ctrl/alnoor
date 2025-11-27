import React, { useState } from 'react';
import { useLanguage, useScrollAnimation } from './hooks/useLanguage';
import { content } from './data/content';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import AboutPage from './components/AboutPage';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const { language, toggleLanguage } = useLanguage();
  const [currentPage, setCurrentPage] = useState('home');
  const t = content[language];
  const isRTL = language === 'ar';

  useScrollAnimation();

  if (currentPage === 'home') {
    return (
      <div className={`min-h-screen bg-white ${isRTL ? 'rtl' : 'ltr'}`}>
        <Header 
          content={t} 
          language={language} 
          toggleLanguage={toggleLanguage}
          setCurrentPage={setCurrentPage}
        />
        <Hero content={t} isRTL={isRTL} />
        <About content={t} />
        <Services content={t} />
        <Contact content={t} />
        <Footer content={t} isRTL={isRTL} />
      </div>
    );
  }

  if (currentPage === 'about') {
    return (
      <div className={`min-h-screen bg-white ${isRTL ? 'rtl' : 'ltr'}`}>
        <Header 
          content={t} 
          language={language} 
          toggleLanguage={toggleLanguage}
          setCurrentPage={setCurrentPage}
        />
        <AboutPage content={t} />
        <Contact content={t} />
        <Footer content={t} isRTL={isRTL} />
      </div>
    );
  }

  return null;
}