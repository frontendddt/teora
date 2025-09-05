// /app/api/check-auth/route.jsx
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || (() => {
  throw new Error('JWT_SECRET is not defined in environment variables');
})();

export async function GET(req) {
  try {
    const token = req.cookies.get('token')?.value;
    if (!token) {
      return NextResponse.json({ success: false }, { status: 401 });
    }

    jwt.verify(token, JWT_SECRET);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[Check Auth Error]', error);
    return NextResponse.json({ success: false }, { status: 401 });
  }
}