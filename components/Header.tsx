
import React from 'react';

const Header: React.FC = () => {
  // Right Logo (University) - Provided by user
  // We use the link provided. If it fails (e.g. not a direct image), onError will handle it.
  const UNIVERSITY_LOGO = "https://share.google/images/XIdnqSFNyHCufknYO";
  
  // Left Logo (College) - Using the Wiki logo as base to filter to Blue
  const COLLEGE_LOGO_BASE = "https://upload.wikimedia.org/wikipedia/commons/e/e6/Al-Mustaqbal_University_College_logo.png";

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-2 md:px-6 py-3">
        {/* Container - Flex Row for alignment (RTL: Right is Start, Left is End) */}
        <div className="flex flex-row items-center justify-between">
          
          {/* Right Logo (University - Green) */}
          <div className="flex-shrink-0 w-20 md:w-32 flex justify-start">
             <img 
               src={UNIVERSITY_LOGO} 
               alt="شعار جامعة المستقبل" 
               referrerPolicy="no-referrer"
               className="h-20 md:h-28 w-auto object-contain drop-shadow-md hover:scale-105 transition-transform duration-300"
               onError={(e) => {
                 // Fallback to the reliable wiki logo if the user-provided link fails to load
                 e.currentTarget.src = "https://upload.wikimedia.org/wikipedia/commons/e/e6/Al-Mustaqbal_University_College_logo.png";
               }}
             />
          </div>

          {/* Center Text Section */}
          <div className="flex-1 flex flex-col items-center justify-center text-center px-1 z-10">
            <h1 className="text-xl md:text-4xl lg:text-5xl font-black text-slate-800 tracking-tight font-sans leading-none mb-1 md:mb-2">
              جامعة المستقبل
            </h1>
            <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-[#0ea5e9] leading-tight">
              كلية التقنيات الهندسية
            </h2>
            
            {/* Decorative Blue Bar matching the reference image */}
             <div className="w-32 md:w-64 h-2 md:h-3 bg-gradient-to-r from-[#0ea5e9] to-cyan-500 rounded-full mt-2 md:mt-3 shadow-sm"></div>
          </div>

          {/* Left Logo (College - Blue Filtered) */}
          <div className="flex-shrink-0 w-20 md:w-32 flex justify-end">
             {/* 
                 Using hue-rotate to turn Green to Blue to match the College branding 
             */}
             <img 
               src={COLLEGE_LOGO_BASE}
               alt="شعار كلية التقنيات الهندسية" 
               referrerPolicy="no-referrer"
               className="h-20 md:h-28 w-auto object-contain drop-shadow-md filter hue-rotate-[175deg] brightness-110 contrast-125 hover:scale-105 transition-transform duration-300"
             />
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
