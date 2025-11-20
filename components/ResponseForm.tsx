import React, { useState } from 'react';
import { ContentData, FormData } from '../types';
import { Check, X, Users, BookOpen } from 'lucide-react';

interface ResponseFormProps {
  content: ContentData;
  onSubmit: (data: FormData) => void;
}

const ResponseForm: React.FC<ResponseFormProps> = ({ content, onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    prefix: '',
    firstName: '',
    lastName: '',
    studentProgram: '',
    level: '',
    room: '',
    parentPrefix: '',
    parentFirstName: '',
    parentLastName: '',
    isAttending: null,
    guestCount: 1,
    program: 'Thai',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, boolean>>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Partial<Record<keyof FormData, boolean>> = {};
    
    if (!formData.prefix) newErrors.prefix = true;
    if (!formData.firstName) newErrors.firstName = true;
    if (!formData.lastName) newErrors.lastName = true;
    if (!formData.studentProgram) newErrors.studentProgram = true;
    if (!formData.level) newErrors.level = true;
    if (!formData.room) newErrors.room = true;
    if (!formData.parentPrefix) newErrors.parentPrefix = true;
    if (!formData.parentFirstName) newErrors.parentFirstName = true;
    if (!formData.parentLastName) newErrors.parentLastName = true;
    if (formData.isAttending === null) newErrors.isAttending = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSubmit(formData);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-navy-900" id="response-form">
      <div className="p-6 bg-navy-50 border-b border-navy-100">
        <h3 className="text-xl font-bold text-navy-900 flex items-center gap-2">
          <BookOpen className="w-5 h-5" />
          {content.formTitle}
        </h3>
        <p className="text-sm text-red-600 mt-1 font-medium">
          * {content.deadline}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        {/* Student Info Section */}
        <div className="space-y-4">
           <h4 className="font-bold text-navy-800 border-l-4 border-navy-500 pl-3 text-lg">
             {content.firstNameLabel} - {content.lastNameLabel} (Student)
           </h4>
           
           <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
             {/* Prefix */}
             <div className="md:col-span-2 space-y-2">
                <label className="block text-sm font-bold text-slate-700">
                  {content.prefixLabel} <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.prefix}
                  onChange={(e) => setFormData({ ...formData, prefix: e.target.value })}
                  className={`w-full px-3 py-2.5 rounded-lg border ${errors.prefix ? 'border-red-500 bg-red-50' : 'border-slate-300 focus:border-navy-500'} outline-none bg-white`}
                >
                  <option value="">-</option>
                  {content.prefixOptions.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
             </div>

             {/* First Name */}
             <div className="md:col-span-5 space-y-2">
                <label className="block text-sm font-bold text-slate-700">
                  {content.firstNameLabel} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className={`w-full px-4 py-2.5 rounded-lg border ${errors.firstName ? 'border-red-500 bg-red-50' : 'border-slate-300 focus:border-navy-500'} outline-none`}
                  placeholder="..."
                />
             </div>

             {/* Last Name */}
             <div className="md:col-span-5 space-y-2">
                <label className="block text-sm font-bold text-slate-700">
                  {content.lastNameLabel} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className={`w-full px-4 py-2.5 rounded-lg border ${errors.lastName ? 'border-red-500 bg-red-50' : 'border-slate-300 focus:border-navy-500'} outline-none`}
                  placeholder="..."
                />
             </div>
           </div>
        </div>

        <hr className="border-slate-100" />

        {/* Class Info Section */}
        <div className="space-y-4">
           <h4 className="font-bold text-navy-800 border-l-4 border-navy-500 pl-3 text-lg">
             {content.levelLabel} / {content.roomLabel}
           </h4>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Program */}
              <div className="space-y-2">
                 <label className="block text-sm font-bold text-slate-700">
                   {content.stdProgramLabel} <span className="text-red-500">*</span>
                 </label>
                 <select
                    value={formData.studentProgram}
                    onChange={(e) => setFormData({ ...formData, studentProgram: e.target.value })}
                    className={`w-full px-3 py-2.5 rounded-lg border ${errors.studentProgram ? 'border-red-500 bg-red-50' : 'border-slate-300 focus:border-navy-500'} outline-none bg-white`}
                 >
                    <option value="">Select Program</option>
                    {content.stdProgramOptions.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                 </select>
              </div>

              {/* Level */}
              <div className="space-y-2">
                 <label className="block text-sm font-bold text-slate-700">
                   {content.levelLabel} <span className="text-red-500">*</span>
                 </label>
                 <select
                    value={formData.level}
                    onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                    className={`w-full px-3 py-2.5 rounded-lg border ${errors.level ? 'border-red-500 bg-red-50' : 'border-slate-300 focus:border-navy-500'} outline-none bg-white`}
                 >
                    <option value="">Select Level</option>
                    {content.levelOptions.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                 </select>
              </div>

              {/* Room */}
              <div className="space-y-2">
                 <label className="block text-sm font-bold text-slate-700">
                   {content.roomLabel} <span className="text-red-500">*</span>
                 </label>
                 <select
                    value={formData.room}
                    onChange={(e) => setFormData({ ...formData, room: e.target.value })}
                    className={`w-full px-3 py-2.5 rounded-lg border ${errors.room ? 'border-red-500 bg-red-50' : 'border-slate-300 focus:border-navy-500'} outline-none bg-white`}
                 >
                    <option value="">Select Room</option>
                    {content.roomOptions.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                 </select>
              </div>
           </div>
        </div>

        <hr className="border-slate-100" />

        {/* Parent Info Section */}
        <div className="space-y-4">
           <h4 className="font-bold text-navy-800 border-l-4 border-navy-500 pl-3 text-lg">
             {content.parentSectionTitle}
           </h4>
           
           <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
             {/* Parent Prefix */}
             <div className="md:col-span-2 space-y-2">
                <label className="block text-sm font-bold text-slate-700">
                  {content.parentPrefixLabel} <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.parentPrefix}
                  onChange={(e) => setFormData({ ...formData, parentPrefix: e.target.value })}
                  className={`w-full px-3 py-2.5 rounded-lg border ${errors.parentPrefix ? 'border-red-500 bg-red-50' : 'border-slate-300 focus:border-navy-500'} outline-none bg-white`}
                >
                  <option value="">-</option>
                  {content.parentPrefixOptions.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
             </div>

             {/* Parent First Name */}
             <div className="md:col-span-5 space-y-2">
                <label className="block text-sm font-bold text-slate-700">
                  {content.parentFirstNameLabel} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.parentFirstName}
                  onChange={(e) => setFormData({ ...formData, parentFirstName: e.target.value })}
                  className={`w-full px-4 py-2.5 rounded-lg border ${errors.parentFirstName ? 'border-red-500 bg-red-50' : 'border-slate-300 focus:border-navy-500'} outline-none`}
                  placeholder="..."
                />
             </div>

             {/* Parent Last Name */}
             <div className="md:col-span-5 space-y-2">
                <label className="block text-sm font-bold text-slate-700">
                  {content.parentLastNameLabel} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.parentLastName}
                  onChange={(e) => setFormData({ ...formData, parentLastName: e.target.value })}
                  className={`w-full px-4 py-2.5 rounded-lg border ${errors.parentLastName ? 'border-red-500 bg-red-50' : 'border-slate-300 focus:border-navy-500'} outline-none`}
                  placeholder="..."
                />
             </div>
           </div>
        </div>

        <hr className="border-slate-100" />

        {/* Attendance */}
        <div className="space-y-4">
          <label className="block text-sm font-bold text-navy-800">
            {content.attendanceLabel} <span className="text-red-500">*</span>
          </label>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setFormData({ ...formData, isAttending: 'yes' })}
              className={`p-4 rounded-xl border-2 flex items-center justify-center gap-3 transition-all ${
                formData.isAttending === 'yes'
                  ? 'border-navy-600 bg-navy-50 text-navy-900 shadow-sm'
                  : 'border-slate-200 text-slate-500 hover:border-navy-200 hover:bg-slate-50'
              } ${errors.isAttending && formData.isAttending === null ? 'border-red-300 bg-red-50' : ''}`}
            >
              <div className={`w-6 h-6 rounded-full flex items-center justify-center border ${formData.isAttending === 'yes' ? 'bg-navy-600 border-navy-600' : 'border-slate-300'}`}>
                {formData.isAttending === 'yes' && <Check className="w-4 h-4 text-white" />}
              </div>
              <span className="font-semibold">{content.optionYes}</span>
            </button>

            <button
              type="button"
              onClick={() => setFormData({ ...formData, isAttending: 'no' })}
              className={`p-4 rounded-xl border-2 flex items-center justify-center gap-3 transition-all ${
                formData.isAttending === 'no'
                  ? 'border-slate-600 bg-slate-100 text-slate-900 shadow-sm'
                  : 'border-slate-200 text-slate-500 hover:border-slate-300 hover:bg-slate-50'
              } ${errors.isAttending && formData.isAttending === null ? 'border-red-300 bg-red-50' : ''}`}
            >
              <div className={`w-6 h-6 rounded-full flex items-center justify-center border ${formData.isAttending === 'no' ? 'bg-slate-600 border-slate-600' : 'border-slate-300'}`}>
                {formData.isAttending === 'no' && <X className="w-4 h-4 text-white" />}
              </div>
              <span className="font-semibold">{content.optionNo}</span>
            </button>
          </div>
        </div>

        {/* Conditional Logic */}
        {formData.isAttending === 'yes' && (
          <div className="bg-navy-50 p-5 rounded-lg border border-navy-100 space-y-5 animate-in fade-in slide-in-from-top-2 duration-300">
            
            {/* Programme Selection */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-navy-800">
                {content.programLabel}
              </label>
              <div className="flex flex-col sm:flex-row gap-3">
                 <label className="flex-1 flex items-center p-3 bg-white rounded-lg border border-navy-100 cursor-pointer hover:border-navy-300 transition-colors">
                    <input 
                      type="radio" 
                      name="program" 
                      checked={formData.program === 'Thai'}
                      onChange={() => setFormData({...formData, program: 'Thai'})}
                      className="w-4 h-4 text-navy-600 focus:ring-navy-500 border-gray-300"
                    />
                    <span className="ml-3 text-slate-700 text-sm">{content.schedule.thai}</span>
                 </label>
                 <label className="flex-1 flex items-center p-3 bg-white rounded-lg border border-navy-100 cursor-pointer hover:border-navy-300 transition-colors">
                    <input 
                      type="radio" 
                      name="program"
                      checked={formData.program === 'English'}
                      onChange={() => setFormData({...formData, program: 'English'})}
                      className="w-4 h-4 text-navy-600 focus:ring-navy-500 border-gray-300"
                    />
                    <span className="ml-3 text-slate-700 text-sm">{content.schedule.eng}</span>
                 </label>
              </div>
            </div>

            {/* Guest Count */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-navy-800">
                {content.guestCountLabel}
              </label>
              <div className="relative max-w-[200px]">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-navy-400" />
                <select
                  value={formData.guestCount}
                  onChange={(e) => setFormData({ ...formData, guestCount: Number(e.target.value) })}
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 focus:border-navy-500 focus:ring-2 focus:ring-navy-200 outline-none appearance-none bg-white"
                >
                  {[1, 2, 3, 4, 5].map(num => (
                    <option key={num} value={num}>{num} {content.guestCountLabel.includes('(') ? '' : 'Person(s)'}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>
          </div>
        )}

        <button
          type="submit"
          className="w-full py-3.5 px-6 bg-navy-900 hover:bg-navy-800 text-white rounded-xl font-bold text-lg shadow-lg shadow-navy-900/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 mt-6"
        >
          {content.submitButton}
        </button>
      </form>
    </div>
  );
};

export default ResponseForm;