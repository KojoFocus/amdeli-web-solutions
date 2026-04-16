'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowUpRight, FiX, FiCheck } from 'react-icons/fi'

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
          <span className="font-serif font-bold text-white text-base tracking-tight">
            Amdeli <span className="text-[#c4a747]">Web Solutions</span>
          </span>
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
              <div className="text-[8px] font-mono text-[#3a3a3a] tracking-[0.25em] uppercase">Work</div>
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
              <div className="text-[8px] font-mono text-[#3a3a3a] tracking-[0.25em] uppercase mb-1.5">Services</div>
              <div className="text-sm text-[#666] group-hover:text-white transition-colors font-light">
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
              <div className="text-[8px] font-mono text-[#3a3a3a] tracking-[0.25em] uppercase mb-1.5">Pricing</div>
              <div className="text-sm text-[#666] group-hover:text-white transition-colors font-light">
                Starting from <span className="font-mono">GH₵1,200</span>
              </div>
            </div>
            <FiArrowUpRight size={15} className="text-[#2a2a2a] group-hover:text-[#c4a747] transition-colors shrink-0" />
          </button>

          {/* ⑤ Contact */}
          <div className="relative group border-t border-[#1a1a1a] flex items-center justify-between px-7 md:px-8 hover:bg-white/[0.02] transition-colors overflow-hidden md:col-start-2">
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#c4a747] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />
            <div>
              <div className="text-[8px] font-mono text-[#3a3a3a] tracking-[0.25em] uppercase mb-1.5">Contact</div>
              <a href="tel:0540484052" className="block text-sm text-[#666] hover:text-white transition-colors font-mono font-light">
                0540 484 052
              </a>
              <a href="mailto:hello@amdeli.gh" className="block text-sm text-[#666] hover:text-white transition-colors font-mono font-light">
                hello@amdeli.gh
              </a>
            </div>
            <FiArrowUpRight size={15} className="text-[#2a2a2a] group-hover:text-[#c4a747] transition-colors shrink-0" />
          </div>

          {/* ⑥ Quote */}
          <div className="border-t border-[#1a1a1a] flex flex-col justify-center px-7 md:px-8 md:col-start-2">
            <p className="text-sm font-serif text-[#272727] leading-relaxed italic">
              &ldquo;Your website works<br />while you sleep.&rdquo;
            </p>
            <span className="text-[8px] font-mono text-[#1f1f1f] tracking-[0.2em] uppercase mt-2">
              Amdeli · Accra
            </span>
          </div>

        </div>

        {/* WhatsApp strip */}
        <a
          href="https://wa.me/233540484052"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 group flex items-center justify-between px-6 py-4 border-t border-[#1a1a1a] hover:bg-white/[0.02] transition-colors"
        >
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 24 24" fill="#25D366" className="w-3.5 h-3.5 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span className="text-[11px] text-[#3a3a3a] group-hover:text-[#666] transition-colors tracking-wide">
              WhatsApp — free consultation
            </span>
          </div>
          <FiArrowUpRight size={13} className="text-[#222] group-hover:text-[#c4a747] transition-colors" />
        </a>

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
                <div className="divide-y divide-[#141414]">
                  {services.map((s, i) => {
                    const isOpen = openService === i
                    return (
                      <div key={i}>
                        <button
                          onClick={() => setOpenService(isOpen ? null : i)}
                          className="w-full flex items-center justify-between px-6 py-5 group hover:bg-white/[0.02] transition-colors text-left"
                        >
                          <span className="text-sm font-medium text-white">{s.title}</span>
                          <span className={`text-[#444] group-hover:text-[#c4a747] transition-all duration-200 ${isOpen ? 'rotate-45 text-[#c4a747]' : ''}`}>
                            <FiArrowUpRight size={13} />
                          </span>
                        </button>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-5 flex flex-wrap gap-2">
                                {s.tags.map((tag, j) => (
                                  <span key={j} className="text-[9px] text-[#555] border border-[#1f1f1f] px-2.5 py-1 tracking-wide">
                                    {tag}
                                  </span>
                                ))}
                                <a
                                  href={s.href}
                                  className="ml-auto text-[9px] text-[#c4a747] tracking-wide flex items-center gap-1 hover:opacity-70 transition-opacity"
                                >
                                  Learn more <FiArrowUpRight size={10} />
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
                      className="block w-full py-3.5 text-center text-sm font-medium bg-[#c4a747] text-black hover:bg-[#d4b757] transition-colors"
                    >
                      Discuss your project
                    </a>
                  </div>
                </div>
              )}

              {modal === 'pricing' && (
                <div className="px-6 py-6 space-y-4">
                  {plans.map((p, i) => (
                    <div key={i} className={`border p-6 ${p.featured ? 'border-[#c4a747]/50' : 'border-[#1f1f1f]'}`}>
                      {p.featured && (
                        <div className="text-[8px] font-mono text-[#c4a747] tracking-[0.25em] uppercase mb-4">Most popular</div>
                      )}
                      <div className="flex items-end justify-between mb-5">
                        <div>
                          <div className="text-xs text-[#555] mb-1">{p.name}</div>
                          <div className={`text-3xl font-mono font-bold ${p.featured ? 'text-[#c4a747]' : 'text-white'}`}>
                            {p.price}
                          </div>
                        </div>
                        <div className="text-[9px] font-mono text-[#3a3a3a] tracking-wider uppercase pb-1">{p.note}</div>
                      </div>
                      <ul className="space-y-2.5 mb-5">
                        {p.features.map((f, j) => (
                          <li key={j} className="flex items-center gap-2.5 text-xs text-[#666]">
                            <FiCheck size={11} className="text-[#c4a747] shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <a
                        href="tel:0540484052"
                        onClick={() => setModal(null)}
                        className={`block w-full py-3 text-center text-sm font-medium transition-colors ${
                          p.featured
                            ? 'bg-[#c4a747] text-black hover:bg-[#d4b757]'
                            : 'border border-[#2a2a2a] text-[#666] hover:border-[#c4a747] hover:text-white'
                        }`}
                      >
                        Get started
                      </a>
                    </div>
                  ))}
                  <p className="text-center text-[10px] text-[#333] pt-2">MoMo · Bank transfer · Cash accepted</p>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
