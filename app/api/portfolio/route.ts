import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const portfolio = await prisma.portfolio.findMany({
      orderBy: { createdAt: 'desc' }
    })
    return NextResponse.json(portfolio)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch portfolio' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { title, image, href, description } = body

    const portfolioItem = await prisma.portfolio.create({
      data: {
        title,
        image,
        href,
        description
      }
    })

    return NextResponse.json(portfolioItem, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create portfolio item' }, { status: 500 })
  }
}