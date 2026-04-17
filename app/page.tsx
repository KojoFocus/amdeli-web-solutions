import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'

const projects = [
  { title: 'Focus Honey',  image: '/images/focushoney.png', href: 'https://focushoney.com' },
  { title: 'Pimpinis',    image: '/images/pimpinis1.png',  href: 'https://pimpinis.vercel.app' },
  { title: 'Folio',       image: '/images/folio.png',      href: 'https://folio-1cvo.vercel.app/' },
  { title: 'Juro',        image: '/images/juro.png',       href: 'https://juro-one.vercel.app/' },
  { title: 'Born Seen',   image: '/images/bornseen.png',   href: 'https://born-seen.vercel.app/' },
]

export default function Home() {
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
          <text x="50" y="48" fontFamily="Inter, sans-serif" fontSize="9" fill="#aaaaaa" letterSpacing="1">WEB SOLUTIONS</text>
        </svg>
        <Link href="/about" className="text-[9px] font-mono text-[#777] hover:text-[#bbb] transition-colors tracking-[0.2em] uppercase">
          About Us
        </Link>
      </header>

      {/* Grid */}
      <div className="flex-1 grid grid-rows-[2fr_repeat(4,1fr)] md:grid-cols-[1fr_380px] md:grid-rows-[repeat(4,1fr)] min-h-0">

        {/* ① Hero */}
        <div className="md:row-span-4 relative overflow-hidden border-t border-[#1a1a1a]">
          <img
            src="https://picsum.photos/seed/accrawork/900/700"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/95 via-[#141414]/30 to-[#141414]/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#141414]/40 to-transparent" />
        </div>

        {/* ② Portfolio */}
        <div className="relative group border-t border-[#1a1a1a] flex items-center justify-between px-7 md:px-8 hover:bg-white/[0.02] transition-colors md:col-start-2 overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#c4a747] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />
          <div className="shrink-0 mr-4">
            <div className="text-[8px] font-mono text-[#777] tracking-[0.25em] uppercase">Portfolio</div>
          </div>
          <div className="flex items-center gap-3 overflow-x-auto scrollbar-none flex-1 h-full py-2.5 snap-x snap-mandatory">
            {projects.map((p) => (
              <a
                key={p.href}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                title={p.title}
                className="snap-start shrink-0 w-[22vw] md:w-14 h-full max-h-16 relative overflow-hidden border border-[#222] hover:border-[#c4a747]/50 transition-colors group/t"
              >
                <img src={p.image} alt={p.title} className="w-full h-full object-cover opacity-50 group-hover/t:opacity-85 transition-opacity duration-300" />
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
        <Link
          href="/services"
          className="relative group flex items-center justify-between px-7 md:px-8 border-t border-[#1a1a1a] hover:bg-white/[0.02] transition-colors overflow-hidden md:col-start-2"
        >
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#c4a747] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />
          <div>
            <div className="text-[8px] font-mono text-[#777] tracking-[0.25em] uppercase mb-1">Services</div>
            <div className="text-xs text-[#bbb] group-hover:text-[#bbb] transition-colors font-light">
              Websites · Stores · Marketing
            </div>
          </div>
          <FiArrowUpRight size={15} className="text-[#2a2a2a] group-hover:text-[#c4a747] transition-colors shrink-0" />
        </Link>

        {/* ④ Pricing */}
        <Link
          href="/pricing"
          className="relative group flex items-center justify-between px-7 md:px-8 border-t border-[#1a1a1a] hover:bg-white/[0.02] transition-colors overflow-hidden md:col-start-2"
        >
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#c4a747] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />
          <div>
            <div className="text-[8px] font-mono text-[#777] tracking-[0.25em] uppercase mb-1">Pricing</div>
            <div className="text-xs text-[#bbb] group-hover:text-[#bbb] transition-colors font-light">
              From GH₵1,200
            </div>
          </div>
          <FiArrowUpRight size={15} className="text-[#2a2a2a] group-hover:text-[#c4a747] transition-colors shrink-0" />
        </Link>

        {/* ⑤ Contact */}
        <div className="relative group border-t border-[#1a1a1a] flex items-center justify-between px-7 md:px-8 hover:bg-white/[0.02] transition-colors md:col-start-2">
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#c4a747] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />
          <div>
            <div className="text-[8px] font-mono text-[#777] tracking-[0.25em] uppercase mb-1">Contact</div>
            <a href="tel:0540484052" className="block text-[10px] text-[#bbb] hover:text-[#bbb] transition-colors font-mono leading-snug">0540 484 052</a>
            <a href="mailto:hello@amdeli.gh" className="block text-[10px] text-[#bbb] hover:text-[#bbb] transition-colors font-mono leading-snug">hello@amdeli.gh</a>
            <a href="https://wa.me/233540484052" target="_blank" rel="noopener noreferrer" className="block text-[10px] text-[#bbb] hover:text-[#bbb] transition-colors font-mono leading-snug">WhatsApp</a>
          </div>
          <FiArrowUpRight size={13} className="text-[#2a2a2a] group-hover:text-[#c4a747] transition-colors shrink-0" />
        </div>

      </div>
    </div>
  )
}
