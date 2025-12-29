import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import heroImage from '../../Images/John hero.png'

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="pt-24 min-h-screen bg-[#050505]">

      {/* Section 1: Introduction (Split Layout) */}
      <section className="relative pt-8 pb-24 lg:pt-24 lg:pb-32 px-6 border-b border-white/[0.05]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">

          {/* Left: Image & Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10">
              <img
                src={heroImage}
                alt="John P. Sherman"
                className="absolute inset-0 w-full h-full object-cover object-top opacity-90 hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80"></div>

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center justify-between border-t border-white/20 pt-6">
                  <div>
                    <div className="text-white font-medium text-sm">John P. Sherman</div>
                    <div className="text-zinc-400 text-xs mt-0.5">Founding Attorney</div>
                  </div>
                  <ScaleIcon className="text-[#EBC870]" />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="lg:col-span-7 space-y-10 pt-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.1]">
              I'm John Sherman. <br />
              <span className="text-zinc-500">I help people through life's toughest legal battles.</span>
            </h1>

            <div className="space-y-6 text-[17px] font-light text-zinc-300 leading-relaxed max-w-2xl">
              <p>
                Since 2017, I have dedicated my career to civil litigation and family law. I handle complex non-jury trials involving <span className="text-white font-normal">bankruptcy, guardianship, domestic violence, and divorce</span>.
              </p>
              <p>
                Previously, I spent 5 years representing some of the nation's largest insurance carriers. I now use that insider defense knowledge to maximize results for my clients, having negotiated settlements ranging from tens of thousands to over one million dollars.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Stats */}
      <section className="border-b border-white/[0.05] bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-3 gap-8 md:gap-12">
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl text-[#EBC870] font-medium tracking-tight">7+</div>
              <div className="text-xs text-zinc-500 font-medium uppercase tracking-widest">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl text-[#EBC870] font-medium tracking-tight">100s</div>
              <div className="text-xs text-zinc-500 font-medium uppercase tracking-widest">Depositions</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl text-[#EBC870] font-medium tracking-tight">2017</div>
              <div className="text-xs text-zinc-500 font-medium uppercase tracking-widest">Licensed in FL</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Practice Areas */}
      <section id="practice" className="py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-medium text-white tracking-tight mb-4">Legal Practice Areas</h2>
            <p className="text-zinc-400 font-light text-lg">
              Focused representation in civil matters, leveraging years of courtroom and negotiation experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Family Law */}
            <Link to="/family-law" className="bg-white/[0.01] border border-white/[0.05] hover:border-[#EBC870]/30 hover:bg-white/[0.02] p-8 rounded-xl space-y-6 group cursor-pointer transition-all">
              <div className="w-12 h-12 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-[#EBC870] group-hover:bg-[#EBC870] group-hover:text-black group-hover:border-[#EBC870] transition-all">
                <HeartHandshakeIcon />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl text-white font-medium group-hover:text-[#EBC870] transition-colors">Family Law</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Comprehensive support for divorce proceedings, child custody disputes, domestic violence restraining orders, and guardianship matters.
                </p>
              </div>
            </Link>

            {/* Personal Injury */}
            <Link to="/personal-injury" className="bg-white/[0.01] border border-white/[0.05] hover:border-[#EBC870]/30 hover:bg-white/[0.02] p-8 rounded-xl space-y-6 group cursor-pointer transition-all">
              <div className="w-12 h-12 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-[#EBC870] group-hover:bg-[#EBC870] group-hover:text-black group-hover:border-[#EBC870] transition-all">
                <ActivityIcon />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl text-white font-medium group-hover:text-[#EBC870] transition-colors">Personal Injury</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Representation for car accidents, negligent security claims, and liability litigation. Using insurance defense tactics to build stronger claims.
                </p>
              </div>
            </Link>

            {/* Civil Litigation */}
            <div className="bg-white/[0.01] border border-white/[0.05] hover:border-[#EBC870]/30 hover:bg-white/[0.02] p-8 rounded-xl space-y-6 group cursor-default transition-all">
              <div className="w-12 h-12 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-[#EBC870] group-hover:bg-[#EBC870] group-hover:text-black group-hover:border-[#EBC870] transition-all">
                <GavelIcon />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl text-white font-medium group-hover:text-[#EBC870] transition-colors">Civil Litigation</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Managing complex cases from inception through jury trials. Conducting evidentiary hearings and high-stakes negotiations in Florida courts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Why Me (Value Props) */}
      <section className="py-24 lg:py-32 px-6 bg-[#080808] border-y border-white/[0.05]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight leading-tight">
                Why trust your case <br /> to John Sherman?
              </h2>
              <p className="text-zinc-400 text-lg font-light leading-relaxed">
                The legal system is complex. You need an attorney who doesn't just know the law, but understands how the opposition thinks.
              </p>
              <div className="pt-4">
                <div className="flex items-center gap-4 text-sm text-zinc-300">
                  <span className="p-2 rounded bg-zinc-900 border border-white/5 text-[#EBC870]">
                    <CheckIcon />
                  </span>
                  Direct access to your attorney, always.
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {/* Feature 1 */}
              <div className="flex gap-6 p-6 rounded-lg hover:bg-white/[0.02] transition-colors border border-transparent hover:border-white/5">
                <div className="shrink-0 mt-1 text-[#EBC870]">
                  <SwordsIcon />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-2">Insider Defense Knowledge</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    With 5 years representing major insurance carriers, I know exactly how they evaluate claims. I use this perspective to anticipate their moves and secure better outcomes.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-6 p-6 rounded-lg hover:bg-white/[0.02] transition-colors border border-transparent hover:border-white/5">
                <div className="shrink-0 mt-1 text-[#EBC870]">
                  <UserCheckIcon />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-2">Personal Attention</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    I don't hand cases off to paralegals. When you hire my firm, you get my personal cell phone number and my direct attention throughout your entire case.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-6 p-6 rounded-lg hover:bg-white/[0.02] transition-colors border border-transparent hover:border-white/5">
                <div className="shrink-0 mt-1 text-[#EBC870]">
                  <MessageSquareIcon />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-2">Honest Assessments</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    I set realistic expectations from day one. I will clearly outline the strengths and weaknesses of your case so you can make informed decisions about your future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Contact CTA */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-2xl mx-auto text-center space-y-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight">Ready to discuss your case?</h2>
          <p className="text-zinc-400 text-lg font-light">
            Schedule a consultation to understand your rights and options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href="tel:7866023672" className="px-8 py-4 bg-[#EBC870] hover:bg-[#d4b35f] text-black font-semibold text-sm rounded-sm transition-colors flex items-center justify-center gap-2">
              <PhoneIcon />
              Call (786) 602-3672
            </a>
            <Link to="/contact" className="px-8 py-4 bg-zinc-900 border border-white/10 hover:bg-zinc-800 text-white font-medium text-sm rounded-sm transition-colors">
              Send a Message
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}

// Icons
function ScaleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#EBC870]">
      <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
      <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
      <path d="M7 21h10"></path>
      <path d="M12 3v18"></path>
      <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path>
    </svg>
  )
}

function HeartHandshakeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
      <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"></path>
      <path d="m18 15-2-2"></path>
      <path d="m15 18-2-2"></path>
    </svg>
  )
}

function ActivityIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
    </svg>
  )
}

function GavelIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m14 13-7.5 7.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L11 10"></path>
      <path d="m16 16 6-6"></path>
      <path d="m8 8 6-6"></path>
      <path d="m9 7 8 8"></path>
      <path d="m21 11-8-8"></path>
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  )
}

function SwordsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5"></polyline>
      <line x1="13" x2="19" y1="19" y2="13"></line>
      <line x1="16" x2="20" y1="16" y2="20"></line>
      <line x1="19" x2="21" y1="21" y2="19"></line>
      <polyline points="14.5 6.5 18 3 21 3 21 6 17.5 9.5"></polyline>
      <line x1="5" x2="9" y1="14" y2="18"></line>
      <line x1="7" x2="4" y1="17" y2="20"></line>
      <line x1="3" x2="5" y1="19" y2="21"></line>
    </svg>
  )
}

function UserCheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <polyline points="16 11 18 13 22 9"></polyline>
    </svg>
  )
}

function MessageSquareIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  )
}
