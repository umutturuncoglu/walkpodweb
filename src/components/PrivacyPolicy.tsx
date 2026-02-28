import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-3">
          <p className="text-sm font-semibold text-brand-green tracking-wide uppercase">Legal</p>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight">Walk Pod Privacy Policy</h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium">Effective Date: February 5, 2026</p>
          <p className="text-slate-500 dark:text-slate-400 font-medium">Last Updated: February 5, 2026</p>
        </div>

        <div className="mt-10 space-y-8 text-slate-600 dark:text-slate-300 leading-relaxed">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">1. General Information</h2>
            <p>
              Protecting your privacy is important to us. This Privacy Policy ("Policy") explains how
              <strong> TEAMEVENT ILETISIM HIZMETLERI ORG TUR LTD</strong> ("we", "us", or "our") collects,
              uses, protects, and shares your information when you use the Walk Pod mobile application
              (the "App") available on the Google Play Store.
            </p>
            <p>
              This Policy applies to all information collected within the App, as well as to email, text,
              and other electronic communications sent through or in connection with the App.
            </p>
            <p>
              By downloading, installing, or using the App, you agree to the terms of this Privacy Policy.
              If you do not agree with our policies and practices, please do not download, register, or use
              this App.
            </p>
            <div className="rounded-2xl border border-brand-green/20 bg-brand-green/10 px-6 py-5 text-slate-700 dark:text-slate-200">
              <p className="font-semibold">Quick Summary:</p>
              <p>
                Walk Pod is a step counting and fitness tracking app. We collect only the data necessary to
                provide our services. Your activity data is stored securely, and we do not sell your personal
                information to third parties.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">2. Information We Collect</h2>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">2.1 Information You Provide to Us</h3>
            <p>When you use Walk Pod, you may voluntarily provide us with the following information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Account Information:</strong> Email address and display name (when you sign in with Google or create an account)</li>
              <li><strong>Profile Information:</strong> Nickname, height, weight, and gender (used for stride length and calorie calculations)</li>
              <li><strong>Preferences:</strong> Daily step goal, daily water intake goal, unit preferences (Metric/Imperial), theme settings, and notification preferences</li>
              <li><strong>Profile Picture:</strong> If you choose to upload a profile picture, it is stored locally on your device</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white">2.2 Information Collected Automatically</h3>
            <p>When you use the App, we automatically collect:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Step Count Data:</strong> Daily step counts recorded using your device's motion sensors</li>
              <li><strong>Water Intake Logs:</strong> Records of your daily water consumption that you manually input</li>
              <li><strong>Activity Data:</strong> Calculated metrics such as distance walked, calories burned, and activity streaks</li>
              <li><strong>Location Data:</strong> Approximate or precise location data only when you use the Route Discovery feature (with your explicit permission)</li>
              <li><strong>Device Information:</strong> Device type, operating system version, and app version for troubleshooting and analytics purposes</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white">2.3 Activity and Fitness Data</h3>
            <p>
              Walk Pod collects activity-related data including step counts, physical activity patterns, and water intake.
              This data is primarily used to provide you with fitness tracking features and personalized insights. We may
              share aggregated or anonymized data with our partners and service providers to improve our services.
            </p>
            <p>
              We do not sell your personal health or fitness data to third-party advertisers or data brokers. Activity data
              is used exclusively to provide the fitness tracking features of the App.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">3. How We Use Your Information</h2>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">3.1 To Provide and Improve the App</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Track and display your daily steps, distance, and calories burned</li>
              <li>Monitor your water intake and fitness goals</li>
              <li>Calculate personalized metrics based on your height, weight, and gender</li>
              <li>Sync your data across devices when you sign in</li>
              <li>Provide the Route Discovery feature (requires location permission)</li>
            </ul>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">3.2 To Communicate with You</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Send notifications about your daily progress and goal achievements</li>
              <li>Provide app updates and important service announcements</li>
              <li>Respond to your support requests and inquiries</li>
            </ul>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">3.3 For Analytics and Improvements</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Analyze app usage patterns to improve features and user experience</li>
              <li>Identify and fix technical issues and bugs</li>
              <li>Monitor app performance and stability</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">4. Permissions We Request</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="text-slate-900 dark:text-white">
                    <th className="border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 px-4 py-3">Permission</th>
                    <th className="border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 px-4 py-3">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-200 dark:border-slate-800 px-4 py-3"><strong>Physical Activity Recognition</strong></td>
                    <td className="border border-slate-200 dark:border-slate-800 px-4 py-3">Required to count your steps using device motion sensors</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 dark:border-slate-800 px-4 py-3"><strong>Location (Optional)</strong></td>
                    <td className="border border-slate-200 dark:border-slate-800 px-4 py-3">Used only for the Route Discovery feature to find walking routes nearby. You can use the app without granting this permission.</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 dark:border-slate-800 px-4 py-3"><strong>Notifications</strong></td>
                    <td className="border border-slate-200 dark:border-slate-800 px-4 py-3">To send you progress updates, goal reminders, and achievement notifications</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 dark:border-slate-800 px-4 py-3"><strong>Internet Access</strong></td>
                    <td className="border border-slate-200 dark:border-slate-800 px-4 py-3">To sync your data to the cloud and enable cross-device access</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 dark:border-slate-800 px-4 py-3"><strong>Run at Startup</strong></td>
                    <td className="border border-slate-200 dark:border-slate-800 px-4 py-3">To ensure step counting continues after device restart</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 dark:border-slate-800 px-4 py-3"><strong>Foreground Service</strong></td>
                    <td className="border border-slate-200 dark:border-slate-800 px-4 py-3">To accurately count steps in the background while minimizing battery usage</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">5. Data Storage and Security</h2>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">5.1 Where We Store Your Data</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Local Storage:</strong> Your step data, preferences, and profile picture are stored locally on your device</li>
              <li><strong>Cloud Storage:</strong> If you sign in with Google, your profile and fitness data are synced to Firebase (Google's cloud platform) for backup and cross-device access</li>
            </ul>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">5.2 How We Protect Your Data</h3>
            <p>We implement industry-standard security measures to protect your data, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Encrypted data transmission using HTTPS/TLS</li>
              <li>Secure authentication through Firebase Authentication</li>
              <li>Access controls and security rules on our cloud database</li>
            </ul>
            <p>
              However, no method of electronic storage or transmission is 100% secure. While we strive to protect your
              personal information, we cannot guarantee absolute security.
            </p>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">5.3 Data Retention</h3>
            <p>
              We retain your data for as long as necessary to provide our services and fulfill the purposes described in
              this Policy. Data retention periods may vary depending on the type of data and applicable legal requirements.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">6. Third-Party Services</h2>
            <p>Walk Pod uses the following third-party services:</p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="text-slate-900 dark:text-white">
                    <th className="border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 px-4 py-3">Service</th>
                    <th className="border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 px-4 py-3">Purpose</th>
                    <th className="border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 px-4 py-3">Privacy Policy</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-200 dark:border-slate-800 px-4 py-3">Firebase Authentication</td>
                    <td className="border border-slate-200 dark:border-slate-800 px-4 py-3">User authentication and Google Sign-In</td>
                    <td className="border border-slate-200 dark:border-slate-800 px-4 py-3"><a className="text-brand-green hover:underline" href="https://policies.google.com/privacy">Google Privacy Policy</a></td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 dark:border-slate-800 px-4 py-3">Firebase Firestore</td>
                    <td className="border border-slate-200 dark:border-slate-800 px-4 py-3">Cloud data storage and synchronization</td>
                    <td className="border border-slate-200 dark:border-slate-800 px-4 py-3"><a className="text-brand-green hover:underline" href="https://policies.google.com/privacy">Google Privacy Policy</a></td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 dark:border-slate-800 px-4 py-3">Firebase Analytics</td>
                    <td className="border border-slate-200 dark:border-slate-800 px-4 py-3">App usage analytics</td>
                    <td className="border border-slate-200 dark:border-slate-800 px-4 py-3"><a className="text-brand-green hover:underline" href="https://policies.google.com/privacy">Google Privacy Policy</a></td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 dark:border-slate-800 px-4 py-3">Firebase Crashlytics</td>
                    <td className="border border-slate-200 dark:border-slate-800 px-4 py-3">Crash reporting and stability monitoring</td>
                    <td className="border border-slate-200 dark:border-slate-800 px-4 py-3"><a className="text-brand-green hover:underline" href="https://policies.google.com/privacy">Google Privacy Policy</a></td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 dark:border-slate-800 px-4 py-3">Firebase Performance</td>
                    <td className="border border-slate-200 dark:border-slate-800 px-4 py-3">App performance monitoring</td>
                    <td className="border border-slate-200 dark:border-slate-800 px-4 py-3"><a className="text-brand-green hover:underline" href="https://policies.google.com/privacy">Google Privacy Policy</a></td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 dark:border-slate-800 px-4 py-3">Google Maps Platform</td>
                    <td className="border border-slate-200 dark:border-slate-800 px-4 py-3">Route Discovery feature</td>
                    <td className="border border-slate-200 dark:border-slate-800 px-4 py-3"><a className="text-brand-green hover:underline" href="https://policies.google.com/privacy">Google Privacy Policy</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              These third-party services may collect information about your device and app usage in accordance with their
              own privacy policies. We encourage you to review their privacy policies.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">7. Information Sharing</h2>
            <p>We may share your information in the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Service Providers:</strong> With third-party service providers who assist us in operating the App and improving our services</li>
              <li><strong>Business Partners:</strong> With partners for analytics, advertising, and service improvement purposes</li>
              <li><strong>Legal Requirements:</strong> When required by law, court order, or government request</li>
              <li><strong>Safety:</strong> To protect the rights, property, or safety of our company, users, or others</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">8. Your Rights and Choices</h2>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">8.1 Access and Correction</h3>
            <p>
              You can view and update your personal information at any time within the App's User Profile section. If you
              need assistance, contact us at the email provided below.
            </p>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">8.2 Data Deletion</h3>
            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-6 space-y-3">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">1. Fast Deletion (In-App)</h4>
                <p>
                  If you have the Walk Pod app installed, please go to <strong>Settings -&gt; Account -&gt; Delete Account</strong>.
                  This is the most secure method as it uses your active login to verify your identity.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-6 space-y-3">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">2. Manual Request (Web/Email)</h4>
                <p>
                  If you no longer have the app installed, you may request deletion via email. To protect your security
                  and prevent unauthorized deletions, we follow a verification process:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Step 1: Email <strong>support@walkpod.xyz</strong> from the email address used for your Walk Pod account.</li>
                  <li>Step 2: Our team will send a verification email to that address.</li>
                  <li>Step 3: You must reply to that email to confirm your intent.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-brand-green/20 bg-brand-green/10 p-6 space-y-3 text-slate-700 dark:text-slate-200">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">What Data Is Deleted?</h4>
                <p>
                  Once confirmed, support will permanently wipe your profile, login credentials, and all fitness/step
                  history from our servers. This process usually takes 3-5 business days.
                </p>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">8.3 Notification Preferences</h3>
            <p>You can enable or disable notifications in the App settings or through your device's system settings.</p>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">8.4 Location Permissions</h3>
            <p>
              You can revoke location permissions at any time through your device settings. The Route Discovery feature
              will be unavailable without location permission, but all other app features will continue to work.
            </p>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">8.5 Anonymous Use</h3>
            <p>
              You can use Walk Pod without signing in. In anonymous mode, your data is stored only on your device and will
              be lost if you uninstall the App or clear its data.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">9. Your Privacy Rights by Region</h2>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">9.1 European Union (GDPR)</h3>
            <p>
              If you are located in the European Economic Area (EEA), you have the following rights under the General Data
              Protection Regulation (GDPR):
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Right to Access:</strong> Request a copy of your personal data</li>
              <li><strong>Right to Rectification:</strong> Correct inaccurate or incomplete data</li>
              <li><strong>Right to Erasure:</strong> Request deletion of your personal data</li>
              <li><strong>Right to Restriction:</strong> Request limited processing of your data</li>
              <li><strong>Right to Data Portability:</strong> Receive your data in a portable format</li>
              <li><strong>Right to Object:</strong> Object to processing of your personal data</li>
              <li><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time</li>
            </ul>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">9.2 California (CCPA)</h3>
            <p>If you are a California resident, you have the following rights under the California Consumer Privacy Act (CCPA):</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Right to know what personal information is collected</li>
              <li>Right to know if personal information is sold or disclosed and to whom</li>
              <li>Right to opt-out of the sale of personal information (Note: We do not sell personal information)</li>
              <li>Right to request deletion of personal information</li>
              <li>Right to non-discrimination for exercising your rights</li>
            </ul>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">9.3 Turkey (KVKK)</h3>
            <p>
              If you are located in Turkey, you have rights under the Personal Data Protection Law (KVKK/6698), including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Right to learn whether your personal data is processed</li>
              <li>Right to request information about processing</li>
              <li>Right to learn the purpose and use of processing</li>
              <li>Right to request correction of incomplete or incorrect data</li>
              <li>Right to request deletion or destruction of data</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">10. Children's Privacy</h2>
            <p>
              Walk Pod is intended for users aged <strong>14 years and older</strong>. We do not knowingly collect personal
              information from children under 14. If we discover that a child under 14 has provided us with personal
              information, we will promptly delete it from our servers.
            </p>
            <p>
              If you are a parent or guardian and believe your child has provided us with personal information, please
              contact us immediately at the email address below.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">11. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or for legal,
              regulatory, or operational reasons. We will notify you of any material changes by:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Posting the updated Policy within the App</li>
              <li>Updating the "Last Updated" date at the top of this Policy</li>
              <li>Sending a notification through the App (for significant changes)</li>
            </ul>
            <p>
              Your continued use of the App after any changes to this Policy constitutes your acceptance of the updated
              Policy.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">12. Contact Us</h2>
            <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 px-6 py-5">
              <p><strong>Company:</strong> TEAMEVENT ILETISIM HIZMETLERI ORG TUR LTD</p>
              <p><strong>Email:</strong> user@walkpod.xyz</p>
              <p><strong>Website:</strong> <a className="text-brand-green hover:underline" href="https://www.walkpod.xyz">www.walkpod.xyz</a></p>
              <p><strong>Address:</strong> ESENTEPE MAH ECZA SK POL CENTER NO:4 D1, ISTANBUL, Turkey 34</p>
            </div>
          </div>

          <div className="pt-4 text-sm text-slate-400 dark:text-slate-500">
            <p>(c) 2026 TEAMEVENT ILETISIM HIZMETLERI ORG TUR LTD. All rights reserved.</p>
            <p className="font-semibold text-slate-500 dark:text-slate-400">Walk Pod - Your Daily Step Companion</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
