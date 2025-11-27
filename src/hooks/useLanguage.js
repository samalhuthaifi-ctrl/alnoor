import { useState, useEffect } from 'react';

export const useLanguage = () => {
  const [language, setLanguage] = useState('ar');

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ar' ? 'en' : 'ar');
  };

  return { language, toggleLanguage };
};

// Hook for scroll animations - يظهر كل مرة
export const useScrollAnimation = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // إضافة الـ animation عند الظهور
          entry.target.classList.add('animated');
        } else {
          // إزالة الـ animation عند الاختفاء (ليظهر مرة أخرى)
          entry.target.classList.remove('animated');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);
};