import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import DueDiligence from './components/DueDiligence'
import Compliance from './components/Compliance'
import Partners from './components/Partners'
import AppSection from './components/AppSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-slate-50 text-slate-900">
      <Navbar />
      <Hero />
      <HowItWorks />
      <DueDiligence />
      <Compliance />
      <Partners />
      <AppSection />
      <Footer />
    </div>
  )
}

export default App