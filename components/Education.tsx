import React from 'react';
import { EducationItem } from '../types';
import { Section } from './Section';

interface EducationProps {
  items: EducationItem[];
}

export const Education: React.FC<EducationProps> = ({ items }) => {
  return (
    <Section number="06" title="Academic Background" isLast>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {items.map((edu, idx) => (
          <div key={idx} className="border-l-2 border-gray-200 pl-4 break-inside-avoid">
            <h4 className="text-sm font-display font-bold text-black mb-1">{edu.institution}</h4>
            <p className="text-sm font-sans text-gray-600 mb-1">{edu.degree}</p>
            <div className="font-mono text-[10px] text-gray-400 uppercase tracking-wide">
               {edu.location} — {edu.period}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};