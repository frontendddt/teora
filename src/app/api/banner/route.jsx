// export const dynamic = 'force-dynamic';

// import { NextResponse } from 'next/server';
// import connectToDatabase from '@/lib/mongodb';
// import Banner from '@/models/Banner';

// export async function GET() {
//   await connectToDatabase();
//   const banner = await Banner.findOne(); 
//   return NextResponse.json({ banner });
// }

// export async function POST(request) {
//   try {
//     await connectToDatabase();

//     const body = await request.json();
//     const { title, subtitle, imageUrl } = body;

//     if (!title || !subtitle || !imageUrl) {
//       return NextResponse.json(
//         { success: false, message: 'Missing required fields' },
//         { status: 400 }
//       );
//     }

    
//     await Banner.deleteMany({}); 

//     const newBanner = new Banner({ title, subtitle, imageUrl });
//     await newBanner.save();

//     return NextResponse.json(
//       { success: true, message: 'Banner saved', banner: newBanner },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error('Error in POST /api/banner:', error.message);
//     return NextResponse.json(
//       { success: false, message: error.message },
//       { status: 500 }
//     );
//   }
// }


import { db } from '@/lib/db';
import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';

export async function GET() {
  try {
    const [rows] = await db.query('SELECT * FROM banners ORDER BY slider_number ASC');
    return NextResponse.json({ success: true, data: rows });
  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json({ success: false, message: 'Failed to fetch banners' }, { status: 500 });
  }
}

// export async function POST(req) {
//   try {
//     const formData = await req.formData();
//     const sliderNumber = parseInt(formData.get('slider_number'));
//     const heading = formData.get('heading'); 
    
//     const imageFields = ['image', 'image1', 'image2', 'image3', 'image4'];
//     const images = [];

//       for (const field of imageFields) {
//           const file = formData.get(field);
//         if (file && typeof file === 'object' && file.name) {
//           const buffer = Buffer.from(await file.arrayBuffer());
//           const filePath = path.join(process.cwd(), 'public', 'uploads', file.name);
//           await writeFile(filePath, buffer);  
//           images.push(`/uploads/${file.name}`); 
//         }
//       }
    
//     const [result] = await db.query(
//       `INSERT INTO banners (slider_number, heading, images)
//        VALUES (?, ?, ?)
//        ON DUPLICATE KEY UPDATE 
//         heading = VALUES(heading),  
//         images = VALUES(images)`,
//       [sliderNumber, heading, JSON.stringify(images)]
//     );

//     return NextResponse.json({ success: true, insertedId: result.insertId });
//   } catch (error) {
//     console.error('POST error:', error);
//     return NextResponse.json({ success: false, message: 'Failed to save banner' }, { status: 500 });
//   }
// }

 
export async function POST(req) {
  try {
    const formData = await req.formData();
    const sliderNumber = parseInt(formData.get('slider_number'));
    const heading = formData.get('heading');
    const banner = formData.get('banner');

    if (isNaN(sliderNumber)) {
      return NextResponse.json(
        { success: false, message: 'Missing slider number' },
        { status: 400 }
      );
    }

    let imagePath = null;

    if (banner && typeof banner === 'object' && banner.name) {
      const buffer = Buffer.from(await banner.arrayBuffer());
      const filePath = path.join(process.cwd(), 'public', 'uploads', banner.name);
      await writeFile(filePath, buffer);
      imagePath = `/uploads/${banner.name}`;
    }

    // Build dynamic SQL update
    const updateFields = [];
    const updateValues = [];

    if (heading) {
      updateFields.push('heading = ?');
      updateValues.push(heading);
    }

    if (imagePath) {
      updateFields.push('images = ?');
      updateValues.push(JSON.stringify([imagePath]));
    }

    if (updateFields.length === 0) {
      return NextResponse.json(
        { success: false, message: 'Nothing to update' },
        { status: 400 }
      );
    }

    updateValues.push(sliderNumber);  

    await db.query(
      `INSERT INTO banners (slider_number, heading, images)
       VALUES (?, ?, ?)
       ON DUPLICATE KEY UPDATE ${updateFields.join(', ')}`,
      [sliderNumber, heading || '', imagePath || '', ...updateValues]
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to save banner' },
      { status: 500 }
    );
  }
}