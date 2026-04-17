'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FiArrowUpRight, FiArrowLeft } from 'react-icons/fi'

const projects = [
  { title: 'Focus Honey', image: '/images/focushoney.png', href: 'https://focushoney.com' },
  { title: 'Pimpinis',    image: '/images/pimpinis1.png',  href: 'https://pimpinis.vercel.app' },
  { title: 'Folio',       image: '/images/folio.png',      href: 'https://folio-1cvo.vercel.app/' },
  { title: 'Juro',        image: '/images/juro.png',       href: 'https://juro-one.vercel.app/' },
  { title: 'Born Seen',   image: '/images/bornseen.png',   href: 'https://born-seen.vercel.app/' },
]

const services = [
  { title: 'Basic Website',       href: '/services/basic-website',     tags: ['Custom domain', 'Business email', 'Google SEO', 'Mobile-ready', 'Contact form'] },
  { title: 'Online Store',        href: '/services/online-store',      tags: ['Product dashboard', 'Order tracking', 'Paystack', 'MoMo', 'Inventory management'] },
  { title: 'Digital Marketing',   href: '/services/digital-marketing', tags: ['Google SEO', 'Google Business', 'Social media setup', 'Monthly reports'] },
  { title: 'Maintenance',         href: '/services/maintenance',       tags: ['Monthly updates', 'Security monitoring', 'Backups', 'Content edits'] },
  { title: 'Custom Development',  href: '/services/custom-development',tags: ['Web apps', 'Booking systems', 'Portals', 'API integrations'] },
  { title: 'Business Consulting', href: '/services/consulting',        tags: ['Digital strategy', 'Competitor research', 'Growth roadmap'] },
]

const plans = [
  {
    name: 'Basic Website',
    price: 'GH₵1,200',
    note: 'One-time',
    features: ['5 professional pages', 'Mobile responsive', 'Contact form', 'Basic SEO', 'Free SSL', '1 month support'],
    href: '/services/basic-website',
  },
  {
    name: 'Online Store',
    price: 'GH₵2,500',
    note: 'One-time',
    features: ['Everything in Basic', 'Full e-commerce', 'MoMo integration', 'Up to 50 products', 'Order management', '3 months support'],
    href: '/services/online-store',
  },
]

export default function Home() {
  const [modal, setModal] = useState<null | 'services' | 'pricing'>(null)

  const openModal = (name: 'services' | 'pricing') => {
    history.pushState(null, '')
    setModal(name)
  }

  const handleClose = () => {
    history.back()
  }

  useEffect(() => {
    const handlePop = () => setModal(null)
    window.addEventListener('popstate', handlePop)
    return () => window.removeEventListener('popstate', handlePop)
  }, [])

  return (
    <div className="h-[100dvh] bg-[#141414] overflow-hidden flex flex-col">

      {/* Header */}
      <header className="flex items-center justify-between px-6 py-5 shrink-0">
        <svg width="160" height="48" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="30" r="3" fill="#c4a747"/>
          <circle cx="35" cy="20" r="3" fill="#c4a747"/>
          <circle cx="35" cy="40" r="3" fill="#c4a747"/>
          <line x1="20" y1="30" x2="35" y2="20" stroke="#c4a747" strokeWidth="1.5"/>
          <line x1="20" y1="30" x2="35" y2="40" stroke="#c4a747" strokeWidth="1.5"/>
          <line x1="35" y1="20" x2="35" y2="40" stroke="#c4a747" strokeWidth="1.5"/>
          <text x="50" y="35" fontFamily="Inter, sans-serif" fontSize="20" fontWeight="400" fill="#cccccc">Amdeli</text>
          <text x="50" y="48" fontFamily="Inter, sans-serif" fontSize="9" fill="#aaaaaa" letterSpacing="1">TECH SOLUTIONS</text>
        </svg>
        <Link href="/about" className="text-[9px] font-mono text-[#777] hover:text-[#aaa] transition-colors tracking-[0.2em] uppercase">
          About Us
        </Link>
      </header>

      {/* Grid */}
      <div className="flex-1 grid grid-rows-[2fr_repeat(4,1fr)] md:grid-cols-[1fr_380px] md:grid-rows-[repeat(4,1fr)] min-h-0">

        {/* ① Hero */}
        <div className="md:row-span-4 relative overflow-hidden border-t border-[#1a1a1a]">
          <img
            src="/images/hero-image.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/90 via-[#141414]/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#141414]/30 to-transparent" />
        </div>

        {/* ② Portfolio */}
        <div className="relative group border-t border-[#1a1a1a] flex items-center justify-between px-7 md:px-8 hover:bg-white/[0.02] transition-colors md:col-start-2 overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#c4a747] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />
          <div className="shrink-0 mr-4">
            <div className="text-[8px] font-mono text-[#777] tracking-[0.25em] uppercase">Portfolio</div>
          </div>
          <div className="flex items-center gap-3 overflow-x-auto scrollbar-none flex-1 h-full py-2.5 snap-x snap-mandatory">
            {projects.map((p, i) => (
              <a
                key={p.href}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                title={p.title}
                className="snap-start shrink-0 w-[22vw] md:w-14 h-full max-h-16 relative overflow-hidden border border-[#222] hover:border-[#c4a747]/50 transition-colors group/t"
              >
                <img src={p.image} alt={p.title} className={`w-full h-full object-cover ${i === 0 ? 'opacity-65' : 'opacity-50'} group-hover/t:opacity-85 transition-opacity duration-300`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 px-2 pb-1.5">
                  <div className="text-[7px] text-white/30 group-hover/t:text-white/50 transition-colors truncate leading-tight">{p.title}</div>
                </div>
              </a>
            ))}
          </div>
          <FiArrowUpRight size={15} className="text-[#2a2a2a] group-hover:text-[#c4a747] transition-colors shrink-0 ml-3" />
        </div>

        {/* ③ Services */}
        <button
          onClick={() => openModal('services')}
          className="relative group flex items-center justify-between px-7 md:px-8 border-t border-[#1a1a1a] hover:bg-white/[0.02] transition-colors overflow-hidden md:col-start-2 text-left w-full"
        >
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#c4a747] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />
          <div>
            <div className="text-[8px] font-mono text-[#777] tracking-[0.25em] uppercase mb-1">Services</div>
            <div className="text-xs text-[#aaa] font-light">Websites · Stores · Marketing</div>
          </div>
          <FiArrowUpRight size={15} className="text-[#2a2a2a] group-hover:text-[#c4a747] transition-colors shrink-0" />
        </button>

        {/* ④ Pricing */}
        <button
          onClick={() => openModal('pricing')}
          className="relative group flex items-center justify-between px-7 md:px-8 border-t border-[#1a1a1a] hover:bg-white/[0.02] transition-colors overflow-hidden md:col-start-2 text-left w-full"
        >
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#c4a747] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />
          <div>
            <div className="text-[8px] font-mono text-[#777] tracking-[0.25em] uppercase mb-1">Pricing</div>
            <div className="text-xs text-[#aaa] font-light">From GH₵1,200</div>
          </div>
          <FiArrowUpRight size={15} className="text-[#2a2a2a] group-hover:text-[#c4a747] transition-colors shrink-0" />
        </button>

        {/* ⑤ Contact */}
        <div className="relative group border-t border-[#1a1a1a] flex items-center justify-between px-7 md:px-8 hover:bg-white/[0.02] transition-colors md:col-start-2">
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#c4a747] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />
          <div>
            <div className="text-[8px] font-mono text-[#777] tracking-[0.25em] uppercase mb-1">Contact</div>
            <a href="tel:0540484052" className="block text-[10px] text-[#aaa] font-mono leading-snug">0540 484 052</a>
            <a href="mailto:hello@amdeli.gh" className="block text-[10px] text-[#aaa] font-mono leading-snug">hello@amdeli.gh</a>
            <a href="https://wa.me/233540484052" target="_blank" rel="noopener noreferrer" className="block text-[10px] text-[#aaa] font-mono leading-snug">WhatsApp</a>
          </div>
          <FiArrowUpRight size={13} className="text-[#2a2a2a] group-hover:text-[#c4a747] transition-colors shrink-0" />
        </div>

      </div>

      {/* Dim overlay */}
      <div className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 ${modal ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} />

      {/* Pull-up sheet */}
      <div
        className={`fixed inset-x-0 bottom-0 top-16 z-50 bg-[#141414] flex flex-col rounded-t-2xl transition-transform duration-300 ease-out ${
          modal ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <header className="sticky top-0 z-10 flex items-center justify-between px-6 py-5 border-b border-[#1a1a1a] bg-[#141414] shrink-0">
          <button
            onClick={handleClose}
            className="flex items-center gap-2 text-[#777] hover:text-[#bbb] transition-colors"
          >
            <FiArrowLeft size={14} />
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase">Back</span>
          </button>
          <button onClick={handleClose}>
            <svg width="120" height="36" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="30" r="3" fill="#c4a747"/>
              <circle cx="35" cy="20" r="3" fill="#c4a747"/>
              <circle cx="35" cy="40" r="3" fill="#c4a747"/>
              <line x1="20" y1="30" x2="35" y2="20" stroke="#c4a747" strokeWidth="1.5"/>
              <line x1="20" y1="30" x2="35" y2="40" stroke="#c4a747" strokeWidth="1.5"/>
              <line x1="35" y1="20" x2="35" y2="40" stroke="#c4a747" strokeWidth="1.5"/>
              <text x="50" y="35" fontFamily="Inter, sans-serif" fontSize="20" fontWeight="400" fill="#cccccc">Amdeli</text>
              <text x="50" y="48" fontFamily="Inter, sans-serif" fontSize="9" fill="#777777" letterSpacing="1">TECH SOLUTIONS</text>
            </svg>
          </button>
        </header>

        <div className="flex-1 overflow-y-auto">

          {/* Services content */}
          {modal === 'services' && (
            <div className="max-w-xl mx-auto w-full">
              <div className="px-6 py-8">
                <div className="text-[8px] font-mono text-[#777] tracking-[0.25em] uppercase mb-6">Services</div>
              </div>
              <div className="divide-y divide-[#111]">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="flex items-center justify-between px-6 py-5 hover:bg-white/[0.02] transition-colors group"
                  >
                    <div>
                      <div className="text-xs font-light text-[#aaa] tracking-wide mb-1.5">{s.title}</div>
                      <div className="text-[10px] text-[#666] font-light leading-relaxed">{s.tags.join(' · ')}</div>
                    </div>
                    <FiArrowUpRight size={12} className="text-[#333] group-hover:text-[#c4a747] transition-colors shrink-0 ml-4" />
                  </Link>
                ))}
              </div>
              <div className="px-6 py-6 border-t border-[#111]">
                <a
                  href="tel:0540484052"
                  className="flex items-center justify-between px-5 py-3.5 bg-[#c4a747] text-black text-[10px] font-light tracking-widest uppercase hover:bg-[#d4b757] transition-colors"
                >
                  <span>Discuss your project</span>
                  <FiArrowUpRight size={12} />
                </a>
              </div>
            </div>
          )}

          {/* Pricing content */}
          {modal === 'pricing' && (
            <div className="max-w-xl mx-auto w-full">
              <div className="px-6 py-8">
                <div className="text-[8px] font-mono text-[#777] tracking-[0.25em] uppercase mb-2">Pricing</div>
                <p className="text-[10px] text-[#777] font-light leading-relaxed">Custom projects are quoted on scope. Reach out for an estimate.</p>
              </div>
              <div className="divide-y divide-[#111]">
                {plans.map((p) => (
                  <div key={p.name} className="px-6 py-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="text-[8px] font-mono text-[#777] tracking-[0.25em] uppercase mb-2">{p.name}</div>
                        <div className="text-xs font-light text-[#aaa] tracking-wide">{p.price}</div>
                      </div>
                      <div className="text-[8px] font-mono text-[#444] tracking-wider uppercase pt-0.5">{p.note}</div>
                    </div>
                    <ul className="space-y-1.5 mb-5">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <span className="text-[#333] text-[10px] mt-0.5 shrink-0">—</span>
                          <span className="text-[10px] text-[#777] font-light leading-relaxed">{f}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={p.href}
                      className="flex items-center justify-between px-5 py-3 border border-[#1a1a1a] text-[#444] text-[10px] font-light tracking-widest uppercase hover:border-[#333] hover:text-[#aaa] transition-colors"
                    >
                      <span>View details</span>
                      <FiArrowUpRight size={10} />
                    </Link>
                  </div>
                ))}
              </div>
              <div className="px-6 py-4 border-t border-[#111]">
                <p className="text-[9px] text-[#333] font-mono tracking-wide">MoMo · Bank transfer · Cash accepted</p>
              </div>
              <div className="px-6 py-6 border-t border-[#111]">
                <a
                  href="tel:0540484052"
                  className="flex items-center justify-between px-5 py-3.5 bg-[#c4a747] text-black text-[10px] font-light tracking-widest uppercase hover:bg-[#d4b757] transition-colors"
                >
                  <span>Get started</span>
                  <FiArrowUpRight size={12} />
                </a>
              </div>
            </div>
          )}

        </div>
      </div>

    </div>
  )
}
