
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-6 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 items-start">
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Walk Pod Logo" className="w-12 h-12 object-contain rounded-xl shadow-lg shadow-brand-green/20" />
              <span className="text-2xl font-black tracking-tight">Walk Pod</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed text-lg">
              The world's most accurate step and activity tracking application. Designed for those who value precision.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="w-12 h-12 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-400 hover:border-brand-green hover:text-brand-green hover:bg-brand-green/5 transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bold">Company</h4>
            <ul className="space-y-4 text-slate-500 dark:text-slate-400">
              <li><a href="/about-us.html" className="hover:text-brand-green transition-colors">About Us</a></li>
              <li><a href="/contact.html" className="hover:text-brand-green transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bold">Legal</h4>
            <ul className="space-y-4 text-slate-500 dark:text-slate-400">
              <li><a href="/privacy-policy.html" className="hover:text-brand-green transition-colors">Privacy Policy</a></li>
              <li><a href="/delete-account.html" className="hover:text-brand-green transition-colors">Delete Account</a></li>
              <li><a href="/terms-and-services.html" className="hover:text-brand-green transition-colors">Terms and Services</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-slate-200 dark:border-slate-800 text-center text-slate-400 dark:text-slate-600 text-sm font-medium">
          <p>© 2024 TEAMEVENT ILETISIM HIZMETLERI ORG TUR LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
