// import { NextResponse } from 'next/server';

// export function middleware(request) {
//   const isLoggedIn = request.cookies.get('admin-auth')?.value === 'true';

//   if (
//     request.nextUrl.pathname.startsWith('/dashboard') &&
// //    !isLoggedIn
//   ) {
//     return NextResponse.redirect(new URL('/login', request.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ['/admin/:path*'],
// };


// import { NextResponse } from 'next/server';

// export function middleware(request) {
//   const isLoggedIn = request.cookies.get('admin-auth')?.value === 'true';
//   const { pathname } = request.nextUrl;

//   // If accessing admin/dashboard but not logged in
//   if (pathname.startsWith('/dashboard') && !isLoggedIn) {
//     console.log(isLoggedIn, "isLoggedIn");
//     return NextResponse.redirect(new URL('/login', request.url));
//   }

//   if (pathname === '/login' && isLoggedIn) {
//     return NextResponse.redirect(new URL('/admin/dashboard', request.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ['/admin/:path*', '/login'],
// };



// import { NextResponse } from 'next/server';

// export function middleware(request) {
//   const isLoggedIn = request.cookies.get('admin-auth')?.value === 'true';
//   const { pathname } = request.nextUrl;

//   // 🔒 Redirect to login if user tries to access /dashboard without being logged in
//   if (pathname.startsWith('/dashboard') && !isLoggedIn) {
//     return NextResponse.redirect(new URL('/login', request.url));
//   }

//   // 🔁 If logged in, prevent access to /login and redirect to dashboard
//   if (pathname === '/login' && isLoggedIn) {
//     return NextResponse.redirect(new URL('/dashboard', request.url));
//   }

//   return NextResponse.next();
// }

// // Apply middleware only on /dashboard and /login
// export const config = {
//   matcher: ['/dashboard/:path*', '/login'],
// };
 

// middleware.js
// import { NextResponse } from 'next/server';

// export function middleware(request) {
//   const isLoggedIn = request.cookies.get('admin-auth')?.value === 'true';
//   const { pathname } = request.nextUrl;

//   if (pathname.startsWith('/dashboard') && !isLoggedIn) {
//     return NextResponse.redirect(new URL('/login', request.url));
//   }

//   if (pathname === '/login' && isLoggedIn) {
//     return NextResponse.redirect(new URL('/dashboard', request.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ['/dashboard/:path*', '/login'],
// };


// middleware.js
// import { NextResponse } from 'next/server';
// import { verifyToken } from '@/lib/jwt';

// export function middleware(request) {
//   const token = request.cookies.get('token')?.value;
//   const { pathname } = request.nextUrl;

//   console.log('[Middleware] Path:', pathname);
//   console.log('[Middleware] Token:', token);

//   const isAuthenticated = token && verifyToken(token);

//   if ((pathname === '/dashboard' || pathname.startsWith('/dashboard/')) && !isAuthenticated) {
//     console.log('[Middleware] Not authenticated, redirecting to /login');
//     return NextResponse.redirect(new URL('/login', request.url));
//   }

//   if (pathname === '/login' && isAuthenticated) {
//     console.log('[Middleware] User logged in, redirecting to /dashboard');
//     return NextResponse.redirect(new URL('/dashboard', request.url));
//   }
//   return NextResponse.next();
// }

// export const config = {
//   matcher: ['/dashboard', '/dashboard/:path*', '/login'],
// };



// // middleware.js
// import { NextResponse } from 'next/server';
// import { jwtVerify } from 'jose';

// const JWT_SECRET = process.env.JWT_SECRET;

// async function verifyToken(token) {
//   try {
//     const secret = new TextEncoder().encode(JWT_SECRET);
//     const { payload } = await jwtVerify(token, secret);
//     return payload;
//   } catch (err) {
//     return null;
//   }
// }

// export async function middleware(request) {
//   const token = request.cookies.get('token')?.value;
//   const { pathname } = request.nextUrl;

//   const user = token ? await verifyToken(token) : null;

//   if ((pathname === '/dashboard' || pathname.startsWith('/dashboard')) && !user) {
//     return NextResponse.redirect(new URL('/login', request.url));
//   }

//   if (pathname === '/login' && user) {
//     return NextResponse.redirect(new URL('/dashboard', request.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ['/login', '/dashboard', '/dashboard/:path*'],
// };



// import { NextResponse } from 'next/server';
// import { jwtVerify } from 'jose';

// const JWT_SECRET = process.env.JWT_SECRET;

// async function verifyToken(token) {
//   try {
//     const secret = new TextEncoder().encode(JWT_SECRET);
//     const { payload } = await jwtVerify(token, secret);
//     return payload;
//   } catch {
//     return null;
//   }
// }

// export async function middleware(request) {
//   const { pathname } = request.nextUrl;
//   const token = request.cookies.get('token')?.value;
//   const user = token ? await verifyToken(token) : null;

//   // Paths that are part of the admin panel
//   const isAdminPath = [
//     '/dashboard',
//     '/footer-menu',
//     '/header-menu',
//     '/pageadd',
//     '/sliders',
//     '/api',
//   ].some(path => pathname.startsWith(path));

//   const isLoginPage = pathname === '/login';

//   // Redirect unauthenticated users trying to access admin pages
//   if (isAdminPath && !user) {
//     return NextResponse.redirect(new URL('/login', request.url));
//   }

//   // Redirect logged-in users away from login page
//   if (isLoginPage && user) {
//     return NextResponse.redirect(new URL('/dashboard', request.url));
//   }

//   return NextResponse.next();
// }
// export const config = {
//   matcher: ['/:path*'],
// };




// import { NextResponse } from 'next/server';
// import jwt from 'jsonwebtoken';

// const JWT_SECRET = process.env.JWT_SECRET;

// export const config = {
//   matcher: ['/admin/:path*'],
//   runtime: 'nodejs',
// };

// export function middleware(request) {
//   const { pathname } = request.nextUrl;

//   if (pathname === '/admin/login') {
//     return NextResponse.next();
//   }

//   const token = request.cookies.get('token')?.value;
//   // if (!token) {
//   //   return NextResponse.redirect(new URL('/admin/login', request.url));
//   // }

//   try {
//     jwt.verify(token, JWT_SECRET);
//     return NextResponse.next();
//   } catch {
//     // return NextResponse.redirect(new URL('/admin/login', request.url));
//   }
// }
// /middleware.js

// import { NextResponse } from 'next/server';
// import { verifyToken } from '@/lib/jwt';

// export function middleware(request) {
//   const { pathname } = request.nextUrl;

//   // Allow access to /admin/login without authentication
//   if (pathname === '/admin/login') {
//     console.log('Middleware: Allowing /admin/login'); // Debug log
//     return NextResponse.next();
//   }

//   // Protect all other /admin/* routes
//   if (pathname.startsWith('/admin/')) {
//     const token = request.cookies.get('token')?.value;
//     console.log('Middleware: Checking token for', pathname, { token }); // Debug log

//     if (!token || !verifyToken(token)) {
//       console.log('Middleware: No valid token, redirecting to /admin/login'); // Debug log
//       return NextResponse.redirect(new URL('/admin/login', request.url));
//     }

//     console.log('Middleware: Token valid, proceeding'); // Debug log
//     return NextResponse.next();
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ['/admin/:path*'],
// };

import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

const secret = process.env.NEXTAUTH_SECRET;

export async function middleware(req) {
  const token = await getToken({ req, secret });
  const { pathname } = req.nextUrl;

  if (pathname.startsWith('/admin')) {
    if (pathname !== '/admin/login' && !token) {
      return NextResponse.redirect(new URL('/admin/login', req.url));
    }
    if (pathname === '/admin/login' && token) {
      return NextResponse.redirect(new URL('/admin/dashboard', req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
