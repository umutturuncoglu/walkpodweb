import React from 'react';
import { Zap } from 'lucide-react';
import appleStore from '../assets/apple_store.png';
import googlePlay from '../assets/google_play.png';
import heroScreenshot from '../assets/hero1.jpg';

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
            Track smarter, not harder
            <br />
            <span className="gradient-text">precision steps</span>,
            <br />
            real results.
          </h1>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Stop guessing your progress. Walk Pod uses advanced algorithms to filter out ghost
            steps and give you the most accurate calorie and distance data available.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a
              href="#"
              aria-label="Download on the App Store"
              className="inline-flex items-center justify-center rounded-xl bg-white p-2 border border-slate-200 shadow-sm hover:opacity-90 transition-opacity"
            >
              <img src={appleStore} alt="App Store" className="h-10 w-auto" />
            </a>
            <a
              href="#"
              aria-label="Get it on Google Play"
              className="inline-flex items-center justify-center rounded-xl bg-white p-2 border border-slate-200 shadow-sm hover:opacity-90 transition-opacity"
            >
              <img src={googlePlay} alt="Google Play" className="h-10 w-auto" />
            </a>
          </div>
        </div>

        <div className="relative flex justify-center items-center">
          {/* Main Phone Mockup */}
          <div className="relative z-10 w-[280px] sm:w-[350px] aspect-[9/19] bg-slate-900 dark:bg-slate-950 rounded-[3rem] p-3 border-8 border-slate-800 dark:border-slate-900 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] animate-float">
            <div className="relative w-full h-full rounded-[2.2rem] overflow-hidden bg-[#F8FAFC]">
              <img
                src={heroScreenshot}
                alt="Walk Pod app screenshot"
                className="absolute inset-0 h-full w-full object-cover"
              />
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
