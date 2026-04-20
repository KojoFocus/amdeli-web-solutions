import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const heroImage = await prisma.heroImage.findFirst({
      orderBy: { createdAt: 'desc' }
    })
    return NextResponse.json(heroImage)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch hero image' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { imageUrl, altText } = body

    // Delete existing hero image if any
    await prisma.heroImage.deleteMany({})

    const heroImage = await prisma.heroImage.create({
      data: {
        imageUrl,
        altText
      }
    })

    return NextResponse.json(heroImage, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create hero image' }, { status: 500 })
  }
}