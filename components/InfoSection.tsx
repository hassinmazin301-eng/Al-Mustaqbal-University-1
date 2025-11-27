import React from 'react';
import { IconCheck, IconMoney, IconPercent } from './Icons';

const InfoSection: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
      
      {/* 1. Admission Inputs - Blue/Cyan Theme */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="bg-cyan-50 p-6 flex flex-col items-center border-b border-cyan-100">
          <div className="w-16 h-16 bg-uomus-teal rounded-full flex items-center justify-center mb-3 shadow-md">
             <IconCheck className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-uomus-dark">مدخلات القبول</h3>
        </div>
        <div className="p-6 space-y-3">
          <ul className="space-y-3">
            <li className="flex items-center text-gray-700 font-semibold">
              <span className="w-2 h-2 bg-uomus-teal rounded-full ml-3"></span>
              احيائي
            </li>
            <li className="flex items-center text-gray-700 font-semibold">
              <span className="w-2 h-2 bg-uomus-teal rounded-full ml-3"></span>
              تطبيقي
            </li>
            <li className="flex items-center text-gray-700 font-semibold">
              <span className="w-2 h-2 bg-uomus-teal rounded-full ml-3"></span>
              علمي
            </li>
            <li className="flex items-start text-gray-700 font-semibold">
              <span className="w-2 h-2 bg-uomus-teal rounded-full ml-3 mt-2 flex-shrink-0"></span>
              <span>
                صناعة (الكترونيك والسيطرة، الاجهزة الطبية - الاتصالات)
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* 2. Tuition Fees - Blue Theme */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 relative">
        <div className="bg-blue-50 p-6 flex flex-col items-center border-b border-blue-100">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-3 shadow-md">
             <IconMoney className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-uomus-dark">الأجور الدراسية</h3>
        </div>
        <div className="p-8 flex flex-col items-center justify-center h-48">
          <span className="text-4xl font-extrabold text-blue-800 tracking-tighter">3,000,000</span>
          <span className="text-lg text-gray-500 font-medium mt-2">دينار عراقي</span>
          <span className="text-xs text-gray-400 mt-4 px-3 py-1 bg-gray-100 rounded-full">سنوياً</span>
        </div>
      </div>

      {/* 3. Acceptance Rates - Dark Blue Theme */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="bg-indigo-50 p-6 flex flex-col items-center border-b border-indigo-100">
          <div className="w-16 h-16 bg-indigo-700 rounded-full flex items-center justify-center mb-3 shadow-md">
             <IconPercent className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-uomus-dark">معدل القبول</h3>
        </div>
        <div className="p-6 space-y-6">
          
          <div>
            <h4 className="text-sm text-gray-400 font-bold mb-2 uppercase tracking-wider">العام</h4>
            <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
               <span className="font-semibold text-gray-700">صباحي</span>
               <span className="font-bold text-indigo-700 text-xl">58</span>
            </div>
            <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg mt-2">
               <span className="font-semibold text-gray-700">مسائي</span>
               <span className="font-bold text-indigo-700 text-xl">60</span>
            </div>
          </div>

          <div>
            <h4 className="text-sm text-gray-400 font-bold mb-2 uppercase tracking-wider">المهني</h4>
            <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
               <span className="font-semibold text-gray-700">صباحي</span>
               <span className="font-bold text-indigo-700 text-xl">60</span>
            </div>
            <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg mt-2">
               <span className="font-semibold text-gray-700">مسائي</span>
               <span className="font-bold text-indigo-700 text-xl">62</span>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default InfoSection;