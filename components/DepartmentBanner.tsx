
import React from 'react';
import { IconArrow } from './Icons';

const DepartmentBanner: React.FC = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto my-8 px-4 group">
      <a 
        href="https://test.uomus.edu.iq/Department/Index/39"
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-3xl p-6 md:p-10 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 transform cursor-pointer relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-10 -mt-10 blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-uomus-teal opacity-10 rounded-full -ml-10 -mb-10 blur-2xl"></div>
        
        <div className="flex flex-col md:flex-row items-center justify-between z-10 relative">
          <div className="text-center md:text-right w-full">
            <h3 className="text-2xl md:text-4xl font-extrabold mb-2">
              هندسة تقنيات الأجهزة الطبية
            </h3>
            <p className="text-gray-300 text-sm md:text-lg font-medium mt-3">
              اضغط هنا لمعرفة المزيد عن القسم
            </p>
          </div>
          
          <div className="mt-6 md:mt-0 bg-white/20 p-4 rounded-full backdrop-blur-sm group-hover:bg-white/30 transition-colors">
            <IconArrow className="w-8 h-8 text-white" />
          </div>
        </div>
      </a>
    </div>
  );
};

export default DepartmentBanner;
