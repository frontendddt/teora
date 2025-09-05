// import { promises as fs } from 'fs';
// import path from 'path';

// export async function POST(req) {
//   const data = await req.formData();
//   const banner = data.get('banner');
  
//   if (!banner || typeof banner === 'string') {
//     return new Response(JSON.stringify({ error: 'No file provided' }), { status: 400 });
//   }

//   const buffer = Buffer.from(await banner.arrayBuffer());
//   const fileName = `${Date.now()}_${banner.name}`;
//   const filePath = path.join(process.cwd(), 'public', 'uploads', fileName);

//   await fs.writeFile(filePath, buffer);
//   return new Response(JSON.stringify({ url: `/uploads/${fileName}` }), { status: 200 });
// }


// app/api/upload/route.js (or pages/api/upload.js if using pages directory)
import { writeFile } from 'fs/promises';
import path from 'path';
import { NextResponse } from 'next/server';

export async function POST(req) {

  const data = await req.formData();
  const file = data.get('upload');

  if (!file) {
    return NextResponse.json({ message: 'No file uploaded' }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const filename = `${Date.now()}-${file.name}`;
  const uploadPath = path.join(process.cwd(), 'public', 'uploads', filename);

  await writeFile(uploadPath, buffer);

  return NextResponse.json({ url: `/uploads/${filename}` });
}
