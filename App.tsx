import React from "react";
import { Header } from "./components/Header";
import { Skills } from "./components/Skills";
import { Certifications } from "./components/Certifications";
import { Awards } from "./components/Awards";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { cvData } from "./data";
import { Printer } from "lucide-react";

const App: React.FC = () => {
  const handlePrint = () => {
    const originalTitle = document.title;
    document.title = `CV_${cvData.name.replace(/\s+/g, '_')}`;
    window.print();
    document.title = originalTitle;
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-8 md:py-12 px-0 sm:px-6 print:p-0 print:block bg-[#F4F4F4]">
      
      <button 
        onClick={handlePrint}
        className="fixed bottom-6 right-6 md:bottom-12 md:right-12 bg-black text-white p-4 md:p-5 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all no-print z-50 flex items-center gap-4 group"
        aria-label="Export to PDF"
      >
        <Printer size={18} strokeWidth={1.5} />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-mono text-[10px] uppercase tracking-widest">
          Export Document
        </span>
      </button>

      {/* Main Container - Print version has 0 padding to allow @page margins to work */}
      <main className="print-container w-full max-w-[210mm] bg-white p-6 sm:p-12 md:p-[20mm] lg:p-[25mm] print:p-0 mx-auto min-h-screen shadow-none md:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] relative overflow-hidden">
        
        <Header 
          name={cvData.name}
          title={cvData.title}
          summary={cvData.summary}
          contact={cvData.contact}
        />

        <div className="flex flex-col">
          <Skills categories={cvData.skillCategories} />
          <Certifications items={cvData.certifications} />
          <Awards items={cvData.awards} />
          <Experience items={cvData.experience} />
          <Projects items={cvData.projects} />
          <Education items={cvData.education} />
        </div>

        <footer className="mt-16 md:mt-32 pt-6 border-t-[0.5px] border-black flex flex-col md:flex-row justify-between items-start md:items-end text-[8px] font-mono uppercase tracking-[0.4em] text-gray-300 print:mt-10 break-inside-avoid gap-4 md:gap-0">
          <div className="space-y-1">
            <p>DOCUMENT_STATUS: AUTHENTICATED</p>
            <p>SERIAL_REF: {cvData.name.split(' ')[1].toUpperCase()}-ID-V4.0</p>
          </div>
          <p>COPYRIGHT © {new Date().getFullYear()} — {cvData.name.toUpperCase()}</p>
        </footer>

      </main>

      <div className="mt-8 mb-8 text-gray-400 font-mono text-[10px] uppercase tracking-widest opacity-40 no-print hidden md:block">
        Format Optimized for A4 / Letter
      </div>
    </div>
  );
};

export default App;