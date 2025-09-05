
// "use client"
 
// import MenuCard from '@/component_admin/MenuCard';
// const Headermenu = () =>{

//     return(
//         <>
//             <section>
//                     <h4 className="heading_titles purpleColor">Header Menu</h4>
//                     <div className="row">
//                         <div className="col-12"> 
//                               <MenuCard/>
//                          </div>
//                     </div>
//             </section>
        
//         </>
//     )
// }
// export default Headermenu;

 
import HeaderMenu from '@/component_admin/HeaderMenu';
import { db } from '@/lib/db';

export default async function HeaderMenuPage() {
  const [menu] = await db.query(`
    SELECT id, label, url, parent_id, is_visible, position FROM header_links ORDER BY position
  `);

  // Group parent and child (submenu)
  const parents = menu.filter(link => link.parent_id === null);
  const data = parents.map(parent => ({
    ...parent,
    submenu: menu.filter(link => link.parent_id === parent.id),
  }));

  return (
    <section>
      <h4 className="heading_titles purpleColor">Header Menu</h4>
      <div className="row">
     
          <div className="col-12" > 
            <HeaderMenu sections={data}/>
          </div>
      
      </div>
    </section>
  );
}
