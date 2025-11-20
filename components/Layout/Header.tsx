import React from 'react';
import { Language } from '../../types';
import { Globe, School } from 'lucide-react';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

const Header: React.FC<HeaderProps> = ({ lang, setLang }) => {
  return (
    <header className="sticky top-0 z-50 bg-navy-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/10 rounded-full">
            <School className="w-6 h-6 text-yellow-400" />
          </div>
          <div>
            <h1 className="text-lg font-bold leading-tight">
              {lang === 'th' ? 'โรงเรียนสาธิตอุดมศึกษา' : 'Satit Udomseuksa School'}
            </h1>
            <p className="text-xs text-gray-300">
              {lang === 'th' ? 'ระบบตอบรับกิจกรรม' : 'Activity Response System'}
            </p>
          </div>
        </div>

        <button
          onClick={() => setLang(lang === 'th' ? 'en' : 'th')}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors border border-white/10"
        >
          <Globe className="w-4 h-4" />
          <span className="text-sm font-medium uppercase">{lang}</span>
        </button>
      </div>
    </header>
  );
};

export default Header;