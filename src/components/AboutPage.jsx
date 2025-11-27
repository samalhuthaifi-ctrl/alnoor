import React from 'react';
import { Target, Award, Users } from 'lucide-react';

export default function AboutPage({ content }) {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop" 
            alt="About Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-orange-900/70"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center pt-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl animate-on-scroll fade-up">
            {content.aboutPage.title}
          </h1>
          <p className="text-2xl md:text-3xl text-amber-200 drop-shadow-lg animate-on-scroll fade-up delay-200">
            {content.aboutPage.subtitle}
          </p>
        </div>

        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
            <path fill="#ffffff" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Vision */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl shadow-lg animate-on-scroll fade-left">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {content.aboutPage.intro.title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {content.aboutPage.intro.desc}
              </p>
            </div>

            {/* Mission */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg animate-on-scroll fade-right">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {content.aboutPage.mission.title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {content.aboutPage.mission.desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-br from-amber-500 to-orange-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {content.aboutPage.stats.map((stat, i) => (
              <div 
                key={i} 
                className="text-center animate-on-scroll scale-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-lg md:text-xl text-amber-100">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center animate-on-scroll fade-up">
            {content.aboutPage.values.title}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {content.aboutPage.values.items.map((value, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 animate-on-scroll fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">{i + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-on-scroll scale-in">
              <Users className="text-white" size={40} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-on-scroll fade-up">
              {content.aboutPage.team.title}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed animate-on-scroll fade-up delay-200">
              {content.aboutPage.team.desc}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}