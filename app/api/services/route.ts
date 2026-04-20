import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const services = await prisma.service.findMany({
      orderBy: { createdAt: 'desc' }
    })
    return NextResponse.json(services)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch services' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { title, description, tags, href } = body

    const service = await prisma.service.create({
      data: {
        title,
        description,
        tags,
        href
      }
    })

    return NextResponse.json(service, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create service' }, { status: 500 })
  }
}