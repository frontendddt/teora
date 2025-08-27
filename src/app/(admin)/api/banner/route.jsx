export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Banner from '@/models/Banner';

export async function GET() {
  await connectToDatabase();
  const banner = await Banner.findOne(); // just one banner
  return NextResponse.json({ banner });
}


// POST: Create or replace banner
export async function POST(request) {
  try {
    await connectToDatabase();

    const body = await request.json();
    const { title, subtitle, imageUrl } = body;

    if (!title || !subtitle || !imageUrl) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Optional: clear old banner (if only one allowed)
    await Banner.deleteMany({}); // remove all old banners

    const newBanner = new Banner({ title, subtitle, imageUrl });
    await newBanner.save();

    return NextResponse.json(
      { success: true, message: 'Banner saved', banner: newBanner },
      { status: 201 }
    );
  } catch (error) {
    console.error('❌ Error in POST /api/banner:', error.message);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}