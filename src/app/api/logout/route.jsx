// import { NextResponse } from 'next/server';

// export async function POST() {
//   const response = NextResponse.json({ success: true });
//   response.cookies.set('admin-auth', '', { maxAge: 0, path: '/' });
//   return response;
// }


// import { NextResponse } from 'next/server';

// export async function POST() {
//   const response = NextResponse.json({ success: true });

//   // Expire the cookie immediately to log out
//   response.cookies.set('admin-auth', '', {
//     path: '/',
//     expires: new Date(0),
//     httpOnly: true,
//   });

//   return response;
// }

// /api/logout/route.jsx
// import { NextResponse } from 'next/server';

// export const POST = async (req) => {
//   const response = NextResponse.json({ success: true });

//   // ✅ Clear cookie
//   response.cookies.set('admin-auth', '', {
//     httpOnly: true,
//     path: '/',
//     maxAge: 0,
//   });

//   return response;
// };

// /api/logout/route.js
// import { NextResponse } from 'next/server';

// export const POST = async () => {
//   const response = NextResponse.json({ success: true });

//   response.cookies.set('token', '', {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === 'production',
//     sameSite: 'lax',
//     path: '/',
//     maxAge: 0,
//   });

//   return response;
// };

import { NextResponse } from 'next/server';

export async function POST() {
  const res = NextResponse.json({ success: true });
  res.cookies.set('token', '', { maxAge: 0 });
  return res;
}



