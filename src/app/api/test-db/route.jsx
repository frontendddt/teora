// pages/api/test-db.js
// app/(admin)/api/test-db/route.js
import { db } from '@/lib/db';

export async function GET() {
  try {
    const [rows] = await db.execute('SELECT NOW() AS now');
    return Response.json({ success: true, time: rows[0].now });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}

