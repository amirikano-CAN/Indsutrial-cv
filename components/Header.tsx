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
    <header className="mb-12 md:mb-20 print:mb-6">
      <div className="mb-6 md:mb-10 print:mb-2 break-inside-avoid">
        {/* System Status */}
        <div className="flex items-center gap-2 font-mono text-[10px] md:text-xs tracking-widest text-gray-500 mb-4 md:mb-10 print:mb-2 uppercase">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-20"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-black"></span>
          </span>
          System Active: Core_V4
        </div>

        {/* Name - Scaled for Print density */}
        <h1 className="font-display font-bold text-[12vw] sm:text-[6rem] md:text-[8rem] lg:text-[9rem] print:text-[5.5rem] leading-[0.85] tracking-tighter uppercase text-black mb-4 md:mb-8 print:mb-2 select-none">
          <span className="block">{firstName}</span>
          <span className="block text-gray-300">{lastName}</span>
        </h1>

        {/* Title */}
        <div className="font-mono text-[10px] sm:text-xs md:text-sm text-black uppercase tracking-[0.2em] md:tracking-[0.3em] border-t border-black pt-4 print:pt-1">
          Lead Industrial Designer <span className="text-gray-400 px-1">//</span> Speculative Fabrication
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 print:gap-4">
        <div className="md:col-span-7">
           <p className="text-sm md:text-base print:text-[11px] text-gray-600 font-sans leading-relaxed print:leading-snug text-justify md:text-left">
              {summary}
            </p>
        </div>

        <div className="md:col-span-5 flex flex-col justify-end">
           <div className="flex flex-col gap-2 print:gap-0.5 font-mono text-[9px] uppercase tracking-widest text-gray-500 border-l-2 border-gray-100 pl-4 print:pl-2">
              <div className="flex justify-between w-full max-w-[220px]">
                <span>LOC</span>
                <span className="text-black">{contact.location}</span>
              </div>
              <div className="flex justify-between w-full max-w-[220px]">
                <span>REF</span>
                <span className="text-black">AVAILABLE</span>
              </div>
              <div className="flex flex-col mt-1">
                <span className="text-black lowercase">{contact.email}</span>
                <span className="text-gray-400 truncate">{contact.portfolio}</span>
              </div>
           </div>
        </div>
      </div>
    </header>
  );
};