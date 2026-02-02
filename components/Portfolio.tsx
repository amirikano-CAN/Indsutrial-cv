import React, { useState, useEffect } from 'react';
import { PortfolioProject, PortfolioCategory } from '../types';
import { ProjectViewer } from './ProjectViewer';
import { Section } from './Section';
import { motion, AnimatePresence } from 'framer-motion';

interface PortfolioProps {
  items: PortfolioProject[];
}

const CATEGORIES: ("All" | PortfolioCategory)[] = ["All", "Industrial", "Retail", "Packaging", "Digital"];

export const Portfolio: React.FC<PortfolioProps> = ({ items }) => {
  const [activeCategory, setActiveCategory] = useState<"All" | PortfolioCategory>("All");
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  // Filter items
  const filteredItems = activeCategory === "All" 
    ? items 
    : items.filter(item => item.category === activeCategory);

  // Category counts
  const getCategoryCount = (cat: "All" | PortfolioCategory) => {
    if (cat === "All") return items.length;
    return items.filter(i => i.category === cat).length;
  };

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 
        UNIFIED HEADER STYLE 
        Using the Section component to match CV exactly. 
        "07" continues the sequence from CV (ends at 06).
      */}
      <Section number="07" title="Selected Archive">
        
        {/* FILTER CONTROLS */}
        <div className="mb-12 flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            const count = getCategoryCount(cat);
            
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`
                  relative flex items-center gap-2 px-4 py-2 border transition-all duration-300 group
                  ${isActive 
                    ? 'border-black text-black' 
                    : 'border-transparent bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-black'
                  }
                `}
              >
                {/* Active Indicator Line */}
                {isActive && (
                  <motion.div 
                    layoutId="filter-active"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-black"
                  />
                )}
                
                <span className="font-display font-medium text-[11px] tracking-wider uppercase">
                  {cat}
                </span>
                <span className="font-mono text-[9px] text-gray-300 group-hover:text-gray-500">
                  {count.toString().padStart(2, '0')}
                </span>
              </button>
            );
          })}
        </div>

        {/* GRID */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
        >
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((project) => (
              <motion.div 
                layout
                key={project.id} 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col gap-4 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* 
                  HOVER EFFECT FIX: 
                  Removed the "white pill". 
                  Added scale and shadow for premium feel.
                */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100 border border-transparent group-hover:border-gray-200 transition-colors duration-300">
                  <div className="absolute inset-0 bg-gray-200 animate-pulse" /> {/* Placeholder */}
                  <img 
                    src={project.coverImageUrl} 
                    alt={project.title}
                    className="relative w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                  />
                  
                  {/* Cinematic Darkening on Hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none" />
                </div>

                {/* Info */}
                <div className="flex flex-col gap-1 border-t border-transparent group-hover:border-black transition-colors duration-500 pt-3">
                  <div className="flex justify-between items-baseline">
                     <h3 className="font-display font-bold text-lg text-black leading-tight">
                        {project.title}
                     </h3>
                     <div className="font-mono text-[10px] text-gray-400 uppercase tracking-widest group-hover:text-black transition-colors">
                        {project.year}
                     </div>
                  </div>
                  
                  <div className="flex gap-2">
                    {project.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="font-mono text-[9px] text-gray-400 uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </Section>

      {/* DETAIL MODAL */}
      {selectedProject && (
        <ProjectViewer 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
      
    </div>
  );
};