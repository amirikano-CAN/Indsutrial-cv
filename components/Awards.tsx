import React from 'react';
import { AwardItem } from '../types';
import { Section } from './Section';
import { ArrowUpRight } from 'lucide-react';

interface AwardsProps {
  items: AwardItem[];
  title: string;
}

export const Awards: React.FC<AwardsProps> = ({ items, title }) => {
  return (
    <Section title={title}>
      <div className="flex flex-col">
        {items.map((item, idx) => (
          <div key={idx} className="flex flex-col md:flex-row md:items-baseline md:justify-between py-2 border-b-[0.5px] border-gray-100 last:border-0 print:py-1 break-inside-avoid group">
            <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-3">
              <span className="font-display font-bold text-sm print:text-xs text-black uppercase leading-tight tracking-tight">
                {item.project}
              </span>
              
              <div className="flex items-center gap-2">
                <span className="text-sm print:text-xs text-gray-600 font-sans leading-tight">
                  {item.recognition}
                </span>
                
                {item.url && (
                  <a 
                    href={item.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center justify-center text-gray-300 hover:text-black transition-colors"
                    aria-label={`View ${item.project} award`}
                  >
                    <ArrowUpRight size={10} className="print:hidden" />
                    <span className="hidden print:inline font-mono text-[8px] text-gray-400 ml-1">[REF]</span>
                  </a>
                )}
              </div>
            </div>
            
            <div className="font-mono text-[9px] print:text-[8px] text-gray-400 uppercase tracking-widest mt-1 md:mt-0 flex items-center">
              {item.institution} 
              <span className="text-gray-200 mx-1.5">//</span> 
              {item.year}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};