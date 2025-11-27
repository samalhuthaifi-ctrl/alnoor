import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer({ content, isRTL }) {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">ن</span>
              </div>
              <span className="text-xl font-bold">
                {isRTL ? 'شركة النور' : 'Al-Noor'}
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              {content.hero.subtitle}
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-4 text-lg">{content.contact.title}</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>{content.contact.info.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>{content.contact.info.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <span>{content.contact.info.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 text-lg">{content.footer.quickLinks}</h3>
            <div className="space-y-2">
              {content.nav.slice(0, 4).map((item, i) => (
                <a
                  key={i}
                  href={`#${item}`}
                  className="block text-gray-400 hover:text-amber-500 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>{content.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}