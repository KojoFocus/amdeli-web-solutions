import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, password, name } = body

    // Check if admin already exists
    const existingAdmin = await prisma.admin.findUnique({
      where: { email }
    })

    if (existingAdmin) {
      return NextResponse.json({ error: 'Admin already exists' }, { status: 400 })
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    const admin = await prisma.admin.create({
      data: {
        email,
        password: hashedPassword,
        name
      }
    })

    // Return admin without password
    const { password: _, ...adminData } = admin
    return NextResponse.json(adminData, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create admin' }, { status: 500 })
  }
}