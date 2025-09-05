
// "use client"
//  import MenuCard from "@/component_admin/MenuCard";

// const FooterMenu = () =>{
      
//     return(
//         <>
//                <section>
//                     <h4 className="heading_titles purpleColor">Footer Menu</h4>
//                     <div className="row">
//                         <div className="col-12">
//                             <MenuCard title="Navigation" />
//                             <MenuCard title="Solutions" />
//                         </div>
//                     </div>
//                 </section>
//         </>
//     )
// }
// export default FooterMenu;

// app/admin/footer-menu/page.tsx

// app/admin/footer-menu/page.tsx

    // import FooterMenu from '@/component_admin/FooterMenu';
    // import { db } from '@/lib/db';

    // export default async function FooterMenuPage() {
    //     const [sections] = await db.query(`
    //         SELECT id, title, position FROM footer_sections ORDER BY position
    //     `);
    //     const [links] = await db.query(`
    //         SELECT id, label, url, section_id, position FROM footer_links
    //     `);

    //     const data = sections.map(sec => ({
    //         ...sec,
    //         links: links.filter(link => link.section_id === sec.id),
    //     }));

    // return <FooterMenu sections={data} />;
    // }

    import FooterMenu from '@/component_admin/FooterMenu';
    import { db } from '@/lib/db';

    export default async function FooterMenuPage() {
        try {
            const [sections] = await db.query(`
            SELECT id, title, position FROM footer_sections ORDER BY position
            `);

            const [links] = await db.query(`
            SELECT id, label, url, section_id, position, is_visible FROM footer_links
            `);

            const data = sections.map((sec) => ({
            ...sec,
            links: links.filter((link) => link.section_id === sec.id),
            }));

            return <FooterMenu sections={data} />;
        } catch (err) {
            console.error("Error loading footer menu:", err);
            return <div>Failed to load footer menu.</div>;
        }
        }

