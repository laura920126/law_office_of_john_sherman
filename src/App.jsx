import { Routes, Route } from 'react-router-dom'
import { Navbar, Footer, CookieConsent } from './components'
import { Home, AboutPage, FamilyLawPage, PersonalInjuryPage, ContactPage, TermsPage, PrivacyPage } from './pages'

function App() {
  return (
    <>
      {/* Noise Texture Overlay */}
      <div className="noise-overlay"></div>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/family-law" element={<FamilyLawPage />} />
        <Route path="/personal-injury" element={<PersonalInjuryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
      </Routes>
      <Footer />
      <CookieConsent />
    </>
  )
}

export default App
