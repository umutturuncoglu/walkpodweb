import React, { useEffect, useState } from 'react';

const COOKIE_CONSENT_KEY = 'walkpod_cookie_consent';

const CookieConsentBar: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const savedChoice = window.localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!savedChoice) {
      setVisible(true);
    }
  }, []);

  const handleChoice = (choice: 'accepted' | 'declined') => {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, choice);
    setVisible(false);
  };

  const handleAccept = () => {
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted'
      });
    }
    handleChoice('accepted');
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 py-4 md:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            We use cookies to improve your experience and analyze traffic.
            {' '}
            <a href="/privacy-policy.html" className="text-brand-green font-semibold hover:underline">
              Learn more
            </a>
            .
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleChoice('declined')}
              className="px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-2 rounded-lg bg-brand-green text-slate-950 text-sm font-semibold hover:brightness-95 transition-all"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentBar;
