import React from 'react';
import { SkillCategory } from '../types';
import { Section } from "./Section";

interface SkillsProps {
  categories: SkillCategory[];
  title: string;
  number: string;
}

export const Skills: React.FC<SkillsProps> = ({ categories, title, number }) => {
  return (
    <Section number={number} title={title}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
        {categories.map((category, idx) => (
          <div key={idx} className="flex flex-col break-inside-avoid">
            <h3 className="font-mono text-[9px] uppercase tracking-[0.2em] text-gray-400 mb-4 md:mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
              {category.title}
            </h3>
            <ul className="space-y-2">
              {category.skills.map((skill, sIdx) => (
                <li key={sIdx} className="text-[13px] font-medium text-black font-display tracking-tight flex justify-between group">
                  <span>{skill.name}</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity font-mono text-[9px] text-gray-300">CONFIRMED</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};