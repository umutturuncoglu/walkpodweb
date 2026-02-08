import React from 'react';

const DeleteAccount: React.FC = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto space-y-10">
        <header className="space-y-3">
          <p className="text-sm font-semibold text-brand-green tracking-wide uppercase">Support</p>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight">Account Deletion Request</h1>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            At WalkPod, we value your privacy and give you full control over your data. If you wish
            to delete your WalkPod account and all associated personal and fitness data, you can do
            so through this page. Please note that this action is permanent and cannot be undone.
          </p>
        </header>

        <div className="space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed">
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-6 space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">1. Fast Deletion (In-App)</h2>
            <p>
              If you have the WalkPod app installed, please go to <strong>Settings → Account → Delete Account</strong>.
              This is the most secure method as it uses your active login to verify your identity.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-6 space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">2. Manual Request (Web/Email)</h2>
            <p>
              If you no longer have the app installed, you may request deletion via email. To protect
              your security and prevent unauthorized deletions, we follow a verification process:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Step 1: Email <strong>support@walkpod.xyz</strong> from the email address used for your WalkPod account.</li>
              <li>Step 2: Our team will send a verification email to that address.</li>
              <li>Step 3: You must reply to that email to confirm your intent.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-brand-green/20 bg-brand-green/10 p-6 space-y-3 text-slate-700 dark:text-slate-200">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">What Data Is Deleted?</h2>
            <p>
              Once confirmed, support will permanently wipe your
              profile, login credentials, and all fitness/step history from our servers. This process
              usually takes 3–5 business days.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeleteAccount;
