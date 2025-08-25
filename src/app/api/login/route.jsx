 import { NextResponse } from "next/server";

export async function POST(request) {
    const {email, password} = await request.json();

    if(email === "admin@gmail.com" && password === "admin123"){
        const response = NextResponse.json({success: true});

        response.cookies.set('isAdmin', 'true', {
             httpOnly: true,
             secure: true,
             path: '/',
             maxAge: 60 * 60,
        });
        return response;
    }
 
     return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
}