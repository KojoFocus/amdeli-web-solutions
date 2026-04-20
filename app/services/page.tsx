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

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch('/api/services')
        if (res.ok) {
          const data = await res.json()
          setServices(data)
        }
      } catch (error) {
        console.error('Failed to fetch services:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchServices()
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
          <div className="text-[11px] font-mono text-[#b3b3b3] tracking-[0.2em] uppercase mb-6">Services</div>
        </div>

        <div className="divide-y divide-[#111]">
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="flex min-h-[72px] items-center justify-between px-6 py-5 hover:bg-white/[0.02] group"
            >
              <div>
                <div className="text-base font-light text-[#f0f0f0] tracking-wide mb-1.5">{s.title}</div>
                <div className="text-sm text-[#b3b3b3] font-light leading-relaxed">
                  {s.tags.split(',').map((tag, i) => tag.trim()).join(' · ')}
                </div>
              </div>
              <FiArrowUpRight size={14} className="text-[#8f8f8f] group-hover:text-[#c4a747] shrink-0 ml-4" />
            </Link>
          ))}
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
