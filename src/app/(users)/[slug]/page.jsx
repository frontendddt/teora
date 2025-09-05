import { db } from '@/lib/db';

export async function generateStaticParams() {
  const [pages] = await db.query('SELECT slug FROM pages');
  return pages.map(p => ({ slug: p.slug }));
}

// export async function generateMetadata({ params }) {
//   const [row] = await db.query('SELECT meta_title, meta_description FROM pages WHERE slug = ?', [params.slug]);
//   if (row.length === 0) return { title: 'Not Found' };
//   const page = row[0];
//   return { title: page.meta_title, description: page.meta_description };
// } 


// export default async function Page({ params }) {
//   const [row] = await db.query('SELECT title, banner, content FROM pages WHERE slug = ?', [params.slug]);
//   if (row.length === 0) return <div className='section-space-2 purpleColor text-center'>
//       <h2>404 - Page Not Found <span style={{fontSize:'50px'}}>&#128532;</span></h2>
//   </div>;

//   const page = row[0];
//   return (
//     <section className='corporateBg purpleColor w-100'>
//         <div>
//             {
//             page.banner && <img src={page.banner}
//             alt="Banner"
//             style={{ width: '100%', height: '600px',objectFit: 'contain' }} />
//           } 
//         </div>
        
//         <div className="container section-space-2">
//             <h1>{page.title}</h1> 
//             <div className='w-100'>
//                 <div className='' dangerouslySetInnerHTML={{ __html: page.content }}  style={{listStyle:'auto'}}/> 
//             </div>
//        </div>
//     </section>
    
//   );
// }

export async function generateMetadata({ params }) {
  const resolvedParams = await params; // Await here!
  const [row] = await db.query('SELECT meta_title, meta_description FROM pages WHERE slug = ?', [resolvedParams.slug]);
  
  if (row.length === 0) return { title: 'Not Found' };
  
  const page = row[0];
  return { title: page.meta_title, description: page.meta_description };
}

export default async function Page({ params }) {
  const resolvedParams = await params;  // Await params here
  const [row] = await db.query('SELECT title, banner, content FROM pages WHERE slug = ?', [resolvedParams.slug]);
  
  if (row.length === 0) return (
    <div className='section-space-2 purpleColor text-center'>
      <h2>404 - Page Not Found <span style={{fontSize:'50px'}}>&#128532;</span></h2>
    </div>
  );

  const page = row[0];
  return (
    <section className='corporateBg purpleColor w-100'>
      <div>
        {page.banner && <img src={page.banner}
          alt="Banner"
          style={{ width: '100%', height: '600px', objectFit: 'contain' }} />}
      </div>
      
      <div className="container section-space-2">
        <h1>{page.title}</h1> 
        <div className='w-100'>
          <div className='' dangerouslySetInnerHTML={{ __html: page.content }} style={{ listStyle: 'auto' }}/> 
        </div>
      </div>
    </section>
  );
}
