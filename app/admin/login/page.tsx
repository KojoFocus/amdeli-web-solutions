'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })

      const data = await res.json()

      if (res.ok) {
        localStorage.setItem('admin', JSON.stringify(data))
        router.push('/admin/dashboard')
      } else {
        setError(data.error || 'Login failed')
      }
    } catch (err) {
      setError('An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#141414] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/">
            <svg width="160" height="48" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
              <circle cx="20" cy="30" r="3" fill="#c4a747" />
              <circle cx="35" cy="20" r="3" fill="#c4a747" />
              <circle cx="35" cy="40" r="3" fill="#c4a747" />
              <line x1="20" y1="30" x2="35" y2="20" stroke="#c4a747" strokeWidth="1.5" />
              <line x1="20" y1="30" x2="35" y2="40" stroke="#c4a747" strokeWidth="1.5" />
              <line x1="35" y1="20" x2="35" y2="40" stroke="#c4a747" strokeWidth="1.5" />
              <text x="50" y="35" fontFamily="Inter, sans-serif" fontSize="20" fontWeight="400" fill="#cccccc">Amdeli</text>
              <text x="50" y="48" fontFamily="Inter, sans-serif" fontSize="9" fill="#aaaaaa" letterSpacing="0.6">TECH SOLUTIONS</text>
            </svg>
          </Link>
          <h1 className="text-2xl font-light text-[#f0f0f0] mt-6">Admin Login</h1>
        </div>

        <form onSubmit={handleSubmit} className="bg-[#1a1a1a] border border-[#2b2b2b] rounded-lg p-8">
          {error && (
            <div className="mb-6 p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded">
              {error}
            </div>
          )}

          <div className="mb-5">
            <label className="block text-xs font-mono text-[#b3b3b3] tracking-[0.1em] uppercase mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-[#0f0f0f] border border-[#2b2b2b] text-[#f0f0f0] rounded focus:outline-none focus:border-[#c4a747] transition-colors"
              placeholder="admin@amdeli.gh"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-xs font-mono text-[#b3b3b3] tracking-[0.1em] uppercase mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-[#0f0f0f] border border-[#2b2b2b] text-[#f0f0f0] rounded focus:outline-none focus:border-[#c4a747] transition-colors"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-[#c4a747] text-black text-xs font-medium tracking-widest uppercase rounded hover:bg-[#d4b757] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <p className="text-center text-[#666] text-xs mt-6">
          <Link href="/" className="text-[#c4a747] hover:text-[#d4b757]">
            ← Back to website
          </Link>
        </p>
      </div>
    </div>
  )
}