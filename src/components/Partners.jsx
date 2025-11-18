import React from 'react'

const logos = [
  { name: 'Equifax', color: '#C8102E' },
  { name: 'TransUnion', color: '#009fdf' },
  { name: 'Experian', color: '#6f2dbd' },
  { name: 'SEON', color: '#00d08f' },
  { name: 'LexisNexis', color: '#cc0000' },
  { name: 'Plaid', color: '#111827' },
]

const Partners = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white/70 backdrop-blur-md p-8 shadow-sm">
          <p className="text-center text-slate-600">Data sources and partnerships</p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
            {logos.map(l => (
              <div key={l.name} className="h-14 rounded-xl bg-white border border-slate-200 grid place-content-center text-sm font-semibold" style={{ color: l.color }}>
                {l.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners