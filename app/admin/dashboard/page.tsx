'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import FileUpload from '../FileUpload'

interface Service {
  id: number
  title: string
  description?: string
  tags: string
  href: string
}

interface Portfolio {
  id: number
  title: string
  image: string
  href: string
  description?: string
}

interface HeroImage {
  id: number
  imageUrl: string
  altText?: string
}

export default function AdminDashboard() {
  const [services, setServices] = useState<Service[]>([])
  const [portfolio, setPortfolio] = useState<Portfolio[]>([])
  const [heroImage, setHeroImage] = useState<HeroImage | null>(null)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('services')
  const router = useRouter()

  useEffect(() => {
    const admin = localStorage.getItem('admin')
    if (!admin) {
      router.push('/admin/login')
      return
    }

    fetchInitialData()
  }, [router])

  const fetchInitialData = async () => {
    try {
      const [servicesRes, portfolioRes, heroRes] = await Promise.all([
        fetch('/api/services'),
        fetch('/api/portfolio'),
        fetch('/api/hero')
      ])

      if (servicesRes.ok) setServices(await servicesRes.json())
      if (portfolioRes.ok) setPortfolio(await portfolioRes.json())
      if (heroRes.ok) setHeroImage(await heroRes.json())
    } catch (error) {
      console.error('Failed to fetch data:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('admin')
    router.push('/admin/login')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#141414] flex items-center justify-center">
        <div className="text-[#666]">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#141414]">
      <header className="border-b border-[#1a1a1a] bg-[#141414] sticky top-0 z-10 shadow-lg shadow-black/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Link href="/" className="group">
                <svg width="120" height="36" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg" className="group-hover:opacity-80 transition-opacity">
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
              
              <nav className="hidden md:flex gap-6">
                <button
                  onClick={() => setActiveTab('services')}
                  className={`text-sm font-mono tracking-[0.1em] uppercase ${
                    activeTab === 'services' ? 'text-[#c4a747] font-medium' : 'text-[#666]'
                  } hover:text-[#c4a747] transition-all duration-200 border-b-2 ${
                    activeTab === 'services' ? 'border-[#c4a747]/50' : 'border-transparent'
                  }`}
                >
                  Services
                </button>
                <button
                  onClick={() => setActiveTab('portfolio')}
                  className={`text-sm font-mono tracking-[0.1em] uppercase ${
                    activeTab === 'portfolio' ? 'text-[#c4a747] font-medium' : 'text-[#666]'
                  } hover:text-[#c4a747] transition-all duration-200 border-b-2 ${
                    activeTab === 'portfolio' ? 'border-[#c4a747]/50' : 'border-transparent'
                  }`}
                >
                  Portfolio
                </button>
                <button
                  onClick={() => setActiveTab('hero')}
                  className={`text-sm font-mono tracking-[0.1em] uppercase ${
                    activeTab === 'hero' ? 'text-[#c4a747] font-medium' : 'text-[#666]'
                  } hover:text-[#c4a747] transition-all duration-200 border-b-2 ${
                    activeTab === 'hero' ? 'border-[#c4a747]/50' : 'border-transparent'
                  }`}
                >
                  Hero Image
                </button>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={handleLogout}
                className="text-xs font-mono text-[#666] hover:text-[#c4a747] hover:bg-[#1a1a1a] tracking-[0.1em] uppercase transition-all duration-200 px-3 py-1.5 rounded border border-[#2b2b2b]"
              >
                Logout
              </button>
            </div>
          </div>
          
          {/* Mobile Tab Navigation */}
          <div className="md:hidden mt-4 border-t border-[#2b2b2b] pt-4">
            <div className="flex gap-2 overflow-x-auto pb-2">
              <button
                onClick={() => setActiveTab('services')}
                className={`px-4 py-2 text-xs font-mono tracking-[0.1em] uppercase rounded-lg ${
                  activeTab === 'services' ? 'bg-[#c4a747] text-black shadow-md shadow-[#c4a747]/20' : 'bg-[#1a1a1a] text-[#666] border border-[#2b2b2b]'
                } transition-all duration-200 whitespace-nowrap hover:scale-105 active:scale-95`}
              >
                Services
              </button>
              <button
                onClick={() => setActiveTab('portfolio')}
                className={`px-4 py-2 text-xs font-mono tracking-[0.1em] uppercase rounded-lg ${
                  activeTab === 'portfolio' ? 'bg-[#c4a747] text-black shadow-md shadow-[#c4a747]/20' : 'bg-[#1a1a1a] text-[#666] border border-[#2b2b2b]'
                } transition-all duration-200 whitespace-nowrap hover:scale-105 active:scale-95`}
              >
                Portfolio
              </button>
              <button
                onClick={() => setActiveTab('hero')}
                className={`px-4 py-2 text-xs font-mono tracking-[0.1em] uppercase rounded-lg ${
                  activeTab === 'hero' ? 'bg-[#c4a747] text-black shadow-md shadow-[#c4a747]/20' : 'bg-[#1a1a1a] text-[#666] border border-[#2b2b2b]'
                } transition-all duration-200 whitespace-nowrap hover:scale-105 active:scale-95`}
              >
                Hero Image
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {activeTab === 'services' && (
          <ServicesTab services={services} setServices={setServices} />
        )}
        {activeTab === 'portfolio' && (
          <PortfolioTab portfolio={portfolio} setPortfolio={setPortfolio} />
        )}
        {activeTab === 'hero' && (
          <HeroTab heroImage={heroImage} setHeroImage={setHeroImage} />
        )}
      </main>
    </div>
  )
}

function ServicesTab({ services, setServices }: { 
  services: Service[], 
  setServices: (services: Service[]) => void 
}) {
  const [newService, setNewService] = useState({
    title: '',
    description: '',
    tags: '',
    href: ''
  })
  const [editingService, setEditingService] = useState<Service | null>(null)
  const [editForm, setEditForm] = useState({
    title: '',
    description: '',
    tags: '',
    href: ''
  })

  const addService = async () => {
    if (!newService.title || !newService.href) return

    try {
      const res = await fetch('/api/services', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newService)
      })

      if (res.ok) {
        const service = await res.json()
        setServices([service, ...services])
        setNewService({ title: '', description: '', tags: '', href: '' })
      }
    } catch (error) {
      console.error('Failed to add service:', error)
    }
  }

  const deleteService = async (href: string) => {
    try {
      await fetch(`/api/services/${href.split('/').pop()}`, {
        method: 'DELETE'
      })
      setServices(services.filter(s => s.href !== href))
    } catch (error) {
      console.error('Failed to delete service:', error)
    }
  }

  const startEdit = (service: Service) => {
    setEditingService(service)
    setEditForm({
      title: service.title,
      description: service.description || '',
      tags: service.tags,
      href: service.href
    })
  }

  const updateService = async () => {
    if (!editingService) return

    try {
      const res = await fetch(`/api/services/${editingService.href.split('/').pop()}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editForm)
      })

      if (res.ok) {
        const updatedService = await res.json()
        setServices(services.map(s => s.id === editingService.id ? updatedService : s))
        setEditingService(null)
        setEditForm({ title: '', description: '', tags: '', href: '' })
      }
    } catch (error) {
      console.error('Failed to update service:', error)
    }
  }

  const cancelEdit = () => {
    setEditingService(null)
    setEditForm({ title: '', description: '', tags: '', href: '' })
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-light text-[#f0f0f0]">Services Management</h2>
      </div>

      {/* Add New Service Form */}
      <div className="bg-[#1a1a1a] border border-[#2b2b2b] rounded-lg p-6 mb-6">
        <h3 className="text-lg font-light text-[#f0f0f0] mb-4">Add New Service</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Service title"
            value={newService.title}
            onChange={(e) => setNewService({...newService, title: e.target.value})}
            className="px-4 py-3 bg-[#0f0f0f] border border-[#2b2b2b] text-[#f0f0f0] rounded focus:outline-none focus:border-[#c4a747]"
          />
          <input
            type="text"
            placeholder="Service URL (e.g., /services/website)"
            value={newService.href}
            onChange={(e) => setNewService({...newService, href: e.target.value})}
            className="px-4 py-3 bg-[#0f0f0f] border border-[#2b2b2b] text-[#f0f0f0] rounded focus:outline-none focus:border-[#c4a747]"
          />
          <input
            type="text"
            placeholder="Tags (comma-separated)"
            value={newService.tags}
            onChange={(e) => setNewService({...newService, tags: e.target.value})}
            className="px-4 py-3 bg-[#0f0f0f] border border-[#2b2b2b] text-[#f0f0f0] rounded focus:outline-none focus:border-[#c4a747] md:col-span-2"
          />
          <input
            type="text"
            placeholder="Description (optional)"
            value={newService.description}
            onChange={(e) => setNewService({...newService, description: e.target.value})}
            className="px-4 py-3 bg-[#0f0f0f] border border-[#2b2b2b] text-[#f0f0f0] rounded focus:outline-none focus:border-[#c4a747] md:col-span-2"
          />
        </div>
        <button
          onClick={addService}
          className="mt-4 px-6 py-2 bg-[#c4a747] text-black font-medium rounded hover:bg-[#d4b757] transition-colors"
        >
          Add Service
        </button>
      </div>

      {/* Services List */}
      <div className="grid gap-4">
        {services.map((service) => (
          <div key={service.id} className="bg-[#1a1a1a] border border-[#2b2b2b] rounded-lg p-6">
            {editingService?.id === service.id ? (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    value={editForm.title}
                    onChange={(e) => setEditForm({...editForm, title: e.target.value})}
                    className="px-4 py-3 bg-[#0f0f0f] border border-[#2b2b2b] text-[#f0f0f0] rounded focus:outline-none focus:border-[#c4a747]"
                  />
                  <input
                    type="text"
                    value={editForm.href}
                    onChange={(e) => setEditForm({...editForm, href: e.target.value})}
                    className="px-4 py-3 bg-[#0f0f0f] border border-[#2b2b2b] text-[#f0f0f0] rounded focus:outline-none focus:border-[#c4a747]"
                  />
                </div>
                <input
                  type="text"
                  value={editForm.tags}
                  onChange={(e) => setEditForm({...editForm, tags: e.target.value})}
                  className="w-full px-4 py-3 bg-[#0f0f0f] border border-[#2b2b2b] text-[#f0f0f0] rounded focus:outline-none focus:border-[#c4a747]"
                  placeholder="Tags (comma-separated)"
                />
                <input
                  type="text"
                  value={editForm.description}
                  onChange={(e) => setEditForm({...editForm, description: e.target.value})}
                  className="w-full px-4 py-3 bg-[#0f0f0f] border border-[#2b2b2b] text-[#f0f0f0] rounded focus:outline-none focus:border-[#c4a747]"
                  placeholder="Description"
                />
                <div className="flex gap-3">
                  <button
                    onClick={updateService}
                    className="px-4 py-2 bg-[#c4a747] text-black font-medium rounded hover:bg-[#d4b757] transition-colors"
                  >
                    Save
                  </button>
                  <button
                    onClick={cancelEdit}
                    className="px-4 py-2 bg-[#333] text-[#f0f0f0] font-medium rounded hover:bg-[#444] transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-light text-[#f0f0f0]">{service.title}</h3>
                    <p className="text-sm text-[#b3b3b3]">{service.href}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => startEdit(service)}
                      className="px-3 py-1 bg-[#c4a747] text-black text-xs rounded hover:bg-[#d4b757] transition-colors"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteService(service.href)}
                      className="px-3 py-1 bg-red-500/20 text-red-400 text-xs rounded border border-red-500/30 hover:bg-red-500/30 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                {service.description && (
                  <p className="text-sm text-[#b3b3b3] mb-2">{service.description}</p>
                )}
                <div className="text-xs text-[#666]">{service.tags}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function PortfolioTab({ portfolio, setPortfolio }: { 
  portfolio: Portfolio[], 
  setPortfolio: (portfolio: Portfolio[]) => void 
}) {
  const [newItem, setNewItem] = useState({
    title: '',
    image: '',
    href: '',
    description: ''
  })
  const [editingItem, setEditingItem] = useState<Portfolio | null>(null)
  const [editForm, setEditForm] = useState({
    title: '',
    image: '',
    href: '',
    description: ''
  })

  const addPortfolioItem = async () => {
    if (!newItem.title || !newItem.image || !newItem.href) return

    try {
      const res = await fetch('/api/portfolio', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newItem)
      })

      if (res.ok) {
        const item = await res.json()
        setPortfolio([item, ...portfolio])
        setNewItem({ title: '', image: '', href: '', description: '' })
      }
    } catch (error) {
      console.error('Failed to add portfolio item:', error)
    }
  }

  const deletePortfolioItem = async (id: number) => {
    try {
      await fetch(`/api/portfolio/${id}`, {
        method: 'DELETE'
      })
      setPortfolio(portfolio.filter(p => p.id !== id))
    } catch (error) {
      console.error('Failed to delete portfolio item:', error)
    }
  }

  const startEdit = (item: Portfolio) => {
    setEditingItem(item)
    setEditForm({
      title: item.title,
      image: item.image,
      href: item.href,
      description: item.description || ''
    })
  }

  const updatePortfolioItem = async () => {
    if (!editingItem) return

    try {
      const res = await fetch(`/api/portfolio/${editingItem.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editForm)
      })

      if (res.ok) {
        const updatedItem = await res.json()
        setPortfolio(portfolio.map(p => p.id === editingItem.id ? updatedItem : p))
        setEditingItem(null)
        setEditForm({ title: '', image: '', href: '', description: '' })
      }
    } catch (error) {
      console.error('Failed to update portfolio item:', error)
    }
  }

  const cancelEdit = () => {
    setEditingItem(null)
    setEditForm({ title: '', image: '', href: '', description: '' })
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-light text-[#f0f0f0]">Portfolio Management</h2>
      </div>

      {/* Add New Portfolio Item Form */}
      <div className="bg-[#1a1a1a] border border-[#2b2b2b] rounded-lg p-6 mb-6">
        <h3 className="text-lg font-light text-[#f0f0f0] mb-4">Add New Project</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Project title"
            value={newItem.title}
            onChange={(e) => setNewItem({...newItem, title: e.target.value})}
            className="px-4 py-3 bg-[#0f0f0f] border border-[#2b2b2b] text-[#f0f0f0] rounded focus:outline-none focus:border-[#c4a747] transition-colors"
          />
          <input
            type="text"
            placeholder="Project URL"
            value={newItem.href}
            onChange={(e) => setNewItem({...newItem, href: e.target.value})}
            className="px-4 py-3 bg-[#0f0f0f] border border-[#2b2b2b] text-[#f0f0f0] rounded focus:outline-none focus:border-[#c4a747] transition-colors"
          />
          <FileUpload
            label="Project Image"
            currentUrl={newItem.image}
            onUpload={(url) => setNewItem({...newItem, image: url})}
          />
          <input
            type="text"
            placeholder="Description (optional)"
            value={newItem.description}
            onChange={(e) => setNewItem({...newItem, description: e.target.value})}
            className="px-4 py-3 bg-[#0f0f0f] border border-[#2b2b2b] text-[#f0f0f0] rounded focus:outline-none focus:border-[#c4a747] md:col-span-2 transition-colors"
          />
        </div>
        <button
          onClick={addPortfolioItem}
          className="mt-4 px-6 py-2 bg-[#c4a747] text-black font-medium rounded hover:bg-[#d4b757] transition-colors"
        >
          Add Project
        </button>
      </div>

      {/* Portfolio List */}
      <div className="grid gap-4">
        {portfolio.map((item) => (
          <div key={item.id} className="bg-[#1a1a1a] border border-[#2b2b2b] rounded-lg p-6">
            {editingItem?.id === item.id ? (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    value={editForm.title}
                    onChange={(e) => setEditForm({...editForm, title: e.target.value})}
                    className="px-4 py-3 bg-[#0f0f0f] border border-[#2b2b2b] text-[#f0f0f0] rounded focus:outline-none focus:border-[#c4a747]"
                    placeholder="Project title"
                  />
                  <input
                    type="text"
                    value={editForm.href}
                    onChange={(e) => setEditForm({...editForm, href: e.target.value})}
                    className="px-4 py-3 bg-[#0f0f0f] border border-[#2b2b2b] text-[#f0f0f0] rounded focus:outline-none focus:border-[#c4a747]"
                    placeholder="Project URL"
                  />
                </div>
                <input
                  type="text"
                  value={editForm.image}
                  onChange={(e) => setEditForm({...editForm, image: e.target.value})}
                  className="w-full px-4 py-3 bg-[#0f0f0f] border border-[#2b2b2b] text-[#f0f0f0] rounded focus:outline-none focus:border-[#c4a747]"
                  placeholder="Image URL"
                />
                <input
                  type="text"
                  value={editForm.description}
                  onChange={(e) => setEditForm({...editForm, description: e.target.value})}
                  className="w-full px-4 py-3 bg-[#0f0f0f] border border-[#2b2b2b] text-[#f0f0f0] rounded focus:outline-none focus:border-[#c4a747]"
                  placeholder="Description"
                />
                <div className="flex gap-3">
                  <button
                    onClick={updatePortfolioItem}
                    className="px-4 py-2 bg-[#c4a747] text-black font-medium rounded hover:bg-[#d4b757] transition-colors"
                  >
                    Save
                  </button>
                  <button
                    onClick={cancelEdit}
                    className="px-4 py-2 bg-[#333] text-[#f0f0f0] font-medium rounded hover:bg-[#444] transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-light text-[#f0f0f0]">{item.title}</h3>
                    <p className="text-sm text-[#b3b3b3]">{item.href}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => startEdit(item)}
                      className="px-3 py-1 bg-[#c4a747] text-black text-xs rounded hover:bg-[#d4b757] transition-colors"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deletePortfolioItem(item.id)}
                      className="px-3 py-1 bg-red-500/20 text-red-400 text-xs rounded border border-red-500/30 hover:bg-red-500/30 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <div className="flex gap-4">
                  <img src={item.image} alt={item.title} className="w-20 h-16 object-cover rounded border border-[#2b2b2b]" />
                  {item.description && (
                    <p className="text-sm text-[#b3b3b3]">{item.description}</p>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function HeroTab({ heroImage, setHeroImage }: { 
  heroImage: HeroImage | null, 
  setHeroImage: (heroImage: HeroImage | null) => void 
}) {
  const [imageUrl, setImageUrl] = useState('')
  const [altText, setAltText] = useState('')

  const updateHeroImage = async () => {
    if (!imageUrl) return

    try {
      const res = await fetch('/api/hero', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ imageUrl, altText })
      })

      if (res.ok) {
        const hero = await res.json()
        setHeroImage(hero)
        setImageUrl('')
        setAltText('')
      }
    } catch (error) {
      console.error('Failed to update hero image:', error)
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-light text-[#f0f0f0]">Hero Image Management</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-[#1a1a1a] border border-[#2b2b2b] rounded-lg p-6">
          <h3 className="text-lg font-light text-[#f0f0f0] mb-4">Current Hero Image</h3>
          {heroImage ? (
            <div>
              <img src={heroImage.imageUrl} alt={heroImage.altText || 'Hero'} className="w-full h-48 object-cover rounded border border-[#2b2b2b] mb-4" />
              {heroImage.altText && (
                <p className="text-sm text-[#b3b3b3]">Alt text: {heroImage.altText}</p>
              )}
            </div>
          ) : (
            <p className="text-[#666]">No hero image set</p>
          )}
        </div>

        <div className="bg-[#1a1a1a] border border-[#2b2b2b] rounded-lg p-6">
          <h3 className="text-lg font-light text-[#f0f0f0] mb-4">Update Hero Image</h3>
          <div className="space-y-6">
            <FileUpload
              label="Hero Image"
              currentUrl={imageUrl}
              onUpload={(url) => setImageUrl(url)}
            />
            <div>
              <label className="block text-xs font-mono text-[#b3b3b3] tracking-[0.1em] uppercase mb-2">
                Alt Text (optional)
              </label>
              <input
                type="text"
                value={altText}
                onChange={(e) => setAltText(e.target.value)}
                className="w-full px-4 py-3 bg-[#0f0f0f] border border-[#2b2b2b] text-[#f0f0f0] rounded focus:outline-none focus:border-[#c4a747] transition-colors"
                placeholder="Hero image description"
              />
            </div>
            <button
              onClick={updateHeroImage}
              className="px-6 py-3 bg-[#c4a747] text-black text-sm font-medium rounded hover:bg-[#d4b757] transition-colors"
            >
              Update Hero Image
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}