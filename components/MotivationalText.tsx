
import React from 'react';

const MotivationalText: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 mb-8">
      <div className="bg-gradient-to-bl from-slate-800 to-slate-900 rounded-3xl p-8 md:p-10 text-white shadow-2xl relative overflow-hidden">
        
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-uomus-teal opacity-10 rounded-full blur-3xl -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500 opacity-10 rounded-full blur-3xl -ml-16 -mb-16"></div>

        <div className="relative z-10 text-center space-y-6">
          <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-white">
            هندسة تقنيات الأجهزة الطبية.. مستقبل الحياة
          </h3>
          
          <p className="text-lg md:text-xl leading-relaxed font-light text-gray-100 max-w-3xl mx-auto">
            في جامعة المستقبل، نؤمن بأن المهندس الطبي هو الجسر الذي يربط بين دقة التكنولوجيا وإنسانية الطب. 
            انضم إلينا لتكون جزءاً من نخبة متميزة تصنع الفرق، وتساهم في تطوير الرعاية الصحية بأحدث التقنيات العالمية. 
            طموحك يبدأ هنا.. ومستقبلك نصنعه معاً.
          </p>

          <div className="flex items-center justify-center space-x-2 space-x-reverse pt-4">
             <span className="h-2 w-2 rounded-full bg-teal-400 animate-pulse"></span>
             <span className="h-2 w-2 rounded-full bg-teal-400 animate-pulse delay-75"></span>
             <span className="h-2 w-2 rounded-full bg-teal-400 animate-pulse delay-150"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MotivationalText;
