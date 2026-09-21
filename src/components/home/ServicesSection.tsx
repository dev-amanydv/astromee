'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { SERVICES, ServiceItem } from '@/data/services';

export default function ServicesSection() {
  const { scrollToSection, setScanMode } = useApp();

  const handleServiceClick = (service: ServiceItem) => {
    if (service.scanMode) {
      setScanMode(service.scanMode);
    }
    scrollToSection(service.targetSection);
  };

  return (
    <section id="servicesGrid" className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
        <div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-darkSlate-900 flex items-center gap-2">
            <i className="fa-solid fa-wand-magic-sparkles text-amberGold-500 text-base sm:text-lg"></i>
            <span>Explore Astromee Services</span>
          </h3>
          <p className="text-xs text-darkSlate-600 font-medium mt-0.5">
            Comprehensive Vedic astrology tools and psychic intelligence
          </p>
        </div>
        <span
          className="text-xs text-amberGold-700 font-bold hover:underline cursor-pointer flex items-center gap-1 self-start sm:self-auto"
          onClick={() => scrollToSection('astrologersSection')}
        >
          View All Services <i className="fa-solid fa-arrow-right text-[10px]"></i>
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3.5">
        {SERVICES.map((service) => (
          <div
            key={service.id}
            onClick={() => handleServiceClick(service)}
            className="cosmic-card rounded-2xl p-3 sm:p-4 text-center cursor-pointer relative overflow-hidden group"
          >
            {service.badge && (
              <div
                className={`absolute top-2 right-2 ${service.badge.bg} ${service.badge.textColor} text-[8px] font-black px-1.5 py-0.5 rounded uppercase`}
              >
                {service.badge.text}
              </div>
            )}
            <div
              className={`w-11 h-11 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-2.5 rounded-2xl ${service.iconBg} border ${service.iconBorder} flex items-center justify-center ${service.iconColor} text-lg sm:text-xl shadow-xs group-hover:scale-110 transition-transform`}
            >
              <i className={service.icon}></i>
            </div>
            <h4 className="font-bold text-xs text-darkSlate-900 group-hover:text-amberGold-700 transition-colors">
              {service.name}
            </h4>
            <p className="text-[10px] text-darkSlate-500 font-medium mt-0.5">{service.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
