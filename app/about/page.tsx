import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'
import BackButton from '@/app/components/BackButton'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#141414] flex flex-col">

      {/* Header */}
      <header className="sticky top-0 z-10 flex items-center justify-between px-6 py-5 border-b border-[#1a1a1a] bg-[#141414]">
        <BackButton />
        <Link href="/">
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
        </Link>
      </header>

        <div className="flex-1 max-w-xl mx-auto w-full divide-y divide-[#111]">

        {/* Intro */}
        <div className="px-6 py-10">
          <div className="text-[11px] font-mono text-[#b3b3b3] tracking-[0.2em] uppercase mb-5">About Us</div>
          <h1 className="text-xl font-light text-[#f0f0f0] leading-snug mb-4 tracking-wide">
            We build digital tools for Ghanaian businesses.
          </h1>
          <p className="text-sm text-[#d0d0d0] font-light leading-relaxed tracking-wide">
            Amdeli is a web solutions studio based in Accra. We work with small and growing businesses — helping them get online, sell products, and show up where their customers are looking.
          </p>
        </div>

        {/* What we believe */}
        <div className="px-6 py-8 space-y-5">
          <div className="text-[11px] font-mono text-[#b3b3b3] tracking-[0.2em] uppercase mb-4">What we believe</div>
          <div>
            <div className="text-[11px] font-mono text-[#b3b3b3] tracking-[0.2em] uppercase mb-1.5">Simple works</div>
            <p className="text-sm text-[#d0d0d0] font-light leading-relaxed">A clear, fast website beats a flashy one. We build what your customers actually need — nothing extra.</p>
          </div>
          <div>
            <div className="text-[11px] font-mono text-[#b3b3b3] tracking-[0.2em] uppercase mb-1.5">Mobile first</div>
            <p className="text-sm text-[#d0d0d0] font-light leading-relaxed">Most of your customers are on a phone. Everything we build works perfectly on mobile before anything else.</p>
          </div>
          <div>
            <div className="text-[11px] font-mono text-[#b3b3b3] tracking-[0.2em] uppercase mb-1.5">Local knowledge</div>
            <p className="text-sm text-[#d0d0d0] font-light leading-relaxed">We understand the Ghanaian market — MoMo payments, slow connections, how people search locally. That shapes every decision we make.</p>
          </div>
        </div>

        {/* Location */}
        <div className="px-6 py-6">
          <div className="text-[11px] font-mono text-[#b3b3b3] tracking-[0.2em] uppercase mb-3">Where we are</div>
          <p className="text-sm text-[#d0d0d0] font-light leading-relaxed tracking-wide">
            Accra, Ghana — available across the country remotely.
          </p>
        </div>

        {/* CTA */}
        <div className="px-6 py-6 flex flex-col gap-2">
          <a
            href="tel:0540484052"
            className="flex min-h-[44px] items-center justify-between px-5 py-3.5 bg-[#c4a747] text-black text-xs font-medium tracking-widest uppercase hover:bg-[#d4b757]"
          >
            <span>Call — 0540 484 052</span>
            <FiArrowUpRight size={12} />
          </a>
          <a
            href="https://wa.me/233540484052"
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[44px] items-center justify-between px-5 py-3.5 border border-[#333] text-[#d0d0d0] text-xs font-medium tracking-widest uppercase hover:border-[#c4a747] hover:text-[#f0f0f0]"
          >
            <span>WhatsApp</span>
            <FiArrowUpRight size={12} />
          </a>
        </div>

      </div>
    </div>
  )
}
