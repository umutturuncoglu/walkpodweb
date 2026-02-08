
import React from 'react';

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

        </div>
      </div>
    </section>
  );
};

export default CallToAction;
