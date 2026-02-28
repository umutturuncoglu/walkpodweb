import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-3">
          <p className="text-sm font-semibold text-brand-green tracking-wide uppercase">Company</p>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight">About Us</h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium">TEAMEVENT ILETISIM HIZMETLERI ORG TUR LTD</p>
        </div>

        <div className="mt-10 space-y-8 text-slate-600 dark:text-slate-300 leading-relaxed">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Company Name</h2>
            <p>TEAMEVENT ILETISIM HIZMETLERI ORG TUR LTD</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Industry</h2>
            <p>Sports Marketing and Event Management</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Mission Statement</h2>
            <p>
              We connect brands, athletes, and audiences through innovative sports marketing strategies and memorable
              event experiences. Our goal is to inspire active lifestyles and build trust through accuracy, creativity,
              and engagement.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Core Services</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Strategic sports marketing campaigns</li>
              <li>Event organization and management</li>
              <li>Sponsorship activation and brand positioning</li>
              <li>Digital engagement solutions</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Flagship Product - Walk Pod</h2>
            <p>
              Walk Pod is a health and fitness app designed to motivate users to walk more, track their progress with
              precision, and stay connected to a community of active individuals. It blends accuracy, trust, and
              user-friendly design to encourage healthier habits while offering brands a new channel for meaningful
              engagement. Walk Pod is the intellectual property of our company, developed and owned exclusively by the company.

            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Unique Value Proposition</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Expertise in sports marketing combined with digital innovation</li>
              <li>Proven ability to launch and scale fitness-focused products</li>
              <li>Commitment to transparency, reproducibility, and measurable results</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Vision</h2>
            <p>
              To become a leading force in sports marketing and digital health, empowering individuals and brands to
              move forward together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
