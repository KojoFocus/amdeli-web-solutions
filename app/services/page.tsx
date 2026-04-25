"use client";

import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'
import BackButton from '@/app/components/BackButton'
import { useState, useEffect } from 'react'

interface Service {
  id: number
  title: string
  description?: string
  tags: string
  href: string
}

const DEFAULT_SERVICES: Service[] = [
  { id: 1, title: 'Basic Website', description: 'Perfect for small businesses looking to establish an online presence', tags: 'Custom domain, Business email, Google SEO, Mobile-ready, Contact form', href: '/services/basic-website' },
  { id: 2, title: 'Online Store', description: 'Full-featured e-commerce solution for selling products online', tags: 'Product dashboard, Order tracking, Paystack, MoMo, Inventory management', href: '/services/online-store' },
  { id: 3, title: 'Digital Marketing', description: 'Comprehensive marketing services to grow your online presence', tags: 'Google SEO, Google Business, Social media setup, Monthly reports', href: '/services/digital-marketing' },
  { id: 4, title: 'Maintenance', description: 'Ongoing support and updates for your website', tags: 'Monthly updates, Security monitoring, Backups, Content edits', href: '/services/maintenance' },
  { id: 5, title: 'Custom Development', description: 'Tailored web applications for your specific business needs', tags: 'Web apps, Booking systems, Portals, API integrations', href: '/services/custom-development' },
  { id: 6, title: 'Business Consulting', description: 'Strategic guidance for your digital transformation', tags: 'Digital strategy, Competitor research, Growth roadmap', href: '/services/consulting' },
]

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>(DEFAULT_SERVICES)
  const [loading] = useState(false)

  useEffect(() => {
    fetch('/api/services')
      .then(r => r.ok ? r.json() : null)
      .then(data => { if (data?.length) setServices(data) })
      .catch(() => {})
  }, [])

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
            <text x="50" y="48" fontFamily="Inter, sans-serif" fontSize="9" fill="#777777" letterSpacing="1">TECH SOLUTIONS</text>
          </svg>
        </Link>
      </header>

      <div className="flex-1 max-w-xl mx-auto w-full">
        <div className="px-6 py-8">
          <div className="text-[11px] font-mono text-[#b3b3b3] tracking-[0.2em] uppercase mb-6">
            Services
          </div>
        </div>

        <div className="divide-y divide-[#111]">
          {loading ? (
            <div className="px-6 py-10 text-sm text-[#777]">
              Loading services...
            </div>
          ) : (
            services.map((s) => (
              <Link
                key={s.id}
                href={s.href}
                className="flex min-h-[72px] items-center justify-between px-6 py-5 hover:bg-white/[0.02] group"
              >
                <div>
                  <div className="text-base font-light text-[#f0f0f0] tracking-wide mb-1.5">
                    {s.title}
                  </div>
                  <div className="text-sm text-[#b3b3b3] font-light leading-relaxed">
                    {s.tags.split(',').map((tag) => tag.trim()).join(' · ')}
                  </div>
                </div>

                <FiArrowUpRight
                  size={14}
                  className="text-[#8f8f8f] group-hover:text-[#c4a747] shrink-0 ml-4"
                />
              </Link>
            ))
          )}
        </div>

        <div className="px-6 py-6 border-t border-[#111]">
          <a
            href="tel:0540484052"
            className="flex min-h-[44px] items-center justify-between px-5 py-3.5 bg-[#c4a747] text-black text-xs font-medium tracking-widest uppercase hover:bg-[#d4b757]"
          >
            <span>Discuss your project</span>
            <FiArrowUpRight size={12} />
          </a>
        </div>
      </div>

    </div>
  )
}