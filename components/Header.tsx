import React from 'react';
import { ContactInfo, Translations } from '../types';
import { Linkedin, Instagram } from 'lucide-react';

interface HeaderProps {
  config: {
    systemStatus: string;
    roleTitle: string;
    roleSubtitle: string;
  };
  name: string;
  summary: string;
  contact: ContactInfo;
  labels: Translations['ui'];
}

export const Header: React.FC<HeaderProps> = ({ config, name, summary, contact, labels }) => {
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
          {config.systemStatus}
        </div>

        {/* Name - Scaled for Print density */}
        <h1 className="font-display font-bold text-[12vw] sm:text-[6rem] md:text-[8rem] lg:text-[9rem] print:text-[5.5rem] leading-[0.85] tracking-tighter uppercase text-black mb-4 md:mb-8 print:mb-2 select-none">
          <span className="block">{firstName}</span>
          <span className="block text-gray-300">{lastName}</span>
        </h1>

        {/* Title */}
        <div className="font-mono text-[10px] sm:text-xs md:text-sm text-black uppercase tracking-[0.2em] md:tracking-[0.3em] border-t border-black pt-4 print:pt-1">
          {config.roleTitle} <span className="text-gray-400 px-1">//</span> {config.roleSubtitle}
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
           <div className="flex flex-col gap-3 md:gap-2 print:gap-1 font-mono text-[9px] uppercase tracking-widest text-gray-500 border-l-2 border-gray-100 pl-4 print:pl-2">
              <div className="flex justify-between w-full max-w-[240px] items-center">
                <span>{labels.loc}</span>
                <span className="text-black">{contact.location}</span>
              </div>
              <div className="flex justify-between w-full max-w-[240px] items-center">
                <span>{labels.tel}</span>
                <a href={`tel:${contact.phone}`} className="text-black hover:opacity-60 transition-opacity py-1 md:py-0">
                  {contact.phone}
                </a>
              </div>
              
              <div className="flex flex-col mt-1">
                <a href={`mailto:${contact.email}`} className="text-black lowercase hover:opacity-60 transition-opacity mb-4 md:mb-3 print:mb-0 py-1 md:py-0">
                  {contact.email}
                </a>

                {/* Social Links - Hidden in Print */}
                <div className="flex flex-col gap-3 md:gap-1.5 print:hidden">
                    {/* LinkedIn */}
                    <a 
                      href={contact.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-black transition-colors w-fit py-1 md:py-0"
                    >
                      <Linkedin size={14} strokeWidth={1.5} className="md:w-3 md:h-3" />
                      <span>LinkedIn</span>
                    </a>

                    {/* Behance */}
                    <a 
                      href={contact.behance} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-black transition-colors w-fit py-1 md:py-0"
                    >
                      {/* Custom Behance SVG */}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="md:w-3 md:h-3">
                        <path d="M10 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5"/>
                        <path d="M14 11h4"/>
                        <path d="M14 8h4"/>
                        <path d="M14 14h2"/>
                      </svg>
                      <span>Behance</span>
                    </a>

                    {/* Instagram */}
                    <a 
                      href={contact.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-black transition-colors w-fit py-1 md:py-0"
                    >
                      <Instagram size={14} strokeWidth={1.5} className="md:w-3 md:h-3" />
                      <span>Instagram</span>
                    </a>
                </div>
              </div>
           </div>
        </div>
      </div>
    </header>
  );
};