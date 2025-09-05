// import { NextResponse } from 'next/server';
// import mysql from 'mysql2/promise';

// export async function GET() {
//     const db = await mysql.createConnection({
//         host: process.env.DB_HOST,
//         user: process.env.DB_USER,
//         password: process.env.DB_PASSWORD,
//         database: process.env.DB_NAME,
//     });

//     console.log(db, 'db');

//     const [sections] = await db.execute('SELECT * FROM footer_sections ORDER BY position');
//     const [links] = await db.execute('SELECT * FROM footer_links WHERE is_visible = 1');

//     // Group links by section_id
//     const groupedSections = sections.map(section => ({
       
//         f_heading: section.title,
//         list: links
//             .filter(link => link.section_id === section.id)
//             // .map(link => ({ link: link.link, linkName: link.title }))
//             .map(link => ({ link: link.url, linkName: link.label })) 
//     }));

//     return NextResponse.json(groupedSections);
// }


// app/api/footer/route.js (or .ts)

import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

export async function GET(request) {
  try {
    const db = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    const [sections] = await db.execute('SELECT * FROM footer_sections ORDER BY position');
    const [links]    = await db.execute('SELECT * FROM footer_links WHERE is_visible = 1');

    const groupedSections = sections.map(section => ({
      f_heading: section.title,
      list: links
        .filter(link => link.section_id === section.id)
        .map(link => ({ link: link.url, linkName: link.label }))
    }));

    return NextResponse.json(groupedSections);
  } catch (err) {
    console.error('API /api/footer error:', err);
    return NextResponse.json({ error: err.message || 'Unknown Error' }, { status: 500 });
  }
}

