import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  isLast?: boolean;
}

export const Section: React.FC<SectionProps> = ({ title, children, className = "", isLast = false }) => {
  return (
    <section className={`mb-10 md:mb-16 print:mb-4 cv-section ${className}`}>
      <div 
        className="flex items-center mb-4 md:mb-8 print:mb-2 border-t-[0.5px] border-black pt-3 print:pt-1"
        style={{ pageBreakAfter: 'avoid' }}
      >
        <span className="font-mono text-[9px] text-gray-400 mr-4 md:mr-6 tracking-tighter cv-section-number"></span>
        <h2 className="font-display text-[10px] sm:text-xs md:text-sm font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase text-black">
          {title}
        </h2>
      </div>
      {/* Removed md:pl-20 in print to use full page width and remove large left gap */}
      <div className="pl-0 md:pl-20 print:pl-0">
        {children}
      </div>
    </section>
  );
};