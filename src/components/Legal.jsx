import React from 'react'
import { ScrollText, BadgeCheck } from 'lucide-react'

const Legal = () => {
  return (
    <section className="py-20 bg-white" id="legal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-[#224F56]/10 text-[#224F56]"><ScrollText className="w-5 h-5" /></div>
          <h2 className="text-3xl font-bold text-slate-900">Regulatory & Legal</h2>
        </div>
        <p className="mt-3 text-slate-600 max-w-3xl">We operate under local regulations. Full details will be published upon approval and onboarding completion.</p>

        <div className="mt-8 grid sm:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/40 p-6">
            <div className="flex items-center gap-3">
              <BadgeCheck className="w-5 h-5 text-[#224F56]" />
              <div>
                <p className="font-semibold text-slate-900">CMA License</p>
                <p className="text-sm text-slate-600">Capital Market Authority (CMA) — License details to be published</p>
              </div>
            </div>
            <div className="mt-4 aspect-[16/7] rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white flex items-center justify-center text-slate-400 text-sm">
              CMA Logo Placeholder
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/40 p-6">
            <div className="flex items-center gap-3">
              <ScrollText className="w-5 h-5 text-[#224F56]" />
              <div>
                <p className="font-semibold text-slate-900">Policies & Terms</p>
                <p className="text-sm text-slate-600">User terms, privacy policy, and disclosures will be available before launch.</p>
              </div>
            </div>
            <ul className="mt-4 text-sm text-slate-600 list-disc pl-5 space-y-1">
              <li>Risk disclosures</li>
              <li>Prospectus and offering documents</li>
              <li>Investor eligibility and KYC/AML</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Legal
