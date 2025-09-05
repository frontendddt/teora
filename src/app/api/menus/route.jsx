export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Menu from '@/models/Menu';

export async function GET() {
  await connectToDatabase();
  const menus = await Menu.find();
  return NextResponse.json({ menus });
}

// POST: Add a new menu item
export async function POST(request) {
  try {
    await connectToDatabase();

    const body = await request.json();

    const { label, url, position } = body;

    if (!label || !url || !position) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    const newMenu = new Menu({ label, url, position });
    await newMenu.save();

    return NextResponse.json(
      { success: true, message: 'Menu item added', menu: newMenu },
      { status: 201 }
    );
  } catch (error) {
    console.error(' Error in POST /api/menus:', error.message);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}