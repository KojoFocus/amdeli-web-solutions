import { NextResponse } from 'next/server';

const ADMIN_EMAIL = 'admin@amdeli.gh';
const ADMIN_PASSWORD = 'admin123';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body as { email: string; password: string };

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    return NextResponse.json({ id: 1, email: ADMIN_EMAIL, name: 'Amdeli Admin' }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: 'Failed to login' }, { status: 500 });
  }
}
