import { useEffect } from 'react'
import Reviews from '../components/Reviews'

export default function FamilyLawPage() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="pt-24 min-h-screen bg-[#050505]">
      <section id="family-law" className="py-24 bg-[#050505] border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#EBC870]"></span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#EBC870] font-semibold">Practice Area 01</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-6">Family Law</h1>
              <p className="text-zinc-500 max-w-xl text-lg font-light leading-relaxed">
                Divorce and custody disputes define your future. We approach every case with a strategy designed to secure your financial stability and your relationship with your children.
              </p>
            </div>
            <a href="/#contact" className="hidden md:flex items-center gap-2 px-6 py-3 border border-white/10 rounded-sm text-white hover:bg-white hover:text-black transition-all duration-300">
              <span className="text-xs uppercase tracking-widest font-medium">Request Case Review</span>
            </a>
          </div>

          {/* Detailed Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-white/[0.05] border border-white/[0.05]">

            {/* Sub-Service 1: Divorce */}
            <div className="bg-[#050505] p-12 group hover:bg-zinc-900/20 transition-colors relative overflow-hidden">
              <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center mb-8 text-white group-hover:bg-[#EBC870] group-hover:text-black transition-colors border border-white/5">
                <SplitIcon />
              </div>
              <h3 className="text-2xl text-white font-medium mb-4">Divorce &amp; Dissolution</h3>
              <p className="text-zinc-500 leading-relaxed mb-8">Whether contested or uncontested, we handle high-net-worth divorces with discretion, ensuring fair equitable distribution of assets, retirement accounts, and property.</p>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#EBC870] rounded-full"></span> High Asset Division</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#EBC870] rounded-full"></span> Business Valuation</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#EBC870] rounded-full"></span> Retirement & Pension Division</li>
              </ul>
            </div>

            {/* Sub-Service 2: Child Custody */}
            <div className="bg-[#050505] p-12 group hover:bg-zinc-900/20 transition-colors relative overflow-hidden">
              <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center mb-8 text-white group-hover:bg-[#EBC870] group-hover:text-black transition-colors border border-white/5">
                <UsersIcon />
              </div>
              <h3 className="text-2xl text-white font-medium mb-4">Child Custody &amp; Timesharing</h3>
              <p className="text-zinc-500 leading-relaxed mb-8">Florida law focuses on "timesharing" rather than custody. We fight to protect your parental rights and create stable, meaningful schedules for your children.</p>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#EBC870] rounded-full"></span> Parenting Plans</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#EBC870] rounded-full"></span> Relocation Cases</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#EBC870] rounded-full"></span> Modification of Custody</li>
              </ul>
            </div>

            {/* Sub-Service 3: Alimony */}
            <div className="bg-[#050505] p-12 group hover:bg-zinc-900/20 transition-colors relative overflow-hidden">
              <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center mb-8 text-white group-hover:bg-[#EBC870] group-hover:text-black transition-colors border border-white/5">
                <ScaleIcon />
              </div>
              <h3 className="text-2xl text-white font-medium mb-4">Alimony &amp; Spousal Support</h3>
              <p className="text-zinc-500 leading-relaxed mb-8">Whether you're seeking support or defending against excessive claims, we analyze the statutory factors to argue for a fair outcome based on the length of marriage and financial circumstances.</p>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#EBC870] rounded-full"></span> Durational Alimony</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#EBC870] rounded-full"></span> Bridge-the-Gap Support</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#EBC870] rounded-full"></span> Alimony Modification</li>
              </ul>
            </div>

            {/* Sub-Service 4: Prenuptial Agreements */}
            <div className="bg-[#050505] p-12 group hover:bg-zinc-900/20 transition-colors relative overflow-hidden">
              <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center mb-8 text-white group-hover:bg-[#EBC870] group-hover:text-black transition-colors border border-white/5">
                <ShieldIcon />
              </div>
              <h3 className="text-2xl text-white font-medium mb-4">Prenuptial &amp; Postnuptial Agreements</h3>
              <p className="text-zinc-500 leading-relaxed mb-8">Protect your assets before or during marriage with legally enforceable agreements. We draft and review contracts that stand up to legal scrutiny.</p>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#EBC870] rounded-full"></span> Asset Protection</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#EBC870] rounded-full"></span> Business Ownership Clauses</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#EBC870] rounded-full"></span> Inheritance Rights</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-32 bg-[#050505] border-t border-white/[0.05]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          {/* Section Header */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#EBC870] font-semibold">Working With Me</span>
              <span className="h-[1px] w-24 bg-gradient-to-r from-[#EBC870] to-transparent opacity-50"></span>
            </div>
            <h2 className="text-4xl md:text-6xl font-medium text-white tracking-tight">Why choose John?</h2>
          </div>

          {/* Benefits List */}
          <div className="space-y-0">
            {/* Item 1 */}
            <div className="group border-t border-white/10 py-12 flex flex-col md:flex-row gap-8 md:gap-12 transition-all hover:bg-white/[0.02]">
              <div className="shrink-0">
                <div className="w-16 h-16 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center text-white group-hover:text-[#EBC870] group-hover:border-[#EBC870]/30 transition-all duration-500">
                  <PersonalizedIcon />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-medium text-white mb-3 tracking-tight group-hover:text-[#EBC870] transition-colors">Personalized Attention</h3>
                <p className="text-lg text-zinc-500 font-light leading-relaxed max-w-xl">Every family is unique, and I tailor my approach to each client's needs.</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="group border-t border-white/10 py-12 flex flex-col md:flex-row gap-8 md:gap-12 transition-all hover:bg-white/[0.02]">
              <div className="shrink-0">
                <div className="w-16 h-16 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center text-white group-hover:text-[#EBC870] group-hover:border-[#EBC870]/30 transition-all duration-500">
                  <CommunicationIcon />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-medium text-white mb-3 tracking-tight group-hover:text-[#EBC870] transition-colors">Transparent Communication</h3>
                <p className="text-lg text-zinc-500 font-light leading-relaxed max-w-xl">I keep you informed every step of the way, ensuring you understand your options and potential outcomes.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="group border-t border-b border-white/10 py-12 flex flex-col md:flex-row gap-8 md:gap-12 transition-all hover:bg-white/[0.02]">
              <div className="shrink-0">
                <div className="w-16 h-16 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center text-white group-hover:text-[#EBC870] group-hover:border-[#EBC870]/30 transition-all duration-500">
                  <ResultsIcon />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-medium text-white mb-3 tracking-tight group-hover:text-[#EBC870] transition-colors">Committed to Results</h3>
                <p className="text-lg text-zinc-500 font-light leading-relaxed max-w-xl">My goal is to achieve a resolution that protects your rights and your family's future.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <Reviews />

      {/* FAQ Section */}
      <section className="py-24 px-6 md:px-12 bg-[#0A0A0A] border-y border-white/[0.05]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center text-white mb-4 font-medium">Family Law FAQ</h2>
          <p className="text-zinc-500 text-center mb-12">Common questions about divorce, custody, and family matters in Florida</p>

          <div className="space-y-4">
            {familyLawFaqs.map((faq, index) => (
              <details key={index} className="group border border-white/10 rounded-lg bg-[#050505]">
                <summary className="flex cursor-pointer items-center justify-between p-6 text-white font-medium hover:text-[#EBC870] transition-colors">
                  {faq.question}
                  <span className="ml-4 flex-shrink-0 text-zinc-500 group-hover:text-[#EBC870]">
                    <ChevronDownIcon />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-zinc-400 text-sm leading-relaxed">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12 bg-[#050505]">
        <div className="max-w-4xl mx-auto bg-zinc-900/30 border border-white/[0.05] rounded-2xl p-12 md:p-16 text-center">
          <h3 className="text-2xl md:text-3xl text-white font-medium mb-4">Ready to discuss your family law matter?</h3>
          <p className="text-zinc-500 max-w-2xl mx-auto mb-8">Every family situation is unique. Schedule a confidential consultation to discuss your specific circumstances and legal options.</p>
          <a href="/#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#EBC870] text-black text-sm font-semibold rounded-sm hover:bg-[#d4b35f] transition-colors">
            Schedule Free Consultation
          </a>
        </div>
      </section>
    </main>
  )
}

// Icons
function SplitIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 3h5v5"></path>
      <path d="M8 3H3v5"></path>
      <path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3"></path>
      <path d="m15 9 6-6"></path>
    </svg>
  )
}

function UsersIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  )
}

function ScaleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
      <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
      <path d="M7 21h10"></path>
      <path d="M12 3v18"></path>
      <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path>
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      <path d="m9 12 2 2 4-4"></path>
    </svg>
  )
}

function ChevronDownIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-open:rotate-180 transition-transform">
      <path d="m6 9 6 6 6-6"></path>
    </svg>
  )
}

function PersonalizedIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  )
}

function CommunicationIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
  )
}

function ResultsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="12" r="6"></circle>
      <circle cx="12" cy="12" r="2"></circle>
    </svg>
  )
}

// FAQ Data
const familyLawFaqs = [
  {
    question: "How long does a divorce take in Florida?",
    answer: "An uncontested divorce in Florida can be finalized in as little as 4-6 weeks. However, contested divorces involving disputes over assets, custody, or alimony can take 6 months to over a year depending on the complexity of the issues and court schedules."
  },
  {
    question: "What factors determine child custody in Florida?",
    answer: "Florida courts focus on the 'best interests of the child' when determining timesharing. They consider factors including each parent's ability to provide a stable environment, the child's existing relationship with each parent, each parent's willingness to encourage a relationship with the other parent, and any history of domestic violence or substance abuse."
  },
  {
    question: "How is alimony calculated in Florida?",
    answer: "Florida does not have a fixed formula for alimony. Courts consider multiple factors including the length of the marriage, each spouse's financial resources, earning capacity, contributions to the marriage, and the standard of living established during the marriage. The 2023 alimony reform also introduced new guidelines limiting durational alimony."
  },
  {
    question: "Can I modify a custody order after it's finalized?",
    answer: "Yes, custody (timesharing) orders can be modified if there has been a substantial, material, and unanticipated change in circumstances since the original order. Common reasons include relocation, changes in work schedules, safety concerns, or changes in the child's needs as they grow older."
  },
  {
    question: "Are prenuptial agreements enforceable in Florida?",
    answer: "Yes, prenuptial agreements are generally enforceable in Florida if they meet certain requirements: both parties must have made full financial disclosure, both must have had the opportunity to consult with independent attorneys, and the agreement cannot be unconscionable. They must also be in writing and signed voluntarily."
  }
]
