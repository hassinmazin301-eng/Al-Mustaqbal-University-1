
import React from 'react';

const Header: React.FC = () => {
  // --- CONFIGURATION ---
  
  // 1. RIGHT LOGO: University Logo
  // Replace the link inside the quotes with the University Logo URL
  const UNIVERSITY_LOGO_URL = "components/mus.png";
  
  // 2. LEFT LOGO: College Logo
  // Replace the link inside the quotes with the College of Engineering Techniques Logo URL
  const COLLEGE_LOGO_URL = "components/eng.png";

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-2 md:px-6 py-3">
        {/* Container - Flex Row for alignment (RTL: Right is Start, Left is End) */}
        <div className="flex flex-row items-center justify-between">
          
          {/* Right Logo (University) */}
          <div className="flex-shrink-0 w-20 md:w-32 flex justify-start">
             {/* NO FILTERS applied here - Original Colors */}
             <img 
               src={UNIVERSITY_LOGO_URL} 
               alt="شعار جامعة المستقبل" 
               referrerPolicy="no-referrer"
               className="h-20 md:h-28 w-auto object-contain drop-shadow-md hover:scale-105 transition-transform duration-300"
               onError={(e) => {
                 e.currentTarget.style.display = 'none'; // Hide if broken
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
            
            {/* Decorative Blue Bar */}
             <div className="w-32 md:w-64 h-2 md:h-3 bg-gradient-to-r from-[#0ea5e9] to-cyan-500 rounded-full mt-2 md:mt-3 shadow-sm"></div>
          </div>

          {/* Left Logo (College) */}
          <div className="flex-shrink-0 w-20 md:w-32 flex justify-end">
             {/* NO FILTERS applied here - Original Colors */}
             <img 
               src={COLLEGE_LOGO_URL}
               alt="شعار كلية التقنيات الهندسية" 
               referrerPolicy="no-referrer"
               className="h-20 md:h-28 w-auto object-contain drop-shadow-md hover:scale-105 transition-transform duration-300"
             />
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
