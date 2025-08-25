"use client";

import "@/styles/globals.css"
import "@/styles/adminGlobals.css"
import 'bootstrap/dist/css/bootstrap.min.css';
 import Sidebar from "@/component_admin/Siderbar";
import Link from "next/link";
import BootstrapClient from "@/components/bootstrap/BootstrapClient";
import { usePathname } from "next/navigation";
 import { CiLogout } from "react-icons/ci";

export default  function AdminLayout({children }) {

    const pathname = usePathname();
    const isLoginPage  =  pathname === "/login";

    return(  
        <html lang="en">
                <head>
                    
                </head>
                <body>
                    {!isLoginPage ? (
                        <div className="main_wrapper">
                            <Sidebar/>

                            <div className="page-wrapper">
                                <div className="logout_header header_logos corporateBg d-flex justify-content-end">
                                    <button className="logout_admin" type="button">  
                                        <CiLogout/>
                                        <span>Logout</span>
                                    </button>
                                </div>
                                <div className="content-wrapper"> {children} </div>
                            </div>
                        </div>
                    ): (
                        <main> {children} </main>
                    )}
                    <BootstrapClient />
                </body>
        </html>
    )
}   