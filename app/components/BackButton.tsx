'use client'

import { useRouter } from 'next/navigation'
import { FiArrowLeft } from 'react-icons/fi'

export default function BackButton() {
  const router = useRouter()
  return (
    <button
      onClick={() => router.back()}
      className="flex items-center gap-2 text-[#555] hover:text-[#999] transition-colors text-sm"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      <FiArrowLeft size={14} />
      <span className="font-mono text-[10px] tracking-[0.2em] uppercase">Back</span>
    </button>
  )
}
