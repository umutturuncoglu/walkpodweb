import React from 'react';

const TermsAndServices: React.FC = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-3">
          <p className="text-sm font-semibold text-brand-green tracking-wide uppercase">Legal</p>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight">Walk Pod Terms of Service</h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium">Last Updated: February 8, 2026</p>
        </div>

        <div className="mt-10 space-y-8 text-slate-600 dark:text-slate-300 leading-relaxed">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">1. Agreement to Terms</h2>
            <p>
              By using Walk Pod ("the App"), you agree to these Terms of Service and our Privacy Policy.
              If you do not agree, please uninstall the App. You must be at least 13 years old to use Walk Pod.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">2. License</h2>
            <p>
              We grant you a personal, non-exclusive license to use Walk Pod on devices you own. This
              license does not permit reverse engineering, decompiling, or extracting our algorithms.
              All intellectual property remains the exclusive property of TEAMEVENT ILETISIM HIZMETLERI
              ORG TUR LTD.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">3. Fitness Metrics: Estimates Only (NOT A MEDICAL DEVICE)</h2>
            <p>
              Walk Pod provides estimated step counts, distance, and calories based on device sensors.
            </p>
            <div className="rounded-2xl border border-brand-green/20 bg-brand-green/10 px-6 py-5 text-slate-700 dark:text-slate-200 space-y-3">
              <p>
                <strong>NOT MEDICALLY ACCURATE:</strong> These metrics are for general fitness motivation
                only and are not intended for medical diagnosis, treatment, or health monitoring.
              </p>
              <p>
                <strong>CONSULT A DOCTOR:</strong> Consult a healthcare professional before beginning new
                fitness routines.
              </p>
              <p>
                <strong>USER RISK:</strong> You assume full responsibility for any physical activity based
                on Walk Pod data. TEAMEVENT ILETISIM HIZMETLERI ORG TUR LTD is not a medical provider.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">4. Map Features and Google Maps Integration</h2>
            <p>
              Walk Pod uses Google Maps Platform. By using map features, you agree to the Google Maps
              Platform Terms of Service and Google Privacy Policy.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">5. No Warranties</h2>
            <p>
              Walk Pod is provided "as is" without warranties. We do not guarantee uninterrupted service
              or 100% accuracy of fitness metrics.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">6. Liability Limitation</h2>
            <p>
              To the extent permitted by law, our total liability shall not exceed $50 USD. We are not
              liable for personal injury, lost data, or fitness progress resulting from app use or
              technical failure.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">7. Subscription: Ad-Free Experience</h2>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">7.1 Service</h3>
            <p>Walk Pod Premium removes advertisements. No additional features are unlocked.</p>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">7.2 Payments</h3>
            <p>Subscriptions are processed via Google Play Store. We do not store payment info.</p>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">7.3 Refunds</h3>
            <p>
              Refund requests must be directed to Google Play per their policies. We have no authority to
              issue refunds.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">8. Data Retention and Deletion</h2>
            <p><strong>In-App:</strong> Delete your account via Settings -&gt; Delete Account.</p>
            <p>
              <strong>Web:</strong> If uninstalled, request deletion at:
              {' '}
              <a className="text-brand-green hover:underline" href="https://www.walkpod.xyz/delete-account">
                https://www.walkpod.xyz/delete-account
              </a>
              . Data is removed within 30 days, with backups potentially held for 90 days for security purposes.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">9. Governing Law</h2>
            <p>
              These Terms are governed by the laws of Turkey. For users in the EU or UK, mandatory consumer
              rights under your local law remain unaffected.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">10. Contact</h2>
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 px-6 py-5">
              <p><strong>Legal:</strong> support@walkpod.xyz</p>
              <p><strong>Company:</strong> TEAMEVENT ILETISIM HIZMETLERI ORG TUR LTD</p>
              <p><strong>Address:</strong> ESENTEPE MAH ECZA SK POL CENTER NO:4 D1, ISTANBUL, Turkey</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsAndServices;
