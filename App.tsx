import React, { useState, useEffect } from 'react';
import Header from './components/Layout/Header';
import EventDetails from './components/EventDetails';
import ResponseForm from './components/ResponseForm';
import SuccessModal from './components/SuccessModal';
import { CONTENT } from './constants';
import { Language, FormData } from './types';
import { Loader2 } from 'lucide-react';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('th');
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    console.log('Form Data Submitted:', data);

    // TODO: PASTE YOUR GOOGLE APPS SCRIPT WEB APP URL HERE
    // See GOOGLE_SHEETS_SETUP.md for instructions
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwfzGi5WVBUEKSp6TlzIstJon9TioxXOPnpaPi0HIHjHguQheMZP4YUl9FDe_pAexOL/exec"; 

    try {
      if (GOOGLE_SCRIPT_URL) {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          // Using text/plain to avoid CORS preflight issues with Google Apps Script
          headers: {
            'Content-Type': 'text/plain;charset=utf-8',
          },
          body: JSON.stringify(data),
        });
      } else {
        // Simulate network delay if no URL is provided
        await new Promise(resolve => setTimeout(resolve, 1500));
      }
      
      setShowSuccess(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(lang === 'th' ? "เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง" : "An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Simple effect to ensure window scrolls to top on language change
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const content = CONTENT[lang];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pb-12 font-sarabun relative">
      {/* Global Loading Overlay */}
      {isSubmitting && (
        <div className="fixed inset-0 z-[60] bg-white/50 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white p-6 rounded-2xl shadow-xl flex flex-col items-center gap-4">
            <Loader2 className="w-10 h-10 text-navy-600 animate-spin" />
            <p className="text-navy-900 font-semibold animate-pulse">
              {lang === 'th' ? 'กำลังบันทึกข้อมูล...' : 'Submitting...'}
            </p>
          </div>
        </div>
      )}

      <Header lang={lang} setLang={setLang} />

      <main className="container mx-auto px-4 pt-8 max-w-3xl space-y-8">
        
        {/* Header Section for the Activity */}
        <div className="text-center space-y-2 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight">
            {lang === 'th' ? 'กิจกรรมวันพ่อแห่งชาติ 2568' : 'Father\'s Day Activity 2025'}
          </h1>
        </div>

        {/* Content Stack - Single Column */}
        <div className="space-y-8">
           <EventDetails content={content} />
           <ResponseForm content={content} onSubmit={handleFormSubmit} />
        </div>

      </main>

      {/* Footer */}
      <footer className="mt-auto pt-12 pb-6 text-center text-slate-400 text-sm">
        <p>&copy; 2025 Satit Udomseuksa School. All rights reserved.</p>
      </footer>

      <SuccessModal 
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        title={content.successTitle}
        message={content.successMessage}
        buttonText={content.closeButton}
      />
    </div>
  );
};

export default App;