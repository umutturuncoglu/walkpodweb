
import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import logo from '../assets/logo.png';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Background Decorative Blobs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-green/20 rounded-full blur-[120px]"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-pink/20 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative z-10 space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/10 text-brand-green font-bold text-xs uppercase tracking-widest border border-brand-green/20">
            <Zap size={14} /> New Standard in Tracking
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
            Track smarter, not harder—<br />
            <span className="gradient-text">precision steps</span>,<br />
            real results.
          </h1>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Stop guessing your progress. WalkPod uses advanced algorithms to filter out ghost steps and give you the most accurate calorie and distance data available.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button className="w-full sm:w-auto gradient-bg text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-xl shadow-brand-green/20">
              Get Started for Free <ArrowRight size={20} />
            </button>
            <button className="w-full sm:w-auto bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
              View Demo
            </button>
          </div>
        </div>

        <div className="relative flex justify-center items-center">
          {/* Main Phone Mockup */}
          <div className="relative z-10 w-[280px] sm:w-[350px] aspect-[9/19] bg-slate-900 dark:bg-slate-950 rounded-[3rem] p-3 border-8 border-slate-800 dark:border-slate-900 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] animate-float">
            <div className="w-full h-full bg-[#F8FAFC] rounded-[2.2rem] overflow-hidden relative">
              {/* App Content Placeholder */}
              <div className="absolute inset-0 bg-white p-6 flex flex-col gap-4">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <img src={logo} alt="Logo" className="w-6 h-6 object-contain" />
                    <div className="font-bold text-slate-900">WalkPod</div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">👤</div>
                </div>
                <div className="h-40 w-full rounded-2xl bg-slate-50 border border-slate-100 p-4">
                  <div className="text-xs font-bold text-slate-400 uppercase mb-2">Daily Progress</div>
                  <div className="w-32 h-32 mx-auto rounded-full border-[10px] border-brand-green border-t-transparent flex items-center justify-center">
                    <div className="text-2xl font-black text-slate-800">8,294</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="h-24 rounded-2xl bg-slate-50 border border-slate-100 p-3">
                    <div className="text-[10px] font-bold text-slate-400 uppercase">Kcal</div>
                    <div className="text-xl font-bold text-slate-800">420</div>
                  </div>
                  <div className="h-24 rounded-2xl bg-slate-50 border border-slate-100 p-3">
                    <div className="text-[10px] font-bold text-slate-400 uppercase">Km</div>
                    <div className="text-xl font-bold text-slate-800">6.2</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 dark:bg-slate-900 rounded-b-2xl"></div>
          </div>

          {/* Ghost Mockup behind */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/3 -translate-y-1/2 w-[280px] sm:w-[350px] aspect-[9/19] bg-brand-green/20 rounded-[3rem] blur-xl -rotate-6"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
