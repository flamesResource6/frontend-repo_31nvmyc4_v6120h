import React from 'react'
import { Menu, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-white/60 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-[#224F56] text-white grid place-content-center shadow-lg shadow-[#224F56]/30">
              <span className="font-bold">OC</span>
            </div>
            <span className="font-semibold text-slate-800 text-lg">OC Capital</span>
          </Link>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="#about" className="text-slate-600 hover:text-[#224F56] transition">About us</Link>
            <Link to="#invest" className="text-slate-600 hover:text-[#224F56] transition">Invest</Link>
            <Link to="#borrow" className="text-slate-600 hover:text-[#224F56] transition">Borrow</Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm text-slate-700 hover:bg-white transition shadow-sm">
              <Globe className="w-4 h-4" /> EN
            </button>
            <button className="md:hidden p-2 rounded-lg hover:bg-slate-100 text-slate-600">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar