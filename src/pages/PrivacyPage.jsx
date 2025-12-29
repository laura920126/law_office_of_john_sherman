import { useEffect } from 'react'

export default function PrivacyPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="pt-24 min-h-screen bg-[#FAFAFA]">
      {/* Header */}
      <section className="py-16 px-6 md:px-12 border-b border-black/5">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold text-zinc-900 tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-zinc-500 text-sm">Last Modified: July 30th, 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Intro */}
          <div className="prose prose-zinc max-w-none mb-12">
            <p className="text-zinc-600 leading-relaxed text-lg">
              This Privacy Policy ("Policy") describes how The Law Office of John P. Sherman ("we," "us," or "our") collects, uses, and shares data obtained through your use of our website and online services (collectively, the "Site"). By using the Site, you agree to the practices outlined in this Policy. Please check this Policy periodically for updates, which will be indicated by the "Last Modified" date above.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="bg-white border border-zinc-200 rounded-xl p-8 mb-12">
            <h2 className="text-lg font-semibold text-zinc-900 mb-6">Table of Contents</h2>
            <ol className="grid md:grid-cols-2 gap-2 text-sm">
              <li><a href="#collection" className="text-zinc-600 hover:text-[#B8976C] transition-colors">1. Collection of Data</a></li>
              <li><a href="#use" className="text-zinc-600 hover:text-[#B8976C] transition-colors">2. Use of Collected Data</a></li>
              <li><a href="#sharing" className="text-zinc-600 hover:text-[#B8976C] transition-colors">3. Sharing of Collected Data</a></li>
              <li><a href="#third-party" className="text-zinc-600 hover:text-[#B8976C] transition-colors">4. Third-Party Websites</a></li>
              <li><a href="#security" className="text-zinc-600 hover:text-[#B8976C] transition-colors">5. Data Security</a></li>
              <li><a href="#children" className="text-zinc-600 hover:text-[#B8976C] transition-colors">6. Children's Privacy</a></li>
              <li><a href="#preferences" className="text-zinc-600 hover:text-[#B8976C] transition-colors">7. Your Data Preferences</a></li>
              <li><a href="#contact" className="text-zinc-600 hover:text-[#B8976C] transition-colors">8. Contact Us</a></li>
            </ol>
          </div>

          {/* Sections */}
          <div className="space-y-12">
            {/* 1. Collection of Data */}
            <section id="collection">
              <h2 className="text-2xl font-semibold text-zinc-900 mb-4">1. Collection of Data</h2>
              <p className="text-zinc-600 leading-relaxed mb-6">
                We may collect both personal and non-personal information from users of our Site:
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-zinc-800 mb-3">Personal Information</h3>
                  <p className="text-zinc-600 mb-3">We may collect personal information when you voluntarily provide it to us, including:</p>
                  <ul className="list-disc list-inside text-zinc-600 space-y-2 ml-4">
                    <li><span className="font-medium">Contact Information:</span> Name, email address, phone number, and mailing address when you contact us for legal services or consultation.</li>
                    <li><span className="font-medium">Legal Matter Information:</span> Details about your potential legal case, including incident descriptions, dates, and relevant documentation you choose to share.</li>
                    <li><span className="font-medium">Communication Records:</span> Information from emails, contact forms, phone calls, and other communications with our office.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium text-zinc-800 mb-3">Non-Personal Information</h3>
                  <p className="text-zinc-600 mb-3">We may also collect non-personal information, such as:</p>
                  <ul className="list-disc list-inside text-zinc-600 space-y-2 ml-4">
                    <li><span className="font-medium">Usage Data:</span> Information about how you interact with our Site, including your IP address, browser type, device information, referring pages, and pages visited.</li>
                    <li><span className="font-medium">Cookies and Tracking Technologies:</span> We use cookies and similar technologies to track your usage of the Site and improve the user experience. You can adjust your browser settings to reject cookies, though some features of the Site may not function as intended.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 2. Use of Collected Data */}
            <section id="use">
              <h2 className="text-2xl font-semibold text-zinc-900 mb-4">2. Use of Collected Data</h2>
              <p className="text-zinc-600 leading-relaxed mb-6">
                We use the collected data for purposes such as:
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-zinc-800 mb-3">Personal Information</h3>
                  <ul className="list-disc list-inside text-zinc-600 space-y-2 ml-4">
                    <li>Responding to your inquiries about legal services.</li>
                    <li>Evaluating potential legal cases and providing initial consultations.</li>
                    <li>Communicating with you about your legal matter.</li>
                    <li>Scheduling appointments and managing client relationships.</li>
                    <li>Complying with legal and professional obligations.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium text-zinc-800 mb-3">Non-Personal Information</h3>
                  <ul className="list-disc list-inside text-zinc-600 space-y-2 ml-4">
                    <li>Enhancing the functionality and security of the Site.</li>
                    <li>Understanding user behavior to improve the user experience.</li>
                    <li>Analyzing website traffic and performance.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 3. Sharing of Collected Data */}
            <section id="sharing">
              <h2 className="text-2xl font-semibold text-zinc-900 mb-4">3. Sharing of Collected Data</h2>
              <p className="text-zinc-600 leading-relaxed mb-6">
                We maintain strict confidentiality regarding personal information and legal matters. We do not share personal information except:
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-zinc-800 mb-3">Personal Information</h3>
                  <ul className="list-disc list-inside text-zinc-600 space-y-2 ml-4">
                    <li><span className="font-medium">Attorney-Client Privilege:</span> Information shared with us regarding legal representation is protected by attorney-client privilege and professional confidentiality rules.</li>
                    <li><span className="font-medium">Legal Requirements:</span> When required by law, court order, or legal process.</li>
                    <li><span className="font-medium">Service Providers:</span> With trusted third-party service providers who assist us in providing legal services (such as court reporters, expert witnesses, or IT support), subject to confidentiality agreements.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium text-zinc-800 mb-3">Non-Personal Information</h3>
                  <p className="text-zinc-600 mb-3">We may share non-personal data with:</p>
                  <ul className="list-disc list-inside text-zinc-600 space-y-2 ml-4">
                    <li><span className="font-medium">Service Providers:</span> We may share data with third-party service providers who assist us with analytics or website functionality.</li>
                    <li><span className="font-medium">Legal Compliance:</span> As required by law or to protect our legal rights.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 4. Third-Party Websites */}
            <section id="third-party">
              <h2 className="text-2xl font-semibold text-zinc-900 mb-4">4. Third-Party Websites</h2>
              <p className="text-zinc-600 leading-relaxed">
                Our Site may contain links to third-party websites, including legal resources, court websites, or other professional services. These third-party sites have their own privacy policies and data collection practices, which we do not control. We encourage you to review their privacy policies before interacting with those sites.
              </p>
            </section>

            {/* 5. Data Security */}
            <section id="security">
              <h2 className="text-2xl font-semibold text-zinc-900 mb-4">5. Data Security</h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                We take reasonable steps to protect both personal and non-personal information from unauthorized access, use, or disclosure. Our security measures include:
              </p>
              <ul className="list-disc list-inside text-zinc-600 space-y-2 ml-4 mb-4">
                <li>Secure transmission protocols for sensitive communications.</li>
                <li>Access controls to limit who can view personal information.</li>
                <li>Regular security assessments and updates.</li>
              </ul>
              <p className="text-zinc-600 leading-relaxed">
                However, no data transmission over the Internet is completely secure, and we cannot guarantee the absolute security of any data transmitted to or from our Site.
              </p>
            </section>

            {/* 6. Children's Privacy */}
            <section id="children">
              <h2 className="text-2xl font-semibold text-zinc-900 mb-4">6. Children's Privacy</h2>
              <p className="text-zinc-600 leading-relaxed">
                We do not knowingly collect personal information from children under the age of 13. Our Site and legal services are intended for use by adults who are at least 18 years old. If you are under 18, you should have a parent or guardian contact us on your behalf.
              </p>
            </section>

            {/* 7. Your Data Preferences */}
            <section id="preferences">
              <h2 className="text-2xl font-semibold text-zinc-900 mb-4">7. Your Data Preferences</h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                You have certain rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-zinc-600 space-y-2 ml-4 mb-4">
                <li><span className="font-medium">Access:</span> You may request to know what personal information we have collected about you.</li>
                <li><span className="font-medium">Correction:</span> You may request that we correct inaccurate personal information.</li>
                <li><span className="font-medium">Deletion:</span> You may request that we delete your personal information, subject to our legal and professional obligations.</li>
                <li><span className="font-medium">Communication Preferences:</span> You may opt out of non-essential communications at any time.</li>
                <li><span className="font-medium">Cookies:</span> You can manage cookies and tracking technologies via your browser settings to limit how non-personal data is collected.</li>
              </ul>
              <p className="text-zinc-600 leading-relaxed">
                Please note that we may be required to retain certain information due to legal and professional obligations, including record retention requirements for law firms.
              </p>
            </section>

            {/* 8. Contact Us */}
            <section id="contact">
              <h2 className="text-2xl font-semibold text-zinc-900 mb-4">8. Contact Us</h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                If you have any questions regarding this Privacy Policy or wish to exercise your data rights, you may contact us at:
              </p>
              <div className="bg-white border border-zinc-200 rounded-xl p-6">
                <p className="font-medium text-zinc-900 mb-2">The Law Office of John P. Sherman</p>
                <p className="text-zinc-600">250 Catalonia Ave Suite 606</p>
                <p className="text-zinc-600">Coral Gables, FL 33134</p>
                <p className="text-zinc-600 mt-2">Email: <a href="mailto:john@jpshermanlaw.com" className="text-[#B8976C] hover:underline">john@jpshermanlaw.com</a></p>
              </div>
            </section>

            {/* Agreement */}
            <section className="bg-zinc-100 border border-zinc-200 rounded-xl p-8 mt-16">
              <p className="text-zinc-600 leading-relaxed">
                By using our Site, you agree to the terms of this Privacy Policy.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  )
}
