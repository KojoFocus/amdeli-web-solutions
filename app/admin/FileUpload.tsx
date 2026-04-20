'use client'

import { useState } from 'react'

interface FileUploadProps {
  onUpload: (url: string) => void
  currentUrl?: string
  label: string
  accept?: string
}

export default function FileUpload({ onUpload, currentUrl, label, accept = 'image/*' }: FileUploadProps) {
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    setUploading(true)
    setError('')

    try {
      const formData = new FormData()
      formData.append('file', file)

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      })

      if (response.ok) {
        const result = await response.json()
        onUpload(result.url)
      } else {
        const errorResult = await response.json()
        setError(errorResult.error || 'Upload failed')
      }
    } catch (err) {
      setError('An error occurred during upload')
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="space-y-4">
      <label className="block text-xs font-mono text-[#b3b3b3] tracking-[0.1em] uppercase">
        {label}
      </label>
      
      {currentUrl && (
        <div className="mb-4">
          <img 
            src={currentUrl} 
            alt="Current upload" 
            className="w-32 h-24 object-cover rounded border border-[#2b2b2b] md:w-40 md:h-28 shadow-sm"
          />
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="file"
          accept={accept}
          onChange={handleFileUpload}
          disabled={uploading}
          className="px-4 py-3 bg-[#0f0f0f] border border-[#2b2b2b] text-[#f0f0f0] rounded focus:outline-none focus:border-[#c4a747] focus:ring-1 focus:ring-[#c4a747]/30 file:mr-4 file:px-4 file:py-2 file:border-0 file:bg-[#c4a747] file:text-black file:font-medium file:rounded file:hover:bg-[#d4b757] disabled:opacity-50 disabled:cursor-not-allowed flex-1 transition-all duration-200"
        />
        {uploading && <span className="text-xs text-[#666] self-center font-medium">Uploading...</span>}
      </div>
      
      {error && <p className="text-red-400 text-sm font-medium">{error}</p>}
    </div>
  )
}