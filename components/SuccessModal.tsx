import React from 'react';
import { CheckCircle } from 'lucide-react';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  buttonText: string;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose, title, message, buttonText }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-navy-900/60 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
      
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6 text-center transform transition-all animate-in zoom-in-95 duration-200">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        
        <h3 className="text-xl font-bold text-navy-900 mb-2">{title}</h3>
        <p className="text-slate-600 mb-6">{message}</p>
        
        <button
          onClick={onClose}
          className="w-full py-2.5 px-4 bg-navy-900 text-white rounded-lg font-medium hover:bg-navy-800 transition-colors"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;