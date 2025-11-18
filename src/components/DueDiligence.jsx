import React from 'react'
import { BarChart2, LineChart, Database } from 'lucide-react'

const DueDiligence = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white/70 backdrop-blur-md border border-slate-200 p-8 sm:p-12 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Complete transparency in our due diligence</h2>
              <p className="mt-4 text-slate-600">We apply robust financial models and proprietary credit scoring on every company. Summary metrics and key drivers are visible to investors before funding.</p>
              <ul className="mt-6 space-y-3 text-slate-700">
                <li className="flex items-center gap-3"><BarChart2 className="w-5 h-5 text-[#224F56]" /> Cash flows, coverage ratios, and scenario tests</li>
                <li className="flex items-center gap-3"><LineChart className="w-5 h-5 text-[#224F56]" /> Stress testing and probability of default estimates</li>
                <li className="flex items-center gap-3"><Database className="w-5 h-5 text-[#224F56]" /> Independent data sources and verifications</li>
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#224F56]/20 to-slate-100 border border-slate-200 shadow-inner" />
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#224F56]/10 to-transparent blur-2xl pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DueDiligence