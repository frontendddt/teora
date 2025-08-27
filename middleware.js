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

import { NextResponse } from 'next/server';

export function middleware(request) {
  const isLoggedIn = request.cookies.get('admin-auth')?.value === 'true';
  const { pathname } = request.nextUrl;

  // If accessing admin/dashboard but not logged in
  if (pathname.startsWith('/admin') && !isLoggedIn) {
    console.log(isLoggedIn, "isLoggedIn");
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // If logged in and trying to access /login — redirect to dashboard
  if (pathname === '/login' && isLoggedIn) {
    return NextResponse.redirect(new URL('/admin/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/login'],
};
