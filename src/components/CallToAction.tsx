
import React from 'react';
import { Apple, Play } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-24 px-6" id="download">
      <div className="max-w-6xl mx-auto gradient-bg rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-brand-green/20">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

        <div className="relative z-10 max-w-3xl mx-auto space-y-10">
          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            No more guesswork—WalkPod delivers exact activity tracking.
          </h2>
          
          <p className="text-white/80 text-xl font-medium leading-relaxed">
            Join over 500,000 users who have traded their old pedometers for the precision of WalkPod. Start your journey to a healthier you today.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-4">
            <button className="w-full sm:w-auto bg-white text-slate-900 px-10 py-5 rounded-2xl font-bold text-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 shadow-2xl">
              <Apple size={28} /> Download App
            </button>
            <button className="w-full sm:w-auto bg-slate-900/20 backdrop-blur-md text-white border border-white/30 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-slate-900/30 transition-all flex items-center justify-center gap-3">
              <Play size={24} /> Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
