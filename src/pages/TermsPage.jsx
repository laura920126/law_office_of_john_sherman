import { useEffect } from 'react'

export default function TermsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="pt-24 min-h-screen bg-[#FAFAFA]">
      {/* Header */}
      <section className="py-16 px-6 md:px-12 border-b border-black/5">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold text-zinc-900 tracking-tight mb-4">
            Terms and Conditions
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
              These Terms and Conditions ("Terms") govern your use of The Law Office of John P. Sherman website ("Site") and the services provided by The Law Office of John P. Sherman ("we," "us," or "our"). By accessing or using our Site, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Site.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="bg-white border border-zinc-200 rounded-xl p-8 mb-12">
            <h2 className="text-lg font-semibold text-zinc-900 mb-6">Table of Contents</h2>
            <ol className="grid md:grid-cols-2 gap-2 text-sm">
              <li><a href="#acceptance" className="text-zinc-600 hover:text-[#B8976C] transition-colors">1. Acceptance of Terms</a></li>
              <li><a href="#description" className="text-zinc-600 hover:text-[#B8976C] transition-colors">2. Description of Services</a></li>
              <li><a href="#attorney-client" className="text-zinc-600 hover:text-[#B8976C] transition-colors">3. Attorney-Client Relationship</a></li>
              <li><a href="#use" className="text-zinc-600 hover:text-[#B8976C] transition-colors">4. Use of the Website</a></li>
              <li><a href="#responsibilities" className="text-zinc-600 hover:text-[#B8976C] transition-colors">5. User Responsibilities</a></li>
              <li><a href="#prohibited" className="text-zinc-600 hover:text-[#B8976C] transition-colors">6. Prohibited Uses</a></li>
              <li><a href="#intellectual" className="text-zinc-600 hover:text-[#B8976C] transition-colors">7. Intellectual Property Rights</a></li>
              <li><a href="#disclaimers" className="text-zinc-600 hover:text-[#B8976C] transition-colors">8. Disclaimers and Limitations</a></li>
              <li><a href="#indemnification" className="text-zinc-600 hover:text-[#B8976C] transition-colors">9. Indemnification</a></li>
              <li><a href="#privacy" className="text-zinc-600 hover:text-[#B8976C] transition-colors">10. Privacy Policy</a></li>
              <li><a href="#modifications" className="text-zinc-600 hover:text-[#B8976C] transition-colors">11. Modifications to Terms</a></li>
              <li><a href="#termination" className="text-zinc-600 hover:text-[#B8976C] transition-colors">12. Termination</a></li>
              <li><a href="#governing" className="text-zinc-600 hover:text-[#B8976C] transition-colors">13. Governing Law</a></li>
              <li><a href="#contact" className="text-zinc-600 hover:text-[#B8976C] transition-colors">14. Contact Information</a></li>
            </ol>
          </div>

          {/* Sections */}
          <div className="space-y-12">
            {/* 1. Acceptance of Terms */}
            <section id="acceptance">
              <h2 className="text-2xl font-semibold text-zinc-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-zinc-600 leading-relaxed">
                By accessing and using this Site, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            {/* 2. Description of Services */}
            <section id="description">
              <h2 className="text-2xl font-semibold text-zinc-900 mb-4">2. Description of Services</h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                The Law Office of John P. Sherman provides legal services and maintains this website to:
              </p>
              <ul className="list-disc list-inside text-zinc-600 space-y-2 ml-4">
                <li>Provide information about our legal services</li>
                <li>Allow potential clients to contact us for consultations</li>
                <li>Share general legal information and resources</li>
                <li>Communicate with existing clients about their legal matters</li>
              </ul>
              <p className="text-zinc-600 leading-relaxed mt-4">
                The information on this Site is for general informational purposes only and does not constitute legal advice.
              </p>
            </section>

            {/* 3. Attorney-Client Relationship */}
            <section id="attorney-client">
              <h2 className="text-2xl font-semibold text-zinc-900 mb-4">3. Attorney-Client Relationship</h2>
              <div className="space-y-4 text-zinc-600 leading-relaxed">
                <div>
                  <h3 className="font-medium text-zinc-800 mb-2">No Attorney-Client Relationship Created by Website Use</h3>
                  <p>Your use of this Site, by itself, does not create an attorney-client relationship between you and The Law Office of John P. Sherman. An attorney-client relationship is established only through a signed retainer agreement.</p>
                </div>
                <div>
                  <h3 className="font-medium text-zinc-800 mb-2">Confidentiality Limitations</h3>
                  <p>Information you submit through this Site (including contact forms) may not be protected by attorney-client privilege until a formal attorney-client relationship is established. Do not send confidential or sensitive information through unsecured means.</p>
                </div>
                <div>
                  <h3 className="font-medium text-zinc-800 mb-2">Consultation Process</h3>
                  <p>Initial consultations may be provided to evaluate potential legal matters. Such consultations do not guarantee representation and do not create an ongoing attorney-client relationship unless formalized through a written agreement.</p>
                </div>
              </div>
            </section>

            {/* 4. Use of the Website */}
            <section id="use">
              <h2 className="text-2xl font-semibold text-zinc-900 mb-4">4. Use of the Website</h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                You may use our Site for lawful purposes only. You agree to use the Site in a manner consistent with any and all applicable laws and regulations.
              </p>
              <h3 className="font-medium text-zinc-800 mb-2">Permitted Uses:</h3>
              <ul className="list-disc list-inside text-zinc-600 space-y-2 ml-4">
                <li>Browsing information about our legal services</li>
                <li>Contacting us for potential legal representation</li>
                <li>Accessing general legal information and resources</li>
                <li>Communicating with us if you are an existing client</li>
              </ul>
            </section>

            {/* 5. User Responsibilities */}
            <section id="responsibilities">
              <h2 className="text-2xl font-semibold text-zinc-900 mb-4">5. User Responsibilities</h2>
              <p className="text-zinc-600 leading-relaxed mb-4">When using our Site, you agree to:</p>
              <ul className="list-disc list-inside text-zinc-600 space-y-2 ml-4">
                <li>Provide accurate and complete information when requested</li>
                <li>Maintain the confidentiality of any login credentials</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Respect the intellectual property rights of others</li>
              </ul>
            </section>

            {/* 6. Prohibited Uses */}
            <section id="prohibited">
              <h2 className="text-2xl font-semibold text-zinc-900 mb-4">6. Prohibited Uses</h2>
              <p className="text-zinc-600 leading-relaxed mb-4">You may not use our Site:</p>
              <ul className="list-disc list-inside text-zinc-600 space-y-2 ml-4">
                <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                <li>To transmit, or procure the sending of, any advertising or promotional material, including "spam"</li>
                <li>To impersonate or attempt to impersonate the law firm, a law firm employee, another user, or any other person or entity</li>
                <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Site</li>
                <li>To upload, post, or transmit any content that contains viruses or malicious code</li>
                <li>To attempt to gain unauthorized access to our systems or networks</li>
              </ul>
            </section>

            {/* 7. Intellectual Property Rights */}
            <section id="intellectual">
              <h2 className="text-2xl font-semibold text-zinc-900 mb-4">7. Intellectual Property Rights</h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                The content on this Site, including but not limited to text, graphics, logos, images, and software, is the property of The Law Office of John P. Sherman or its licensors and is protected by copyright, trademark, and other intellectual property laws.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-zinc-800 mb-2">Limited License</h3>
                  <p className="text-zinc-600">We grant you a limited, non-exclusive, non-transferable license to access and use the Site for personal, non-commercial purposes, subject to these Terms.</p>
                </div>
                <div>
                  <h3 className="font-medium text-zinc-800 mb-2">Restrictions</h3>
                  <p className="text-zinc-600 mb-2">You may not:</p>
                  <ul className="list-disc list-inside text-zinc-600 space-y-2 ml-4">
                    <li>Reproduce, distribute, modify, or create derivative works of our content</li>
                    <li>Use our content for commercial purposes without written permission</li>
                    <li>Remove or alter any copyright, trademark, or other proprietary notices</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 8. Disclaimers and Limitations */}
            <section id="disclaimers">
              <h2 className="text-2xl font-semibold text-zinc-900 mb-4">8. Disclaimers and Limitations</h2>
              <div className="space-y-4 text-zinc-600 leading-relaxed">
                <div>
                  <h3 className="font-medium text-zinc-800 mb-2">No Legal Advice</h3>
                  <p>The information on this Site is for general informational purposes only and does not constitute legal advice. Laws vary by jurisdiction, and legal advice must be tailored to specific circumstances.</p>
                </div>
                <div>
                  <h3 className="font-medium text-zinc-800 mb-2">No Guarantee of Results</h3>
                  <p>We make no guarantees about the outcome of any legal matter. Past results do not guarantee future outcomes.</p>
                </div>
                <div>
                  <h3 className="font-medium text-zinc-800 mb-2">Website Availability</h3>
                  <p>We strive to maintain the Site's availability but do not guarantee uninterrupted access. We reserve the right to modify, suspend, or discontinue the Site at any time.</p>
                </div>
                <div>
                  <h3 className="font-medium text-zinc-800 mb-2">Third-Party Links</h3>
                  <p>Our Site may contain links to third-party websites. We are not responsible for the content, privacy policies, or practices of these external sites.</p>
                </div>
                <div>
                  <h3 className="font-medium text-zinc-800 mb-2">Limitation of Liability</h3>
                  <p>To the fullest extent permitted by law, The Law Office of John P. Sherman shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Site.</p>
                </div>
              </div>
            </section>

            {/* 9. Indemnification */}
            <section id="indemnification">
              <h2 className="text-2xl font-semibold text-zinc-900 mb-4">9. Indemnification</h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                You agree to indemnify, defend, and hold harmless The Law Office of John P. Sherman, its officers, directors, employees, and agents from and against any and all claims, damages, obligations, losses, liabilities, costs, and expenses (including attorney's fees) arising from:
              </p>
              <ul className="list-disc list-inside text-zinc-600 space-y-2 ml-4">
                <li>Your use of the Site</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any third party's rights</li>
                <li>Any content you submit to the Site</li>
              </ul>
            </section>

            {/* 10. Privacy Policy */}
            <section id="privacy">
              <h2 className="text-2xl font-semibold text-zinc-900 mb-4">10. Privacy Policy</h2>
              <p className="text-zinc-600 leading-relaxed">
                Your privacy is important to us. Please review our Privacy Policy, which governs the collection, use, and disclosure of your personal information. The Privacy Policy is incorporated into these Terms by reference.
              </p>
            </section>

            {/* 11. Modifications to Terms */}
            <section id="modifications">
              <h2 className="text-2xl font-semibold text-zinc-900 mb-4">11. Modifications to Terms</h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                The Law Office of John P. Sherman reserves the right to modify these Terms at any time. When we do, we will revise the "Last Modified" date at the top of this page. We encourage you to review these Terms periodically to stay informed of any changes.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                Your continued use of the Site following the posting of changes to these Terms will constitute your acceptance of those changes.
              </p>
            </section>

            {/* 12. Termination */}
            <section id="termination">
              <h2 className="text-2xl font-semibold text-zinc-900 mb-4">12. Termination</h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                We may terminate or suspend your access to the Site immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                Upon termination, your right to use the Site will cease immediately. All provisions of these Terms that by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
              </p>
            </section>

            {/* 13. Governing Law */}
            <section id="governing">
              <h2 className="text-2xl font-semibold text-zinc-900 mb-4">13. Governing Law</h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the State of Florida, without regard to its conflict of law principles. Any legal action or proceeding arising under these Terms will be brought exclusively in the courts of Miami-Dade County, Florida.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-zinc-800 mb-2">Severability</h3>
                  <p className="text-zinc-600">If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions will remain in full force and effect.</p>
                </div>
                <div>
                  <h3 className="font-medium text-zinc-800 mb-2">Entire Agreement</h3>
                  <p className="text-zinc-600">These Terms, together with our Privacy Policy, constitute the entire agreement between you and The Law Office of John P. Sherman regarding your use of the Site and supersede all prior and contemporaneous written or oral agreements.</p>
                </div>
              </div>
            </section>

            {/* 14. Contact Information */}
            <section id="contact">
              <h2 className="text-2xl font-semibold text-zinc-900 mb-4">14. Contact Information</h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                If you have any questions about these Terms and Conditions, please contact us at:
              </p>
              <div className="bg-white border border-zinc-200 rounded-xl p-6">
                <p className="font-medium text-zinc-900 mb-2">The Law Office of John P. Sherman</p>
                <p className="text-zinc-600">250 Catalonia Ave # 606</p>
                <p className="text-zinc-600">Coral Gables, FL 33134</p>
                <p className="text-zinc-600 mt-2">Phone: <a href="tel:786-602-3672" className="text-[#B8976C] hover:underline">(786) 602-3672</a></p>
                <p className="text-zinc-600">Email: <a href="mailto:contact@shermanlaw.com" className="text-[#B8976C] hover:underline">contact@shermanlaw.com</a></p>
              </div>
            </section>

            {/* Acknowledgment */}
            <section className="bg-zinc-100 border border-zinc-200 rounded-xl p-8 mt-16">
              <h2 className="text-xl font-semibold text-zinc-900 mb-4">Acknowledgment</h2>
              <p className="text-zinc-600 leading-relaxed">
                By using this Site, you acknowledge that you have read these Terms and Conditions, understand them, and agree to be bound by them.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  )
}
