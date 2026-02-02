import React, { useState } from "react";
import { Header } from "./components/Header";
import { Skills } from "./components/Skills";
import { Certifications } from "./components/Certifications";
import { Awards } from "./components/Awards";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { cvDataEn, cvDataFr } from "./data";
import { Printer, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type LangMode = 'en' | 'fr';

const App: React.FC = () => {
  // Default to French
  const [lang, setLang] = useState<LangMode>('fr');

  // Dynamic Data Loading based on Language
  const activeData = lang === 'en' ? cvDataEn : cvDataFr;
  const t = activeData.translations;

  const handlePrint = () => {
    const originalTitle = document.title;
    document.title = `CV_${activeData.name.replace(/\s+/g, '_')}_${lang.toUpperCase()}`;
    window.print();
    document.title = originalTitle;
  };

  const toggleLanguage = () => {
    setLang(prev => prev === 'en' ? 'fr' : 'en');
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-8 md:py-12 px-0 sm:px-6 print:p-0 print:block bg-[#F4F4F4] transition-colors duration-700 ease-in-out">
      
      {/* TOP RIGHT CONTROLS - Language & Export */}
      <div className="fixed top-6 right-6 md:top-8 md:right-8 z-50 flex gap-3 no-print">
        
        {/* Language Toggle */}
        <button 
          onClick={toggleLanguage}
          className="bg-white text-black border border-gray-200 h-10 px-4 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2"
          aria-label="Switch Language"
        >
          <Globe size={14} strokeWidth={1.5} className="text-black" />
          <div className="flex items-center gap-1 font-mono text-[9px] uppercase tracking-widest">
            <span className={`${lang === 'en' ? 'font-bold text-black' : 'text-gray-400'}`}>EN</span>
            <span className="text-gray-300">/</span>
            <span className={`${lang === 'fr' ? 'font-bold text-black' : 'text-gray-400'}`}>QC</span>
          </div>
        </button>

         {/* PDF Export - Static Text Design */}
         <button 
          onClick={handlePrint}
          className="bg-black text-white h-10 px-4 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2"
          aria-label="Export to PDF"
        >
          <Printer size={14} strokeWidth={1.5} />
          <span className="font-mono text-[9px] uppercase tracking-widest">
            {t.ui.savePdf}
          </span>
        </button>

      </div>

      {/* MAIN CONTAINER */}
      <motion.main 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`
          w-full mx-auto min-h-screen relative overflow-hidden bg-white max-w-7xl
          shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] print:shadow-none print:p-0
        `}
        style={{
          padding: 'var(--padding-cv)'
        }}
      >
        <style>{`
          :root {
            --padding-cv: 3rem;
          }
          @media (min-width: 640px) {
            :root { --padding-cv: 5rem; }
          }
          @media print {
             :root { --padding-cv: 0; }
          }
        `}</style>

        {/* HEADER */}
        <div className="mb-12">
          <Header 
            config={activeData.config}
            name={activeData.name}
            summary={activeData.summary}
            contact={activeData.contact}
            labels={t.ui}
          />
        </div>

        {/* CONTENT STACK */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={`cv-content-${lang}`}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col"
          >
            {/* 1. AWARDS */}
            <div className="mb-4">
               <Awards 
                  items={activeData.awards} 
                  title={t.sections.awards} 
                  number="01" 
                />
            </div>

            {/* 2. CERTIFICATIONS */}
            <div className="mb-4">
              <Certifications 
                items={activeData.certifications} 
                title={t.sections.certifications} 
                number="02" 
              />
            </div>

            {/* 3. EXPERIENCE */}
            <Experience 
              items={activeData.experience} 
              title={t.sections.experience} 
              number="03" 
            />

            {/* 4. PROJECTS */}
            <div className="mt-4 md:mt-8">
               <Projects 
                items={activeData.projects} 
                title={t.sections.projects} 
                number="04" 
              />
            </div>

            {/* 5. SKILLS */}
            <div className="mt-4 md:mt-8">
               <Skills 
                categories={activeData.skillCategories} 
                title={t.sections.skills} 
                number="05" 
              />
            </div>

            {/* 6. EDUCATION */}
            <div className="mt-8 md:mt-12">
               <Education 
                items={activeData.education} 
                title={t.sections.education} 
                number="06" 
                isLast
              />
            </div>

            {/* Footer */}
            <footer className="mt-20 pt-6 border-t-[0.5px] border-black flex flex-col md:flex-row justify-between items-start md:items-end text-[8px] font-mono uppercase tracking-[0.4em] text-gray-300 print:mt-10 break-inside-avoid gap-4 md:gap-0">
              <div className="space-y-1">
                <p>{t.ui.documentStatus}</p>
                <p>{t.ui.serialRef}: {activeData.name.split(' ')[1].toUpperCase()}-ID-V4.0</p>
              </div>
              <p>{t.ui.copyright} © {new Date().getFullYear()} — {activeData.name.toUpperCase()}</p>
            </footer>
          </motion.div>
        </AnimatePresence>

      </motion.main>

      {/* Screen Format Marker */}
      <div className="mt-8 mb-8 text-gray-400 font-mono text-[10px] uppercase tracking-widest opacity-30 no-print hidden md:block">
        Din A4 / Letter ISO 216 // {lang.toUpperCase()}
      </div>
    </div>
  );
};

export default App;