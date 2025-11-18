import React from 'react'
import { ScrollText, ShieldCheck } from 'lucide-react'

const Compliance = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Legal and Sharia compliance</h2>
            <p className="mt-4 text-slate-600">We operate under regulatory oversight and a Sharia board. Below are placeholders until we publish the full details.</p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-200 bg-white/70 p-5">
                <div className="flex items-center gap-3">
                  <ScrollText className="w-5 h-5 text-[#224F56]" />
                  <div>
                    <p className="font-semibold text-slate-900">Licensed by CMA</p>
                    <p className="text-sm text-slate-600">License No. — Pending publication</p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white/70 p-5">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#224F56]" />
                  <div>
                    <p className="font-semibold text-slate-900">Sharia Board</p>
                    <p className="text-sm text-slate-600">Members — To be announced</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[16/10] rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white shadow-inner" />
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#224F56]/10 to-transparent blur-2xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Compliance