'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowUpRight, FiX } from 'react-icons/fi'

type Modal = 'services' | 'pricing' | null
type OpenService = number | null

// ─── Replace image paths with real client screenshots ────────────────────────
const projects = [
  { title: 'Focus Honey',        category: 'Online Store',   image: '/images/focushoney.png',                    href: 'https://focushoney.com' },
  { title: 'Pimpinis',           category: 'Restaurant',     image: '/images/pimpinis1.png',                       href: 'https://pimpinis.vercel.app' },
  { title: 'Folio',              category: 'Portfolio',      image: '/images/folio.png',                          href: 'https://folio-1cvo.vercel.app/' },
  { title: 'Born Seen',          category: 'Fashion',        image: '/images/bornseen.png',                       href: 'https://born-seen.vercel.app/' },
  { title: 'Juro',               category: 'Business',       image: '/images/juro.png',                           href: 'https://juro-one.vercel.app/' },
]

const services = [
  {
    title: 'Basic Website',
    href: '/services/basic-website',
    tags: ['Custom domain', 'Business email', 'Google SEO', 'Mobile-ready', 'Contact form'],
  },
  {
    title: 'Online Store',
    href: '/services/online-store',
    tags: ['Product dashboard', 'Order tracking', 'Paystack', 'MoMo', 'Inventory management'],
  },
  {
    title: 'Digital Marketing',
    href: '/services/digital-marketing',
    tags: ['Google SEO', 'Google Business', 'Social media setup', 'Monthly reports'],
  },
  {
    title: 'Maintenance',
    href: '/services/maintenance',
    tags: ['Monthly updates', 'Security monitoring', 'Backups', 'Content edits'],
  },
  {
    title: 'Custom Development',
    href: '/services/custom-development',
    tags: ['Web apps', 'Booking systems', 'Portals', 'API integrations'],
  },
  {
    title: 'Business Consulting',
    href: '/services/consulting',
    tags: ['Digital strategy', 'Competitor research', 'Growth roadmap'],
  },
]

const plans = [
  {
    name: 'Basic Website',
    price: 'GH₵1,200',
    note: 'One-time',
    features: ['5 professional pages', 'Mobile responsive', 'Contact form', 'Basic SEO', 'Free SSL', '1 month support'],
    featured: false,
  },
  {
    name: 'Online Store',
    price: 'GH₵2,500',
    note: 'One-time',
    features: ['Everything in Basic', 'Full e-commerce', 'MoMo integration', 'Up to 50 products', 'Order management', '3 months support'],
    featured: true,
  },
]

export default function Home() {
  const [modal, setModal] = useState<Modal>(null)
  const [openService, setOpenService] = useState<OpenService>(null)

  return (
    <>
      <div className="h-screen bg-[#0a0a0a] overflow-hidden flex flex-col">

        {/* Header */}
        <header className="flex items-center justify-between px-6 py-5 shrink-0">
          <svg width="160" height="48" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="30" r="3" fill="#c4a747"/>
            <circle cx="35" cy="20" r="3" fill="#c4a747"/>
            <circle cx="35" cy="40" r="3" fill="#c4a747"/>
            <line x1="20" y1="30" x2="35" y2="20" stroke="#c4a747" strokeWidth="1.5"/>
            <line x1="20" y1="30" x2="35" y2="40" stroke="#c4a747" strokeWidth="1.5"/>
            <line x1="35" y1="20" x2="35" y2="40" stroke="#c4a747" strokeWidth="1.5"/>
            <text x="50" y="35" fontFamily="'Playfair Display', serif" fontSize="20" fontWeight="700" fill="#ffffff">Amdeli</text>
            <text x="50" y="48" fontFamily="Inter, sans-serif" fontSize="9" fill="#999999" letterSpacing="1">WEB SOLUTIONS</text>
          </svg>
          <span className="text-[9px] font-mono text-[#3a3a3a] tracking-[0.2em] uppercase">
            Accra · Ghana
          </span>
        </header>

        {/* Grid */}
        <div className="flex-1 grid grid-rows-[2fr_1fr_1fr_1fr_1fr] md:grid-cols-[1fr_380px] md:grid-rows-[1fr_1fr_1fr_1fr_1fr] min-h-0">

          {/* ① Hero image — promotional text */}
          <div className="md:row-span-5 relative overflow-hidden border-t border-[#1a1a1a]">
            <img
              src="https://picsum.photos/seed/accrawork/900/700"
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/95 via-[#0a0a0a]/30 to-[#0a0a0a]/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/40 to-transparent" />

            {/* Promo text — minimal, bottom-left corner */}
            <div className="absolute bottom-0 left-0 p-6 md:p-8">
              <p className="text-xs text-white/40 font-light leading-relaxed tracking-wide">
                You&apos;re either online<br />or you&apos;re invisible.
              </p>
            </div>
          </div>

          {/* ② Project thumbnails */}
          <div className="relative group border-t border-[#1a1a1a] flex items-center justify-between px-7 md:px-8 hover:bg-white/[0.02] transition-colors md:col-start-2 overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#c4a747] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />
            <div className="shrink-0 mr-4">
              <div className="text-[8px] font-mono text-[#3a3a3a] tracking-[0.25em] uppercase">Portfolio</div>
            </div>
            <div className="flex items-center gap-4 overflow-x-auto scrollbar-none flex-1 h-full py-3 snap-x snap-mandatory">
              {projects.map((p, i) => (
                <a
                  key={i}
                  href={p.href}
                  target={p.href.startsWith('http') ? '_blank' : undefined}
                  rel={p.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  title={p.title}
                  className="snap-start shrink-0 w-[25vw] md:w-16 h-full relative overflow-hidden border border-[#222] hover:border-[#c4a747]/50 transition-colors group/t"
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover opacity-50 group-hover/t:opacity-85 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 px-2 pb-1.5">
                    <div className="text-[7px] text-white/60 group-hover/t:text-white/90 transition-colors truncate leading-tight">{p.title}</div>
                  </div>
                </a>
              ))}
            </div>
            <FiArrowUpRight size={15} className="text-[#2a2a2a] group-hover:text-[#c4a747] transition-colors shrink-0 ml-3" />
          </div>

          {/* ③ Services */}
          <button
            onClick={() => setModal('services')}
            className="relative group flex items-center justify-between px-7 md:px-8 border-t border-[#1a1a1a] hover:bg-white/[0.02] transition-colors text-left overflow-hidden md:col-start-2"
          >
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#c4a747] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />
            <div>
              <div className="text-[8px] font-mono text-[#3a3a3a] tracking-[0.25em] uppercase mb-1">Services</div>
              <div className="text-xs text-[#444] group-hover:text-[#777] transition-colors font-light">
                Websites · Stores · Marketing
              </div>
            </div>
            <FiArrowUpRight size={15} className="text-[#2a2a2a] group-hover:text-[#c4a747] transition-colors shrink-0" />
          </button>

          {/* ④ Pricing */}
          <button
            onClick={() => setModal('pricing')}
            className="relative group flex items-center justify-between px-7 md:px-8 border-t border-[#1a1a1a] hover:bg-white/[0.02] transition-colors text-left overflow-hidden md:col-start-2"
          >
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#c4a747] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />
            <div>
              <div className="text-[8px] font-mono text-[#3a3a3a] tracking-[0.25em] uppercase mb-1">Pricing</div>
              <div className="text-xs text-[#444] group-hover:text-[#777] transition-colors font-light">
                From GH₵1,200
              </div>
            </div>
            <FiArrowUpRight size={15} className="text-[#2a2a2a] group-hover:text-[#c4a747] transition-colors shrink-0" />
          </button>

          {/* ⑤ Contact */}
          <div className="relative group border-t border-[#1a1a1a] flex items-center justify-between px-7 md:px-8 hover:bg-white/[0.02] transition-colors md:col-start-2">
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#c4a747] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />
            <div>
              <div className="text-[8px] font-mono text-[#3a3a3a] tracking-[0.25em] uppercase mb-1.5">Contact</div>
              <a href="tel:0540484052" className="block text-xs text-[#444] hover:text-white transition-colors font-mono">
                0540 484 052
              </a>
              <a href="mailto:hello@amdeli.gh" className="block text-xs text-[#444] hover:text-white transition-colors font-mono">
                hello@amdeli.gh
              </a>
            </div>
            <FiArrowUpRight size={13} className="text-[#2a2a2a] group-hover:text-[#c4a747] transition-colors shrink-0" />
          </div>

          {/* ⑥ WhatsApp */}
          <a
            href="https://wa.me/233540484052"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group border-t border-[#1a1a1a] flex items-center justify-between px-7 md:px-8 hover:bg-white/[0.02] transition-colors md:col-start-2 min-h-[56px] md:min-h-0"
          >
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#25D366]/50 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />
            <div className="flex items-center gap-2.5">
              <svg viewBox="0 0 24 24" fill="#25D366" className="w-3 h-3 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <div className="text-[8px] font-mono text-[#3a3a3a] tracking-[0.25em] uppercase">Free Consultation</div>
            </div>
            <FiArrowUpRight size={13} className="text-[#2a2a2a] group-hover:text-[#25D366] transition-colors" />
          </a>

        </div>

      </div>

      {/* ── Modals ─────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {modal && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModal(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
            />

            <motion.div
              key="panel"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 z-50 bg-[#0e0e0e] border-t border-[#1f1f1f] max-h-[85vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-[#1a1a1a] sticky top-0 bg-[#0e0e0e]">
                <span className="text-[8px] font-mono text-[#3a3a3a] tracking-[0.25em] uppercase">
                  {modal === 'services' ? 'Services' : 'Pricing'}
                </span>
                <button onClick={() => setModal(null)} className="text-[#3a3a3a] hover:text-white transition-colors p-1">
                  <FiX size={18} />
                </button>
              </div>

              {modal === 'services' && (
                <div className="divide-y divide-[#111]">
                  {services.map((s, i) => {
                    const isOpen = openService === i
                    return (
                      <div key={i}>
                        <button
                          onClick={() => setOpenService(isOpen ? null : i)}
                          className="w-full flex items-center justify-between px-6 py-4 group hover:bg-white/[0.01] transition-colors text-left"
                        >
                          <span className={`text-xs font-light tracking-wide transition-colors duration-200 ${isOpen ? 'text-white' : 'text-[#666]'}`}>
                            {s.title}
                          </span>
                          <span className={`transition-all duration-200 ${isOpen ? 'rotate-45 text-[#c4a747]' : 'text-[#2a2a2a]'}`}>
                            <FiArrowUpRight size={12} />
                          </span>
                        </button>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.18 }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-4">
                                <p className="text-[10px] text-[#383838] font-light leading-relaxed tracking-wide">
                                  {s.tags.join(' · ')}
                                </p>
                                <a
                                  href={s.href}
                                  className="inline-flex items-center gap-1 mt-2 text-[9px] text-[#333] hover:text-[#666] transition-colors tracking-widest uppercase"
                                >
                                  Details <FiArrowUpRight size={9} />
                                </a>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )
                  })}
                  <div className="px-6 py-5">
                    <a
                      href="tel:0540484052"
                      onClick={() => setModal(null)}
                      className="block w-full py-3.5 text-center text-xs font-light tracking-widest uppercase bg-[#c4a747] text-black hover:bg-[#d4b757] transition-colors"
                    >
                      Discuss your project
                    </a>
                  </div>
                </div>
              )}

              {modal === 'pricing' && (
                <div className="divide-y divide-[#111]">
                  {plans.map((p, i) => (
                    <div key={i} className="px-6 py-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="text-[8px] font-mono text-[#2a2a2a] tracking-[0.25em] uppercase mb-2">{p.name}</div>
                          <div className="text-base font-mono text-[#666]">{p.price}</div>
                        </div>
                        <div className="text-[8px] font-mono text-[#222] tracking-wider uppercase pt-0.5">{p.note}</div>
                      </div>
                      <ul className="space-y-1.5 mb-5">
                        {p.features.map((f, j) => (
                          <li key={j} className="flex items-start gap-2">
                            <span className="text-[#252525] text-[10px] mt-0.5 shrink-0">—</span>
                            <span className="text-[10px] text-[#383838] font-light leading-relaxed">{f}</span>
                          </li>
                        ))}
                      </ul>
                      <a
                        href="tel:0540484052"
                        onClick={() => setModal(null)}
                        className="block w-full py-3 text-center text-[10px] font-light tracking-widest uppercase border border-[#1f1f1f] text-[#3a3a3a] hover:border-[#c4a747]/30 hover:text-[#666] transition-colors"
                      >
                        Get started
                      </a>
                    </div>
                  ))}
                  <div className="px-6 py-4">
                    <p className="text-[9px] text-[#252525] font-mono tracking-wide">MoMo · Bank transfer · Cash accepted</p>
                  </div>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
