export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb'; 

export async function GET() {
   
  try {
    await connectToDatabase();

    return NextResponse.json({ success: true, message: 'MongoDB connected' });
   
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
