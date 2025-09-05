import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const [rows] = await db.query(`SELECT * FROM header_links WHERE is_visible = 1 ORDER BY position`);

    // Group submenus under parents
    const menu = rows
      .filter(item => item.parent_id === null)
      .map(parent => ({
        id: parent.id,
        navName: parent.label,
        navLink: parent.url,
        has_sup:parent.has_sup,
        submenu: rows 
          .filter(child => child.parent_id === parent.id)
          .map(child => ({ name: child.label, link: child.url })),
      }));

    return NextResponse.json(menu);
  } catch (error) {
    console.error("Header menu fetch error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
