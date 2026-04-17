import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'
import BackButton from '@/app/components/BackButton'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col font-light text-[#999]" style={{ fontFamily: 'Inter, sans-serif' }}>

      {/* Header */}
      <header className="sticky top-0 z-10 flex items-center justify-between px-6 py-5 border-b border-[#1a1a1a] bg-[#0a0a0a]">
        <BackButton />
        <Link href="/">
          <svg width="120" height="36" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="30" r="3" fill="#c4a747"/>
          <circle cx="35" cy="20" r="3" fill="#c4a747"/>
          <circle cx="35" cy="40" r="3" fill="#c4a747"/>
          <line x1="20" y1="30" x2="35" y2="20" stroke="#c4a747" strokeWidth="1.5"/>
          <line x1="20" y1="30" x2="35" y2="40" stroke="#c4a747" strokeWidth="1.5"/>
          <line x1="35" y1="20" x2="35" y2="40" stroke="#c4a747" strokeWidth="1.5"/>
          <text x="50" y="35" fontFamily="Inter, sans-serif" fontSize="20" fontWeight="400" fill="#aaaaaa">Amdeli</text>
          <text x="50" y="48" fontFamily="Inter, sans-serif" fontSize="9" fill="#555555" letterSpacing="1">WEB SOLUTIONS</text>
          </svg>
        </Link>
      </header>

      <div className="flex-1 max-w-xl mx-auto w-full divide-y divide-[#111]">

        {/* Intro */}
        <div className="px-6 py-10">
          <div className="text-[8px] font-mono text-[#555] tracking-[0.25em] uppercase mb-5">About Us</div>
          <h1 className="text-sm font-light text-[#999] leading-snug mb-4 tracking-wide">
            We build digital tools for Ghanaian businesses.
          </h1>
          <p className="text-[10px] text-[#666] font-light leading-relaxed tracking-wide">
            Amdeli is a web solutions studio based in Accra. We work with small and growing businesses — helping them get online, sell products, and show up where their customers are looking.
          </p>
        </div>

        {/* What we believe */}
        <div className="px-6 py-8 space-y-5">
          <div className="text-[8px] font-mono text-[#555] tracking-[0.25em] uppercase mb-4">What we believe</div>
          <div>
            <div className="text-[8px] font-mono text-[#555] tracking-[0.25em] uppercase mb-1.5">Simple works</div>
            <p className="text-[10px] text-[#666] font-light leading-relaxed">A clear, fast website beats a flashy one. We build what your customers actually need — nothing extra.</p>
          </div>
          <div>
            <div className="text-[8px] font-mono text-[#555] tracking-[0.25em] uppercase mb-1.5">Mobile first</div>
            <p className="text-[10px] text-[#666] font-light leading-relaxed">Most of your customers are on a phone. Everything we build works perfectly on mobile before anything else.</p>
          </div>
          <div>
            <div className="text-[8px] font-mono text-[#555] tracking-[0.25em] uppercase mb-1.5">Local knowledge</div>
            <p className="text-[10px] text-[#666] font-light leading-relaxed">We understand the Ghanaian market — MoMo payments, slow connections, how people search locally. That shapes every decision we make.</p>
          </div>
        </div>

        {/* Location */}
        <div className="px-6 py-6">
          <div className="text-[8px] font-mono text-[#555] tracking-[0.25em] uppercase mb-3">Where we are</div>
          <p className="text-[10px] text-[#666] font-light leading-relaxed tracking-wide">
            Accra, Ghana — available across the country remotely.
          </p>
        </div>

        {/* CTA */}
        <div className="px-6 py-6 flex flex-col gap-2">
          <a
            href="tel:0540484052"
            className="flex items-center justify-between px-5 py-3.5 bg-[#c4a747] text-black text-[10px] font-light tracking-widest uppercase hover:bg-[#d4b757] transition-colors"
          >
            <span>Call — 0540 484 052</span>
            <FiArrowUpRight size={12} />
          </a>
          <a
            href="https://wa.me/233540484052"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between px-5 py-3.5 border border-[#1a1a1a] text-[#2a2a2a] text-[10px] font-light tracking-widest uppercase hover:border-[#333] hover:text-[#555] transition-colors"
          >
            <span>WhatsApp</span>
            <FiArrowUpRight size={12} />
          </a>
        </div>

      </div>
    </div>
  )
}
