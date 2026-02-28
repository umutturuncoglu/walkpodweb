
import React from 'react';
import { Footprints, Flame, Navigation } from 'lucide-react';

const featureList = [
  {
    icon: <Footprints className="text-brand-green" size={32} />,
    title: "True Step Filter",
    description: "Our proprietary algorithm distinguishes between walking and vehicle vibrations with 99.9% accuracy.",
    bgColor: "bg-brand-green/10"
  },
  {
    icon: <Flame className="text-brand-pink" size={32} />,
    title: "Precision Kcal",
    description: "Personalized metabolic tracking that calculates burn rate based on your specific pace and elevation gain.",
    bgColor: "bg-brand-pink/10"
  },
  {
    icon: <Navigation className="text-brand-green" size={32} />,
    title: "Smart Routes",
    description: "Discover new paths nearby with community-verified routes that match your daily goals.",
    bgColor: "bg-brand-green/10"
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white dark:bg-slate-900/30" id="features">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Walk Pod: <span className="text-brand-green">Accuracy</span> you can trust,<br className="hidden md:block" /> progress you can see.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Every step counts, we just make sure we count the right ones. Our engine processes sensor data in real-time to give you certainty.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featureList.map((feature, idx) => (
            <div key={idx} className="group bg-slate-50 dark:bg-slate-800 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-700 hover:shadow-2xl hover:shadow-slate-200 dark:hover:shadow-black transition-all duration-500 hover:-translate-y-2">
              <div className={`w-16 h-16 ${feature.bgColor} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-extrabold mb-4">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
