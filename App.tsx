import React from 'react';
import Header from './components/Header';
import DepartmentBanner from './components/DepartmentBanner';
import InfoSection from './components/InfoSection';
import Footer from './components/Footer';
import MotivationalText from './components/MotivationalText';
import ImportanceSection from './components/ImportanceSection';
import HeadOfDeptVideo from './components/HeadOfDeptVideo';
import DepartmentChat from './components/DepartmentChat';

const App: React.FC = () => {
  // BACKGROUND LOGO - NO FILTERS
  const BACKGROUND_LOGO = "components/eng.png";

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 relative overflow-x-hidden font-sans">
      
      {/* Fixed Background Logo Watermark - NO FILTERS */}
      <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <img 
          src={BACKGROUND_LOGO}
          referrerPolicy="no-referrer"
          alt="Watermark" 
          className="w-[90%] md:w-[45%] opacity-[0.05] object-contain"
        />
      </div>

      <Header />

      {/* Main Content */}
      <div className="relative z-10 flex-grow flex flex-col py-6 gap-8">
        
        <MotivationalText />
        
        <DepartmentBanner />
        
        <HeadOfDeptVideo />

        <ImportanceSection />
        
        <InfoSection />

        <DepartmentChat />

      </div>

      <Footer />
    </div>
  );
};

export default App;
