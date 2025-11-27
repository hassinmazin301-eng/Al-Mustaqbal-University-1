
import React from 'react';

const HeadOfDeptVideo: React.FC = () => {
  // Updated Instagram Reel Link
  const INSTAGRAM_VIDEO_URL = "https://www.instagram.com/reel/DRK2BoZDdMl/?igsh=dnQ0ZjFsbmZudXNs"; 

  return (
    <div className="w-full max-w-4xl mx-auto px-4 mb-6">
      <a 
        href={INSTAGRAM_VIDEO_URL}
        target="_blank" 
        rel="noopener noreferrer"
        className="block bg-white border border-gray-100 rounded-[2rem] p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer relative overflow-hidden"
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
          
          <div className="text-center sm:text-right space-y-1">
            <h3 className="text-2xl font-black text-gray-800 tracking-tight group-hover:text-purple-700 transition-colors duration-300">
              كلمة رئيس القسم
            </h3>
            <p className="text-gray-500 font-medium text-base leading-relaxed">
              شاهد شرح مفصل عن مستقبل القسم ومميزاته
            </p>
          </div>
          
          {/* Modern Light Frame Button */}
          <div className="flex-shrink-0">
            <div className="pl-2 pr-6 py-2 rounded-full border border-gray-200 bg-gray-50/80 group-hover:bg-purple-50 group-hover:border-purple-200 transition-all duration-300 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-400 group-hover:text-purple-600 group-hover:border-purple-100 group-hover:-translate-x-1 transition-all duration-300">
                 <span className="text-xl pb-1" style={{ lineHeight: 0 }}>←</span>
              </div>
              <span className="text-gray-600 font-bold text-sm group-hover:text-purple-700 transition-colors">
                اضغط للمشاهدة
              </span>
            </div>
          </div>

        </div>
      </a>
    </div>
  );
};

export default HeadOfDeptVideo;
