import React from 'react';
import { CertificationItem } from '../types';
import { Section } from './Section';

interface CertificationsProps {
  items: CertificationItem[];
}

export const Certifications: React.FC<CertificationsProps> = ({ items }) => {
  return (
    <Section number="02" title="Certifications & Professional Validation">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((cert, idx) => (
          <div key={idx} className="flex flex-col gap-4 group break-inside-avoid">
            {/* Logo Container - Strict Height constraint for uniformity */}
            <div className="h-5 w-auto flex items-center justify-start opacity-60 group-hover:opacity-100 transition-opacity duration-500">
               {(() => {
  const logoSrc = cert.logoSlug
    ? `https://cdn.simpleicons.org/${cert.logoSlug}/000000`
    : cert.logoUrl;

  return logoSrc ? (
    <img
      src={logoSrc}
      alt={cert.issuer}
      className="h-full w-auto object-contain max-w-[100px]"
      style={{ filter: "grayscale(100%)", opacity: 0.75 }}
      loading="lazy"
    />
  ) : (
    <div className="h-full w-[28px]" />
  );
})()}
            </div>
            
            {/* Technical Detail Block */}
            <div className="flex flex-col border-l-2 border-gray-100 pl-3">
               <span className="font-display font-bold text-[12px] text-black leading-tight mb-1">
                 {cert.title}
               </span>
               <div className="font-mono text-[9px] text-gray-400 uppercase tracking-widest flex items-center gap-2">
                  <span>{cert.issuer}</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span>{cert.year}</span>
               </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};