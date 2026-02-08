import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-3">
          <p className="text-sm font-semibold text-brand-green tracking-wide uppercase">Support</p>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight">Contact</h1>
        </div>

        <div className="mt-10 space-y-8 text-slate-600 dark:text-slate-300 leading-relaxed">
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 px-6 py-6">
            <p>
              Need a hand with WalkPod? Whether you&apos;ve got a question, run into a technical hiccup, or just want to
              share feedback, our support team is here to help. Drop us a message anytime at
              {' '}
              <a className="text-brand-green hover:underline font-semibold" href="mailto:support@walkpod.xyz">
                support@walkpod.xyz
              </a>
              {' '}
              and we&apos;ll get back to you as quickly as possible to make sure your WalkPod experience stays smooth and
              enjoyable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
