import React, { useState, useEffect, useRef } from 'react';
import { ProjectMedia, PortfolioProject } from '../types';
import { ChevronLeft, ChevronRight, X, Play, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectViewerProps {
  project: PortfolioProject;
  onClose: () => void;
}

export const ProjectViewer: React.FC<ProjectViewerProps> = ({ project, onClose }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Ensure we always have an array, even if empty
  const mediaList = project.media && project.media.length > 0 
    ? project.media 
    : [{ type: 'image', url: project.coverImageUrl, caption: 'Cover' } as ProjectMedia];

  const activeMedia = mediaList[activeIndex];
  const scrollRef = useRef<HTMLDivElement>(null);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setActiveIndex((prev) => (prev + 1) % mediaList.length);
      if (e.key === 'ArrowLeft') setActiveIndex((prev) => (prev - 1 + mediaList.length) % mediaList.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, mediaList.length]);

  // Scroll active thumbnail into view
  useEffect(() => {
    if (scrollRef.current) {
      const activeThumb = scrollRef.current.children[activeIndex] as HTMLElement;
      if (activeThumb) {
        activeThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [activeIndex]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white/98 backdrop-blur-xl"
    >
      
      {/* Top Controls */}
      <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-[110]">
         <div className="flex flex-col">
            <span className="font-mono text-[10px] uppercase tracking-widest text-gray-400">Viewing Project</span>
            <span className="font-display font-bold text-lg">{project.title}</span>
         </div>
         <button 
          onClick={onClose}
          className="p-3 hover:bg-black hover:text-white rounded-full transition-colors border border-gray-100"
          aria-label="Close"
        >
          <X size={20} />
        </button>
      </div>

      <div className="w-full h-full flex flex-col pt-24 pb-8 px-4 md:px-12 max-w-[1800px] mx-auto">
        
        {/* Main Stage */}
        <div className="flex-1 relative flex items-center justify-center bg-[#F9F9F9] border border-gray-100 overflow-hidden mb-6">
          
          <AnimatePresence mode="wait">
             <motion.div 
               key={activeIndex}
               initial={{ opacity: 0, scale: 0.98 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 0.2 }}
               className="relative w-full h-full flex items-center justify-center p-4"
             >
                {activeMedia.type === 'video' ? (
                  <video 
                    src={activeMedia.url} 
                    poster={activeMedia.poster}
                    controls 
                    autoPlay 
                    className="max-w-full max-h-full object-contain shadow-2xl"
                  />
                ) : (
                  <img 
                    src={activeMedia.url} 
                    alt={activeMedia.caption || project.title} 
                    className="max-w-full max-h-full object-contain shadow-sm"
                  />
                )}
             </motion.div>
          </AnimatePresence>

          {/* Navigation Overlay Arrows */}
          <button 
             onClick={() => setActiveIndex((prev) => (prev - 1 + mediaList.length) % mediaList.length)}
             className="absolute left-4 p-4 hover:bg-black/5 rounded-full transition-colors z-20 group"
          >
            <ChevronLeft size={32} className="text-gray-300 group-hover:text-black transition-colors" />
          </button>
          
          <button 
             onClick={() => setActiveIndex((prev) => (prev + 1) % mediaList.length)}
             className="absolute right-4 p-4 hover:bg-black/5 rounded-full transition-colors z-20 group"
          >
            <ChevronRight size={32} className="text-gray-300 group-hover:text-black transition-colors" />
          </button>

          {/* Caption */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur px-4 py-2 rounded-full border border-gray-200 shadow-sm flex items-center gap-3">
             <span className="font-mono text-[10px] font-bold text-black border-r border-gray-200 pr-3">
               {String(activeIndex + 1).padStart(2, '0')} / {String(mediaList.length).padStart(2, '0')}
             </span>
             <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500">
               {activeMedia.caption || "Asset View"}
             </span>
          </div>
        </div>

        {/* Bottom Strip: Info + Thumbs */}
        <div className="h-32 flex gap-8">
          
          {/* Project Context */}
          <div className="hidden md:flex flex-col justify-between w-64 flex-shrink-0 border-r border-gray-100 pr-8">
             <p className="font-sans text-xs text-gray-600 leading-relaxed line-clamp-3">
               {project.description}
             </p>
             <div className="flex gap-2">
                {project.tags.slice(0,2).map(t => (
                  <span key={t} className="font-mono text-[9px] uppercase tracking-wider text-gray-400 bg-gray-50 px-2 py-1">{t}</span>
                ))}
             </div>
          </div>

          {/* Filmstrip */}
          <div className="flex-1 overflow-hidden relative">
             <div 
               ref={scrollRef}
               className="flex gap-4 overflow-x-auto h-full items-center px-1 no-scrollbar w-full"
               style={{ scrollSnapType: 'x mandatory' }}
             >
                {mediaList.map((media, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`
                      relative flex-shrink-0 h-24 aspect-[4/3] overflow-hidden transition-all duration-300 border
                      ${activeIndex === idx ? 'border-black ring-1 ring-black opacity-100' : 'border-transparent opacity-50 hover:opacity-100'}
                    `}
                    style={{ scrollSnapAlign: 'start' }}
                  >
                    {media.type === 'video' && (
                       <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/20">
                          <Play size={12} fill="white" className="text-white" />
                       </div>
                    )}
                    <img 
                      src={media.type === 'video' ? (media.poster || media.url) : media.url} 
                      className="w-full h-full object-cover bg-gray-100"
                    />
                  </button>
                ))}
             </div>
          </div>

        </div>

      </div>
    </motion.div>
  );
};