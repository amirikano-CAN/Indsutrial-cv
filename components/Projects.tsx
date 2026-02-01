import React from 'react';
import { ProjectItem } from '../types';
import { Section } from './Section';

interface ProjectsProps {
  items: ProjectItem[];
}

export const Projects: React.FC<ProjectsProps> = ({ items }) => {
  return (
    <Section number="05" title="Case Studies">
      {/* 2-column grid in print but with tighter spacing to keep items together */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12 md:gap-y-16 print:gap-x-6 print:gap-y-6">
        {items.map((project, idx) => (
          <div key={idx} className="flex flex-col group break-inside-avoid">
            <div className="relative mb-4 print:mb-2 overflow-hidden border-[0.5px] border-gray-100">
              {/* Force image height in print to prevent it taking half a page */}
              <div className="aspect-[16/10] print:h-[45mm] print:aspect-auto bg-gray-50 overflow-hidden grayscale group-hover:grayscale-0">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover mix-blend-multiply opacity-95 group-hover:opacity-100"
                />
              </div>
            </div>
            
            <div className="flex flex-col">
              <h4 className="text-lg print:text-[14px] font-display font-bold text-black mb-1 print:mb-0.5 leading-tight">
                {project.title}
              </h4>
              
              <p className="text-sm print:text-[10px] text-gray-600 leading-relaxed font-sans mb-3 print:mb-1.5 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-3 print:pt-1 border-t border-gray-100">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="font-mono text-[8px] print:text-[7px] uppercase tracking-widest text-gray-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};