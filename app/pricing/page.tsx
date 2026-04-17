import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'
import BackButton from '@/app/components/BackButton'

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

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#141414] flex flex-col">

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
            <text x="50" y="48" fontFamily="Inter, sans-serif" fontSize="9" fill="#777777" letterSpacing="1">WEB SOLUTIONS</text>
          </svg>
        </Link>
      </header>

      <div className="flex-1 max-w-xl mx-auto w-full">
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

    </div>
  )
}
