import { kv } from '@vercel/kv'
import { NextResponse } from 'next/server'
import { auth } from '@/auth'
import { Session } from '@/lib/types'

export async function GET() {
  const session = (await auth()) as Session

  return NextResponse.json({ session })
}
