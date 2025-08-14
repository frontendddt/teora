import Styles from "./header.module.css";
import Link from "next/link";
import { FileText, Search } from 'lucide-react';
 
// import logo from "/logo/teora-logo.png"

const Header = () =>{

    const navList = ([
        { navName:'About', navLink: '/about', id: 1},
        { navName:'Why Us', navLink: '/whyus', id: 2},
        { navName:'SOLAQ', navLink: '/solaq', sup:'/sup', id: 3},
        { navName:'Solutions', navLink: '/solutions', id: 4},
        { navName:'Contact', navLink: '/contact', id: 5},
        { navName:'Awards & Media', navLink: '/awardsmedia', id: 6},
    ]);

   return(
          <header className="sticky-top m-0" style={{zIndex:'99999'}}>
               <div className={`${Styles.header_container}`}>
                     <nav className="navbar navbar-expand-lg">
                        <div className={`container position-relative ${Styles.nav_container}`}>
                            <Link className="navbar-brand" href="/">  
                                <img src="/logo/teora-logo2.png" 
                                      alt="eora company logo"
                                      width={170}
                                ></img>
                            </Link> 

                             <div className="d-flex align-items-center">
                                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                                  <span className="navbar-toggler-icon"></span>
                               </button>
                                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                                    <div className="offcanvas-header">
                                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">logo</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                    <div className="offcanvas-body">
                                        <ul className={`navbar-nav justify-content-end flex-grow-1 pe-3 ${Styles.navbar_list}`}>
                                                
                                               {
                                                navList.map((items) =>{
                                                    return <li className="nav-item" key={items.id}> 
                                                        <Link className="nav-link" href={`${items.navLink}`}>{items.navName} {items.sup ? <sup>™</sup> : ''}</Link>
                                                    </li> 
                                                })
                                               }
                                                
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