export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Banner from '@/models/Banner';

export async function GET() {
  await connectToDatabase();
  const banner = await Banner.findOne(); // just one banner
  return NextResponse.json({ banner });
}
