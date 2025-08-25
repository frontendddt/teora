
import {NextResponse } from 'next/server';

const protectedPaths = ['/dashboard'];

export function middleware(request) {
  const { pathname } = request.nextUrl;

  const isProtected = protectedPaths.includes(pathname);
  const isAdmin = request.cookies.get('isAdmin')?.value === 'true';

  if (isProtected && !isAdmin) {
    const loginUrl = new URL('/login', request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}
