// import { NextResponse } from 'next/server';
// import mysql from 'mysql2/promise';

// export async function PATCH(request, { params }) {
//   const { id } = params;
//   const body = await request.json();
//   const { is_visible, label } = body;

//   const db = await mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//   });

//   try {
//     // Update visibility or label
//     if (typeof is_visible !== 'undefined') {
//       await db.execute('UPDATE footer_links SET is_visible = ? WHERE id = ?', [is_visible ? 1 : 0, id]);
//     }

//     if (typeof label !== 'undefined') {
//       await db.execute('UPDATE footer_links SET label = ? WHERE id = ?', [label, id]);
//     }

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ error: 'Database update failed' }, { status: 500 });
//   }
// }

import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function PATCH(request, { params }) {
  const id = params.id;
  const body = await request.json();

  try {
    await db.query(`UPDATE footer_links SET ? WHERE id = ?`, [body, id]);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
