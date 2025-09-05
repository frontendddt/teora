 "use client"
import Styles from "./header.module.css";
import Link from "next/link";
import { FileText, Search } from 'lucide-react';
 import { TiThMenu } from "react-icons/ti";
import { useEffect, useState } from "react";
const Header = () =>{

    // const navList = ([
    //     { navName:'About', navLink: '/about',
    //      id: 1,
    //      submenu: [
    //             { name: 'page 1', link: '/admin/add-page' },
    //             { name: 'page 2', link: '/admin/users' },
    //         ]
    //     },
    //     { navName:'Why Us', navLink: '/whyus', id: 2,
    //          submenu: [ ]
    //     },
    //     { navName:'SOLAQ', navLink: '/solaq', sup:'/sup', id: 3,  submenu: [ ]},
    //     { navName:'Solutions', navLink: '/solutions', id: 4,  submenu: [ ]},
    //     { navName:'Contact', navLink: '/contact',
    //          id: 5,
    //          submenu: [ ]
    //     },
    //     { navName:'Awards & Media', navLink: '/awardsmedia', id: 6,  submenu: [ ]}, 
    // ]);
      const [navList, setNavList] = useState([]);

        useEffect(() => {
            const fetchMenu = async () => {
            try {
                const res = await fetch("/api/header");
                const data = await res.json();
                setNavList(data);
            } catch (err) {
                console.error("Failed to load header menu:", err);
            }
            };

            fetchMenu();
        }, []);
 
   return(
          <header className="sticky-top m-0 tectureBg" style={{
            zIndex:'99999', 
           }}>
               <div className={`${Styles.header_container}`}>
                     <nav className={`navbar navbar-expand-lg ${Styles.navvbarWidth}`}>
                        <div className={`container position-relative ${Styles.nav_container}`}>
                            <Link className="navbar-brand" href="/">  
                                <img src="/logo/teora-logo2.png" 
                                      alt="eora company logo"
                                      width={170}
                                      className="company_logo"
                                ></img>
                            </Link> 

                             <div className={`d-flex align-items-center ${Styles.navMenu} `}>
                                <span className="navbar-toggler navbar-menu"  data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                                  <span className="d-flex gap-1 align-items-center purpleColor">
                                         <TiThMenu/>
                                          <span className="menuText">Menu</span>
                                  </span>
                               </span>
                                <div className="offcanvas offcanvas-end menu_sidebar" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                                    <div className="offcanvas-header">
                                        <div className="offcanvas-title" id="offcanvasNavbarLabel">
                                                 <Link className="navbar-brand" href="/">  
                                                    <img src="/logo/teora-logo2.png" 
                                                        alt="eora company logo"
                                                        width={170}
                                                        className="company_logo"
                                                    ></img>
                                                </Link> 
                                        </div>
                                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                    <div className="offcanvas-body">
                                        <ul className={`navbar-nav justify-content-end flex-grow-1 pe-3 ${Styles.navbar_list}`}>
                                           
                                               {
                                                // navList.map((items) =>{
                                                //     return <li className="nav-item" key={items.id}> 
                                                //         <Link className="nav-link" href={`${items.navLink}`}>{items.navName} {items.sup ? <sup>™</sup> : ''}</Link>
                                                //     </li> 
                                                // })
                                               }

                                             {      
                                         
                                                // navList.map((item) => (
                                                //     item.submenu?.length > 0 ? (
                                                //         <li className={`nav-item dropdown dropdown_hover `} key={item.id}>
                                                //             <Link
                                                //                 className="nav-link dropdown-toggle"
                                                //                 href={item.navLink}
                                                //                 role="button"   
                                                //             >
                                                //                 {item.navName}
                                                //             </Link>
                                                //            <ul className={`dropdown-menu custom_dropdown`}>
                                                //                 {
                                                //                     item.submenu.map((subItem, subIndex) => (
                                                //                         <li key={subIndex}>
                                                //                             <Link className="dropdown-item" href={subItem.link}>
                                                //                                 {subItem.name}
                                                //                             </Link>
                                                //                         </li>
                                                //                     ))
                                                //                 }
                                                //             </ul>
                                                //         </li>
                                                //         ) : (
                                                //         <li className="nav-item" key={item.id}>
                                                //             <Link className="nav-link" href={item.navLink}>
                                                //                 {item.navName} {item.sup ? <sup>™</sup> : ''}
                                                //             </Link>
                                                //         </li>
                                                //         )
                                                // )) 
                                             }
                                             {navList.map((item) => (
                                              
                                                        item.submenu?.length > 0 ? (
                                                            <li className={`nav-item dropdown dropdown_hover`} key={item.id}>
                                                                <Link
                                                                    className="nav-link dropdown-toggle"
                                                                    href={item.navLink}
                                                                    role="button"
                                                                >
                                                                    {item.navName} {item.has_sup ? <sup>™</sup> : ''}
                                                                </Link>
                                                                <ul className={`dropdown-menu custom_dropdown`}>
                                                                    {item.submenu.map((subItem, subIndex) => (
                                                                    <li key={subIndex}>
                                                                        <Link className="dropdown-item" href={subItem.link}>
                                                                            {subItem.name}
                                                                        </Link>
                                                                    </li>
                                                                    ))}
                                                                </ul>
                                                            </li>
                                                        ) : (
                                                            <li className="nav-item" key={item.id}>
                                                                <Link className="nav-link" href={item.navLink}>
                                                                    {item.navName} {item.has_sup == 1 ? <sup>™</sup> : ''}
                                                                </Link>
                                                            </li>
                                                        )
                                                ))}
                                                
                                        </ul>  
                                    </div> 
                                </div>

                                <div className={`d-flex align-items-center ${Styles.teora_documents}`}>
                                    <button className={` ${Styles.teora_hub}`} >
                                          <FileText className={Styles.tora_hub_doc} /><span>Teora Hub</span> 
                                    </button>

                                    <button className={`d-flex align-items-center justify-content-center ${Styles.header_search}`}>
                                        <span><Search strokeWidth={3}/></span>
                                    </button>
                                </div>
                                  
                             </div>

                        </div>
                    </nav> 
               </div>
          </header>
   )
}
export default Header;