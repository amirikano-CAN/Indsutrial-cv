
import React from 'react';

interface SectionProps {
  number: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  isLast?: boolean;
}

// Fixed: Changed '=' to ':' for the React.FC type annotation
export const Section: React.FC<SectionProps> = ({ number, title, children, className = "", isLast = false }) => {
  return (
    <section className={`mb-12 md:mb-16 print:mb-10 ${className}`}>
      {/* Header with break-after avoidance to keep it with content */}
      <div 
        className="flex items-center mb-6 md:mb-8 print:mb-6 border-t-[0.5px] border-black pt-4 break-inside-avoid"
        style={{ breakAfter: 'avoid' }}
      >
        <span className="font-mono text-[10px] text-gray-400 mr-4 md:mr-6 tracking-tighter">SEC_{number}</span>
        <h2 className="font-display text-[11px] font-bold tracking-[0.3em] uppercase text-black">
          {title}
        </h2>
      </div>
      <div className="pl-0 md:pl-20">
        {children}
      </div>
    </section>
  );
};
