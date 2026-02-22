import React from 'react';
import { ExperienceItem } from '../types';
import { Section } from './Section';

interface ExperienceProps {
  items: ExperienceItem[];
  title: string;
}

export const Experience: React.FC<ExperienceProps> = ({ items, title }) => {
  return (
    <Section title={title}>
      <div className="flex flex-col">
        {items.map((item, idx) => (
          <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 border-b-[0.5px] border-gray-100 py-6 md:py-8 print:py-3 first:pt-0 last:border-0 break-inside-avoid">
            <div className="md:col-span-2">
              <span className="font-mono text-[9px] text-gray-400 uppercase tracking-widest block pt-1">
                {item.period}
              </span>
            </div>

            <div className="md:col-span-4 pr-0 md:pr-4">
              <h3 className="text-base print:text-[13px] font-display font-bold text-black leading-tight mb-0.5">
                {item.title}
              </h3>
              <p className="text-[11px] print:text-[9px] font-mono text-gray-500 uppercase tracking-tight">
                {item.company}
              </p>
            </div>

            <div className="md:col-span-6">
              <ul className="space-y-2 print:space-y-1">
                {item.description.map((desc, dIdx) => (
                  <li key={dIdx} className="text-sm print:text-[10px] text-gray-700 leading-snug font-sans flex items-start">
                    <span className="mr-2 opacity-20 mt-[3.5px] font-mono text-[8px] flex-shrink-0">/</span>
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