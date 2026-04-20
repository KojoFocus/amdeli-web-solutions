'use client'

import { useRouter } from 'next/navigation'
import { FiArrowLeft } from 'react-icons/fi'

export default function BackButton() {
  const router = useRouter()
  return (
    <button
      type="button"
      aria-label="Go back"
      onClick={() => router.back()}
      className="flex min-h-[44px] items-center gap-2 text-[#b3b3b3] hover:text-[#e0e0e0] text-sm"
    >
      <FiArrowLeft size={14} />
      <span className="font-mono text-xs tracking-[0.2em] uppercase">Back</span>
    </button>
  )
}
