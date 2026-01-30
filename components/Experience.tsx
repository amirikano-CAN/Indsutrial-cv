import React from 'react';
import { ExperienceItem } from '../types';
import { Section } from './Section';

interface ExperienceProps {
  items: ExperienceItem[];
}

export const Experience: React.FC<ExperienceProps> = ({ items }) => {
  return (
    <Section number="03" title="Professional Scope">
      <div className="flex flex-col">
        {items.map((item, idx) => (
          <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 border-b-[0.5px] border-gray-100 py-6 md:py-8 print:py-3 first:pt-0 last:border-0 break-inside-avoid">
            {/* Context/Period */}
            <div className="md:col-span-2 mb-1 md:mb-0">
              <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest block pt-1">
                {item.period}
              </span>
            </div>

            {/* Role / Entity */}
            <div className="md:col-span-4 pr-0 md:pr-4 mb-3 md:mb-0">
              <h3 className="text-lg print:text-sm font-display font-bold text-black leading-tight mb-1">
                {item.title}
              </h3>
              <p className="text-sm print:text-[10px] font-mono text-gray-500 uppercase tracking-tight">
                {item.company}
              </p>
            </div>

            {/* Assertive Outcomes */}
            <div className="md:col-span-6 pl-0 md:pl-2">
              <ul className="space-y-3 print:space-y-1">
                {item.description.map((desc, dIdx) => (
                  <li key={dIdx} className="text-sm print:text-xs text-gray-700 leading-snug font-sans flex items-start">
                    <span className="mr-3 opacity-30 mt-[2px] font-mono text-[10px] flex-shrink-0">#</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};