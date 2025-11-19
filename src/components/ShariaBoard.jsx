import React from 'react'
import { ShieldCheck } from 'lucide-react'

const members = [
  { name: 'Dr. A. Al-Fulan', role: 'Chairman, Sharia Board', initials: 'AA' },
  { name: 'Sheikh B. Al-Amri', role: 'Member', initials: 'BA' },
  { name: 'Dr. C. Al-Harbi', role: 'Member', initials: 'CH' },
]

const ShariaBoard = () => {
  return (
    <section className="py-20 bg-white" id="sharia">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-[#224F56]/10 text-[#224F56]"><ShieldCheck className="w-5 h-5" /></div>
          <h2 className="text-3xl font-bold text-slate-900">Sharia Board</h2>
        </div>
        <p className="mt-3 text-slate-600 max-w-3xl">Our activities are reviewed by an independent Sharia board. Names below are placeholders until official announcement.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((m) => (
            <div key={m.name} className="relative rounded-2xl border border-slate-200 bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/40 p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#224F56]/10 text-[#224F56] flex items-center justify-center font-semibold text-lg border border-[#224F56]/20">
                  {m.initials}
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{m.name}</p>
                  <p className="text-sm text-slate-600">{m.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ShariaBoard
