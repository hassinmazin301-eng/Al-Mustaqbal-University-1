import React from 'react';
import { IconCap } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="mt-12 w-full bg-white border-t border-gray-200 py-10">
      <div className="max-w-4xl mx-auto px-4 text-center">
        
        <div className="flex items-center justify-center space-x-2 space-x-reverse mb-6">
          <IconCap className="w-6 h-6 text-uomus-teal" />
          <h3 className="text-lg md:text-xl font-bold text-gray-800">
             كلية التقنيات الهندسية
          </h3>
        </div>
        
        <p className="text-xl md:text-2xl text-gray-600 font-light mb-8">
          حيث تتحول الأفكار إلى إنجازات...
        </p>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-8"></div>

        {/* Accreditations Bar Simulation */}
        <div className="flex flex-wrap justify-center items-center gap-6 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
           {/* We simulate logos with text for copyright safety, styled to look like the image */}
           <div className="h-8 flex items-center border border-gray-300 px-2 rounded bg-gray-50 text-xs font-bold text-blue-900">QS WORLD RANKING</div>
           <div className="h-8 flex items-center border border-gray-300 px-2 rounded bg-gray-50 text-xs font-bold text-red-700">THE IMPACT</div>
           <div className="h-8 flex items-center border border-gray-300 px-2 rounded bg-gray-50 text-xs font-bold text-green-700">UI GREEN METRIC</div>
           <div className="h-8 flex items-center border border-gray-300 px-2 rounded bg-gray-50 text-xs font-bold text-blue-500">SCIMAGO</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;