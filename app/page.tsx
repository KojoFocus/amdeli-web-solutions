import Link from 'next/link'
import Image from 'next/image'
import { FiArrowUpRight } from 'react-icons/fi'

const projects = [
  { title: 'Focus Honey', image: '/images/focushoney.png', href: 'https://focushoney.com' },
  { title: 'Pimpinis', image: '/images/pimpinis1.png', href: 'https://pimpinis.vercel.app' },
  { title: 'Folio', image: '/images/folio.png', href: 'https://folio-1cvo.vercel.app/' },
  { title: 'Juro', image: '/images/juro.png', href: 'https://juro-one.vercel.app/' },
  { title: 'Born Seen', image: '/images/bornseen.png', href: 'https://born-seen.vercel.app/' },
]

export default function Home() {
  const panelRowClass =
    'relative group flex items-center justify-between px-7 md:px-8 border-t border-[#1a1a1a] hover:bg-white/[0.02] md:col-start-2 min-h-[88px] transition-colors duration-200'
  const accentBarClass =
    'absolute left-0 top-0 bottom-0 w-[2px] bg-[#c4a747] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom'
  const eyebrowClass = 'text-[11px] font-mono text-[#b3b3b3] tracking-[0.14em] uppercase'
  const valueClass = 'text-sm md:text-[15px] text-[#d0d0d0] group-hover:text-[#f0f0f0] font-light'
  const arrowClass =
    'text-[#7f7f7f] group-hover:text-[#c4a747] shrink-0 opacity-60 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-200'

  return (
    <div className="h-[100dvh] bg-[#141414] overflow-hidden flex flex-col">
      <header className="flex items-center justify-between px-6 py-5 shrink-0">
        <svg width="160" height="48" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="30" r="3" fill="#c4a747" />
          <circle cx="35" cy="20" r="3" fill="#c4a747" />
          <circle cx="35" cy="40" r="3" fill="#c4a747" />
          <line x1="20" y1="30" x2="35" y2="20" stroke="#c4a747" strokeWidth="1.5" />
          <line x1="20" y1="30" x2="35" y2="40" stroke="#c4a747" strokeWidth="1.5" />
          <line x1="35" y1="20" x2="35" y2="40" stroke="#c4a747" strokeWidth="1.5" />
          <text x="50" y="35" fontFamily="Inter, sans-serif" fontSize="20" fontWeight="400" fill="#cccccc">Amdeli</text>
          <text x="50" y="48" fontFamily="Inter, sans-serif" fontSize="9" fill="#aaaaaa" letterSpacing="0.6">TECH SOLUTIONS</text>
        </svg>
        <Link href="/about" className="text-xs font-mono text-[#b3b3b3] hover:text-[#e0e0e0] tracking-[0.14em] uppercase min-h-[44px] inline-flex items-center">
          About Us
        </Link>
      </header>

      <div className="flex-1 grid grid-rows-[2fr_repeat(4,1fr)] md:grid-cols-[1fr_380px] md:grid-rows-[repeat(4,1fr)] min-h-0">
        <div className="md:row-span-4 relative overflow-hidden border-t border-[#1a1a1a]">
          <Image src="/images/hero-image.png" alt="Amdeli web design showcase" fill priority className="absolute inset-0 w-full h-full object-cover opacity-55" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/90 via-[#141414]/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#141414]/30 to-transparent" />
        </div>

        <div className={`${panelRowClass} overflow-hidden`}>
          <div className={accentBarClass} />
          <div className="shrink-0 min-w-[104px] pr-4">
            <div className={eyebrowClass}>Portfolio</div>
            <p className="text-[10px] uppercase tracking-[0.1em] text-[#666] mt-1">Tap a project</p>
          </div>
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none flex-1 h-full py-2.5 snap-x snap-mandatory">
            {projects.map((p, i) => (
              <a
                key={p.href}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                title={p.title}
                aria-label={`Open ${p.title} project`}
                className="snap-start shrink-0 w-[86px] md:w-[92px] h-14 md:h-16 relative overflow-hidden border border-[#2b2b2b] hover:border-[#c4a747]/60 transition-all duration-200 group/t cursor-pointer hover:-translate-y-[1px]"
              >
                <Image src={p.image} alt={p.title} fill sizes="92px" className={`w-full h-full object-cover ${i === 0 ? 'opacity-75' : 'opacity-58'} group-hover/t:opacity-90 transition-opacity duration-300`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 px-2 pb-1.5">
                  <div className="text-[10px] text-white/80 group-hover/t:text-white transition-colors truncate leading-tight font-medium">{p.title}</div>
                </div>
              </a>
            ))}
          </div>
          <FiArrowUpRight size={16} className={`${arrowClass} ml-3`} />
        </div>

        <Link href="/services" className={`${panelRowClass} overflow-hidden`}>
          <div className={accentBarClass} />
          <div>
            <div className={`${eyebrowClass} mb-1`}>Services</div>
            <div className={valueClass}>Websites · Stores · Marketing</div>
          </div>
          <FiArrowUpRight size={16} className={arrowClass} />
        </Link>

        <Link href="/pricing" className={`${panelRowClass} overflow-hidden`}>
          <div className={accentBarClass} />
          <div>
            <div className={`${eyebrowClass} mb-1`}>Pricing</div>
            <div className={valueClass}>From GH₵1,200</div>
          </div>
          <FiArrowUpRight size={16} className={arrowClass} />
        </Link>

        <div className={panelRowClass}>
          <div className={accentBarClass} />
          <div>
            <div className={`${eyebrowClass} mb-1`}>Contact</div>
            <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.1em]">
              <a href="https://wa.me/233540484052" target="_blank" rel="noopener noreferrer" className="text-[#c4a747] hover:text-[#d4b757] font-medium">
                WhatsApp
              </a>
              <span className="text-[#3a3a3a]">•</span>
              <a href="mailto:hello@amdeli.gh" className="text-[#8f8f8f] hover:text-[#d0d0d0]">Email</a>
              <span className="text-[#3a3a3a]">•</span>
              <a href="tel:0540484052" className="text-[#8f8f8f] hover:text-[#d0d0d0]">Call</a>
            </div>
          </div>
          <FiArrowUpRight size={16} className={arrowClass} />
        </div>
      </div>
    </div>
  )
}