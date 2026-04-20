import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const service = await prisma.service.findUnique({
      where: { href: `/services/${params.slug}` }
    })
    if (!service) {
      return NextResponse.json({ error: 'Service not found' }, { status: 404 })
    }
    return NextResponse.json(service)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch service' }, { status: 500 })
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const body = await request.json()
    const service = await prisma.service.update({
      where: { href: `/services/${params.slug}` },
      data: body
    })
    return NextResponse.json(service)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update service' }, { status: 500 })
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    await prisma.service.delete({
      where: { href: `/services/${params.slug}` }
    })
    return NextResponse.json({ message: 'Service deleted' })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete service' }, { status: 500 })
  }
}