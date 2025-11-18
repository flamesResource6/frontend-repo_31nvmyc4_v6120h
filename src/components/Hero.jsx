import React from 'react'
import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative h-[88vh] min-h-[600px] overflow-hidden">
      {/* gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white pointer-events-none" />

      {/* 3D Spline scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="w-full max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#224F56]/10 text-[#224F56] px-3 py-1 text-sm font-medium mb-4 shadow-sm">Fintech • Sukuk • Compliance</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
            We pick from the best emerging companies
          </h1>
          <p className="mt-5 text-lg text-slate-600 max-w-2xl">
            Access transparent, Sharia-compliant investment opportunities and fast, data-driven financing.
          </p>

          <div className="mt-8 flex flex-wrap gap-3" id="invest">
            <a href="#invest" className="inline-flex items-center gap-2 rounded-xl bg-[#224F56] text-white px-5 py-3 font-semibold shadow-lg shadow-[#224F56]/30 hover:-translate-y-0.5 transition-transform">
              Start investing <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#borrow" className="inline-flex items-center gap-2 rounded-xl bg-white text-[#224F56] border border-[#224F56]/20 px-5 py-3 font-semibold hover:bg-[#224F56]/5 transition">
              Request a loan
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero