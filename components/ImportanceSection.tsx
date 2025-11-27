
import React from 'react';
import { IconActivity } from './Icons';

const ImportanceSection: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 mb-10">
      <div className="bg-slate-800 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
        
        {/* Background Accents */}
        <div className="absolute top-0 left-0 w-full h-full bg-slate-900 opacity-50"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-cyan-500 blur-[100px] opacity-20 rounded-full"></div>
        
        <div className="relative z-10 flex flex-col lg:flex-row gap-10 items-center">
          
          <div className="lg:w-1/3 flex flex-col items-center text-center lg:items-end lg:text-right">
             <div className="w-20 h-20 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm border border-cyan-500/30">
                <IconActivity className="w-10 h-10 text-cyan-400" />
             </div>
             <h3 className="text-2xl md:text-3xl font-black leading-tight text-white">
               لماذا هندسة تقنيات الأجهزة الطبية؟
               <span className="block text-cyan-400 mt-2 text-lg md:text-xl font-bold">أهمية التخصص في العراق</span>
             </h3>
          </div>

          <div className="lg:w-2/3 grid gap-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors backdrop-blur-sm">
              <h4 className="font-bold text-lg text-cyan-300 mb-2">سوق العمل المتنامي</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                يشهد العراق ثورة عمرانية في القطاع الصحي مع إنشاء مستشفيات ومراكز تخصصية حديثة، مما يجعل المهندس الطبي الركيزة الأساسية لتشغيل واستدامة هذه المؤسسات.
              </p>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors backdrop-blur-sm">
              <h4 className="font-bold text-lg text-cyan-300 mb-2">القطاع الخاص والشركات</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                تتنافس كبرى الشركات العالمية والمحلية في سوق الأجهزة الطبية العراقي، وهي تبحث باستمرار عن مهندسين أكفاء للعمل في مجالات المبيعات الهندسية، الصيانة، والتدريب.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors backdrop-blur-sm">
              <h4 className="font-bold text-lg text-cyan-300 mb-2">الأمان الوظيفي والتميز</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                التخصص يجمع بين علوم الهندسة والطب، مما يمنحك مكانة وظيفية مرموقة ودخلاً متميزاً نظراً لندرة وحيوية هذا الاختصاص في سوق العمل العراقي.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ImportanceSection;