import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Reviews from '../components/Reviews'

export default function PersonalInjuryPage() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="pt-24 min-h-screen bg-[#050505]">
      <section id="personal-injury" className="py-24 bg-[#050505] border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#EBC870]"></span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#EBC870] font-semibold">Practice Area 02</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-6">Personal Injury</h1>
              <p className="text-zinc-500 max-w-xl text-lg font-light leading-relaxed">
                When you are injured, insurance companies see a claim number. We see a person. We fight to recover maximum compensation for your medical bills, lost wages, and suffering.
              </p>
            </div>
            <Link to="/contact" className="hidden md:flex items-center gap-2 px-6 py-3 border border-white/10 rounded-sm text-white hover:bg-white hover:text-black transition-all duration-300">
              <span className="text-xs uppercase tracking-widest font-medium">Free Injury Consultation</span>
            </Link>
          </div>

          {/* Detailed Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-white/[0.05] border border-white/[0.05]">

            {/* Sub-Service 1: Auto Accidents */}
            <div className="bg-[#050505] p-12 group hover:bg-zinc-900/20 transition-colors relative overflow-hidden">
              <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center mb-8 text-white group-hover:bg-[#EBC870] group-hover:text-black transition-colors border border-white/5">
                <CarIcon />
              </div>
              <h3 className="text-2xl text-white font-medium mb-4">Auto Accidents</h3>
              <p className="text-zinc-500 leading-relaxed mb-8">Car crashes are the leading cause of injury in Florida. We investigate the scene, handle property damage claims, and ensure your medical treatment is fully covered.</p>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#EBC870] rounded-full"></span> Rear-End Collisions</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#EBC870] rounded-full"></span> Rideshare Accidents</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#EBC870] rounded-full"></span> Motorcycle & Truck Accidents</li>
              </ul>
            </div>

            {/* Sub-Service 2: Medical Malpractice */}
            <div className="bg-[#050505] p-12 group hover:bg-zinc-900/20 transition-colors relative overflow-hidden">
              <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center mb-8 text-white group-hover:bg-[#EBC870] group-hover:text-black transition-colors border border-white/5">
                <MedicalIcon />
              </div>
              <h3 className="text-2xl text-white font-medium mb-4">Medical Malpractice</h3>
              <p className="text-zinc-500 leading-relaxed mb-8">When healthcare professionals fail to meet the standard of care, the results can be catastrophic. We work with medical experts to prove negligence and secure justice.</p>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#EBC870] rounded-full"></span> Surgical Errors</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#EBC870] rounded-full"></span> Misdiagnosis</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#EBC870] rounded-full"></span> Birth Injuries</li>
              </ul>
            </div>

            {/* Sub-Service 3: Premises Liability */}
            <div className="bg-[#050505] p-12 group hover:bg-zinc-900/20 transition-colors relative overflow-hidden">
              <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center mb-8 text-white group-hover:bg-[#EBC870] group-hover:text-black transition-colors border border-white/5">
                <PremisesIcon />
              </div>
              <h3 className="text-2xl text-white font-medium mb-4">Premises Liability</h3>
              <p className="text-zinc-500 leading-relaxed mb-8">Property owners have a duty to keep their premises safe. If you slipped, tripped, or were injured due to negligent maintenance or security, we can help.</p>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#EBC870] rounded-full"></span> Slip and Fall</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#EBC870] rounded-full"></span> Negligent Security</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#EBC870] rounded-full"></span> Dog Bites</li>
              </ul>
            </div>

            {/* Sub-Service 4: Wrongful Death */}
            <div className="bg-[#050505] p-12 group hover:bg-zinc-900/20 transition-colors relative overflow-hidden">
              <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center mb-8 text-white group-hover:bg-[#EBC870] group-hover:text-black transition-colors border border-white/5">
                <WrongfulDeathIcon />
              </div>
              <h3 className="text-2xl text-white font-medium mb-4">Wrongful Death</h3>
              <p className="text-zinc-500 leading-relaxed mb-8">The most painful legal battle is the one for a lost loved one. We handle the legal burden with extreme sensitivity so your family can grieve without financial worry.</p>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#EBC870] rounded-full"></span> Loss of Consortium</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#EBC870] rounded-full"></span> Estate Representation</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#EBC870] rounded-full"></span> Survivor Benefits</li>
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
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#EBC870] font-semibold">Benefits</span>
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
                  <CheckCircleIcon />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-medium text-white mb-3 tracking-tight group-hover:text-[#EBC870] transition-colors">No Fee Unless We Win</h3>
                <p className="text-lg text-zinc-500 font-light leading-relaxed max-w-xl">You pay nothing upfront; my fee comes from the settlement or verdict.</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="group border-t border-white/10 py-12 flex flex-col md:flex-row gap-8 md:gap-12 transition-all hover:bg-white/[0.02]">
              <div className="shrink-0">
                <div className="w-16 h-16 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center text-white group-hover:text-[#EBC870] group-hover:border-[#EBC870]/30 transition-all duration-500">
                  <BoltIcon />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-medium text-white mb-3 tracking-tight group-hover:text-[#EBC870] transition-colors">Trial-Ready Reputation</h3>
                <p className="text-lg text-zinc-500 font-light leading-relaxed max-w-xl">I prepare cases for court, pushing them to offer fair settlements sooner.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="group border-t border-b border-white/10 py-12 flex flex-col md:flex-row gap-8 md:gap-12 transition-all hover:bg-white/[0.02]">
              <div className="shrink-0">
                <div className="w-16 h-16 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center text-white group-hover:text-[#EBC870] group-hover:border-[#EBC870]/30 transition-all duration-500">
                  <DirectAccessIcon />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-medium text-white mb-3 tracking-tight group-hover:text-[#EBC870] transition-colors">Direct Attorney Access</h3>
                <p className="text-lg text-zinc-500 font-light leading-relaxed max-w-xl">You work with me from intake through resolution.</p>
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
          <h2 className="text-3xl md:text-4xl text-center text-white mb-4 font-medium">Personal Injury FAQ</h2>
          <p className="text-zinc-500 text-center mb-12">Common questions about injury claims and compensation in Florida</p>

          <div className="space-y-4">
            {personalInjuryFaqs.map((faq, index) => (
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
          <h3 className="text-2xl md:text-3xl text-white font-medium mb-4">Injured and not sure what to do next?</h3>
          <p className="text-zinc-500 max-w-2xl mx-auto mb-8">Time is critical in personal injury cases. Evidence disappears, witnesses forget, and statutes of limitations apply. Get a free case evaluation today.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#EBC870] text-black text-sm font-semibold rounded-sm hover:bg-[#d4b35f] transition-colors">
            Get Free Case Evaluation
          </Link>
        </div>
      </section>
    </main>
  )
}

// Icons
function CarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
      <circle cx="7" cy="17" r="2"></circle>
      <path d="M9 17h6"></path>
      <circle cx="17" cy="17" r="2"></circle>
    </svg>
  )
}

function MedicalIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 10.5V6a4 4 0 0 1 8 0v4.5a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1.63a8 8 0 0 1-1.63 3.61l-1.68 2.38a2 2 0 0 1-3.26 0L8.25 20.1a8 8 0 0 1-1.63-3.6H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2z"></path>
    </svg>
  )
}

function PremisesIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
      <path d="M12 12v9"></path>
      <path d="m16 16-4-4-4 4"></path>
    </svg>
  )
}

function WrongfulDeathIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21a9 9 0 1 0-9-9c0 1.488.36 2.891 1 4.127L3 21l4.873-1c1.236.64 2.64 1 4.127 1Z"></path>
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

function CheckCircleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <path d="m9 12 2 2 4-4"></path>
    </svg>
  )
}

function BoltIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
    </svg>
  )
}

function DirectAccessIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v20"></path>
      <path d="M2 12h20"></path>
      <path d="m4.929 4.929 14.142 14.142"></path>
      <path d="m19.071 4.929-14.142 14.142"></path>
      <circle cx="12" cy="12" r="4"></circle>
    </svg>
  )
}

// FAQ Data
const personalInjuryFaqs = [
  {
    question: "How long do I have to file a personal injury claim in Florida?",
    answer: "In Florida, you generally have 2 years from the date of the injury to file a personal injury lawsuit (as of the 2023 tort reform changes). For medical malpractice, it's 2 years from when the injury was discovered or should have been discovered, with a maximum of 4 years from the incident. Acting quickly is crucial to preserve evidence and witness testimony."
  },
  {
    question: "What compensation can I receive for my injuries?",
    answer: "You may be entitled to economic damages (medical bills, lost wages, future medical care, lost earning capacity) and non-economic damages (pain and suffering, emotional distress, loss of enjoyment of life). In cases of gross negligence, punitive damages may also be available. The specific amount depends on the severity of your injuries and impact on your life."
  },
  {
    question: "Do I need to pay upfront for a personal injury attorney?",
    answer: "No. We work on a contingency fee basis, which means you pay nothing upfront and we only get paid if we win your case. Our fee is a percentage of the settlement or verdict. This allows injured victims to access quality legal representation regardless of their financial situation."
  },
  {
    question: "What should I do immediately after a car accident?",
    answer: "First, ensure your safety and call 911 if anyone is injured. Document the scene with photos, exchange information with other drivers, and get contact details from witnesses. Seek medical attention even if you feel fine—some injuries appear later. Do not admit fault or sign anything from insurance companies without consulting an attorney first."
  },
  {
    question: "Will my case go to trial?",
    answer: "Most personal injury cases settle before trial—approximately 95% are resolved through negotiation or mediation. However, we prepare every case as if it will go to trial. Insurance companies know which attorneys are willing to go to court, and this often leads to better settlement offers. If a fair settlement cannot be reached, we are fully prepared to advocate for you in court."
  }
]
