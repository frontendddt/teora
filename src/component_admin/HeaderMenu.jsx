// import { MdOutlineEditNote } from "react-icons/md";
// import { RiDeleteBin6Line } from "react-icons/ri";
// import { Switch, Modal, Input } from "antd";
// export default function HeaderMenu (){
//     return(
//         <div className="parent">
//              <div className="card card_container mt-3">
//                     <h4 className="heading_titles purpleColor">Header Menu</h4>
//                     <div className="card-body">
//                         <table className="table tables_style">
//                         <thead>
//                             <tr>
//                             <th>#</th>
//                             <th>Menu Name</th>
//                             <th>URL</th>
//                             <th>Visible / Edit</th>
//                             </tr>
//                         </thead>
//                         <tbody>
                     
//                             <tr >
//                                 <td>1</td>
//                                 <td>About</td>
//                                 <td> url</td>
//                                 <td>
//                                 <div className="d-flex gap-3 justify-content-center align-items-center">
//                                     <span className="edit_menu">
//                                      <MdOutlineEditNote />
//                                     </span>
//                                     <div className="d-flex gap-2 purpleColor" style={{ width: "110px" }}>
//                                     <Switch
                                       
//                                     />
//                                     <span style={{ fontSize: "14px", fontWeight: "500" }}>
//                                          show
//                                     </span>
//                                     </div>
//                                 </div>
//                                 </td>
//                             </tr>
                   
//                         </tbody>
//                         </table>
//                     </div>
//                     <Modal
//                         title="Edit Menu Label" 
//                     >
//                         <Input />
//                     </Modal>
//             </div> 


//             <div className="card card_container mt-3">
//                     <h4 className="heading_titles purpleColor">Header Sub menu</h4>
//                     <div className="card-body">
//                         <table className="table tables_style">
//                         <thead>
//                             <tr>
//                             <th>#</th>
//                             <th>Parent Menu Name</th>
//                             <th>Sub menu</th>
//                             <th>URL</th>
//                             <th>Visible / Edit</th>
//                             </tr>
//                         </thead>
//                         <tbody>
                     
//                             <tr >
//                                 <td>1</td>
//                                 <td>About</td>
//                                 <td>page 1</td>
//                                 <td>url</td>
//                                 <td>
//                                 <div className="d-flex gap-3 justify-content-center align-items-center">
//                                     <span className="edit_menu">
//                                        <MdOutlineEditNote />
//                                     </span>
//                                     <div className="d-flex gap-2 purpleColor" style={{ width: "85px" }}>
//                                       <Switch  />
//                                       <span style={{ fontSize: "14px", fontWeight: "500" }}>
//                                            show
//                                       </span>
//                                     </div> 
//                                     <span className="delete_menu">
//                                         <RiDeleteBin6Line/>
//                                     </span>

//                                 </div>
//                                 </td>
//                             </tr>
                   
//                         </tbody>
//                         </table>
//                     </div>
//                     <Modal
//                         title="Edit Menu Label" 
//                     >
//                         <Input />
//                     </Modal>
//             </div> 

//         </div>
//     )
// };

"use client";

import { useState } from "react";
import { MdOutlineEditNote } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import {Switch, Modal, Input } from "antd";
 
export default function HeaderMenu({ sections }) {
  const [menuSections, setMenuSections] = useState(sections);
  const [editingLink, setEditingLink] = useState(null);
  const [editedLabel, setEditedLabel] = useState("");

  const toggleVisibility = async (id, current) => {
    const newVisible = !current;

    try{

     const res = await fetch(`/api/header-links/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ is_visible: newVisible }),
          });
         if (!res.ok) throw new Error("Failed to toggle visibility");

        // Update local state immediately
        setMenuSections((prev) =>
          prev.map((link) =>
            link.id === id
              ? { ...link, is_visible: newVisible }
              : {
                  ...link,
                  submenu: link.submenu?.map((sub) =>
                    sub.id === id ? { ...sub, is_visible: newVisible } : sub
                  ),
                }
          )
        );
          

    }catch(err){
      console.error(err);
    } 
 

  };

  const openEdit = (link) => {
    setEditingLink(link);
    setEditedLabel(link.label);
  };

  const saveEdit = async () => {

    try{ 
        const res = await fetch(`/api/header-links/${editingLink.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ label: editedLabel }),
          });
         if (!res.ok) throw new Error("Failed to update label");

             setMenuSections((prev) =>
                prev.map((link) =>
                  link.id === editingLink.id
                    ? { ...link, label: editedLabel }
                    : {
                        ...link,
                        submenu: link.submenu?.map((sub) =>
                          sub.id === editingLink.id ? { ...sub, label: editedLabel } : sub
                        ),
                      }
                )
              );
          setEditingLink(null);

    }catch(err){
         console.error(err);
    }

    await fetch(`/api/header-links/${editingLink.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ label: editedLabel }),
    });
    setEditingLink(null);
  
  };

  return (
    <div className="parent">
      {/* MAIN MENU */}
      <div className="card card_container mt-3">
        <h4 className="heading_titles purpleColor">Header Menu</h4>
        <div className="card-body">
          <table className="table tables_style">
            <thead>
              <tr>
                <th>#</th>
                <th>Menu Name</th>
                <th>URL</th>
                <th>Visible / Edit</th>
              </tr>
            </thead>
            <tbody>
              {menuSections.map((link, idx) => (
                <tr key={link.id}>
                  <td>{idx + 1}</td>
                  <td>{link.label}</td>
                  <td>{link.url}</td>
                  <td>
                    <div className="d-flex gap-3 justify-content-center align-items-center">
                      <span onClick={() => openEdit(link)} className="edit_menu">
                        <MdOutlineEditNote />
                      </span>
                      <div className="d-flex gap-2 purpleColor" style={{ width: "110px" }}>

                      { 
                        // <div className="form-check form-switch m-0">
                        //   <input
                        //     className="form-check-input"
                        //     type="checkbox"
                        //     role="switch"
                        //     id={`switch-${parent.id}`}
                        //      checked={link.is_visible}
                        //      onChange={() => toggleVisibility(link.id, link.is_visible)}
                        //   />
                        // </div> 
                      }
                      {
                         <Switch
                          checked={link.is_visible}
                          onChange={() => toggleVisibility(link.id, link.is_visible)}
                        />
                      }
                         

                       
                        <span style={{ fontSize: "14px", fontWeight: "500" }}>
                          {link.is_visible ? "Show" : "Hide"}
                        </span>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* SUB MENU */}
      <div className="card card_container mt-3">
        <h4 className="heading_titles purpleColor">Header Sub Menu</h4>
        <div className="card-body">
          <table className="table tables_style">
            <thead>
              <tr>
                <th>#</th>
                <th>Parent Menu</th>
                <th>Sub Menu</th>
                <th>URL</th>
                <th>Visible / Edit</th>
              </tr>
            </thead>
            <tbody>
              {menuSections?.map((parent) =>
                parent?.submenu?.map((sub, idx) => ( 
                  <tr key={sub.id}>
                    <td>{idx + 1}</td>
                    <td>{parent.label}</td>
                    <td>{sub.label}</td>
                    <td>{sub.url}</td>
                    <td>
                      <div className="d-flex gap-3 justify-content-center align-items-center">
                        <span onClick={() => openEdit(sub)} className="edit_menu">
                          <MdOutlineEditNote />
                        </span>
                        <div className="d-flex gap-2 purpleColor" style={{ width: "85px" }}>
                          <Switch
                            checked={sub.is_visible}
                            onChange={() => toggleVisibility(sub.id, sub.is_visible)}
                          />
                          <span style={{ fontSize: "14px", fontWeight: "500" }}>
                            {sub.is_visible ? "Show" : "Hide"}
                          </span>
                        </div>
                        <span className="delete_menu">
                          <RiDeleteBin6Line />
                        </span>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <Modal
        title="Edit Menu Label"
        open={!!editingLink}
        onOk={saveEdit}
        onCancel={() => setEditingLink(null)}
      >
        <Input value={editedLabel} onChange={(e) => setEditedLabel(e.target.value)} />
      </Modal>
    </div>
  );
}
