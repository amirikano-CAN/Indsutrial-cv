import React from 'react';
import { ContactInfo } from '../types';

interface HeaderProps {
  name: string;
  title: string;
  summary: string;
  contact: ContactInfo;
}

export const Header: React.FC<HeaderProps> = ({ name, title, summary, contact }) => {
  const [firstName, lastName] = name.split(' ');

  return (
    <header className="mb-16 md:mb-20">
      {/* Clean White Masthead - Typography Focused */}
      <div className="mb-8 md:mb-10 break-inside-avoid">
        {/* System Status Label */}
        <div className="flex items-center gap-2 font-mono text-[10px] md:text-xs tracking-widest text-gray-500 mb-6 md:mb-10 uppercase">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-20"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
          </span>
          System Active: Core_V4
        </div>

        {/* Massive Name Block - High Contrast */}
        <h1 className="font-display font-bold text-[15vw] sm:text-[6rem] md:text-[8rem] lg:text-[9rem] leading-[0.8] tracking-tighter uppercase text-black mb-6 md:mb-8 select-none">
          <span className="block">{firstName}</span>
          <span className="block text-gray-300">{lastName}</span>
        </h1>

        {/* Monospace Title with Separator */}
        <div className="font-mono text-[10px] sm:text-xs md:text-sm text-black uppercase tracking-[0.2em] md:tracking-[0.3em] border-t border-black pt-6">
          Lead Industrial Designer <span className="text-gray-400 px-1">//</span> Speculative Fabrication
        </div>
      </div>

      {/* Transitional Info Grid (Summary & Contact) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        
        {/* Left: Summary */}
        <div className="md:col-span-7">
           <p className="text-sm md:text-base text-gray-600 font-sans leading-relaxed text-justify md:text-left">
              {summary}
            </p>
        </div>

        {/* Right: Technical Metadata (Contact) */}
        <div className="md:col-span-5 flex flex-col justify-end">
           <div className="flex flex-col gap-3 font-mono text-[10px] uppercase tracking-widest text-gray-500 border-l-2 border-gray-200 pl-4">
              <div className="flex justify-between w-full max-w-[250px]">
                <span>LOC</span>
                <span className="text-black">{contact.location}</span>
              </div>
              <div className="flex justify-between w-full max-w-[250px]">
                <span>REF</span>
                <span className="text-black">AVAILABLE</span>
              </div>
              
              <div className="h-[1px] w-12 bg-gray-300 my-1"></div>

              <a href={`mailto:${contact.email}`} className="hover:text-black hover:translate-x-1 transition-all duration-300 flex items-center gap-2">
                <span>EMAIL</span>
                <span className="opacity-0 hover:opacity-100">→</span>
              </a>
              <a href={`https://${contact.portfolio}`} target="_blank" rel="noreferrer" className="hover:text-black hover:translate-x-1 transition-all duration-300 flex items-center gap-2">
                <span>PORTFOLIO</span>
                <span className="opacity-0 hover:opacity-100">→</span>
              </a>
              <a href={`https://${contact.linkedin}`} target="_blank" rel="noreferrer" className="hover:text-black hover:translate-x-1 transition-all duration-300 flex items-center gap-2">
                <span>LINKEDIN</span>
                <span className="opacity-0 hover:opacity-100">→</span>
              </a>
           </div>
        </div>

      </div>
    </header>
  );
};