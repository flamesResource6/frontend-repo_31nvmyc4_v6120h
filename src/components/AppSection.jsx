import React from 'react'
import { Download, HelpCircle } from 'lucide-react'

const AppSection = () => {
  return (
    <section className="py-20 bg-white" id="borrow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-white to-slate-50 border border-slate-200 p-10 shadow-sm">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">The app</h2>
              <p className="mt-3 text-slate-600">Invest or apply in minutes. Track distributions, redemptions, and portfolio performance on the go.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button className="inline-flex items-center gap-2 rounded-xl bg-[#224F56] text-white px-5 py-3 font-semibold shadow-lg shadow-[#224F56]/30"> 
                  <Download className="w-4 h-4" /> Download the app
                </button>
                <button className="inline-flex items-center gap-2 rounded-xl bg-white text-[#224F56] border border-[#224F56]/20 px-5 py-3 font-semibold">
                  <HelpCircle className="w-4 h-4" /> Hesitant?
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[9/16] w-64 sm:w-72 md:w-80 mx-auto rounded-[2rem] border border-slate-200 bg-gradient-to-b from-slate-50 to-white shadow-2xl" />
              <div className="absolute -inset-2 rounded-[2.25rem] bg-gradient-to-tr from-[#224F56]/10 to-transparent blur-2xl pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppSection