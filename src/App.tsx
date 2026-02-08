
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import MetricsSection from './components/MetricsSection';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import DeleteAccount from './components/DeleteAccount';
import TermsAndServices from './components/TermsAndServices';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import CookieConsentBar from './components/CookieConsentBar';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

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
  const isTermsAndServices = pathname === '/terms-and-services.html' || pathname === '/terms-and-services';
  const isAboutUs = pathname === '/about-us.html' || pathname === '/about-us';
  const isContact = pathname === '/contact.html' || pathname === '/contact';

  return (
    <div className="min-h-screen">
      <Navbar onToggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <main>
        {isPrivacyPolicy ? (
          <PrivacyPolicy />
        ) : isContact ? (
          <Contact />
        ) : isAboutUs ? (
          <AboutUs />
        ) : isDeleteAccount ? (
          <DeleteAccount />
        ) : isTermsAndServices ? (
          <TermsAndServices />
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
      <CookieConsentBar />
    </div>
  );
};

export default App;
