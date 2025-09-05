// import { writeFile } from 'fs/promises';
// import path from 'path';
// import { NextResponse } from 'next/server';

// export async function POST(req) {

//   const data = await req.formData();
//   const file = data.get('upload');

//   if (!file) {
//     return NextResponse.json({ message: 'No file uploaded' }, { status: 400 });
//   }

//   const bytes = await file.arrayBuffer();
//   const buffer = Buffer.from(bytes);
//   const filename = `${Date.now()}-${file.name}`;
//   const uploadPath = path.join(process.cwd(), 'public', 'uploads', filename);

//   await writeFile(uploadPath, buffer);

//   return NextResponse.json({ url: `/uploads/${filename}` });
//}

import { promises as fs } from 'fs';
import path from 'path';

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get('upload'); // CKEditor sends "upload"

    if (!file || typeof file === 'string') {
      return new Response(JSON.stringify({ error: 'No file uploaded' }), { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const timestamp = Date.now();
    const safeName = file.name.replace(/[^a-z0-9.-]/gi, '_').toLowerCase();
    const fileName = `${timestamp}_${safeName}`;
    const filePath = path.join(process.cwd(), 'public', 'uploads', fileName);

    await fs.mkdir(path.dirname(filePath), { recursive: true });
    await fs.writeFile(filePath, buffer);

    return new Response(JSON.stringify({ url: `/uploads/${fileName}` }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    console.error('CKEditor upload error:', err);
    return new Response(JSON.stringify({ error: 'Upload failed' }), { status: 500 });
  }
}
