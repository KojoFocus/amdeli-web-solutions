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
  { slug: 'basic-website',     title: 'Basic Website',       tags: ['Custom domain', 'Business email', 'Google SEO', 'Mobile-ready', 'Contact form'] },
  { slug: 'online-store',      title: 'Online Store',        tags: ['Product dashboard', 'Order tracking', 'Paystack', 'MoMo', 'Inventory management'] },
  { slug: 'digital-marketing', title: 'Digital Marketing',   tags: ['Google SEO', 'Google Business', 'Social media setup', 'Monthly reports'] },
  { slug: 'maintenance',       title: 'Maintenance',         tags: ['Monthly updates', 'Security monitoring', 'Backups', 'Content edits'] },
  { slug: 'custom-development',title: 'Custom Development',  tags: ['Web apps', 'Booking systems', 'Portals', 'API integrations'] },
  { slug: 'consulting',        title: 'Business Consulting', tags: ['Digital strategy', 'Competitor research', 'Growth roadmap'] },
]

const serviceDetails: Record<string, {
  title: string
  tagline: string
  price?: string
  priceNote?: string
  includes: string[]
  details: { heading: string; body: string }[]
}> = {
  'basic-website': {
    title: 'Basic Website',
    tagline: 'Your business online in weeks — not months.',
    price: 'GH₵1,200',
    priceNote: 'One-time payment',
    includes: [
      'Domain connection (e.g. yourbusiness.com)',
      'Business email (you@yourbusiness.com)',
      '5 professionally designed pages',
      'Mobile-ready — works on every phone',
      'Google SEO setup',
      'Contact form',
      'Free SSL certificate',
      '1 month free support after launch',
      'Full source code & complete ownership',
    ],
    details: [
      { heading: 'Custom Domain & Email', body: 'You register your domain and we connect everything — including a professional business email so you look credible from day one.' },
      { heading: 'Google SEO', body: 'Your site is set up so Google can find and rank it. We handle the technical side — meta tags, sitemap, page speed.' },
      { heading: 'Mobile-First', body: "Built to look and work perfectly on phones first — because that's where your customers are." },
      { heading: 'Complete Ownership', body: 'You own everything. We hand over the full source code, packaged so any developer can pick it up and continue the work — no lock-in.' },
    ],
  },
  'online-store': {
    title: 'Online Store',
    tagline: 'Sell your products 24/7 — even while you sleep.',
    price: 'GH₵2,500',
    priceNote: 'One-time payment',
    includes: [
      'Everything in Basic Website',
      'Product dashboard — add, edit & delete products',
      'Order tracking system',
      'Paystack payment integration',
      'MoMo payment integration',
      'Inventory management',
      'Customer accounts',
      'Up to 50 products',
      '3 months free support after launch',
      'Full source code & complete ownership',
    ],
    details: [
      { heading: 'Product Dashboard', body: 'A simple backend where you can add products, set prices, upload photos, and manage stock yourself — no developer needed.' },
      { heading: 'Paystack & MoMo', body: 'Customers pay via card, Paystack, or Mobile Money. Funds go straight to your account.' },
      { heading: 'Order Tracking', body: 'You and your customers can track every order from placed to delivered. No more chasing customers on WhatsApp.' },
    ],
  },
  'digital-marketing': {
    title: 'Digital Marketing',
    tagline: 'Get found by people already looking for what you sell.',
    includes: [
      'Google SEO optimisation',
      'Google Business profile setup',
      'Instagram & Facebook setup',
      'TikTok setup (optional)',
      'Content strategy',
      'Monthly performance reports',
    ],
    details: [
      { heading: 'Google SEO', body: 'We optimise your site so it ranks higher on Google when people search for your product or service.' },
      { heading: 'Google Business', body: 'Your business appears on Google Maps and search results with your hours, photos, and contact info.' },
      { heading: 'Social Media', body: 'We set up and optimise your social pages so they look professional and drive traffic to your site.' },
    ],
  },
  'maintenance': {
    title: 'Maintenance',
    tagline: "We keep your site running so you don't have to think about it.",
    includes: [
      'Monthly software & security updates',
      'Regular backups',
      'Performance monitoring',
      'Content edits & updates',
      'Bug fixes',
      'Technical support',
    ],
    details: [
      { heading: 'Security & Backups', body: 'Your site is backed up regularly and monitored for threats. If anything goes wrong, we restore it fast.' },
      { heading: 'Content Updates', body: 'Need to change a price, add a photo, or update your menu? We handle it — usually within 24 hours.' },
      { heading: 'Performance', body: 'We monitor your site speed and fix issues before they affect your customers or your Google ranking.' },
    ],
  },
  'custom-development': {
    title: 'Custom Development',
    tagline: 'Something specific in mind? We build it.',
    includes: [
      'Custom web applications',
      'Booking & appointment systems',
      'Customer portals',
      'API integrations',
      'Database design',
      'Scalable architecture',
      'Ongoing support',
      'Full source code & complete ownership',
    ],
    details: [
      { heading: 'Built to Your Spec', body: "If your business has a unique process or workflow, we build the exact tool you need — not a generic template." },
      { heading: 'Integrations', body: 'Connect your site to payment systems, inventory tools, accounting software, or any third-party service.' },
      { heading: 'Pricing', body: "Custom projects are quoted based on scope. Reach out and we'll give you an honest estimate within 24 hours." },
    ],
  },
  'consulting': {
    title: 'Business Consulting',
    tagline: 'A clear digital plan for where your business is going.',
    includes: [
      'One-on-one strategy session',
      'Digital presence audit',
      'Competitor research',
      'Growth roadmap',
      'Tool & platform recommendations',
      'Follow-up support',
    ],
    details: [
      { heading: 'Audit', body: "We look at your current online presence — website, social, Google — and tell you exactly what's working and what isn't." },
      { heading: 'Roadmap', body: 'You leave with a clear, prioritised plan of what to build or fix first to get the most impact for your money.' },
      { heading: 'No Jargon', body: "We speak plain English. You'll understand every recommendation and why we're making it." },
    ],
  },
}

const plans = [
  {
    name: 'Basic Website',
    price: 'GH₵1,200',
    note: 'One-time',
    features: ['5 professional pages', 'Mobile responsive', 'Contact form', 'Basic SEO', 'Free SSL', '1 month support'],
    slug: 'basic-website',
  },
  {
    name: 'Online Store',
    price: 'GH₵2,500',
    note: 'One-time',
    features: ['Everything in Basic', 'Full e-commerce', 'MoMo integration', 'Up to 50 products', 'Order management', '3 months support'],
    slug: 'online-store',
  },
]

const Logo = () => (
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
)

export default function Home() {
  const [modal, setModal] = useState<null | 'services' | 'pricing'>(null)
  const [activeService, setActiveService] = useState<string | null>(null)

  const openModal = (name: 'services' | 'pricing') => {
    history.pushState(null, '')
    setModal(name)
  }

  const openService = (slug: string) => {
    history.pushState(null, '')
    setActiveService(slug)
  }

  const handleClose = () => {
    history.back()
  }

  useEffect(() => {
    const handlePop = () => {
      if (activeService) {
        setActiveService(null)
      } else {
        setModal(null)
      }
    }
    window.addEventListener('popstate', handlePop)
    return () => window.removeEventListener('popstate', handlePop)
  }, [activeService])

  const detail = activeService ? serviceDetails[activeService] : null

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
          <img src="/images/hero-image.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-55" />
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
              <a key={p.href} href={p.href} target="_blank" rel="noopener noreferrer" title={p.title}
                className="snap-start shrink-0 w-[22vw] md:w-14 h-full max-h-16 relative overflow-hidden border border-[#222] hover:border-[#c4a747]/50 transition-colors group/t">
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
        <button onClick={() => openModal('services')}
          className="relative group flex items-center justify-between px-7 md:px-8 border-t border-[#1a1a1a] hover:bg-white/[0.02] transition-colors overflow-hidden md:col-start-2 text-left w-full">
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#c4a747] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />
          <div>
            <div className="text-[8px] font-mono text-[#777] tracking-[0.25em] uppercase mb-1">Services</div>
            <div className="text-xs text-[#aaa] font-light">Websites · Stores · Marketing</div>
          </div>
          <FiArrowUpRight size={15} className="text-[#2a2a2a] group-hover:text-[#c4a747] transition-colors shrink-0" />
        </button>

        {/* ④ Pricing */}
        <button onClick={() => openModal('pricing')}
          className="relative group flex items-center justify-between px-7 md:px-8 border-t border-[#1a1a1a] hover:bg-white/[0.02] transition-colors overflow-hidden md:col-start-2 text-left w-full">
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

      {/* Slide-up modal */}
      <div className={`fixed inset-0 z-50 bg-[#141414] flex flex-col transition-transform duration-300 ease-out ${modal ? 'translate-y-0' : 'translate-y-full'}`}>

        {/* Modal header */}
        <header className="sticky top-0 z-10 flex items-center justify-between px-6 py-5 border-b border-[#1a1a1a] bg-[#141414] shrink-0">
          <button onClick={handleClose} className="flex items-center gap-2 text-[#777] hover:text-[#bbb] transition-colors">
            <FiArrowLeft size={14} />
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase">Back</span>
          </button>
          <button onClick={handleClose}><Logo /></button>
        </header>

        {/* Modal body — services list + detail panels */}
        <div className="flex-1 overflow-hidden relative">

          {/* Services list */}
          <div className={`absolute inset-0 overflow-y-auto transition-transform duration-300 ease-out ${activeService ? '-translate-x-full' : 'translate-x-0'}`}>
            {modal === 'services' && (
              <div className="max-w-xl mx-auto w-full">
                <div className="px-6 py-8">
                  <div className="text-[8px] font-mono text-[#777] tracking-[0.25em] uppercase">Services</div>
                </div>
                <div className="divide-y divide-[#111]">
                  {services.map((s) => {
                    const d = serviceDetails[s.slug]
                    return (
                      <div key={s.slug} className="px-6 py-7">
                        <div className="flex items-start justify-between mb-2">
                          <div className="text-xs font-light text-[#aaa] tracking-wide">{s.title}</div>
                          {d.price && <div className="text-[9px] font-mono text-[#c4a747] tracking-wide shrink-0 ml-4">{d.price}</div>}
                        </div>
                        <p className="text-[10px] text-[#666] font-light leading-relaxed mb-5">{d.tagline}</p>
                        <div className="space-y-4">
                          {d.details.map((item, i) => (
                            <div key={i}>
                              <div className="text-[8px] font-mono text-[#555] tracking-[0.2em] uppercase mb-1">{item.heading}</div>
                              <p className="text-[10px] text-[#666] font-light leading-relaxed">{item.body}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                  })}
                </div>
                <div className="px-6 py-6 border-t border-[#111]">
                  <a href="tel:0540484052"
                    className="flex items-center justify-between px-5 py-3.5 bg-[#c4a747] text-black text-[10px] font-light tracking-widest uppercase hover:bg-[#d4b757] transition-colors">
                    <span>Discuss your project</span>
                    <FiArrowUpRight size={12} />
                  </a>
                </div>
              </div>
            )}
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
                      <button onClick={() => openService(p.slug)}
                        className="w-full flex items-center justify-between px-5 py-3 border border-[#1a1a1a] text-[#444] text-[10px] font-light tracking-widest uppercase hover:border-[#333] hover:text-[#aaa] transition-colors">
                        <span>View details</span>
                        <FiArrowUpRight size={10} />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="px-6 py-4 border-t border-[#111]">
                  <p className="text-[9px] text-[#333] font-mono tracking-wide">MoMo · Bank transfer · Cash accepted</p>
                </div>
                <div className="px-6 py-6 border-t border-[#111]">
                  <a href="tel:0540484052"
                    className="flex items-center justify-between px-5 py-3.5 bg-[#c4a747] text-black text-[10px] font-light tracking-widest uppercase hover:bg-[#d4b757] transition-colors">
                    <span>Get started</span>
                    <FiArrowUpRight size={12} />
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Service detail panel */}
          <div className={`absolute inset-0 overflow-y-auto transition-transform duration-300 ease-out ${activeService ? 'translate-x-0' : 'translate-x-full'}`}>
            {detail && (
              <div className="max-w-xl mx-auto w-full divide-y divide-[#111]">
                <div className="px-6 py-10">
                  <div className="text-[8px] font-mono text-[#777] tracking-[0.25em] uppercase mb-5">Service</div>
                  <h1 className="text-sm font-light text-[#aaa] leading-snug mb-3 tracking-wide">{detail.title}</h1>
                  <p className="text-[10px] text-[#aaa] font-light leading-relaxed tracking-wide">{detail.tagline}</p>
                </div>
                {detail.price && (
                  <div className="px-6 py-6">
                    <div className="text-[8px] font-mono text-[#777] tracking-[0.25em] uppercase mb-3">Pricing</div>
                    <div className="text-sm font-light text-[#aaa] tracking-wide">{detail.price}</div>
                    <div className="text-[8px] text-[#777] font-mono mt-1 tracking-[0.2em] uppercase">{detail.priceNote}</div>
                  </div>
                )}
                <div className="px-6 py-6">
                  <div className="text-[8px] font-mono text-[#777] tracking-[0.25em] uppercase mb-4">Included</div>
                  <ul className="space-y-2">
                    {detail.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="text-[#777] text-xs mt-0.5 shrink-0">—</span>
                        <span className="text-[10px] text-[#aaa] font-light leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-6 py-6 space-y-5">
                  {detail.details.map((d, i) => (
                    <div key={i}>
                      <div className="text-[8px] font-mono text-[#777] tracking-[0.25em] uppercase mb-1.5">{d.heading}</div>
                      <p className="text-[10px] text-[#aaa] font-light leading-relaxed">{d.body}</p>
                    </div>
                  ))}
                </div>
                <div className="px-6 py-6 flex flex-col gap-2">
                  <a href="tel:0540484052"
                    className="flex items-center justify-between px-5 py-3.5 bg-[#c4a747] text-black text-[10px] font-light tracking-widest uppercase hover:bg-[#d4b757] transition-colors">
                    <span>Call — 0540 484 052</span>
                    <FiArrowUpRight size={12} />
                  </a>
                  <a href="https://wa.me/233540484052" target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-between px-5 py-3.5 border border-[#1a1a1a] text-[#2a2a2a] text-[10px] font-light tracking-widest uppercase hover:border-[#333] hover:text-[#777] transition-colors">
                    <span>WhatsApp</span>
                    <FiArrowUpRight size={12} />
                  </a>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>

    </div>
  )
}
