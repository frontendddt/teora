import Link from "next/link";
import { RiMenu3Fill, RiMenuSearchLine } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { PiSlidersHorizontal } from "react-icons/pi";
import { MdOutlineDashboard } from "react-icons/md";

const Sidebar = () =>{
    return(
        <>  
            <aside className="left_sidebar purpleBg">
                <div className="header_logos corporateBg d-flex justify-content-between align-items-center">
                    <img 
                        src="/logo/teora-logo2.png"
                        width={120}
                    />
                    <span className="sidemenu_btn"> 
                            <RiMenu3Fill/> 
                    </span>
                </div>

                <div className="sidebar_menu">
                    <ul className="dashboard_menu_list">

                         <li> 
                            <Link href="/admin/dashboard">
                                <div className="d-flex gap-2 align-items-center">
                                    <IoMdAdd/> 
                                    <span>Dashboard</span>
                                </div>
                            </Link>
                        </li>
                        <li> 
                            <Link href="/admin/pageadd">
                                <div className="d-flex gap-2 align-items-center">
                                    <IoMdAdd/> 
                                    <span>Page Add</span>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/admin/sliders">
                                    <div className="d-flex gap-2 align-items-center">
                                    <PiSlidersHorizontal /> 
                                    <span>Sliders</span>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/admin/header-menu"> 
                                <div className="d-flex gap-2 align-items-center">
                                    <RiMenuSearchLine/> 
                                    <span>Header Menu</span>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/admin/footer-menu">
                                    <div className="d-flex gap-2 align-items-center">
                                    <RiMenuSearchLine/> 
                                    <span>Footer Menu</span>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>  
            </aside> 
        </>
    )
}
export default Sidebar;