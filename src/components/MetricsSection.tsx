
import React from 'react';
import { CheckCircle2, TrendingUp, Activity, Compass, Droplet } from 'lucide-react';

const MetricCard: React.FC<{ icon: React.ReactNode, value: string, label: string, colorClass: string, offset?: boolean }> = ({ icon, value, label, colorClass, offset }) => (
  <div className={`bg-white dark:bg-slate-800 p-8 rounded-4xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700 ${offset ? 'lg:translate-y-8' : ''}`}>
    <div className={`${colorClass} mb-4`}>
      {icon}
    </div>
    <div className="text-3xl font-black mb-1">{value}</div>
    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{label}</div>
  </div>
);

const MetricsSection: React.FC = () => {
  return (
    <section className="py-24 px-6 overflow-hidden" id="accuracy">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
            {/* Background element for decoration */}
            <div className="absolute inset-0 bg-brand-green/5 rounded-full blur-[100px] -z-10"></div>
            
            <div className="grid grid-cols-2 gap-6">
              <MetricCard 
                icon={<TrendingUp size={28} />} 
                value="829" 
                label="Current Steps" 
                colorClass="text-brand-green" 
              />
              <MetricCard 
                icon={<Activity size={28} />} 
                value="56 Kcal" 
                label="Burned Today" 
                colorClass="text-brand-pink"
                offset={true}
              />
              <MetricCard 
                icon={<Compass size={28} />} 
                value="1 Km" 
                label="Distance covered" 
                colorClass="text-brand-green" 
              />
              <MetricCard 
                icon={<Droplet size={28} />} 
                value="2000 ml" 
                label="Hydration Goal" 
                colorClass="text-brand-pink"
                offset={true}
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Your journey, measured right—<br />
              <span className="text-brand-green">true Kcal, Km, and time.</span>
            </h2>
            
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
              Why settle for "estimated" when you can have "exact"? WalkPod synchronizes multiple sensors to provide a holistic view of your physical activity.
            </p>

            <ul className="space-y-6">
              {[
                "Real-time dashboard updates",
                "Historical data comparison",
                "Custom flag milestones & streaks"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 group">
                  <div className="w-8 h-8 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green group-hover:scale-110 transition-transform">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="text-lg font-bold">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
