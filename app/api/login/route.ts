import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, password } = body

    // Find admin
    const admin = await prisma.admin.findUnique({
      where: { email }
    })

    if (!admin) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    // Verify password
    const isValid = await bcrypt.compare(password, admin.password)

    if (!isValid) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    // Return admin without password
    const { password: _, ...adminData } = admin
    return NextResponse.json(adminData)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to login' }, { status: 500 })
  }
}