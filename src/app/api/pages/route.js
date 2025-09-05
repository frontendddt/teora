// /app/api/pages/route.js

import { db } from '@/lib/db';

export async function GET() {
  try {
    const [pages] = await db.query('SELECT slug, title, menu_position FROM pages');
    return new Response(JSON.stringify({ pages }), { status: 200 });
  } catch (error) {
    console.error('GET all pages error:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch pages' }), { status: 500 });
  }
}

export async function POST(request) {
  try {
    const {
      title,
      slug,
      metaTitle,
      metaDescription,
      banner,
      content,
      menuPosition,
      footerOptions
    } = await request.json();

    await db.execute(
      `INSERT INTO pages
       (title, slug, meta_title, meta_description, banner, content, menu_position, footer_navigation, footer_solution, footer_aboutus)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        title,
        slug,
        metaTitle,
        metaDescription,
        banner,
        content,
        menuPosition,
        footerOptions.footerNavigation,
        footerOptions.footerSolution,
        footerOptions.footerAboutus
      ]
    );

    return new Response(JSON.stringify({ success: true }), { status: 201 });
  } catch (error) {
    console.error('POST create page error:', error);
    return new Response(JSON.stringify({ error: 'Create failed' }), { status: 500 });
  }
}
