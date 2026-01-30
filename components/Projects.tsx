import React from 'react';
import { ProjectItem } from '../types';
import { Section } from './Section';

interface ProjectsProps {
  items: ProjectItem[];
}

export const Projects: React.FC<ProjectsProps> = ({ items }) => {
  return (
    <Section number="04" title="Case Studies">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 md:gap-y-16">
        {items.map((project, idx) => (
          <div key={idx} className="flex flex-col group break-inside-avoid">
            <div className="relative mb-6 overflow-hidden">
              <div className="aspect-[3/2] bg-gray-50 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:opacity-100 transition-all scale-100 group-hover:scale-105 duration-700"
                />
              </div>
              {/* Geometric Overlay */}
              <div className="absolute top-2 right-2 font-mono text-[8px] text-black/20 tracking-tighter uppercase p-1 backdrop-blur-sm">
                REF_ID: PROJ_00{idx + 1}
              </div>
            </div>
            
            <div className="flex flex-col max-w-md">
              <h4 className="text-xl font-display font-bold text-black mb-3">
                {project.title}
              </h4>
              
              <p className="text-sm text-gray-600 leading-relaxed font-sans mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 md:gap-4 pt-4 border-t border-gray-100">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="font-mono text-[9px] uppercase tracking-widest text-gray-400">
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