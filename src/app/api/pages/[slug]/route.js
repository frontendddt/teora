
// import { db } from '@/lib/db';

// export async function POST(request) {
//   const {
//     title,
//     slug,
//     metaTitle,
//     metaDescription,
//     banner,
//     content,
//     menuPosition,
//     footerOptions
//   } = await request.json();

//   await db.execute(
//     `INSERT INTO pages
//      (title, slug, meta_title, meta_description, banner, content, menu_position, footer_navigation, footer_solution, footer_aboutus)
//      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
//     [
//       title,
//       slug,
//       metaTitle,
//       metaDescription,
//       banner,
//       content,
//       menuPosition,
//       footerOptions.footerNavigation,
//       footerOptions.footerSolution,
//       footerOptions.footerAboutus
//     ]
//   );  
//   return new Response(JSON.stringify({ success: true }), { status: 200 });
// }

// export async function GET() {
//   const [pages] = await db.query('SELECT slug, title, menu_position FROM pages');
//   return new Response(JSON.stringify({ pages }), { status: 200 });
// }
 
// /app/api/pages/[slug]/route.js

import { db } from '@/lib/db';

export async function GET(_, { params }) {
  const slug = params.slug;
  try {
    const [rows] = await db.query('SELECT * FROM pages WHERE slug = ?', [slug]);
    if (rows.length === 0) {
      return new Response(JSON.stringify({ error: 'Page not found' }), { status: 404 });
    }
    return new Response(JSON.stringify(rows[0]), { status: 200 });
  } catch (error) {
    console.error('GET error:', error);
    return new Response(JSON.stringify({ error: 'Fetch failed' }), { status: 500 });
  }
}

export async function PUT(request, { params }) {
  const slug = params.slug;
  try {
    const {
      title,
      metaTitle,
      metaDescription,
      banner,
      content,
      menuPosition,
      footerOptions
    } = await request.json();

    await db.execute(
      `UPDATE pages SET 
        title = ?, 
        meta_title = ?, 
        meta_description = ?, 
        banner = ?, 
        content = ?, 
        menu_position = ?, 
        footer_navigation = ?, 
        footer_solution = ?, 
        footer_aboutus = ? 
      WHERE slug = ?`,
      [
        title,
        metaTitle,
        metaDescription,
        banner,
        content,
        menuPosition,
        footerOptions.footerNavigation,
        footerOptions.footerSolution,
        footerOptions.footerAboutus,
        slug
      ]
    );

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('PUT error:', error);
    return new Response(JSON.stringify({ error: 'Update failed' }), { status: 500 });
  }
}

export async function DELETE(_, { params }) {
  const slug = params.slug;
  try {
    await db.execute('DELETE FROM pages WHERE slug = ?', [slug]);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('DELETE error:', error);
    return new Response(JSON.stringify({ error: 'Delete failed' }), { status: 500 });
  }
}
