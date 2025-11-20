import React from 'react';
import { ContentData } from '../types';
import { Clock, Shirt, Info, AlertTriangle } from 'lucide-react';

interface EventDetailsProps {
  content: ContentData;
}

const EventDetails: React.FC<EventDetailsProps> = ({ content }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-100">
      {/* Letter Header */}
      <div className="p-6 border-b border-slate-100">
        <p className="font-bold text-lg text-navy-900">{content.to}</p>
      </div>

      {/* Main Content */}
      <div className="p-6 space-y-6 text-slate-700 leading-relaxed">
        <p className="indent-8">{content.para1}</p>

        {/* Schedule Card */}
        <div className="bg-navy-50 rounded-lg p-5 border border-navy-100">
          <h4 className="font-bold text-navy-900 mb-3 flex items-center gap-2">
            <Clock className="w-5 h-5 text-navy-700" />
            {content.scheduleTitle}
          </h4>
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white p-3 rounded-md shadow-sm">
              <span className="font-medium text-navy-800">{content.schedule.thai}</span>
              <span className="text-navy-600 font-semibold bg-navy-50 px-2 py-1 rounded text-sm mt-1 sm:mt-0">
                {content.schedule.thaiTime}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white p-3 rounded-md shadow-sm">
              <span className="font-medium text-navy-800">{content.schedule.eng}</span>
              <span className="text-navy-600 font-semibold bg-navy-50 px-2 py-1 rounded text-sm mt-1 sm:mt-0">
                {content.schedule.engTime}
              </span>
            </div>
          </div>
        </div>

        <p>{content.para2}</p>

        {/* Important Notes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3 p-4 bg-yellow-50 rounded-lg border border-yellow-100">
            <Shirt className="w-5 h-5 text-yellow-600 shrink-0 mt-1" />
            <p className="text-sm text-yellow-800">{content.dressCode}</p>
          </div>
          <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-100">
            <Info className="w-5 h-5 text-red-500 shrink-0 mt-1" />
            <p className="text-sm text-red-800">{content.schoolClosed}</p>
          </div>
        </div>

        {/* Online Registration Warning */}
        <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg border border-orange-100">
          <AlertTriangle className="w-5 h-5 text-orange-600 shrink-0 mt-1" />
          <p className="text-sm font-medium text-orange-800">{content.onlineOnlyWarning}</p>
        </div>

        <div className="mt-8 flex flex-col items-end space-y-2 pt-4 border-t border-slate-100">
            <p className="italic text-slate-600">{content.closing}</p>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;