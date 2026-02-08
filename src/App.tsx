
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import MetricsSection from './components/MetricsSection';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import DeleteAccount from './components/DeleteAccount';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';
  const isPrivacyPolicy = pathname === '/privacy-policy.html' || pathname === '/privacy-policy';
  const isDeleteAccount = pathname === '/delete-account.html' || pathname === '/delete-account';

  return (
    <div className="min-h-screen">
      <Navbar onToggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <main>
        {isPrivacyPolicy ? (
          <PrivacyPolicy />
        ) : isDeleteAccount ? (
          <DeleteAccount />
        ) : (
          <>
            <Hero />
            <Features />
            <MetricsSection />
            <CallToAction />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
