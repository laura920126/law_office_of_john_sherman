import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import heroImage from '../../Images/John hero.png'

export default function About() {
  const { t } = useTranslation('home')
  const stats = t('about.stats', { returnObjects: true })
  const education = t('about.education', { returnObjects: true })
  const admissions = t('about.admissions', { returnObjects: true })
  const practiceAreas = t('about.practiceAreas', { returnObjects: true })

  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-[#050505] border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Image & Contact Card */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            {/* Profile Image */}
            <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-zinc-900/50 border border-white/[0.05]">
              <img
                src={heroImage}
                alt="John P. Sherman"
                className="w-full h-full object-cover object-top"
              />
              {/* Floating Badge */}
              <div className="absolute top-4 right-4 px-3 py-1 bg-[#EBC870]/20 backdrop-blur-md rounded-full border border-[#EBC870]/30 text-[10px] font-medium text-[#EBC870] tracking-wide">
                {t('about.badge')}
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-zinc-900/30 border border-white/[0.05] p-6 rounded-xl space-y-4">
              <div className="space-y-1">
                <h3 className="text-white font-medium text-sm">{t('about.name')}</h3>
                <p className="text-zinc-500 text-xs uppercase tracking-wider">{t('about.title')}</p>
              </div>

              <div className="h-px w-full bg-white/5"></div>

              <div className="space-y-3">
                <a href="tel:786-602-3672" className="flex items-center gap-3 text-sm text-zinc-400 hover:text-[#EBC870] transition-colors">
                  <PhoneIcon />
                  (786)-602-3672
                </a>
                <a href="mailto:contact@shermanlaw.com" className="flex items-center gap-3 text-sm text-zinc-400 hover:text-[#EBC870] transition-colors">
                  <MailIcon />
                  contact@shermanlaw.com
                </a>
                <div className="flex items-center gap-3 text-sm text-zinc-400">
                  <MapPinIcon />
                  Coral Gables, FL
                </div>
              </div>

              <Link to="/contact" className="block w-full py-2.5 mt-4 bg-[#EBC870] text-black text-xs font-semibold text-center rounded-sm hover:bg-[#d4b35f] transition-colors">
                {t('about.scheduleBtn')}
              </Link>
            </div>
          </div>

          {/* Right Column: Biography & Credentials */}
          <div className="lg:col-span-8 space-y-16">

            {/* Intro */}
            <div>
              <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-8 leading-[1.1]">
                {t('about.headline.part1')} <span className="text-zinc-500">{t('about.headline.part2')}</span> {t('about.headline.part3')} <span className="text-zinc-500">{t('about.headline.part4')}</span> {t('about.headline.part5')}
              </h2>
              <div className="space-y-6 text-lg font-light text-zinc-400 leading-relaxed">
                <p>{t('about.bio.p1')}</p>
                <p>{t('about.bio.p2')}</p>
                <p>{t('about.bio.p3')}</p>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-y border-white/[0.05]">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-1">
                  <div className="text-2xl text-[#EBC870] font-medium tracking-tight">{stat.value}</div>
                  <div className="text-xs text-zinc-500 font-medium uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Credentials Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Education */}
              <div className="bg-zinc-900/30 border border-white/[0.05] p-8 rounded-xl">
                <div className="flex items-center gap-3 mb-6">
                  <span className="p-2 rounded bg-zinc-900 border border-white/5 text-[#EBC870]">
                    <GraduationIcon />
                  </span>
                  <h3 className="text-white font-medium">{t('about.educationTitle')}</h3>
                </div>
                <ul className="space-y-6 relative border-l border-white/5 ml-3 pl-8">
                  {education.map((item, index) => (
                    <li key={index} className="relative">
                      <span className="absolute -left-[37px] top-1.5 w-2 h-2 rounded-full bg-[#EBC870] border-2 border-[#050505]"></span>
                      <div className="text-white text-sm font-medium">{item.school}</div>
                      <div className="text-zinc-500 text-xs mt-1">{item.degree}</div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Admissions */}
              <div className="bg-zinc-900/30 border border-white/[0.05] p-8 rounded-xl">
                <div className="flex items-center gap-3 mb-6">
                  <span className="p-2 rounded bg-zinc-900 border border-white/5 text-[#EBC870]">
                    <LandmarkIcon />
                  </span>
                  <h3 className="text-white font-medium">{t('about.admissionsTitle')}</h3>
                </div>
                <ul className="space-y-3">
                  {admissions.map((item, index) => (
                    <li key={index} className={`flex justify-between items-center py-2 text-sm ${index < admissions.length - 1 ? 'border-b border-white/5' : ''}`}>
                      <span className="text-zinc-300">{item.court}</span>
                      <span className="text-zinc-500 text-xs font-mono">{item.year}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Practice Areas List */}
            <div className="space-y-6">
              <h3 className="text-xl text-white font-medium tracking-tight">{t('about.practiceAreasTitle')}</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {practiceAreas.map((area, index) => (
                  <div key={index} className="bg-zinc-900/30 border border-white/[0.05] p-4 rounded-lg flex items-center gap-4 hover:bg-zinc-900/50 hover:border-[#EBC870]/30 transition-colors">
                    <span className="text-[#EBC870]">
                      {index === 0 && <ScaleIcon />}
                      {index === 1 && <ActivityIcon />}
                      {index === 2 && <UsersIcon />}
                      {index === 3 && <ShieldIcon />}
                    </span>
                    <span className="text-sm text-zinc-200">{area}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

// Icons
function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  )
}

function MailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </svg>
  )
}

function MapPinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  )
}

function GraduationIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
      <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
    </svg>
  )
}

function LandmarkIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" x2="21" y1="22" y2="22"></line>
      <line x1="6" x2="6" y1="18" y2="11"></line>
      <line x1="10" x2="10" y1="18" y2="11"></line>
      <line x1="14" x2="14" y1="18" y2="11"></line>
      <line x1="18" x2="18" y1="18" y2="11"></line>
      <polygon points="12 2 20 7 4 7"></polygon>
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

function ActivityIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
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

function ShieldIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      <path d="m9 12 2 2 4-4"></path>
    </svg>
  )
}
