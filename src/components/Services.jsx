import React from 'react';

export default function Services({ content }) {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-on-scroll fade-up">
            {content.services.title}
          </h2>
          <p className="text-lg text-gray-600 animate-on-scroll fade-up delay-200">
            {content.services.subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {content.services.items.map((service, i) => (
            <div
              key={i}
              className={`bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-on-scroll scale-in delay-${(i + 1) * 100}`}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">{i + 1}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}