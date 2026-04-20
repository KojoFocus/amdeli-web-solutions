import { NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import path from 'path'
import { randomBytes } from 'crypto'

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File
    
    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 })
    }

    // Generate unique filename
    const buffer = Buffer.from(await file.arrayBuffer())
    const fileExtension = path.extname(file.name)
    const fileName = `${randomBytes(8).toString('hex')}${fileExtension}`
    
    // Create uploads directory if it doesn't exist
    const uploadsDir = path.join(process.cwd(), 'public', 'uploads')
    await mkdir(uploadsDir, { recursive: true })
    
    // Save file
    const filePath = path.join(uploadsDir, fileName)
    await writeFile(filePath, buffer)
    
    // Return the URL path
    const fileUrl = `/uploads/${fileName}`
    
    return NextResponse.json({ 
      message: 'File uploaded successfully',
      url: fileUrl 
    })
  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json({ error: 'Failed to upload file' }, { status: 500 })
  }
}