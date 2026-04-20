import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const portfolioItem = await prisma.portfolio.findUnique({
      where: { id: parseInt(params.id) }
    })
    if (!portfolioItem) {
      return NextResponse.json({ error: 'Portfolio item not found' }, { status: 404 })
    }
    return NextResponse.json(portfolioItem)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch portfolio item' }, { status: 500 })
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    const portfolioItem = await prisma.portfolio.update({
      where: { id: parseInt(params.id) },
      data: body
    })
    return NextResponse.json(portfolioItem)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update portfolio item' }, { status: 500 })
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.portfolio.delete({
      where: { id: parseInt(params.id) }
    })
    return NextResponse.json({ message: 'Portfolio item deleted' })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete portfolio item' }, { status: 500 })
  }
}