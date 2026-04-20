import { notFound } from 'next/navigation'
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'
import BackButton from '@/app/components/BackButton'

const services: Record<string, {
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
      {
        heading: 'Custom Domain & Email',
        body: 'You register your domain and we connect everything — including a professional business email so you look credible from day one.',
      },
      {
        heading: 'Google SEO',
        body: 'Your site is set up so Google can find and rank it. We handle the technical side — meta tags, sitemap, page speed.',
      },
      {
        heading: 'Mobile-First',
        body: 'Built to look and work perfectly on phones first — because that\'s where your customers are.',
      },
      {
        heading: 'Complete Ownership',
        body: 'You own everything. We hand over the full source code, packaged so any developer can pick it up and continue the work — no lock-in.',
      },
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
      {
        heading: 'Product Dashboard',
        body: 'A simple backend where you can add products, set prices, upload photos, and manage stock yourself — no developer needed.',
      },
      {
        heading: 'Paystack & MoMo',
        body: 'Customers pay via card, Paystack, or Mobile Money. Funds go straight to your account.',
      },
      {
        heading: 'Order Tracking',
        body: 'You and your customers can track every order from placed to delivered. No more chasing customers on WhatsApp.',
      },
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
      {
        heading: 'Google SEO',
        body: 'We optimise your site so it ranks higher on Google when people search for your product or service.',
      },
      {
        heading: 'Google Business',
        body: 'Your business appears on Google Maps and search results with your hours, photos, and contact info.',
      },
      {
        heading: 'Social Media',
        body: 'We set up and optimise your social pages so they look professional and drive traffic to your site.',
      },
    ],
  },

  'maintenance': {
    title: 'Maintenance',
    tagline: 'We keep your site running so you don\'t have to think about it.',
    includes: [
      'Monthly software & security updates',
      'Regular backups',
      'Performance monitoring',
      'Content edits & updates',
      'Bug fixes',
      'Technical support',
    ],
    details: [
      {
        heading: 'Security & Backups',
        body: 'Your site is backed up regularly and monitored for threats. If anything goes wrong, we restore it fast.',
      },
      {
        heading: 'Content Updates',
        body: 'Need to change a price, add a photo, or update your menu? We handle it — usually within 24 hours.',
      },
      {
        heading: 'Performance',
        body: 'We monitor your site speed and fix issues before they affect your customers or your Google ranking.',
      },
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
      {
        heading: 'Built to Your Spec',
        body: 'If your business has a unique process or workflow, we build the exact tool you need — not a generic template.',
      },
      {
        heading: 'Integrations',
        body: 'Connect your site to payment systems, inventory tools, accounting software, or any third-party service.',
      },
      {
        heading: 'Pricing',
        body: 'Custom projects are quoted based on scope. Reach out and we\'ll give you an honest estimate within 24 hours.',
      },
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
      {
        heading: 'Audit',
        body: 'We look at your current online presence — website, social, Google — and tell you exactly what\'s working and what isn\'t.',
      },
      {
        heading: 'Roadmap',
        body: 'You leave with a clear, prioritised plan of what to build or fix first to get the most impact for your money.',
      },
      {
        heading: 'No Jargon',
        body: 'We speak plain English. You\'ll understand every recommendation and why we\'re making it.',
      },
    ],
  },
}

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }))
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = services[slug]
  if (!service) notFound()

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

        {/* Title */}
        <div className="px-6 py-10">
          <div className="text-[11px] font-mono text-[#b3b3b3] tracking-[0.2em] uppercase mb-5">
            Service
          </div>
          <h1 className="text-xl font-light font-sans text-[#f0f0f0] leading-snug mb-3 tracking-wide">
            {service.title}
          </h1>
          <p className="text-sm text-[#d0d0d0] font-light leading-relaxed tracking-wide">
            {service.tagline}
          </p>
        </div>

        {/* Price */}
        {service.price && (
          <div className="px-6 py-6">
            <div className="text-[11px] font-mono text-[#b3b3b3] tracking-[0.2em] uppercase mb-3">Pricing</div>
            <div className="text-lg font-light text-[#f0f0f0] tracking-wide">{service.price}</div>
            <div className="text-[11px] text-[#8f8f8f] font-mono mt-1 tracking-[0.2em] uppercase">{service.priceNote}</div>
          </div>
        )}

        {/* Included */}
        <div className="px-6 py-6">
          <div className="text-[11px] font-mono text-[#b3b3b3] tracking-[0.2em] uppercase mb-4">Included</div>
          <ul className="space-y-2">
            {service.includes.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="text-[#8f8f8f] text-sm mt-0.5 shrink-0">—</span>
                <span className="text-sm text-[#d0d0d0] font-light leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Details */}
        <div className="px-6 py-6 space-y-5">
          {service.details.map((d, i) => (
            <div key={i}>
              <div className="text-[11px] font-mono text-[#b3b3b3] tracking-[0.2em] uppercase mb-1.5">{d.heading}</div>
              <p className="text-sm text-[#d0d0d0] font-light leading-relaxed">{d.body}</p>
            </div>
          ))}
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
