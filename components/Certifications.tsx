import React from 'react';
import { CertificationItem } from '../types';
import { Section } from './Section';

interface CertificationsProps {
  items: CertificationItem[];
  title: string;
}

export const Certifications: React.FC<CertificationsProps> = ({ items, title }) => {
  return (
    <Section title={title}>
      {/* Tightened grid for print to stop items from jumping across pages with huge gaps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-8 gap-y-10 print:grid-cols-2 print:gap-x-12 print:gap-y-6">
        {items.map((cert, idx) => (
          <div key={idx} className="flex flex-col gap-4 print:gap-1 group break-inside-avoid cursor-default relative transition-all duration-500">
            {/* Icon Container */}
            <div className="h-5 print:h-4 w-auto flex items-center justify-start">
               {(() => {
                const logoSrc = cert.logoSlug
                  ? `https://cdn.simpleicons.org/${cert.logoSlug}`
                  : cert.logoUrl;

                return logoSrc ? (
                  <img
                    src={logoSrc}
                    alt={cert.issuer}
                    className="h-full w-auto object-contain max-w-[80px] grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                    loading="lazy"
                  />
                ) : (
                  <div className="h-full w-[28px]" />
                );
              })()}
            </div>
            
            <div className="flex flex-col border-l-2 border-gray-100 pl-3 print:pl-2 group-hover:border-black transition-colors duration-500">
               <div className="flex justify-between items-start gap-2">
                 <span className="font-display font-bold text-[12px] print:text-[10px] text-black leading-tight">
                   {cert.title}
                 </span>
                 <span className="opacity-0 group-hover:opacity-100 transition-opacity font-mono text-[7px] text-gray-300 print:hidden whitespace-nowrap">VALIDATED</span>
               </div>
               <div className="font-mono text-[9px] print:text-[8px] text-gray-400 uppercase tracking-widest flex items-center gap-2 mt-1">
                  <span>{cert.issuer}</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full group-hover:bg-black transition-colors duration-500"></span>
                  <span>{cert.year}</span>
               </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};