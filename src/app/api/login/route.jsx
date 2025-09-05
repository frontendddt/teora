// export const dynamic = 'force-dynamic';

// import { NextResponse } from 'next/server';

// const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
// const ADMIN_PASSWORD  = process.env.ADMIN_PASSWORD;

// export async function POST(request) {
//   const { email, password } = await request.json();

//   if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
//     const response = NextResponse.json({ success: true });
//     response.cookies.set('admin-auth', 'true', {
//       httpOnly: true,
//       path: '/',
//       maxAge: 60 * 60 * 8, 
//     });
//     return response;
//   }

//   return NextResponse.json(
//     { success: false, message: 'Invalid credentials' },
//     { status: 401 }
//   );
// }



 
// import { db } from '@/lib/db'; 
// import { Log } from '@tensorflow/tfjs';
// import bcrypt from 'bcrypt';
// import { NextResponse } from 'next/server';

// export async function POST(req) {
//   try {
//     console.log('Checking MySQL connection...');
//     await db.getConnection();
//     console.log(' MySQL connection successful');

//     const { email, password } = await req.json();

//     const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);

//     if (rows.length === 0) {
//       return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
     
//     }

//     const user = rows[0];
//     const isPasswordValid = await bcrypt.compare(password, user.password);

//     if (!isPasswordValid) {
//       return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
//     }

//     const response = NextResponse.json({ success: true }, { status: 200 });

//     // Set cookie for auth
//     response.cookies.set('admin-auth', 'true', {
//       httpOnly: true,
//       path: '/',
//       maxAge: 60 * 60 * 24, // 1 day
//     });

//     return response;

//   } catch (error) {
//     console.error('❌ Login error:', error);
//     return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
//   }
// }


  // import { db } from '@/lib/db';
  // import bcrypt from 'bcrypt';
  // import { NextResponse } from 'next/server';
  // import { withSession } from '@/lib/withSession';

  // export const POST = withSession(async (req) => {
  //   try {
  //     const { email, password } = await req.json();

  //     const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);

  //     if (rows.length === 0) {
  //       return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
  //     }

  //     const user = rows[0];
  //     const isPasswordValid = await bcrypt.compare(password, user.password);

  //     if (!isPasswordValid) {
  //       return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
  //     }

  //     // Set session
  //     const res = NextResponse.json({ success: true });
  //     await req.session.set('user', { id: user.id, email: user.email });
  //     await req.session.save();

  //     return res;
  //   } catch (error) {
  //     console.error(' Login error:', error);
  //     return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  //   }
  // });
// /api/login/route.jsx

// /api/login/route.jsx

  // import { db } from '@/lib/db';
  // import bcrypt from 'bcrypt';
  // import { NextResponse } from 'next/server';

  // export const POST = async (req) => {
  //   try {
  //     const { email, password } = await req.json();

  //     const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);

  //     if (rows.length === 0) {
  //       return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
  //     }

  //     const user = rows[0];
  //     const isPasswordValid = await bcrypt.compare(password, user.password);

  //     if (!isPasswordValid) {
  //       return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
  //     }

  //     // Set cookie
  //     const response = NextResponse.json({ success: true });

  //     response.cookies.set('admin-auth', 'true', {
  //       httpOnly: true,
  //       path: '/',
  //       maxAge: 60 * 60 * 24, // 1 day
  //     });

  //     return response;
  //   } catch (error) {
  //     console.error('Login error:', error);
  //     return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  //   }
  // };

// /api/login/route.js



// import bcrypt from 'bcryptjs';
// import { NextResponse } from 'next/server';
// import { signToken } from '@/lib/jwt';
// import { db } from '@/lib/db'; // your database connection

// export const POST = async (req) => {
//   try {
//     const { email, password } = await req.json();

//     const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
//     if (rows.length === 0) {
//       return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
//     }

//     const user = rows[0];
//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) {
//       return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
//     }

//     const token = signToken({ userId: user.id, email: user.email });

//     const response = NextResponse.json({ success: true });
//     response.cookies.set('token', token, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === 'production',
//       sameSite: 'lax',
//       path: '/',
//       maxAge: 60 * 60, // 1 hour
//     });

//     return response;
//   } catch (error) {
//     console.error('Login error:', error);
//     return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
//   }
// };

// app/api/login/route.js

// export const runtime = 'nodejs';  

// import bcrypt from 'bcryptjs';
// import { NextResponse } from 'next/server';
// import { signToken } from '@/lib/jwt';
// import { db } from '@/lib/db';
// import { cookies } from 'next/headers';

// export async function POST(req) {
//   try {
//     const { email, password } = await req.json();

//     const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);

//     if (rows.length === 0) {
//       return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
//     }

//     const user = rows[0];
//     const isPasswordValid = await bcrypt.compare(password, user.password);

//     if (!isPasswordValid) {
//       return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
//     }

//     const token = signToken({ userId: user.id, email: user.email });

//     // ✅ Set cookie
//     cookies().set('token', token, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === 'production',
//       sameSite: 'lax',
//       path: '/',
//       maxAge: 60 * 60,
//     });

//     return NextResponse.json({ success: true });
//   } catch (err) {
//     console.error('[LOGIN ERROR]', err);
//     return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
//   }
// }

// /app/api/login/route.jsx



// import { NextResponse } from 'next/server';
// import jwt from 'jsonwebtoken';
// import bcrypt from 'bcryptjs';
// import { db } from '@/lib/db';

// const JWT_SECRET = process.env.JWT_SECRET; 
// export async function POST(req) {
//   try {
//     const { email, password } = await req.json();

//     const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
//     if (!rows.length) {
//       return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
//     }

//     const user = rows[0];
//     const isValid = await bcrypt.compare(password, user.password);
//     if (!isValid) {
//       return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
//     }

//     const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });

//     const response = NextResponse.json({ success: true });
//     response.cookies.set('token', token, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === 'production',
//       sameSite: 'lax',
//       path: '/',
//       maxAge: 60 * 60,
//     });

//     return response;
//   } catch (error) {
//     console.error('[Login Error]', error);
//     return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
//   }
// }
 


// // /app/api/login/route.jsx
// import { NextResponse } from 'next/server';
// import bcrypt from 'bcryptjs';
// import { db } from '@/lib/db';
// import { signToken } from '@/lib/jwt';

// export async function POST(req) {
//   try {
//     const { email, password } = await req.json();

//     // Validate input
//     if (!email || !password) {
//       return NextResponse.json(
//         { success: false, message: 'Email and password are required' },
//         { status: 400 }
//       );
//     }

//     // Query user
//     const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
//     if (!rows.length) {
//       return NextResponse.json(
//         { success: false, message: 'Invalid credentials' },
//         { status: 401 }
//       );
//     }

//     const user = rows[0];

//     // Verify password
//     const isValid = await bcrypt.compare(password, user.password);
//     if (!isValid) {
//       return NextResponse.json(
//         { success: false, message: 'Invalid credentials' },
//         { status: 401 }
//       );
//     }

//     // Generate JWT
//     const token = signToken({ id: user.id, email: user.email });
//     console.log('Generated token:', token); // Debug log

//     // Set cookie and return response
//     const response = NextResponse.json({
//       success: true,
//       message: 'Login successfulFuseToken successful',
//       redirect: '/admin/dashboard',
//     });
//     response.cookies.set('token', token, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === 'production',
//       sameSite: 'strict',
//       path: '/',
//       maxAge: 60 * 60,
//     });
//     console.log('Cookie set:', { name: 'token', value: token }); // Debug log

//     return response;
//   } catch (error) {
//     console.error('[Login Error]', error);
//     return NextResponse.json(
//       { success: false, message: 'Server error' },
//       { status: 500 }
//     );
//   }
// }

import { db } from '@/lib/db';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';
import { createToken } from '@/lib/auth';

export async function POST(req) {
  const { email, password } = await req.json();

  const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
  const user = rows[0];

  if (!user) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 401 });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
  }

  const token = createToken({ id: user.id, email: user.email });

  const response = NextResponse.json({ success: true });

  response.cookies.set('token', token, {
    httpOnly: true,
    path: '/',
    maxAge: 60 * 60, // 1 hour
  });

  return response;
}










