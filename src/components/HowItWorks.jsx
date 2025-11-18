import React from 'react'
import { ShieldCheck, FileSearch, Sparkles } from 'lucide-react'

const items = [
  {
    icon: ShieldCheck,
    title: 'Complete transparency',
    desc: 'Clear fees, risks, and performance metrics for every sukuk deal we list.'
  },
  {
    icon: FileSearch,
    title: 'Detailed project analysis',
    desc: 'Deep-dive research and credit models on the companies we finance.'
  },
  {
    icon: Sparkles,
    title: 'Cherry picked from the top',
    desc: 'We only onboard companies that meet our strict financial and Sharia criteria.'
  }
]

const HowItWorks = () => {
  return (
    <section className="relative py-20 bg-white" id="about">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(34,79,86,0.08),transparent_50%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center">How do we work?</h2>
        <p className="mt-3 text-slate-600 text-center max-w-2xl mx-auto">Our process is built on clarity, rigor, and compliance.</p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="group rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-sm p-6 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-[#224F56]/10 text-[#224F56] grid place-content-center mb-4">
                <it.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{it.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks