import React from 'react';

export default function About({ content }) {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center animate-on-scroll fade-up">
            {content.about.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed text-center animate-on-scroll fade-up delay-200">
            {content.about.desc}
          </p>
        </div>
      </div>
    </section>
  );
}